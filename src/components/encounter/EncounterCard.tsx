'use client'

// ─── EncounterCard ────────────────────────────────────────────────────────────
// AwakenArts · Encounter System · Selection encounter
//
// A quiet selection that resolves into a single encounter.
// Three cards face-down. User chooses one. That one reveals.
//
// STATE MACHINE:
//   spread → (select) → selecting → encounter (revealed) → (begin again) → spread
//
// INTERACTION RULES:
//   • Spread: 3 cards face-down, equal, all selectable
//   • Selection: chosen card scales/centers, others fade out (300ms)
//   • Reveal: selected card crossfades back → front (250ms, auto after selection)
//   • Encounter: single card visible, title beneath, "Begin again" below
//   • "Begin again": resets to 3-card spread
//   • No sequence, no progression, no deck logic
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useCallback } from 'react'
import Card from '@/components/Card'
import { HOUSE } from './archetype'
import styles from './EncounterCard.module.css'

type Phase = 'spread' | 'selecting' | 'encounter'

export default function EncounterCard() {
  const [phase,         setPhase]         = useState<Phase>('spread')
  const [selected,      setSelected]      = useState<number | null>(null)
  const [revealed,      setRevealed]      = useState(false)
  const [transitioning, setTransitioning] = useState(false)

  const archetype = HOUSE

  // ── Select: user clicks one of the three spread cards ────────────────────
  // 1. Mark selected → CSS immediately fades out others, scales chosen card
  // 2. After selection animation (320ms): switch to encounter + reveal
  const handleSelect = useCallback((index: number) => {
    if (transitioning || phase !== 'spread') return
    setSelected(index)
    setPhase('selecting')
    setTransitioning(true)
    setTimeout(() => {
      setPhase('encounter')
      setRevealed(true)
      setTransitioning(false)
    }, 320) // matches selection CSS transition
  }, [transitioning, phase])

  const handleSelectKeyDown = useCallback(
    (index: number) => (e: React.KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        handleSelect(index)
      }
    },
    [handleSelect]
  )

  // ── Begin again: reset to spread ─────────────────────────────────────────
  const handleBeginAgain = useCallback(() => {
    if (transitioning) return
    setTransitioning(true)
    setRevealed(false)
    setTimeout(() => {
      setPhase('spread')
      setSelected(null)
      setTransitioning(false)
    }, 300)
  }, [transitioning])

  // ── Spread phase ──────────────────────────────────────────────────────────
  if (phase === 'spread' || phase === 'selecting') {
    return (
      <div className={styles.spread}>
        {archetype.cards.map((card, i) => {
          const isSelected   = selected === i
          const isDismissed  = selected !== null && selected !== i

          return (
            <div
              key={card.id}
              className={[
                styles.spreadCard,
                isSelected  ? styles['spreadCard--selected']  : '',
                isDismissed ? styles['spreadCard--dismissed'] : '',
              ].join(' ')}
              onClick={() => handleSelect(i)}
              onKeyDown={handleSelectKeyDown(i)}
              role="button"
              tabIndex={phase === 'spread' ? 0 : -1}
              aria-label={`Select card ${i + 1}`}
              aria-disabled={phase === 'selecting'}
            >
              <Card
                frontSrc={card.frontSrc}
                frontAlt={card.alt}
                backSrc={archetype.backSrc}
                backAlt="AwakenArts encounter"
                revealed={false}
                interactive={phase === 'spread'}
                variant="fade"
              />
            </div>
          )
        })}
      </div>
    )
  }

  // ── Encounter phase ───────────────────────────────────────────────────────
  const card = archetype.cards[selected!]

  return (
    <div className={styles.encounter}>

      {/* Single card — centered, larger than spread size */}
      <div className={styles.encounterCard}>
        <Card
          frontSrc={card.frontSrc}
          frontAlt={card.alt}
          backSrc={archetype.backSrc}
          backAlt="AwakenArts encounter"
          revealed={revealed}
          variant="fade"
        />
      </div>

      {/* Title + action — fade in after reveal */}
      {revealed && (
        <div className={styles.meta}>
          <p className={styles.title}>{archetype.title}</p>
          {card.line && <p className={styles.line}>{card.line}</p>}
          <button
            onClick={handleBeginAgain}
            disabled={transitioning}
            className={styles.action}
            aria-label="Begin again"
          >
            Begin again
          </button>
        </div>
      )}

    </div>
  )
}
