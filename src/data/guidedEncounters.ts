import { editions } from '@/data/editions'

// Guided Encounters (2026-10-05, Rebuild Plan §5) — the public name for the
// live, Susan-led sessions formerly presented as Workshops.
//
// Built FROM the Figure Edition data: title, image, description and themes
// are reused word for word (src/data/editions.ts stays the source).
// Event details (who it's for, dates, place, cost) are Susan's to supply;
// a field left undefined does not render.
//
// D3 (approved): Grismere is the current open offering; the other five are
// "available to host".

export type EncounterStatus = 'open' | 'host'

export interface GuidedEncounterDetails {
  slug: string
  status: EncounterStatus
  /** e.g. '75 minutes'. */
  length?: string
  /** Who it is for — Susan's wording. */
  audience?: string
  /** Upcoming sessions, Susan's wording, e.g. 'Saturday, November 8 · 10 a.m. · Georgetown'. */
  sessions?: string[]
  /** e.g. 'Free', '$25', 'Donation'. */
  cost?: string
  /** A companion online reader, when one is complete (D8). */
  companionReader?: string
}

const DETAILS: GuidedEncounterDetails[] = [
  { slug: 'grismere', status: 'open', length: '75 minutes' },
  { slug: 'dragon', status: 'host', companionReader: '/editions/dragon/read' },
  { slug: 'queen-ann', status: 'host' },
  { slug: 'bowls', status: 'host' },
  { slug: 'ballerina', status: 'host' },
  { slug: 'poppy', status: 'host' },
]

export interface GuidedEncounter extends GuidedEncounterDetails {
  title: string
  image: string
  imageAlt: string
  /** The Edition itself (its page contact sheet) — shown where the page
   *  explains which Edition an Encounter is built from. */
  editionImage: string
  editionImageAlt: string
  description: string
  themes: string[]
}

export const guidedEncounters: GuidedEncounter[] = DETAILS.map((d) => {
  const e = editions.find((x) => x.slug === d.slug)
  if (!e) throw new Error(`Guided Encounter "${d.slug}" has no matching Edition`)
  return {
    ...d,
    title: e.title,
    // 2026-10-05, per Susan: a Guided Encounter is its own thing, not the
    // Edition's presentation pages — so it is shown by the Figure's artwork,
    // never the Edition contact sheet.
    image: `/images/editions/${d.slug}-figure.jpg`,
    imageAlt: `${e.title} — the figure artwork`,
    editionImage: e.contactSheet,
    editionImageAlt: e.contactSheetAlt,
    description: e.about,
    themes: e.themes,
  }
})

export function getGuidedEncounter(slug: string) {
  return guidedEncounters.find((g) => g.slug === slug)
}

export const INQUIRY_EMAIL = 'susan@shepler.us'

/** "Grismere" → "the Grismere Edition"; "The Dragon" → "the Dragon Edition". */
export function editionPhrase(title: string) {
  return `the ${title.replace(/^The\s+/i, '')} Edition`
}
