# AwakenArts — AI Assistant Orientation

> **Read this file first. Then read the two documents named below. Do not consult any other brief, framework, or older document unless explicitly told to.**

## The orientation set

Three documents govern AwakenArts. Together they answer: what the work IS, what we are DOING now, and how the repository is BUILT. An AI assistant working on this project should hold all three before suggesting changes.

1. **`AwakenArts-THE-FORMS.docx`** *(root)* — also available as `docs/THE_FORMS.md`.
   What the work IS. The ontology. The forms are the product; the website is a threshold; figures arise from forms; spiritual orientation is restrained and Christ-centered without being performative; AI imagery is atmosphere, not core. This is the floor. Never violate it.

2. **`AwakenArts-Forward-Brief-Production-Phase.docx`** *(root)* — also available as `docs/FORWARD_BRIEF_PRODUCTION_PHASE.md`.
   What we are DOING now (production phase, May 2026 onward). New vocabulary (Symbolic Form, Collection, Threshold, Encounter, Emergence, Silhouette, Atmosphere). Public/protected layer architecture. Production pipeline. Page-by-page website reorientation.

3. **`docs/ENCOUNTER_SYSTEM.md`** — what the repository actually contains right now (components, palette, routes, hard constraints). Read this before touching code.

## Operational rules for AI assistants

- **Form leads, figure follows.** Any change to imagery, components, or copy must reflect this ordering.
- **Restraint is the posture.** When in doubt: fewer forms shown, more atmosphere held back, more concealment at the public surface.
- **AI generates atmosphere, never form.** The symbolic forms are authored. Do not propose AI generation of forms themselves.
- **No game-like, oracle-deck, fantasy-franchise, or spectacle-animation framing.** These are explicitly retired. The "flip card" interaction is being phased out in favor of silhouette + atmosphere emergence.
- **The public site is the Threshold; the Collection is protected.** Do not propose full archive views, browsable catalogs, or readable-completeness layouts for the public surface.
- **Repository-anchored work only.** A change is real only when it is implemented in the repo, locally verifiable, and committed. Conceptual reconciliation and documentation-only progress are out of scope for implementation passes.
- **One concrete target per pass.** Inspect → identify one target → make the change → verify locally → commit. No simultaneous route/nav/metadata rewrites.

## Vocabulary

Use these terms consistently. They replace earlier looser language ("cards," "decks," "items," "Guidance Deck," "the Set").

- **Symbolic Form** — the primary authored object.
- **The Collection** — the protected body of completed forms.
- **The Threshold** — the public-facing website.
- **Encounter** — a visitor's contemplative meeting with a single form.
- **Emergence** — the slow reveal mechanic: hover, atmosphere, partial recognition.
- **Silhouette** — the contour from which a form's visual identity arises.
- **Atmosphere** — the AI-generated environmental tone clipped into the silhouette.

## What is NOT canonical orientation

Any document not named above (older project briefs, prior governing frameworks, reconciliation notes, session starters) is historical reference at best. Do not adopt their framing, vocabulary, or directives without explicit instruction from Susan.

## Operational details

- **Local path:** `/Users/sashe/Projects/AwakenArts/awakenarts-site`
- **Stack:** Next.js 14, TypeScript, deployed via Vercel
- **Deploy flow:** local build → commit → `git push origin main` → Vercel auto-deploys in ~60s → verify on mobile + desktop
- **Operational docs:** `docs/SEO_HANDOFF.md` for SEO/indexing state and open external steps.

---

*Susan Ann Shepler · AwakenArts · Confidential*
