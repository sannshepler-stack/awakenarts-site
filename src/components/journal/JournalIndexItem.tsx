'use client'

// ─── JournalIndexItem ────────────────────────────────────────────────────────
// AwakenArts · /journal-prototype-v2
//
// Text-first Journal interface. A row in a symbolic index / commonplace
// book. Closed state shows only the symbol name with a quiet gold dot;
// the open state reveals a soft inset panel beneath it.
//
// Each item manages its own state independently — opening one does not
// close others. This matches the "literary archive" feel: you may have
// several entries open at once, the way a reader might leave multiple
// pages bookmarked.
//
// Voice constraints (per directive + AGENTS.md):
//   • No "draw" / "guidance" / "oracle" / "divination" language.
//   • Prompts are observational + invitational, never directive.
// ─────────────────────────────────────────────────────────────────────────────

import {
  useState,
  useCallback,
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
} from 'react'
import styles from './JournalIndexItem.module.css'
import type { JournalEntry as JournalEntryData } from './types'

interface JournalIndexItemProps {
  entry: JournalEntryData
}

export default function JournalIndexItem({ entry }: JournalIndexItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = useCallback(() => setIsOpen((v) => !v), [])
  const close = useCallback(() => setIsOpen(false), [])

  const handleTriggerKey = useCallback(
    (e: ReactKeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault()
        close()
      }
      // Enter and Space are already handled natively by <button>.
    },
    [isOpen, close]
  )

  const handleCloseClick = useCallback(
    (e: ReactMouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      close()
    },
    [close]
  )

  const panelId = `journal-panel-${entry.slug}`
  const rootClass = [styles.item, isOpen ? styles.open : '']
    .filter(Boolean)
    .join(' ')

  return (
    <li className={rootClass}>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={toggle}
        onKeyDown={handleTriggerKey}
      >
        <span className={styles.dot} aria-hidden="true" />
        <span className={styles.name}>{entry.name}</span>
        <span className={styles.glyph} aria-hidden="true">
          {isOpen ? 'Close' : 'Open'}
        </span>
      </button>

      <div
        id={panelId}
        className={styles.panel}
        aria-hidden={!isOpen}
        role="region"
        aria-label={`${entry.name} — reflection`}
      >
        <div className={styles.panelInner}>
          <div className={styles.panelBody}>
            <div className={styles.section}>
              <span className={styles.sectionLabel}>Orientation</span>
              <p className={styles.sectionText}>{entry.orientation}</p>
            </div>

            <div className={styles.section}>
              <span className={styles.sectionLabel}>Reflection</span>
              <p className={styles.sectionText}>{entry.reflectionPrompt}</p>
            </div>

            <div className={styles.section}>
              <span className={styles.sectionLabel}>Art Journal</span>
              <p className={styles.sectionText}>{entry.artPrompt}</p>
            </div>

            <div className={styles.closeRow}>
              <button
                type="button"
                className={styles.close}
                onClick={handleCloseClick}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
