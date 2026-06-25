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
          <p className={`${cormorant.className} ${styles.line}`}>
            A place prepared for us often becomes the place where we begin to
            recognize ourselves.
          </p>
          <span className={`${cormorant.className} ${styles.scripture}`}>
            &ldquo;You prepare a table before me in the presence of my
            enemies…&rdquo;
            <span className={styles.ref}>Psalm 23:5</span>
          </span>
          <span className={`${cormorant.className} ${styles.echo}`}>
            &ldquo;I sow my love with Heaven&rsquo;s care…&rdquo;
            <span className={styles.echoRef}>Angel Gardens</span>
          </span>
        </div>

        <ScrollCue />
      </section>

      <ClosingStrip line="Welcome is followed by listening." current="table" />
    </main>
  )
}
