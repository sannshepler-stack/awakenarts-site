'use client'

// ─── JournalEntry ────────────────────────────────────────────────────────────
// AwakenArts · /journal-prototype
//
// A single Journal panel. Two states:
//   closed  → symbol name only, with a quiet accent rule
//   open    → orientation, reflection prompt, art-journal prompt
//
// Interaction:
//   • Click anywhere on the closed panel to open.
//   • Click the "close" affordance (or press Escape while focused) to close.
//   • Keyboard: Enter / Space toggle when the closed panel has focus.
//
// Voice constraints (per directive):
//   • No "draw" / "guidance" / "oracle" / "predict" language.
//   • Prompts are observational + invitational, never directive.
//   • Restraint over spectacle.
// ─────────────────────────────────────────────────────────────────────────────

import {
  useState,
  useCallback,
  useRef,
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
} from 'react'
import styles from './JournalEntry.module.css'
import type { JournalEntry as JournalEntryData } from './types'

interface JournalEntryProps {
  entry: JournalEntryData
}

export default function JournalEntry({ entry }: JournalEntryProps) {
  const [isOpen, setIsOpen] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  const handleRootClick = useCallback(() => {
    if (!isOpen) open()
  }, [isOpen, open])

  const handleRootKeyDown = useCallback(
    (e: ReactKeyboardEvent<HTMLDivElement>) => {
      if (!isOpen && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault()
        open()
        return
      }
      if (isOpen && e.key === 'Escape') {
        e.preventDefault()
        close()
      }
    },
    [isOpen, open, close]
  )

  const handleCloseClick = useCallback(
    (e: ReactMouseEvent<HTMLButtonElement>) => {
      // Prevent the click from bubbling to the root (which would re-open).
      e.stopPropagation()
      close()
    },
    [close]
  )

  const rootClass = [styles.entry, isOpen ? styles.open : '']
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={rootClass}
      role={isOpen ? 'article' : 'button'}
      tabIndex={isOpen ? -1 : 0}
      aria-expanded={isOpen}
      aria-label={
        isOpen
          ? `${entry.name} — reflection panel open`
          : `${entry.name} — activate to open reflection`
      }
      onClick={handleRootClick}
      onKeyDown={handleRootKeyDown}
    >
      <div className={styles.header}>
        <span className={styles.accent} aria-hidden="true" />
        <h2 className={styles.name}>{entry.name}</h2>
      </div>

      <div className={styles.body} aria-hidden={!isOpen}>
        <div className={styles.bodyInner}>
          <section className={styles.section}>
            <span className={styles.sectionLabel}>Orientation</span>
            <p className={styles.sectionText}>{entry.orientation}</p>
          </section>

          <section className={styles.section}>
            <span className={styles.sectionLabel}>Reflection</span>
            <p className={styles.sectionText}>{entry.reflectionPrompt}</p>
          </section>

          <section className={styles.section}>
            <span className={styles.sectionLabel}>Art Journal</span>
            <p className={styles.sectionText}>{entry.artPrompt}</p>
          </section>

          <div className={styles.closeRow}>
            <button
              ref={closeButtonRef}
              type="button"
              className={styles.close}
              onClick={handleCloseClick}
            >
              Close
            </button>
          </div>
        </div>
      </div>

      <span className={styles.hint} aria-hidden="true">
        Open
      </span>
    </div>
  )
}
