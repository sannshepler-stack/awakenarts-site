// ─── /journal/[category] — Dynamic Territory Page ───────────────────────────
// AwakenArts · The Journal — one symbolic territory
//
// One template renders every territory page. Entries are filtered from
// the centralized data via getEntriesByCategory(). To add or remove
// territories, edit categories.ts and types.ts — this file does not
// need to change.
//
// Static params are generated for the five known territory slugs.
// Unknown slugs fall through to notFound().
//
// Page rhythm matches Susan's directive flow:
//   1. "The Journal" brand link        (small, returns to /journal)
//   2. Territory subnav                (current territory marked)
//   3. Current territory title         (large)
//   4. Short symbolic descriptor       (italic)
//   5. Symbol list                     (expandable entries)
//
// JournalIndexItem (from /journal-prototype-v2) is reused unchanged.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import JournalIndexItem from '@/components/journal/JournalIndexItem'
import TerritoryNav from '@/components/journal/TerritoryNav'
import {
  getAllCategorySlugs,
  getCategoryBySlug,
  getEntriesByCategory,
} from '@/components/journal/get-entries'
import styles from './page.module.css'

interface CategoryPageProps {
  params: { category: string }
}

// ─── Pre-render every known territory at build time ────────────────────────
export function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ category: slug }))
}

// ─── Per-territory metadata (still noindex while in prototype) ─────────────
export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const category = getCategoryBySlug(params.category)

  if (!category) {
    return {
      title: 'The Journal',
      robots: { index: false, follow: false },
    }
  }

  return {
    title: `${category.name} — The Journal`,
    description: category.description,
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: { index: false, follow: false },
    },
  }
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default function JournalCategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.category)
  if (!category) {
    notFound()
  }

  const entries = getEntriesByCategory(category.slug)

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* Masthead: return links + territory subnav */}
        <div className={styles.masthead}>
          <div className={styles.returnLinks}>
            <Link href="/" className={styles.returnLink}>
              <span className={styles.returnArrow} aria-hidden="true">
                ←
              </span>
              Home
            </Link>
            <span className={styles.returnSeparator} aria-hidden="true">
              ·
            </span>
            <Link href="/journal" className={styles.returnLink}>
              <span className={styles.returnArrow} aria-hidden="true">
                ←
              </span>
              Back to Journal
            </Link>
          </div>
          <TerritoryNav
            variant="subnav"
            currentSlug={category.slug}
            ariaLabel="Symbolic territories"
          />
        </div>

        {/* Header: current territory title + descriptor */}
        <header className={styles.header}>
          <h1 className={styles.title}>{category.name}</h1>
          <p className={styles.description}>{category.description}</p>
          <div className={styles.divider} aria-hidden="true" />
        </header>

        {/* Symbol list */}
        {entries.length === 0 ? (
          <div className={styles.emptyState} role="status">
            This territory is in preparation. New symbols are written and
            added here as the Journal grows.
          </div>
        ) : (
          <ul
            className={styles.list}
            aria-label={`${category.name} — journal entries`}
          >
            {entries.map((entry) => (
              <JournalIndexItem key={entry.slug} entry={entry} />
            ))}
          </ul>
        )}

        <p className={styles.footnote}>
          Prototype · {category.name} · part of The Journal
        </p>
      </div>
    </main>
  )
}
