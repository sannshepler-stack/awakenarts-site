# Retired pages (archived 2026-10-09)

Approved by Susan in the site-wide page assessment. Archived, not deleted.
Folders under `_archive` are not routed by Next.js.

| Page | Why retired | Where visitors go now |
|---|---|---|
| /method | Its content was preserved elsewhere: A Practice of Attention on The AwakenArts Path; Image · Poem · Reflection · Conversation on About the Poetry Shapes; Living Symbols is covered by the Path's learning section. | /awakenarts-path (redirect) |
| /workshops | Already redirected; code unused. | /presentations (redirect) |
| /guided-encounters, /guided-encounters/[slug] | Already redirected; code unused. | /presentations, /presentations/grismere, /collection/[slug] (redirects) |
| /collection/[slug]/purchase | Already redirected; code unused. | /collection/[slug] (redirect) |

To restore one: move its folder back under `src/app/` (purchase goes back
under `collection/[slug]/`) and remove its redirect in next.config.js.
