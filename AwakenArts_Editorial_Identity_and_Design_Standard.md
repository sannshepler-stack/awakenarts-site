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

**Color palette — the AwakenArts Atmosphere System (locked 2026-07-14, homepage first pass approved by Susan same day; full documentation and exact contrast ratios live in `src/app/globals.css` `:root`, not duplicated here).** Nine named roles, governed by a ~70% ivory/parchment, ~20% navy, ~10% gold ratio:
- `--deep` (#1C2B3A, Deep navy) — navigation, footer, strongest dark sections.
- `--navy-soft` (#354F68, Soft navy) — encounter headings and secondary dark sections.
- `--cream` (#FAF7F2, Warm ivory) — primary light background.
- `--parchment` (#F0EAE0, Pale parchment) — alternating light sections and artwork surrounds.
- `--champagne` (#F5EDD6) — very restrained highlighted backgrounds only.
- `--gold` (#7E5F12, dark antique gold) — readable gold text, links, small labels, and controls **on light backgrounds** (ivory/parchment/champagne). Darkened 2026-07-14 from an earlier #8B6914 after WCAG testing showed the lighter value failed AA-normal (4.5:1) on parchment/champagne; the current value clears all three with margin (5.56/4.97/5.09 : 1 respectively).
- `--gold-lt` (#C9A84C, light antique gold) — accents **on navy backgrounds only** (deep or soft navy). Do not use for small text on light backgrounds — it fails AA-normal there. This dark/light split is a hard rule, not a stylistic preference: every small gold label, link, eyebrow, and button must use the variant matched to its background.
- `--gold-muted` (#9B8241, Muted gold) — quiet metadata and de-emphasized rules; AA-large only (3:1), never for body-sized text.
- `--mid` / `--ink-soft` (#5A5550, Soft ink) — secondary body text on light backgrounds.
- `--mist` (#DDD8CF, Warm mist) — subtle borders, dividers, and cards.

Three approved page atmospheres — Light (ivory + navy text), Soft Light (parchment + soft-ink text), Dark (navy + ivory text, restrained gold) — alternate to mark structural transitions; the variation follows the page's own structure, never decorates empty space. Avoid: unrelated hues, bright white as a major background, gold for long passages of body text, decorative gradients. As of this pass the system is applied to the homepage only (Method section → parchment, Queen Ann intro band → soft navy); other pages remain on the pre-existing `--deep`/`--cream` pair until explicitly extended.

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

**Responsive breakpoint standard (locked 2026-07-14)** — the site's primary navigation and the homepage hero collapse from their desktop treatment to their approved compact/mobile treatment at a single, shared breakpoint: **1080px** (`Nav.tsx`'s `.nav-inner`/`.nav-links` and `page.tsx`'s `.hero` in `globals.css`). Above 1080px: full inline navigation, two-column hero, unchanged. At and below 1080px: hamburger navigation and a single-column stacked hero, matching what was previously the approved mobile design at 768px — that design is now simply reused from 1080px down, not redesigned. The two breakpoints must always move together; a layout must never be split between a desktop nav and a stacked hero (or vice versa) at any width, since that produces horizontal crowding and forces `object-fit: cover` to over-crop the hero artwork. The hero's `<picture>` source breakpoints in `page.tsx` follow the same 1080px line.

**Button and link interaction standard (locked 2026-07-10, reaffirmed 2026-07-14)** — hover/focus states are a text-color shift only (and, where present, a border/underline color shift). No background fill change, no size change, no position change (`transform`) on hover, so nothing on the page moves or shifts layout when a visitor's cursor crosses an interactive element. Applies to every homepage CTA and nav link (`.nav-links a`, `.nav-link-cta`, `.hero-invitation__title`, `.home-method-cta`, `.hero-quote-closing`, `.footer-social a`, `.footer-col a`). **One known exception, not yet reconciled:** `.home-coll-cta` ("Explore the Collection") has carried a `transform: translateY(-1px)` hover lift since before this standard was written; it predates today's pass, was not introduced by it, and is flagged here rather than silently changed, per the standing rule that identity/interaction changes require Susan's confirmation.

**Shaped/concrete poem preservation rule (locked 2026-07-14)** — poems whose line breaks and spacing form a deliberate visual shape (e.g. the Queen Ann poem, silhouette-set against its companion image) are fixed artifacts, not reflowable text. They must never be reflowed, rewritten, reformatted, or reconstructed as live HTML/CSS text for any reason — including responsive layout work. Where such a poem is implemented as a raster image (`.poems-showcase-ann__poem-img` and equivalent), only the image's overall display size may change (via `max-width`, never `width`+`height` independently, so the aspect ratio is never distorted); the artwork file itself is out of scope for any CSS or layout directive unless the poem's own content or presentation is explicitly what's being revised.

**Wordmark: baked real glyph outlines, not a raster trace (2026-07-14, per Susan)** — the AWAKENARTS wordmark and tagline in `-Horizontal.svg`, `-Horizontal-NoTagline.svg`, and `-Primary.svg` used to be raster-traced vector paths (vtracer output, hundreds of small color-stepped shapes approximating the original artwork). That produced a mottled "bad ink" look (stray pale-gray noise paths inside letter counters). An interim fix swapped in live `<text>` elements (matching how `-Horizontal-OnNavy.svg` and the single-color `-Navy/-Gold/-Black.svg` variants already rendered their type), which solved the bleeding but depended on the visitor's browser having Cormorant Garamond or falling back to Georgia — a real, if minor, risk since these SVGs render via `<img>` and can't reach the site's Google Fonts import.

Susan then supplied the actual Cormorant Garamond font files, which closed that gap for good: the wordmark and tagline are now real glyph outlines extracted directly from the font (SemiBold for AWAKENARTS, Italic for the tagline) via `fontTools`, baked as ordinary `<path>` elements at build time — same visual spec as before (104px/600-weight/.12em tracking centered at the wordmark's position; 50px italic tagline), but now pure vector geometry with zero runtime font dependency. Applied to all five affected assets: `-Horizontal.svg`, `-Horizontal-NoTagline.svg`, `-Primary.svg`, `-Compact-Horizontal.svg`, `-Stacked-Colophon.svg` (navy `#0f2340`). The monogram remains a traced path (there's no "live" equivalent for hand-drawn ornamental art, and it was never the source of the artifact). `-Horizontal-OnNavy.svg` and the single-color variants still use their original live `<text>` — untouched, out of scope for this pass, and lower-risk anyway since they're the ones already proven in production.

**Logo & Monogram** (added 2026-07-14, per Susan — the monogram's rendered size had never been governed by a standard, only set ad hoc per placement). The mark is an interlocking cursive/serif "A" woven through a gold leaf sprig — finer-lined than a typical bold wordmark, so it degrades faster at small sizes: the cursive stroke thins to near-invisibility and the leaf veins disappear before the wordmark text next to it shows any comparable loss. Tested empirically by rendering the monogram alone (`AwakenArts-Monogram.svg`) at native pixel widths from 24px to 80px: **the monogram must never render narrower than 40px.** Below that, the cursive "A" and the leaf's inner veins stop reading as distinct strokes. This is a floor on the *monogram's own width*, not the full lockup's — when the monogram sits beside a wordmark (the Horizontal lockups), its share of the total rendered width is roughly a quarter, so the full lockup needs to be sized accordingly.

Canonical asset family and when to use each (all in `public/images/brand/`):
- `AwakenArts-Logo-Primary.svg` — full stacked lockup (monogram, wordmark, tagline), original proportions. Use for standalone identity placements with room to be tall.
- `AwakenArts-Logo-Horizontal.svg` — monogram + wordmark + tagline, side by side (~5:1). Use where the tagline isn't repeated elsewhere on the page.
- `AwakenArts-Logo-Horizontal-NoTagline.svg` — same lockup with the tagline cropped from the viewBox (paths untouched, just outside the visible frame — stays a live vector). Use wherever the tagline would otherwise repeat page copy (e.g. the homepage hero, directly above the "When Language Shapes a Path" H1). **Known issue (found 2026-07-14, not yet fixed):** the viewBox crop clips the monogram's lower cursive tail — the same defect once found and fixed on the Collection cover raster. Flagged for a future asset-placement fix, not yet corrected.
- `AwakenArts-Logo-Horizontal-OnNavy.svg` — the horizontal lockup recolored for dark fields (footer, Studio, Quotes).
- `AwakenArts-Logo-Compact-Horizontal.svg` — **added 2026-07-14, per Susan's "Approved Logo Family" directive.** Emblem + wordmark only (no tagline, no rules), built by reusing the approved Horizontal lockup's own monogram and wordmark paths at a tighter relative scale — emblem ≈1/5 of the wordmark's width, vertically centered on the wordmark's cap-height rather than floating above it. Distinct from `-Horizontal.svg`: a deliberately smaller, tighter-gapped composition for contexts too small for the tagline to read. Transparent background; scale the whole asset proportionally, never emblem and wordmark separately.
- `AwakenArts-Logo-Stacked-Colophon.svg` — **added 2026-07-14, per the same directive.** A dedicated colophon variant of `-Primary.svg`: the complete gold emblem (A, branch, and flourish scaled together, nothing redrawn) reduced to ≈42–48% of the wordmark's width and optically centered (ink-weighted centroid, not bare bounding-box center) above it, moved closer to the wordmark, with the canvas widened around AWAKENARTS so side margins exceed one cap-height. Wordmark and tagline sizes/positions are untouched from `-Primary.svg`. Legible at the reader colophon's actual 280px display width.
- `AwakenArts-Monogram.svg` — the mark alone, no wordmark. Use only where space is too tight for the wordmark to be legible at all (favicon, app icons) — never as a substitute for the full lockup somewhere the wordmark would otherwise fit.
- `AwakenArts-Logo-Navy.svg` / `-Gold.svg` / `-Black.svg` — single-color full-lockup variants for print and non-web contexts.

**Approved Logo Family (locked 2026-07-14, per Susan)** — three legitimate arrangements, not redesigns, all built from the same approved components:
| Placement | Arrangement | Tagline |
|---|---|---|
| Homepage hero | Full horizontal lockup | Yes |
| Navigation | Compact horizontal logo | No |
| Colophon | Stacked colophon mark | Yes, if readable at size |
| Small book cover | Compact horizontal logo | Usually no |
| Contact sheet | Compact horizontal logo | No |
| Formal title page | Horizontal or stacked | Yes |

Per Susan: these three prepared assets should be placed as-is into each context, not rebuilt or re-proportioned page by page.

**Status update (2026-07-14, closeout pass)** — Navigation now carries the logo (`Nav.tsx`), closing the gap noted below in Section titled "Current placements audited": the on-navy Compact Horizontal PNG export, at every breakpoint (44px height desktop, sized down to 32px by 640px — see the Responsive breakpoint standard above), left-aligned inside `.nav-inner`, which shares `.hero`'s own 1500px max-width/centering so the logo's left edge always lines up with the page's principal content boundary rather than a flat viewport padding. **Colophon remains the one placement still on the older asset**: `EditionReaderSection.tsx` uses `AwakenArts-Logo-Primary.svg` (unreduced stacked lockup), not the purpose-built `AwakenArts-Logo-Stacked-Colophon.svg` described above — this was already a documented open decision before this pass (see `brand-assets/README.md`, "Pending Decisions") and remains open; not changed here without Susan's approval.

Current placements audited against the 40px floor (2026-07-14):
- Homepage hero (`.hero-logo`, width up to 420px): monogram renders ≈100px — well clear.
- Footer (`.footer-logo`, height 48px): monogram renders ≈45px — clear, but the tightest of the CSS-driven placements; do not shrink further.
- Edition reader colophon (`.reader-colophon__logo`, width up to 280px): monogram renders well above the floor.
- Collection cover (baked into `collection-cover.jpg`, displayed at 380px): monogram renders ≈40px — sitting exactly on the floor, the one placement worth revisiting if it ever needs to shrink further (e.g. a smaller cover thumbnail elsewhere).
- Compact Horizontal Logo: emblem ≈19% of the asset's own width — at a 220px placement (typical nav width) the emblem alone renders ≈42px, still clear of the 40px floor; below roughly 210px total width this asset would approach the floor and the plain `AwakenArts-Monogram.svg` should be used instead.

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
