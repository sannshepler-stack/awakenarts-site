'use client'

import { useState } from 'react'

export default function SignupForm() {
  const [submitted, setSubmitted] = useState(false)
  const [fname, setFname]         = useState('')
  const [email, setEmail]         = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!fname.trim() || !email.trim()) return
    // TODO: wire to ConvertKit API route at /api/subscribe
    // See README.md for implementation notes
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="form-thanks">
        <p>Your guide is on its way.<br />Welcome to the path.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="fname"
          placeholder="Your first name"
          autoComplete="given-name"
          required
          value={fname}
          onChange={e => setFname(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="your@email.com"
          autoComplete="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" className="btn-submit">
        Enter the Path →
      </button>
      <p className="form-note">No selling. No noise. Only what the path requires.</p>
    </form>
  )
}
