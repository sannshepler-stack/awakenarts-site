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
  },
  {
    slug: 'bowls',
    title: 'Bowls',
    kicker: 'Figure Edition',
    contactSheet: '/images/editions/bowls-contact-sheet-web.jpg',
    contactSheetAlt: 'Contact sheet preview of all eleven pages of the Bowls Figure Edition',
    pdf: '/files/editions/Bowls_Figure_Edition.pdf',
  },
  {
    slug: 'ballerina',
    title: 'Ballerina',
    kicker: 'Figure Edition',
    contactSheet: '/images/editions/ballerina-contact-sheet-web.jpg',
    contactSheetAlt: 'Contact sheet preview of all eleven pages of the Ballerina Figure Edition',
    pdf: '/files/editions/Ballerina_Figure_Edition.pdf',
  },
  {
    slug: 'grismere',
    title: 'Grismere',
    kicker: 'Figure Edition',
    contactSheet: '/images/editions/grismere-contact-sheet-web.jpg',
    contactSheetAlt: 'Contact sheet preview of all eleven pages of the Grismere Figure Edition',
    pdf: '/files/editions/Grismere_Figure_Edition.pdf',
  },
  {
    slug: 'poppy',
    title: 'Poppy',
    kicker: 'Figure Edition',
    contactSheet: '/images/editions/poppy-contact-sheet-web.jpg',
    contactSheetAlt: 'Contact sheet preview of all eleven pages of the Poppy Figure Edition',
    pdf: '/files/editions/Poppy_Figure_Edition.pdf',
  },
  {
    slug: 'queen-ann',
    title: 'Queen Ann',
    kicker: 'Figure Edition',
    contactSheet: '/images/editions/queen-ann-contact-sheet-web.jpg',
    contactSheetAlt: 'Contact sheet preview of all eleven pages of the Queen Ann Figure Edition',
    pdf: '/files/editions/Queen_Ann_Figure_Edition.pdf',
  },
]
