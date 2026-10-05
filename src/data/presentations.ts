// Presentations & Workshops (2026-10-05, per Susan): a separate offering
// from Guided Encounters. Guided Encounters are Edition-based reflective
// experiences; Presentations & Workshops are talks and workshops for
// churches, clubs, libraries, retreats, and community groups.
// Never describe these with "Guided Encounter" language. A distinct
// marketing stream: index at /presentations, one page per presentation.
//
// Copy marked VERBATIM comes from the former /workshops page (commit
// 9d3746a). Topics and format are Susan's to supply; an empty field does
// not render.

export interface Presentation {
  /** URL name — printed on flyers as awakenarts.com/presentations/[slug]. */
  slug: string
  title: string
  /** One or two sentences, Susan's wording. */
  summary?: string
  /** What the presentation covers — short points. */
  covers?: string[]
  /** Audience / venue, e.g. 'Churches', 'Libraries'. Falls back to PRESENTATION_AUDIENCES. */
  audiences?: string[]
  /** e.g. 'Talk with discussion', 'Hands-on workshop'. */
  format?: string
  /** e.g. '60 minutes'. */
  length?: string
  /** Optional image under /public. */
  image?: string
  imageAlt?: string
  /** Related book or free resource. */
  related?: { label: string; href: string }
  /** Slug of the AwakenArts Edition this presentation is built from. */
  edition?: string
}

/** Current presentations & workshops — awaiting Susan's list. */
export const PRESENTATIONS: Presentation[] = []

export function getPresentation(slug: string) {
  return PRESENTATIONS.find((p) => p.slug === slug)
}

/** Typical format and length — Susan's wording. Empty until supplied. */
export const PRESENTATION_FORMAT: string[] = []

/** Who they are for — Susan, 2026-10-05. */
export const PRESENTATION_AUDIENCES = ['Churches', 'Clubs', 'Libraries', 'Retreats', 'Community groups']

/** VERBATIM — former Workshops page, "About the Workshops". */
export const ABOUT_WORKSHOPS = {
  lede: 'A Path of Discovery Through Image, Language, and Symbol',
  body: [
    'You already speak in images. We all do. AwakenArts takes that familiar relationship between image and language and explores what it can reveal.',
    'AwakenArts workshops are artistic and educational, offering a path of discovery through images, poetry, symbolic language, conversation, and reflection. We look more closely at what images and words carry, follow their connections, and consider what they may bring into greater awareness.',
  ],
}

/** VERBATIM — former Workshops page, "What to Expect". */
export const WORKSHOP_WHAT_TO_EXPECT = [
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

/** VERBATIM — closing line of "What to Expect". */
export const WORKSHOP_DIRECTION =
  'Each workshop travels a different symbolic landscape, but the direction remains the same: toward greater recognition, awareness, wholeness, and connection.'
