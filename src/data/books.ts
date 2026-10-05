// Books & Journals (2026-10-05, Rebuild Plan §6).
//
// Books are valuable paid work, presented with a clear buy link — not
// giveaways. D5 (final links per edition) is PROVISIONAL: a buy button
// appears only when `buyUrl` is set AND `linkConfirmed` is true.
// Facts below come from Susan's own project records; anything not yet
// supplied (cover, blurb, sample spreads) is left undefined and does not
// render.

// 'available' shows AVAILABLE NOW; 'coming' shows no label (2026-10-05,
// per Susan: never one blanket status; hide it until it's accurate).
export type BookStatus = 'available' | 'coming'

export interface Book {
  slug: string
  title: string
  subtitle?: string
  tagline?: string
  status: BookStatus
  /** Cover image under /public. Without one, a typographic cover is drawn. */
  cover?: string
  coverAlt?: string
  /** Short description — the back-cover blurb, Susan's wording. */
  description?: string[]
  /** Sample spread images under /public. */
  samples?: { src: string; alt: string }[]
  details?: { label: string; value: string }[]
  buyUrl?: string
  buyLabel?: string
  /** D5 gate: true only once Susan confirms this exact link. */
  linkConfirmed?: boolean
  /** One related next step into the AwakenArts world. */
  related?: { label: string; href: string }
}

export const books: Book[] = [
  {
    slug: 'shape-symbol-and-story',
    title: 'Shape, Symbol & Story',
    subtitle: 'Journeys to Awareness',
    tagline: 'The images came first. Understanding came after.',
    status: 'coming',
    // Source: SHAPE_SYMBOL_STORY/output/Shape_Symbol_Story_COVER_FRONT_PRINT_v02.png (6 × 9 print front)
    cover: '/images/books/shape-symbol-story-cover.jpg',
    coverAlt: 'Cover of Shape, Symbol & Story by Susan Ann Shepler',
  },
  {
    slug: 'where-you-stand',
    title: 'Where You Stand',
    subtitle: 'A Seek & Find Journal',
    status: 'coming',
    // Source: KINGS & QUEENS/REVISION_2026-09-26/Where_You_Stand_FRONT_COVER_for_ISBN_2026-09-28.jpg
    cover: '/images/books/where-you-stand-cover.jpg',
    coverAlt: 'Cover of Where You Stand: A Seek & Find Journal',
    details: [
      { label: 'Format', value: 'Paperback, 8.5 × 11 in' },
      { label: 'Edition', value: 'Second edition' },
      { label: 'ISBN', value: '979-8-9975058-2-0' },
    ],
  },
  {
    slug: 'whispers-of-awareness',
    title: 'Whispers of Awareness',
    subtitle: 'Awakening Through Art, Stories, and Symbols',
    status: 'coming',
    // Source: AARTS PROJECTS/WHISPERS 2ND EDITION KDP/WhispersCover.jpg (2026-10-02)
    cover: '/images/books/whispers-of-awareness-cover.jpg',
    coverAlt: 'Cover of Whispers of Awareness by Susan Ann Shepler',
    details: [
      { label: 'Format', value: 'Paperback, 6 × 9 in, full color' },
      { label: 'Edition', value: 'Second edition' },
      { label: 'ISBN', value: '979-8-9975058-3-7' },
    ],
    // First-edition Amazon link already on the site (/quotes). Held until
    // Susan confirms which edition's link belongs here (D5).
    buyUrl: 'https://www.amazon.com/dp/B0G4R4KTZD',
    buyLabel: 'Buy on Amazon',
    linkConfirmed: false,
  },
]

export function getBook(slug: string) {
  return books.find((b) => b.slug === slug)
}

export function canBuy(b: Book) {
  return Boolean(b.buyUrl && b.linkConfirmed)
}

/** Free resources — the open Path and the Encounter Journal signup gift (D6). */
export const FREE_RESOURCES = [
  {
    title: 'The AwakenArts Path',
    line: 'Poetry, Image, and Seeing Your Life',
    href: '/awakenarts-path',
    image: '/images/path/when-language-shapes-a-path-cover.jpg',
    imageAlt: 'Cover of The AwakenArts Path',
  },
  {
    title: 'The AwakenArts Encounter Journal',
    line: 'A self-guided companion to the Encounters.',
    href: '/stay-connected',
    // Page 1 of /files/free/AwakenArts_Encounter_Journal.pdf, rendered for web.
    image: '/images/books/encounter-journal-cover.jpg',
    imageAlt: 'Cover of The Encounter Journal',
  },
]
