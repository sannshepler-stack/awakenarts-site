import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import AtmosphericHeader from '@/components/AtmosphericHeader'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'

// The homepage explicitly sets its canonical to "/" so the trailing-slash
// and bare-domain forms collapse to a single URL in search results.
// Title and description are inherited from the root layout default.
export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: {
    url: '/',
  },
}

/* ── Page ──────────────────────────────────────────────── */
/*
 * Homepage — The Threshold
 *
 * Homepage Reformation Directive (June 2026): a coherent visual
 * journey that relies on the symbolic work itself rather than
 * explanation. "Show more. Explain less." Seven movements, each
 * progressively quieter, alternating orientation and encounter:
 *   1. Hero               — the emotional entrance; image dominant
 *   2. AwakenArts Intro    — pure orientation, one restrained line
 *   3. Collection          — navy architectural framework, cream
 *                            type, the complete uncropped cover
 *   4. Queen Ann Intro     — title page; name + a single quotation
 *   5. Queen Ann Encounter — still + poem as one literary spread
 *   6. Matthew 13:34       — the quiet, concluding reflection
 *   7. Footer
 * The former "Discover symbolic language" transition has been
 * removed entirely — the Queen Ann encounter now resolves directly
 * into Matthew 13:34 with no replacement band or divider.
 *
 * Editorial framework (June 2026 recalibration): the works are not
 * symbolic art accompanied by Christian reference — they extend a
 * literary mode Scripture itself already uses (parable, poetry,
 * image, figure, type). The homepage should read as an entry into
 * that tradition, not a mood.
 */

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* ── HERO — one unified section ─────────────────────────
          A single <section class="hero"> with exactly two children:
          .hero__text (left) and .hero__media (right). On desktop and
          tablet they sit side-by-side via grid; on mobile they stack,
          but remain within the same hero section — one shared
          background, no visual break.

          No overlay. No absolute positioning. No background-image.
          No heavy gradient. The image is a plain <img> inside a
          <picture> that switches variant per breakpoint, never
          cropped by CSS.
      ──────────────────────────────────────────────────────── */}
      <section className="hero" aria-label="Hero">

        <div className="hero__text">
          {/* Logo — primary identity placement. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/brand/logo-mixed.svg"
            alt="AwakenArts"
            className="hero-logo"
            width={500}
            height={170}
            loading="eager"
          />

          {/* Primary tagline — the studio's full identity phrase.
              Two spans let the second line indent for a balanced shape. */}
          <h1 className="hero-tagline">
            <span>When Language</span>
            <span>Shapes a Path</span>
          </h1>

          {/* Mission line — restates the AwakenArts USP directly beneath
              the headline, echoed again on /encounters and in the Poems
              preview section below. */}
          <p className="hero-mission">
            Discover symbolic language through image and poem.
          </p>

          <Link href="/encounters" className="hero-cta">
            Encounters <span className="arrow" aria-hidden="true">→</span>
          </Link>

          {/*
           * Secondary paths — quiet, understated, not button-like.
           * Encounters is now the primary CTA above, so it's dropped
           * here to avoid a duplicate link to the same destination.
           */}
          <nav className="hero-secondary" aria-label="Other paths">
            <Link href="/studio" className="hero-secondary-link">
              Studio
            </Link>
            <span className="hero-secondary-sep" aria-hidden="true">·</span>
            <Link href="/poems" className="hero-secondary-link">
              Poems
            </Link>
          </nav>
        </div>

        <div className="hero__media">
          <picture className="hero__picture">
            <source
              media="(max-width: 640px)"
              srcSet="/images/brand/queen-ann-hero-mobile.jpg"
            />
            <source
              media="(max-width: 1024px)"
              srcSet="/images/brand/queen-ann-hero-tablet.jpg"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/brand/queen-ann-hero-desktop.jpg"
              alt="Queen Ann — a painted figure standing within a symbolic narrative, central to the AwakenArts identity"
              className="hero__img"
              width={1600}
              height={1100}
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>

      </section>

      {/* ── AWAKENARTS INTRODUCTION ───────────────────────────────
          Section 2 — pure orientation, nothing more. This is the
          existing introductory line, relocated out of the Hero so
          the Hero itself stays purely visual ("avoid unnecessary
          introductory text"). Retained verbatim, not expanded —
          its only purpose is to orient the visitor before the
          Collection establishes the architectural framework below.
      ──────────────────────────────────────────────────────────── */}
      <section className="home-intro" aria-label="Introduction">
        <p className="home-intro__text">
          AwakenArts brings image and poem together in symbolic forms
          that invite recognition rather than explanation.
        </p>
      </section>

      {/* ── THE COLLECTION ───────────────────────────────────────
          Section 3 — the first major structural section of the
          Homepage. Presented on a navy field per the Homepage
          Reformation Directive: the darker ground establishes the
          Collection as AwakenArts' architectural framework and
          creates a clear visual transition before the featured
          symbolic work. Cream typography, restrained gold accents,
          the complete uncropped cover, generous surrounding space.
      ──────────────────────────────────────────────────────────── */}
      <section id="collection" className="home-coll-section" aria-labelledby="home-coll-heading">
        <div className="home-coll-inner">

          <div className="home-coll-cover">
            <Image
              src="/images/collection/collection-cover.jpg"
              alt="The Collection — a growing collection of symbolic works from AwakenArts"
              width={1122}
              height={1402}
              className="home-coll-cover__img"
              loading="lazy"
            />
          </div>

          <div className="home-coll-text">
            <p className="eyebrow">Collection</p>
            <h2 id="home-coll-heading">The Collection</h2>
            <p className="home-coll-sub">A growing collection of symbolic works.</p>
            <p className="home-coll-body">
              Each work pairs image and poem to reveal meaning through
              symbolic language — together forming a growing collection
              of encounters that invite reflection and recognition.
            </p>
            <Link href="/collection" className="home-coll-cta">
              Collection <span aria-hidden="true">→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ── QUEEN ANN: INTRODUCTION & ENCOUNTER ───────────────────
          A single flat cream field — no navy "stage," no rounded
          card — carrying three quiet movements, encountered rather
          than explained:
            1. Queen Ann Introduction — a title page. Name and a
               single short quotation from the poem, creating
               anticipation rather than explanation.
            2. Queen Ann Encounter — the portrait still and the poem
               as facing pages of one open book, equal partners.
            3. Matthew 13:34 (the foundation, placed last, quiet) —
               the encounter resolves directly into it; the former
               "Discover symbolic language" transition has been
               removed entirely, with no replacement band or divider.
          Revised per Susan's June 2026 review: the navy stage and
          rounded bottom corners read as an accidental dark strip and
          a "card" rather than a publication, so both have been
          removed — the cream begins directly where the Collection
          section's navy ends. See the POEMS / EDITIONS SHOWCASE
          block in globals.css.
      ──────────────────────────────────────────────────────────── */}
      <section className="poems-showcase-section" aria-label="Queen Ann">
        <div className="poems-showcase-inner">

          {/* 1. Queen Ann Introduction — the title page before the
              encounter. Name + a brief quotation from the poem, set
              as a continuing thought rather than a closed citation;
              no explanatory paragraph. */}
          <div className="poems-showcase-intro">
            <p className="poems-showcase-intro__title">Queen Ann</p>
            <p className="poems-showcase-intro__quote">
              when the night strikes with silver light&hellip;
            </p>
          </div>

          {/* 2. Queen Ann Encounter — the portrait still and the
              poem as facing pages of one open book: equal height,
              equal importance, identical top alignment, no captions.
              The imagery now performs the work previously done by
              explanatory text. */}
          <div className="poems-showcase-ann">
            <div className="poems-showcase-ann__frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/forms/queen-ann-still.png"
                alt="Queen Ann — a crowned figure in windswept hair and flowing gown, standing before a castle at sunset."
                loading="lazy"
              />
            </div>
            <div className="poems-showcase-ann__text">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/forms/ann-text-dark.png"
                alt="Queen Ann — the poem, rendered in concrete poetry form"
                className="poems-showcase-ann__poem-img"
                loading="lazy"
              />
            </div>
          </div>

        </div>

        {/* 3. Matthew 13:34 — the foundation. Placed last, quiet and
            secondary: the theological/literary grounding after the
            viewer has already encountered the image and poem. The
            encounter resolves directly into it — no transitional
            band between them. */}
        <div className="poems-showcase-foundation">
          <AtmosphericHeader
            src="/images/headers/biblical-foundation.jpg"
            alt="Sunrise over hills and a winding river, seen through a worn stone window — a threshold image."
            tall
          />
          <div className="poems-showcase-foundation__inner">
            <p className="hero-quote-text">
              He did not say anything to them without using a parable.
            </p>
            <p className="hero-quote-cite">Matthew 13:34</p>
            <p className="hero-quote-body">
              AwakenArts works within that same enduring tradition —
              bringing image and poem together as symbolic forms that
              invite recognition through attentive engagement, not
              explanation.
            </p>
            <p className="hero-quote-closing">
              Symbolic language invites recognition before explanation.
            </p>
          </div>
        </div>
      </section>

      {/* ── WAYFINDING BAND ───────────────────────────────────────
          Global Wayfinding Band Standard (2026-06-25): concludes the
          homepage experience and invites the visitor to continue
          elsewhere in the site. Replaces the former single "Explore
          the Poems" CTA — the band itself is now that invitation.
      ──────────────────────────────────────────────────────────── */}
      <WayfindingBand />
      <Footer />
    </>
  )
}
