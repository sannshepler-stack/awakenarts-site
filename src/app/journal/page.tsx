// ─── /journal — Index Page ───────────────────────────────────────────────────
// AwakenArts · The Journal — archive gateway
//
// Hidden during architecture build (noindex, not in nav). Restrained
// literary gateway:
//
//   • topBar (upper-left): ← Home — site-level return, standalone
//   • centered identity block: eyebrow + title + lede + intro
//   • symbolic territory navigation
//   • footnote
//
// The Home link is deliberately separated from the centered "The Journal"
// identity so the two read as distinct elements (site nav vs. page
// identity), with breathing room between them.
//
// All Journal data is centralized in src/components/journal/.
// ─────────────────────────────────────────────────────────────────────────────

import Link from 'next/link'
import TerritoryNav from '@/components/journal/TerritoryNav'
import styles from './page.module.css'

export default function JournalIndexPage() {
  return (
    <main className={styles.page}>
      <div className={styles.topBar}>
        <Link href="/" className={styles.homeLink}>
          <span className={styles.homeArrow} aria-hidden="true">
            ←
          </span>
          Home
        </Link>
      </div>

      <div className={styles.container}>
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
