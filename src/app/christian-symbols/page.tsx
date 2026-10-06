import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import SymbolsExperience from '@/components/SymbolsExperience'
import SymbolsEncounters from '@/components/SymbolsEncounters'

// /symbols — "Symbols for the Christian Soul" (built 2026-08-11, per
// Susan's brief).
//
// Purpose: not a card game. Demonstrates that symbolic language is
// already embedded in Scripture, and gives a visitor two ways in — word
// (Section 1, the vocabulary) and image (Section 2, the finished cards).
// The opening copy below is intentionally brief and literal, per her
// explicit instruction not to over-explain the idea before the page
// itself demonstrates it.
//
// Both this page and /symbols/[slug] render the same SymbolsExperience
// component — see that file and src/data/symbols.ts for the shared data
// model and deep-link behavior.
export const metadata: Metadata = {
  title: 'Symbols for the Christian Soul — AwakenArts',
  description:
    'Scripture speaks in symbols. A lamp. A path. A flower. A vine. A shepherd. Ordinary things become carriers of meaning.',
  alternates: { canonical: '/christian-symbols' },
}

export default function SymbolsPage() {
  return (
    <>
      <Nav />
      <main className="symbols-page">
        <section className="symbols-hero">
          {/* 2026-10-05, Susan: one heading, at the page-title size. */}
          <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'var(--t-page)', lineHeight: 1.15, color: 'var(--deep)', margin: '0 0 1.25rem', ...({ textWrap: 'balance' } as React.CSSProperties) }}>
            Symbols for the Christian Soul
          </h1>
          <p className="symbols-hero__lead">Scripture speaks in symbols.</p>
          <p className="symbols-hero__line">A lamp. A path. A flower. A vine. A shepherd.</p>
          {/* Moved here from the homepage, 2026-10-05 (Susan). */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--t-body)',
              lineHeight: 1.7,
              color: 'var(--mid)',
              maxWidth: 620,
              margin: '1.25rem auto 0',
              ...({ textWrap: 'pretty' } as React.CSSProperties),
            }}
          >
            Jesus taught through image, story, and metaphor. He did not surrender the Truth He carried. AwakenArts works
            within that tradition while engaging literature, psychology, mythology, folklore, and a long history of human
            imagination.
          </p>
        </section>

        <SymbolsExperience />

        {/* 2026-08-20, later the same day, per Susan's "Christian
            Symbols — Reduce Vocabulary, Restore Encounters" directive:
            SymbolsDeepen (four new prose essays recreating Journey/The
            Deep/The Table/The Word from memory of an earlier draft) is
            superseded by SymbolsEncounters — the same card-grid
            entrance already established on /encounters/page.tsx,
            linking to the real, already-built Journey/Deep/Table/Word
            Encounter pages rather than re-explaining them. See that
            component's own header comment for the full reasoning.
            SymbolsDeepen.tsx itself is left in the codebase, unused,
            per no-silent-deletion. */}
        <SymbolsEncounters />

        <section className="symbols-continuation" aria-label="Continue to the Editions">
          <Link href="/editions" className="home-coll-cta home-coll-cta--light-surface">
            Continue to the Editions
          </Link>
        </section>
      </main>

      <WayfindingBand />
      <Footer />
    </>
  )
}
