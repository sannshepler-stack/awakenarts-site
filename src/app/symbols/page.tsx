import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import WorldDoorways from '@/components/WorldDoorways'
import SymbolTile from '@/components/symbols/SymbolTile'
import { symbolCards } from '@/data/symbolCards'

// /symbols — the Symbol Card collection, primary marketing entry (D10,
// approved 2026-10-05). Each tile opens that symbol's Portal.
// The Christian Symbols page (formerly here) now lives at
// /christian-symbols; Journal symbol material stays in /journal. The three
// remain distinct, per Susan.

export const metadata: Metadata = {
  title: 'Symbols',
  description: 'You already speak in images. We all do. Explore the World of Figurative Language.',
  alternates: { canonical: '/symbols' },
}

export default function SymbolsIndexPage() {
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--cream)' }}>
        <section style={{ padding: 'calc(var(--band-gap) + 1rem) 1.5rem 3rem', textAlign: 'center' }}>
          {/* Header (Susan, 2026-10-07): a watercolor of walls, a crossroads,
              and stepping stones — the everyday figures of speech themselves.
              White ground blends into the cream page (multiply). */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/headers/symbols-figurative-landscape.jpg"
            alt="A watercolor landscape: an opening in a stone wall, paths that part, and stepping stones across still water toward the sunrise"
            style={{ display: 'block', width: '100%', maxWidth: 1180, margin: '0 auto 1.5rem', mixBlendMode: 'multiply' }}
          />
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Symbols</p>
          <h1
            style={{
              fontFamily: 'var(--serif)',
              fontWeight: 400,
              fontSize: 'var(--t-page)',
              color: 'var(--deep)',
              margin: '1rem auto 1rem',
              maxWidth: 760,
              lineHeight: 1.1,
            }}
          >
            Explore the World of Figurative Language
          </h1>
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.35rem', color: 'var(--gold)', margin: 0 }}>
            You already speak in images. We all do.
          </p>
          {/* Approved by Susan 2026-10-09: benefit-focused intro + link to The Path. */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--body-size)',
              lineHeight: 'var(--body-line)',
              color: 'var(--deep)',
              maxWidth: 640,
              margin: '1.5rem auto 0',
            }}
          >
            You already live with symbols: a wedding ring, a family photograph, a key, a path, a phrase like
            &ldquo;I&rsquo;ve hit a wall.&rdquo; Choose a symbol to learn what it can carry, notice where it already
            appears in your own life, and take one question with you.
          </p>
          <p style={{ margin: '1.25rem 0 0' }}>
            <Link
              href="/awakenarts-path"
              data-cta="symbols-intro-path"
              style={{
                fontFamily: 'var(--sans)',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
              }}
            >
              See everything symbol awareness can teach &rarr; The AwakenArts Path
            </Link>
          </p>
        </section>

        {symbolCards.length > 0 && (
          <section aria-label="Symbol Cards" style={{ padding: '1rem 1.5rem var(--band-gap)' }}>
            <div
              style={{
                maxWidth: 1080,
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: '2.75rem 2rem',
              }}
            >
              {symbolCards.map((card) => (
                <SymbolTile key={card.slug} card={card} source="symbols-index" />
              ))}
            </div>
          </section>
        )}

        {/* Why Symbols Matter — Susan's wording, 2026-10-09. Placed beneath the
            gallery: visitors encounter the symbols first, then deepen understanding. */}
        <section aria-labelledby="why-symbols-matter" style={{ padding: '0 1.5rem var(--band-gap)' }}>
          <div style={{ maxWidth: 784, margin: '0 auto' }}>
            <h2
              id="why-symbols-matter"
              style={{
                fontFamily: 'var(--serif)',
                fontWeight: 400,
                fontSize: 'var(--t-section)',
                color: 'var(--deep)',
                textAlign: 'center',
                margin: '0 0 1.5rem',
              }}
            >
              Why Symbols Matter
            </h2>
            {[
              'A wedding ring is more than jewelry. A family photograph is more than a picture. A gate can represent welcome, protection, or exclusion. Ordinary objects carry memories, values, relationships, and experiences that matter to us.',
              'We also speak in symbols without noticing. We reach a crossroads, open a door, carry a burden, or find our way.',
              'Learning to recognize these images can help us understand how we express ourselves, remember what matters, and see familiar experiences from another perspective.',
            ].map((para, k) => (
              <p
                key={k}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--body-size)',
                  lineHeight: 'var(--body-line)',
                  color: 'var(--deep)',
                  margin: '0 0 1rem',
                }}
              >
                {para}
              </p>
            ))}
            <p
              style={{
                fontFamily: 'var(--serif)',
                fontStyle: 'italic',
                fontSize: '1.2rem',
                lineHeight: 1.5,
                color: 'var(--mid)',
                textAlign: 'center',
                margin: '1.75rem 0 0',
              }}
            >
              Every symbol offers another opportunity to recognize how images and language carry meaning in your own
              life. Return to the collection whenever you&rsquo;re ready to explore another.
            </p>
          </div>
        </section>

        <section
          aria-label="Symbols for the Christian Soul"
          style={{ background: 'var(--warm)', padding: 'var(--band-gap) 1.5rem', textAlign: 'center' }}
        >
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Christian Symbols</p>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'var(--t-section)', color: 'var(--deep)', margin: '1rem 0 0.5rem' }}>
            Symbols for the Christian Soul
          </h2>
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--mid)', margin: '0 0 2.25rem' }}>
            Scripture speaks in symbols.
          </p>
          {/* 2026-10-07, Susan: the card fan gave the full page away (it opens
              with the same cards). Now an invitation: one image, and a line
              naming what waits there — the vocabulary and the Encounters. */}
          <Link href="/christian-symbols" className="symbols-invite" data-cta="symbols-christian-invite">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/homepage/encounters-symbols-ship-v3-opt.jpg"
              alt="A sailboat on still water at sunset, framed by trees on the shore"
              loading="lazy"
            />
          </Link>
          <div style={{ height: '2.25rem' }} />
          {/* Two ways on (Susan, 2026-10-07): the symbols, and the Encounters. */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/christian-symbols" className="home-coll-cta home-coll-cta--light-surface" data-cta="symbols-all-christian">
              Explore Christian Symbols
            </Link>
            <Link href="/encounters" className="home-coll-cta home-coll-cta--light-surface" data-cta="symbols-encounters">
              Experience the Encounters
            </Link>
          </div>
        </section>

        <WorldDoorways />
      </main>
      <WayfindingBand />
      <Footer />
    </>
  )
}
