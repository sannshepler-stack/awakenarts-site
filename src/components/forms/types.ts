// ─── Forms — Types ───────────────────────────────────────────────────────────
// AwakenArts · The Forms — Symbolic Forms Collection
//
// Shape of a single Form entry. Forms are the authored poem-forms from
// the AwakenArts Symbolic Forms Collection — image-shaped poems with
// authored titles (e.g. "Queen Ann", "Mermaid Grismere", "The Dragon").
//
// IMPORTANT: Forms are not Journal entries.
//   • Forms use authored poem/form names from the Collection.
//   • Journal uses general symbolic motifs (The Crown, The Doorway, …).
// Do not mix the two systems.
//
// The Forms page presents each Form as a still image plus the poem name.
// No interpretations, no journal prompts, no symbol explanations, no
// full poem text. The complete works are held within the Collection
// itself; the page is a visual threshold.
// ─────────────────────────────────────────────────────────────────────────────

export interface SymbolicForm {
  /** Stable slug — used as React key and for future per-Form routing. */
  slug: string
  /** Authored poem / form name (e.g. "Queen Ann"). */
  name: string
  /**
   * Path to the Form's still image (e.g. "/images/figures/ann/ann.png").
   * Optional — when absent, the panel renders as a restrained
   * name-only placeholder.
   */
  imageSrc?: string
  /** Accessible alt text for the image. Recommended when imageSrc set. */
  imageAlt?: string
}

/** True when the Form has an image asset attached. */
export function hasImage(form: SymbolicForm): boolean {
  return Boolean(form.imageSrc)
}
