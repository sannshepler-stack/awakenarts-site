'use client'

// EmailGateDownload — reusable "enter your email, get the file instantly"
// component. Built 2026-06-27 for the free AwakenArts Encounter Journal on
// /encounters, but written generic enough (props-driven) to reuse on other
// pages later (Collection, Workshops, etc.) for other free downloads.
//
// Design intent: instant download, gated by email and confirmed signup.
//
// 2026-06-27 update, per Susan: the success screen (and the download it
// triggers) now only appears once /api/subscribe confirms Kit actually
// created the subscriber (`subscribed: true`) — this supersedes the
// earlier "never block the download" rule, after production was found
// showing success while Kit had zero subscribers. If the subscribe call
// fails, the form shows an error and lets the visitor retry instead of
// silently handing over the file. The one exception is local dev with no
// Kit keys configured at all (`placeholder: true`), where there's
// nothing real to confirm yet.
//
// Reuses the site's existing global form styles (.form-field, .btn-submit,
// .form-note, .form-thanks in globals.css) rather than inventing new ones —
// those were already built (for the previously-unwired SignupForm
// component) for exactly this kind of cream-background form.

import { useRef, useState } from 'react'

type Status = 'idle' | 'submitting' | 'done'

type Props = {
  /** Path to the file under /public, e.g. "/files/free/Thing.pdf" */
  pdfHref: string
  /** Filename suggested to the browser's download dialog */
  fileName: string
  /** Tag identifying which offer this is (passed to /api/subscribe, e.g. for Kit tagging later) */
  source: string
  /** What to call the file in the fallback link, e.g. "the Journal" — keep it lowercase/no article if you want "your file" phrasing instead */
  itemLabel?: string
  submitLabel?: string
  thanksText?: string
  note?: string
}

export default function EmailGateDownload({
  pdfHref,
  fileName,
  source,
  itemLabel = 'your file',
  submitLabel = 'Send Me the Download →',
  thanksText = "You're on the list — your download is on its way.",
  note = 'No selling. No noise. Only what the work requires.',
}: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')
  const downloadRef = useRef<HTMLAnchorElement>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    const trimmed = email.trim()
    if (!trimmed) {
      setError('Please enter your email address.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('That doesn’t look like a valid email address.')
      return
    }

    setStatus('submitting')

    let data: { ok?: boolean; subscribed?: boolean; placeholder?: boolean; message?: string }
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed, source }),
      })
      data = await res.json().catch(() => ({ ok: false }))
    } catch {
      setStatus('idle')
      setError("We couldn't reach the server just now. Please try again.")
      return
    }

    // Only show success (and fire the download) once Kit has actually
    // confirmed the subscriber, or we're in the no-keys-configured dev
    // placeholder. Anything else is a real failure — surface it and let
    // the visitor retry rather than silently handing over the file.
    if (!data.ok || (!data.subscribed && !data.placeholder)) {
      setStatus('idle')
      setError(data.message || "We couldn't add you to the list just now. Please try again.")
      return
    }

    setStatus('done')
    // A same-page <a download> click triggered from this submit handler
    // runs on the same user gesture, so browsers don't treat it as a
    // blocked popup -- this is the standard pattern for an "instant"
    // gated download.
    requestAnimationFrame(() => downloadRef.current?.click())
  }

  if (status === 'done') {
    return (
      <div className="form-thanks">
        <p>{thanksText}</p>
        <a ref={downloadRef} href={pdfHref} download={fileName} style={{ display: 'none' }} />
        <p style={{ marginTop: '0.85rem' }}>
          <a
            href={pdfHref}
            download={fileName}
            style={{
              fontSize: 'var(--link-size)',
              fontWeight: 'var(--link-weight)',
              letterSpacing: 'var(--link-tracking)',
              color: 'var(--gold)',
              textDecoration: 'underline',
            }}
          >
            If your download doesn&rsquo;t begin automatically, download {itemLabel} here →
          </a>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="email-gate-download">Email Address</label>
        <input
          id="email-gate-download"
          type="email"
          name="email"
          placeholder="your@email.com"
          autoComplete="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>

      {error && (
        <p style={{ color: '#7B2D3E', fontSize: '.88rem', margin: 0 }}>{error}</p>
      )}

      <button type="submit" className="btn-submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : submitLabel}
      </button>

      <p className="form-note">{note}</p>
    </form>
  )
}
