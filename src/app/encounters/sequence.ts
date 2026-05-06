/**
 * Single source of truth for the encounter chain.
 *
 * The encounters are designed to be experienced in order — each one
 * a beat in a longer arc — but the order itself is intentionally
 * editable. To reorder: rearrange the slugs. To add a new encounter:
 *   1. Create the page at /encounters/<slug>
 *   2. Append "<slug>" to ENCOUNTER_SEQUENCE below
 *
 * Whatever slug is currently last in the array automatically forwards
 * to /encounters/continuum (the "rest, more is coming" page) so no
 * encounter ever dead-ends in a 404. This means new videos can be
 * added or the order can be changed without touching any individual
 * encounter page's "forward" link.
 */
export const ENCOUNTER_SEQUENCE = [
  'mermaid',
  'dragon',
  'vase',
  'queen',
] as const

export type EncounterSlug = (typeof ENCOUNTER_SEQUENCE)[number]

/** The URL of the first encounter in the sequence (used by the intro). */
export function getFirstEncounterPath(): string {
  return `/encounters/${ENCOUNTER_SEQUENCE[0]}`
}

/**
 * Returns the URL the given encounter's "forward" link should point to.
 * If `current` is the last encounter (or unknown), returns the
 * continuation page so the visitor never lands on a 404.
 */
export function getNextEncounter(current: EncounterSlug): string {
  const idx = ENCOUNTER_SEQUENCE.indexOf(current)
  if (idx === -1 || idx === ENCOUNTER_SEQUENCE.length - 1) {
    return '/encounters/continuum'
  }
  return `/encounters/${ENCOUNTER_SEQUENCE[idx + 1]}`
}
