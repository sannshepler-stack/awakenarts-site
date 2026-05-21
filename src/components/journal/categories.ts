// ─── Journal — Symbolic Territories ──────────────────────────────────────────
// AwakenArts · The Journal
//
// FIVE symbolic territories. This is a deliberate architectural limit —
// the Journal is a curated archive, not an exhaustive taxonomy. Pacing,
// readability, and symbolic coherence depend on restraint here.
//
// These are poetic territories, not academic classifications. Some
// symbols could resonate in more than one region; the categorySlug
// names the primary belonging for navigation purposes. Do not
// over-systematize.
//
// Arc order:
//   thresholds → transformation → passage → time & memory →
//   power & identity
//
// To add a category later: this is a deliberate decision, not a casual
// edit. Update the CategorySlug union in types.ts and add the entry
// here in the desired arc position.
// ─────────────────────────────────────────────────────────────────────────────

import type { CategorySlug } from './types'

export interface JournalCategory {
  slug: CategorySlug
  /** Display name as it appears on the index and category pages. */
  name: string
  /** Short orienting description shown on the territory page. */
  description: string
}

export const CATEGORIES: ReadonlyArray<JournalCategory> = [
  {
    slug: 'thresholds',
    name: 'Thresholds',
    description:
      'Liminal places — doorways, openings, the edges where one state gives way to another.',
  },
  {
    slug: 'transformation',
    name: 'Transformation',
    description:
      'Becoming — fragility, emergence, fire and water and the changing shape of an unfinished self.',
  },
  {
    slug: 'passage',
    name: 'Passage',
    description:
      'Movement and journey — what carries us across, what guides us through, what arrives.',
  },
  {
    slug: 'time-and-memory',
    name: 'Time & Memory',
    description:
      'Seasons, cycles, the long return — what continues, what is preserved, what is lost.',
  },
  {
    slug: 'power-and-identity',
    name: 'Power & Identity',
    description:
      'Visibility and concealment, responsibility and recognition, the shape and weight of who one is.',
  },
]
