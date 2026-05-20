# AwakenArts — Encounter System

> *Simple on the surface. Deep beneath it.*

## What This Is

The Encounter System is the technical + philosophical architecture for awakenarts.com. It combines:

- A **philosophical system** (symbolic encounter, not explanation)
- A **visual system** (form, image, and the encounter chain as primary interface)
- A **technical system** (Next.js App Router routes and scoped components)
- A **workflow system** (small, bounded implementation passes — one concrete target at a time)

This document describes the system as it actually exists in the repository, not a target architecture.

---

## Design Palette

| Token | Hex | Use |
|-------|-----|-----|
| `--deep` | `#1C2B3A` | Navy — backgrounds, headings |
| `--gold` | `#8B6914` | Dark gold — eyebrows, links |
| `--gold-lt` | `#C9A84C` | Light gold — accents, glyphs |
| `--cream` | `#FAF7F2` | Light background — sections |
| `--warm` | `#F0EAE0` | Warm off-white — cards, tiles |
| `--mid` | `#5A5550` | Mid grey — body text |

**Fonts:** Cormorant Garamond (serif) · Inter (sans-serif)

---

## Governing Principles

These guide every implementation pass.

### Form is primary
The project is grounded in symbolic FORM. Concrete poems and their shapes are the originating works. Figures (Mermaid, Dragon, Vase, Queen, etc.) are secondary manifestations that arise from forms. Imagery decisions, encounter construction, card systems, and presentation hierarchy should reflect this ordering — form leads, figure follows.

### Repository-anchored execution
Work attaches to a specific route, component, file path, or asset. If a change is not implemented in the repo, visible in VS Code, locally verifiable, and committed, it is not yet part of the build. Conceptual reconciliation, ontology drift, and documentation-only progress are explicitly out of scope.

### Calm interaction
No fast motion. Hover scale capped at `1.03`. Soft fade or slow flip only (150–620 ms). No shuffle animation. No urgency UI.

---

## Hard Constraints

These cannot be overridden by any pass.

### Card (`Card.tsx` / `FlipCard.tsx`)
- `aspect-ratio: 3 / 5` — locked on the container, not overrideable
- `object-fit: cover` — applied on both face images
- `object-position: center top` — preserves subject at all breakpoints
- Front/back layering via z-index (`Card.tsx`) or 3D rotation (`FlipCard.tsx`) — no DOM reflow on state change
- No layout shift — container size set by aspect-ratio only

### Hero Image
- Rendered via `<picture>` with breakpoint sources (mobile / tablet / desktop variants in `/public/images/brand/`)
- No overlay gradients — readability comes from typography, not from masking the image

### Copy & Scope
- Minimal copy — one clear action per section
- No additional CTAs beyond defined ones
- No urgency language (countdown, "limited time", etc.)
- Invitation tone throughout

---

## Site Shape (as implemented)

### Homepage (`/`) — the threshold
The homepage is an invitation, not an overview. It is a single threshold section: brand logo, two-line tagline ("Symbols speak. / The soul listens"), a subline ("Symbols do not explain. They reveal"), one short orienting paragraph, and a primary CTA — **Enter AwakenArts** — that routes to `/encounters`. A quiet secondary nav (Explore the Path · View the Gallery · About Susan) sits below the CTA. A single scripture pull-quote follows the hero. The footer carries Explore / The Work / About columns.

Earlier homepage concepts — orientation tiles, scholar quotes, marquee, library previews, "Draw a Card" landing, signup form, experience promo — have all been relocated or removed. The homepage no longer presents a card-draw interface or any "preview cards" grid.

Sources: `src/app/page.tsx`, `src/app/layout.tsx`, hero styles in `src/app/globals.css`.

### Encounter chain (`/encounters/*`)
`/encounters` is a transitional video threshold (not indexed), not a destination. It plays a short intro video; the word "enter" fades in around 6.5s, and a click then forwards to the first encounter.

The chain is centralised in `src/app/encounters/sequence.ts`:

```
mermaid → dragon → vase → queen → continuum
```

Whatever encounter is currently last in `ENCOUNTER_SEQUENCE` automatically forwards to `/encounters/continuum` (the "rest, more is coming" page) so no encounter dead-ends in a 404. To reorder: rearrange the slugs. To add an encounter: create `/encounters/<slug>` and append the slug to the sequence.

Sources: `src/app/encounters/page.tsx`, `src/app/encounters/sequence.ts`, individual `src/app/encounters/<slug>/page.tsx` files.

### Other routes
- `/library` — foundations + figures (essay-form content; `.docx` / `.pdf` sources colocated)
- `/path` — Ann, Grismere, Ballerina figure pages
- `/gallery` — image gallery
- `/about`, `/studio`, `/begin`, `/experience` — orientation pages
- `/deck` — full card gallery using `FlipCard.tsx` (separate from any homepage card system)
- Legal: `/privacy`, `/terms`, `/disclaimer`, `/copyright`

---

## Component Architecture

### `FlipCard.tsx` — `/deck` page
Calm 3D flip interaction (620 ms cubic-bezier). 3:5 ratio. One state per card — no global coordination, no cascading animation. Card back image at `/public/images/cards/backs/card-back.jpg`. Used only on `/deck`.

### `Card.tsx` — structural primitive
3:5 locked container. Front/back layering via z-index rather than 3D rotation. Supports `revealed`, `interactive` (hover scale 1.03), and `variant="fade"` (opacity cross-fade 150–300 ms). Currently used by `EncounterCard.tsx` and `DrawExperience.tsx`.

### `CardGrid.tsx` — responsive layout
3 cols (≥769 px) → 2 cols (481–768) → 1 col (≤480). Thin semantic wrapper; layout in `globals.css` under `.card-grid`.

### `EncounterCard.tsx`
Card variant used inside the encounter pages.

### `DrawExperience.tsx`
Single-card reveal component. Holds a small set of cards (`MOCK_CARDS`) and reveals one at a time with a calm fade. Not currently wired into the homepage.

### `Nav.tsx`, `FooterSocial.tsx`, `SignupForm.tsx`
Site chrome and shared interaction primitives.

### Card asset inventory
Front artwork: `/public/images/cards/fronts/` (54 images). Card backs: `/public/images/cards/backs/`. To swap a card image, replace the file in place — no component change required.

---

## Working Method

All active work attaches directly to:

- a specific route, **or**
- a specific component, **or**
- a specific file path, **or**
- a specific image asset, **or**
- a specific visual replacement, **or**
- a specific implementation task

Preferred loop:

1. Inspect repo state
2. Identify one concrete implementation target
3. Make the change
4. Verify locally (`npm run build`, local dev server)
5. Commit in a single bounded commit
6. Move forward

Out of scope for an implementation pass: recursive planning cycles, governance interpretation, abstract symbolic expansion, document-only progress, architectural restatement without implementation.

---

## Current Priorities

These are the active targets, in no fixed order. Each is repository-anchored and bounded.

- Homepage refinement (within the threshold model — no expansion)
- Replacement of existing flip-card imagery
- Stronger atmospheric, form-primary visuals
- Encounter stabilisation (timing, transitions, mobile playback)
- Typography cleanup
- Mobile refinement
- Route coherence (cross-link sanity, canonical URLs)
- Visual consistency across pages
- SEO cleanup (metadata, sitemap, robots)
- Deployment readiness (build green, Vercel verified on mobile + desktop)

The objective is a functioning, coherent, public-facing AwakenArts experience — not conceptual completion.

---

## Deployment

Local build verification:

```bash
cd /Users/sashe/Projects/AwakenArts/awakenarts-site
npm run build
```

Push (Vercel auto-deploys in ~60 seconds; verify on mobile + desktop after):

```bash
cd /Users/sashe/Projects/AwakenArts/awakenarts-site && git push origin main
```

---

*awakenarts.com · Susan Ann Shepler · Confidential*
