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
  /** Where the subtitle breaks on the book cards, e.g. ['Awakening Through', 'Art, Stories, and Symbols']. */
  subtitleLines?: string[]
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
    status: 'available',
    // Source: SHAPE_SYMBOL_STORY/output/Shape_Symbol_Story_COVER_FRONT_PRINT_v02.png (6 × 9 print front)
    cover: '/images/books/shape-symbol-story-cover.jpg',
    coverAlt: 'Cover of Shape, Symbol & Story by Susan Ann Shepler',
    // A Look Inside (2026-10-07, Susan: hold back; three pages only).
    // Source: SHAPE_SYMBOL_STORY/output/Shape_Symbol_Story_BUILD_v25_BLEED.pdf pp. 9, 11, 52.
    // Description: DRAFT written 2026-10-07 from Susan's own preface
    // (Susan asked for one about the length of Where You Stand's).
    description: [
      'Shape, Symbol & Story follows five Figures—the Dragon, Grismere, Ladybug, Merriweather, and Poppy—from ordinary poems to the images their words became.',
      'Through story, myth, Scripture, and Jungian thought, the book explores what those images later revealed. The correspondences it traces are discoveries, not sources—an invitation to encounter each image and see what it opens for you.',
    ],
    samples: [
      { src: '/images/books/samples/sss-p9.jpg', alt: 'Shape, Symbol & Story — the opening page of The Dragon' },
      { src: '/images/books/samples/sss-p11.jpg', alt: 'Shape, Symbol & Story — The Story of the Dragon' },
      { src: '/images/books/samples/sss-p52.jpg', alt: 'Shape, Symbol & Story — poppies: Memory, Sleep, Awakening' },
    ],
    // 2026-10-10: ISBN and price verified by Susan in Bowker and KDP; link is
    // the live paperback listing (checked on Amazon the same day).
    details: [
      { label: 'Format', value: 'Paperback, 6 × 9 in' },
      { label: 'Publisher', value: 'AwakenArts' },
      { label: 'ISBN', value: '979-8-9975058-1-3' },
      { label: 'Price', value: '$19.99' },
    ],
    buyUrl: 'https://www.amazon.com/dp/B0HMHJFDR7',
    buyLabel: 'Buy on Amazon',
    linkConfirmed: true,
  },
  {
    slug: 'where-you-stand',
    title: 'Where You Stand',
    subtitle: 'A Seek & Find Journal',
    status: 'available',
    // Source: KINGS & QUEENS/REVISION_2026-09-26/Where_You_Stand_FRONT_COVER_for_ISBN_2026-09-28.jpg
    cover: '/images/books/where-you-stand-cover.jpg',
    coverAlt: 'Cover of Where You Stand: A Seek & Find Journal',
    // Back-cover description (Where_You_Stand_KDP_Cover_AUTHORITATIVE.html).
    description: [
      'Where You Stand is a guided journey told through story, image, poetry, and reflection.',
      'Queens and kings move through a world shaped by power and position, love and loss, uncertainty and change. As their stories unfold, the images and poems invite a closer look at what can be seen from different positions—and what may become clearer from a higher point of view.',
    ],
    samples: [
      { src: '/images/gallery/where-you-stand/02-ann-at-the-viewpoint.jpg', alt: 'Where You Stand — Ann looking out over a river valley toward a distant castle' },
      { src: '/images/gallery/where-you-stand/10-the-king.jpg', alt: 'Where You Stand — the King on a hillside' },
      // 2026-10-08, Susan: chess-pieces image is not in the Second Edition;
      // replaced with the new p23 road-ahead image from the Second Edition.
      { src: '/images/gallery/where-you-stand/16-the-road-ahead-olive-hillside.jpg', alt: 'Where You Stand — a stone path winding past an olive tree toward the hills at sunrise' },
    ],
    // 2026-10-10, Susan (Bowker + KDP verified): the live paperback is
    // ISBN 979-8-9975058-0-6, and KDP shows the Second Edition interior and
    // cover files uploaded to it — so the Second Edition cover, samples and
    // description stay. ISBN 979-8-9975058-2-0 is a separate Bowker
    // record ("…A Seek & Find Journal of Story, Symbol, and Reflection") and
    // must not be shown here or on any other book.
    details: [
      { label: 'Format', value: 'Paperback, 8.5 × 11 in' },
      { label: 'Edition', value: 'Second edition' },
      { label: 'Publisher', value: 'AwakenArts' },
      { label: 'ISBN', value: '979-8-9975058-0-6' },
      { label: 'Price', value: '$18.99' },
    ],
    buyUrl: 'https://www.amazon.com/dp/B0HHZZ55GG',
    buyLabel: 'Buy on Amazon',
    linkConfirmed: true,
  },
  {
    slug: 'whispers-of-awareness',
    title: 'Whispers of Awareness',
    subtitle: 'Awakening Through Art, Stories, and Symbols',
    subtitleLines: ['Awakening Through', 'Art, Stories, and Symbols'],
    status: 'available',
    // Source: AARTS PROJECTS/WHISPERS 2ND EDITION KDP/WhispersCover.jpg (2026-10-02)
    cover: '/images/books/whispers-of-awareness-cover.jpg',
    coverAlt: 'Cover of Whispers of Awareness by Susan Ann Shepler',
    // Back-cover description, 2nd edition (Whispers_of_Awareness_2nd_Edition_KDP_Cover.pdf).
    tagline: 'What if an image could show us something before we fully understood it?',
    description: [
      'Susan Ann Shepler’s visual poems began as ordinary poems and gradually took shape as Figures—images whose meanings often emerged only after they were created.',
      'Drawing on Jungian thought, biblical imagery, myth, and lived experience, Whispers of Awareness follows that movement from image to recognition. The Dragon, Mermaid Grismere, Queen Anne, and other Figures invite the reader to look beyond the literal surface toward a wider field of awareness.',
      // Third back-cover paragraph (the second-edition note) left off the
      // page, 2026-10-07 (Susan: too long); Edition is listed below.
    ],
    // Source: Whispers_of_Awareness_2nd_Edition_KDP_Interior.pdf pp. 3, 16, 27.
    samples: [
      { src: '/images/books/samples/whispers-p3.jpg', alt: 'Whispers of Awareness — the opening page, with the poppy figure and a Jeremy Taylor quotation' },
      { src: '/images/books/samples/whispers-p16.jpg', alt: 'Whispers of Awareness — The Dragon Fight' },
      { src: '/images/books/samples/whispers-p27.jpg', alt: 'Whispers of Awareness — Mermaid Grismere' },
    ],
    details: [
      { label: 'Format', value: 'Paperback, 6 × 9 in, full color' },
      { label: 'Edition', value: 'Second edition' },
      { label: 'Publisher', value: 'AwakenArts' },
      { label: 'ISBN', value: '979-8-9975058-3-7' },
      { label: 'Price', value: '$18.99' },
    ],
    // 2026-10-10: live second-edition paperback (ISBN 979-8-9975058-3-7).
    // Replaces B0G4R4KTZD, the out-of-print first edition listed on Amazon
    // as "Whispers of Awakening" (Independently published, different ISBN).
    buyUrl: 'https://www.amazon.com/dp/B0HMG41N3P',
    buyLabel: 'Buy on Amazon',
    linkConfirmed: true,
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
    line: 'Read the Introduction',
    href: '/about/introduction',
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
