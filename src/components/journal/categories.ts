// ─── Journal — Symbolic Territories ──────────────────────────────────────────
// AwakenArts · The Journal
//
// FIVE symbolic territories. This is a deliberate architectural limit —
// the Journal is a curated archive, not an exhaustive taxonomy. Pacing,
// readability, and symbolic coherence depend on restraint here.
//
// These are poetic regions, not academic classifications. Some symbols
// resonate in more than one territory; the categorySlug names the
// primary belonging for navigation purposes. Do not over-systematize.
//
// Per-territory entry target: ~10 symbols (acceptable range 8–12). If a
// territory grows beyond that, the right move is to create a new
// territory — not to keep expanding the page.
//
// Arc order:
//   thresholds → transformation → passage → time & memory →
//   power & identity
// ─────────────────────────────────────────────────────────────────────────────

import type { CategorySlug } from './types'

export interface JournalCategory {
  slug: CategorySlug
  /** Display name as it appears on the index and category pages. */
  name: string
  /** Short orienting descriptor shown on the territory page. */
  description: string
}

// 2026-08-19, per the Rework Pass 2 Implementation Standard's Everyday-
// Language Standard: "Symbols associated with X, Y, Z" is a glossary
// entry, not a description of the human territory a visitor is about
// to enter (Section 7: "Journals: Describe the human territory and the
// journey through it, not simply the presence of prompts, images, or
// reflection."). Rewritten to name the actual life situation each
// territory speaks to, in ordinary language, before naming any symbol.
// Individual entry orientations (journal-entries.ts) are unchanged in
// this pass -- this covers the five territory-level descriptions only.
export const CATEGORIES: ReadonlyArray<JournalCategory> = [
  {
    slug: 'thresholds',
    name: 'Thresholds',
    description:
      "For the moments when you're leaving one thing and haven't arrived at the next — decisions, change, and the uncertainty in between.",
  },
  {
    slug: 'transformation',
    name: 'Transformation',
    description:
      "For when you're changing, even if it doesn't feel steady yet — becoming someone you weren't before.",
  },
  {
    slug: 'passage',
    name: 'Passage',
    description:
      'For the long stretch of getting somewhere — distance, direction, and what it takes to keep going.',
  },
  {
    slug: 'time-and-memory',
    name: 'Time & Memory',
    description:
      'For what you carry with you — memory, the seasons of a life, and what stays even as time moves on.',
  },
  {
    slug: 'power-and-identity',
    name: 'Power & Identity',
    description:
      'For questions of who you are and what you carry — responsibility, being seen, protecting what matters, and what it costs to hold power.',
  },
]
