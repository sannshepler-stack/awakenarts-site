// Symbol Cards — the marketing card system (2026-10-05, Rebuild Plan §4).
//
// Journey: Symbol Card → Symbol Portal → AwakenArts World.
//
// These are NOT the Christian Symbols vocabulary (src/data/symbols.ts) and
// NOT the Journal entries. Per Susan (2026-10-05) they serve a different
// purpose:
//   - FRONT: broad cultural, literary, historical or everyday meanings.
//   - BACK:  Christian / biblical meanings and relevant Scripture.
//   - Copy concise enough for a physical or digital card (~40 words a side).
//   - Each printed card carries a QR code to awakenarts.com/s/[slug], which
//     forwards to that symbol's Portal page.
//
// All copy below is supplied by Susan, card by card. Nothing is invented.
// Any optional field left out simply does not render.
//
// A card appears on the homepage ("Begin with a Symbol") when `featured`
// is set, and gets its own Portal page at /symbols/[slug] as soon as it is
// listed here. Until then, /symbols/[slug] keeps serving the Christian
// Symbols page exactly as before.

export interface SymbolCard {
  /** URL name, lowercase, e.g. 'lamp'. Printed in the QR address — never change once cards are printed. */
  slug: string
  /** Display name, e.g. 'Lamp'. */
  name: string
  front: {
    /** Card artwork for the front, under /public. */
    image?: string
    imageAlt?: string
    /** 3–4 short phrases: cultural, literary, historical or everyday meanings. */
    meanings: string[]
    /** Optional everyday expression carrying the symbol. */
    expression?: string
  }
  back: {
    /** Optional artwork for the back. */
    image?: string
    imageAlt?: string
    /** 2–3 short Christian / biblical meanings. */
    meanings: string[]
    scripture?: { reference: string; text?: string; translation?: string }
  }
  /** Richer Portal content. Every field optional. */
  portal?: {
    /** Short paragraphs expanding the front's broad meanings. */
    broad?: string[]
    /** Short paragraphs expanding the Christian meaning. */
    christian?: string[]
    /** One reflective question. */
    question?: string
    /** One clear next step into the AwakenArts world. */
    next?: { label: string; href: string; note?: string }
    /** Slug in the Christian Symbols page, when the symbol also appears there. */
    christianSymbol?: string
  }
  /** Show on the homepage "Begin with a Symbol" section. */
  featured?: boolean
  /** One short reflective prompt for the homepage tile. */
  prompt?: string
}

export const symbolCards: SymbolCard[] = [
  // Awaiting Susan's card copy. Example of the shape (not live):
  // {
  //   slug: 'lamp',
  //   name: 'Lamp',
  //   front: { image: '/images/symbol-cards/lamp-front.png', meanings: ['…', '…', '…'] },
  //   back:  { meanings: ['…', '…'], scripture: { reference: 'Psalm 119:105', text: '…' } },
  //   portal: { question: '…', next: { label: '…', href: '/guided-encounters' } },
  //   featured: true,
  //   prompt: '…',
  // },
]

export function getSymbolCard(slug: string): SymbolCard | undefined {
  return symbolCards.find((c) => c.slug === slug)
}

export function featuredSymbolCards(): SymbolCard[] {
  return symbolCards.filter((c) => c.featured)
}

/** The short, permanent address printed on the card. */
export function qrPath(slug: string): string {
  return `/s/${slug}`
}
