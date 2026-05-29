# AwakenArts — Active Image Map & Asset Preparation Guide
**Date:** May 2026  
**Scope:** Studio page + Homepage — all active image/video positions  
**Viewport measured at:** 1502px desktop  

---

## Active Image Inventory

### HOMEPAGE

#### Hero Section

| Position | File | Path | Container (px) | Aspect Ratio | Role |
|----------|------|------|----------------|--------------|------|
| Hero image (desktop) | `queen-ann-hero-desktop.jpg` | `/public/images/brand/queen-ann-hero-desktop.jpg` | 788 × 541 | ~16:11 | Full hero atmosphere |
| Hero image (tablet) | `queen-ann-hero-tablet.jpg` | `/public/images/brand/queen-ann-hero-tablet.jpg` | responsive | ~16:11 | Tablet breakpoint |
| Hero image (mobile) | `queen-ann-hero-mobile.jpg` | `/public/images/brand/queen-ann-hero-mobile.jpg` | responsive | ~16:11 | Mobile breakpoint |

#### Studio Preview Section (Homepage)

| Position | File | Path | Container (px) | Aspect Ratio | Role |
|----------|------|------|----------------|--------------|------|
| Primary panel (Queen Ann) | `queen-ann-still.png` | `/public/images/forms/queen-ann-still.png` | 469 × 586 | 4:5 | Symbolic still — primary |
| Secondary panel (Grismere) | `mermaid-grismere-still.png` | `/public/images/forms/mermaid-grismere-still.png` | 383 × 575 | 2:3 | Symbolic still — secondary, `scale(0.82)` with dark bg |

---

### STUDIO PAGE (`/studio`)

#### Silhouettes — Entry Panel

| Position | File | Path | Container (px) | Aspect Ratio | Role |
|----------|------|------|----------------|--------------|------|
| Ann opening panel | `queen-ann-still.png` | `/public/images/forms/queen-ann-still.png` | 360 × 450 | 4:5 | Primary threshold still, links to /studio/silhouettes |

#### Silhouettes — Quiet Pair (beneath Ann)

| Position | File | Path | Container (px) | Aspect Ratio | Role |
|----------|------|------|----------------|--------------|------|
| Pair left | `mermaid-grismere-still.png` | `/public/images/forms/mermaid-grismere-still.png` | 220 × 330 | 2:3 | Secondary silhouette — environmental |
| Pair right | `ann.png` | `/public/images/figures/ann/ann.png` | 220 × 330 | 2:3 | Secondary silhouette — figure study |

#### Digital Art Paintings

All items: **267 × 333 px** rendered · aspect-ratio **4:5** · `object-fit: cover`  
Grid: 840px wide, 3 columns, 1.25rem gap

| Slot | File | Path | Notes |
|------|------|------|-------|
| 1 | `angel.PNG` | `/public/images/gallery/angel.PNG` | Fantasy figure, atmospheric |
| 2 | `mermaid-genie-1.PNG` | `/public/images/gallery/mermaid-genie-1.PNG` | Decorative border — candidate for replacement |
| 3 | `may.jpg` | `/public/images/gallery/may.jpg` | Portrait figure |
| 4 | `dark-girl.jpg` | `/public/images/gallery/dark-girl.jpg` | Portrait figure |
| 5 | `hawaiian-girl.jpg` | `/public/images/gallery/hawaiian-girl.jpg` | Portrait figure |
| 6 | `indian-girl.jpg` | `/public/images/gallery/indian-girl.jpg` | Portrait figure |

#### Concrete Poems

Items: **260 px wide · height auto** (natural image ratio) · `object-fit: contain`  
Presented side-by-side with 4rem gap, centered

| Slot | File | Path | Natural Size | Rendered Size | Notes |
|------|------|------|--------------|---------------|-------|
| 1 | `butterfly-wordart.png` | `/public/images/experiences/butterfly-wordart.png` | 1600 × 1420 | 260 × 231 px | Word-art butterfly form — placeholder |
| 2 | `word-form-spiral.png` | `/public/images/experiences/word-form-spiral.png` | 1596 × 1600 | 260 × 260 px | Word spiral form — placeholder |

---

### STUDIO — SILHOUETTES PAGE (`/studio/silhouettes`)

Rendered via `FormPanel` component. FormPanel dimensions depend on the `.form-panel` CSS.

| Figure | Still | Video | Notes |
|--------|-------|-------|-------|
| Queen Ann | `queen-ann-still.png` | `queen-ann-motion.mp4` | Has authored still + video |
| Mermaid Grismere | `mermaid-grismere-still.png` | `mermaid-grismere-motion.mp4` | Has authored still + video |
| The Dragon | `queen-ann-still.png` (placeholder) | — | Placeholder pending authored asset |
| The Ballerina | `queen-ann-still.png` (placeholder) | — | Placeholder pending authored asset |
| Merri When Time Stops | `queen-ann-still.png` (placeholder) | — | Placeholder pending authored asset |

---

## Canonical Export Size Recommendations

These are the canonical reusable media dimensions for the current layout system.  
All sizes given at 2× for retina display quality.

---

### 1. SILHOUETTE STILLS — Primary (Entry Panel / Homepage Preview Primary)

| Use | Target container | Recommended export |
|-----|------------------|--------------------|
| Studio entry panel | 360 × 450 px | **720 × 900 px** |
| Homepage preview primary | 469 × 586 px | **940 × 1175 px** |
| **Canonical size** | — | **960 × 1200 px @ 4:5** |

- Format: PNG (for transparency/atmospheric overlays) or high-quality JPG
- Export as: `[figure]-still.png` — e.g. `queen-ann-still.png`
- Video companion: match width/height exactly → `[figure]-motion.mp4`

---

### 2. SILHOUETTE STILLS — Secondary (Homepage Preview Secondary / Grismere)

| Use | Target container | Recommended export |
|-----|------------------|--------------------|
| Homepage preview secondary (Grismere) | 383 × 575 px | **766 × 1150 px** |
| **Canonical size** | — | **800 × 1200 px @ 2:3** |

- Format: PNG
- **Composition note:** Figure should occupy approx. 60–70% of the frame height, with clear environmental atmosphere above and below. The CSS applies `scale(0.82)` — so the authored image should compose the figure slightly large, knowing CSS will add surrounding breathing room.
- Export centered, with environmental space preserved around all edges.

---

### 3. SILHOUETTE PAIR (Secondary pair beneath Ann)

| Use | Target container | Recommended export |
|-----|------------------|--------------------|
| Silhouette pair items | 220 × 330 px | **440 × 660 px** |
| **Canonical size** | — | **480 × 720 px @ 2:3** |

- Format: PNG
- Lower visual weight — softer, quieter compositions than the entry panel

---

### 4. DIGITAL ART PAINTINGS (Studio painterly grid)

| Use | Target container | Recommended export |
|-----|------------------|--------------------|
| Painterly grid items | 267 × 333 px | **534 × 667 px** |
| **Canonical size** | — | **600 × 750 px @ 4:5** |

- Format: JPG (90% quality) or PNG
- `object-fit: cover, object-position: center top` — center the figure and ensure head/upper body is in the upper portion of the frame
- Avoid heavy decorative borders or literal print-layout framing

---

### 5. HERO IMAGE (Homepage)

| Use | Target container | Recommended export |
|-----|------------------|--------------------|
| Desktop hero | 788 × 541 px | **1600 × 1100 px** |
| Tablet hero | ~600 × 450 px | **1200 × 900 px** |
| Mobile hero | ~390 × 500 px | **780 × 1000 px** |

- Format: JPG (existing files at these sizes already)
- All three variants already authored — no change needed for Queen Ann

---

### 6. CONCRETE POEMS

| Use | Target container | Recommended export |
|-----|------------------|--------------------|
| Poems items | 260 px wide, height auto | **520 px wide** |
| Square form | — | **520 × 520 px** |
| Tall form | — | **520 × 585 px** |

- Format: PNG with transparent or cream (`#f5f0e8`) background
- These are placeholder — final curated poetic-image forms will be supplied manually
- **Tonal note:** The final artwork should feel intimate and restrained — not data-visualization style word clouds, but composed image-text objects

---

### 7. STILL/VIDEO COMBINATIONS (FormPanel — Silhouettes sub-page)

The FormPanel component uses hover-to-video behavior. The still and video must share identical dimensions.

| Canonical still+video size | Aspect ratio | Notes |
|---------------------------|--------------|-------|
| **800 × 1200 px @ 2:3** | 2:3 | Standard silhouette figure size |
| **960 × 1200 px @ 4:5** | 4:5 | Wider silhouette (Queen Ann style) |

- **Video format:** MP4 (H.264), 24–30fps, compressed for web
- **Midjourney video exports:** export at 2:3 (portrait) for figure-centered forms; 16:9 for landscape atmospheric environments
- Still and video must share the exact same crop and frame — the still is the poster frame

---

## Midjourney / Photoshop Recomposition Guidance

### Grismere (priority)

Current state: CSS applies `scale(0.82)` + `contain` within a 2:3 frame.  
Recommended recomposition target: **800 × 1200 px**

The authored image should:
- Place Grismere at approximately 40–50% of image height (smaller than current)
- Surround the figure with significant underwater environment — coral, water, depth
- Maintain visual coherence from edge to edge (no hard cut-off)
- Export as PNG for transparency option, or JPG with full dark-water background fill

### General principle for all symbolic figures

> The figure should feel *inside* the atmosphere, not filling the frame.  
> Aim for 50–65% figure coverage, with 35–50% surrounding environmental space.  
> The CSS and layout do the rest.

---

## Notes on Placeholder Status

| Section | Status |
|---------|--------|
| Queen Ann still + video | ✓ Authored and active |
| Mermaid Grismere still + video | Partially — CSS fix in place; recomposition recommended |
| Silhouette pair (Grismere + Ann figure) | Temporary — will be replaced with curated silhouettes |
| Digital Art Paintings (6 gallery images) | Placeholder — curated replacement planned |
| Concrete Poems (butterfly, spiral) | Placeholder — final artwork will be supplied manually |
| Dragon, Ballerina, Merri (FormPanel) | Placeholder stills — authored assets pending |
