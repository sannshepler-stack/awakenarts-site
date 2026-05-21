// ─── Journal — Types ─────────────────────────────────────────────────────────
// AwakenArts · The Journal
//
// Shape of a single Journal entry. Each entry pairs a symbolic motif with
// a brief orientation, a reflection prompt, and an art-journaling prompt,
// and belongs to one symbolic territory (its categorySlug).
//
// The Journal is a separate offering from The Forms. It is symbolic
// reflection and contemplative participation — not oracle, not divination,
// not therapy, not decoding.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Valid symbolic territory slugs. Limited to FIVE — this is an
 * architectural decision for pacing, readability, and coherence. Do
 * not extend this union casually; new territories require deliberate
 * curation.
 *
 * Order in this union has no runtime meaning; arc order is defined
 * in categories.ts.
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
  /** One- to two-sentence symbolic orientation. Not a definition. */
  orientation: string
  /** Reflective question for the visitor. */
  reflectionPrompt: string
  /** Art-journaling prompt — gesture-oriented, materials light. */
  artPrompt: string
}
