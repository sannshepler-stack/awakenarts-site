'use client'

import { useState } from 'react'
import { guidedEncounters, INQUIRY_EMAIL } from '@/data/guidedEncounters'

// InquiryForm — Guided Encounter registration / hosting inquiry (D4).
//
// Works today with no new accounts: on submit it opens the visitor's email
// with every answer filled in and addressed to Susan. If the visitor ticks
// "keep me informed", they are also added to the Kit list through the
// existing /api/subscribe route (source 'guided-encounter-inquiry').
// Upgrade path: when an email-sending service is chosen, POST these same
// fields to a server route instead of opening mailto.

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

const KINDS = [
  'Attending a Guided Encounter',
  'Hosting for a church',
  'Hosting for a club or group',
  'Hosting for a retreat',
  'Something else',
]

export interface InquiryConfig {
  /** Shown in the email subject, e.g. 'Guided Encounter inquiry'. */
  subjectPrefix: string
  /** Label + options for the "which one" select; omitted when there are none. */
  offerings?: { label: string; options: { value: string; title: string }[] }
  kinds: string[]
  keepLabel: string
  kitSource: string
  cta: string
}

export const GUIDED_INQUIRY: InquiryConfig = {
  subjectPrefix: 'Guided Encounter inquiry',
  offerings: { label: 'Guided Encounter', options: guidedEncounters.map((g) => ({ value: g.slug, title: g.title })) },
  kinds: KINDS,
  keepLabel: 'Keep me informed about future Guided Encounters.',
  kitSource: 'guided-encounter-inquiry',
  cta: 'guided-encounter-inquiry',
}

export default function InquiryForm({ preselect, config = GUIDED_INQUIRY }: { preselect?: string; config?: InquiryConfig }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [encounter, setEncounter] = useState(preselect || '')
  const [kind, setKind] = useState(config.kinds[0])
  const [dates, setDates] = useState('')
  const [message, setMessage] = useState('')
  const [keep, setKeep] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please add your name and a valid email address.')
      return
    }
    const title = config.offerings?.options.find((o) => o.value === encounter)?.title || 'Not sure yet'
    const subject = config.offerings ? `${config.subjectPrefix} — ${title}` : config.subjectPrefix
    const lines = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      ...(config.offerings ? [`${config.offerings.label}: ${title}`] : []),
      `I'm asking about: ${kind}`,
    ]
    if (dates.trim()) lines.push(`Preferred dates: ${dates.trim()}`)
    if (message.trim()) lines.push('', message.trim())
    const body = lines.join('\n')

    if (keep) {
      try {
        await fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email.trim(), source: config.kitSource }),
        })
      } catch {
        // The inquiry itself still goes out by email below.
      }
    }

    window.location.href = `mailto:${INQUIRY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  if (sent) {
    return (
      <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
        <p style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', color: 'var(--deep)', margin: 0 }}>
          Your email is ready to send.
        </p>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--mid)', margin: '0.6rem 0 0' }}>
          If no email window opened, write to{' '}
          <a href={`mailto:${INQUIRY_EMAIL}`} style={{ color: 'var(--gold)' }}>{INQUIRY_EMAIL}</a>.
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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.1rem' }}>
        {config.offerings && (
          <label>
            <span style={lab}>{config.offerings.label}</span>
            <select style={field} value={encounter} onChange={(e) => setEncounter(e.target.value)}>
              <option value="">Not sure yet</option>
              {config.offerings.options.map((o) => (
                <option key={o.value} value={o.value}>{o.title}</option>
              ))}
            </select>
          </label>
        )}
        <label>
          <span style={lab}>I'm asking about</span>
          <select style={field} value={kind} onChange={(e) => setKind(e.target.value)}>
            {config.kinds.map((k) => (
              <option key={k}>{k}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        <span style={lab}>Preferred dates (optional)</span>
        <input style={field} value={dates} onChange={(e) => setDates(e.target.value)} />
      </label>
      <label>
        <span style={lab}>Message (optional)</span>
        <textarea style={{ ...field, minHeight: 120, resize: 'vertical' }} value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <label style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--mid)' }}>
        <input type="checkbox" checked={keep} onChange={(e) => setKeep(e.target.checked)} style={{ marginTop: '0.3rem' }} />
        {config.keepLabel}
      </label>
      {error && (
        <p role="alert" style={{ fontFamily: 'var(--font-body)', color: '#8a2d1d', margin: 0 }}>
          {error}
        </p>
      )}
      <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
        <button type="submit" className="home-coll-cta home-coll-cta--light-surface" data-cta={config.cta} style={{ background: 'none', cursor: 'pointer' }}>
          Send Inquiry
        </button>
        <p style={{ fontFamily: 'var(--sans)', fontSize: '0.75rem', color: 'var(--mid)', margin: '0.8rem 0 0' }}>
          Opens your email with these details filled in.
        </p>
      </div>
    </form>
  )
}
