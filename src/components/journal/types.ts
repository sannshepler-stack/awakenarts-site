// ─── Journal — Types ─────────────────────────────────────────────────────────
// AwakenArts · /journal-prototype
//
// Shape of a single Journal entry. Each entry pairs a symbolic motif with
// a brief orientation, a reflection prompt, and an art-journaling prompt.
//
// The Journal is a separate offering from The Forms. It is symbolic
// reflection and contemplative participation — not oracle, not divination,
// not therapy, not decoding.
// ─────────────────────────────────────────────────────────────────────────────

export interface JournalEntry {
  /** Stable slug — used as React key and for future routing if exposed. */
  slug: string
  /** Display name of the symbol (e.g. "The Dragon"). */
  name: string
  /** One- to two-sentence symbolic orientation. Not a definition. */
  orientation: string
  /** Reflective question for the visitor. */
  reflectionPrompt: string
  /** Art-journaling prompt — gesture-oriented, materials light. */
  artPrompt: string
}
