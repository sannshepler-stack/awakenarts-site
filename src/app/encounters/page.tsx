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
import { ExperienceNav } from './_shared/ExperienceNav'
import styles from './encounters-index.module.css'

const ENCOUNTERS = [
  {
    slug: 'journey',
    label: 'Encounter I',
    title: 'Journey',
    mantra: 'I begin.',
    image: '/images/encounters/journey/journey-01-web.png',
    position: 'center 38%',
  },
  {
    slug: 'deep',
    label: 'Encounter II',
    title: 'The Deep',
    mantra: 'I encounter.',
    image: '/images/encounters/deep/deep-01-web.png',
    position: 'center',
  },
  {
    slug: 'table',
    label: 'Encounter III',
    title: 'The Table',
    mantra: 'I receive.',
    image: '/images/encounters/table/table-01-web.png',
    position: 'center 62%',
  },
  {
    slug: 'word',
    label: 'Encounter IV',
    title: 'The Word',
    mantra: 'I listen.',
    image: '/images/encounters/word/word-01-web.png',
    position: 'center 55%',
  },
  {
    slug: 'continue',
    label: 'Encounter V',
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
              <p className={styles.cardLabel}>{e.label}</p>
              <p className={styles.cardTitle}>{e.title}</p>
              <p className={styles.cardMantra}>{e.mantra}</p>
            </div>
          </Link>
        ))}
      </nav>

      {/* Experience Navigation (Claude Directive "Experience Navigation
          Refinement," 2026-06-25): belongs to the Encounter sequence
          itself, not the site's global nav — no bar, no band, no box,
          gold typography only, directly on the page's existing dark
          background. No single stage is "current" on the index, so
          nothing is highlighted here; each link still moves a visitor
          straight into that stage. */}
      <div className={styles.experienceNavWrap}>
        <ExperienceNav />
      </div>

      <WayfindingBand />
    </main>
  )
}
