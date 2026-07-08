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
  title: 'The Table — Encounters',
  description:
    'A place prepared for us often becomes the place where we begin to recognize ourselves. An atmospheric entry point into the symbolic language of AwakenArts.',
}

export default function TableEncounterPage() {
  return (
    <main className={inter.variable}>
      <section className={styles.hero}>
        <div
          className={styles.heroBg}
          style={{
            backgroundImage: "url('/images/encounters/table/table-01-web.png')",
            backgroundPosition: 'center 62%',
          }}
        />
        <div className={styles.heroScrim} />

        <Chrome />

        <div className={styles.heroInner}>
          <Eyebrow />
          <h1 className={`${cormorant.className} ${styles.title}`}>The Table</h1>
          {/* 2026-07-08, Encounters Revision: two opening statements
              replace the former single line, per Susan's directive. */}
          <p className={`${cormorant.className} ${styles.line}`}>
            Some moments invite us to stop striving and simply receive.
          </p>
          <p className={`${cormorant.className} ${styles.lineSecond}`}>
            What we need most is often waiting for us.
          </p>
          {/* 2026-07-08: per Susan's directive, Psalm 23:5 and the Angel
              Gardens echo are both removed. The Swindoll quote becomes
              this page's single Christian companion — given the primary
              (.scripture) treatment since it is now the only quote on
              the page. */}
          <span className={`${cormorant.className} ${styles.scripture}`}>
            &ldquo;We must cease striving and trust God to provide what He
            thinks is best and in whatever time He chooses to make it
            available.&rdquo;
            <span className={styles.ref}>Charles R. Swindoll</span>
          </span>
        </div>
      </section>

      <ClosingStrip line="Welcome is followed by listening." />
    </main>
  )
}
