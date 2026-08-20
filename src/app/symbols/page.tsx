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
  alternates: { canonical: '/symbols' },
}

export default function SymbolsPage() {
  return (
    <>
      <Nav />
      <main className="symbols-page">
        <section className="symbols-hero">
          <h1 className="symbols-hero__title">
            <span className="symbols-hero__title-qualifier">Symbols for the</span>
            <br />
            <span className="symbols-hero__title-identity">Christian Soul</span>
          </h1>
          <p className="symbols-hero__lead">Scripture speaks in symbols.</p>
          <p className="symbols-hero__line">A lamp. A path. A flower. A vine. A shepherd.</p>
          <p className="symbols-hero__line">Ordinary things become carriers of meaning.</p>
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

        <section className="symbols-continuation" aria-label="Continue to Workshops">
          <Link href="/workshops" className="home-coll-cta home-coll-cta--light-surface">
            Continue to Workshops <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>

      <WayfindingBand />
      <Footer />
    </>
  )
}
