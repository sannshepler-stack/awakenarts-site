// ─── /journal — Index Page ───────────────────────────────────────────────────
// AwakenArts · The Journal — archive gateway
//
// Hidden during architecture build (noindex, not in nav). The page is
// deliberately restrained: a single block of intro copy followed by an
// inline text-only navigation of the five symbolic territories.
//
// All Journal data is centralized in src/components/journal/. This page
// reads through get-entries.ts helpers, so future shifts in data shape
// do not require rewriting this template.
// ─────────────────────────────────────────────────────────────────────────────

import Link from 'next/link'
import { Fragment } from 'react'
import { getCategoriesWithCounts } from '@/components/journal/get-entries'
import styles from './page.module.css'

export default function JournalIndexPage() {
  const territories = getCategoriesWithCounts()

  return (
    <main className={styles.page}>
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

        <nav
          className={styles.territories}
          aria-label="Symbolic territories"
        >
          {territories.map(({ category, count }, index) => {
            const isLast = index === territories.length - 1

            const node =
              count === 0 ? (
                <span
                  className={styles.territoryPending}
                  aria-disabled="true"
                  title="In preparation"
                >
                  {category.name}
                </span>
              ) : (
                <Link
                  href={`/journal/${category.slug}`}
                  className={styles.territoryLink}
                >
                  {category.name}
                </Link>
              )

            return (
              <Fragment key={category.slug}>
                {node}
                {!isLast && (
                  <span className={styles.separator} aria-hidden="true">
                    ·
                  </span>
                )}
              </Fragment>
            )
          })}
        </nav>

        <p className={styles.footnote}>
          Prototype · The Journal · not yet linked from navigation
        </p>
      </div>
    </main>
  )
}
