# AwakenArts Rebuild — Branch Change Log

Branch: `rebuild/home-and-templates` (staging workspace; preview on Vercel).
Live site stays on `main` at `9d3746a` until Susan approves the structure,
navigation and core pages. Production path: preview branch → review →
cleanup pass → final commit set → merge to `main` → live build.

Working rules (Susan, 2026-10-05): one focused revision per commit; each
entry below = one commit; review in Vercel before the next; no unrelated
local project files in the branch.

| # | Date | Revision | Status |
|---|---|---|---|
| 1 | 10-05 | Remove public Kit diagnostic; no false signup success | On preview |
| 2 | 10-05 | Symbol Card system, Portal template, /symbols, /s QR addresses; Christian Symbols → /christian-symbols | On preview |
| 3 | 10-05 | Guided Encounters index + template, inquiry form, redirects | On preview |
| 4 | 10-05 | Books & Journals index + template, Stay Connected | On preview |
| 5 | 10-05 | Homepage rebuilt (symbol-first order, approved hero line) | On preview |
| 6 | 10-05 | Guided Encounters: Edition / Encounter relationship explicit | On preview |
| 7 | 10-05 | Books: real covers | On preview |
| 8 | 10-05 | Books: one shared cover height; subtitles match covers | On preview |
| 9 | 10-05 | Hero: gold eyebrow + serif heading, logo lockup removed | On preview |
| 10 | 10-05 | Guided Encounters shown by Figure artwork | On preview |
| 11 | 10-05 | Presentations & Workshops stream; Guided Encounters Edition-only; Explore hub; six-item nav | On preview |
| 12 | 10-05 | Books: accurate status labels; two free resources; Explore Books & Journals | On preview |
| 13 | 10-05 | Hero refinement: smaller headline, two matching underlined text CTAs | Awaiting push |

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
