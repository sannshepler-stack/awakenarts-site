import { NextRequest, NextResponse } from 'next/server'
import { getPresentation } from '@/data/presentations'

// /api/register — presentation registration (2026-10-05, Susan).
//
// Participant pathway: register → receive the Symbol Card by email →
// attend → encounter the workbook → continue with Going Further.
//
// What this route does, through Kit's V4 API (same keys as /api/subscribe):
//   1. creates/updates the subscriber, with first name and the
//      registration details as Kit custom fields
//      (registration_presentation, registration_kind, registration_dates,
//      registration_message — create these fields in Kit to keep them;
//      Kit ignores fields that don't exist)
//   2. adds them to the main form (KIT_FORM_ID)
//   3. tags them with the presentation's tag, when its env var is set
//      (e.g. KIT_TAG_GRISMERE = the numeric Kit tag ID). A Kit automation
//      on that tag sends the Symbol Card PDF — set up in Kit, not here.
// Missing settings: production reports failure (never a false success);
// local development reports a placeholder success so the page can be
// reviewed on localhost.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Body = { name?: string; email?: string; presentation?: string; kind?: string; dates?: string; message?: string }

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

  const apiKey = process.env.KIT_API_KEY
  const formId = process.env.KIT_FORM_ID
  if (!apiKey || !formId) {
    if (process.env.NODE_ENV === 'production') {
      console.error('[register] KIT_API_KEY/KIT_FORM_ID missing in production')
      return NextResponse.json({ ok: false, message: "We couldn't complete your registration just now. Please try again later." })
    }
    console.log('[register:placeholder]', { name, email, presentation: p?.slug, kind: b.kind })
    return NextResponse.json({ ok: true, placeholder: true })
  }

  const fields = {
    registration_presentation: p?.title || b.presentation || '',
    registration_kind: (b.kind || '').slice(0, 120),
    registration_dates: (b.dates || '').slice(0, 300),
    registration_message: (b.message || '').slice(0, 2000),
  }

  try {
    const up = await kit('/subscribers', apiKey, { email_address: email, first_name: name, fields })
    if (!up.ok) {
      console.error('[register:kit] subscriber', up.status, up.text)
      return NextResponse.json({ ok: false, message: "We couldn't complete your registration just now. Please try again in a moment." })
    }
    const form = await kit(`/forms/${formId}/subscribers`, apiKey, { email_address: email, referrer: req.headers.get('referer') || undefined })
    if (!form.ok) console.error('[register:kit] form', form.status, form.text)

    const tagId = p?.registration?.kitTagEnv ? process.env[p.registration.kitTagEnv] : undefined
    if (tagId) {
      const tag = await kit(`/tags/${tagId}/subscribers`, apiKey, { email_address: email })
      if (!tag.ok) {
        console.error('[register:kit] tag', tag.status, tag.text)
        return NextResponse.json({ ok: false, message: "We couldn't complete your registration just now. Please try again in a moment." })
      }
    } else if (p?.registration?.kitTagEnv) {
      console.error(`[register] ${p.registration.kitTagEnv} not set — no Symbol Card email will be triggered`)
    }
  } catch (err) {
    console.error('[register:kit] network error', err)
    return NextResponse.json({ ok: false, message: "We couldn't reach our registration service just now. Please try again in a moment." })
  }

  console.log('[register] registered', { email, presentation: p?.slug })
  return NextResponse.json({ ok: true })
}
