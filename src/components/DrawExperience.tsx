'use client'

// ─── DrawExperience ──────────────────────────────────────────────────────────
// AwakenArts · Phase 3 · Single-card encounter component
//
// SPEC REQUIREMENTS:
//   • Displays ONE card at a time — no multi-card view
//   • No shuffle animation — selection advances sequentially
//   • No visual randomness effects — deterministic index cycling
//   • Reveal is calm — CSS opacity fade (250ms ease) via variant="fade"
//   • "Draw another" is a plain text link — NOT a CTA button
//
// ASSET INSERTION:
//   When final card artwork is ready, replace frontSrc / backSrc in MOCK_CARDS.
//   Drop files into:
//     /public/images/cards/fronts/   ← front artwork
//     /public/images/cards/backs/    ← back artwork
//   No component changes required. Structure is asset-ready.
//
// MOCK DATA NOTE:
//   Currently references existing sample card fronts from /fronts/.
//   These are working placeholders — same image format as final assets.
//   Replace one at a time as final artwork is delivered.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useCallback } from 'react'
import Card from './Card'

// ── Mock dataset (5 cards) ──────────────────────────────────────────────────
// Replace frontSrc with final asset paths when artwork is ready.
// backSrc defaults in Card.tsx but is explicit here for clarity.
// ─────────────────────────────────────────────────────────────────────────────

interface CardData {
  id: string
  title: string
  frontSrc: string
  backSrc: string
  alt: string
}

const MOCK_CARDS: CardData[] = [
  {
    id: 'guidance',
    title: 'Guidance',
    frontSrc: '/images/cards/fronts/guidance.jpg',
    backSrc:  '/images/cards/backs/card-back.jpg',
    alt:      'Guidance — symbolic card',
  },
  {
    id: 'dream',
    title: 'Dream',
    frontSrc: '/images/cards/fronts/dream.jpg',
    backSrc:  '/images/cards/backs/card-back.jpg',
    alt:      'Dream — symbolic card',
  },
  {
    id: 'wholeness',
    title: 'Wholeness',
    frontSrc: '/images/cards/fronts/wholeness.jpg',
    backSrc:  '/images/cards/backs/card-back.jpg',
    alt:      'Wholeness — symbolic card',
  },
  {
    id: 'journey',
    title: 'Journey',
    frontSrc: '/images/cards/fronts/journey.jpg',
    backSrc:  '/images/cards/backs/card-back.jpg',
    alt:      'Journey — symbolic card',
  },
  {
    id: 'grace',
    title: 'Grace',
    frontSrc: '/images/cards/fronts/grace-swan.jpg',
    backSrc:  '/images/cards/backs/card-back.jpg',
    alt:      'Grace — symbolic card',
  },
  {
    id: 'faith',
    title: 'Faith',
    frontSrc: '/images/cards/fronts/faith.jpg',
    backSrc:  '/images/cards/backs/card-back.jpg',
    alt:      'Faith — symbolic card',
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function DrawExperience() {
  const [index,    setIndex]    = useState(0)
  const [revealed, setRevealed] = useState(false)
  // transitioning: prevents double-click during face swap
  const [transitioning, setTransitioning] = useState(false)

  const card = MOCK_CARDS[index]

  // Reveal: face-down → face-up. Only fires when card is still face-down.
  const handleReveal = useCallback(() => {
    if (!revealed && !transitioning) {
      setRevealed(true)
    }
  }, [revealed, transitioning])

  // Keyboard support on the card
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        handleReveal()
      }
    },
    [handleReveal]
  )

  // Advance to next card:
  // 1. Hide current front (return to back)
  // 2. After fade completes (250ms), advance index
  // Sequential cycle — no randomness, no shuffle.
  const handleNext = useCallback(() => {
    if (transitioning) return
    setTransitioning(true)
    setRevealed(false)
    setTimeout(() => {
      setIndex(i => (i + 1) % MOCK_CARDS.length)
      setTransitioning(false)
    }, 260) // slightly longer than the 250ms fade
  }, [transitioning])

  return (
    <div className="draw-experience">

      {/* ── Card (face-down until revealed) ── */}
      <div
        className="draw-experience__card-wrap"
        onClick={handleReveal}
        onKeyDown={handleKeyDown}
        role={revealed ? undefined : 'button'}
        tabIndex={revealed ? undefined : 0}
        aria-label={revealed ? undefined : `Draw a card — ${card.title}`}
      >
        <Card
          frontSrc={card.frontSrc}
          frontAlt={card.alt}
          backSrc={card.backSrc}
          revealed={revealed}
          interactive={!revealed}
          variant="fade"
        />
      </div>

      {/* ── Prompt: shown when card is face-down ── */}
      {!revealed && (
        <p className="draw-experience__prompt" aria-hidden>
          Draw a card
        </p>
      )}

      {/* ── Revealed state: card title + "Draw another" text link ── */}
      {revealed && (
        <div className="draw-experience__meta">
          <p className="draw-experience__title">{card.title}</p>
          <button
            className="draw-experience__next"
            onClick={handleNext}
            disabled={transitioning}
            aria-label="Draw another card"
          >
            Draw another
          </button>
        </div>
      )}

    </div>
  )
}
