import type { Metadata } from 'next'
import {
  Chrome,
  Eyebrow,
  ClosingStrip,
  cormorant,
  inter,
  styles,
} from '../_shared/EncounterHero'

export const metadata: Metadata = {
  title: 'Journey — Encounters',
  description:
    'Every journey begins before we know where it leads. An atmospheric entry point into the symbolic language of AwakenArts.',
}

export default function JourneyEncounterPage() {
  return (
    <main className={inter.variable}>
      <section className={styles.hero}>
        <div
          className={styles.heroBg}
          style={{
            backgroundImage: "url('/images/encounters/journey/journey-02-web.png')",
            backgroundPosition: 'center 55%',
          }}
        />
        <div className={styles.heroScrim} />

        <Chrome />

        <div className={styles.heroInner}>
          <Eyebrow />
          <h1 className={`${cormorant.className} ${styles.title}`}>Journey</h1>
          {/* 2026-07-08, Encounters Revision: two opening statements
              replace the former single line, per Susan's directive. */}
          <p className={`${cormorant.className} ${styles.line}`}>
            Stepping beyond the familiar opens the way to new discoveries.
          </p>
          <p className={`${cormorant.className} ${styles.lineSecond}`}>
            Every journey is an invitation.
          </p>
          <span className={`${cormorant.className} ${styles.scripture}`}>
            &ldquo;By faith Abraham obeyed and went, even though he did not
            know where he was going.&rdquo;
            <span className={styles.ref}>Hebrews 11:8</span>
          </span>
        </div>
      </section>

      <ClosingStrip line="The path continues into stiller water." />
    </main>
  )
}
