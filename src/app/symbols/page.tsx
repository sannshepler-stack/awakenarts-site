import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import WorldDoorways from '@/components/WorldDoorways'
import SymbolTile from '@/components/symbols/SymbolTile'
import SymbolVocabulary from '@/components/symbols/SymbolVocabulary'
import { symbolCards } from '@/data/symbolCards'
import { CATEGORIES as JOURNAL_PATHS } from '@/components/journal/categories'

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

        {/* 2026-10-09, Susan: the Symbol Vocabulary (20 words) moves here
            from /christian-symbols, right after the eight cards. */}
        <div style={{ paddingBottom: 'var(--band-gap)' }}>
          <SymbolVocabulary />
        </div>

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
          </div>
        </section>

        {/* ── Christian Encounters (2026-10-09, Susan) ───────────────
            Part of the Christian symbols experience: recognize the images
            (cards above), explore them through guided reflection (here),
            then write about them (the Journal, below). Dark, as on the
            Encounters page. Approved wording only. */}
        <section aria-labelledby="symbols-encounters-heading" style={{ background: 'var(--deep)', padding: 'var(--band-gap) 1.5rem' }}>
          <div
            style={{
              maxWidth: 1000,
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <Link href="/encounters" data-cta="symbols-encounters-image" style={{ display: 'block' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/encounters/journey/journey-02-web-opt.jpg"
                alt="A golden path across open hills toward the horizon at sunset"
                loading="lazy"
                style={{ display: 'block', width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', borderRadius: 4, boxShadow: '0 12px 30px rgba(0, 0, 0, 0.35)' }}
              />
            </Link>
            <div>
              <p className="eyebrow" style={{ color: 'var(--gold-lt)' }}>Christian Encounters</p>
              <h2
                id="symbols-encounters-heading"
                style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'var(--t-section)', color: 'var(--cream)', margin: '0.75rem 0 1rem', lineHeight: 1.2 }}
              >
                Every journey begins with a single encounter.
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-size)', lineHeight: 'var(--body-line)', color: 'rgba(250, 246, 236, 0.88)', margin: '0 0 1.5rem' }}>
                Through image, Scripture, and reflection, these encounters invite you to recognize biblical symbols,
                consider their meaning in your own experience, and discover new ways of attending to your journey of
                faith.
              </p>
              {/* 2026-10-09, Susan: the five names are left off for balance;
                  the Encounters page itself presents them. */}
              <div style={{ height: '0.5rem' }} />
              <Link href="/encounters" className="home-coll-cta" data-cta="symbols-encounters" style={{ color: 'var(--gold-lt)', borderColor: 'var(--gold-lt)' }}>
                Christian Encounters
              </Link>
            </div>
          </div>
        </section>

        {/* ── The Journal (2026-10-09, Susan) ─────────────────────────
            Its own section after Why Symbols Matter: from recognizing
            symbols to writing about them. Wording is the Journal page's
            own; the five Reflection Paths link straight in. */}
        <section aria-labelledby="symbols-journal-heading" style={{ background: 'var(--warm)', padding: 'var(--band-gap) 1.5rem' }}>
          <div
            style={{
              maxWidth: 1000,
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <Link href="/journal" data-cta="symbols-journal-image" style={{ display: 'block' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/explore/journal-notebook.jpg"
                alt="An open journal notebook on a table beside AwakenArts figures"
                loading="lazy"
                style={{ display: 'block', width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', borderRadius: 4, boxShadow: '0 12px 30px rgba(28, 43, 58, 0.15)' }}
              />
            </Link>
            <div>
              <p className="eyebrow">The Journal</p>
              <h2
                id="symbols-journal-heading"
                style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'var(--t-section)', color: 'var(--deep)', margin: '0.75rem 0 1rem', lineHeight: 1.2 }}
              >
                Read, Notice, and Write
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-size)', lineHeight: 'var(--body-line)', color: 'var(--deep)', margin: '0 0 1.5rem' }}>
                Reflections and journaling prompts that walk alongside particular works in the Collection — a place to
                slow down, notice what comes up, and write it down before it passes.
              </p>
              <p className="eyebrow" style={{ margin: '0 0 0.75rem' }}>Reflection Paths</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.25rem' }}>
                {JOURNAL_PATHS.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/journal/${c.slug}`}
                      data-cta={`symbols-journal-${c.slug}`}
                      style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', color: 'var(--deep)', textDecoration: 'underline', textDecorationColor: 'rgba(138, 106, 31, 0.45)', textUnderlineOffset: 5 }}
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/journal" className="home-coll-cta home-coll-cta--light-surface" data-cta="symbols-journal">
                The Journal Page
              </Link>
            </div>
          </div>
        </section>

        <WorldDoorways />
      </main>
      <WayfindingBand />
      <Footer />
    </>
  )
}
