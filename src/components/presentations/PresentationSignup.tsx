'use client'

import { useState } from 'react'
import { INQUIRY_EMAIL } from '@/data/guidedEncounters'

// PresentationSignup — the attendee form on a presentation page
// (2026-10-08, Susan: attendees first). Name and email only.
//   notify   → "Notify Me": they hear when a date is scheduled.
//   register → "Register": they reserve a place at the scheduled event.
// Posts to /api/register (Kit, tags only — never the newsletter list) and
// confirms on the page only after Kit has saved them.

const field: React.CSSProperties = {
  width: '100%',
  fontFamily: 'var(--font-body)',
  fontSize: '1rem',
  color: 'var(--deep)',
  background: '#fff',
  border: '1px solid var(--mist)',
  borderRadius: 3,
  padding: '0.75rem 0.85rem',
}
const lab: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--sans)',
  fontSize: '0.75rem',
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--mid)',
  margin: '0 0 0.4rem',
}
const small: React.CSSProperties = { fontFamily: 'var(--sans)', fontSize: '0.75rem', color: 'var(--mid)', margin: '0.8rem 0 0' }

export default function PresentationSignup({
  slug,
  mode,
  shortTitle,
  event,
}: {
  slug: string
  mode: 'notify' | 'register'
  shortTitle: string
  event?: { when: string; where: string }
}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const [done, setDone] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please add your name and a valid email address.')
      return
    }
    setBusy(true)
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), presentation: slug }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.ok) {
        setError(data.message || "We couldn't complete your sign-up just now. Please try again in a moment.")
      } else {
        setDone(true)
      }
    } catch {
      setError("We couldn't complete your sign-up just now. Please try again in a moment.")
    }
    setBusy(false)
  }

  if (done) {
    const first = name.trim().split(' ')[0]
    return (
      <div role="status" style={{ textAlign: 'center', padding: '1.5rem 0' }}>
        <p style={{ fontFamily: 'var(--serif)', fontSize: '1.6rem', color: 'var(--deep)', margin: 0 }}>
          {mode === 'register' ? `Thank you, ${first}. You’re registered.` : `Thank you, ${first}.`}
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--deep)', maxWidth: 520, margin: '0.9rem auto 0' }}>
          {mode === 'register' && event
            ? `We’ll see you ${event.when}, ${event.where}. A confirmation is on its way to ${email.trim()}.`
            : `We’ll let you know at ${email.trim()} when the next ${shortTitle} presentation is scheduled.`}
        </p>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--mid)', margin: '0.9rem 0 0' }}>
          Questions? Write to <a href={`mailto:${INQUIRY_EMAIL}`} style={{ color: 'var(--gold)' }}>{INQUIRY_EMAIL}</a>.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} noValidate style={{ display: 'grid', gap: '1.1rem', textAlign: 'left' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.1rem' }}>
        <label>
          <span style={lab}>Name</span>
          <input style={field} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required />
        </label>
        <label>
          <span style={lab}>Email</span>
          <input style={field} type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
        </label>
      </div>
      {error && (
        <p role="alert" style={{ fontFamily: 'var(--font-body)', color: '#8a2d1d', margin: 0 }}>
          {error}
        </p>
      )}
      <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
        <button
          type="submit"
          disabled={busy}
          className="home-coll-cta home-coll-cta--light-surface"
          data-cta={`presentation-${slug}-${mode}`}
          style={{ background: 'none', cursor: busy ? 'wait' : 'pointer' }}
        >
          {busy ? 'Sending…' : mode === 'register' ? 'Register' : 'Notify Me'}
        </button>
        <p style={small}>Used only for presentation news. You won’t be added to the AwakenArts newsletter.</p>
      </div>
    </form>
  )
}
