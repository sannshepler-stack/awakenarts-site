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
          <p className={`${cormorant.className} ${styles.line}`}>
            Some words do more than inform us. They quietly become the
            language by which we learn to see.
          </p>
          <span className={`${cormorant.className} ${styles.scripture}`}>
            &ldquo;Your word is a lamp to my feet and a light to my
            path.&rdquo;
            <span className={styles.ref}>Psalm 119:105</span>
          </span>
          <span className={`${cormorant.className} ${styles.echo}`}>
            &ldquo;She gave a warning.
            <br />
            You see what you believe.&rdquo;
            <span className={styles.echoRef}>Swan Sings</span>
          </span>
        </div>

        <ScrollCue />
      </section>

      <ClosingStrip line="The word heard becomes a way to walk." current="word" />
    </main>
  )
}
