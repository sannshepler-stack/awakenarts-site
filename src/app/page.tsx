import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import AtmosphericHeader from '@/components/AtmosphericHeader'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import formPanelStyles from '@/components/forms/FormPanel.module.css'

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
 * Alignment + Subtraction pass (May 2026):
 * 4-section structure: Hero → Studio preview → Poems preview →
 * The AwakenArts Collection. Encounters section removed — Encounters
 * functions through direct navigation, not homepage explanation.
 * Collection imagery removed — silhouettes belong to Studio.
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

          <p className="hero-subline">
            AwakenArts brings image and poem together in symbolic forms
            that invite recognition rather than explanation.
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

      {/* ── THE COLLECTION ───────────────────────────────────────
          Section 2 — immediately below the hero.
          The Collection answers: "What do I actually do with AwakenArts?"
          Cover image + purpose statement + CTA.
          Studio, Poems, Encounters follow as supporting destinations.
      ──────────────────────────────────────────────────────────── */}
      <section id="collection" className="home-coll-section" aria-labelledby="home-coll-heading">
        <div className="home-coll-inner">

          <div className="home-coll-cover">
            <Image
              src="/images/collection/collection-cover-light.png"
              alt="The Collection — a growing collection of symbolic works from AwakenArts"
              width={390}
              height={504}
              className="home-coll-cover__img"
              loading="lazy"
            />
          </div>

          <div className="home-coll-text">
            <p className="eyebrow">Collection</p>
            <h2 id="home-coll-heading">The Collection</h2>
            <p className="home-coll-sub">A growing collection of symbolic works.</p>
            <p className="home-coll-body">
              The Collection brings together the symbolic works of AwakenArts
              — each pairing image and poem to reveal meaning through symbolic
              language. Together they form a growing body of encounters that
              invite reflection, conversation, and deeper recognition.
            </p>
            <Link href="/collection" className="home-coll-cta">
              Collection <span aria-hidden="true">→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ── BIBLICAL FOUNDATION ───────────────────────────────────
          Section 3 — literary/theological grounding after the
          Collection (revised 2026-06-25). Purpose: establish that
          symbolic language is not an AwakenArts invention but an
          enduring literary tradition Scripture itself already uses.
          Grounding, not apologetics — literary, thoughtful, welcoming.
      ──────────────────────────────────────────────────────────── */}
      <AtmosphericHeader
        src="/images/headers/biblical-foundation.png"
        alt="Sunrise over hills and a winding river, seen through a worn stone window — a threshold image."
        flush
      />
      <section className="hero-quote-section hero-quote-section--headed" aria-label="Biblical foundation">
        <p className="hero-quote-text">
          &ldquo;He did not say anything to them without using a parable.&rdquo;
        </p>
        <p className="hero-quote-cite">Matthew 13:34</p>
        <p className="hero-quote-body">
          Throughout Scripture, truth is frequently communicated through
          figurative language rather than direct explanation. The Psalms,
          Proverbs, prophetic visions, and especially the parables of
          Christ reveal meaning through image, metaphor, symbol, and
          narrative.
        </p>
        <p className="hero-quote-body">
          AwakenArts intentionally works within this enduring literary
          tradition, bringing image and poem together as symbolic forms
          that invite recognition through attentive engagement rather
          than explanation alone.
        </p>
        <p className="hero-quote-closing">
          Symbolic language invites recognition before explanation.
        </p>
      </section>

      {/* ── LANGUAGE MADE VISIBLE ─────────────────────────────────
          Repurposed per Susan's "Preserve and Repurpose" directive
          (2026-06-25): no longer a navigation destination pointing to
          /studio — a contemplative pause that demonstrates, rather
          than explains, the AwakenArts USP (recognizing symbolic
          language through image and poem). Visitors stop, observe,
          read, recognize, then continue naturally into the next
          section. No CTA — the silhouette/poem pairing is the point.
      ──────────────────────────────────────────────────────────── */}
      <section className="studio-preview-section" aria-labelledby="studio-preview-heading">
        <div className="studio-preview-inner">

          <div className="studio-preview-header">
            <p className="eyebrow">Language Made Visible</p>
            <h2 id="studio-preview-heading">
              Language becomes<br />
              <em>a symbolic and visual form</em>
            </h2>
          </div>

          {/* Queen Ann — silhouette alongside her concrete poetry form.
              mix-blend-mode: screen dissolves the dark fill so the
              poem reads as clean white text against the navy field.
              Name now sits once, centered above the whole pairing,
              rather than as a per-image caption plus a closing line
              beneath the poem (removed 2026-06-25 — Susan: the closing
              line was adding wording at the bottom of the section). */}
          <p className="studio-ann-feature__label">Queen Ann</p>
          <div className="studio-ann-feature">
            <div className="studio-ann-feature__panel">
              <figure className={formPanelStyles.panel}>
                <div className={formPanelStyles.imageFrame}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className={formPanelStyles.image}
                    src="/images/forms/queen-ann-still.png"
                    alt="Queen Ann — atmospheric still: a windswept figure with form-silhouette overlay."
                    style={{ objectPosition: '60% center' }}
                    loading="lazy"
                  />
                </div>
              </figure>
            </div>
            <div className="studio-ann-feature__poem">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/forms/ann-text.png"
                alt="Queen Ann — the concrete poetry form; language taking the shape of the figure"
                className="studio-ann-feature__poem-img"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 4: LIBRARY PREVIEW ───────────────────────────
          Companion readings — literary and symbolic, not explanatory.
          After Collection.

          Threshold Header removed (2026-06-25, Susan: "clashing with
          the queen ann section") — the manuscript header previously
          sat here, directly beneath the Queen Ann feature above, and
          read as a second competing image moment back-to-back with
          it. .lib-preview-section's own padding-top (6rem desktop)
          carries the gap in its place. The same manuscript image
          remains the permanent threshold for the /poems page itself
          — see src/app/poems/page.tsx — this change only removes its
          homepage placement.
      ──────────────────────────────────────────────────────────── */}
      <section className="lib-preview-section" aria-labelledby="lib-preview-heading">
        <div className="lib-preview-inner">
          <p className="eyebrow">Poems</p>
          <h2 id="lib-preview-heading">
            Image and poem<br />
            <em>become symbolic language.</em>
          </h2>
          <p className="lib-preview-body">
            AwakenArts poems unite image and language in symbolic forms
            that invite recognition rather than explanation. Each work
            offers a glimpse into the language of symbol through carefully
            paired visual and poetic expression.
          </p>
          <p className="lib-preview-mission">
            Discover symbolic language through image and poem.
          </p>
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
