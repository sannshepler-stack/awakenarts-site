// ─── /journal — Index Page ───────────────────────────────────────────────────
// AwakenArts · The Journal — archive gateway
//
// Hidden during architecture build (noindex, not in nav). Deliberately
// restrained: a single block of intro copy followed by inline navigation
// of the five symbolic territories, rendered by the shared TerritoryNav
// component (gateway variant).
//
// All Journal data is centralized in src/components/journal/.
// ─────────────────────────────────────────────────────────────────────────────

import Link from 'next/link'
import TerritoryNav from '@/components/journal/TerritoryNav'
import styles from './page.module.css'

export default function JournalIndexPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.homeLink}>
          <span className={styles.homeArrow} aria-hidden="true">
            ←
          </span>
          Home
        </Link>

        <span className={styles.eyebrow}>The Journal</span>
        <h1 className={styles.title}>The Journal</h1>

        <p className={styles.lede}>
          Symbolic reflections and journal prompts inspired by recurring
          motifs, contemplative imagery, and the larger language of
          symbolic form.
        </p>
        <p className={styles.intro}>
          Each symbolic territory gathers reflective entries intended to
          encourage observation, imagination, contemplation, and creative
          exploration.
        </p>

        <span className={styles.territoriesLabel}>Symbolic Territories</span>
        <TerritoryNav variant="gateway" />

        <p className={styles.footnote}>
          Prototype · The Journal · not yet linked from navigation
        </p>
      </div>
    </main>
  )
}
