// ─── archetype.ts ─────────────────────────────────────────────────────────────
// AwakenArts · Encounter System · Single source of truth
//
// One object. One archetype. Exactly three ordered cards.
// This is NOT a deck — it is a fixed, sequential experience.
// Cards are not interchangeable. The order is the meaning.
//
// ASSET SWAP (when final dragon artwork is ready):
//   1. Drop into /public/images/cards/fronts/:
//        dragon-young.jpg    ← stage I
//        dragon-serpent.jpg  ← stage II
//        dragon-winged.jpg   ← stage III
//   2. Drop into /public/images/cards/backs/:
//        dragon-back.jpg     ← pathway-through-trees (shared back)
//   3. Update frontSrc in each card below + backSrc on the archetype
//   No structural changes needed.
//
// COPY NOTE:
//   title and line fields are empty until real arc copy is provided.
//   Do not invent copy — leave empty and the fields render nothing.
// ─────────────────────────────────────────────────────────────────────────────

export interface ArcCard {
  id:       string
  frontSrc: string
  alt:      string
  line?:    string   // one line beneath title — omit or leave '' until real copy
}

export interface Archetype {
  archetypeId: string
  title:       string                        // archetype name — shown after each reveal
  backSrc:     string                        // shared back — identical for all three cards
  cards:       [ArcCard, ArcCard, ArcCard]  // exactly 3, ordered, fixed sequence
}

// ── Dragon Archetype ──────────────────────────────────────────────────────────
// Three movements of one archetype, in fixed order.
//
// INTERIM STAND-INS active (swap frontSrc values when final art arrives):
//   Stage I   → dragon-young.jpg
//   Stage II  → dragon-serpent.jpg
//   Stage III → dragon-winged.jpg
//   Back      → dragon-back.jpg
// ─────────────────────────────────────────────────────────────────────────────

export const DRAGON: Archetype = {
  archetypeId: 'dragon',
  title:       '',                                        // ← archetype title goes here
  backSrc:     '/images/cards/backs/card-back.jpg',       // ← swap: dragon-back.jpg
  cards: [
    {
      id:       'dragon-i',
      frontSrc: '/images/cards/fronts/rebirth.jpg',       // ← swap: dragon-young.jpg
      alt:      'Dragon — first movement',
      line:     '',                                        // ← arc stage I line
    },
    {
      id:       'dragon-ii',
      frontSrc: '/images/cards/fronts/transformation.jpg',// ← swap: dragon-serpent.jpg
      alt:      'Dragon — second movement',
      line:     '',                                        // ← arc stage II line
    },
    {
      id:       'dragon-iii',
      frontSrc: '/images/cards/fronts/transcendence.jpg', // ← swap: dragon-winged.jpg
      alt:      'Dragon — third movement',
      line:     '',                                        // ← arc stage III line
    },
  ],
}
