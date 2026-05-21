// ─── Journal — Data Helpers ──────────────────────────────────────────────────
// AwakenArts · The Journal
//
// All pages that consume Journal data should go through these helpers
// rather than reading JOURNAL_ENTRIES directly. Centralizing access here
// makes future shifts (renaming a territory, lazy-loading, paginating)
// possible without rewriting every page.
// ─────────────────────────────────────────────────────────────────────────────

import { CATEGORIES, type JournalCategory } from './categories'
import { JOURNAL_ENTRIES } from './journal-entries'
import type { CategorySlug, JournalEntry } from './types'

/**
 * All entries belonging to a territory, in the order they appear in
 * the master data file. Returns an empty array if no entries are yet
 * assigned to the territory.
 */
export function getEntriesByCategory(
  slug: CategorySlug
): ReadonlyArray<JournalEntry> {
  return JOURNAL_ENTRIES.filter((entry) => entry.categorySlug === slug)
}

/** Look up a territory by its slug. Returns undefined if unknown. */
export function getCategoryBySlug(
  slug: string
): JournalCategory | undefined {
  return CATEGORIES.find((c) => c.slug === slug)
}

/**
 * Territories paired with their current entry counts, in the arc order
 * defined in categories.ts. Used by the /journal index.
 */
export interface CategoryWithCount {
  category: JournalCategory
  count: number
}

export function getCategoriesWithCounts(): ReadonlyArray<CategoryWithCount> {
  return CATEGORIES.map((category) => ({
    category,
    count: getEntriesByCategory(category.slug).length,
  }))
}

/** All five territory slugs, for static-param generation. */
export function getAllCategorySlugs(): ReadonlyArray<CategorySlug> {
  return CATEGORIES.map((c) => c.slug)
}
