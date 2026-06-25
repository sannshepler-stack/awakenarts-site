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

export const editions: Edition[] = [
  {
    slug: 'dragon',
    title: 'The Dragon',
    kicker: 'Figure Edition No. 01',
    contactSheet: '/images/editions/dragon-contact-sheet.png',
    contactSheetAlt: 'Contact sheet preview of all eleven pages of The Dragon Figure Edition',
    pdf: '/files/editions/Dragon_Figure_Edition.pdf',
  },
  {
    slug: 'bowls',
    title: 'Bowls',
    kicker: 'Figure Edition',
    contactSheet: '/images/editions/bowls-contact-sheet.png',
    contactSheetAlt: 'Contact sheet preview of all eleven pages of the Bowls Figure Edition',
    pdf: '/files/editions/Bowls_Figure_Edition.pdf',
  },
  {
    slug: 'ballerina',
    title: 'Ballerina',
    kicker: 'Figure Edition',
    contactSheet: '/images/editions/ballerina-contact-sheet.png',
    contactSheetAlt: 'Contact sheet preview of all eleven pages of the Ballerina Figure Edition',
    pdf: '/files/editions/Ballerina_Figure_Edition.pdf',
  },
  {
    slug: 'grismere',
    title: 'Grismere',
    kicker: 'Figure Edition',
    contactSheet: '/images/editions/grismere-contact-sheet.png',
    contactSheetAlt: 'Contact sheet preview of all eleven pages of the Grismere Figure Edition',
    pdf: '/files/editions/Grismere_Figure_Edition.pdf',
  },
  {
    slug: 'poppy',
    title: 'Poppy',
    kicker: 'Figure Edition',
    contactSheet: '/images/editions/poppy-contact-sheet.png',
    contactSheetAlt: 'Contact sheet preview of all eleven pages of the Poppy Figure Edition',
    pdf: '/files/editions/Poppy_Figure_Edition.pdf',
  },
]
