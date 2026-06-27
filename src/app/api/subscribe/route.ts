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
// 2026-06-27 update, per Susan: production was showing the download
// success screen even though Kit had zero subscribers — because every
// code path below used to swallow Kit's response and always return
// { ok: true }. That made it impossible to tell a real success from a
// silent failure. Per Susan's explicit instruction, this route now
// reports the *actual* outcome of the Kit call, and EmailGateDownload
// only shows its success state / fires the download once this route
// confirms `subscribed: true`. Full error detail (status + Kit's
// response body) is logged server-side via console.error so failures
// show up in Vercel's Runtime Logs (Project → Logs, or `vercel logs`),
// and a short, safe summary is returned to the client so the form can
// tell the visitor something went wrong and let them retry.

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

  // Dev-only fallback: with no keys configured at all (e.g. a fresh local
  // checkout with no .env.local yet), there's nothing real to confirm, so
  // we let the form proceed as if subscribed. This should never trigger
  // in production once KIT_API_KEY/KIT_FORM_ID are set on Vercel — if it
  // does, that itself is the bug (the env vars aren't reaching the
  // running function; see the log line below).
  if (!apiKey || !formId) {
    console.log(
      `[subscribe:placeholder] ${email} (source: ${source}) — KIT_API_KEY/KIT_FORM_ID not set in this environment (apiKey present: ${!!apiKey}, formId present: ${!!formId}).`
    )
    return NextResponse.json({ ok: true, subscribed: false, placeholder: true })
  }

  // Pass along where on the site this signup came from, when available,
  // so it shows up on the subscriber's record in Kit (handy for Susan to
  // see "Encounters Journal" vs. any future gate without extra setup).
  const referrer = req.headers.get('referer') || undefined

  let kitRes: Response
  try {
    kitRes = await fetch(`https://api.kit.com/v4/forms/${formId}/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Kit-Api-Key': apiKey,
      },
      body: JSON.stringify({ email_address: email, referrer }),
    })
  } catch (err) {
    console.error('[subscribe:kit] network error reaching api.kit.com', err, '(source:', source, ')')
    return NextResponse.json({
      ok: false,
      subscribed: false,
      message: "We couldn't reach our list provider just now. Please try again in a moment.",
    })
  }

  const rawBody = await kitRes.text()
  let parsedBody: unknown = null
  try {
    parsedBody = rawBody ? JSON.parse(rawBody) : null
  } catch {
    // Kit's error responses are normally JSON; fall back to the raw text
    // if not so we still log something useful.
  }

  if (!kitRes.ok) {
    console.error('[subscribe:kit] Kit rejected the subscriber', {
      status: kitRes.status,
      formId,
      email,
      source,
      body: parsedBody ?? rawBody,
    })
    const message =
      kitRes.status === 401
        ? "Our list provider rejected the request (invalid or revoked API key)."
        : kitRes.status === 404
        ? "Our list provider couldn't find that form — check the Form ID."
        : kitRes.status === 422
        ? "Our list provider couldn't process that email address."
        : "We couldn't add you to the list just now. Please try again in a moment."
    return NextResponse.json({ ok: false, subscribed: false, kitStatus: kitRes.status, message })
  }

  console.log('[subscribe:kit] subscriber added to Kit', { email, source, formId })
  return NextResponse.json({ ok: true, subscribed: true })
}

// TEMPORARY DIAGNOSTIC — 2026-06-27. Production was returning 404 "form
// not found" for KIT_FORM_ID=9618788. This GET handler calls Kit's own
// "List forms" endpoint with the same KIT_API_KEY so we can see the real
// form id(s) Kit has on file for this account, instead of guessing.
// Returns only form id/name/type/archived — no API key, no subscriber
// data. Remove this handler once the correct KIT_FORM_ID is confirmed
// and set in Vercel.
export async function GET() {
  const apiKey = process.env.KIT_API_KEY
  if (!apiKey) {
    return NextResponse.json({ ok: false, message: 'KIT_API_KEY not set in this environment.' })
  }
  try {
    const res = await fetch('https://api.kit.com/v4/forms?status=all', {
      headers: { 'X-Kit-Api-Key': apiKey },
    })
    const text = await res.text()
    let parsed: unknown = null
    try {
      parsed = text ? JSON.parse(text) : null
    } catch {
      // leave parsed as null, fall back to raw text below
    }
    return NextResponse.json({ status: res.status, body: parsed ?? text })
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) })
  }
}
