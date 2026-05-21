// ─── TerritoryNav ────────────────────────────────────────────────────────────
// AwakenArts · The Journal
//
// Inline literary navigation across the five symbolic territories.
// Shared between the /journal gateway and each /journal/[category] page
// so the navigation reads identically across the archive.
//
// Variants:
//   gateway → large, foreground nav on the root /journal page
//   subnav  → smaller secondary nav at the top of each territory page
//
// The currentSlug (if provided) is rendered as plain (non-link) text;
// it indicates "you are here" without offering navigation to self.
// Empty territories (no entries yet) render as low-opacity pending text.
// ─────────────────────────────────────────────────────────────────────────────

import Link from 'next/link'
import { Fragment } from 'react'
import styles from './TerritoryNav.module.css'
import { getCategoriesWithCounts } from './get-entries'
import type { CategorySlug } from './types'

interface TerritoryNavProps {
  /** When set, this territory renders as plain text (not a link). */
  currentSlug?: CategorySlug
  /** Visual variant. */
  variant?: 'gateway' | 'subnav'
  /** Optional ARIA label override. */
  ariaLabel?: string
}

export default function TerritoryNav({
  currentSlug,
  variant = 'gateway',
  ariaLabel,
}: TerritoryNavProps) {
  const territories = getCategoriesWithCounts()
  const navClass = [styles.nav, styles[variant]].filter(Boolean).join(' ')

  return (
    <nav
      className={navClass}
      aria-label={ariaLabel ?? 'Symbolic territories'}
    >
      {territories.map(({ category, count }, index) => {
        const isLast = index === territories.length - 1
        const isCurrent = category.slug === currentSlug

        let node: React.ReactNode
        if (isCurrent) {
          node = (
            <span
              className={styles.current}
              aria-current="page"
            >
              {category.name}
            </span>
          )
        } else if (count === 0) {
          node = (
            <span
              className={styles.pending}
              aria-disabled="true"
              title="In preparation"
            >
              {category.name}
            </span>
          )
        } else {
          node = (
            <Link
              href={`/journal/${category.slug}`}
              className={styles.link}
            >
              {category.name}
            </Link>
          )
        }

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
  )
}
