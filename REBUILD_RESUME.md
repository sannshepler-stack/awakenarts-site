# AwakenArts Rebuild — Resume Here

**Checkpoint:** 2026-10-05
**Branch:** `rebuild/home-and-templates` (never merge to `main` without Susan's approval)
**Live site:** `main` at `9d3746a` — unchanged
**Last commit on GitHub:** `86f6890` (Hero refinement)
**Latest commit (this checkpoint):** see `git log -1` — it sits on top of `1968798` (Collection image) and `d896752` (hero supporting line)
**Preview:** Vercel builds a preview for every push to this branch (see the branch's latest deployment).
**Change log:** `REBUILD_CHANGELOG.md`

## How changes reach GitHub

Pushes from Claude's cloud session are refused by GitHub. Claude commits on the
branch and places a patch file in `~/Desktop/AARTS PROJECTS/_site_patches/`;
Susan applies and pushes from a Terminal tab that is NOT running `npm run dev`:

```
cd ~/Projects/AwakenArts/awakenarts-site
git am ~/Desktop/"AARTS PROJECTS"/_site_patches/<file>.patch
git push origin rebuild/home-and-templates
```

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

- Homepage — fixes committed (changelog #17); awaiting Susan's review on the preview
- Next: Explore, Symbols, Guided Encounters, Presentations, Books, About

## Exact next task

Apply and push `homepage-review.patch`, confirm the
new Vercel preview, then enter the first Symbol Cards in `src/data/symbolCards.ts`
as soon as Susan supplies their copy and art.
