# AwakenArts — Encounter System

> *Simple on the surface. Deep beneath it.*

## What This Is

The Encounter System is the technical + philosophical architecture for awakenarts.com. It combines:

- A **philosophical system** (symbolic encounter, not explanation)
- A **visual system** (cards as primary interface)
- A **technical system** (Next.js components, scoped phases)
- A **workflow system** (Claude-driven sessions, one phase at a time)

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

## Hard Constraints

These cannot be overridden by any session, phase, or preference.

### Card
- `aspect-ratio: 3 / 5` — locked on the container, not overrideable
- `object-fit: cover` — applied inline on both face images
- `object-position: center top` — preserves subject at all breakpoints
- Front/back layering via CSS z-index — no DOM reflow on state change
- No layout shift — container size set by aspect-ratio only

### Motion
- No fast motion — everything calm
- Hover scale max `1.03`
- Fade or soft flip only — `150–300 ms`
- No shuffle animation
- No visual randomness effects

### Hero Image
- `next/image` with `fill`
- `priority` — no lazy loading
- `style={{ objectFit: 'cover', objectPosition: 'center top' }}`
- No overlay gradients — readability from typography only

### Copy & Scope
- Minimal copy — one clear action per section
- No new sections added beyond spec
- No additional CTAs beyond defined ones
- No urgency buttons (countdown, "limited time", etc.)
- Invitation tone throughout

---

## Component Architecture

### `Card.tsx` — Phase 2
Structural primitive. 3:5 locked. Front/back layering.

```tsx
<Card
  frontSrc="/images/cards/fronts/guidance.jpg"
  frontAlt="Guidance"
  revealed={false}   // false = back showing (default)
/>
```

### `CardGrid.tsx` — Phase 2
Responsive layout container. 3 col → 2 col → 1 col.

```tsx
<CardGrid label="Preview cards">
  <Card ... />
  <Card ... />
</CardGrid>
```

### `FlipCard.tsx` — Phase 1 (existing)
Used on `/deck` page for the full 52-card gallery. Flip interaction, 620ms ease.

### `DrawExperience.tsx` — Phase 3 (pending)
Single-card reveal. Selects from predefined set. Calm fade (150–300 ms). No shuffle.

### `MonetizationPanel.tsx` — Phase 5 (pending)
Continuation of the experience. No borders, no urgency. Same spacing as card grid.

---

## Build Phases

### ✅ Phase 1 — Foundation
- Nav responsive collapse + mobile full-viewport overlay
- Hero image → `next/image` fill + priority
- Mobile dark-body background fixes (Begin Here, gold-rule divider)
- Offerings nav link → `/#offerings`

### 🔄 Phase 2 — Card System *(current)*
- `Card.tsx` — 3:5 locked container, front/back CSS layering
- `CardGrid.tsx` — 3/2/1 col responsive grid
- Card system CSS in `globals.css`

### ⬜ Phase 3 — Interaction
- Hover elevation + scale on `Card` (max 1.03)
- Soft opacity fade on reveal (150–300 ms)
- `DrawExperience.tsx` — one card, calm reveal, predefined set

### ⬜ Phase 4 — Landing Page Assembly
- Hero Encounter section
- Orientation (2–3 lines max)
- Cards Preview (3–6 cards, hover)
- Primary CTA — "Draw a Card"
- Light framing note
- Monetization entry

### ⬜ Phase 5 — Monetization Layer
- `MonetizationPanel.tsx`
- Digital Deck product link
- Companion materials link
- Invitation tone — no urgency

### ⬜ Phase 6 — Polish & Launch
- Full responsiveness audit
- Image loading priorities
- Visual consistency across all pages
- Build check → commit → push → verify on awakenarts.com

---

## Monetization Model

| Offering | Format | Phase |
|----------|--------|-------|
| Digital Deck (primary) | Gumroad or Stripe | Phase 5 |
| Companion Materials | PDF / gated page | Phase 5 |
| Physical Deck (future) | Print-on-demand | Phase 6+ |

Approach: **invitation-based**. Value delivered through depth. No aggressive conversion UI.

---

## User Flow

```
Land → Pause → Curiosity → Interact → Deepen → Convert (invitation)
```

1. **Land** — Hero image. Tagline. One action.
2. **Pause** — User feels recognised, not sold to.
3. **Curiosity** — Card preview grid (3–6 cards). Hover.
4. **Interact** — Draw a card. Single reveal.
5. **Deepen** — Optional companion content or reflection.
6. **Convert** — Invitation to Digital Deck or Companion. No urgency.

---

## Session Workflow

1. Open `docs/CLAUDE_SESSION_STARTER.txt` — drop into Claude chat
2. Tell Claude which phase you are in
3. Share a screenshot if visual review is needed
4. Claude shows **full file changes** before any commit
5. Approve → Claude commits → run `git push origin main`
6. Vercel deploys in ~60 seconds → verify on mobile + desktop

**Push command:**
```bash
cd /Users/sashe/Projects/AwakenArts/awakenarts-site && git push origin main
```

---

## Today's Checklist (Phase 2 → 3)

- [ ] Verify `Card.tsx` renders correctly at all breakpoints
- [ ] Verify `CardGrid.tsx` columns: 3 / 2 / 1
- [ ] Verify hero image loads with priority (check Network tab — no lazy)
- [ ] Push Phase 2 to main
- [ ] Start Phase 3: add hover states to `Card`, build `DrawExperience`

---

*awakenarts.com · Susan Ann Shepler · Confidential*
