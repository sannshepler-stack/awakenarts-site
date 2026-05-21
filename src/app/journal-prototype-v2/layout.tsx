import type { Metadata } from 'next'

// ─── Journal Prototype V2 — Layout / Metadata ────────────────────────────────
// AwakenArts · /journal-prototype-v2
//
// Hidden prototype route. Text-first variant for interface comparison
// with /journal-prototype. Not in navigation. Not indexed.
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'The Journal — Prototype v2',
  description:
    'Text-first prototype of The Journal — symbolic reflections and journal prompts as a literary index.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function JournalPrototypeV2Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
