import { NextRequest, NextResponse } from 'next/server'

// /api/subscribe — server-side email capture for every AwakenArts signup
// form (the Encounter Journal gate on /encounters, and any future gated
// download or list opt-in). Kit (formerly ConvertKit) is used purely as
// the email-delivery/subscriber-database backend; visitors only ever see
// AwakenArts' own form markup (EmailGateDownload and friends) — this
// route is the one place that talks to Kit, via its V4 API.
//
// 2026-06-27: live-wired to Kit's V4 API
//   POST https://api.kit.com/v4/forms/{form_id}/subscribers
//   header: X-Kit-Api-Key
// Needs two env vars to go live:
//   KIT_API_KEY  — a V4 API key from Kit > Account Settings > Developer
//                  Settings > "V4 Keys" > Add a new key. (V3 API keys
//                  will NOT work against this V4 endpoint.)
//   KIT_FORM_ID  — the numeric ID of the Kit form subscribers should be
//                  added to. That form is never displayed/embedded to
//                  visitors; it only needs to exist in Kit so subscribers
//                  land somewhere (and can trigger a Kit sequence/tag if
//                  Susan sets one up). The ID is visible in the form's
//                  edit URL in the Kit dashboard, e.g.
//                  app.kit.com/forms/designers/<FORM_ID>/edit.
// Until both are set, this route is a placeholder: it validates the
// email and logs the signup server-side, but doesn't forward it
// anywhere. No code change is needed once the real values are added to
// the environment.
//
// Hard rule throughout: the email step must never block the download.
// A visitor asked for a free file, not for our list-provider integration
// to succeed -- so every code path below returns { ok: true } unless the
// email itself was invalid.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  let body: { email?: string; source?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid request.' }, { status: 400 })
  }

  const email = (body.email || '').trim()
  const source = (body.source || 'unknown').trim()

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, message: 'Please enter a valid email address.' },
      { status: 400 }
    )
  }

  const apiKey = process.env.KIT_API_KEY
  const formId = process.env.KIT_FORM_ID

  if (!apiKey || !formId) {
    console.log(`[subscribe:placeholder] ${email} (source: ${source}) — Kit not connected yet.`)
    return NextResponse.json({ ok: true, placeholder: true })
  }

  // Pass along where on the site this signup came from, when available,
  // so it shows up on the subscriber's record in Kit (handy for Susan to
  // see "Encounters Journal" vs. any future gate without extra setup).
  const referrer = req.headers.get('referer') || undefined

  try {
    const res = await fetch(`https://api.kit.com/v4/forms/${formId}/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Kit-Api-Key': apiKey,
      },
      body: JSON.stringify({ email_address: email, referrer }),
    })

    if (!res.ok) {
      const text = await res.text()
      console.error('[subscribe:kit] request failed', res.status, text, '(source:', source, ')')
      return NextResponse.json({ ok: true, listError: true })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[subscribe:kit] request error', err)
    return NextResponse.json({ ok: true, listError: true })
  }
}
