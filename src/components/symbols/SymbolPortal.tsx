import Link from 'next/link'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import StayConnected from '@/components/StayConnected'
import WorldDoorways from '@/components/WorldDoorways'
import SymbolCardView from '@/components/symbols/SymbolCardView'
import type { SymbolCard } from '@/data/symbolCards'
import { symbolCards } from '@/data/symbolCards'

// SymbolPortal — the page a Symbol Card's QR code opens (2026-10-05).
// A portal into the wider AwakenArts experience, not a reference entry:
// card → its meanings → one question → one next step → the wider world.
// Every block renders only when Susan has supplied its content.

const label: React.CSSProperties = {
  fontFamily: 'var(--sans)',
  fontSize: 'var(--label-size)',
  fontWeight: 600,
  letterSpacing: 'var(--label-tracking)',
  textTransform: 'uppercase',
  color: 'var(--gold)',
  margin: 0,
}
const body: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--body-size)',
  lineHeight: 'var(--body-line)',
  color: 'var(--deep)',
  margin: '0 0 1rem',
}
const wrap: React.CSSProperties = { maxWidth: 'var(--measure-poetic, 640px)', margin: '0 auto' }

export default function SymbolPortal({ card }: { card: SymbolCard }) {
  const i = symbolCards.findIndex((c) => c.slug === card.slug)
  const prev = i > 0 ? symbolCards[i - 1] : undefined
  const next = i >= 0 && i < symbolCards.length - 1 ? symbolCards[i + 1] : undefined
  const p = card.portal || {}

  return (
    <>
      <Nav />
      <main style={{ background: 'var(--cream)' }}>
        {/* 1 — The card itself */}
        <section
          aria-label={`${card.name} Symbol Card`}
          style={{ padding: 'calc(var(--band-gap) + 2rem) 1.5rem var(--band-gap)' }}
        >
          <div
            style={{
              maxWidth: 1040,
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <SymbolCardView card={card} />
            <div>
              <p style={label}>Symbol</p>
              <h1
                style={{
                  fontFamily: 'var(--serif)',
                  fontWeight: 400,
                  fontSize: 'var(--t-page)',
                  color: 'var(--deep)',
                  margin: '0.6rem 0 1.25rem',
                  lineHeight: 1,
                }}
              >
                {card.name}
              </h1>
              {card.front.meanings.length > 0 && (
                <p style={{ ...body, fontFamily: 'var(--serif)', fontSize: '1.35rem', fontStyle: 'italic', color: 'var(--gold)' }}>
                  {card.front.meanings.join(' · ')}
                </p>
              )}
              {card.front.expression && <p style={{ ...body, color: 'var(--mid)' }}>{card.front.expression}</p>}
            </div>
          </div>
        </section>

        {/* 2 — Broad meanings, expanded */}
        {p.broad && p.broad.length > 0 && (
          <section style={{ padding: '0 1.5rem var(--band-gap)' }}>
            <div style={wrap}>
              {p.broad.map((para, k) => (
                <p key={k} style={body}>{para}</p>
              ))}
            </div>
          </section>
        )}

        {/* 3 — Christian meaning and Scripture */}
        {(card.back.scripture || (p.christian && p.christian.length > 0)) && (
          <section style={{ background: 'var(--deep)', padding: 'var(--band-gap) 1.5rem', textAlign: 'center' }}>
            <div style={wrap}>
              <p style={{ ...label, color: 'var(--gold-lt)' }}>In Scripture</p>
              {card.back.scripture?.text && (
                <p
                  style={{
                    fontFamily: 'var(--serif)',
                    fontStyle: 'italic',
                    fontSize: 'var(--t-section)',
                    lineHeight: 1.4,
                    color: 'var(--cream)',
                    margin: '1.25rem 0 0.75rem',
                  }}
                >
                  &ldquo;{card.back.scripture.text}&rdquo;
                </p>
              )}
              {card.back.scripture && (
                <p style={{ ...label, color: 'var(--gold-lt)', fontSize: '0.78rem' }}>
                  {card.back.scripture.reference}
                  {card.back.scripture.translation ? ` (${card.back.scripture.translation})` : ''}
                </p>
              )}
              {p.christian?.map((para, k) => (
                <p key={k} style={{ ...body, color: 'rgba(250, 246, 236, 0.85)', marginTop: k === 0 ? '1.5rem' : 0 }}>
                  {para}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* 4 — One reflective question */}
        {p.question && (
          <section style={{ padding: 'var(--band-gap) 1.5rem', textAlign: 'center' }}>
            <div style={wrap}>
              <p
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'var(--t-section)',
                  lineHeight: 1.35,
                  color: 'var(--deep)',
                  margin: 0,
                }}
              >
                {p.question}
              </p>
            </div>
          </section>
        )}

        {/* 5 — One next step */}
        {p.next && (
          <section style={{ padding: '0 1.5rem var(--band-gap)', textAlign: 'center' }}>
            {p.next.note && <p style={{ ...body, color: 'var(--mid)' }}>{p.next.note}</p>}
            <Link href={p.next.href} className="home-coll-cta home-coll-cta--light-surface" data-cta={`portal-next-${card.slug}`}>
              {p.next.label}
            </Link>
          </section>
        )}

        {/* 6 — Into the AwakenArts world */}
        <WorldDoorways />

        {/* 7 — Email */}
        <StayConnected source={`portal-${card.slug}`} />

        {/* 8 — Between portals; Christian Symbols cross-link */}
        <nav
          aria-label="More symbols"
          style={{
            padding: '2.5rem 1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem 2rem',
            fontFamily: 'var(--sans)',
            fontSize: '0.8rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          {prev && <Link href={`/symbols/${prev.slug}`} style={{ color: 'var(--gold)' }}>← {prev.name}</Link>}
          <Link href="/symbols" style={{ color: 'var(--gold)' }}>All Symbols</Link>
          {p.christianSymbol && (
            <Link href={`/christian-symbols/${p.christianSymbol}`} style={{ color: 'var(--gold)' }}>
              Symbols for the Christian Soul
            </Link>
          )}
          {next && <Link href={`/symbols/${next.slug}`} style={{ color: 'var(--gold)' }}>{next.name} →</Link>}
        </nav>
      </main>
      <WayfindingBand />
      <Footer />
    </>
  )
}
