// The five Christian Encounters, as data (2026-10-09).
//
// Used by the homepage "What Symbols Matter to You?" search. Every field is
// copied from the Encounter pages themselves (src/app/encounters/*); nothing
// is new. `keywords` lists only symbol words that genuinely appear in each
// Encounter's own title or Scripture, so a search matches real content.

export interface EncounterInfo {
  slug: string
  title: string
  mantra: string
  statement: string
  source: string
  keywords: string[]
}

export const ENCOUNTER_INFO: EncounterInfo[] = [
  {
    slug: 'journey',
    title: 'Journey',
    mantra: 'I begin.',
    statement: 'Stepping beyond the familiar opens the way to new discoveries.',
    source: 'Hebrews 11:8',
    keywords: ['journey', 'faith'],
  },
  {
    slug: 'deep',
    title: 'The Deep',
    mantra: 'I encounter.',
    statement: 'Some of life’s most important discoveries are made within.',
    source: 'Proverbs 20:5',
    keywords: ['deep', 'heart', 'water'],
  },
  {
    slug: 'table',
    title: 'The Table',
    mantra: 'I receive.',
    statement: 'Some moments invite us to stop striving and simply receive.',
    source: 'Charles R. Swindoll',
    keywords: ['table'],
  },
  {
    slug: 'word',
    title: 'The Word',
    mantra: 'I listen.',
    statement: 'Some words become trusted companions throughout life.',
    source: 'Psalm 119:105',
    keywords: ['word', 'lamp'],
  },
  {
    slug: 'continue',
    title: 'Continue',
    mantra: 'I walk on.',
    statement: 'Every new day is a new beginning.',
    source: 'Psalm 121:8',
    keywords: [],
  },
]
