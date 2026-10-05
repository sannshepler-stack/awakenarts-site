import TextLink from '@/components/TextLink'
import SymbolTile from '@/components/symbols/SymbolTile'
import type { SymbolCard } from '@/data/symbolCards'

// HomeBeginWithSymbol — homepage section 2 (Rebuild Plan §3).
// Featured Symbol Cards as entry points into their Portals. Renders only
// when featured cards exist (src/data/symbolCards.ts). Layout: see
// `columns` — 3 vs 4 was tested 2026-10-05; the chosen default is set in
// HOME_SYMBOL_COLUMNS below.

export const HOME_SYMBOL_COLUMNS: 3 | 4 = 3

export default function HomeBeginWithSymbol({
  cards,
  columns = HOME_SYMBOL_COLUMNS,
}: {
  cards: SymbolCard[]
  columns?: 3 | 4
}) {
  const shown = cards.slice(0, columns)
  if (shown.length === 0) return null
  return (
    <section aria-labelledby="begin-symbol-heading" style={{ background: 'var(--cream)', padding: 'var(--band-gap) 1.5rem' }}>
      <div style={{ maxWidth: columns === 4 ? 1120 : 960, margin: '0 auto', textAlign: 'center' }}>
        <p className="eyebrow" style={{ justifyContent: 'center' }}>Symbols</p>
        <h2
          id="begin-symbol-heading"
          style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(1.55rem, 2.9vw, 2.08rem)', color: 'var(--deep)', margin: '1rem 0 3rem' }}
        >
          Begin with a Symbol
        </h2>
        <div
          className={`home-symbols home-symbols--${columns}`}
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit, minmax(${columns === 4 ? 160 : 180}px, 1fr))`,
            gap: columns === 4 ? '2.5rem 1.75rem' : '2.5rem 2.5rem',
          }}
        >
          {shown.map((c) => (
            <SymbolTile key={c.slug} card={c} source="home" />
          ))}
        </div>
        <p style={{ marginTop: '3rem' }}>
          <TextLink href="/symbols" cta="home-all-symbols">Explore the Symbols</TextLink>
        </p>
      </div>
    </section>
  )
}
