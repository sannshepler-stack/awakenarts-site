# AwakenArts Encounter Journal — Conformance Review

**Status: Review only. No revisions implemented.** Per Susan's directive, 2026-07-07: "Apply the same editorial discipline used for the Dragon Edition: review first, revise only where necessary, and preserve what already serves the work well."

**Document reviewed:** `AwakenArts_Encounter_Journal.pdf` (repo root and `public/files/free/`), 8 pages. Metadata confirmed current: Title "The AwakenArts Encounter Journal," Author "Susan Ann Shepler" — no metadata issue, unlike the Queen Ann poem PDF fixed earlier this session.

**Reviewed against:** `AwakenArts_Editorial_Philosophy.md`, `AwakenArts_Figure_Edition_Production_Standard.md`, `AwakenArts_Production_Rules.md`, the current Recognition Model (Encounter → Recognition → Reflection → Integration, locked per `AwakenArts_Site_Architecture.md`), the current Christian Foundation (`/foundation`: "Christ is the center. Scripture is the authority. The artistic work is an invitation to reflect."), and the current Figure Edition methodology (the Dragon Christian Fulfillment work — recognition precedes Scripture; Scripture is not one voice among several).

**Method:** read all 8 pages directly (text and rendered images), and cross-checked the five live Encounter pages (`/encounters/journey`, `/deep`, `/table`, `/word`, `/continue`) and their source components for drift between what the Journal claims and what the site actually shows.

---

## Page 1 — Cover

Title, subtitle ("A Self-Guided Companion to the Five Encounters"), epigraph ("Symbols do not explain. They reveal."), author line.

**In conformance.** No revision needed. One thing checked and cleared rather than assumed: the lowercase, descriptive use of "companion" here does not collide with the newly-adopted "[Figure] Companion" naming standard (Dragon Companion, Grismere Companion, etc.) — that standard governs a specific, different product family (a second publication paired with a Figure Edition), not this Journal. No renaming implied or needed.

## Page 2 — How to Use This Journal

States the four movements — Encounter, Recognition, Reflection, Integration — and the five Encounters in order (Journey, The Deep, The Table, The Word, Continue).

**In conformance.** This is the locked, canonical Recognition Model (documented in `AwakenArts_Guide_to_Symbolic_Facilitation.pdf` and operationalized in `AwakenArts_Participant_Handouts.pdf`), correctly and exactly reproduced. The five-Encounter sequence matches the live `/encounters` index exactly, in the same order.

**One observation, not a defect, flagged for awareness only:** the Figure Edition page formerly titled "Reflection" was permanently retitled "Reflect" this session, on the reasoning that "Reflection" reads as a passive noun while "Reflect" reads as an active invitation. The Recognition Model's third movement is still labeled "REFLECTION" here. These are different frameworks (a site-wide four-movement model vs. a specific Figure Edition page title), so this is not a strict inconsistency, and I am not recommending a change to the Journal in isolation — "REFLECTION" is inherited from the shared Recognition Model definition used across the Guide and the Participant Handouts as well, and editing it here alone would create a new inconsistency between the Journal and its own source model. If this word-choice reasoning should extend to the Recognition Model itself, that is a separate, cross-document decision, not a Journal edit.

## Page 3 — Journey

Title, mantra ("I begin."), one italic orientation line, no Scripture or Echo, four prompts, forward line, link to `/encounters/journey`.

**In conformance.** No revision needed. Matches the live page exactly; the absence of Scripture here (unlike pages 4–7) matches the live `/encounters/journey` page, which also carries none.

## Page 4 — The Deep

Scripture (Psalm 42:7) appears between the orientation line and the four Recognition Model prompts.

**Conforms structurally, but raises the review's main theological-sequencing question** (see "Overall Finding," below): Scripture is placed before the reader's own Encounter/Recognition prompts on this page, which sits in tension with the "recognition precedes Scripture" principle the Dragon Figure Edition work established — Scripture is meant to meet and receive a reader's recognition, not announce meaning in advance of it. No Scripture/Echo distinction issue on this page, since there is only one quote.

**Recommended smallest revision, if Susan wants to apply the principle here:** move the Scripture block to below the four prompts (between "INTEGRATION" and the forward line), so the reader moves through the four movements first and receives Scripture afterward. This is a reordering of existing elements only — no new text, no rewording.

## Page 5 — The Table

Scripture (Psalm 23:5) and an "Echo" quote from another AwakenArts work ("Angel Gardens") appear together, before the four prompts.

**Does not fully conform — one concrete, verifiable finding.** The live `/encounters/table` page deliberately distinguishes these two quotes: Scripture renders in the brighter `--enc-cream` tone at a slightly larger size (`.scripture` class), while the Echo renders in the dimmer, secondary `--enc-mist` tone (`.echo` class) — see `encounter.module.css`, lines 147–184. In the Journal PDF, both quotes render with identical gray italic styling and identical reference-line treatment (confirmed by rendering the page). This flattens exactly the authority distinction the current Christian Foundation calls for ("Scripture is the authority") and that the Dragon Christian Fulfillment work spent many revisions establishing — Scripture is not one voice among AwakenArts' own creative "echoes," even when both are quoted with admiration.

**Recommended smallest revision:** restore a light typographic distinction between the Scripture line and the Echo line in the print layout — matching, even approximately, the live site's brighter/dimmer relationship. No rewording of either quote is needed; this is a formatting-only fix.

Also carries the same Scripture-before-prompts sequencing question as page 4.

## Page 6 — The Word

Scripture (Psalm 119:105) and an Echo quote ("Swan Sings") — same pattern, same finding, and same recommendation as page 5.

## Page 7 — Continue (encounter spread)

Scripture (Psalm 121:8), no Echo quote.

Same Scripture-before-prompts sequencing question as page 4. No Scripture/Echo distinction issue, since only one quote is present.

## Page 8 — Continue (closing)

Points to `/collection` and cross-sells "The AwakenArts Guide to Symbolic Facilitation... for facilitators, group leaders, and anyone who wants to companion others through this same practice."

**In conformance.** Checked against `AwakenArts_Product_Architecture.md` rather than assumed: the Guide to Symbolic Facilitation is a distinct, current, cross-figure facilitator-training product, separate from the per-figure "[Figure] Companion" family the new naming standard governs. No naming collision, no renaming needed. "The AwakenArts Collection" reference also matches Production Rule No. 2's current definition of Collection exactly. Copyright line and structure are unchanged and require no revision.

---

## Overall Finding: Scripture sequencing (pages 4, 5, 6, 7)

The one substantive, cross-page finding in this review: four of the Journal's five Encounter pages place a Scripture quotation before the reader engages the four Recognition Model prompts — including, on page 4, immediately above a prompt that literally reads "What do you notice, before you explain it?" The Dragon Figure Edition's Larger Story work spent many revisions arriving at the opposite sequence for a reason: recognition first, Scripture received afterward, so Scripture illuminates what the reader has already recognized rather than supplying the frame in advance.

This wasn't a defect introduced by drift — the Journal was built (2026-06-27) before that principle was discovered and locked (this session, via the Dragon work). It's a case of the standard maturing after this document was finished, exactly the situation this Conformance Review exists to catch.

**Recommended smallest revision, if Susan elects to apply it:** on pages 4, 5, 6, and 7, move the Scripture (and Echo, where present) block to sit after the four prompts, immediately before each page's closing forward-line. No wording changes anywhere; this is a reordering of existing blocks, page by page, in the existing production file only — not a new edition, not new content, and not a change to the five-Encounter structure, the four-movement model, or the Journal's function as a free introductory resource.

## Secondary Finding: Scripture/Echo visual distinction (pages 5, 6)

Pages 5 and 6 present Scripture and an internal AwakenArts "Echo" quote with identical formatting, where the live site deliberately distinguishes them. Recommended smallest revision described under Page 5, above — a formatting-only fix, no rewording.

## Everything Else

Pages 1, 2, 3, and 8 are in full conformance with current publishing standards, terminology, and the Recognition Model as currently defined. No revision is recommended for these pages. The Journal's function as a free, self-guided, 8-page introductory companion is unchanged and unthreatened by either finding above — both are addressable without expanding the Journal, rewriting it, or altering its structure beyond reordering two existing elements on four pages.
