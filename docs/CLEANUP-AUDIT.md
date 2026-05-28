# AwakenArts — Cleanup Audit Report
**Date:** May 2026  
**Scope:** Post-stabilization structural review  
**Directive:** Audit before any removal. Continuity over minimalism.

---

## 1. Current Public Navigation Identity

Active nav links (Nav.tsx): **Encounters · Studio · Library · Journal · About**

Path is already **absent from navigation**. The redirect infrastructure is in place. No nav changes are needed.

---

## 2. Library Structure

**Verdict: No duplicates. Canonical and clean.**

The library has one coherent route structure:

| Route | Status |
|-------|--------|
| `/library` | Canonical index |
| `/library/figures/grismere` | Canonical |
| `/library/figures/queen-ann-between-kingdoms` | Canonical |
| `/library/figures/ballerina` | Canonical |
| `/library/figures/the-dragon` | Canonical |
| `/library/figures/merri-when-time-stops` | Canonical |
| `/library/foundations/process-in-and-of-images` | Canonical |
| `/library/foundations/the-mirror-and-the-map` | Canonical |
| `/library/foundations/allow-content-to-direct-the-shape` | Canonical |
| `/library/voices` | Canonical |

**Source documents stored in app directory** (non-standard but harmless — not served as routes):

```
src/app/library/figures/*.docx, *.pdf
src/app/library/foundations/*.docx, *.pdf
src/app/library/foundations/archetypes_living_patterns_awakenarts_article.pdf
src/app/library/foundations/awakenarts_archetypal_path_of_individuation_map.pdf
```

These are reference/source documents. They do not generate routes. They are safe where they are, but could eventually be moved to `/docs/source/` outside `/src/app/` to clarify they are not web content.

**One non-standard image file:**

```
src/app/library/figures/grismere/grismere.png
```

This image is stored alongside the page rather than in `/public/images/`. It is currently served correctly by Next.js but is architecturally inconsistent with all other image assets. **Low priority — leave in place until library figure pages are restructured.**

---

## 3. Path Dependencies

**Status: Already fully de-emphasized. Redirects in place. No nav/sitemap references.**

### What exists:

| File | Status |
|------|--------|
| `src/app/path/page.tsx` | Full page content. Route redirects → `/studio` via `next.config.js` |
| `src/app/path/grismere/page.tsx` | Full page content. Route redirects → `/studio` |
| `src/app/path/ballerina/page.tsx` | Full page content. Route redirects → `/studio` |
| `src/app/path/ann/page.tsx` | Full page content. Route redirects → `/studio` |

### Where `/path` is referenced:

- **`next.config.js`** — four permanent (308) redirects. Required to maintain.
- **`sitemap.ts`** — explicitly excluded with comment. ✓
- **`Nav.tsx`** — not present. ✓
- **All page footers** — not present. ✓
- **Library figure pages** — link to `/library`, not to `/path`. ✓

### Conclusion:

The `/path/page.tsx` files are compiled but unreachable (next.config.js intercepts all traffic). They remain as preserved source material for the symbolic work. **Do not delete the page.tsx files until confident the content is fully represented elsewhere (library figure essays cover the symbolic readings, but the path page layout/prose may not be fully duplicated).**

The redirects in `next.config.js` must be preserved permanently.

---

## 4. Prototype and Legacy Routes

### SAFE TO REMOVE (when ready — requires deliberate decision)

These routes are noindex, not in nav, not in sitemap, and have canonical successors:

| Route | File(s) | Successor |
|-------|---------|-----------|
| `/journal-prototype` | `src/app/journal-prototype/` (3 files) | `/journal` |
| `/journal-prototype-v2` | `src/app/journal-prototype-v2/` (3 files) | `/journal` |

Both prototypes served their purpose as interface comparisons for the journal design decision. The canonical `/journal` is live. These can be removed after Susan confirms the canonical journal design is settled and these are no longer needed for reference.

**Before removing:** Check that no external links or bookmarks exist to these URLs. Add redirects in `next.config.js` if any inbound traffic is expected.

---

### POSSIBLY ACTIVE — Review Before Deciding

| Route | File | Notes |
|-------|------|-------|
| `/forms-prototype` | `src/app/forms-prototype/` (3 files) | Redirects to `/studio` via `next.config.js`. Page.tsx still compiles but is unreachable. The redirect itself in `next.config.js` must stay. The page.tsx can be removed if the redirect covers all cases. |
| `/experience` | `src/app/experience/page.tsx` | Has full metadata, is in sitemap. Uses inline styles (not the design system). May be a landing page in development. **Do not remove.** |
| `/deck` | `src/app/deck/page.tsx` | Full card presentation page. In sitemap. Uses `FlipCard` component. Linked from nowhere in the main nav but is a real, indexed page. |

---

### REDIRECT STUBS — Required

| Route | File | Mechanism |
|-------|------|-----------|
| `/journey` | `src/app/journey/page.tsx` | Covered by `next.config.js` AND page.tsx fallback. Page.tsx is redundant but harmless. |
| `/begin` | `src/app/begin/page.tsx` | **Only covered by page.tsx fallback — NOT in next.config.js.** Do not remove. Consider adding to next.config.js for consistency. |

---

## 5. Unused Components

These components exist in `/src/components/` but are **never imported** in any page or other component:

| Component | File | Notes |
|-----------|------|-------|
| `FooterLegalLinks` | `FooterLegalLinks.tsx` | Renders legal nav links. Footers currently inline their links instead. Safe to archive. |
| `SignupForm` | `SignupForm.tsx` | Email signup form component. Not used anywhere. May be intended for a future page. Safe to archive. |
| `DrawExperience` | `DrawExperience.tsx` | Card-draw experience component. Not imported in any page. May be intended for `/experience` or `/deck`. Do not delete — likely pending integration. |
| `CardGrid` | `CardGrid.tsx` | Grid layout for card arrays. Not imported anywhere. Likely a foundation component pending use. |

**Note:** `Card.tsx` is imported by `DrawExperience.tsx` (which is itself unused). It does not appear in any live page.

---

## 6. CSS Observations

- `globals.css` contains several class definitions for sections that no longer exist on the homepage (e.g. `.wtc-section`, `.enc-section`, `.tiles-section`, `.begin-section` with form layout). These may be used on other pages or retained for the library/path architecture. **Do not remove CSS without confirming no page uses the class.**
- `FlipCard.module.css` is used only by `/deck`. If `/deck` is ever retired, this module goes with it.
- `forms-prototype/page.module.css`, `journal-prototype/page.module.css`, `journal-prototype-v2/page.module.css` go with their prototype routes.

---

## Summary

### SAFE TO REMOVE (after deliberate confirmation)
```
src/app/journal-prototype/          ← 3 files, noindex, canonical successor exists
src/app/journal-prototype-v2/       ← 3 files, noindex, canonical successor exists
src/components/FooterLegalLinks.tsx ← never imported
src/components/SignupForm.tsx       ← never imported
```
Add redirects to `next.config.js` for the journal prototypes before removing.

### DO NOT REMOVE YET — POSSIBLY ACTIVE
```
src/app/forms-prototype/page.tsx    ← unreachable but redirect in next.config.js must stay
src/app/path/page.tsx               ← source content, redirect covers the route
src/app/path/ann/page.tsx           ← source content, redirect covers the route
src/app/path/grismere/page.tsx      ← source content, redirect covers the route
src/app/path/ballerina/page.tsx     ← source content, redirect covers the route
src/app/experience/page.tsx         ← indexed, possibly in development
src/app/deck/page.tsx               ← indexed, full content page
src/components/DrawExperience.tsx   ← likely pending integration with /experience or /deck
src/components/Card.tsx             ← used by DrawExperience
src/components/CardGrid.tsx         ← foundation component, not yet integrated
```

### REQUIRED — DO NOT TOUCH
```
next.config.js                      ← all four /path redirects + /journey + /forms-prototype
src/app/begin/page.tsx              ← only redirect mechanism for /begin (not in next.config.js)
src/app/journey/page.tsx            ← secondary fallback (next.config.js is primary)
src/app/library/                    ← entire library structure, canonical
src/app/encounters/                 ← entire encounters structure
src/app/studio/                     ← entire studio structure
src/app/journal/                    ← canonical journal
src/components/Nav.tsx
src/components/FooterSocial.tsx
src/components/encounter/
src/components/forms/
src/components/journal/
src/app/globals.css
```

---

## Action Items Before Next Cleanup Pass

1. **Confirm `/begin` redirect** — add `{ source: '/begin', destination: '/', permanent: true }` to `next.config.js` so it matches the pattern of all other retired routes.
2. **Confirm journal prototypes are no longer needed** before removing.
3. **Confirm `DrawExperience` / `CardGrid` / `Card` integration plan** — these look like they're intended for a future `/experience` or `/deck` enhancement.
4. **Consider moving source PDFs/DOCXs** from `src/app/library/` to `docs/source/` to keep the app directory clean.
5. **Move `grismere.png`** from `src/app/library/figures/grismere/` to `/public/images/figures/grismere/` when the figure page is next revised.
