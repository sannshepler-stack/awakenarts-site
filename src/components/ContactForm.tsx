'use client'

import { useRef, useState } from 'react'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import {
  CONTACT_FORM_LIVE,
  WEB3FORMS_ACCESS_KEY,
  WEB3FORMS_HCAPTCHA_SITEKEY,
} from '@/data/contact'

// ContactForm — Name, Email, Subject, Message, with an on-page thank-you
// (Susan, 2026-10-18). Sends through Web3Forms (free plan); the recipient
// address is bound to the access key on Web3Forms' side and never appears
// here. Spam protection: hCaptcha + the `botcheck` honeypot. Settings and
// the reasoning behind them live in src/data/contact.ts.

type Status = 'idle' | 'submitting' | 'done'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactForm({ source }: { source: string }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [captchaToken, setCaptchaToken] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')
  const captchaRef = useRef<HCaptcha>(null)

  if (!CONTACT_FORM_LIVE) return null

  function resetCaptcha() {
    setCaptchaToken('')
    captchaRef.current?.resetCaptcha()
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setError('Please fill in your name, email, subject, and message.')
      return
    }
    if (!EMAIL_RE.test(email.trim())) {
      setError('Please enter a valid email address.')
      return
    }
    if (!captchaToken) {
      setError('Please complete the verification above the Send button.')
      return
    }
    if (!WEB3FORMS_ACCESS_KEY) {
      setError('The contact form is not connected yet. Please try again later.')
      return
    }

    // Honeypot: a hidden checkbox people never see. If a bot ticks it,
    // Web3Forms rejects the submission.
    const botcheck = (e.currentTarget.elements.namedItem('botcheck') as HTMLInputElement | null)?.checked ?? false

    setStatus('submitting')
    let res: Response
    try {
      res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `AwakenArts: ${subject.trim()}`,
          from_name: 'AwakenArts Website',
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          page: source,
          botcheck,
          'h-captcha-response': captchaToken,
        }),
      })
    } catch {
      setStatus('idle')
      resetCaptcha()
      setError('We couldn’t reach the message service. Please check your connection and try again.')
      return
    }

    let data: { success?: boolean; message?: string } = {}
    try {
      data = await res.json()
    } catch {
      // Fall through to the generic message below.
    }

    if (res.ok && data.success) {
      setStatus('done')
      return
    }

    console.error('[contact] Web3Forms rejected the message', { status: res.status, message: data.message })
    setStatus('idle')
    resetCaptcha()
    setError(
      /captcha/i.test(data.message ?? '')
        ? 'The verification didn’t go through. Please complete it again and resend.'
        : 'Your message couldn’t be sent just now. Please try again in a moment.'
    )
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
        <label htmlFor={fieldId('subject')}>Subject</label>
        <input
          id={fieldId('subject')}
          type="text"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
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

      {/* Honeypot (Web3Forms `botcheck`): hidden from people. */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <HCaptcha
          ref={captchaRef}
          sitekey={WEB3FORMS_HCAPTCHA_SITEKEY}
          reCaptchaCompat={false}
          onVerify={(token) => {
            setCaptchaToken(token)
            setError('')
          }}
          onExpire={() => setCaptchaToken('')}
          onError={() => setCaptchaToken('')}
        />
      </div>

      {error && (
        <p role="alert" style={{ color: '#7B2D3E', fontSize: '.88rem', margin: 0 }}>{error}</p>
      )}

      <button type="submit" className="btn-submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
