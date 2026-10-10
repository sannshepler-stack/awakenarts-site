import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import StayConnected from '@/components/StayConnected'
import { EXPERIENCE_CATEGORIES, availableOfferings, type ExperienceCategory } from '@/data/experience'

// /language-of-symbols — "Experience the Language of Symbols" (Susan,
// 2026-10-10). The EXPERIENCE item in the main navigation; it replaces
// Presentations there, and the Presentations page stays where it is,
// linked from here. /experience stays the Make Your Own Word Art page,
// which five other pages already link to.
//
// Language first: symbols, poetry, imagery and reflection are ways of
// encountering meaning. Patterns reused from /explore (door cards, eyebrow,
// page-title scale, StayConnected, WayfindingBand).
//
// The five permanent categories and their offerings come from
// src/data/experience.ts. Only offerings marked 'available' appear; the
// four-week course stays a draft there until Susan approves the lessons,
// Symbol Cards, Kit delivery and checkout.

export const metadata: Metadata = {
  title: 'Experience the Language of Symbols',
  description:
    'AwakenArts education begins with language: metaphor, poetry, symbolic imagery, reflection, and creative expression.',
  alternates: { canonical: '/language-of-symbols' },
}

const titleStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--serif)',
  fontSize: 'var(--t-card)',
  lineHeight: 1.25,
  color: 'var(--deep)',
}

const goldLink: React.CSSProperties = {
  fontFamily: 'var(--sans)',
  fontSize: '0.72rem',
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--gold)',
  textDecoration: 'none',
}

const box: React.CSSProperties = { display: 'flex', flexDirection: 'column', textDecoration: 'none', border: '1px solid var(--mist)', background: '#fff' }

// One permanent category. With no available offerings it is a single link
// (or, without a page, a quiet card). Available offerings appear as links
// inside it, so the category itself is not wrapped in a link.
function CategoryCard({ c }: { c: ExperienceCategory }) {
  const offerings = availableOfferings(c)
  const imgStyle = (single: boolean): React.CSSProperties => ({
    display: 'block',
    width: single ? '100%' : '50%',
    height: '100%',
    objectFit: c.card ? 'contain' : 'cover',
    objectPosition: c.pos || 'center',
    minWidth: 0,
  })
  // One image, or two side by side so a pair of portrait works fills the box.
  const image = (
    <span
      style={{
        display: 'flex',
        gap: c.img2 ? '0.4rem' : 0,
        width: '100%',
        aspectRatio: '16 / 10',
        background: c.bg || 'var(--warm)',
        padding: c.card ? '0.5rem' : 0,
        boxSizing: 'border-box',
        minHeight: 0,
        overflow: 'hidden',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={c.img} alt="" loading="lazy" style={imgStyle(!c.img2)} />
      {c.img2 && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={c.img2} alt="" loading="lazy" style={imgStyle(false)} />
      )}
    </span>
  )
  const arrow = <span aria-hidden="true" style={{ opacity: 0.55 }}>→</span>
  // Keep the arrow with the title's last word, so it never wraps alone.
  // A title may set its own line break with "\n" (e.g. Make Your Own / Word Art).
  const lines = c.title.split('\n')
  const last = lines[lines.length - 1].split(' ')
  const withArrow = (
    <>
      {lines.slice(0, -1).map((l) => (
        <span key={l}>
          {l}
          <br />
        </span>
      ))}
      {last.slice(0, -1).join(' ')}{last.length > 1 ? ' ' : ''}
      <span style={{ whiteSpace: 'nowrap' }}>
        {last[last.length - 1]} {arrow}
      </span>
    </>
  )
  const showNote = !c.href && offerings.length === 0 && c.emptyNote
  const body = (title: React.ReactNode) => (
    <span style={{ display: 'block', padding: '1.4rem 1.5rem 1.6rem', flex: 1 }}>
      {showNote && <span style={{ ...goldLink, display: 'block', fontSize: '0.66rem', marginBottom: '0.4rem' }}>{c.emptyNote}</span>}
      {title}
      <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--mid)', marginTop: '0.6rem' }}>
        {c.line}
      </span>
      {offerings.length > 0 && (
        <span style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
          {offerings.map((o) => (
            <Link key={o.href} href={o.href} style={goldLink}>
              {o.title} &rarr;
            </Link>
          ))}
        </span>
      )}
    </span>
  )

  if (c.href && offerings.length === 0) {
    return (
      <Link href={c.href} data-cta={`experience-${c.href.slice(1)}`} style={box}>
        {image}
        {body(<span style={titleStyle}>{withArrow}</span>)}
      </Link>
    )
  }
  return (
    <div style={box}>
      {c.href ? <Link href={c.href} tabIndex={-1} aria-hidden="true">{image}</Link> : image}
      {body(
        c.href ? (
          <Link href={c.href} data-cta={`experience-${c.href.slice(1)}`} style={{ ...titleStyle, textDecoration: 'none' }}>
            {withArrow}
          </Link>
        ) : (
          <span style={titleStyle}>{c.title.replace('\n', ' ')}</span>
        ),
      )}
    </div>
  )
}

export default function LanguageOfSymbolsPage() {
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--cream)' }}>
        {/* Header (Susan, 2026-10-10): the desk of AwakenArts figures and an
            open journal, formerly on the Presentations card. Shown at its own
            panoramic proportions, uncropped. */}
        <div style={{ padding: 'calc(var(--band-gap) + 1rem) 1.5rem 0' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/headers/gallery-desk.jpg"
            alt="AwakenArts figure images and an open journal spread across a desk"
            style={{ display: 'block', width: '100%', maxWidth: 1180, height: 'auto', margin: '0 auto' }}
          />
        </div>

        <section style={{ padding: '2rem 1.5rem 3.75rem', textAlign: 'center' }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Experience</p>
          <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'var(--t-page)', lineHeight: 1.15, color: 'var(--deep)', margin: '1rem 0 0' }}>
            Experience the Language of Symbols
          </h1>
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.25rem', lineHeight: 1.5, color: 'var(--mid)', maxWidth: 760, margin: '1.5rem auto 0' }}>
            Language is the foundation of AwakenArts education. Through poetry, metaphor, symbolic imagery, and
            reflection, discover how language carries meaning&mdash;and learn to recognize its presence in your own life.
          </p>
        </section>

        <section aria-label="Ways to experience AwakenArts" style={{ padding: '0 1.5rem var(--band-gap)' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {EXPERIENCE_CATEGORIES.map((c) => (
              <CategoryCard key={c.title} c={c} />
            ))}
          </div>
        </section>

        {/* Your Guide (Susan, 2026-10-10). Same pattern as the homepage
            About section: the approved portrait, round, beside the text. */}
        <section aria-labelledby="experience-guide" style={{ padding: '0 1.5rem var(--band-gap)' }}>
          <div aria-hidden="true" style={{ width: 64, height: 1, background: 'var(--gold)', opacity: 0.6, margin: '0 auto 3rem' }} />
          <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '2.5rem', alignItems: 'center', justifyContent: 'center' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about/susan-ann-shepler-opt.jpg"
              alt="Susan Ann Shepler"
              loading="lazy"
              style={{ width: 200, height: 200, objectFit: 'cover', objectPosition: '50% 35%', borderRadius: '50%', border: '1px solid var(--gold-lt)', flex: '0 0 auto' }}
            />
            <div style={{ flex: '1 1 380px' }}>
              <p className="eyebrow">Your Guide</p>
              <h2
                id="experience-guide"
                style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'var(--t-section)', color: 'var(--deep)', margin: '0.8rem 0 0.35rem' }}
              >
                Susan Ann Shepler
              </h2>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', margin: '0 0 1.25rem' }}>
                Author &middot; Artist &middot; Educator
              </p>
              <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.2rem', lineHeight: 1.5, color: 'var(--deep)', margin: '0 0 1rem' }}>
                My work begins with language&mdash;how words carry meaning, how metaphor gives experience expression, and
                how poetry can become an image.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-size)', lineHeight: 'var(--body-line)', color: 'var(--deep)', margin: '0 0 1rem' }}>
                My background in English and Spanish, Spiritual Psychology, and Transformative Language Artistry informs
                the way I approach symbolic language. Through AwakenArts, I bring together poetry, original imagery, and
                guided reflection to create opportunities for learning and personal discovery.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-size)', lineHeight: 'var(--body-line)', color: 'var(--deep)', margin: 0 }}>
                I invite you to explore the language of symbols, recognize its presence in everyday life, and discover new
                ways of understanding and expressing your own experiences.
              </p>
              <p style={{ margin: '1.5rem 0 0' }}>
                <Link
                  href="/about"
                  style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)' }}
                >
                  About Susan &rarr;
                </Link>
              </p>
            </div>
          </div>
        </section>

        <StayConnected source="language-of-symbols" />
      </main>
      <WayfindingBand />
      <Footer />
    </>
  )
}
