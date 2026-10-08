import { NextRequest, NextResponse } from 'next/server'
import { getPresentation, signupMode } from '@/data/presentations'

// /api/register — attendee sign-up for a presentation (2026-10-08, Susan).
//
// Two states, set per presentation in src/data/presentations.ts:
//   notify   — no date yet; the person asks to hear when one is scheduled.
//   register — a date and place are set; the person reserves a place.
//
// Through Kit's V4 API (KIT_API_KEY, the same key as /api/subscribe):
//   1. creates/updates the subscriber with first name, plus two Kit custom
//      fields (create them in Kit to keep them; Kit ignores unknown fields):
//        registration_presentation — the presentation's title
//        registration_event        — "when · where" (register only), for
//                                    use in the Kit confirmation email
//   2. tags them. notify → the presentation's notify tag. register → the
//      general registration tag (starts the one confirmation email) and
//      the tag for that specific date.
// Sign-ups are NEVER added to the Encounter Journal / newsletter form
// (KIT_FORM_ID): event registration stays separate (Susan, 2026-10-08).
//
// Missing settings: production reports failure before saving anything, so
// no one is stored untagged or told they're signed up when they aren't.
// Local development reports a placeholder success for page review.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Body = { name?: string; email?: string; presentation?: string }

const FAIL = "We couldn't complete your sign-up just now. Please try again in a moment."

async function kit(path: string, apiKey: string, payload: unknown) {
  const res = await fetch(`https://api.kit.com/v4${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Kit-Api-Key': apiKey },
    body: JSON.stringify(payload),
  })
  const text = await res.text()
  return { ok: res.ok, status: res.status, text }
}

export async function POST(req: NextRequest) {
  let b: Body
  try {
    b = await req.json()
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid request.' }, { status: 400 })
  }
  const name = (b.name || '').trim().slice(0, 120)
  const email = (b.email || '').trim()
  if (!name || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, message: 'Please add your name and a valid email address.' }, { status: 400 })
  }
  const p = b.presentation ? getPresentation(b.presentation) : undefined
  const mode = signupMode(p)
  if (!p || !p.signup || !mode) {
    return NextResponse.json({ ok: false, message: 'This presentation is not taking sign-ups.' }, { status: 400 })
  }

  const tagEnvs =
    mode === 'register'
      ? [p.signup.registerTagEnv, p.signup.event?.eventTagEnv].filter((v): v is string => Boolean(v))
      : [p.signup.notifyTagEnv]
  const apiKey = process.env.KIT_API_KEY
  const tagIds = tagEnvs.map((k) => process.env[k])
  const missing = [...(apiKey ? [] : ['KIT_API_KEY']), ...tagEnvs.filter((_, i) => !tagIds[i])]

  if (missing.length > 0) {
    if (process.env.NODE_ENV === 'production') {
      console.error(`[register] not set: ${missing.join(', ')} — sign-up refused, nothing saved`)
      return NextResponse.json({ ok: false, message: FAIL })
    }
    console.log('[register:placeholder]', { name, email, presentation: p.slug, mode, missing })
    return NextResponse.json({ ok: true, placeholder: true, mode })
  }

  const fields: Record<string, string> = { registration_presentation: p.title }
  if (mode === 'register' && p.signup.event) {
    fields.registration_event = `${p.signup.event.when} · ${p.signup.event.where}`
  }

  try {
    const up = await kit('/subscribers', apiKey!, { email_address: email, first_name: name, fields })
    if (!up.ok) {
      console.error('[register:kit] subscriber', up.status, up.text)
      return NextResponse.json({ ok: false, message: FAIL })
    }
    for (const tagId of tagIds) {
      const tag = await kit(`/tags/${tagId}/subscribers`, apiKey!, { email_address: email })
      if (!tag.ok) {
        console.error('[register:kit] tag', tagId, tag.status, tag.text)
        return NextResponse.json({ ok: false, message: FAIL })
      }
    }
  } catch (err) {
    console.error('[register:kit] network error', err)
    return NextResponse.json({ ok: false, message: FAIL })
  }

  console.log('[register] signed up', { email, presentation: p.slug, mode })
  return NextResponse.json({ ok: true, mode })
}
