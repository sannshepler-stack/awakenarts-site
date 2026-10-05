import Link from 'next/link'
import type { SymbolCard } from '@/data/symbolCards'

// SymbolTile — a Symbol Card shown as an entry point (homepage "Begin with
// a Symbol", /symbols index): front image, name, one short prompt, and the
// "Explore This Symbol" invitation. Prompt renders only if supplied.

export default function SymbolTile({ card, source }: { card: SymbolCard; source: string }) {
  return (
    <Link
      href={`/symbols/${card.slug}`}
      data-cta={`${source}-symbol-${card.slug}`}
      style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', textAlign: 'center', height: '100%' }}
    >
      <span
        style={{
          display: 'block',
          aspectRatio: '5 / 7',
          background: 'var(--cream)',
          border: '1px solid var(--gold-lt)',
          borderRadius: 8,
          overflow: 'hidden',
          boxShadow: '0 8px 22px rgba(28, 43, 58, 0.12)',
        }}
      >
        {card.front.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={card.front.image}
            alt={card.front.imageAlt || card.name}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <span style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontSize: '2rem', color: 'var(--deep)' }}>
            {card.name}
          </span>
        )}
      </span>
      <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: 'var(--t-card)', color: 'var(--deep)', marginTop: '1.1rem' }}>
        {card.name}
      </span>
      {card.prompt && (
        <span style={{ display: 'block', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.08rem', lineHeight: 1.45, color: 'var(--mid)', margin: '0.4rem 0 0' }}>
          {card.prompt}
        </span>
      )}
      <span
        style={{
          display: 'block',
          marginTop: 'auto',
          paddingTop: '0.9rem',
          fontFamily: 'var(--sans)',
          fontSize: '0.78rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
        }}
      >
        Explore This Symbol →
      </span>
    </Link>
  )
}
