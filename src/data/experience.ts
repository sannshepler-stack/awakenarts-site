// Experience the Language of Symbols — /language-of-symbols (Susan, 2026-10-10).
//
// Two levels:
//   - CATEGORIES: the five permanent educational paths. They always appear.
//   - offerings: individual courses, presentations or practices inside a
//     category. Only offerings with status 'available' appear on the site.
//
// To add a course or presentation, add an offering to its category. The
// page lays itself out from this file and needs no redesign.
//
// Nothing about enrollment, payment or price appears until Susan approves
// the lessons, Symbol Cards, Kit delivery and checkout. Keep a new offering
// at status 'draft' until then.

export type OfferingStatus = 'available' | 'draft'

export interface ExperienceOffering {
  title: string
  line?: string
  href: string
  status: OfferingStatus
}

export interface ExperienceCategory {
  title: string
  /** One short line under the title. */
  line: string
  /** The category's own page, when it has one. */
  href?: string
  /** Shown when the category has no page and no available offerings yet. */
  emptyNote?: string
  img: string
  /** CSS object-position for photographs. */
  pos?: string
  /** True for a portrait Symbol Card image, shown whole rather than cropped. */
  card?: boolean
  offerings: ExperienceOffering[]
}

export const EXPERIENCE_CATEGORIES: ExperienceCategory[] = [
  {
    title: 'The AwakenArts Path',
    line: 'Explore what symbol awareness can teach.',
    href: '/awakenarts-path',
    img: '/images/headers/awakenarts-path-landscape.jpg',
    pos: 'center 60%',
    offerings: [],
  },
  {
    title: 'Guided Courses',
    line: 'Learning to work with symbolic language, one lesson at a time.',
    emptyNote: 'Coming soon',
    img: '/images/symbols/Lamp_Card_Front-opt.jpg',
    card: true,
    offerings: [
      {
        // Draft: hidden until lessons, Symbol Cards, Kit delivery and
        // checkout are approved. No route exists yet.
        title: 'Experience the Language of Symbols: Four Weeks',
        line: 'One lesson and one illustrated Symbol Card each week.',
        href: '/courses/language-of-symbols',
        status: 'draft',
      },
    ],
  },
  {
    title: 'Presentations',
    line: 'Presentations and workshops for groups, in person.',
    href: '/presentations',
    img: '/images/headers/gallery-desk.jpg',
    offerings: [],
  },
  {
    title: 'Creative Practice and the Journal',
    line: 'Read, notice, and write, then shape your own words into form.',
    href: '/journal',
    img: '/images/explore/journal-notebook.jpg',
    offerings: [{ title: 'Make Your Own Word Art', href: '/experience', status: 'available' }],
  },
  {
    title: 'Christian Encounters',
    line: 'Five reflections in image and Scripture.',
    href: '/encounters',
    img: '/images/encounters/journey/journey-02-web-opt.jpg',
    offerings: [],
  },
]

export const availableOfferings = (c: ExperienceCategory) => c.offerings.filter((o) => o.status === 'available')
