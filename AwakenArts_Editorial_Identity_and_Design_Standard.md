# AwakenArts — Editorial Identity & Design Standard

*Locked 2026-06-25. This is not a web specification. It is the governing document for everything AwakenArts produces — website, Editions, Facilitator Guides, Workbooks, Slides, and Print. `AwakenArts_Site_Architecture.md` remains the technical reference for how the website implements these principles; this document is the reason those implementations exist.*

## The Identity

**AwakenArts is a literary publishing imprint expressed through symbolic language.** Every design decision should reinforce the feeling that the visitor is reading a carefully edited publication rather than browsing a conventional website. Typography, spacing, imagery, navigation, and rhythm all exist in service of recognition. The work remains primary. The design supports the work quietly, consistently, and confidently.

If the identity needs a name, it is **Editorial Symbolism** — or, equivalently, **Literary Editorial Design**. It is the feeling of opening a beautifully designed literary journal or small-press publication where every page has been composed with intention. This is distinct from "minimalist" (too austere), "luxury" (too commercial), and "museum" (too distant) — AwakenArts is warmer and more intimate than any of those postures. It behaves like a publisher, not a gallery.

## 1. Philosophy

- The work is primary. Every design decision is in service of the symbolic work, not the other way around.
- Recognition before explanation. Visitors are invited to recognize meaning through image and poem before anything is explained to them.
- Image and poem are one symbolic form — not illustration paired with caption, but a single act of meaning-making.
- The site behaves like a publication, not a marketing website. There are no funnels, no upsell patterns, no urgency language.
- Navigation serves the work. It never competes with it, and wherever possible, the work itself becomes the navigation (see Encounters, where the cards are the only navigation).

## 2. Brand Identity

AwakenArts is: literary, quiet, contemplative, editorial, restrained, confident, warm rather than minimalist, a publisher rather than a gallery.

It is not: loud, transactional, trend-driven, austere, or distant. Confidence is expressed through restraint, not through display.

## 3. Visual Language

This section is implemented in code as the **AwakenArts Global Design System**, locked 2026-06-25 in `src/app/globals.css` `:root`. The principle behind every token below: establish one value and apply it universally; never adjust by eye, page by page.

**Color palette** — `--deep` (#1C2B3A, navy/ink) and `--cream` (#FAF7F2) are the two base fields every page lives on. `--gold` (#8B6914) and `--gold-lt` (#C9A84C) carry every category label, link, and accent — gold on cream, gold-lt on dark. `--mist` (#DDD8CF) and `--mid` (#5A5550) are quiet supporting tones for secondary text. No page introduces a color outside this palette.

**Typography hierarchy** — five locked roles, one value each, applied everywhere via CSS custom property:
- **H1** (primary page titles — "When Language Shapes a Path," "The Collection," "Encounters," "About," "Journal"): `--h1-size` (clamp, 60–64px desktop equivalent), `--h1-weight: 400`, serif (Cormorant Garamond/Georgia). Always the same size; color is contextual (navy on cream, cream/white on dark).
- **H2** (section titles): `--h2-size`, `--h2-weight: 300` — one size smaller than H1, always identical.
- **Gold category label** (COLLECTION / POEMS / ENCOUNTERS): `--label-size`, `--label-weight: 600`, `--label-tracking: 0.18em`, uppercase, sans-serif (Inter).
- **Gold/italic subtitle** ("A growing collection of symbolic works."): `--subtitle-size`, `--subtitle-line: 1.7`, italic serif.
- **Body copy**: `--body-size` (1rem = 18px), `--body-line: 1.8`. One editorial paragraph specification, never adjusted page by page.
- **Small links/CTAs** ("Collection →"): `--link-size`, `--link-weight: 500`, `--link-tracking: 0.08em`, one underline treatment.

**Text widths** — exactly three tiers, no page invents a fourth: `--measure-narrow` (640px — quotes, journal prompts, centered statements), `--measure-medium` (760px — editorial introductions; Collection, Poems, About; most pages), `--measure-wide` (1100px — homepage hero, long explanations).

**White space / section rhythm** — see the **AwakenArts Vertical Rhythm Standard** (locked 2026-06-25, also in `globals.css` `:root`): `--band-gap` (6rem desktop, tapering to `--band-gap-md`/`--band-gap-sm` at smaller widths) is the single value used everywhere for "end of primary content → Wayfinding Band." The Wayfinding Band's own padding is the single, already-universal value for "band → footer." Whitespace is never increased arbitrarily — it exists to create one consistent, almost unconscious rhythm as the visitor moves between pages.

**Image treatments** — see Section 5 below.

**Header philosophy** — Editorial Header Images function as visual thresholds, not decorative banners: each prepares the visitor for what follows (Biblical Foundation → quiet landscape; Poetry → manuscript/written language). They never carry embedded text and never compete with the page content beneath them. Site-wide rollout to Collection/About/Journal is tracked as open work in `AwakenArts_Site_Architecture.md`.

**Footer philosophy** — the footer is the closing page of the publication. It is identical everywhere, never page-specific, and never visually attached to the Wayfinding Band above it. Implemented once (`src/components/Footer.tsx`), reused everywhere.

**Wayfinding Band** — an architectural element, not content and not footer. Its only purpose is to answer "where would you like to go next?" after the content has fully concluded. Cream/gold, universal navigation only, implemented once (`src/components/WayfindingBand.tsx`).

## 4. Editorial Architecture

Every page follows the same structure (the **Universal Page Structure**, `AwakenArts_Site_Architecture.md`): Global Header Navigation → optional Editorial Header Image → Page Title/Introduction → Primary Page Content → Global Wayfinding Band → Standard Footer. Every section follows the same rhythm. Every transition follows the same spacing (Section 3, above). Future page design should consist primarily of placing content into this established editorial framework rather than inventing new layouts.

## 5. Image Philosophy

Five categories of image appear across AwakenArts, each with one intended use and treatment:

- **Atmospheric headers** — full-bleed, unframed, quiet thresholds between sections. No border, no shadow, no embedded text.
- **Edition covers** — the most "object-like" images on the site; carry a deliberate print/card treatment (subtle box-shadow, slight border-radius) so they read as physical, held things.
- **Encounter cards / hero backgrounds** — full-bleed atmospheric images with a gradient scrim for text legibility, currently implemented as CSS background images rather than `<img>` elements (a known implementation detail for any future automated image-pipeline work, not a visual exception).
- **Demonstration images** (e.g. the Queen Ann silhouette/poem pairing) — shown plainly, without ornamentation, because the demonstration itself is the point.
- **Symbolic compositions** (figure editions, concrete poetry forms) — treated as artifacts: a cream "mat" frame where appropriate, never cropped by CSS, never stretched off their natural proportions.

No image category mixes another category's treatment. A new image is placed into one of these five categories before any styling decision is made about it.

## 6. Writing Standards

- **Voice** — literary and direct, never marketing copy. Sentences invite recognition; they don't sell.
- **Sentence length** — varied but generally short to medium; long sentences are used deliberately for cumulative or contemplative effect, not by accident.
- **Reading level** — accessible to a thoughtful general reader; never academic jargon, never dumbed down.
- **Tone** — warm, quiet, confident. Never urgent, never apologetic.
- **What not to do** — no exclamation points used for emphasis, no "Shop now"/"Don't miss out" marketing constructions, no explaining a symbol immediately after presenting it (recognition before explanation), no filler transition sentences that exist only to move the reader along.

## 7. Product Standards

Every AwakenArts product inherits this one identity: Website, Editions, Facilitator Guides, Workbooks, Slides, Print. A Facilitator Guide and the website should feel like they were produced by the same imprint — same palette, same typographic hierarchy and restraint, same "recognition before explanation" posture — even where the medium's own constraints (paper vs. screen, fixed page vs. responsive layout) require different technical execution.

---

*This document governs `AwakenArts_Site_Architecture.md` (the website's technical implementation reference) and any future product-specific standards documents. When the two disagree, this document wins; the architecture doc should be revised to match it.*
