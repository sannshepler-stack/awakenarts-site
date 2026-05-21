// ─── /journal-prototype-v2 — Page ────────────────────────────────────────────
// AwakenArts · The Journal — text-first prototype
//
// Hidden prototype. Not linked from navigation. Not indexed (see layout.tsx).
// Presents the same Journal entries as /journal-prototype, but as a
// text-first literary index instead of a card grid. Built for interface
// comparison — both prototypes coexist until a decision is made.
//
// Shared:
//   • data:  src/components/journal/journal-entries.ts
//   • type:  src/components/journal/types.ts
//   • page title + intro copy: identical to /journal-prototype
//
// New:
//   • component:  src/components/journal/JournalIndexItem.tsx
//   • visual:     parchment ground, narrow column, names as primary visual
// ─────────────────────────────────────────────────────────────────────────────

import JournalIndexItem from '@/components/journal/JournalIndexItem'
import { JOURNAL_ENTRIES } from '@/components/journal/journal-entries'
import styles from './page.module.css'

export default function JournalPrototypeV2Page() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Prototype · v2</span>
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
          <div className={styles.divider} aria-hidden="true" />
        </header>

        <ul className={styles.list} aria-label="Journal entries">
          {JOURNAL_ENTRIES.map((entry) => (
            <JournalIndexItem key={entry.slug} entry={entry} />
          ))}
        </ul>

        <p className={styles.footnote}>
          Prototype v2 · text-first variant · not yet linked from navigation
        </p>
      </div>
    </main>
  )
}
