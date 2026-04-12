// ─── archetype.ts ─────────────────────────────────────────────────────────────
// AwakenArts · Encounter System · Single source of truth
//
// One object. One archetype. Exactly three cards.
// Cards are equal — no sequence, no ordering, no progression.
// User selects one. That one resolves into the encounter.
//
// ASSET PATHS:
//   All assets live in /public/images/encounters/{archetypeId}/
//   Reference via /images/encounters/{archetypeId}/filename
//
// COPY NOTE:
//   `line` per card is omitted until real copy is provided.
// ─────────────────────────────────────────────────────────────────────────────

export interface ArcCard {
  id:       string
  frontSrc: string
  alt:      string
  line?:    string   // optional — renders beneath title when present
}

export interface Archetype {
  archetypeId: string
  title:       string                        // shown beneath card after reveal
  backSrc:     string                        // shared back — identical for all three cards
  cards:       [ArcCard, ArcCard, ArcCard]  // exactly 3, equal in presentation
}

// ── House Archetype ───────────────────────────────────────────────────────────
// Three cards. One back. All equal.
// User selects one — that card resolves into the encounter.
// ─────────────────────────────────────────────────────────────────────────────

export const HOUSE: Archetype = {
  archetypeId: 'house',
  title:       'House',
  backSrc:     '/images/encounters/house/house-back.png',
  cards: [
    {
      id:       'house-1',
      frontSrc: '/images/encounters/house/house-1.png',
      alt:      'House — card one',
    },
    {
      id:       'house-2',
      frontSrc: '/images/encounters/house/house-2.png',
      alt:      'House — card two',
    },
    {
      id:       'house-3',
      frontSrc: '/images/encounters/house/house-3.png',
      alt:      'House — card three',
    },
  ],
}
