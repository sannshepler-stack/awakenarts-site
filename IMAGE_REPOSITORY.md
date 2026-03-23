# AwakenArts — Image Repository

Machine-readable asset map. Reference during all coding sessions.
Source of truth: `AwakenArts_Image_Repository.docx`

---

## Folder structure

```
public/images/
  cards/
    originals/    ← card draw feature (raw artwork, no template)
    formatted/    ← physical product display on Offerings page only
  brand/          ← site-wide brand, poetry art, hero imagery
  maiden-archetypes/ ← portrait illustration series
src/data/
  cards.json      ← powers the interactive card draw component
```

---

## Card originals — `public/images/cards/originals/`

| Filename             | Card name        | Size       | Background  | Site bg color     | Status  |
|----------------------|------------------|------------|-------------|-------------------|---------|
| queen-ann-spirit.png | Queen Ann Spirit | 1625×2000  | Black       | `#1C2B3A` (deep)  | Ready   |
| dark-dragon.png      | Dark Dragon      | 1252×2000  | Black       | `#1C2B3A` (deep)  | Ready   |
| flower.png           | Flower           | 1991×2000  | Black       | Navy or Cream     | Ready   |
| thoughts-bear.jpg    | Thoughts         | 1312×1977  | White       | `#C89A3E` (gold)  | Ready   |
| wonder.png           | Wonder           | 2047×2554  | Transparent | `#FAF7F2` (cream) | Ready   |

**Black-background rule:** queen-ann-spirit, dark-dragon, flower — place on `#1C2B3A`.
Black becomes invisible. Do NOT attempt to remove black backgrounds before launch.

---

## Card formatted — `public/images/cards/formatted/`

Used ONLY on Offerings page (physical product display). NOT used in card draw.

| Filename        | Card name   | Banner color  | Wisdom phrase                                    | Status |
|-----------------|-------------|---------------|--------------------------------------------------|--------|
| fear.jpg        | Fear        | Steel blue    | Overcome fears with confidence, courage, and faith | Ready |
| femininity.jpg  | Femininity  | Deep pink     | Be aware of your masculine abilities             | Ready  |
| grace.jpg       | Grace       | Periwinkle    | Our souls are made for life everlasting          | Ready  |
| energy.jpg      | Energy      | Amber gold    | You are part of the dance                        | Ready  |
| crossroad.jpg   | Crossroad   | Earth brown   | An intersection between heaven and earth         | Ready  |
| tricksters.jpg  | Tricksters  | Silver gray   | Perceptions can be misleading                    | Ready  |
| excess.jpg      | Excess      | Deep pink     | Be willing to set limits                         | Ready  |
| thoughts.jpg    | Thoughts    | Warm brown    | We are more than our thoughts                    | Ready  |
| card-back.jpg   | Card back   | Cream & gold  | Used for flip animation reverse face             | Ready  |

---

## Brand & poetry art — `public/images/brand/`

| Filename           | Description                              | Background  | Used on                    | Status   |
|--------------------|------------------------------------------|-------------|----------------------------|----------|
| logo-nav.png       | Wide logo for nav bar                    | Black       | Nav (mix-blend-mode:screen)| Ready    |
| logo-hero.png      | Square logo with gold splatter           | Black       | Hero panel (blend:screen)  | Ready    |
| ann-cover.png      | Ann figure made of poem text + king sil. | Transparent | Homepage hero, Path, About | Ready    |
| queen-ann-poem.png | Queen Ann shaped poem — white text       | Black       | Library, Path page         | Ready    |
| tuck-box.jpg       | Illustrated Awakening tuck box packaging | White       | Offerings page             | Ready    |
| info-card-poems.jpg| Shaping Poems Into Images 9-image grid   | Cream       | Path page, About           | Ready    |
| info-card-ann.jpg  | Ann series — concrete poems + figures    | Cream       | Path page                  | Ready    |
| book-cover.jpg     | Whispers of Awareness book cover         | —           | Homepage tile, Offerings   | NEEDED   |
| about.jpg          | Originator portrait or symbolic sub.     | —           | About page                 | NEEDED   |
| bear-design.jpg    | Bear original pre-card design            | White       | Reference only             | Ready    |

---

## Maiden archetypes — `public/images/maiden-archetypes/`

| Filename      | Archetype        | Size       | Background  | Used on              | Status         |
|---------------|------------------|------------|-------------|----------------------|----------------|
| wonder.png    | Wonder           | 2047×2554  | Transparent | Offerings, Gallery   | Ready          |
| christmas.png | Christmas Figure | from PDF   | White       | Offerings, Seasonal  | Pending export |

Note: wonder.png also exists in cards/originals — same file, two roles (card draw + gallery).

---

## Still needed from originator

| Asset              | Format                    | Path                              | Priority |
|--------------------|---------------------------|-----------------------------------|----------|
| Logo / wordmark    | SVG preferred, PNG 2x     | public/images/brand/logo.svg      | P1       |
| Book cover         | JPG/PNG min 1200px        | public/images/brand/book-cover.jpg| P1       |
| About page image   | PNG or JPG                | public/images/brand/about.jpg     | P1       |
| Christmas figure   | PNG from PDF export       | public/images/maiden-archetypes/christmas.png | P2 |
| Remaining 40+ cards| Transparent PNG per card  | public/images/cards/originals/    | P2       |

---

## cards.json location

```
src/data/cards.json
```

Powers `<CardDraw />` component. Schema per card:

```ts
{
  id: string
  name: string
  wisdomPhrase: string
  imageSrc: string          // path from /public e.g. "/images/cards/originals/fear.png"
  bgColor: string           // hex — the site background to place this card on
  interpretation: string[]  // array of 2–3 paragraphs
  journalingPrompt: string
  libraryLink?: string
}
```
