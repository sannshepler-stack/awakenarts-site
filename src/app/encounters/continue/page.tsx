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
            2026-06-27: not an AwakenArts Echo — there's no real corpus
            line that fits, and Susan asked not to force/fabricate one.
            This is original reflective copy instead: no quotation marks,
            no .echoRef source line, since it isn't a quote and isn't
            attributed to anything. Reuses .echo purely for its italic/
            mist typography, matching the visual rhythm of the other four
            pages without claiming to be sourced material.
          */}
          <span className={`${cormorant.className} ${styles.echo}`}>
            Recognition does not end when the page does — it becomes part
            of what follows.
          </span>
        </div>

        <ScrollCue href="#continue" />
      </section>

      <ClosingStrip line="Continue exploring these themes through the AwakenArts Collection." />
    </main>
  )
}
