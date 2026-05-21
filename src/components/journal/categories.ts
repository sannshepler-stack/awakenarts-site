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

export const CATEGORIES: ReadonlyArray<JournalCategory> = [
  {
    slug: 'thresholds',
    name: 'Thresholds',
    description:
      'Symbols associated with transition, crossing points, uncertainty, and movement between states or conditions.',
  },
  {
    slug: 'transformation',
    name: 'Transformation',
    description:
      'Symbols associated with change, emergence, instability, adaptation, and internal movement.',
  },
  {
    slug: 'passage',
    name: 'Passage',
    description:
      'Symbols associated with travel, distance, direction, continuation, and movement through experience.',
  },
  {
    slug: 'time-and-memory',
    name: 'Time & Memory',
    description:
      'Symbols associated with memory, reflection, continuity, seasons, and the passage of time.',
  },
  {
    slug: 'power-and-identity',
    name: 'Power & Identity',
    description:
      'Symbols associated with authority, burden, visibility, responsibility, protection, and identity.',
  },
]
