'use client'

// ─── FlipCard ────────────────────────────────────────────────────────────────
// AwakenArts · /deck page only
//
// Calm, mobile-safe flip interaction. Each card holds its own state —
// no global coordination, no cascading animations.
//
// Card back image lives at /public/images/cards/card-back.jpg
// Swap that file if the final back artwork changes.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useCallback, KeyboardEvent } from 'react'
import styles from './FlipCard.module.css'

const CARD_BACK_SRC = '/images/cards/backs/card-back.jpg'
const CARD_BACK_ALT = 'AwakenArts card back — ornamental design'

interface FlipCardProps {
  frontSrc: string
  frontAlt: string
  cardName?: string
}

export default function FlipCard({ frontSrc, frontAlt, cardName }: FlipCardProps) {
  // Default true = back visible. Click flips to false = front (artwork) visible.
  const [isFlipped, setIsFlipped] = useState(true)

  const toggle = useCallback(() => setIsFlipped(prev => !prev), [])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        toggle()
      }
    },
    [toggle]
  )

  const ariaLabel = cardName
    ? `${cardName} — ${isFlipped ? 'showing card back, activate to reveal artwork' : 'showing card front, activate to return'}`
    : `Card — ${isFlipped ? 'showing card back, activate to reveal artwork' : 'showing card front, activate to return'}`

  return (
    <div
      className={`${styles.scene} ${isFlipped ? styles.flipped : ''}`}
      onClick={toggle}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
      aria-label={ariaLabel}
    >
      <div className={styles.inner}>
        {/* Front */}
        <div className={styles.front} aria-hidden={isFlipped}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={frontSrc}
            alt={frontAlt}
            loading="lazy"
            draggable={false}
          />
        </div>

        {/* Back */}
        <div className={styles.back} aria-hidden={!isFlipped}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={CARD_BACK_SRC}
            alt={CARD_BACK_ALT}
            loading="lazy"
            draggable={false}
          />
        </div>
      </div>
    </div>
  )
}
