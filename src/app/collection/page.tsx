import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import ProtectedImage from '@/components/ProtectedImage'
import { editions } from '@/data/editions'

export const metadata: Metadata = {
  title: 'The Collection — AwakenArts',
  description:
    'The Collection is the primary resource and guide developed through AwakenArts — original visual-literary works, reflection prompts, discussion questions, and facilitator materials for workshops, retreats, and personal exploration.',
  alternates: { canonical: '/collection' },
  openGraph: {
    url: '/collection',
    title: 'The Collection — An AwakenArts Resource & Guide',
    description:
      'Original visual-literary works, methods, and materials for engaging the language of symbols through reflection, discussion, teaching, and exploration.',
  },
}

/*
 * The Collection page — revised June 2026 per Susan's "Website Revision —
 * First Pass" and "Collection Banner Integration" briefs, the "Homepage /
 * Collection Flow Revision" (2026-06-26), and same-day follow-up passes:
 * reordering The Works relative to the Editions, condensing "How the
 * Collection is Used" into The Works section, removing the dead "View
 * the works in the Studio" link (no /studio route exists), and — per
 * Susan's note that The Works used to sit between two heavy graphic
 * sections (Banner and Editions) and that breather was lost — resettling
 * The Works between Editions and Recognition instead, so it still
 * separates two image-heavy sections while also following the Editions
 * as requested.
 *
 * The Figure Editions are the primary product and must visually dominate
 * the page. Governing line: visitors should encounter the product before
 * the explanation — "These editions are beautiful, I want to open one"
 * comes first. The Banner and Editions run back-to-back as one visual
 * unit (gallery wall, then the product itself); The Works then gives a
 * textual breather before A Path of Recognition's graphic explains the
 * method; Language closes the page as a separate dark beat.
 *
 * Visual hierarchy, three tiers:
 *   1. Collection Banner   — the body of work (gallery wall)
 *   2. Edition Preview Sheets — the internal structure of each edition
 *   3. Individual Figure Pages (/editions/[slug]) — the detailed encounter
 *
 * Page structure (revised 2026-06-26, sixth pass):
 *   1. Collection — hero + banner, the visual introduction
 *   2. Current Editions — the product, encountered right after the
 *      Banner. Large, two rows of three, premium-publication
 *      presentation, data-driven (src/data/editions.ts)
 *   3. The Works are the Foundation (dark field) — the textual breather
 *      between the Editions and Recognition graphics; also carries a
 *      condensed "How the Collection is Used" tag list (previously its
 *      own cream section, eliminated as redundant) and no longer links
 *      to a non-existent /studio route
 *   4. A Path of Recognition — the method: "how do these editions
 *      work?" — follows the breather, before interest fades
 *   5. CTA: Enter Encounters — placed right after the Recognition
 *      graphic while that encounter-style imagery is still fresh
 *   6. Language (dark field) — "Works. Language. Method. Resources." —
 *      the page's closing beat
 *
 * Dark/light rhythm: cream (Hero, Banner, Editions) → dark (Works) →
 * cream (Recognition, CTA) → dark (Language) — alternating beats rather
 * than one long graphic run or one long text run.
 */

export default function CollectionPage() {
  return (
    <>
      <Nav />

      <main className="col-page">

        {/* 1 ── HERO ─────────────────────────────────────────────────
            Heading only. The Banner immediately below carries the
            visual weight and the introduction.
        ──────────────────────────────────────────────────────────── */}
        <section className="col-hero col-hero--trim">
          <div className="col-hero__inner">
            <p className="eyebrow col-hero__eyebrow">AwakenArts</p>
            <h1 className="col-hero__title">The Collection</h1>
          </div>
        </section>

        {/* 2 ── COLLECTION BANNER ───────────────────────────────────
            Demonstrates the Collection rather than describing it —
            a gallery wall of framed works. Appears immediately
            beneath the page heading, before any explanatory text.
        ──────────────────────────────────────────────────────────── */}
        <section className="col-banner" aria-label="The AwakenArts Collection">
          <div className="col-banner__inner">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/collection/collection-banner-1400.png"
              alt="The AwakenArts Collection — poetic encounters in shape, symbol, and story — five framed visual-literary works displayed as a gallery wall"
              className="col-banner__img"
              loading="eager"
            />
          </div>
        </section>

        {/* 3 ── CURRENT EDITIONS ────────────────────────────────────
            The product, encountered first — before any explanatory
            text. Presented as a premium publication grid — two rows
            of three, substantially enlarged from the prior small-
            thumbnail treatment, generous spacing, kicker + title
            beneath each. Images run through <ProtectedImage> (right-
            click/drag-save deterrence) and point at web-optimized
            JPEGs rather than the print-resolution PNGs the PDFs were
            rendered from. Driven by src/data/editions.ts so additional
            editions append here with no redesign.
        ──────────────────────────────────────────────────────────── */}
        <section className="col-editions-band" aria-labelledby="col-editions-heading">
          <div className="col-editions-band__inner">
            <p className="eyebrow">Editions</p>
            <h2 id="col-editions-heading">Current Editions</h2>
            <p className="col-editions-band__sub">
              Explore the completed figure editions.
            </p>
          </div>
        </section>

        <section className="col-editions" aria-label="Current Editions">
          <div className="col-editions__inner">
            <div className="col-editions__grid">
              {editions.map((edition) => (
                <Link
                  key={edition.slug}
                  href={`/editions/${edition.slug}`}
                  className="col-edition-card"
                >
                  <span className="col-edition-card__frame">
                    <ProtectedImage
                      src={edition.contactSheet}
                      alt={edition.contactSheetAlt}
                      className="col-edition-card__img"
                      loading="lazy"
                    />
                  </span>
                  <span className="col-edition-card__kicker">{edition.kicker}</span>
                  <span className="col-edition-card__title">{edition.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 4 ── THE WORKS (dark field) ──────────────────────────────
            Moved 2026-06-26 to sit directly after Current Editions and
            before A Path of Recognition — restoring the textual
            breather that used to separate the two heavy graphic
            sections (it previously did this job between the Banner and
            the Editions; now it does the same job between the Editions
            and the Recognition graphic).

            Combined 2026-06-26 with the former separate "Language"
            section (Works. Language. Method. Resources.) into one
            section — the two were adjacent dark fields with near-
            duplicate copy (both restating "reflection, discussion,
            teaching, workshops" in slightly different words under two
            separate headlines). Revised as a single copy pass: one
            eyebrow, one headline, two short paragraphs, one "How it's
            used" tag row, paired with the Collection cover image. No
            longer links to a non-existent /studio route.
        ──────────────────────────────────────────────────────────── */}
        <section className="col-works-foundation" aria-labelledby="col-works-heading">
          <div className="col-pub-inner">

            <div className="col-pub-cover">
              <Image
                src="/images/collection/collection-cover.jpg"
                alt="The Collection — An AwakenArts Resource & Guide"
                width={1122}
                height={1402}
                className="col-pub-cover__img"
                loading="lazy"
              />
            </div>

            <div className="col-pub-text">
              <p className="eyebrow">The Works</p>
              <h2 id="col-works-heading">
                The works are the foundation.<br />
                <em>Everything else grows from them.</em>
              </h2>
              <p>
                These original visual-literary pieces serve as points of entry
                into reflection, discussion, recognition, and inquiry — through
                image, symbol, poetry, and story, gathered into a growing body
                of symbolic encounters.
              </p>
              <p>
                Each Edition extends a single work into language, method, and
                resource — companion materials that carry its themes into
                conversation and continued exploration.
              </p>

              <div className="col-pub-uses">
                <p className="col-pub-uses__label">How it&rsquo;s used</p>
                <div className="col-pub-uses__tags">
                  <span className="col-pub-uses__tag">Reflection</span>
                  <span className="col-pub-uses__tag">Discussion</span>
                  <span className="col-pub-uses__tag">Teaching</span>
                  <span className="col-pub-uses__tag">Workshops</span>
                  <span className="col-pub-uses__tag">Journaling</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 5 ── A PATH OF RECOGNITION ────────────────────────────────
            Explanatory: answers "how do these editions work?" — after
            the editions have made their impression and the Works
            breather has given the page a moment of relief.
        ──────────────────────────────────────────────────────────── */}
        <section className="col-recognition" aria-labelledby="col-recognition-heading">
          <div className="col-recognition__inner">
            <div className="col-recognition__header">
              <p className="eyebrow">How the Editions Work</p>
              <h2 id="col-recognition-heading">A Path of Recognition</h2>
            </div>
            {/* 2026-06-27: swapped recognition-sample.png -> recognition-revision.png
                (Susan's revised crop). The revision drops the image's own
                embedded "A PATH OF RECOGNITION" title bar and bottom footer
                strip, which duplicated the heading already rendered above
                in .col-recognition__header — the revised crop is just the
                five steps themselves. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/collection/recognition-revision.png"
              alt="A Path of Recognition — five steps: Longing, Recognition, The Figure, The Word, The Path — the journey through which the Collection is experienced"
              className="col-recognition__img"
              loading="lazy"
            />
          </div>
        </section>

        {/* 6 ── CTA: ENTER ENCOUNTERS ────────────────────────────────
            Follows A Path of Recognition directly — the Recognition
            graphic (Longing, Recognition, The Figure, The Word, The
            Path) has just built interest in encounter-style imagery,
            so the invitation to enter Encounters lands here rather
            than waiting until after the closing dark passage below.
        ──────────────────────────────────────────────────────────── */}
        <section className="col-archive-cta">
          <Link href="/encounters" className="col-archive-cta__link">
            Enter Encounters <span aria-hidden="true">→</span>
          </Link>
        </section>


      </main>

      <WayfindingBand />
      <Footer />
    </>
  )
}
