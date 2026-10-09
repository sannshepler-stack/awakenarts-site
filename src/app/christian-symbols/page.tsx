import type { Metadata } from 'next'
import ChristianSymbolsHero from '@/components/symbols/ChristianSymbolsHero'
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
    'Scripture speaks in symbols. A lamp. A path. A flower. A vine. A shepherd.',
  alternates: { canonical: '/christian-symbols' },
}

export default function SymbolsPage() {
  return (
    <>
      <Nav />
      <main className="symbols-page">
        <ChristianSymbolsHero />

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

        {/* 2026-10-09, Susan: Christian Symbols (recognize biblical imagery)
            leads to Christian Encounters (explore it through guided
            reflection). The four cards above still open each Encounter. */}
        <section
          className="symbols-continuation"
          aria-label="Continue"
          style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', maxWidth: 1040 }}
        >
          <Link href="/encounters" className="home-coll-cta home-coll-cta--light-surface" data-cta="christian-symbols-encounters">
            Explore the Christian Encounters
          </Link>
          <Link href="/collection" className="home-coll-cta home-coll-cta--light-surface">
            More About the Figures
          </Link>
        </section>
      </main>

      <WayfindingBand />
      <Footer />
    </>
  )
}
