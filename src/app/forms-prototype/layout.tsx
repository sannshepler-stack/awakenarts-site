import type { Metadata } from 'next'

// ─── /forms-prototype — Layout / Metadata ────────────────────────────────────
// AwakenArts · The Forms — prototype route
//
// Hidden during prototype phase. Not in navigation. Not indexed by search
// engines or AI crawlers. Promotion to public navigation happens in a
// later pass after Susan approves the visual direction.
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'The Forms — Prototype',
  description:
    'Symbolic concrete poetic forms from the AwakenArts Symbolic Forms Collection.',
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

export default function FormsPrototypeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
