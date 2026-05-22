// ─── Forms — Entry Data ──────────────────────────────────────────────────────
// AwakenArts · The Forms — Symbolic Forms Collection
//
// Single source of truth for which Forms appear on the public Forms page.
// The /forms-prototype page reads from this array. Do not hardcode Forms
// into individual pages.
//
// Current placeholder strategy (per directive):
//   • Forms with their own matching still + video pair:
//     - Queen Ann
//         Still:  /images/forms/queen-ann-still.png
//         Video:  /videos/forms/queen-ann-motion.mp4
//     - Mermaid Grismere
//         Still:  /images/forms/mermaid-grismere-still.png
//         Video:  /videos/forms/mermaid-grismere-motion.mp4
//   • All other Forms reuse the queen-ann-still as a shared
//     atmospheric placeholder while keeping their own poem-form names.
//   • Only Forms with a videoSrc have hover motion; the others remain still.
//
// The brand hero (/images/brand/queen-ann-hero-desktop.jpg) is no longer
// referenced by the Forms page. It remains in /public for use elsewhere
// (homepage, OG card, etc.).
//
// When a Form gains its own authored still / video pair, replace the
// shared imageSrc with its real asset and add videoSrc if applicable.
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
    imageSrc: ANN_FORMS_STILL,
    imageAlt: ANN_FORMS_PLACEHOLDER_ALT,
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
