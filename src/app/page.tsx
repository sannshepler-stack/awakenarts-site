import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FooterSocial from '@/components/FooterSocial'
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
 * 4-section structure: Hero → Studio preview → Library preview →
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
          <Image
            src="/images/brand/logo.png"
            alt="AwakenArts"
            width={700}
            height={336}
            className="hero-logo"
            priority
          />

          {/* Primary tagline — the studio's full identity phrase.
              Two spans let the second line indent for a balanced shape. */}
          <h1 className="hero-tagline">
            <span>When Language</span>
            <span>Shapes a Path</span>
          </h1>

          <p className="hero-subline">
            AwakenArts is a body of visual-poetic works shaped through
            image, poetic structure, and figurative language.
          </p>

          <p className="hero-sub">
            The forms draw from longstanding traditions of parable,
            poetry, symbolic narrative, and image-bearing meaning found
            throughout Scripture and Christian literary expression.
          </p>

          <Link href="/collection" className="hero-cta">
            Enter the Collection <span className="arrow" aria-hidden="true">→</span>
          </Link>

          {/*
           * Secondary paths — quiet, understated, not button-like.
           * Encounters repositioned as secondary experiential layer.
           */}
          <nav className="hero-secondary" aria-label="Other paths">
            <Link href="/encounters" className="hero-secondary-link">
              Encounters
            </Link>
            <span className="hero-secondary-sep" aria-hidden="true">·</span>
            <Link href="/studio" className="hero-secondary-link">
              Studio
            </Link>
            <span className="hero-secondary-sep" aria-hidden="true">·</span>
            <Link href="/library" className="hero-secondary-link">
              Library
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

      {/* ── HERO QUOTE ─── */}
      <section className="hero-quote-section" aria-label="Opening statement">
        <p className="hero-quote-text">
          &ldquo;He did not say anything to them without using a parable.&rdquo;
        </p>
        <p className="hero-quote-cite">Matthew 13:34</p>
      </section>

      {/* ── SCRIPTURE'S OWN LANGUAGE ──────────────────────────────
          Secondary section — grounds the work in Scripture's own
          poetic and figurative mode before introducing the Studio.
      ──────────────────────────────────────────────────────────── */}
      <section className="hero-secondary-section" aria-label="The language of Scripture">
        <div className="hero-secondary-section__inner">
          <p>The language of Scripture is often poetic before it is explanatory.</p>
          <p>
            From the Psalms and Proverbs to prophetic imagery and the
            parables of Christ, Biblical language repeatedly carries
            meaning through symbol, metaphor, narrative, and visual form.
          </p>
          <p>
            AwakenArts approaches visual-poetic structure within that
            broader literary tradition: works in which image and language
            participate together in meaning.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: STUDIO PREVIEW ────────────────────────────
          Single symbolic threshold image — Queen Ann only.
          Homepage is the invitation; the Studio holds the full collection.
      ──────────────────────────────────────────────────────────── */}
      <section className="studio-preview-section" aria-labelledby="studio-preview-heading">
        <div className="studio-preview-inner">

          <div className="studio-preview-header">
            <p className="eyebrow">From the Collection</p>
            <h2 id="studio-preview-heading">
              Language becomes<br />
              <em>a symbolic and visual form</em>
            </h2>
          </div>

          {/* Single Queen Ann presentation — one autoplaying, looping
              video only (no still-image layer, no placeholder). This is
              the sole Queen Ann media block in this section; the larger
              collection of forms unfolds inside the Studio. */}
          <div className="studio-preview-panels studio-preview-panels--single">
            <figure className={formPanelStyles.panel}>
              <div className={formPanelStyles.imageFrame}>
                <video
                  className={formPanelStyles.image}
                  src="/videos/forms/queen-ann-motion.mp4"
                  style={{ objectPosition: '60% center' }}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-hidden="true"
                />
              </div>
              <figcaption className={formPanelStyles.name}>Queen Ann</figcaption>
            </figure>
          </div>

          <p className="studio-preview-cta">
            <Link href="/studio" className="text-link">
              Enter the Studio <span aria-hidden="true">→</span>
            </Link>
          </p>

        </div>
      </section>

      {/* ── SECTION 3: COLLECTION ────────────────────────────────
          Literary-symbolic threshold. Featured work + supporting tier.
          Queen Ann: cinematic, path-oriented, emotionally immediate.
          Ballerina + Kings: supporting — restrained, collectible.
      ──────────────────────────────────────────────────────────── */}
      <section className="coll-section" aria-labelledby="coll-heading">
        <div className="coll-inner">

          <div className="coll-header">
            <p className="eyebrow">The Collection</p>
            <h2 id="coll-heading">
              Works<br />
              <em>from the Collection</em>
            </h2>
          </div>

          {/* ── Ballerina — single collection image ── */}
          <div className="coll-single">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/collection/ballerina-collection.png"
              alt="Ballerina — AwakenArts Collection"
              className="coll-single__img"
              loading="eager"
            />
          </div>

          <div className="coll-invitation">
            <p className="coll-invitation__text coll-invitation__text--lead">
              A queen between kingdoms. A figure beneath the surface.
              <br />
              A dragon turned inward.
            </p>
            <p className="coll-invitation__text">
              The works of AwakenArts are shaped through image, symbolic
              form, and figurative language.
            </p>
            <Link href="/collection" className="coll-invitation__link">
              The Collection <span aria-hidden="true">→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ── SECTION 4: LIBRARY PREVIEW ───────────────────────────
          Companion readings — literary and symbolic, not explanatory.
          After Collection.
      ──────────────────────────────────────────────────────────── */}
      <section className="lib-preview-section" aria-labelledby="lib-preview-heading">
        <div className="lib-preview-inner">
          <p className="eyebrow">Library</p>
          <h2 id="lib-preview-heading">
            Readings<br />
            <em>grounded in image, symbol, and figurative language.</em>
          </h2>
          <p className="lib-preview-body">
            The Library gathers writings on Biblical imagery, parable,
            poetry, allegory, and literary-symbolic form. These readings
            help establish the language beneath AwakenArts: works shaped
            through image, meaning, and visual-poetic structure.
          </p>
          <p className="lib-preview-cta">
            <Link href="/library" className="text-link">
              Enter the Library <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      </section>

      {/* ── FOOTER ─── */}
      <footer className="site-footer" id="about" aria-label="Site footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label="AwakenArts home">
              <Image
                src="/images/brand/logo.png"
                alt="AwakenArts"
                width={700}
                height={336}
                className="footer-logo"
              />
            </Link>
            <p>
              A collection of works that join image and language the way
              Scripture itself so often does — through parable, poetry, and
              symbol. By Susan Ann Shepler.
            </p>
            <FooterSocial />
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link href="/collection">The Collection</Link></li>
              <li><Link href="/studio">Studio</Link></li>
              <li><Link href="/library">Library</Link></li>
              <li><Link href="/encounters">Encounters</Link></li>
              <li><Link href="/journal">Journal</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li><Link href="/about">Formation &amp; Provenance</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 AwakenArts · awakenarts.com · All Rights Reserved</span>
          <span>© Susan Ann Shepler · Confidential</span>
        </div>
      </footer>
    </>
  )
}
