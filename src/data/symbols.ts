// Symbols for the Christian Soul — shared data for /symbols and its
// deep-linkable /symbols/[slug] routes.
//
// Single source of truth. To add a new symbol to the word-vocabulary
// (Section 1) only, add an entry with hasCard: false. To bring a symbol
// into the card grid (Section 2) once its artwork is finished, add
// frontImage/backImage/aspectRatio, set hasCard: true, and add its slug to
// CARD_ORDER below (which controls the grid's 4x2 order independently of
// the vocabulary list's order) — see CARD_ORDER's own comment for details.
//
// Card image paths verified directly against public/images/symbols/ — the
// real files sit flat in that folder (no per-symbol subfolders). Lamp's and
// Path's backs are only available in their "_Text"-suffixed variant. Vine
// was repainted as an alternate card and Pearl's card art was added on
// 2026-08-11 — see the notes on each entry below. Paths are transcribed
// exactly as the files exist on disk, including inconsistent naming (e.g.
// Oil's back is "Oil-Card_Back.png", hyphenated, unlike every other back)
// — do not rename source files to "fix" this.
//
// 2026-08-11 — collection expanded from 5 to 8 completed cards: Pearl,
// Gate, Net, and Oil are now full card entries (Gate and Net are newly
// added symbols; Oil converts from vocabulary-only). See CARD_ORDER below
// for the grid's 4x2 arrangement.
export interface Symbol {
  slug: string
  name: string
  /** Exactly three concise symbolic meanings. */
  meanings: [string, string, string]
  scriptureReference: string
  /** Whether finished card artwork exists for this symbol. */
  hasCard: boolean
  frontImage?: string
  backImage?: string
  /** Native aspect ratio of the card art, as a CSS `aspect-ratio` value — keeps the card from being cropped regardless of grid width. */
  aspectRatio?: string
}

export const SYMBOLS: Symbol[] = [
  {
    slug: 'lamp',
    name: 'LAMP',
    meanings: ['Illumination', 'Discernment', 'The next step'],
    scriptureReference: 'Psalm 119:105',
    hasCard: true,
    frontImage: '/images/symbols/Lamp_Card_Front.png',
    backImage: '/images/symbols/Lamp_Card_Back_Text.png',
    aspectRatio: '1054 / 1492',
  },
  {
    slug: 'path',
    name: 'PATH',
    meanings: ['Direction', 'Passage', 'What lies ahead'],
    scriptureReference: 'Proverbs 3:6',
    hasCard: true,
    frontImage: '/images/symbols/Path_Card_Front.png',
    backImage: '/images/symbols/Path_Card_Back_Text.png',
    aspectRatio: '1054 / 1492',
  },
  {
    // Pulled from the card grid 2026-08-11, per Susan's correction: kept
    // as vocabulary-only for now. Art paths left in place (unused while
    // hasCard is false) in case Flower returns to the grid later — set
    // hasCard back to true and add 'flower' to CARD_ORDER below to restore
    // it, no other change needed.
    slug: 'flower',
    name: 'FLOWER',
    meanings: ['Seasons', 'Transience', 'What endures'],
    scriptureReference: 'Isaiah 40:8',
    hasCard: false,
    frontImage: '/images/symbols/Flower_Card_Front.png',
    backImage: '/images/symbols/Flower_Card_Back.png',
    aspectRatio: '1024 / 1536',
  },
  {
    slug: 'vine',
    name: 'VINE',
    meanings: ['Connection', 'Abiding', 'Abundance'],
    scriptureReference: 'John 15:5',
    hasCard: true,
    // Updated 2026-08-11, per Susan: Vine was repainted as an alternate
    // card (new composition — grape branch over a vineyard valley at
    // golden hour) at 1024x1536, replacing the earlier 1086x1448 artwork.
    // New files verified on disk under new names — the old
    // Vine-Card_Front.png / Vine_Card_Back_text.png (1086x1448) no longer
    // exist / are superseded and are not referenced here.
    frontImage: '/images/symbols/Vine_Card_Front.png',
    backImage: '/images/symbols/Vine_Card_Back.png',
    aspectRatio: '1024 / 1536',
  },
  {
    slug: 'shepherd',
    name: 'SHEPHERD',
    meanings: ['Guidance', 'Protection', 'Being known'],
    scriptureReference: 'Psalm 23:1 / John 10:11',
    hasCard: true,
    frontImage: '/images/symbols/Shepherd_Card_Front.png',
    backImage: '/images/symbols/Shepherd_Card_Back.png',
    aspectRatio: '1025 / 1535',
  },
  {
    slug: 'seed',
    name: 'SEED',
    meanings: ['Small beginnings', 'Hidden potential', 'Growth'],
    scriptureReference: 'Matthew 13:31–32',
    hasCard: false,
  },
  {
    slug: 'tree',
    name: 'TREE',
    meanings: ['Rootedness', 'Season', 'Fruit'],
    scriptureReference: 'Psalm 1:3',
    hasCard: false,
  },
  {
    slug: 'bread',
    name: 'BREAD',
    meanings: ['Sustenance', 'Provision', 'Life'],
    scriptureReference: 'John 6:35',
    hasCard: false,
  },
  {
    slug: 'water',
    name: 'WATER',
    meanings: ['Life', 'Renewal', 'Thirst'],
    scriptureReference: 'John 4:14',
    hasCard: false,
  },
  {
    slug: 'stone',
    name: 'STONE',
    meanings: ['Foundation', 'Strength', 'Transformation'],
    scriptureReference: 'Psalm 118:22',
    hasCard: false,
  },
  {
    slug: 'door',
    name: 'DOOR',
    meanings: ['Entrance', 'Invitation', 'Passage'],
    scriptureReference: 'John 10:9',
    hasCard: false,
  },
  {
    // Card art added 2026-08-11 — Pearl moves from vocabulary-only to a
    // finished card (shell and pearl on a sunlit shoreline). Front artwork
    // replaced same day — prior version had a stray white border that read
    // out of sync with the other cards; new version is clean at 1024x1536.
    slug: 'pearl',
    name: 'PEARL',
    meanings: ['Value', 'Recognition', 'Choosing'],
    scriptureReference: 'Matthew 13:45–46',
    hasCard: true,
    frontImage: '/images/symbols/Pearl_Card_Front.png',
    backImage: '/images/symbols/Pearl_Card_Back.png',
    aspectRatio: '1024 / 1536',
  },
  {
    slug: 'anchor',
    name: 'ANCHOR',
    meanings: ['Hope', 'Steadiness', 'Holding'],
    scriptureReference: 'Hebrews 6:19',
    hasCard: false,
  },
  {
    slug: 'cup',
    name: 'CUP',
    meanings: ['Portion', 'Abundance', 'What is given'],
    scriptureReference: 'Psalm 23:5',
    hasCard: false,
  },
  {
    slug: 'crown',
    name: 'CROWN',
    meanings: ['Endurance', 'Completion', 'Life'],
    scriptureReference: 'James 1:12',
    hasCard: false,
  },
  {
    // Card art completed 2026-08-11. Reconciled per Susan's "unless
    // required for the four newly completed symbols" allowance: the
    // finished card back carries Proverbs 21:20 and a stewardship/blessing
    // theme, not the Matthew 25 (ten virgins) reading this vocab-only entry
    // previously used — meanings and scriptureReference updated to match
    // what the card itself now says.
    slug: 'oil',
    name: 'OIL',
    meanings: ['Blessing', 'Abundance', 'Stewardship'],
    scriptureReference: 'Proverbs 21:20',
    hasCard: true,
    frontImage: '/images/symbols/Oil_Card_Front.png',
    // Filename verified on disk exactly as-is — hyphenated
    // "Oil-Card_Back.png", inconsistent with every other back's
    // underscore naming (e.g. Oil_Card_Front.png). Not renamed per
    // instruction not to rename files unless necessary.
    backImage: '/images/symbols/Oil-Card_Back.png',
    aspectRatio: '1054 / 1492',
  },
  {
    slug: 'salt',
    name: 'SALT',
    meanings: ['Preservation', 'Influence', 'Distinctiveness'],
    scriptureReference: 'Matthew 5:13',
    hasCard: false,
  },
  {
    slug: 'light',
    name: 'LIGHT',
    meanings: ['Visibility', 'Witness', 'Illumination'],
    scriptureReference: 'Matthew 5:14–16',
    hasCard: false,
  },
  {
    // New symbol, card art completed 2026-08-11.
    slug: 'gate',
    name: 'GATE',
    meanings: ['Discipleship', 'Difficulty', 'The way in'],
    scriptureReference: 'Matthew 7:13',
    hasCard: true,
    frontImage: '/images/symbols/Gate_Card_Front.png',
    backImage: '/images/symbols/Gate_Card_Back.png',
    aspectRatio: '1024 / 1536',
  },
  {
    // New symbol, card art completed 2026-08-11.
    slug: 'net',
    name: 'NET',
    meanings: ['Gathering', 'Wide reach', 'The harvest'],
    scriptureReference: 'Matthew 13:47',
    hasCard: true,
    frontImage: '/images/symbols/Net_Card_Front.png',
    backImage: '/images/symbols/Net_Card_Back.png',
    aspectRatio: '1059 / 1486',
  },
]

export function getSymbol(slug: string): Symbol | undefined {
  return SYMBOLS.find((s) => s.slug === slug)
}

// Card-grid display order. Deliberately independent of the vocabulary
// list's order above, so the grid can be reordered or a card swapped out
// without touching the vocabulary's word sequence. To add a new card to
// the grid: set that symbol's hasCard to true in SYMBOLS above, then add
// its slug here wherever it should sit.
//
// 2026-08-11, per Susan's "temporary finished presentation" directive —
// superseding the earlier interleaved 4x2 order. The 8 cards' source art
// isn't on a common format yet: Lamp/Path/Oil are 1054x1492 and Net is
// 1059x1486 (all ~0.706-0.713 ratio, "shorter/wider"), while Pearl/Vine/
// Gate are exactly 1024x1536 and Shepherd is 1025x1535 (all effectively
// 2:3, "taller"). Rather than mixing formats within a row (which read as
// mismatched), cards are now grouped BY FORMAT so each row is internally
// consistent, even though the two rows differ in height from each other:
//   Row 1 (shorter/wider): LAMP · PATH · OIL · NET
//   Row 2 (taller / 2:3):  PEARL · VINE · GATE · SHEPHERD
// This is explicitly an interim presentation fix, not the permanent
// order — once the full set shares one master format (a deferred future
// Photoshop pass), this can return to a purely thematic sequence.
const CARD_ORDER = ['lamp', 'path', 'oil', 'net', 'pearl', 'vine', 'gate', 'shepherd'] as const

/** Symbols with finished card artwork, in CARD_ORDER — Section 1 (the
 * grid/lightbox) renders only these, in this order. */
export const CARD_SYMBOLS = CARD_ORDER
  .map((slug) => SYMBOLS.find((s) => s.slug === slug))
  .filter((s): s is Symbol => !!s && s.hasCard)
