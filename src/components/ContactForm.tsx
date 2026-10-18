'use client'

import { useState } from 'react'
import { INQUIRY_EMAIL } from '@/data/guidedEncounters'

// ContactForm — name, email, message, and an on-page thank-you
// (Susan, 2026-10-18). For visitors who simply want to write, without
// opening a mail app.
//
// The site cannot send email itself, so messages go through Formspree,
// which forwards each one to info@awakenarts.com. No DNS or Microsoft 365
// changes are involved. FORMSPREE_FORM_ID is the short code at the end of
// the form's endpoint in the Formspree dashboard
// (https://formspree.io/f/<FORM_ID>). It is public by design, so it lives
// here rather than in an environment variable.
//
// Until the ID is filled in, the form shows only in local development (so
// Susan can review it at localhost) and is hidden on the live site, where
// the email link beside it still works.
export const FORMSPREE_FORM_ID = ''

type Status = 'idle' | 'submitting' | 'done'

export default function ContactForm({ source }: { source: string }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  if (!FORMSPREE_FORM_ID && process.env.NODE_ENV === 'production') return null

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in your name, email, and message.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.')
      return
    }
    if (!FORMSPREE_FORM_ID) {
      setError('The form is not connected yet (Formspree code still to be added).')
      return
    }

    const honeypot = (e.currentTarget.elements.namedItem('_gotcha') as HTMLInputElement | null)?.value
    setStatus('submitting')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          page: source,
          _subject: `AwakenArts message from ${name.trim()}`,
          _gotcha: honeypot || '',
        }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('done')
    } catch {
      setStatus('idle')
      setError(`Your message couldn’t be sent just now. Please try again, or write to ${INQUIRY_EMAIL}.`)
    }
  }

  if (status === 'done') {
    return (
      <div className="form-thanks" role="status">
        <p>Thank you for writing. Your message is on its way, and Susan will reply soon.</p>
      </div>
    )
  }

  const fieldId = (f: string) => `contact-${source}-${f}`

  return (
    <form onSubmit={handleSubmit} noValidate style={{ textAlign: 'left' }}>
      <div className="form-field">
        <label htmlFor={fieldId('name')}>Name</label>
        <input
          id={fieldId('name')}
          type="text"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor={fieldId('email')}>Email Address</label>
        <input
          id={fieldId('email')}
          type="email"
          name="email"
          placeholder="your@email.com"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor={fieldId('message')}>Message</label>
        <textarea
          id={fieldId('message')}
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      {/* Spam trap: hidden from people, filled in by bots. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />

      {error && (
        <p role="alert" style={{ color: '#7B2D3E', fontSize: '.88rem', margin: 0 }}>{error}</p>
      )}

      <button type="submit" className="btn-submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
