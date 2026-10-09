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

// 2026-10-09, Susan: this page is Symbols for the Christian Soul. The
// figurative-language opening (header watercolor, heading, subtitle) moved
// to the top of /journal.
export const metadata: Metadata = {
  title: 'Symbols for the Christian Soul',
  description:
    'Scripture speaks in symbols. Explore the symbol cards: what each can mean, where it appears in everyday language, and what it may help you recognize in your own life.',
  alternates: { canonical: '/symbols' },
}

export default function SymbolsIndexPage() {
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--cream)' }}>
        <section style={{ padding: 'calc(var(--band-gap) + 1rem) 1.5rem 3rem', textAlign: 'center' }}>
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
            Symbols for the Christian Soul
          </h1>
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.35rem', color: 'var(--gold)', margin: 0 }}>
            Scripture speaks in symbols.
          </p>
          {/* 2026-10-09, Susan: this page's own introduction, on why
              recognizing biblical symbolism enriches Scripture reading,
              reflection, and faith. Replaces the general everyday-symbols
              paragraph. Link to The Path kept. */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--body-size)',
              lineHeight: 'var(--body-line)',
              color: 'var(--deep)',
              maxWidth: 760,
              margin: '1.25rem auto 0',
            }}
          >
            {/* 2026-10-09, Susan: same wording, condensed into one block. */}
            Scripture speaks through familiar images: lamps, paths, vines, seeds, bread, and water. These ordinary
            things carry meaning within the stories and teachings of the Bible. Learning to recognize biblical symbols
            can deepen your understanding of Scripture and enrich the way you encounter its language in reading,
            reflection, and prayer. Choose a symbol to explore its biblical meaning, consider its place in everyday
            life, and reflect on what it may mean to you.
          </p>
          <p style={{ margin: '1rem 0 0' }}>
            <Link
              href="/awakenarts-path#what-symbol-awareness-can-teach"
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
          <section id="symbol-cards" aria-label="Symbol Cards" style={{ padding: '1rem 1.5rem var(--band-gap)', scrollMarginTop: '5rem' }}>
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
            {/* 2026-10-09, Susan: the ship image (formerly the Symbols for the
                Christian Soul section, now removed) opens this section. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/homepage/encounters-symbols-ship-v3-opt.jpg"
              alt="A sailboat on still water at sunset, framed by trees on the shore"
              loading="lazy"
              style={{
                display: 'block',
                width: '100%',
                aspectRatio: '16 / 8',
                objectFit: 'cover',
                borderRadius: 4,
                boxShadow: '0 12px 30px rgba(28, 43, 58, 0.18)',
                margin: '0 0 2.5rem',
              }}
            />
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
            {/* One quiet way onward to the Christian Symbols page and its
                Symbol Vocabulary, 2026-10-09. Encounters keep their own page. */}
            <p style={{ textAlign: 'center', margin: '1.5rem 0 0' }}>
              <Link
                href="/christian-symbols"
                data-cta="symbols-why-christian"
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                }}
              >
                Explore the Symbol Vocabulary &rarr;
              </Link>
            </p>
          </div>
        </section>

        <WorldDoorways />
      </main>
      <WayfindingBand />
      <Footer />
    </>
  )
}
