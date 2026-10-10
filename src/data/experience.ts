// Experience the Language of Symbols — /language-of-symbols (Susan, 2026-10-10).
//
// Two levels:
//   - CATEGORIES: the permanent educational paths (five, plus Make Your Own
//     Word Art as a sixth, 2026-10-10). They always appear.
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
  /** Optional second image, shown beside the first so the pair fills the box. */
  img2?: string
  /** CSS object-position for photographs. */
  pos?: string
  /** True for portrait artwork (a Symbol Card, a figure), shown whole rather than cropped. */
  /** Background behind the image(s), e.g. 'var(--deep)' for transparent word art. Default: warm. */
  bg?: string
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
    // Five illustrated Symbol Cards on a sunlit table (Susan, 2026-10-10).
    img: '/images/experience/guided-courses-cards.jpg',
    pos: 'center 55%',
    offerings: [
      {
        // Draft: hidden until lessons, Symbol Cards, Kit delivery and
        // checkout are approved. No route exists yet. Wording approved by
        // Susan for when it is ready (2026-10-10). The price ($25) and an
        // enrollment link are added only when the course is complete.
        title: 'Experience the Language of Symbols \u2014 A Four-Week Guided Course',
        line: 'Four weekly lessons, four illustrated Symbol Cards, and opportunities for personal reflection.',
        href: '/courses/language-of-symbols',
        status: 'draft',
      },
    ],
  },
  {
    title: 'Presentations',
    line: 'Presentations and workshops for groups, in person.',
    href: '/presentations',
    // Mermaid Grismere, the same image and framing as the Presentations
    // page tile, so her head and hair stay in view (Susan, 2026-10-10).
    img: '/images/editions/grismere-figure.jpg',
    pos: 'center 22%',
    offerings: [],
  },
  {
    title: 'Creative Practice and the Journal',
    line: 'Read, notice, and write, then shape your own words into form.',
    href: '/journal',
    img: '/images/explore/journal-notebook.jpg',
    offerings: [],
  },
  {
    title: 'Christian Encounters',
    line: 'Five reflections in image and Scripture.',
    href: '/encounters',
    img: '/images/encounters/journey/journey-02-web-opt.jpg',
    offerings: [],
  },
  {
    // Sixth card (Susan, 2026-10-10): something to do, not only to read.
    // Line and images reused from the Explore page's Word Art section.
    title: 'Make Your Own\nWord Art',
    line: 'Bring your own words and watch them take shape.',
    href: '/experience',
    img: '/images/experiences/butterfly-wordart-opt.webp',
    img2: '/images/experiences/word-form-spiral-opt.webp',
    card: true,
    offerings: [],
  },
]

export const availableOfferings = (c: ExperienceCategory) => c.offerings.filter((o) => o.status === 'available')
