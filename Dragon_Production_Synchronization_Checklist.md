# Dragon Figure Edition — Production Synchronization Checklist

**Date:** 2026-07-12
**Governing document:** Susan's Production Master Directive (2026-07-12) — authority order: (1) latest approved production decisions (this conversation) → (2) production master manuscript → (3) production layout files → (4) historical review documents → (5) archived drafts.

This checklist compares the website Reader (`src/data/editions.ts`), the production master manuscript (`AwakenArts_Workbook/02_Dragon/Figure_Edition/Dragon_Figure_Edition_11_Good_Copy.docx`), the approved production layout (`Dragon_Figure_Edition_11_Series_Prototype.pdf`, 2026-07-07), and the published PDF (`public/files/editions/Dragon_Figure_Edition.pdf`), as of today.

## Resolved this session

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
3. **Poem placement.** DRAGON-PRODUCTION.docx says the poem "will be added afterward" onto the atmospheric artwork — which could mean it's meant to be physically composited into the Image page's own negative space (one combined page) rather than kept as a separate page (as it is now, both on the website and in the regenerated PDF). Confirm the current two-page approach (art page, then poem page) is correct, or if these should become one composited page.

## Known limitation

The regenerated PDF uses a substitute serif font (Liberation Serif), not the site's actual Cormorant Garamond — this sandbox has no network path to Google Fonts' font files (only to their CSS, which just points at font files it also can't reach). The layout, pagination, art, and every word of text are otherwise exactly as approved. If exact font fidelity in the PDF matters before this goes to print, it needs a pass on a machine that can reach fonts.gstatic.com, or the actual .ttf file supplied directly.

## Going forward

Per your directive: **Workbook = where writing/editing/production happens, `public/files/editions/` = published build artifacts.** On every future edition approval: update the master manuscript first, generate a new PDF from it, replace the corresponding file in `public/files/editions/`, and commit both together. Adopted starting with this pass.
