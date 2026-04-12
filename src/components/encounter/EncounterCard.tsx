'use client'

// ─── EncounterCard ────────────────────────────────────────────────────────────
// AwakenArts · Encounter System · Single-card arc experience
//
// ARC MODEL:
//   3 cards, one archetype — presented as a progression (not a shuffle).
//   The card itself is the ONLY interaction trigger:
//     • Face-down  → click → face-up (fade reveal, 250ms)
//     • After reveal: card title + one short line appear below
//     • "Draw another" advances sequentially through the arc
//
// ASSET INSERTION — FINAL DRAGON ARTWORK:
//   Drop final front images into /public/images/cards/fronts/ using these names:
//     dragon-young.jpg     ← young dragon (arc stage I)
//     dragon-serpent.jpg   ← serpentine dragon (arc stage II)
//     dragon-winged.jpg    ← winged dragon (arc stage III)
//   Drop final back image into /public/images/cards/backs/:
//     dragon-back.jpg      ← pathway-through-trees back design
//   Then update frontSrc / backSrc below — no other changes needed.
//
// INTERIM STAND-INS:
//   rebirth / transformation / transcendence from /fronts/ are used until
//   the final dragon artwork is in place. Same file format and aspect ratio.
//
// COPY NOTE:
//   `title` and `line` fields are structural placeholders.
//   Do not invent copy — update titles and lines when real arc copy is ready.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useCallback } from 'react'
import Card from '@/components/Card'
import styles from './EncounterCard.module.css'

// ── Card dataset ─────────────────────────────────────────────────────────────
// 3-card arc — one archetype, three stages
// frontSrc: interim stand-ins — swap for final dragon artwork when ready
// backSrc:  interim back — swap for dragon-back.jpg (pathway image) when ready
// title:    arc-stage label — update with final copy when ready
// line:     one short line after reveal — leave '' until real copy provided
// ─────────────────────────────────────────────────────────────────────────────

interface EncounterCardData {
  id: string
  title: string
  line: string   // one line shown beneath title after reveal — '' until copy provided
  frontSrc: string
  backSrc: string
  alt: string
}

// BACK IMAGE — shared across all 3 arc cards
// Swap path below when dragon-back.jpg (pathway design) is in /backs/
const ARC_BACK = '/images/cards/backs/card-back.jpg' // ← swap to dragon-back.jpg

const ENCOUNTER_CARDS: EncounterCardData[] = [
  {
    id:       'arc-i',
    title:    '',                                          // ← arc stage I title goes here
    line:     '',                                          // ← arc stage I line goes here
    frontSrc: '/images/cards/fronts/rebirth.jpg',          // ← swap: dragon-young.jpg
    backSrc:  ARC_BACK,
    alt:      'Dragon — arc stage I',
  },
  {
    id:       'arc-ii',
    title:    '',                                          // ← arc stage II title goes here
    line:     '',                                          // ← arc stage II line goes here
    frontSrc: '/images/cards/fronts/transformation.jpg',   // ← swap: dragon-serpent.jpg
    backSrc:  ARC_BACK,
    alt:      'Dragon — arc stage II',
  },
  {
    id:       'arc-iii',
    title:    '',                                          // ← arc stage III title goes here
    line:     '',                                          // ← arc stage III line goes here
    frontSrc: '/images/cards/fronts/transcendence.jpg',    // ← swap: dragon-winged.jpg
    backSrc:  ARC_BACK,
    alt:      'Dragon — arc stage III',
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function EncounterCard() {
  const [index,        setIndex]        = useState(0)
  const [revealed,     setRevealed]     = useState(false)
  const [transitioning, setTransitioning] = useState(false)

  const card = ENCOUNTER_CARDS[index]

  // First click: reveal the front face
  const handleCardClick = useCallback(() => {
    if (transitioning || revealed) return
    setRevealed(true)
  }, [transitioning, revealed])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        handleCardClick()
      }
    },
    [handleCardClick]
  )

  // Advance to next card — resets to face-down, then swaps card after fade
  const handleNext = useCallback(() => {
    if (transitioning) return
    setTransitioning(true)
    setRevealed(false)
    setTimeout(() => {
      setIndex(i => (i + 1) % ENCOUNTER_CARDS.length)
      setTransitioning(false)
    }, 270) // slightly beyond the 250ms fade
  }, [transitioning])

  return (
    <div className={styles.wrap}>

      {/* ── Card — the sole interaction trigger ── */}
      <div
        className={`${styles.cardWrap} ${revealed ? styles['cardWrap--revealed'] : ''}`}
        onClick={handleCardClick}
        onKeyDown={handleKeyDown}
        role={revealed ? undefined : 'button'}
        tabIndex={revealed ? -1 : 0}
        aria-label={revealed ? undefined : `Draw a card`}
      >
        <Card
          frontSrc={card.frontSrc}
          frontAlt={card.alt}
          backSrc={card.backSrc}
          backAlt="AwakenArts card back"
          revealed={revealed}
          interactive={!revealed}
          variant="fade"
        />
      </div>

      {/* ── After reveal: title + one line, then a minimal "draw another" ── */}
      {revealed && (
        <div className={styles.meta}>
          <p className={styles.title}>{card.title}</p>
          {/* Render only when real copy is present — slot is ready */}
          {card.line && <p className={styles.line}>{card.line}</p>}
          {/* Minimal text trigger — not styled as a CTA */}
          <button
            onClick={handleNext}
            disabled={transitioning}
            style={{
              marginTop: '.75rem',
              background: 'none',
              border: 'none',
              padding: '0 0 2px',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '.65rem',
              fontWeight: 500,
              letterSpacing: '.2em',
              textTransform: 'uppercase',
              color: '#8B6914',
              borderBottom: '1px solid rgba(139,105,20,.3)',
              cursor: 'pointer',
            }}
            aria-label="Draw another card"
          >
            Draw another
          </button>
        </div>
      )}

    </div>
  )
}
