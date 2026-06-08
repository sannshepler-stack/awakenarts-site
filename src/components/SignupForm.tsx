'use client'

import { useState } from 'react'

export default function SignupForm() {
  const [fname, setFname]         = useState('')
  const [email, setEmail]         = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError]         = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!fname.trim() || !email.trim()) {
      setError('Please enter your name and email.')
      return
    }

    // TODO: replace with your email provider API call
    // Example for ConvertKit:
    //   await fetch('/api/subscribe', {
    //     method: 'POST',
    //     body: JSON.stringify({ fname, email }),
    //   })

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="form-thanks">
        <p>You&rsquo;re on the list.<br />Welcome to AwakenArts.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="fname">First Name</label>
        <input
          id="fname"
          type="text"
          name="fname"
          placeholder="Your first name"
          autoComplete="given-name"
          value={fname}
          onChange={e => setFname(e.target.value)}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
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
        <p style={{ color: '#7B2D3E', fontSize: '.88rem' }}>{error}</p>
      )}

      <button type="submit" className="btn-submit">
        Join the List →
      </button>

      <p className="form-note">No selling. No noise. Only what the work requires.</p>
    </form>
  )
}
