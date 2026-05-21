// ─── Forms — Entry Data ──────────────────────────────────────────────────────
// AwakenArts · The Forms — Symbolic Forms Collection
//
// Single source of truth for which Forms appear on the public Forms page.
// The /forms-prototype page reads from this array. Do not hardcode Forms
// into individual pages.
//
// Current placeholder strategy (per directive):
//   • Queen Ann is the only Form with its own matching still + video.
//   • All other Forms reuse the Queen Ann still as a shared
//     atmospheric placeholder while keeping their own poem-form names.
//   • Each non-Queen-Ann Form has no video — only the still poster
//     image is shown; no hover motion.
//
// When a Form gains its own authored still / video pair, replace the
// shared imageSrc with its real asset and add videoSrc if applicable.
// ─────────────────────────────────────────────────────────────────────────────

import type { SymbolicForm } from './types'

const SHARED_PLACEHOLDER_IMAGE = '/images/brand/queen-ann-hero-desktop.jpg'
const SHARED_PLACEHOLDER_ALT =
  'Placeholder atmospheric still — authored artwork forthcoming.'

export const SYMBOLIC_FORMS: ReadonlyArray<SymbolicForm> = [
  {
    slug: 'queen-ann',
    name: 'Queen Ann',
    imageSrc: '/images/brand/queen-ann-hero-desktop.jpg',
    imageAlt: 'Queen Ann — a painted figure in contemplation.',
    videoSrc: '/videos/queen-ann.mp4',
  },
  {
    slug: 'mermaid-grismere',
    name: 'Mermaid Grismere',
    imageSrc: SHARED_PLACEHOLDER_IMAGE,
    imageAlt: SHARED_PLACEHOLDER_ALT,
  },
  {
    slug: 'the-dragon',
    name: 'The Dragon',
    imageSrc: SHARED_PLACEHOLDER_IMAGE,
    imageAlt: SHARED_PLACEHOLDER_ALT,
  },
  {
    slug: 'the-ballerina',
    name: 'The Ballerina',
    imageSrc: SHARED_PLACEHOLDER_IMAGE,
    imageAlt: SHARED_PLACEHOLDER_ALT,
  },
  {
    slug: 'merri-when-time-stops',
    name: 'Merri When Time Stops',
    imageSrc: SHARED_PLACEHOLDER_IMAGE,
    imageAlt: SHARED_PLACEHOLDER_ALT,
  },
]
