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
          <p className={`${cormorant.className} ${styles.line}`}>
            Recognition is not a place to remain. It becomes a way to walk.
          </p>
          <span className={`${cormorant.className} ${styles.scripture}`}>
            &ldquo;The Lord will watch over your coming and going both now
            and forevermore.&rdquo;
            <span className={styles.ref}>Psalm 121:8</span>
          </span>
          {/*
            AwakenArts Echo — the notes say to omit rather than force one
            here if nothing speaks naturally of journey, hope, or faithful
            movement. Leaving it out for now; add one the same way Table's
            is set, with its source title, if Susan finds a line that fits.
          */}
        </div>

        <ScrollCue href="#continue" />
      </section>

      <ClosingStrip line="Continue exploring these themes through the AwakenArts Collection." />
    </main>
  )
}
