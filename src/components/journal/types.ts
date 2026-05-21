// ─── Journal — Types ─────────────────────────────────────────────────────────
// AwakenArts · The Journal
//
// Shape of a single Journal entry. Each entry names a symbolic motif and
// belongs to one symbolic territory. Prompts (orientation, reflection,
// art) are optional — a planned symbol may appear in the archive with
// just its name before its prompts are written.
//
// Rendering convention:
//   • Entry with prompts present → expandable JournalIndexItem
//   • Entry without prompts      → non-interactive name row (planned)
//
// The Journal is a separate offering from The Forms. It is symbolic
// reflection and contemplative participation — not oracle, not divination,
// not therapy, not decoding.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Valid symbolic territory slugs. Limited to FIVE — this is an
 * architectural decision for pacing, readability, and coherence.
 */
export type CategorySlug =
  | 'thresholds'
  | 'transformation'
  | 'passage'
  | 'time-and-memory'
  | 'power-and-identity'

export interface JournalEntry {
  /** Stable slug — used as React key and for future per-entry routing. */
  slug: string
  /** Display name of the symbol (e.g. "The Dragon"). */
  name: string
  /** Primary symbolic territory this entry belongs to. */
  categorySlug: CategorySlug
  /**
   * One- to two-sentence symbolic orientation. Optional — when absent,
   * the entry is treated as a planned symbol and rendered as a
   * non-interactive name row.
   */
  orientation?: string
  /** Reflective question for the visitor. Optional (see orientation). */
  reflectionPrompt?: string
  /** Art-journaling prompt — gesture-oriented, materials light. Optional. */
  artPrompt?: string
}

/**
 * True when an entry has the full set of prompts ready. False entries
 * are planned symbols whose prompts have not yet been written.
 */
export function isEntryReady(entry: JournalEntry): boolean {
  return Boolean(
    entry.orientation && entry.reflectionPrompt && entry.artPrompt
  )
}
