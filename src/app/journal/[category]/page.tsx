// ─── /journal/[category] — Dynamic Territory Page ───────────────────────────
// AwakenArts · The Journal — one symbolic territory
//
// Hierarchy (top to bottom):
//   1. topBar       — upper-left ← Home (site nav, standalone)
//   2. masthead     — ← Back to Journal (section return)
//                     + territory subnav (lateral movement)
//   3. header       — large current-territory title + short descriptor
//   4. list         — symbol entries (expandable via JournalIndexItem)
//
// Each tier gets its own vertical breathing room so the layers read
// as distinct rather than collapsing into a compressed nav strip.
//
// One template renders every territory page. Entries are filtered from
// the centralized data via getEntriesByCategory(). Static params are
// generated for the five known territory slugs; unknown slugs fall
// through to notFound().
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
      {/* 1. Site nav — upper-left, standalone */}
      <div className={styles.topBar}>
        <Link href="/" className={styles.homeLink}>
          <span className={styles.homeArrow} aria-hidden="true">
            ←
          </span>
          Home
        </Link>
      </div>

      <div className={styles.container}>
        {/* 2. Section return + lateral territory navigation */}
        <div className={styles.masthead}>
          <Link href="/journal" className={styles.backToJournal}>
            <span className={styles.backArrow} aria-hidden="true">
              ←
            </span>
            Back to Journal
          </Link>
          <TerritoryNav
            variant="subnav"
            currentSlug={category.slug}
            ariaLabel="Symbolic territories"
          />
        </div>

        {/* 3. Current territory title + descriptor */}
        <header className={styles.header}>
          <h1 className={styles.title}>{category.name}</h1>
          <p className={styles.description}>{category.description}</p>
          <div className={styles.divider} aria-hidden="true" />
        </header>

        {/* 4. Symbol list */}
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
