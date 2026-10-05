import { NextRequest, NextResponse } from 'next/server'
import { getSymbolCard } from '@/data/symbolCards'
import { getSymbol } from '@/data/symbols'

// D10 (approved 2026-10-05): /symbols/[slug] now belongs to Symbol Card
// Portals. The Christian Symbols deep links that used to live there moved
// to /christian-symbols/[slug]. Any old link for a symbol that has no
// Portal yet is permanently redirected there, so nothing shared earlier
// breaks. (Once a Portal exists for that slug, the Portal is served and
// links to its Christian Symbols entry.)

export function middleware(req: NextRequest) {
  const slug = req.nextUrl.pathname.split('/')[2]
  if (slug && !getSymbolCard(slug) && getSymbol(slug)) {
    const url = req.nextUrl.clone()
    url.pathname = `/christian-symbols/${slug}`
    return NextResponse.redirect(url, 308)
  }
  return NextResponse.next()
}

export const config = { matcher: ['/symbols/:path*'] }
