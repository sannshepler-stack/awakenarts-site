'use client'

import { useEffect, useRef, useState } from 'react'
import AtmosphericHeader from '@/components/AtmosphericHeader'

// HomeSpeakInImages — homepage section 3, "You already speak in images"
// (2026-10-05, per Susan). Replaces HomeCollectionPremise on the homepage:
// same wording, without the repeated Queen Ann poem/portrait (Queen Ann is
// already the hero image). The three phrases reveal once, phrase by phrase,
// when the section first scrolls into view; with reduced motion they simply
// appear. HomeCollectionPremise.tsx is kept in the codebase, unused.

const PHRASES = ['“We’ve put up walls.”', '“I’m at a crossroads.”', '“It became a stepping stone.”']

export default function HomeSpeakInImages() {
  const ref = useRef<HTMLParagraphElement>(null)
  const [armed, setArmed] = useState(false)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') return
    setArmed(true)
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section aria-labelledby="speak-in-images-heading" style={{ background: 'var(--cream)' }}>
      <AtmosphericHeader
        src="/images/headers/collection-threshold.jpg"
        alt="A dark sky heavy with clouds breaking open to warm gold light along the horizon"
        fadeTo="var(--cream)"
      />
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '1rem 1.5rem var(--band-gap)', textAlign: 'center' }}>
        <p className="eyebrow" style={{ justifyContent: 'center' }}>AwakenArts, The Stories that Shape Us</p>
        <h2
          id="speak-in-images-heading"
          style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'var(--t-section)', lineHeight: 1.2, color: 'var(--deep)', margin: '1rem 0 1rem' }}
        >
          You already speak in images. We all do.
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-body)', lineHeight: 1.7, color: 'var(--mid)', maxWidth: 600, margin: '0 auto 2.25rem', ...({ textWrap: 'pretty' } as React.CSSProperties) }}>
          AwakenArts begins with the images already present in everyday language and experience, then follows them
          toward deeper meaning, reflection, and understanding.
        </p>
        <p
          ref={ref}
          className={`phrase-reveal${armed ? ' is-armed' : ''}${shown ? ' is-shown' : ''}`}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.6rem 2rem', margin: 0 }}
        >
          {PHRASES.map((p, i) => (
            <span
              key={p}
              className="phrase-reveal__item"
              style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'var(--t-poetic)', color: 'var(--gold)', whiteSpace: 'nowrap', animationDelay: `${i * 0.7}s` }}
            >
              {p}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
