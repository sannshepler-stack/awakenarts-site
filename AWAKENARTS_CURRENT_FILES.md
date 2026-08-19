# AWAKENARTS — CURRENT FILES

**Read this before touching any AwakenArts file, in either the website repo or the production workspace.**

Status: GOVERNING. Written 2026-08-19, by Claude, at Susan's direction, after discovering — while trying to locate one file for the "Where You Stand" journal — that AI assistants have been working from at least four physically separate copies of this project without a shared map. This document is that map. It supersedes nothing by deleting or moving anything: **no file was moved, renamed, deleted, or duplicated to produce this audit.** It also does not replace `AWAKENARTS_CURRENT_MATERIALS.md` / `AWAKENARTS_FILE_AUDIT.md` (2026-08-13) — it extends their scope to locations those documents didn't cover, and points out where their own recommendations were never carried out.

---

## 1. The locations (the "different windows")

Seven physical locations hold AwakenArts material. This audit has now connected six of them; one (G) remains unreconnected.

| # | Location | What it is | Status |
|---|---|---|---|
| A | `~/Projects/AwakenArts/awakenarts-site` | The live, git-tracked website repo. Next.js source, deployed `public/` assets, and ~40 root-level governing `.md`/`.docx` files. | **CANONICAL for the website.** This is what deploys to awakenarts.com. |
| B | `~/Documents/Claude/Projects/AwakenArts -- When Language Shapes a Path` | A separate, actively-worked Claude project folder. Contains its own copies of `AwakenArts_Book`, `AwakenArts_Workbook`, `Digital_Primer`, `Poems`, an `editorial/` folder, an `output/releases/` publishing pipeline, ~15 root-level "Working Document" governance `.docx` files, and its own full 4.0GB mirror of `awakenarts-site`. | **CANONICAL for print/KDP production and pre-web creative development** (see §2). This is where the actual "Where You Stand" file Susan referenced lives — not in location C or D below. |
| C | `~/Projects/AwakenArts/AwakenArts_Book copy`, `Digital_Primer copy`, `Seek_and_Find copy` | Three Finder-duplicated folders (the " copy" suffix is macOS's own naming for a duplicate). Contain earlier snapshots of the same three production lines that now live, more current, inside location B. | **STALE MIRRORS.** Not canonical for anything. Left in place per the "don't delete" rule — see §5. |
| D | `~/Projects/AwakenArts/awakenarts-site 08:26.zip` | A 4.4GB ad hoc Finder backup of the entire website repo, taken 2026-08-12. | **BACKUP ARTIFACT**, not a working location. Nothing should ever be edited inside it. |
| E | `~/Documents/Codex/` | Codex's working area, organized by date (session folders from 2026-07-14 through 2026-08-14, each with its own `work`/`outputs` pair), plus a root-level `AwakenArts-Legal-Standards` folder. Notably includes `2026-08-04/.../Where_You_Stand_Rebuild_01/` — **a fourth location touching Where You Stand material**, separate from location B's locked release. | **CONNECTED, not yet fully audited.** Structure mapped; contents not yet read in detail. |
| F | `~/Desktop/` | Not a single file — a large, unsorted working desktop: `Dragon Pass One.docx` (the file the 2026-08-13 audit called CURRENT/GOVERNING) sits alongside ~90 other items, including another `Kings&Queens` folder, another `DRAGON-PROTOTYPE` folder, roughly a dozen open Word lock files (`~$...docx`, meaning documents were open and unsaved/uncommitted at some point), and — importantly — **its own Where You Stand revision set**: `Where_You_Stand_REVISION_PROOF_2026-08-15_v8.pdf`, `Where_You_Stand_Leading_Journey_KDP_Interior_Master.pdf` (note the different subtitle — "Leading Journey," not "Language Ready" — possibly a fifth title variant, not yet confirmed as the same document), and an editable HTML source file, all dated the same day as location B's own v8 revision round. | **CONNECTED, not yet fully audited.** This is a real, unsorted working location, not a single governing file — treat the 2026-08-13 audit's single-file description of it as outdated. |
| G | `~/Documents/CARDS-ALL copy/` | Legacy authored card art (54 file records per the 2026-08-13 audit). | **NOT RECONNECTED.** Known to exist; not read. |

Locations A and B are where the most clearly current work happens. C and D are dead weight. E and F are now visible but not yet reconciled — both touch Where You Stand independently of location B's locked release, which means **"B is canonical for Where You Stand" (§2) needs re-confirming**, not assuming: F's Aug 15 files may be copies pulled out of B for review, or may be independent edits. G is still a blind spot.

---

## 2. Canonical source by content type

| Content type | Canonical location | Notes |
|---|---|---|
| Website code, deployed images/PDFs, live copy | `A: awakenarts-site` (git) | If it's not in this repo, it's not on the live site. This is the only location changes should ship from. |
| **Where You Stand** (Seek & Find Journal — Kings & Queens material) | `B: .../output/releases/Where_You_Stand_First_Edition_2026-08-08/` | This is a **locked, near-published KDP release** — ISBN 979-8-9975058-0-6 assigned, cover finalized, 28-page interior preflighted. Its own `RELEASE_MANIFEST.md` states the lock rule explicitly: *"No further language or design changes should be made unless KDP Print Previewer or the physical proof reveals an actual production defect."* Treat this as frozen, not as a draft to continue writing. The editable web source inside it is `where_you_stand_language_ready.html`; the specific file Susan asked about (`REVISION_WORKING_COPY/where_you_stand_language_ready_WORKING_COPY.html`) is a revision-tracking copy inside the same release folder, dated alongside proof rounds through 2026-08-15. |
| — pre-release production history for the same material | `Seek_and_Find copy/01_Kings_and_Queens` (location C) and `awakenarts-site/AwakenArts_Workbook/Journal_Product/01_Kings_and_Queens` (location A) | Neither is canonical. Both are earlier-stage production folders for the same journal; the one inside location A was more recently active (through 2026-08-15) but neither reaches the locked state that exists in location B. **This means the Pass 2 audit's finding that "King has no content yet" needs correcting** — the release manifest in location B explicitly protects "Chess, Queen Ann, and King poem artwork" as existing, locked material. The gap isn't that King doesn't exist; it's that the finished King material was never connected to the website's digital Journal experience. That's a smaller, different task than writing King from scratch. |
| The AwakenArts Path / Digital Primer | `B: Digital_Primer/Current/` | The 2026-08-13-era `Digital_Primer copy/Current/` (location C) holds an older snapshot; check location B first. **Open problem:** none of the three "Path"/"Primer" PDFs currently in play are the same file. `awakenarts-site/public/files/path/AwakenArts_Path_Intro.pdf` (5.55MB, Jul 27), `Digital_Primer copy/Current/AwakenArts_The_Path.pdf` (3.16MB, Jul 24), and `awakenarts-site/public/files/primer/AwakenArts_Path_Digital_Primer.pdf` (1.91MB, Jul 27) are three different sizes. This needs Susan's eyes before anyone assumes the deployed PDF matches any production source. |
| Book manuscript ("When Language Shapes a Path" / "AwakenArts Method") | Unresolved — see §5 | Two lineages exist. `AwakenArts_Book copy/01_Manuscript/Working` (location C) and `awakenarts-site/AwakenArts_Workbook/Book_AwakenArts` (location A) share a byte-identical v10 (confirmed by hash), then diverge: location C continues to v39 (renamed "AwakenArts_Method" partway through) with the most recent activity of the two (2026-07-21); location A stalls at v10 (2026-07-18). Neither existing governing document names a canonical manuscript folder. Recommend treating location C's chain as forward-canonical (it's the longer, more recent chain) *pending Susan's confirmation* — do not assume this without asking. |
| Governance / standards documents | `A: awakenarts-site` root `.md` files, git-tracked | This is the only governance set that's version-controlled and the only one `AGENTS.md` and `AWAKENARTS_CURRENT_MATERIALS.md` currently point to. Two other, unreferenced governance sets exist — see §4. |

---

## 3. What this audit confirmed was already known (2026-08-13 file audit)

`AWAKENARTS_CURRENT_MATERIALS.md` and `AWAKENARTS_FILE_AUDIT.md` already did serious work here: they inventoried 4,222+ files across five source pools, found 1,238 exact-duplicate hash groups and 108 same-name/different-content groups, and proposed (but never implemented) a future folder taxonomy. Their central rule still holds and this document doesn't change it: **use the live repository as the operational primary unless a comparison proves a unique file exists only in a secondary location.** What that 2026-08-13 audit didn't have was location B — the Claude Projects folder — in view at all, which is exactly the location the "Where You Stand" file, the most current Digital Primer files, and the most current Book manuscript activity turned out to live in. This document's main contribution is closing that gap.

---

## 4. The governance-document problem specifically

Three separate, non-cross-referencing sets of "governing" documents currently exist:

1. `awakenarts-site/` root — ~40 `.md`/`.docx` files, git-tracked. `AGENTS.md` points here first.
2. `awakenarts-site/AwakenArts_Workbook/Architecture/` — ~20 more `.docx`/`.md` files (e.g. `AwakenArts_Publishing_Architecture.docx`, `AwakenArts_Workbook_Production_Standard.docx`, a second, unmentioned copy of a Figure Edition standard). Not referenced by `AGENTS.md` or `AWAKENARTS_CURRENT_MATERIALS.md` at all — a real blind spot, since several titles here shadow root-level docs closely enough to cause real confusion about which one governs.
3. Location B's own root — ~15 "Working Document" `.docx` files with titles like *"Governing Framework & Studio Direction"* and *"Phase 5 Document-Level Stabilization"* — a third, independent planning lineage.

**Recommendation:** don't try to merge these into one file. Instead, `AGENTS.md` (location A) should be the single entry point that names all three sets and states which one governs when they conflict — the way it already does for the New Paradigm documents. That's a small, low-risk edit; I haven't made it, since it touches an existing file and this pass was read-only by design. Flagging it as the natural next step if you want it done.

---

## 5. Known open items (need Susan's decision, not an AI guess)

- **Two folders marked `PENDING_DELETE`** in location B: `_DELETE_ME_duplicate_2026-07-29_Seek_and_Find_copy` and `_DELETE_ME_superseded_2026-07-29_Seek_and_Find` (~204MB combined), flagged by a past session on 2026-07-29. Per Susan's explicit direction (2026-08-19): **do not delete these yet.** They're probably safe to remove, but that's confirmed only once the map is complete (locations E, F, G fully audited, not just connected) and nothing in them is referenced by a current working chain. Status: `PENDING_DELETE` — visible and named, not touched.
- **~8GB+ of redundant full-repo copies** exist outside git: the 4.4GB zip (location D) and a 4.0GB mirror inside location B. Worth confirming neither holds anything unique before reclaiming that space.
- **Book manuscript canonical lineage** — confirm location C's v10→v39 chain is the one to continue, per §2.
- **Three non-matching Path/Primer PDFs** — confirm which one the website should actually be serving, per §2.
- **Where You Stand → website connection** — the locked KDP release in location B (§2) is real, finished material that could resolve a large part of the Pass 2 "Kingdom/Queen Ann/King" content gap identified in the Rework Pass 2 Audit. That audit assumed King needed to be written from scratch; it doesn't — it needs to be adapted from a locked print release into a web/Journal experience, which is a different (and smaller) task. Worth revisiting that audit's sequencing in light of this.

## 6. What this audit did not cover

Locations E (Codex's working area) and F (the Desktop) are now connected but only mapped at the folder level — their contents haven't been read in the depth locations A and B received in §2–§4. In particular: location E's `Where_You_Stand_Rebuild_01` and location F's own Where You Stand revision set (§1) haven't been compared against location B's locked release to confirm they're copies rather than divergent edits. Location G (`CARDS-ALL copy`) is still not connected at all. Treat this document's canonical-source claims in §2 as solid for the website (A) and provisional for Where You Stand and the Digital Primer/Path until E and F are fully read.

---

*No files were moved, renamed, deleted, or duplicated in the course of this audit.*
