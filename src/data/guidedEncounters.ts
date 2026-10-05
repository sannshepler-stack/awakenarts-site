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
  description: string
  themes: string[]
}

export const guidedEncounters: GuidedEncounter[] = DETAILS.map((d) => {
  const e = editions.find((x) => x.slug === d.slug)
  if (!e) throw new Error(`Guided Encounter "${d.slug}" has no matching Edition`)
  return {
    ...d,
    title: e.title,
    image: e.contactSheet,
    imageAlt: e.contactSheetAlt,
    description: e.about,
    themes: e.themes,
  }
})

export function getGuidedEncounter(slug: string) {
  return guidedEncounters.find((g) => g.slug === slug)
}

/** Shared "what participants experience" list — existing Workshops copy, verbatim. */
export const WHAT_TO_EXPECT = [
  { lead: 'Images and poetry', text: 'encounter an original work and the symbolic territory it opens.' },
  {
    lead: 'Language we already know',
    text: 'discover familiar metaphors and expressions whose images may have become almost invisible through everyday use.',
  },
  {
    lead: 'Close reading and seeing',
    text: 'look at particular words, lines, images, relationships, rhythms, and details that give the work its substance.',
  },
  {
    lead: 'Connections and amplification',
    text: 'explore relevant literature, psychology, archetypal understanding, story, and Christian sources where they genuinely illuminate the work.',
  },
  {
    lead: 'Personal reflection',
    text: 'use conversation and an Edition journal to consider where what has been discovered intersects with lived experience.',
  },
]

export const INQUIRY_EMAIL = 'susan@shepler.us'
