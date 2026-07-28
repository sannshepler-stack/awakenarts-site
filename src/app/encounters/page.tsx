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
import EmailGateDownload from '@/components/EmailGateDownload'
import styles from './encounters-index.module.css'

// Card kickers ("Encounter I", "Encounter II"...) were removed 2026-06-25
// per Susan: no numbering, no repeating the word "Encounter" — the
// sequence should read by title alone, and stay clean as more
// encounters are added later.
const ENCOUNTERS = [
  {
    // 2026-07-08: swapped to the revised open golden-path/horizon image
    // (journey-02-web.png), matching the individual Journey page hero
    // — the old image (journey-01-web.png) was an enclosed forest path,
    // no longer used anywhere in the redesigned Encounters. Position
    // matches the value tuned for this photo on /encounters/journey.
    slug: 'journey',
    title: 'Journey',
    mantra: 'I begin.',
    image: '/images/encounters/journey/journey-02-web.png',
    position: 'center 55%',
  },
  {
    // 2026-07-08: swapped to the revised warm coastal-path image
    // (deep-02-web.png), matching the individual Deep page hero — the
    // old image (deep-01-web.png, a darker shoreline figure) is no
    // longer used anywhere in the redesigned Encounters.
    slug: 'deep',
    title: 'The Deep',
    mantra: 'I encounter.',
    image: '/images/encounters/deep/deep-02-web.png',
    position: 'center 55%',
  },
  {
    // Table, Word, and Continue keep their existing -01-web images —
    // confirmed 2026-07-08 as already the current/"revised" set;
    // there is no -02 replacement for these three, per Susan.
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
      {/* 2026-07-26, per Susan's "Interior-Page Home Link" directive:
          Encounters (this index and its five individual pages) is the
          one part of the site built deliberately without the shared
          Nav component, for its own darker, immersive design -- which
          means it had no return-to-home control at all beyond the
          Wayfinding Band at the very bottom of the page. This restores
          one, using the same restrained treatment as the five
          individual Encounter pages' own Chrome brand mark (see
          src/app/encounters/_shared/EncounterHero.tsx /
          encounter.module.css .chromeBrand) so all six pages in this
          section read as one consistent, quiet "return home" language
          -- the actual AwakenArts logo/wordmark asset (not a text
          link), linked to /, aria-labelled for screen readers, sized
          small enough not to compete with the "Encounters" title
          below it. No separate "Home" text link is added alongside
          it, per her explicit instruction -- the mark itself is the
          entire control. */}
      <Link href="/" className={styles.brand} aria-label="Return to AwakenArts home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/brand/exports/AwakenArts-Logo-CompactHorizontal-OnNavy-1024.png"
          alt="AwakenArts"
          className={styles.brandLogo}
          width={1024}
          height={165}
        />
      </Link>

      <div className={styles.intro}>
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

      {/* 2026-06-27: free companion download — "The AwakenArts Encounter
          Journal" (built earlier this session, sitting unused at
          public/files/free/ until now). Email-gated download via Kit
          (KIT_API_KEY + KIT_FORM_ID, see src/app/api/subscribe/route.ts)
          — the download now only fires once Kit confirms the subscriber
          was actually created, per Susan's directive. See
          EmailGateDownload component. */}
      <div className={styles.journalCard}>
        <p className={styles.journalEyebrow}>Free Companion</p>
        <h2 className={styles.journalTitle}>The AwakenArts Encounter Journal</h2>
        <p className={styles.journalCopy}>
          A self-guided companion to the Encounters.
        </p>
        <EmailGateDownload
          pdfHref="/files/free/AwakenArts_Encounter_Journal.pdf"
          fileName="AwakenArts_Encounter_Journal.pdf"
          source="encounters-journal"
          itemLabel="the Journal"
          submitLabel="Send Me the Journal →"
          thanksText="Welcome to AwakenArts. Your Encounter Journal is downloading now."
        />
      </div>

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

    {/* 2026-07-26, per Susan's "Architectural Update — A Path of
        Recognition" directive: the numbered five-step graphic that used
        to sit here ("A Path of Recognition," recognition-revision.png)
        is retired site-wide, replaced by a new image-forward section on
        the homepage (see src/app/page.tsx, "A PATH OF RECOGNITION").
        This page no longer duplicates that content -- per her design
        principle, each page contributes something unique. */}

    {/* 2026-07-26, per Susan's navigation-ecosystem directive: the
        reciprocal invitation back to The Path, for visitors who arrive
        at Encounters first and later want the philosophy/framework
        behind what they've just experienced. Mirrors The Path's own
        closing pattern -- gold divider, then a link. Global classes,
        not CSS-module ones, so plain string classNames alongside
        `styles.*` above.

        2026-07-26, per Susan's "Primer CTA Refinement" directive: this
        moved off the old .primer-btn.hero-doorway system onto
        .home-coll-cta -- the same shared button (and Light-surface
        theme) as "Explore the Collection" / "Experience the
        Encounters." Title copy also changed, same directive: "The
        Path" -> "The AwakenArts Path" -- the nav says "The Path," the
        homepage doorway said "The Path," this button said "The Path,"
        and none of them named the actual destination; "The AwakenArts
        Path" distinguishes this specific page from the broader idea of
        "the path" used throughout the site.

        2026-07-26, per Susan's "AwakenArts Path Button" directive: the
        two-line title+subtitle card (.home-coll-cta--doorway, "The
        AwakenArts Path" / "An Introduction to AwakenArts") is replaced
        with a single-line button -- "do not preserve the current
        two-line card layout... reuse the same font treatment, text
        size and tracking, border weight, padding, button height, hover
        behavior, transition timing, and color tokens" as "Experience
        the Encounters" and the light-surface Collection/Primer CTA.
        Now bare .home-coll-cta.home-coll-cta--light-surface, no
        --doorway modifier, no subtitle, no arrow -- identical
        component and markup shape to those two buttons, just this
        link's own label and destination. The .primer-close-doorway
        width-capping wrapper this card needed (see globals.css) is no
        longer necessary either -- .home-coll-cta is inline-flex and
        sizes to its own content, so .primer-close's existing
        text-align:center is enough to center it, the same way it
        already centers .primer-close-divider above it.

        2026-07-26, per Susan's "Primer Section Refinement" directive:
        the button lost its subtitle last pass, but the context it
        carried ("An Introduction to AwakenArts") still needs to live
        somewhere -- "the explanatory language belongs in the page, not
        inside the button." .primer-close-intro adds a brief editorial
        line above the button rather than restoring a second line
        inside it. Per her "draw this language from the opening ideas
        of the Path... rather than inventing a new message," the
        wording here echoes /primer's own opening line (primer-about
        __body: "an illustrated introduction to the symbolic language,
        images, poetry, and reflective approach behind AwakenArts"),
        not a new message. */}
    <section className="path-intro-close">
      <div className="path-intro-close-divider" aria-hidden="true" />
      <p className="path-intro-close-intro">
        An introduction to the symbolic language, images, and poetry
        behind AwakenArts.
      </p>
      <Link href="/awakenarts-path" className="home-coll-cta home-coll-cta--light-surface">
        The AwakenArts Path
      </Link>
    </section>

    <WayfindingBand />
    <Footer />
    </>
  )
}
