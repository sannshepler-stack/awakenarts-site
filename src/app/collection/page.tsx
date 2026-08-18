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
    'Explore the Figure Editions that provide the changing symbolic worlds of AwakenArts workshops.',
  alternates: { canonical: '/collection' },
  openGraph: {
    url: '/collection',
    title: 'The Collection — AwakenArts Figure Editions',
    description:
      'Each Figure Edition brings image, poem, story, and reflection into a distinct AwakenArts workshop world.',
    images: ['/images/brand/og-hero.jpg'],
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
 * textual breather before the page closes on its own CTA.
 *
 * Visual hierarchy, three tiers:
 *   1. Collection Banner   — the body of work (gallery wall)
 *   2. Edition Preview Sheets — the internal structure of each edition
 *   3. Individual Figure Pages (/editions/[slug]) — the detailed encounter
 *
 * Page structure (revised 2026-07-26, per Susan's "Architectural Update —
 * A Path of Recognition" directive):
 *   1. Collection — hero + banner, the visual introduction
 *   2. Current Editions — the product, encountered right after the
 *      Banner. Large, two rows of three, premium-publication
 *      presentation, data-driven (src/data/editions.ts)
 *   3. The Works are the Foundation (dark field) — the textual breather
 *      after the Editions; also carries a condensed "How the Collection
 *      is Used" tag list (previously its own cream section, eliminated
 *      as redundant) and no longer links to a non-existent /studio route
 *   4. CTA: Enter Encounters — the page's closing invitation
 *   5. Language (dark field) — "Works. Language. Method. Resources." —
 *      the page's closing beat
 *
 * 2026-07-26: step 4 used to be "A Path of Recognition," a numbered
 * five-step graphic explaining "how do these editions work?", with the
 * Enter Encounters CTA riding its visual wake. That graphic is retired
 * site-wide per Susan's directive — replaced by a new image-forward
 * section on the homepage (see src/app/page.tsx) — so this page no
 * longer duplicates it; Enter Encounters now follows The Works directly.
 *
 * Dark/light rhythm: cream (Hero, Banner, Editions) → dark (Works) →
 * cream (CTA) → dark (Language) — alternating beats rather than one
 * long graphic run or one long text run.
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
              src="/images/collection/collection-banner-02.png"
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
              Different symbolic worlds. One consistent workshop practice.
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
                  <span className="col-edition-card__action">
                    View Edition Preview <span aria-hidden="true">→</span>
                  </span>
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
                Each Figure Edition is an authored content world built from
                image, symbol, poem, story, and reflection. Within an
                AwakenArts workshop, that world gives participants something
                concrete to encounter while they notice how meaning takes
                shape.
              </p>
              <p>
                The workshop practice remains consistent while the Edition
                changes. This allows participants to return through new
                imagery, poetry, questions, and symbolic territory without
                simply repeating the same experience.
              </p>

              <div className="col-pub-uses">
                <p className="col-pub-uses__label">How the work continues</p>
                <div className="col-pub-uses__tags">
                  <span className="col-pub-uses__tag">Workshops</span>
                  <span className="col-pub-uses__tag">Conversation</span>
                  <span className="col-pub-uses__tag">Reflection</span>
                  <span className="col-pub-uses__tag">Journaling</span>
                  <span className="col-pub-uses__tag">Return</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 2026-07-26, per Susan's "Architectural Update — A Path of
            Recognition" directive: the numbered five-step graphic that
            used to sit here (section 5, "A Path of Recognition") is
            retired site-wide, replaced by a new image-forward section
            on the homepage (see src/app/page.tsx, "A PATH OF
            RECOGNITION"). This page no longer duplicates that content —
            per her design principle, each page contributes something
            unique rather than repeating the same material. */}

        {/* 6 ── CONTINUATION PATHS ───────────────────────────────────
            2026-07-26: previously followed A Path of Recognition
            directly; now follows The Works directly, since that section
            is gone.

            2026-08-13 activation pass: the Collection now hands visitors
            into two already-built parts of the New AwakenArts pathway —
            Symbols (encounter/notice) and Workshops (participation) —
            without changing any Edition's existing Acquire destination.
        ──────────────────────────────────────────────────────────── */}
        <section className="col-archive-cta">
          <div className="col-archive-cta__paths" aria-label="Continue exploring AwakenArts">
            <Link href="/symbols" className="col-archive-cta__link">
              Encounter the Symbols <span aria-hidden="true">→</span>
            </Link>
            <Link href="/workshops" className="col-archive-cta__link">
              Explore Workshops <span aria-hidden="true">→</span>
            </Link>
            <Link href="/encounters" className="col-archive-cta__link">
              Enter Encounters <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>


      </main>

      <WayfindingBand />
      <Footer />
    </>
  )
}
