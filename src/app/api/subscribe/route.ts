import { NextRequest, NextResponse } from 'next/server'

// /api/subscribe — server-side email capture for gated free downloads
// (e.g. the AwakenArts Encounter Journal on /encounters).
//
// 2026-06-27: built ahead of the actual list-provider connection. Susan is
// setting up a ConvertKit account separately and will provide
// CONVERTKIT_API_KEY + CONVERTKIT_FORM_ID once it exists. Until those env
// vars are set, this route is a placeholder: it validates the email and
// logs the signup server-side, but doesn't forward it anywhere. The moment
// the real keys are added to the environment (no code change needed),
// it starts calling ConvertKit for real.
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

  const apiKey = process.env.CONVERTKIT_API_KEY
  const formId = process.env.CONVERTKIT_FORM_ID

  if (!apiKey || !formId) {
    console.log(
      `[subscribe:placeholder] ${email} (source: ${source}) — ConvertKit not connected yet.`
    )
    return NextResponse.json({ ok: true, placeholder: true })
  }

  try {
    const res = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ api_key: apiKey, email }),
    })

    if (!res.ok) {
      const text = await res.text()
      console.error('[subscribe:convertkit] request failed', res.status, text)
      return NextResponse.json({ ok: true, listError: true })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[subscribe:convertkit] request error', err)
    return NextResponse.json({ ok: true, listError: true })
  }
}
