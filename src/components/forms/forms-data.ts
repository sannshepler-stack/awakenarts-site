// ─── Forms — Entry Data ──────────────────────────────────────────────────────
// AwakenArts · The Forms — Symbolic Forms Collection
//
// Single source of truth for which Forms appear on the public Forms page.
// The /forms-prototype page reads from this array. Do not hardcode Forms
// into individual pages.
//
// Adding a Form: add a new entry below. To show a real still image,
// drop the file under /public/images/ and set imageSrc to its public
// path. To stage a Form before its artwork is ready, omit imageSrc —
// the panel will render as a restrained name-only placeholder.
//
// The Forms list is curated, not exhaustive. The Collection itself
// holds the complete works; this list controls what the page shows
// as visual thresholds.
// ─────────────────────────────────────────────────────────────────────────────

import type { SymbolicForm } from './types'

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
    imageSrc: '/images/figures/grismere/grismere-art.png',
    imageAlt: 'Mermaid Grismere — a symbolic figure of depth and longing.',
  },
  {
    slug: 'the-dragon',
    name: 'The Dragon',
    imageSrc: '/images/encounters/dragon/dragon-1.png',
    imageAlt: 'The Dragon — a symbolic figure of guarded power.',
  },
  {
    slug: 'the-ballerina',
    name: 'The Ballerina',
    imageSrc: '/images/figures/ballerina/ballet-art-image.png',
    imageAlt: 'The Ballerina — a symbolic figure of poise and motion.',
  },
  {
    // Placeholder slot — artwork not yet attached. Renders as
    // restrained name-only panel.
    slug: 'merri-when-time-stops',
    name: 'Merri When Time Stops',
  },
]
