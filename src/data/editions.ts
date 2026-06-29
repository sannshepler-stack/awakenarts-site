// Figure Editions — shared data for the Collection page's "Edition Previews"
// section and the individual /editions/[slug] pages.
//
// Add new editions here, in order, as they are completed — both surfaces
// (the Collection page grid and the per-edition page route) read from this
// single array, so no redesign is required as the Collection grows.
export interface Edition {
  slug: string
  title: string
  kicker: string
  contactSheet: string
  contactSheetAlt: string
  pdf: string
  sections: EditionSection[]   // NEW — drives the Reader (Implementation Spec v1.0, Section 3)
  access?: 'free' | 'gated'    // NEW — commerce hook, defaults to 'free', read by nothing in v1.0
}

// EditionSection — one screen of the paced Reader experience (Implementation
// Spec v1.0, Section 3/5). Each Edition's `sections` array is hand-written,
// not auto-generated from the PDF — see that document for the full rationale
// and the 8-section template (frontispiece, image, encounter, word,
// recognition, reflection, colophon, acquire) this id list follows.
export interface EditionSection {
  id: 'frontispiece' | 'image' | 'encounter' | 'word' | 'recognition' | 'reflection' | 'colophon' | 'acquire'
  image?: {
    desktop: string
    tablet: string
    mobile: string
    alt: string
  }
  text?: string   // for Encounter / Word / Recognition / Reflection / Colophon
}

// contactSheet paths point to web-optimized JPEGs (~1280px wide, ~150-190KB
// each) rather than the print-resolution PNGs the pages were rendered at
// (2320x2216, ~2-2.6MB) — per the "Homepage / Collection Flow Revision"
// directive's image-protection guidance: previews shown in-browser should
// be web-resolution, not print-resolution, assets. The original print PNGs
// remain on disk alongside these but are no longer referenced by the site;
// the actual downloadable product is the full-resolution PDF in
// /files/editions/, untouched by this change.
export const editions: Edition[] = [
  {
    slug: 'dragon',
    title: 'The Dragon',
    kicker: 'Figure Edition No. 01',
    contactSheet: '/images/editions/dragon-contact-sheet-web.jpg',
    contactSheetAlt: 'Contact sheet preview of all eleven pages of The Dragon Figure Edition',
    pdf: '/files/editions/Dragon_Figure_Edition.pdf',
    // Hand-built per Implementation Specification v1.0, Phase 1. Text is
    // transcribed faithfully from the approved PDF's own participant-facing
    // pages (and, for the colophon, cross-checked against Dragon_Author_Notes.txt's
    // matching "Message Delivered" passage) — never from Dragon_Notes_on_the_Figure.md's
    // Figure Development Catalog, which is explicitly internal, non-participant-facing
    // reference material. Page 5 ("Dragon: A Motif") and page 11 ("Facilitator Notes" —
    // marked NOT FOR PARTICIPANT DISTRIBUTION in the source PDF) have no slot in this
    // 8-section template and are deliberately excluded. See the Implementation Log
    // for both exclusions and the recognition/reflection page-combining decision.
    sections: [
      {
        id: 'frontispiece',
        image: {
          desktop: '/images/editions/dragon/read/frontispiece-desktop.jpg',
          tablet: '/images/editions/dragon/read/frontispiece-tablet.jpg',
          mobile: '/images/editions/dragon/read/frontispiece-mobile.jpg',
          alt: 'Cover page of The Dragon, AwakenArts Figure Edition No. 01 — title over a dark, mist-covered mountain landscape, with the line "Not this or that, but and."',
        },
      },
      {
        id: 'image',
        image: {
          desktop: '/images/editions/dragon/read/image-desktop.jpg',
          tablet: '/images/editions/dragon/read/image-tablet.jpg',
          mobile: '/images/editions/dragon/read/image-mobile.jpg',
          alt: 'A painted dragon figure in teal and gold tones, wings raised, rendered on a weathered cream ground',
        },
      },
      {
        id: 'encounter',
        text: 'Be still. Let the figure arrive before the explanation does.',
      },
      {
        id: 'word',
        text:
          'cranked its weight like an iron crane with\n' +
          'its frame, torching breath across the sky\n' +
          'down one side. Dragon claws scored\n' +
          'dragon nails like metal rakes. With\n' +
          'cut and whack, dragon wings\n' +
          'cracked. The steaming\n' +
          'lightning\n' +
          'bolts of hate\n' +
          'shouting sun,\n' +
          'silent moon,\n' +
          'trembling baby stars,\n\n' +
          '"Like two sides of a golden coin, the parts were made to live as one."\n' +
          '— Susan Ann Shepler',
      },
      {
        id: 'recognition',
        text:
          'Recognition · I — The Illusion of Opposition\n\n' +
          '"The dragon didn’t seem to know tails and heads are one somehow."\n\n' +
          'OBSERVE\n' +
          'The dragon in this image is not one thing fighting another. It is one body, made of opposing parts that were never meant to be at war: claws and wings, fire and breath, fury and flight. What looks like conflict at first glance is, on closer recognition, a single creature whose nature has simply not yet been reconciled within itself.\n\n' +
          '01 EXPLORE THE PATTERN\n' +
          'A Battle the Dragon Did Not Choose\n' +
          'The dragon did not choose to be divided. It was born holding both halves — strength and tenderness, action and stillness — and mistook their difference for a battle to be won, rather than a wholeness to be claimed.\n\n' +
          'Recognition · II — The Word That Reconciles\n\n' +
          '02 DEVELOP THE INSIGHT\n' +
          'Rage as a Revealer, Not an Enemy\n' +
          'The dragon’s rage is not the enemy of its peace — it is the part of the dragon still waiting to be heard. What looks like the thing to be defeated is often the thing asking, loudest, to be reconciled.\n\n' +
          '03 RETURN TO THE IMAGE\n' +
          'The Word That Reconciles\n' +
          'The ampersand is the dragon’s real shape, once seen rightly: not this or that, but and. Strength and tenderness. Sun and moon. Action and reflection — made to live as one.',
      },
      {
        id: 'reflection',
        text:
          'Where It Meets You\n\n' +
          'Where Am I Fighting Myself?\n' +
          'Name one place in your own life where two parts of you — feeling and duty, rest and ambition, gentleness and strength — have been treated as enemies rather than as one whole still learning to live together.\n\n' +
          'What Part of Me Have I Called the Enemy?\n' +
          'The part of you that feels too much, wants too much, or resists too much may not be the obstacle to your peace. It may be the part still waiting to be reconciled, the way the dragon’s rage was never separate from its longing for rest.\n\n' +
          'What Would "And" Look Like Here?\n' +
          'Rather than choosing one side of yourself over the other, what would it look like to hold both — not this or that, but and — the way the dragon’s wings and claws were always one creature, not two?\n\n' +
          'Return to whichever question stayed with you the most. There is no need to resolve it today — only to let it stay open, the way recognition usually works.',
      },
      {
        id: 'colophon',
        text:
          'The Dragon fulfills his duty by bringing the message that the parts were made to live as one. The ampersand (&) is not ornament but revelation: strength and tenderness, sun and moon, action and reflection — made to live as one.\n\n' +
          'Not this or that. But and.',
      },
      {
        id: 'acquire',
      },
    ],
  },
  {
    slug: 'bowls',
    title: 'Bowls',
    kicker: 'Figure Edition',
    contactSheet: '/images/editions/bowls-contact-sheet-web.jpg',
    contactSheetAlt: 'Contact sheet preview of all eleven pages of the Bowls Figure Edition',
    pdf: '/files/editions/Bowls_Figure_Edition.pdf',
    sections: [], // Not yet built — Phase 5 of the Implementation Specification
  },
  {
    slug: 'ballerina',
    title: 'Ballerina',
    kicker: 'Figure Edition',
    contactSheet: '/images/editions/ballerina-contact-sheet-web.jpg',
    contactSheetAlt: 'Contact sheet preview of all eleven pages of the Ballerina Figure Edition',
    pdf: '/files/editions/Ballerina_Figure_Edition.pdf',
    sections: [], // Not yet built — Phase 5 of the Implementation Specification
  },
  {
    slug: 'grismere',
    title: 'Grismere',
    kicker: 'Figure Edition',
    contactSheet: '/images/editions/grismere-contact-sheet-web.jpg',
    contactSheetAlt: 'Contact sheet preview of all eleven pages of the Grismere Figure Edition',
    pdf: '/files/editions/Grismere_Figure_Edition.pdf',
    sections: [], // Not yet built — Phase 5 of the Implementation Specification
  },
  {
    slug: 'poppy',
    title: 'Poppy',
    kicker: 'Figure Edition',
    contactSheet: '/images/editions/poppy-contact-sheet-web.jpg',
    contactSheetAlt: 'Contact sheet preview of all eleven pages of the Poppy Figure Edition',
    pdf: '/files/editions/Poppy_Figure_Edition.pdf',
    sections: [], // Not yet built — Phase 5 of the Implementation Specification
  },
  {
    slug: 'queen-ann',
    title: 'Queen Ann',
    kicker: 'Figure Edition',
    contactSheet: '/images/editions/queen-ann-contact-sheet-web.jpg',
    contactSheetAlt: 'Contact sheet preview of all eleven pages of the Queen Ann Figure Edition',
    pdf: '/files/editions/Queen_Ann_Figure_Edition.pdf',
    sections: [], // Not yet built — Phase 5 of the Implementation Specification
  },
]
