'use client'

import { useState } from 'react'
import type { SymbolCard } from '@/data/symbolCards'
import { qrPath } from '@/data/symbolCards'

// SymbolCardView — the two-sided Symbol Card, as printed (2026-10-05).
// Front: broad meanings. Back: Christian meanings + Scripture + QR address.
// Tap / click / Enter turns the card. Respects reduced motion.

const face: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
  borderRadius: 10,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 10px 28px rgba(28, 43, 58, 0.16)',
}

export default function SymbolCardView({
  card,
  maxWidth = 360,
}: {
  card: SymbolCard
  maxWidth?: number
}) {
  const [turned, setTurned] = useState(false)

  return (
    <div style={{ width: '100%', maxWidth, margin: '0 auto' }}>
      <button
        type="button"
        onClick={() => setTurned((t) => !t)}
        aria-pressed={turned}
        aria-label={`${card.name} card, ${turned ? 'back' : 'front'} side. Turn the card.`}
        style={{
          display: 'block',
          width: '100%',
          aspectRatio: '5 / 7',
          position: 'relative',
          perspective: 1400,
          background: 'none',
          border: 0,
          padding: 0,
          cursor: 'pointer',
        }}
      >
        <div
          className="symbol-card__inner"
          style={{
            position: 'absolute',
            inset: 0,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.7s ease',
            transform: turned ? 'rotateY(180deg)' : 'none',
          }}
        >
          {/* FRONT */}
          <div style={{ ...face, background: 'var(--cream)', border: '1px solid var(--gold-lt)' }}>
            {card.front.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={card.front.image}
                alt={card.front.imageAlt || card.name}
                style={{ width: '100%', flex: '1 1 auto', minHeight: 0, objectFit: 'contain', background: 'var(--cream)' }}
              />
            ) : (
              <div style={{ flex: '1 1 auto' }} />
            )}
            <div style={{ padding: '1rem 1.25rem 1.25rem', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '1.7rem', color: 'var(--deep)', margin: 0, lineHeight: 1.1 }}>
                {card.name}
              </p>
              {card.front.meanings.length > 0 && (
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', margin: '0.6rem 0 0', lineHeight: 1.7 }}>
                  {card.front.meanings.join(' · ')}
                </p>
              )}
              {card.front.expression && (
                <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--mid)', margin: '0.5rem 0 0' }}>
                  {card.front.expression}
                </p>
              )}
            </div>
          </div>

          {/* BACK */}
          <div
            style={{
              ...face,
              transform: 'rotateY(180deg)',
              background: 'var(--deep)',
              border: '1px solid rgba(201, 168, 76, 0.5)',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '1.75rem 1.5rem',
              gap: '1rem',
            }}
          >
            <p style={{ fontFamily: 'var(--serif)', fontSize: '1.6rem', color: 'var(--cream)', margin: 0 }}>{card.name}</p>
            {card.back.meanings.length > 0 && (
              <p style={{ fontFamily: 'var(--sans)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold-lt)', margin: 0, lineHeight: 1.7 }}>
                {card.back.meanings.join(' · ')}
              </p>
            )}
            {card.back.scripture && (
              <div>
                {card.back.scripture.text && (
                  <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.45, color: 'var(--cream)', margin: 0 }}>
                    &ldquo;{card.back.scripture.text}&rdquo;
                  </p>
                )}
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-lt)', margin: '0.6rem 0 0' }}>
                  {card.back.scripture.reference}
                  {card.back.scripture.translation ? ` (${card.back.scripture.translation})` : ''}
                </p>
              </div>
            )}
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.08em', color: 'rgba(250, 246, 236, 0.6)', margin: '0.5rem 0 0' }}>
              awakenarts.com{qrPath(card.slug)}
            </p>
          </div>
        </div>
      </button>
      <p style={{ textAlign: 'center', fontFamily: 'var(--sans)', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--mid)', margin: '0.9rem 0 0' }}>
        {turned ? 'Showing the back · tap to turn' : 'Tap the card to turn it'}
      </p>
    </div>
  )
}
