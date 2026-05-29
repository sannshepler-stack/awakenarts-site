// ─── /journal-prototype — Page ───────────────────────────────────────────────
// AwakenArts · The Journal prototype
//
// Hidden prototype. Not linked from navigation. Not indexed (see layout.tsx).
// Presents the first ten Journal entries in a restrained, contemplative grid.
//
// Voice constraints (see AGENTS.md + directive):
//   • The Journal is NOT oracle cards, divination, therapy, or decoding.
//   • Prompts are observational + invitational, never directive.
//   • No "draw a card" language. No predictive framing.
// ─────────────────────────────────────────────────────────────────────────────

import JournalEntry from '@/components/journal/JournalEntry'
import { JOURNAL_ENTRIES } from '@/components/journal/journal-entries'
import styles from './page.module.css'

export default function JournalPrototypePage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Prototype</span>
          <h1 className={styles.title}>The Journal</h1>
          <p className={styles.lede}>
            Symbolic reflections and journal prompts inspired by recurring
            motifs, contemplative imagery, and the larger language of
            symbolic form.
          </p>
          <p className={styles.intro}>
            Each entry offers a brief symbolic orientation followed by a
            reflective or art-journaling prompt. The purpose is not to
            define the symbol, but to invite observation, imagination, and
            personal exploration.
          </p>
        </header>

        <div className={styles.grid} role="list" aria-label="Journal entries">
          {JOURNAL_ENTRIES.map((entry) => (
            <div key={entry.slug} role="listitem">
              <JournalEntry entry={entry} />
            </div>
          ))}
        </div>

        <p className={styles.footnote}>
          Prototype · not yet linked from navigation
        </p>
      </div>
    </main>
  )
}
