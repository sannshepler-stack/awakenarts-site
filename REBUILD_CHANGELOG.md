# AwakenArts Rebuild — Branch Change Log

Branch: `rebuild/home-and-templates` (staging workspace; preview on Vercel).
Live site stays on `main` at `9d3746a` until Susan approves the structure,
navigation and core pages. Production path: preview branch → review →
cleanup pass → final commit set → merge to `main` → live build.

Working rules (Susan, 2026-10-05): one focused revision per commit; each
entry below = one commit; review in Vercel before the next; no unrelated
local project files in the branch. Resume notes: `REBUILD_RESUME.md`.

## Completed revisions — 2026-10-05

| # | Revision | Status |
|---|---|---|
| 1 | Remove public Kit diagnostic; no false signup success in production | On preview |
| 2 | Symbol Card system scaffold: two-sided card, Portal template, `/symbols` card index, `/s/[symbol]` QR addresses; Christian Symbols moved to `/christian-symbols` | On preview (content pending) |
| 3 | Guided Encounters index + reusable template, inquiry form, redirects from Editions | On preview |
| 4 | Books & Journals index + reusable Book template; Stay Connected page | On preview |
| 5 | Homepage rebuilt in symbol-first order | On preview |
| 6 | **Edition vs Guided Encounter distinction** — "A Guided Encounter with the Grismere Edition"; homepage section copy per Susan | On preview |
| 7 | **Real book covers** from AARTS PROJECTS (web-sized) | On preview |
| 8 | Covers share one height at true proportions; 6×9 print front for *Shape, Symbol & Story*; subtitles match the covers | On preview |
| 9 | Hero: gold AWAKENARTS eyebrow + site serif heading; logo lockup removed | On preview |
| 10 | Guided Encounters shown by Figure artwork | On preview |
| 11 | **Guided Encounters separated from Presentations & Workshops**; **Presentations & Workshops index (`/presentations`) and reusable presentation template (`/presentations/[slug]`)**; Explore hub (`/explore`); **six-item navigation: EXPLORE · SYMBOLS · GUIDED ENCOUNTERS · PRESENTATIONS · BOOKS · ABOUT** | On preview |
| 12 | **Books & Resources revisions**: status shown only when accurate (no blanket "Coming Soon"); two free resources as distinct items; EXPLORE BOOKS & JOURNALS | On preview |
| 13 | Hero refinement: headline at section-heading scale; **CTA treatment** — EXPLORE A SYMBOL (gold) and DISCOVER AWAKENARTS (navy) as identical text links with thin gold underline, same baseline | On preview |
| 14 | **Hero, current treatment and approved copy**: eyebrow AWAKENARTS · "Every life holds a pattern, a memory, a direction, a truth, or a story waiting to be revealed." · supporting line "AwakenArts brings image, poetry, and symbolic language into conversation, creating space to notice what may already be taking shape." · Queen Ann reduced; text group centred against the image | Committed — awaiting push |
| 15 | AwakenArts Collection image restored: Explore page and homepage Guided Encounters band (not the hero) | Committed — awaiting push |
| 16 | Checkpoint: this change log + `REBUILD_RESUME.md` | Committed — awaiting push |

## Still pending

- **Symbol Card / Portal content** — the system is built but `src/data/symbolCards.ts` is empty; homepage "Begin with a Symbol" and all Portals stay hidden until Susan's card copy and art arrive (front: broad meanings; back: Christian meanings + Scripture).
- **Presentations & Workshops content** — list of presentations, format and length (`src/data/presentations.ts`).
- Book availability and buy links (D5); analytics (D7).
- Name for the existing Encounters sequence (D2).

## Cleanup pass before merge (checklist)

- [ ] Navigation consistency (nav, wayfinding band, footer)
- [ ] Duplicate or outdated wording
- [ ] Spacing / typography
- [ ] Redirects (no chains, no retired destinations)
- [ ] Hidden placeholders (nothing bracketed or empty shows)
- [ ] Mobile layout, all core routes
- [ ] Footer consistency (incl. legal pages, /experience)
- [ ] Stale workshop language outside Presentations & Workshops
- [ ] Book status labels
- [ ] Unused components / routes (documented, then retired)
