// Encounters — index (2026-06-25 "Begin New Encounter Architecture").
//
// Replaces the earlier "Choose a Path" video threshold, which opened onto
// a list of figure-named Paths (Homeward Paths/Dragon/Bowls/Ballerina/
// Poppy). Per Susan's directive, Encounters are no longer figure-tied or
// built toward being completed teaching pages — they are atmospheric
// points of entry into the symbolic world of AwakenArts, and this is now
// the section's primary landing page.
//
// The five encounters below are listed in the locked sequence: Journey,
// The Deep, The Table, The Word, Continue. The figure-tied encounters
// (Dragon, Bowls/Vase, Queen, Butterfly, and the prototype formerly at
// /encounters/mermaid) are intentionally not linked here — set aside per
// the directive, not deleted. See AwakenArts_Site_Architecture.md.

import Link from 'next/link'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import styles from './encounters-index.module.css'

// Card kickers ("Encounter I", "Encounter II"...) were removed 2026-06-25
// per Susan: no numbering, no repeating the word "Encounter" — the
// sequence should read by title alone, and stay clean as more
// encounters are added later.
const ENCOUNTERS = [
  {
    slug: 'journey',
    title: 'Journey',
    mantra: 'I begin.',
    image: '/images/encounters/journey/journey-01-web.png',
    position: 'center 38%',
  },
  {
    slug: 'deep',
    title: 'The Deep',
    mantra: 'I encounter.',
    image: '/images/encounters/deep/deep-01-web.png',
    position: 'center',
  },
  {
    slug: 'table',
    title: 'The Table',
    mantra: 'I receive.',
    image: '/images/encounters/table/table-01-web.png',
    position: 'center 62%',
  },
  {
    slug: 'word',
    title: 'The Word',
    mantra: 'I listen.',
    image: '/images/encounters/word/word-01-web.png',
    position: 'center 55%',
  },
  {
    slug: 'continue',
    title: 'Continue',
    mantra: 'I walk on.',
    image: '/images/encounters/continue/continue-01-web.png',
    position: 'center 45%',
  },
] as const

export default function EncountersIndexPage() {
  return (
    <main className={styles.page}>
      <div className={styles.intro}>
        <Link href="/" className={styles.brand}>
          AWAKENARTS
        </Link>
        <p className={styles.eyebrow}>Encounters</p>
        <h1 className={styles.title}>Encounters</h1>
        <p className={styles.statementPrimary}>
          Discover symbolic language through image and poem.
        </p>
        <p className={styles.statementSecondary}>
          Quiet doorways into the symbolic world of AwakenArts.
        </p>
      </div>

      <nav className={styles.grid} aria-label="Encounters">
        {ENCOUNTERS.map((e) => (
          <Link
            key={e.slug}
            href={`/encounters/${e.slug}`}
            className={styles.card}
            style={{ backgroundImage: `url('${e.image}')`, backgroundPosition: e.position }}
          >
            <div className={styles.cardScrim} />
            <div className={styles.cardInner}>
              <p className={styles.cardTitle}>{e.title}</p>
              <p className={styles.cardMantra}>{e.mantra}</p>
            </div>
          </Link>
        ))}
      </nav>

      {/* Per Susan's "Global Page Architecture Standard" directive
          (2026-06-25): the text navigation that used to sit below the
          card grid ("Encounter I · Journey · Encounter II · The Deep ·
          ...") has been removed entirely, not just de-numbered — "Do
          not duplicate navigation by listing Encounter I/II/III...
          This text navigation should be removed... the cards already
          communicate [the sequence]." The cards are the navigation;
          generous breathing space now leads straight from the grid
          into the global Wayfinding Band, then the Standard Footer. */}
      <WayfindingBand />
      <Footer />
    </main>
  )
}
