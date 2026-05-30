// ─── Forms — Entry Data ──────────────────────────────────────────────────────
// AwakenArts · The Forms — Symbolic Forms Collection
//
// Single source of truth for which Forms appear on the public Forms page.
// The /studio/silhouettes page reads from this array. Do not hardcode Forms
// into individual pages.
//
// ── CANONICAL SILHOUETTE ASSET STANDARD ──────────────────────────────────────
// All silhouette stills and their paired videos must follow this standard:
//
//   Source dimensions:  1600 × 2400 px
//   Aspect ratio:       2:3 (vertical)
//   Color mode:         RGB / sRGB
//   Still format:       PNG (transparency preserved where needed)
//   Video format:       H.264 MP4, muted
//   Video duration:     6–8s preferred
//
//   COMPOSITION RULE: The figure must not fill the frame. The environment
//   is part of the symbolic language. Compose figures smaller within the
//   frame — surrounded by atmosphere, breathing within the environment.
//   No edge-touching crowns, hair, tails, or shoulders.
//
//   STILL/VIDEO RELATIONSHIP: Create the still first. Finalize composition
//   in Photoshop. Export at 1600 × 2400. Use that exact still as the source
//   for animation. Still and video must share identical framing — the still
//   should feel like a paused moment from the video; the video should feel
//   like the still slowly awakening.
//
// ── CURRENT ASSETS ───────────────────────────────────────────────────────────
//   • Forms with canonical 1600×2400 still + 512×768 video (2:3 throughout):
//     - Queen Ann
//         Still:  /images/forms/queen-ann-still.png  (1600×2400 ✓ canonical)
//         Video:  /videos/forms/queen-ann-motion.mp4 (512×768 ✓ 2:3)
//     - Mermaid Grismere
//         Still:  /images/forms/mermaid-grismere-still.png  (1600×2400 ✓ canonical)
//         Video:  /videos/forms/mermaid-grismere-motion.mp4 (512×768 ✓ 2:3)
//     - The Dragon (still extracted from video frame — canonical temp)
//         Still:  /images/forms/dragon-still.png  (512×768 ✓ 2:3, frame extract)
//         Video:  /videos/forms/dragon-motion.mp4  (512×768 ✓ 2:3)
//   • Ballerina and Merri still use queen-ann-still as shared placeholder.
//     Only Forms with a videoSrc have hover motion.
//
// ── ADDING A NEW FORM ─────────────────────────────────────────────────────────
//   1. Prepare still at 1600×2400 px per the composition rule above.
//   2. Animate from that same still — preserve identical framing.
//   3. Place still in /public/images/forms/<slug>.png
//   4. Place video in /public/videos/forms/<slug>-motion.mp4
//   5. Add an entry below with imageSrc, imageAlt, and videoSrc.
//   6. Remove from the queue of placeholders.
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
    videoSrc: '/videos/forms/queen-ann-motion.mp4',
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
    videoSrc: '/videos/forms/mermaid-grismere-motion.mp4',
  },
  {
    slug: 'the-dragon',
    name: 'The Dragon',
    // Still extracted from dragon-motion.mp4 frame at 2.5s — canonical 512×768 (2:3).
    // Replace with a full 1600×2400 authored still when available.
    imageSrc: '/images/forms/dragon-still.png',
    imageAlt:
      'The Dragon — atmospheric still: symbolic presence within elemental environment.',
    videoSrc: '/videos/forms/dragon-motion.mp4',
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
