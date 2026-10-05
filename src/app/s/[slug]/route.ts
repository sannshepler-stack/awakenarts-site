import { NextRequest, NextResponse } from 'next/server'
import { getSymbolCard } from '@/data/symbolCards'

// /s/[slug] — the short, permanent address printed as a QR code on each
// Symbol Card (D1, approved 2026-10-05). Deliberately a TEMPORARY (302)
// redirect: the printed address never changes, but where it leads can.
// `src=card` lets analytics tell card traffic apart (D7 still provisional).

export function GET(req: NextRequest, { params }: { params: { slug: string } }) {
  const slug = (params.slug || '').toLowerCase()
  const card = getSymbolCard(slug)
  const target = new URL(card ? `/symbols/${card.slug}` : '/symbols', req.nextUrl.origin)
  target.searchParams.set('src', 'card')
  return NextResponse.redirect(target, 302)
}
