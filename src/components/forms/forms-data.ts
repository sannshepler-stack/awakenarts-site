// ─── Forms — Entry Data ──────────────────────────────────────────────────────
// AwakenArts · The Forms — Symbolic Forms Collection
//
// Single source of truth for which Forms appear on the public Forms page.
// The /studio/silhouettes page reads from this array. Do not hardcode Forms
// into individual pages.
//
// ── STILLS-ONLY DIRECTIVE (2026-06-18, Susan) ─────────────────────────────────
// Studio entries show stills only — no video. Susan's call: the videos
// cheapen the expression; the stills are visually sound on their own and
// don't need motion to carry the work. Entries below intentionally omit
// videoSrc / autoplayVideo even where a paired video file still exists on
// disk (see /public/videos/forms/). FormPanel still supports a video mode
// in code, but no entry should opt into it without Susan's say.
//
// ── CANONICAL SILHOUETTE ASSET STANDARD ──────────────────────────────────────
// All silhouette stills follow this standard:
//
//   Source dimensions:  1600 × 2400 px
//   Aspect ratio:       2:3 (vertical)
//   Color mode:         RGB / sRGB
//   Still format:       PNG (transparency preserved where needed)
//
//   COMPOSITION RULE: The figure must not fill the frame. The environment
//   is part of the symbolic language. Compose figures smaller within the
//   frame — surrounded by atmosphere, breathing within the environment.
//   No edge-touching crowns, hair, tails, or shoulders.
//
// ── CURRENT ASSETS ───────────────────────────────────────────────────────────
//   • Queen Ann      — /images/forms/queen-ann-still.png  (1600×2400 ✓ canonical)
//   • Mermaid Grismere — /images/forms/mermaid-grismere-still.png (1600×2400 ✓ canonical)
//   • The Dragon     — /images/forms/dragon-still.png (512×768 ✓ 2:3, frame extract;
//                       replace with a full 1600×2400 authored still when available)
//   • Juggling Bear  — /images/forms/bear-still.jpg
//   • Ballerina and Merri still use queen-ann-still as shared placeholder.
//
// ── ADDING A NEW FORM ─────────────────────────────────────────────────────────
//   1. Prepare still at 1600×2400 px per the composition rule above.
//   2. Place still in /public/images/forms/<slug>.png
//   3. Add an entry below with imageSrc and imageAlt. Do not add videoSrc.
//   4. Remove from the queue of placeholders.
// ─────────────────────────────────────────────────────────────────────────────

import type { SymbolicForm } from './types'

const ANN_FORMS_STILL = '/images/forms/queen-ann-still.png'
const ANN_FORMS_PLACEHOLDER_ALT =
  'Placeholder atmospheric still — authored artwork forthcoming.'

export const SYMBOLIC_FORMS: ReadonlyArray<SymbolicForm> = [
  {
    slug: 'queen-ann',
    name: 'Queen Ann',
    imageSrc: ANN_FORMS_STILL,
    imageAlt:
      'Queen Ann — atmospheric still: a windswept figure with form-silhouette overlay.',
    // New canonical still is 1600×2400 — review whether the 60% horizontal
    // crop correction is still needed once new composition is seen live.
    imagePosition: '60% center',
  },
  {
    slug: 'mermaid-grismere',
    name: 'Mermaid Grismere',
    imageSrc: '/images/forms/mermaid-grismere-still.png',
    imageAlt:
      'Mermaid Grismere — atmospheric still: a figure beneath the water with form-silhouette overlay.',
  },
  {
    slug: 'the-dragon',
    name: 'The Dragon',
    // Still extracted from dragon-motion.mp4 frame at 2.5s — canonical 512×768 (2:3).
    // Replace with a full 1600×2400 authored still when available.
    imageSrc: '/images/forms/dragon-still.png',
    imageAlt:
      'The Dragon — atmospheric still: symbolic presence within elemental environment.',
  },
  {
    slug: 'juggling-bear',
    name: 'Juggling Bear',
    imageSrc: '/images/forms/bear-still.jpg',
    imageAlt:
      'Juggling Bear — circus bear with clown hat, juggling orbs.',
  },
  {
    slug: 'the-ballerina',
    name: 'The Ballerina',
    imageSrc: ANN_FORMS_STILL,
    imageAlt: ANN_FORMS_PLACEHOLDER_ALT,
  },
  {
    slug: 'merri-when-time-stops',
    name: 'Merri When Time Stops',
    imageSrc: ANN_FORMS_STILL,
    imageAlt: ANN_FORMS_PLACEHOLDER_ALT,
  },
]
