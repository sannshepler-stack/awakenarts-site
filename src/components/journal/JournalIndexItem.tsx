'use client'

// ─── JournalIndexItem ────────────────────────────────────────────────────────
// AwakenArts · The Journal · text-first row
//
// A row in a symbolic index / commonplace book. Two render modes:
//
//   • Ready entry   — has orientation / reflection / art prompts.
//                     Closed state shows the symbol name with a quiet
//                     gold dot; open state reveals a soft inset panel.
//
//   • Planned entry — only the name is known so far. Rendered as a
//                     non-interactive row at lower opacity so the
//                     visitor sees the intended shape of the territory
//                     without expecting an interaction that isn't ready.
//
// Each ready item manages its own state independently — opening one
// does not close others. This matches the "literary archive" feel: you
// may have several entries open at once.
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
import { isEntryReady, type JournalEntry as JournalEntryData } from './types'

interface JournalIndexItemProps {
  entry: JournalEntryData
}

export default function JournalIndexItem({ entry }: JournalIndexItemProps) {
  // ─── Planned entry — name only, non-interactive ─────────────────────────
  if (!isEntryReady(entry)) {
    return (
      <li
        className={`${styles.item} ${styles.itemPlanned}`}
        aria-label={`${entry.name} — entry in preparation`}
      >
        <div className={styles.triggerStatic}>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.name}>{entry.name}</span>
          <span className={styles.plannedHint} aria-hidden="true">
            soon
          </span>
        </div>
      </li>
    )
  }

  // ─── Ready entry — interactive reveal ───────────────────────────────────
  // (All prompt fields are present here per isEntryReady; assertion is
  //  safe because the type is narrowed by intent, not by TS — read access
  //  is below.)
  return <ReadyEntry entry={entry} />
}

// ─── Ready-entry subcomponent ───────────────────────────────────────────────
// Split into its own component so the useState hook is only mounted when
// the entry actually has prompts to reveal.
function ReadyEntry({ entry }: { entry: JournalEntryData }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = useCallback(() => setIsOpen((v) => !v), [])
  const close = useCallback(() => setIsOpen(false), [])

  const handleTriggerKey = useCallback(
    (e: ReactKeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault()
        close()
      }
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
