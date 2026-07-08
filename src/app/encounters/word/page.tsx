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
  title: 'The Word — Encounters',
  description:
    'Some words do more than inform us. They quietly become the language by which we learn to see. An atmospheric entry point into the symbolic language of AwakenArts.',
}

export default function WordEncounterPage() {
  return (
    <main className={inter.variable}>
      <section className={styles.hero}>
        <div
          className={styles.heroBg}
          style={{
            backgroundImage: "url('/images/encounters/word/word-01-web.png')",
            backgroundPosition: 'center 55%',
          }}
        />
        <div className={styles.heroScrim} />

        <Chrome />

        <div className={styles.heroInner}>
          <Eyebrow />
          <h1 className={`${cormorant.className} ${styles.title}`}>The Word</h1>
          {/* 2026-07-08, Encounters Revision: two opening statements
              replace the former single line, per Susan's directive. */}
          <p className={`${cormorant.className} ${styles.line}`}>
            Some words become trusted companions throughout life.
          </p>
          <p className={`${cormorant.className} ${styles.lineSecond}`}>
            The Word is such a companion.
          </p>
          {/* 2026-07-08: shortened with an ellipsis to fit the line,
              per Susan — standard practice for a truncated quotation. */}
          <span className={`${cormorant.className} ${styles.scripture}`}>
            &ldquo;Your word is a lamp to my feet&hellip;&rdquo;
            <span className={styles.ref}>Psalm 119:105</span>
          </span>
          {/* 2026-07-08: Swan Sings echo removed per Susan's directive —
              this page now carries a single companion (Scripture only). */}
        </div>
      </section>

      <ClosingStrip line="The word heard becomes a way to walk." />
    </main>
  )
}
