// Presentations & Workshops — what Susan delivers (2026-10-05, Susan):
//   Editions = the product line, for exploration (/editions).
//   Presentation / workshop / Guided Encounter = a separate offering where
//   people register (/presentations/[slug]). It is NOT founded on an
//   Edition, and its page carries no Edition material. An Edition page may
//   link to a related presentation (e.g. the Grismere Edition → the
//   Grismere workshop).
//
// Copy marked VERBATIM comes from the former /workshops page (commit
// 9d3746a). Topics and format are Susan's to supply; an empty field does
// not render.

export interface PresentationSignup {
  mode: 'notify' | 'register'
  /** Kit tag for "notify me" sign-ups, e.g. KIT_TAG_GRISMERE_NOTIFY. */
  notifyTagEnv: string
  /** Kit tag on every registrant (starts the one confirmation email). */
  registerTagEnv?: string
  /** The scheduled event — required for 'register'. eventTagEnv is a tag for
   *  this one date, so Kit can tell registrations for different dates apart. */
  event?: { when: string; where: string; eventTagEnv: string }
}

export interface Presentation {
  /** URL name — printed on flyers as awakenarts.com/presentations/[slug]. */
  slug: string
  title: string
  /** Short name for running text, e.g. 'Mermaid Grismere'. Falls back to title. */
  shortTitle?: string
  /** e.g. 'A Guided Encounter with the Grismere Edition'. */
  subtitle?: string
  /** One or two sentences, Susan's wording. */
  summary?: string
  /** What happens in the presentation — Susan's wording. */
  happens?: string[]
  /** What participants will see or do — short points, Susan's wording. */
  participants?: string[]
  /** What the presentation covers — short points. */
  covers?: string[]
  /** Audience / venue, e.g. 'Churches', 'Libraries'. Falls back to PRESENTATION_AUDIENCES. */
  audiences?: string[]
  /** e.g. 'Talk with discussion', 'Hands-on workshop'. */
  format?: string
  /** e.g. '60 minutes'. */
  length?: string
  /** Presentation-specific image under /public (not the Edition's own
   *  artwork, once Susan supplies one). */
  image?: string
  imageAlt?: string
  /** CSS object-position for the cropped tile image, e.g. 'center 30%'. Default: centered. */
  imagePosition?: string
  /** Related book or free resource. */
  related?: { label: string; href: string }
  /** Short pitch shown on a related Edition's page — Susan's wording. */
  editionPitch?: string
  /** Attendee sign-up (2026-10-08, Susan). Two states:
   *  'notify'   — no date yet: "Notify Me About Upcoming Presentations".
   *  'register' — once a date and place are confirmed: "Register for This
   *               Presentation", with the event shown on the page.
   *  Sign-ups go to Kit with tags only — never onto the Encounter Journal /
   *  newsletter list. Each tag is an env var holding Kit's numeric tag ID. */
  signup?: PresentationSignup
  /** Materials that accompany the presentation — Susan's wording. */
  materials?: { title: string; line: string; note?: string }[]
  /** Edition pages that link to this presentation. Shown only there —
   *  never on the presentation page itself. */
  editions?: string[]
}

/** Current presentations & workshops. */
export const PRESENTATIONS: Presentation[] = [
  {
    slug: 'grismere',
    // Public-facing title (Susan, 2026-10-08). "Guided Encounter" stays as
    // the format: a description of the experience, not the title.
    title: 'Mermaid Grismere: Beneath the Surface',
    shortTitle: 'Mermaid Grismere',
    subtitle: 'A 75-Minute AwakenArts\u00A0Presentation',
    // DRAFT for Susan's approval — drawn from the Grismere Edition's own copy.
    // What happens / what participants see or do / a presentation image:
    // awaiting Susan (the figure artwork stands in until then).
    summary:
      'Exploring the hidden and the revealed through image, poetry, story, and symbolic language.',
    format: 'Guided Encounter',
    length: '75 minutes',
    // 2026-10-05, Susan: no church-specific audience unless approved later.
    // Add further settings here as they are approved.
    audiences: ['Libraries', 'Clubs', 'Community Groups'],
    image: '/images/editions/grismere-figure.jpg',
    imageAlt: 'Grismere — the figure artwork',
    // Keep her head and hair in the 3:2 tile (Susan, 2026-10-10).
    imagePosition: 'center 30%',
    editions: ['grismere'],
    // 2026-10-08, Susan: attendees first. No date yet, so "Notify Me".
    // When a date is set: mode 'register' + event { when, where,
    // eventTagEnv } (a new Kit tag for that date). No Symbol Card promise.
    signup: {
      mode: 'notify',
      notifyTagEnv: 'KIT_TAG_GRISMERE_NOTIFY',
      registerTagEnv: 'KIT_TAG_GRISMERE',
    },
    materials: [
      {
        title: 'Grismere Workbook',
        line: 'A participant workbook designed to accompany the Guided Encounter.',
        note: 'Revealed during the presentation',
      },
      { title: 'Going Further', line: 'Additional material for continued reflection after the presentation.' },
    ],
    editionPitch:
      'The Grismere presentation brings selected images, poetry, reflection, and conversation into a facilitated experience.',
  },
]

export function getPresentation(slug: string) {
  return PRESENTATIONS.find((p) => p.slug === slug)
}

/** Typical format and length — Susan's wording. Empty until supplied. */
export const PRESENTATION_FORMAT: string[] = []

/** Who they are for — Susan, 2026-10-05. */
// 2026-10-07, Susan: Churches fall under Community Groups.
export const PRESENTATION_AUDIENCES = ['Clubs', 'Libraries', 'Retreats', 'Community Groups']

/** VERBATIM — former Workshops page, "About the Workshops". */
export const ABOUT_WORKSHOPS = {
  lede: 'A Path of Discovery Through Image, Language, and Symbol',
  body: [
    // First two sentences left off (Susan, 2026-10-07): they repeat the homepage and Symbols page.
    'AwakenArts takes the familiar relationship between image and language and explores what it can reveal.',
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

/** Register only when a date and place are actually set; otherwise Notify Me. */
export function signupMode(p?: Presentation): 'notify' | 'register' | undefined {
  if (!p?.signup) return undefined
  return p.signup.mode === 'register' && p.signup.event ? 'register' : 'notify'
}
