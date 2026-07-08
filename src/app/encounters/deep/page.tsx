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
            backgroundImage: "url('/images/encounters/deep/deep-02-web.png')",
            backgroundPosition: 'center 55%',
          }}
        />
        <div className={styles.heroScrim} />

        <Chrome />

        <div className={styles.heroInner}>
          <Eyebrow />
          <h1 className={`${cormorant.className} ${styles.title}`}>The Deep</h1>
          {/* 2026-07-08, Encounters Revision: two opening statements
              replace the former single line, per Susan's directive. */}
          <p className={`${cormorant.className} ${styles.line}`}>
            Some of life&rsquo;s most important discoveries are made within.
          </p>
          <p className={`${cormorant.className} ${styles.lineSecond}`}>
            Our inner world quietly shapes the way we experience everyday
            life.
          </p>
          {/* 2026-07-08: Scripture replaced (Psalm 42:7 → Proverbs 20:5)
              per Susan's directive. */}
          <span className={`${cormorant.className} ${styles.scripture}`}>
            &ldquo;The purposes of a person&rsquo;s heart are deep waters, but
            one who has insight draws them out.&rdquo;
            <span className={styles.ref}>Proverbs 20:5</span>
          </span>
        </div>
      </section>

      <ClosingStrip line="From the deep, a table is being prepared." />
    </main>
  )
}
