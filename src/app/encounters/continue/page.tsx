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
  title: 'Continue — Encounters',
  description:
    'Recognition is not a place to remain. It becomes a way to walk. The closing entry point into the symbolic language of AwakenArts.',
}

export default function ContinueEncounterPage() {
  return (
    <main className={inter.variable}>
      <section className={styles.hero}>
        <div
          className={styles.heroBg}
          style={{
            backgroundImage: "url('/images/encounters/continue/continue-01-web.png')",
            backgroundPosition: 'center 45%',
          }}
        />
        <div className={styles.heroScrim} />

        <Chrome />

        <div className={styles.heroInner}>
          <Eyebrow />
          <h1 className={`${cormorant.className} ${styles.title}`}>Continue</h1>
          {/* 2026-07-08, Encounters Revision: two opening statements
              replace the former single line, per Susan's directive. */}
          <p className={`${cormorant.className} ${styles.line}`}>
            Every new day is a new beginning.
          </p>
          <p className={`${cormorant.className} ${styles.lineSecond}`}>
            There is always more to learn, more ways to grow, and more to
            discover.
          </p>
          {/* 2026-07-08: pared down to one quote per Encounter page —
              the C.S. Lewis companion quote is removed. Psalm 121:8
              stands alone as this page's single Christian companion,
              matching Journey, Deep, and Word. */}
          <span className={`${cormorant.className} ${styles.scripture}`}>
            &ldquo;The Lord will watch over your coming and going both now
            and forevermore.&rdquo;
            <span className={styles.ref}>Psalm 121:8</span>
          </span>
        </div>
      </section>

      <ClosingStrip line="Continue exploring these themes through the AwakenArts Collection." />
    </main>
  )
}
