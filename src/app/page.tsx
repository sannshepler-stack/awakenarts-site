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
 * explanation. "Show more. Explain less."
 *
 * 2026-06-28 Final Editorial Refinement, per Susan: "The homepage is
 * no longer introducing a website. It is introducing a body of
 * published work." This is the closing editorial pass before the
 * Publishing Platform phase — six movements, each progressively
 * quieter:
 *   1. Hero               — the emotional entrance; image dominant
 *   2. Collection          — navy architectural framework, cream
 *                            type, the complete uncropped cover
 *   3. Queen Ann Intro     — title page; name + a single quotation
 *   4. Queen Ann Encounter — still + poem as one literary spread
 *   5. Matthew 13:34       — the quiet theological threshold,
 *                            resolving into an invitation to
 *                            /foundation rather than a closed
 *                            statement
 *   6. Footer
 * The former standalone "AwakenArts Introduction" section (a single
 * isolated line between Hero and Collection) has been removed
 * entirely — it repeated the Matthew section's own explanatory
 * paragraph almost verbatim and served no structural purpose on its
 * own. The former "Discover symbolic language" transition was
 * already removed; the Queen Ann encounter resolves directly into
 * Matthew 13:34 with no replacement band or divider.
 *
 * Editorial framework (June 2026 recalibration): the works are not
 * symbolic art accompanied by Christian reference — they extend a
 * literary mode Scripture itself already uses (parable, poetry,
 * image, figure, type). The homepage should read as an entry into
 * that tradition, not a mood. By the time a visitor reaches the
 * footer, they should understand what AwakenArts is, why it exists,
 * the Christian foundation it is offered from, and where to continue
 * — without further explanation. /foundation answers the question
 * Matthew 13:34 naturally raises; the homepage now invites that next
 * step instead of closing the thought itself.
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

          {/* Editorial Invitations — the hero's two primary entry points
              into AwakenArts (locked 2026-06-28, "Hero Typographic
              Hierarchy" directive). Replaces the former single small
              "Encounters →" CTA and the Studio/Poems secondary nav.
              Per Susan: the hero no longer says "here are some pages" —
              it says "experience the work" and "explore the body of
              work." Two heading-weight invitations, each with its own
              teaser line, not small navigation links. See
              AwakenArts_Site_Architecture.md. */}
          <div className="hero-invitations">
            <div className="hero-invitation">
              <Link href="/encounters" className="hero-invitation__title">
                Enter the Encounters <span className="arrow" aria-hidden="true">→</span>
              </Link>
              <p className="hero-invitation__teaser">
                Guided symbolic encounters through image, poem, and
                Scripture.
              </p>
            </div>
            <div className="hero-invitation">
              <Link href="/collection" className="hero-invitation__title">
                Explore the Collection <span className="arrow" aria-hidden="true">→</span>
              </Link>
              <p className="hero-invitation__teaser">
                Discover the growing library of AwakenArts Figure Editions.
              </p>
            </div>
          </div>
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

      {/* ── THE COLLECTION ───────────────────────────────────────
          Section 2 — the first major structural section of the
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
            {/* 2026-06-28 Final Editorial Refinement: the former closed
                statement ("Symbolic language invites recognition before
                explanation.") is replaced with an invitation forward —
                continuity, not promotion. This is the homepage's one
                quiet point of departure toward /foundation. */}
            <Link href="/foundation" className="hero-quote-closing">
              Read the Foundation of AwakenArts <span aria-hidden="true">→</span>
            </Link>
            <p className="home-foundation-credo">
              Christ is the center. Scripture is the authority.
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
