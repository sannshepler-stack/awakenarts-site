'use client'

// ─── EncounterCard ────────────────────────────────────────────────────────────
// AwakenArts · Encounter System · Archetype encounter, three movements
//
// This is not a card deck. There is no shuffling, no selection, no randomness.
// One archetype unfolds in three ordered movements — a contained experience.
//
// STATE MACHINE:
//   initial (back) → movement I → movement II → movement III → end
//
// INTERACTION RULES:
//   • The card itself is clickable ONLY in the initial state (back showing)
//   • First click begins the encounter: reveals movement I
//   • "Continue" advances through movements II and III
//   • After movement III: "Begin again" resets to initial state
//   • Only one card is ever visible — no grid, no spread, no deck
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useCallback } from 'react'
import Card from '@/components/Card'
import { DRAGON } from './archetype'
import styles from './EncounterCard.module.css'

export default function EncounterCard() {
  const [cardIndex,     setCardIndex]     = useState(0)       // 0 | 1 | 2
  const [revealed,      setRevealed]      = useState(false)   // false = back, true = front
  const [done,          setDone]          = useState(false)   // true after movement III
  const [transitioning, setTransitioning] = useState(false)

  const archetype = DRAGON
  const card      = archetype.cards[cardIndex]
  const isLast    = cardIndex === 2

  // ── Begin: first click on the card back → reveals movement I ─────────────
  // This is the only moment the card itself is an interaction trigger.
  const handleBegin = useCallback(() => {
    if (transitioning || revealed) return
    setRevealed(true)
  }, [transitioning, revealed])

  const handleBeginKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        handleBegin()
      }
    },
    [handleBegin]
  )

  // ── Continue: advance to next movement ───────────────────────────────────
  // On the last movement: transition to end state instead of advancing.
  // Between movements: card briefly shows back then auto-reveals next front.
  const handleContinue = useCallback(() => {
    if (transitioning) return
    if (isLast) {
      setDone(true)
      return
    }
    setTransitioning(true)
    setRevealed(false)                   // back shows briefly (breath between movements)
    setTimeout(() => {
      setCardIndex(i => i + 1)
      setRevealed(true)                  // auto-reveal: no second click required
      setTransitioning(false)
    }, 270)                              // just beyond the 250ms fade transition
  }, [transitioning, isLast])

  // ── Begin again: reset to initial state ──────────────────────────────────
  const handleBeginAgain = useCallback(() => {
    if (transitioning) return
    setTransitioning(true)
    setDone(false)
    setRevealed(false)
    setTimeout(() => {
      setCardIndex(0)
      setTransitioning(false)
    }, 270)
  }, [transitioning])

  return (
    <div className={styles.wrap}>

      {/* ── Card ─────────────────────────────────────────────────────────── */}
      {/* Clickable ONLY in initial state: back showing, cardIndex 0        */}
      <div
        className={`${styles.cardWrap} ${revealed ? styles['cardWrap--revealed'] : ''}`}
        onClick={revealed ? undefined : handleBegin}
        onKeyDown={revealed ? undefined : handleBeginKeyDown}
        role={revealed ? undefined : 'button'}
        tabIndex={revealed ? -1 : 0}
        aria-label={revealed ? undefined : 'Begin the encounter'}
      >
        <Card
          frontSrc={card.frontSrc}
          frontAlt={card.alt}
          backSrc={archetype.backSrc}
          backAlt="AwakenArts encounter"
          revealed={revealed}
          interactive={!revealed}
          variant="fade"
        />
      </div>

      {/* ── After reveal: title · line · action ──────────────────────────── */}
      {revealed && (
        <div className={styles.meta}>

          {/* Archetype title — renders only when real copy is present */}
          {archetype.title && (
            <p className={styles.title}>{archetype.title}</p>
          )}

          {/* Per-movement line — renders only when real copy is present */}
          {card.line && (
            <p className={styles.line}>{card.line}</p>
          )}

          {/* Action: "Continue" through the arc, then "Begin again" at end */}
          {done ? (
            <button
              onClick={handleBeginAgain}
              disabled={transitioning}
              className={styles.action}
              aria-label="Begin the encounter again"
            >
              Begin again
            </button>
          ) : (
            <button
              onClick={handleContinue}
              disabled={transitioning}
              className={styles.action}
              aria-label="Continue to the next movement"
            >
              Continue
            </button>
          )}

        </div>
      )}

    </div>
  )
}
