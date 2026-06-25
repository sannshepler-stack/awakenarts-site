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
  title: 'The Deep — Encounters',
  description:
    'There are places within us that ordinary language cannot reach. An atmospheric entry point into the symbolic language of AwakenArts.',
}

export default function DeepEncounterPage() {
  return (
    <main className={inter.variable}>
      <section className={styles.hero}>
        <div
          className={styles.heroBg}
          style={{
            backgroundImage: "url('/images/encounters/deep/deep-01-web.png')",
            backgroundPosition: 'center',
          }}
        />
        <div className={styles.heroScrim} />

        <Chrome />

        <div className={styles.heroInner}>
          <Eyebrow />
          <h1 className={`${cormorant.className} ${styles.title}`}>The Deep</h1>
          <p className={`${cormorant.className} ${styles.line}`}>
            There are places within us that ordinary language cannot reach.
          </p>
          <span className={`${cormorant.className} ${styles.scripture}`}>
            &ldquo;Deep calls to deep at the roar of your waterfalls; all your
            waves and breakers have swept over me.&rdquo;
            <span className={styles.ref}>Psalm 42:7</span>
          </span>
        </div>

        <ScrollCue />
      </section>

      <ClosingStrip line="From the deep, a table is being prepared." current="deep" />
    </main>
  )
}
