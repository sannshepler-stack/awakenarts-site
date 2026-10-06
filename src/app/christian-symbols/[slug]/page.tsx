import type { Metadata } from 'next'
import ChristianSymbolsHero from '@/components/symbols/ChristianSymbolsHero'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import SymbolsExperience from '@/components/SymbolsExperience'
import { SYMBOLS, getSymbol } from '@/data/symbols'

// /symbols/[slug] — deep-link entry points into the /symbols experience
// (e.g. /symbols/lamp), for Pinterest, newsletter, and social-media links.
// Renders the identical page as /symbols, but hands SymbolsExperience the
// requested slug so that symbol is already in focus on load — its word is
// selected in the Section 1 reveal, and if it has finished card art, that
// card opens already revealed and scrolled into view.
//
// generateStaticParams covers every symbol in the vocabulary (not just the
// five with finished cards) so a direct link never 404s as new symbols are
// added — a symbol without card art simply focuses its vocabulary entry.
export function generateStaticParams() {
  return SYMBOLS.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const symbol = getSymbol(params.slug)
  if (!symbol) return {}
  return {
    title: `${symbol.name} — Symbols for the Christian Soul — AwakenArts`,
    description: `${symbol.name}: ${symbol.meanings.join(', ')}. ${symbol.scriptureReference}.`,
    alternates: { canonical: `/christian-symbols/${symbol.slug}` },
  }
}

export default function SymbolPage({ params }: { params: { slug: string } }) {
  const symbol = getSymbol(params.slug)
  if (!symbol) return notFound()

  return (
    <>
      <Nav />
      <main className="symbols-page">
        <ChristianSymbolsHero />

        <SymbolsExperience initialSlug={symbol.slug} />
      </main>

      <WayfindingBand />
      <Footer />
    </>
  )
}
