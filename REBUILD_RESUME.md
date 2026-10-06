# AwakenArts Rebuild — Resume Here

**Checkpoint:** 2026-10-05
**Branch:** `rebuild/home-and-templates` (never merge to `main` without Susan's approval)
**Live site:** `main` at `9d3746a` — unchanged
**Last commit on GitHub:** `3b33b9c` (end of 2026-10-05 session)
**Latest commit (this checkpoint):** see `git log -1` — it sits on top of `1968798` (Collection image) and `d896752` (hero supporting line)
**Preview:** Vercel builds a preview for every push to this branch (see the branch's latest deployment).
**Change log:** `REBUILD_CHANGELOG.md`

## How changes reach GitHub

Claude is connected to Susan's site folder (~/Projects/AwakenArts/awakenarts-site)
and applies every change there directly, so localhost (npm run dev) shows it at
once — no patches. Susan pushes when she approves what she sees:

```
cd ~/Projects/AwakenArts/awakenarts-site
git push origin rebuild/home-and-templates
```

Claude then confirms GitHub matches and returns the Vercel preview link.

## Complete

- Six-item navigation: EXPLORE · SYMBOLS · GUIDED ENCOUNTERS · PRESENTATIONS · BOOKS · ABOUT
- Homepage: hero (eyebrow, approved line, supporting line, two matching underlined CTAs, Queen Ann) · Begin with a Symbol (hidden until cards exist) · You Already Speak in Images · Scripture Speaks in Symbols · Guided Encounters (Collection image, Grismere) · Books & Resources · Stay Connected · About
- Guided Encounters (`/guided-encounters`, `/guided-encounters/[edition]`) — Edition-based only; Edition vs Encounter distinction
- Presentations & Workshops (`/presentations`, `/presentations/[slug]`) — separate stream, own inquiry form
- Books (`/books`, `/books/[title]`) — real covers, accurate status, free resources
- Explore hub (`/explore`) with the Collection image
- Christian Symbols at `/christian-symbols`; old links redirect
- Redirects: `/workshops` → `/presentations`; `/editions/*` → `/guided-encounters/*`; `/collection` → `/guided-encounters`
- Kit diagnostic removed; signup no longer shows false success

## Remaining

1. **Symbol Card / Portal content** (Susan): per card — name, front image, 3–4 broad meanings, 2–3 Christian meanings, Scripture reference + verse, optional reflective question and next step; mark 3 as `featured` for the homepage.
2. **Presentations & Workshops content** (Susan): titles, summaries, what each covers, format, length, related book/resource.
3. Book availability + confirmed buy links (D5); analytics choice (D7); name for the Encounters sequence (D2).
4. Pre-merge cleanup pass (checklist in `REBUILD_CHANGELOG.md`).
5. Susan approves preview → merge to `main` → Vercel deploys live.

## Page-by-page review (started 10-05)

- Homepage — reviewed and pushed (changelog #17–#59)
- Architecture settled: Editions (product line, /editions) · Presentations (registration, /presentations/[slug]) · Guided Encounter = a presentation format; nav EXPLORE · EDITIONS · PRESENTATIONS · SYMBOLS · BOOKS · ABOUT
- Christian Symbols page opening revised (#50–#53)
- Next: **Explore**, then Editions, Presentations, Symbols, Books, About

## Exact next task

Page-by-page review of **Explore** (KEEP / CHANGE / LATER), applied directly to
Susan's site folder for localhost review. Open items are listed in
`REBUILD_CHANGELOG.md` (Still pending; Before the Grismere registration goes live).
