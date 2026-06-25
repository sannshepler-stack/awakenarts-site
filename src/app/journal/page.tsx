// ─── /journal — Index Page ───────────────────────────────────────────────────
// AwakenArts · The Journal — archive gateway
//
// Restored as a primary navigation destination (2026-06-25). Standard
// <Nav /> replaces the old bespoke "← Home" topBar now that Journal sits
// alongside Encounters/Collection/Poems/About in primary navigation.
// Restrained literary gateway:
//
//   • Nav — standard site navigation
//   • centered identity block: eyebrow + title + lede + intro
//   • symbolic territory navigation
//   • footnote
//
// All Journal data is centralized in src/components/journal/.
// ─────────────────────────────────────────────────────────────────────────────

import Link from 'next/link'
import Nav from '@/components/Nav'
import TerritoryNav from '@/components/journal/TerritoryNav'
import WayfindingBand from '@/components/WayfindingBand'
import styles from './page.module.css'

export default function JournalIndexPage() {
  return (
    <>
      <Nav />

      {/* ── Dark Journal hero ──────────────────────────────────────── */}
      <main className={styles.page}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>The Journal</span>
          <h1 className={styles.title}>The Journal</h1>

          <p className={styles.lede}>
            Reflections and journaling prompts that walk alongside particular
            works in the Collection — a place to slow down, notice what comes
            up, and write it down before it passes.
          </p>
          <p className={styles.intro}>
            Each section below gathers entries connected to specific works and
            themes in the Collection — prompts and reflections meant to help
            you notice more, the longer you sit with them.
          </p>

          <span className={styles.territoriesLabel}>Reflection Paths</span>
          <TerritoryNav variant="gateway" />

          {/* Editorial identity — restrained gold, beneath the territory list */}
          <p className={styles.identityStatement}>
            A place to read, notice, and write — alongside the works that prompted it.
          </p>
        </div>
      </main>

      {/* ── Word · Image · Form — cream section ───────────────────────
          Contemplative invitation into symbolic form-making.
          Links to existing /experience route. No new systems.
      ──────────────────────────────────────────────────────────── */}
      <section className={styles.wordFormSection} aria-labelledby="word-form-heading">
        <div className={styles.wordFormInner}>
          <span className={styles.wordFormEyebrow}>Word · Image · Form</span>
          <h2 id="word-form-heading" className={styles.wordFormHeading}>
            What happens when<br />
            <em>words take shape</em>
          </h2>
          <p className={styles.wordFormBody}>
            Words arranged into a shape carry meaning differently than words
            read in a line — the shape itself becomes part of what&rsquo;s
            being said. Try it yourself: start with a word, a phrase, or a
            memory, and see what shows up once language has a body to move
            through.
          </p>

          {/* Word-form image examples — the actual visual content
              previously in Studio section 3 (Concrete Poems).
              butterfly-wordart.png and word-form-spiral.png */}
          <div className={styles.wordFormGrid}>
            <div className={styles.wordFormItem}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/experiences/butterfly-wordart.png"
                alt="Butterfly Word-Art — words arranged in the shape of a butterfly"
                className={styles.wordFormImg}
                loading="lazy"
              />
            </div>
            <div className={styles.wordFormItem}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/experiences/word-form-spiral.png"
                alt="Word-Form Spiral — words arranged in a spiral form"
                className={styles.wordFormImg}
                loading="lazy"
              />
            </div>
          </div>

          <div className={styles.ctaBlock}>
            <Link href="/experience" className={styles.wordFormLink}>
              Create a Word Form
            </Link>
            <p className={styles.wordFormSupport}>
              Begin with a word, memory, image, or phrase.
            </p>
          </div>

        </div>
      </section>

      <WayfindingBand />
    </>
  )
}
