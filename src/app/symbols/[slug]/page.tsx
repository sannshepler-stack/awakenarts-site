import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SymbolPortal from '@/components/symbols/SymbolPortal'
import { symbolCards, getSymbolCard } from '@/data/symbolCards'

// /symbols/[slug] — Symbol Portal (D10, approved 2026-10-05).
// A Symbol Card's portal when one exists for this slug. Old Christian
// Symbols deep links are redirected to /christian-symbols/[slug] by
// src/middleware.ts before reaching this page.

export function generateStaticParams() {
  return symbolCards.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const card = getSymbolCard(params.slug)
  if (!card) return {}
  const desc = [card.front.meanings.join(', '), card.back.scripture?.reference].filter(Boolean).join('. ')
  return {
    title: `${card.name} — Symbol`,
    description: desc || undefined,
    alternates: { canonical: `/symbols/${card.slug}` },
    openGraph: card.front.image ? { images: [card.front.image] } : undefined,
  }
}

export default function SymbolPortalPage({ params }: { params: { slug: string } }) {
  const card = getSymbolCard(params.slug)
  if (card) return <SymbolPortal card={card} />
  notFound()
}
