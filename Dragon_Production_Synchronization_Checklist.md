# Dragon Figure Edition — Production Synchronization Checklist

**Date:** 2026-07-12 (round 2 — Dragon Revision Directive)
**Governing document:** Susan's Production Master Directive (2026-07-12), as extended by the same-day Dragon Revision Directive — authority order: (1) latest approved production decisions (this conversation) → (2) production master manuscript → (3) production layout files → (4) historical review documents → (5) archived drafts.

This checklist compares the website Reader (`src/data/editions.ts`), the production master manuscript (`AwakenArts_Workbook/02_Dragon/Figure_Edition/Dragon_Figure_Edition_11_Good_Copy.docx`), the approved production layout (`Dragon_Figure_Edition_11_Series_Prototype.pdf`, 2026-07-07), and the published PDF (`public/files/editions/Dragon_Figure_Edition.pdf`), as of today.

## Resolved in round 2 — the Dragon Revision Directive (same day, art/layout only)

No reader-facing text changed in this round — every item below is art, layout, or asset-only. Full rationale for each page is in the manuscript's own "ADDENDUM — DRAGON REVISION DIRECTIVE" note.

| Page | Change |
|---|---|
| Begin (Encounter) | Restored the original storm-clouds-to-sunset atmospheric artwork as a full-bleed background. This page had drifted to text-only; the Directive was explicit that it must not be. Text switched to light/cream color with a soft shadow for legibility against the now-dark background. |
| The Image (Figure) | **Reversed back** to the Gallery's painted dragon figure (teal/gold watercolor) — this is the SECOND reversal of this page's art in the same production day. Round 1 had corrected the site to use the atmospheric "Dragon Fight" field here (see round-1 table below); the Directive explicitly overrides that and confirms the Gallery figure belongs here instead, matching the master manuscript's own Page 3 production note ("the framed watercolor dragon figure on a cream mat"). This is the Directive-confirmed, final placement. |
| The Poem | Removed the plain-text/HTML poem rendering entirely. Now uses the actual authored concrete-poem artwork (`Dragon_Poem_Master.png` — confirmed by direct visual comparison against Susan's own reference image: orange "THE DRAGON FLUNG" title, blue body text, red closing lines, transparent background), composited over the atmospheric "Dragon Fight" field (moved here from the Image page). Background supports the artwork; it is not the page's content. |
| Recognition | Unchanged. |
| The Larger Story | Added a subtle full-page background (landscape with sun and moon, faded ~72% toward the page cream) behind the unchanged approved text. |
| Reflection | Added a banner image above the unchanged approved text — same swirl-motif atmospheric art family and treatment as Recognition's banner. |
| Journal | Separated the arch illustration from the ruled lines. The art is now an isolated bottom-right corner accent with its own baked-in ruled lines removed (vertical blur + alpha feather). Real ruled lines are drawn beneath the intro text only, in the open writing space. |
| Message Delivered | Unchanged. |
| Living the Message | Background faded further (55% toward page cream, up from the round-1 version) so the arch reads as atmosphere, not a dominant illustration. |
| About This Edition (Colophon) | The watercolor landscape no longer covers the full page. It is now a bottom band only (`colophon-band.png` — the original art's bottom ~52%, pre-feathered to transparent at its own top edge via PIL, not a CSS mask, so it renders identically everywhere including the print PDF). |

Also resolves **Open item 3** from round 1 below ("poem placement") — the Directive confirms poem and figure are two separate pages, and specifies exactly how the poem page's background and artwork relate (background supports, artwork is the focal point).

Master manuscript, website (`editions.ts`, `EditionReaderSection.tsx`, `globals.css`), and the production PDF (`public/files/editions/Dragon_Figure_Edition.pdf`) are all synced to this round as of this checklist update.

## Resolved in round 1 (earlier the same day)

| Item | Status |
|---|---|
| Living the Message | **Synced.** Susan's text, confirmed 2026-07-12, is live on the website, in the manuscript's synchronization note, and in the regenerated PDF. This supersedes both the Good Copy master's original version of this page and DRAGON-PRODUCTION.docx's version (they agree with each other; Susan's confirmed text is slightly different from both and governs). |
| The Larger Story | **Synced, added.** Was fully built and approved in the manuscript (2026-07-07) and in the Series Prototype layout, but was never wired into the website. Now live on the website, referenced in the manuscript sync note, and in the regenerated PDF. Kept — DRAGON-PRODUCTION.docx's silence on this page was read as "not part of this review round," not as a removal, per your confirmation. |
| Journal | **Synced.** Website now uses DRAGON-PRODUCTION.docx's longer wording (supersedes the Good Copy master's shorter version) — governs per rule (1). |
| Guided Journal page / Lined journal page | **Confirmed as one page, not two.** The Journal page's background art (`journal-bkg.png`) has both the guided text and the ruled lines baked into a single piece — there is no separate "lined-only" page in the approved 11-page structure. |
| Recognition | **Synced.** Website now uses DRAGON-PRODUCTION.docx's wording (different sub-structure — "Notice the Judge," inner-critic framing — from the Series Prototype layout's "Develop the Insight" wording). Governs per rule (1). |
| Reflection | **Synced.** DRAGON-PRODUCTION.docx's five-question version (retitled "Reflection") replaces the Good Copy master's three-question "Reflect." |
| Message Delivered | **Synced, split into its own page.** Was folded into `colophon` on the live site; now its own section with DRAGON-PRODUCTION.docx's revised body copy and the navy-field/gold-ampersand design (unchanged design, per the doc's explicit "no added imagery" instruction). |
| Updated headers and footers | **Partially synced.** The production layout PDF and the regenerated PDF both carry a running footer (page number · ampersand · "The Dragon" · section name) on every content page. The website Reader has no equivalent — it only has the top bar (edition title + progress dots). **Open question below.** |
| Facilitator Notes | **Confirmed correctly absent.** Removed from the Figure Edition per Susan's standing directive (recorded in the Good Copy manuscript's own "Removed From This Edition" note). Not a gap. |
| Current page order | **Corrected.** The website had Image before Begin; the approved layout has Begin before Image. Website reordered to match. |
| Page 4 art (the "Dragon Poem" page) | **Corrected — was misapplied.** DRAGON-PRODUCTION.docx's "Page 4" instructions describe a pure-image page (atmospheric field, dragon reduced to an accent, title baked in, "poem added afterward"). This was first applied as a CSS background behind the poem *text* section by mistake. Corrected: the new art (`dragon-background.png` → `image-desktop/tablet/mobile.jpg`) now replaces the old full-dominance dragon illustration on the website's `image` section, matching the layout PDF's actual page 4 (a pure image page, confirmed by inspecting its embedded image object directly). The poem text section (`word`) is unchanged, no background. |
| Current typography and layout | **Synced for the regenerated PDF** (Cormorant Garamond is not fetchable from this sandbox — see Known Limitation below). Website already uses the real font via the site's global stylesheet. |
| Master manuscript | **Updated.** `Dragon_Figure_Edition_11_Good_Copy.docx` now opens with a "Production Synchronization — 2026-07-12" note containing today's approved final text for every revised page, clearly marked as governing over any conflicting wording later in the same document. Nothing in the file was deleted or rewritten — the historical Good Copy content (with its own revision logs) is preserved below the note. |
| Published PDF | **Regenerated and replaced.** `public/files/editions/Dragon_Figure_Edition.pdf` was a stale 9-page file from June 21 (predating even the Good Copy master). Replaced with an 11-page PDF built from today's approved content and the actual production art, matching the website Reader page-for-page. A copy also saved to the Workbook as `Dragon_Figure_Edition_11_Current_Production.pdf` for reference alongside the Series Prototype. |

## Open items — need your decision, not yet resolved

1. **Standalone title page.** The approved Series Prototype layout has a separate page 3 reading only "THE DRAGON," between Begin and the Image page. DRAGON-PRODUCTION.docx's Page 4 instructions instead bake the title ("The Dragon Fight") directly into the Image page's own art, with no separate title-only page. The website and the regenerated PDF both currently follow DRAGON-PRODUCTION.docx (no separate title page — 11 pages total, not 12). Confirm this is the intended final structure, or say if the standalone title page should be restored.
2. **Per-page footers on the website Reader.** The PDF/print layout carries a running footer (page number, ampersand, edition + section name) on every page. The web Reader currently has no equivalent. Should this be added to the Reader for visual consistency with the printed piece, or is it PDF-only convention that doesn't belong in the paced web experience?

## Resolved — poem placement (was open item 3)

**Poem placement.** The Dragon Revision Directive resolved this: the Figure and the Poem remain two separate pages/sections (not composited into one), and the Poem page composites the real poem artwork over the atmospheric "Dragon Fight" background — the background supports the poem, it does not replace it, and the poem artwork is the page's focal point. Implemented in both the website and the regenerated PDF.

## Known limitation

The regenerated PDF uses a substitute serif font (Liberation Serif), not the site's actual Cormorant Garamond — this sandbox has no network path to Google Fonts' font files (only to their CSS, which just points at font files it also can't reach). The layout, pagination, art, and every word of text are otherwise exactly as approved. If exact font fidelity in the PDF matters before this goes to print, it needs a pass on a machine that can reach fonts.gstatic.com, or the actual .ttf file supplied directly.

## Going forward

Per your directive: **Workbook = where writing/editing/production happens, `public/files/editions/` = published build artifacts.** On every future edition approval: update the master manuscript first, generate a new PDF from it, replace the corresponding file in `public/files/editions/`, and commit both together. Adopted starting with this pass.
