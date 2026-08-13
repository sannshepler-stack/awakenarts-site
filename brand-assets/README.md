# AwakenArts Brand Assets

Organized 2026-07-14 per the "AwakenArts Brand-Asset Organization Directive."
This folder is a working/reference archive — **nothing here is live-site
code**. The website continues to read its logo files from
`public/images/brand/`, untouched by this reorganization.

## Approved Placement Map

| Placement | Approved logo |
|---|---|
| Homepage hero and prominent brand placements | Full horizontal logo |
| Navigation, contact sheets, small covers, footers | Compact horizontal logo |
| Colophon and formal publishing pages | Stacked colophon logo |
| Watermark and restrained decorative branding | A emblem |

These are the only three lockup arrangements plus the standalone emblem —
no other configuration is approved. Placements on a dark/navy field use the
same arrangement recolored (white/cream wordmark, same gold emblem), not a
different composition.

## Folder Guide

### `source-svg/`
Byte-for-byte copies of the eleven logo SVG files as they stood in
`public/images/brand/` at the moment this archive was created (2026-07-14):
`AwakenArts-Logo-Horizontal.svg`, `-Horizontal-NoTagline.svg`,
`-Horizontal-OnNavy.svg`, `-Primary.svg`, `-Compact-Horizontal.svg`,
`-Compact-Horizontal-OnNavy.svg`, `-Stacked-Colophon.svg`, `-Navy.svg`,
`-Gold.svg`, `-Black.svg`, `-Monogram.svg`. Reference only — do not edit
these copies; they exist to document what the source files looked like
going into the vector-master pass.

*(Note: the directive specified nine files; eleven currently exist in
`public/images/brand/` — the count grew during this session with the
addition of `Compact-Horizontal.svg`, `Stacked-Colophon.svg`, and
`Compact-Horizontal-OnNavy.svg`. All eleven were copied here rather than
guessing which two to omit — flagged for confirmation.)*

### `fonts/source/`
The approved typeface, Cormorant Garamond, as supplied by Susan:
- `CormorantGaramond-Regular.ttf`
- `CormorantGaramond-SemiBold.ttf` — used for the AWAKENARTS wordmark (weight 600)
- `CormorantGaramond-Italic.ttf` — used for the tagline (weight 400, italic)
- `OFL.txt` — SIL Open Font License
- `CormorantGaramond-README.txt` — the family's own README, as distributed

Not copied into `public/` — the vector masters bake the needed glyphs as
paths, so the live site has no runtime dependency on these font files.

### `vector-masters/`
The four approved outlined masters. Each is the exact current production
file (see "Current state of each master" below) — no redrawing, no
resizing of internal elements, wordmark and tagline both baked as real
Cormorant Garamond glyph outlines (via `fontTools`, extracted directly from
the font files above), never live `<text>`, never a bitmap trace. All four
have transparent backgrounds.

- `AwakenArts-Logo-FullHorizontal-Outlined.svg`
- `AwakenArts-Logo-CompactHorizontal-Outlined.svg`
- `AwakenArts-Logo-StackedColophon-Outlined.svg`
- `AwakenArts-Emblem-A-Outlined.svg` — the complete gold emblem (A, botanical
  branch, and flourish) alone, no wordmark. This one was never a text-tracing
  problem — it's hand-drawn artwork, already pure vector, unchanged.

### `png-exports/`
Transparent PNGs rendered fresh from the vector masters above (not upscaled
from any existing smaller PNG), generous transparent padding preserved on
all sides:
- `AwakenArts-Logo-FullHorizontal.png` (2400px wide)
- `AwakenArts-Logo-CompactHorizontal.png` (2000px wide)
- `AwakenArts-Logo-StackedColophon.png` (1600px wide)
- `AwakenArts-Emblem-A-Watermark.png` (1200px wide) — original single export,
  kept for reference; superseded for new work by the sized/colored sets below.

#### `png-exports/emblem/`
Emblem-only exports at fixed sizes, all rendered directly from
`vector-masters/AwakenArts-Emblem-A-Outlined.svg` (not upscaled from one
another), padding proportionally identical across every size (~4% margin on
each side at every resolution):
- `AwakenArts-Emblem-A-2048.png`
- `AwakenArts-Emblem-A-1024.png`
- `AwakenArts-Emblem-A-512.png`
- `AwakenArts-Emblem-A-256.png`

Uses: contact-sheet watermark source, decorative website placement, formal
publishing mark, social avatar source, favicon source, print ornament.

#### `png-exports/watermark/`
Contact-sheet watermark sources, 2000px wide, full opacity (verified: 255
alpha at full coverage, no baked-in fade) with generous transparent padding.
Same 93 emblem paths as the vector master in every file — only the fill
color changes, no shape/detail altered, following the same recolor-only
precedent already used for the Navy/Gold/Black single-color lockup variants:
- `AwakenArts-A-Watermark-Gold.png` — the emblem's own original multi-tone
  gold, unmodified.
- `AwakenArts-A-Watermark-Navy.png` — flat `#0f2340` recolor.
- `AwakenArts-A-Watermark-White.png` — flat `#ffffff` recolor.

Any opacity reduction for actual contact-sheet layout (suggested 5–12%,
tuned to the background) is applied only at placement time in that layout —
never baked into these master files, and never positioned over a face, poem
text, signature, or essential symbol.

### `favicon-masters/`
`AwakenArts-Favicon-Master.svg` — the already-approved favicon presentation
(built in an earlier session, live since before this addendum): 200×200
viewBox, deep navy rounded-square background (`#0f2340`, `rx=36`), the same
93-path gold emblem centered with generous padding, no wordmark, no tagline,
no gold rules. This addendum did not redraw or reposition it — it archives
the existing approved artwork as the reference master and derives every
favicon/social file below from this one file.

`legibility-test/` holds the tiny-size legibility proofs — see below.

#### Tiny-size legibility test (Section 5)
Rendered the master at 16, 32, 48, 64, 180, and 512px and inspected each
(proof strip: `legibility-test/proof-strip-16-32-48-64.png`, individual
files: `legibility-test/favicon-test-{size}.png`).

- **16×16 — fails.** At true rendering size the A, flourish, and leaves
  compress into an indistinct gold smudge; it does not read as a letterform.
- **32×32 — marginal.** The A is identifiable if you already know what
  you're looking for; the flourish and finer leaf/vein details are close to
  collapsing into noise. Borderline, not clearly reliable.
- **48×48 and up — clear.** The A, flourish, and botanical branch are all
  distinct and legible; gold reads cleanly against navy; padding and optical
  centering hold at every size from here up.

Per the directive's explicit instruction, this is a stop condition: 16px is
unclear and 32px is marginal, so **no simplified/reduced-detail favicon mark
has been created.** The existing 16/32/48px assets already live at
`public/favicon.ico` predate this addendum and are left as they are — this
finding is flagged for the creative director's decision, not acted on
unilaterally. If a simplified small-size mark is wanted, it needs a
separately reviewed and approved derivative per the addendum's Section 8
governing rule.

### Section 4 — website favicon family (public/)
The already-approved master above was already live at
`public/favicon.ico` / `public/apple-touch-icon.png` (both already matched
spec — `favicon.ico` already multi-resolution 16/32/48, `apple-touch-icon.png`
already exactly 180×180 — neither was touched). This pass only *added* the
remaining required filenames the directive lists, all rendered fresh from
the identical master, nothing redrawn or repositioned:
- `public/favicon.svg`
- `public/favicon-16x16.png`
- `public/favicon-32x32.png`
- `public/favicon-48x48.png`
- `public/android-chrome-192x192.png`
- `public/android-chrome-512x512.png`

These files are **not yet referenced** anywhere — `src/app/layout.tsx`'s
metadata still only points at `/favicon.ico` and `/apple-touch-icon.png`, as
it did before this pass. Wiring a manifest or additional `<link>` tags to
pick these up is a placement decision, not made here.

### `png-exports/social/`
`AwakenArts-Profile-512.png` and `AwakenArts-Profile-1024.png` — square,
navy background, centered gold A, rendered from the same favicon master.
Checked for circular-crop safety: 0% of the gold emblem's pixels fall
outside the circle inscribed in the square at either size, so a profile-photo
circular crop loses none of the mark (only navy background, which is a flat
fill, is trimmed at the corners).

## Approved Colors

| Context | Wordmark/tagline color | Emblem color |
|---|---|---|
| Cream/light backgrounds | `#0f2340` (navy) | Original multi-tone gold (unchanged per asset) |
| Navy/dark backgrounds | `#ffffff` (white) | Same gold as above |
| Single-color navy print variant | `#0f2340` throughout | `#0f2340` |
| Single-color gold print variant | `#c8a24a` throughout | `#c8a24a` |
| Single-color black print variant | Black (no fill attribute; default) | Black |

## Font Family and Weights

**Cormorant Garamond** — SIL Open Font License (see `fonts/source/OFL.txt`).
- Wordmark (AWAKENARTS): SemiBold (600), `.12em` letter-spacing
- Tagline (When Language Shapes a Path): Italic (400)

## Governing Rules

- **Internal logo elements must never be resized separately.** The emblem
  and the wordmark each keep their own established proportions; only their
  relative scale and spacing were tuned (per Susan's explicit approvals),
  never by redrawing or reconstructing either component.
- **Approved assets are always scaled proportionally as one complete
  unit.** Any placement of a master (SVG or PNG) resizes the whole asset
  uniformly — never stretched, never with the emblem and wordmark scaled
  independently at display time.

## Current State of Each Master (as of 2026-07-14)

- **Full horizontal**: emblem beside AWAKENARTS + tagline, tagline included.
  This is the file currently live at `public/images/brand/AwakenArts-Logo-Horizontal.svg`
  (hero placement, 420px max-width).
- **Compact horizontal**: emblem + AWAKENARTS only, no tagline, emblem ≈1/5
  of wordmark width, vertically centered on the wordmark's cap-height.
  Approved by Susan for navigation/small-cover/contact-sheet/footer use;
  not yet wired into any page (see Pending Decisions).
- **Stacked colophon**: emblem centered above AWAKENARTS + tagline, emblem
  reduced 17.5% from its original stacked proportions and optically
  (ink-centroid) centered, moved closer to the wordmark. Not yet wired into
  any page — the reader colophon currently still uses `AwakenArts-Logo-Primary.svg`
  (the unreduced stacked lockup).
- **A emblem**: unchanged hand-drawn artwork, no wordmark.

## `retired/`

Non-approved, historical assets kept for reference only — never referenced by live site code, never used as a source for new derivatives.

- `logo-pre-2026-07-14-rebuild.png` — moved here 2026-07-15 per the AwakenArts Legal and Risk Standards package (Stage 1 follow-up). Originally `public/images/brand/logo.png`, dated 2026-07-12 — before the 2026-07-14 favicon/emblem identity system was locked as the approved standard (see "Current State of Each Master" above). 800×817px RGBA. Confirmed by hash comparison: does not match any current approved export (`exports/`, `public/android-chrome-512x512.png`, `public/apple-touch-icon.png`, or `public/images/brand/og-logo.png`) — a distinct, superseded pre-rebuild file. Its only site reference was the JSON-LD `Organization.logo` field in `src/app/layout.tsx`, which now points at `android-chrome-512x512.png` instead (see that file's 2026-07-15 comment). Not deleted — preserved here as historical record, out of `public/` so it can no longer be served or referenced by mistake.

## Pending Decisions (updated 2026-07-14, closeout pass)

**Resolved since this file was first written:**
- Footer, `/studio`, `/studio/silhouettes`, and `/quotes` now all use the
  **compact horizontal** lockup on navy
  (`exports/AwakenArts-Logo-CompactHorizontal-OnNavy-1024.png`), matching
  the approved placement map above. No page still shows the full lockup on
  a navy field.
- The site's primary navigation bar (`Nav.tsx`) now carries the logo — the
  same compact on-navy PNG, sized responsively (44px height at desktop,
  down to 32px by 640px), left-aligned inside a container that shares
  `.hero`'s own max-width/centering. See `AwakenArts_Editorial_Identity_
  and_Design_Standard.md` Section 3 for the full placement note.
- **Collection cover — clean rebuild, 2026-07-14.** The pale rectangular
  residue band flagged earlier this same day (see Implementation Log) is
  resolved: the cover's top zone was rebuilt clean (Compact Horizontal
  logo + "The Collection" title only, on a fresh flat-cream field), saved
  as `public/images/collection/collection-cover-clean.png`. The original
  `collection-cover.jpg` is preserved, untouched, and no longer referenced
  from the homepage.
- **Method section leaf ornament, 2026-07-14 (placed, then revised same
  day).** `awakenarts-leaf-pair.png` (see Section 7 note below) is no
  longer just a "possible" decorative file — it is now live, once, on the
  homepage Method section, as a small signature mark between the eyebrow
  and the opening statement. Website derivative:
  `public/images/brand/awakenarts-leaf-pair-trimmed.png`, alpha-trimmed to
  the source's visible-ink bounding box only (no artwork alteration). The
  source PNG in `brand-assets/` remains the untouched retained master.
  This is still the only live decorative-emblem placement on the site —
  see Section 7 note below for the two still-unused retained files.

**Still open, not decided in this pass:**
- The reader colophon (`EditionReaderSection.tsx`) still uses
  `AwakenArts-Logo-Primary.svg` (unreduced). Whether to switch it to the
  purpose-built `AwakenArts-Logo-Stacked-Colophon.svg` (reduced/re-centered
  emblem) remains pending approval.
- The `/sketchbook` page still has no logo — adding one there is a
  placement decision, not yet made.
- "Contact sheets" has no corresponding page/component in this codebase
  today; the compact PNG/SVG exports are ready whenever that need arises
  (print or otherwise).
- No decorative/watermark use of `AwakenArts-Emblem-A-Outlined.svg` exists
  anywhere on the live site yet (favicon derivation only) — the "restrained
  decorative branding" placement in the approved-arrangements table is
  still unimplemented.
- **Favicon/emblem identity system — APPROVED AND LOCKED, 2026-07-14.**
  Susan's own words: "the emblem now behaves as a genuine identity
  system — from browser favicon through mobile icon to large brand
  application — without losing the delicacy of the original A. This
  direction is approved and should be locked as the standard."
  `favicon-masters/AwakenArts-Favicon-Composite.svg` (navy square,
  ink-bbox centered with computed, not eyeballed, margins: ~10% L/R,
  ~19% T/B) is now the standing standard for every favicon/app-icon
  export going forward — do not rebuild this pipeline from a different
  starting point without a new directive. The full build record and
  legibility proofs remain in `favicon-masters/` for reference
  (`legibility-proofs/`: true-scale contact sheet, true-pixel vs.
  fair-enlargement vs. misleading-nearest-neighbor comparison,
  browser-tab proof, mobile home-screen proof).
  Live since approval: `public/favicon.svg`, `public/favicon.ico`
  (16/32/48), `public/favicon-16x16.png`, `-32x32.png`, `-48x48.png`,
  `public/apple-touch-icon.png`, `public/android-chrome-192x192.png`,
  `-512x512.png`, and `public/site.webmanifest` (new — references the
  two android-chrome sizes for Android "add to home screen"). All were
  copied from `favicon-masters/proposed-for-public/` with byte-for-byte
  verification against what was reviewed — nothing was regenerated at
  copy time. `src/app/layout.tsx`'s `metadata.icons` was extended to
  list `favicon.svg` first (so SVG-capable browsers use the true vector
  source at any pixel density) with the sized PNGs and `.ico` as the
  fallback chain, plus a `manifest` link.
  The one open note, not a blocker: the flat 16×16 raster on its own is
  still the softest link in the chain (legacy/non-SVG-favicon contexts,
  1x displays) — Susan's approval covers the system as delivered, so no
  further action here unless a future directive asks for a
  small-bitmap-specific simplified glyph.
- **Website decorative emblems (Section 7)** — `public/images/brand/ornaments/`
  still does not exist as a dedicated directory. Of the three files
  originally listed as "possible approved files," one is now live:
  `awakenarts-leaf-pair.png` was placed on the homepage Method section
  2026-07-14 (see "Resolved" above) — its website derivative lives at
  `public/images/brand/awakenarts-leaf-pair-trimmed.png`, not in an
  `ornaments/` directory, since it has exactly one placement today.
  `awakenarts-a-watermark.png` and `awakenarts-botanical-sprig.png` remain
  unused and unplaced — still retained-library-only, ready to produce from
  the same approved emblem master whenever a specific placement (section
  transitions, quote markers, page endings) is chosen.

- **Print-materials divider — RESOLVED, 2026-08-01.** Susan asked for an
  AwakenArts-specific divider across all print materials, to mark a
  "pause" on journal thought pages. `awakenarts-leaf-pair.png` was
  selected — the same emblem detail already approved as the site's small
  signature/pause mark (see "Resolved" above) — rather than the taller
  `awakenarts-botanical-sprig.png` or the full `awakenarts-a-watermark.png`
  emblem, both of which read as too large/vertical for an inline print
  pause mark. New folder `png-exports/dividers/` holds the print
  derivative: alpha-trimmed to the visible-ink bounding box (matching the
  precedent set by the website's `-trimmed.png` derivative), 4% uniform
  padding restored on all sides, rendered at three sizes from the same
  trimmed master — `AwakenArts-Divider-LeafPair-800.png`,
  `-400.png`, `-200.png`. Source `awakenarts-leaf-pair.png` is unaltered.
  First live use: the Kings & Queens journal's thought pages (Side by
  Side, Queen Ann Awareness, King Awareness, Gathering thought page,
  Final image page), centered between the image and the reflection line,
  at low opacity — see that journal's own `ASSET_MANIFEST.md` for
  placement detail. Intended as the standard pause mark for future
  journals in the series too.

  **Revision, 2026-08-01 (same day):** the mark was refined to a thin
  gold rule — leaf — thin gold rule, flanking the leaf on either side
  with breathing room scaled to the page's available white space,
  matching the gold tone already used on the movement threshold pages
  rather than the leaf alone. In the Kings & Queens journal this is
  assembled live in CSS (`.awaken-pause`: flexbox, two `<span>` rule
  lines around the `-400.png` leaf). For use outside HTML/CSS contexts
  (Word, InDesign, or any print workflow that can't assemble the mark
  from parts), the same rule-leaf-rule composition was also flattened
  into a single standalone PNG per size, transparent background,
  `AwakenArts-Divider-Complete-2000.png` (2000×266), `-1000.png`
  (1000×132), `-500.png` (500×65) — proportions matched to the CSS
  version (leaf ~10% of total width, centered, with the two gold rules
  filling the remainder at the same semi-transparent gold, `rgba(181,
  146, 79, 0.55)`). Built from the same `-800.png` trimmed leaf master;
  no new image assets. This is now the definitive AwakenArts pause
  mark for all print materials — leaf-only component pieces for
  CSS/code contexts, complete flattened composite for everything else.
- **Dark-background PNG export family — 2026-07-14, per "DARK FOOTER LOGO
  — REQUIRED CORRECTION" directive.** Susan required the footer to stop
  using a live SVG and instead use a dedicated transparent PNG rendered
  directly from the approved outlined SVG masters
  (`vector-masters/AwakenArts-Logo-FullHorizontal-Outlined.svg` and
  `AwakenArts-Logo-CompactHorizontal-Outlined.svg`, both left unchanged).
  Built via `cairosvg` (true vector rasterization, no browser, no live
  font) at `background_color=None` for genuine alpha transparency —
  verified corner/edge alpha == 0 on every file before use.
  Color treatment: antique-gold emblem untouched; wordmark white (`#fff`);
  tagline (Full Horizontal only — Compact has none) recolored from white
  to light-ivory (`#FAF7F2`, the site's own `--cream` value) so it reads
  as a visually distinct, secondary line under the wordmark; the gold
  tagline rule (`stroke="#cca157"`) untouched. This recolor lives in
  `public/images/brand/AwakenArts-Logo-FullHorizontal-OnNavy.svg`
  (recolor-only derivative of the outlined master, not a redraw).
  Five PNGs delivered in this folder:
  `AwakenArts-Logo-FullHorizontal-OnNavy-{2048,1024,512}.png` and
  `AwakenArts-Logo-CompactHorizontal-OnNavy-{1024,512}.png` (also copied
  to `public/images/brand/exports/` for live site use).
  Footer placement: **Compact Horizontal** was selected, not Full —
  Susan had already flagged (2026-07-14, footer SVG swap) that the
  tagline isn't readable at footer size, and the compact mark fits the
  narrow `.footer-brand` column with room to spare. `AwakenArts-Logo-
  CompactHorizontal-OnNavy-1024.png` is now live in `Footer.tsx` and its
  three duplicated instances (`/studio`, `/studio/silhouettes`,
  `/quotes`). Verified with real-CSS/real-font (Cormorant Garamond)
  mockups against the actual footer navy (`--deep: #1C2B3A`) at both a
  1200px desktop width and a 390px mobile width before replacing the
  live SVG.
