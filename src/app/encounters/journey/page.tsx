import type { Metadata } from 'next'
import {
  Chrome,
  Eyebrow,
  ScrollCue,
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
            backgroundImage: "url('/images/encounters/journey/journey-01-web.png')",
            backgroundPosition: 'center 38%',
          }}
        />
        <div className={styles.heroScrim} />

        <Chrome />

        <div className={styles.heroInner}>
          <Eyebrow />
          <h1 className={`${cormorant.className} ${styles.title}`}>Journey</h1>
          <p className={`${cormorant.className} ${styles.line}`}>
            Every journey begins before we know where it leads.
          </p>
          <span className={`${cormorant.className} ${styles.scripture}`}>
            &ldquo;By faith Abraham obeyed and went, even though he did not
            know where he was going.&rdquo;
            <span className={styles.ref}>Hebrews 11:8</span>
          </span>
        </div>

        <ScrollCue />
      </section>

      <ClosingStrip line="The path continues into stiller water." />
    </main>
  )
}
