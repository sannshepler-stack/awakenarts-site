// Encounters — index (2026-06-25 "Begin New Encounter Architecture").
//
// Replaces the earlier "Choose a Path" video threshold, which opened onto
// a list of figure-named Paths (Homeward Paths/Dragon/Bowls/Ballerina/
// Poppy). Per Susan's directive, Encounters are no longer figure-tied or
// built toward being completed teaching pages — they are atmospheric
// points of entry into the symbolic world of AwakenArts, and this is now
// the section's primary landing page.
//
// The five encounters below are listed in the locked sequence: Journey,
// The Deep, The Table, The Word, Continue. The figure-tied encounters
// (Dragon, Bowls/Vase, Queen, Butterfly, and the prototype formerly at
// /encounters/mermaid) are intentionally not linked here — set aside per
// the directive, not deleted. See AwakenArts_Site_Architecture.md.

import Link from 'next/link'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import styles from './encounters-index.module.css'

// Card kickers ("Encounter I", "Encounter II"...) were removed 2026-06-25
// per Susan: no numbering, no repeating the word "Encounter" — the
// sequence should read by title alone, and stay clean as more
// encounters are added later.
const ENCOUNTERS = [
  {
    slug: 'journey',
    title: 'Journey',
    mantra: 'I begin.',
    image: '/images/encounters/journey/journey-01-web.png',
    position: 'center 38%',
  },
  {
    slug: 'deep',
    title: 'The Deep',
    mantra: 'I encounter.',
    image: '/images/encounters/deep/deep-01-web.png',
    position: 'center',
  },
  {
    slug: 'table',
    title: 'The Table',
    mantra: 'I receive.',
    image: '/images/encounters/table/table-01-web.png',
    position: 'center 62%',
  },
  {
    slug: 'word',
    title: 'The Word',
    mantra: 'I listen.',
    image: '/images/encounters/word/word-01-web.png',
    position: 'center 55%',
  },
  {
    slug: 'continue',
    title: 'Continue',
    mantra: 'I walk on.',
    image: '/images/encounters/continue/continue-01-web.png',
    position: 'center 45%',
  },
] as const

export default function EncountersIndexPage() {
  return (
    <>
    <main className={styles.page}>
      <div className={styles.intro}>
        <Link href="/" className={styles.brand}>
          AWAKENARTS
        </Link>
        <p className={styles.eyebrow}>Encounters</p>
        <h1 className={styles.title}>Encounters</h1>
        <p className={styles.statementPrimary}>
          Every journey begins with a single encounter.
        </p>
        <p className={styles.statementSecondary}>
          Begin where you are. The work will meet you there.
        </p>
      </div>

      <nav className={styles.grid} aria-label="Encounters">
        {ENCOUNTERS.map((e) => (
          <Link
            key={e.slug}
            href={`/encounters/${e.slug}`}
            className={styles.card}
            style={{ backgroundImage: `url('${e.image}')`, backgroundPosition: e.position }}
          >
            <div className={styles.cardScrim} />
            <div className={styles.cardInner}>
              <p className={styles.cardTitle}>{e.title}</p>
              <p className={styles.cardMantra}>{e.mantra}</p>
            </div>
          </Link>
        ))}
      </nav>

      {/* Per Susan's "Global Page Architecture Standard" directive
          (2026-06-25): the text navigation that used to sit below the
          card grid ("Encounter I · Journey · Encounter II · The Deep ·
          ...") has been removed entirely, not just de-numbered — "Do
          not duplicate navigation by listing Encounter I/II/III...
          This text navigation should be removed... the cards already
          communicate [the sequence]." The cards are the navigation;
          generous breathing space now leads straight from the grid
          into the global Wayfinding Band, then the Standard Footer.

          2026-06-27 rebalance: that breathing space beneath the grid
          is now deliberately wider than the universal --band-gap rhythm
          (see .page in encounters-index.module.css) — a visual pause
          meant to let a visitor finish the five doorways before meeting
          the site's navigation, not just a content/band transition.

          2026-06-27 structural fix: WayfindingBand and Footer used to
          be nested *inside* this <main>, which meant .page's
          padding-bottom (the gap meant to sit between the grid and the
          band) actually landed after the Footer instead — invisible,
          since the Footer was already the page's last visible content.
          Moving both outside </main> so the padding renders where it
          was always meant to: as real space between the cards and the
          band, matching how every other page on the site structures
          Nav -> main content -> WayfindingBand -> Footer as siblings. */}
    </main>

    {/* 2026-06-27: "A Path of Recognition" explainer — the same revised
        graphic (recognition-revision.png) Susan put in place on the
        Collection page, reused here. Placed as a sibling cream band
        (not inside <main>) so it isn't constrained by .page's dark
        background — same reasoning as WayfindingBand/Footer above.
        Mirrors the Collection page's use of this graphic: a quiet
        "how this works" explainer placed right before the page hands
        off to the Wayfinding Band. See AwakenArts_Site_Architecture.md,
        "Free resource: The AwakenArts Encounter Journal." */}
    <section className={styles.recognition} aria-labelledby="encounters-recognition-heading">
      <div className={styles.recognitionInner}>
        <div className={styles.recognitionHeader}>
          <p className={styles.recognitionEyebrow}>How an Encounter Works</p>
          <h2 id="encounters-recognition-heading" className={styles.recognitionTitle}>
            A Path of Recognition
          </h2>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/collection/recognition-revision.png"
          alt="A Path of Recognition — five steps: Longing, Recognition, The Figure, The Word, The Path — the journey through which each Encounter is experienced"
          className={styles.recognitionImg}
          loading="lazy"
        />
      </div>
    </section>

    <WayfindingBand />
    <Footer />
    </>
  )
}
