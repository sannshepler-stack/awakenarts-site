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
            AwakenArts is an artistic body of work shaped through image
            and language. The works express meaning in symbolic form,
            where word and image reveal archetypal patterns of thought
            and inward experience. Drawing from parable, allegory, and
            figurative expression, the works invite awareness while
            supporting reflection, discussion, teaching, and exploration.
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

          <p className="studio-preview-intro">
            We live among symbols whether we notice them or not. Images
            shape memory, stories organize identity, and language itself
            can take visible form. AwakenArts explores these realities
            through symbolic poetic forms and literary encounters that
            reveal archetypal patterns of thought and inward experience.
          </p>

          {/* Queen Ann — silhouette alongside her concrete poetry form.
              The pairing makes the concept immediate: the figure is the
              poem, language taking visible shape line by line.
              Poetry image CSS-inverted so text reads white on --deep. */}
          <div className="studio-ann-feature">
            <div className="studio-ann-feature__panel">
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
            <div className="studio-ann-feature__poem">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/forms/ann-text.png"
                alt="Queen Ann — the concrete poetry form; language taking the shape of the figure"
                className="studio-ann-feature__poem-img"
                loading="lazy"
              />
              <p className="studio-ann-feature__caption">
                The silhouette is the poem — language taking visible shape,
                line by line.
              </p>
            </div>
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
            <p className="coll-invitation__text coll-invitation__text--lead">
              The AwakenArts Collection consists of symbolic poetic forms
              that reveal conflict, longing, grace, fear, transformation,
              and the inward path toward awareness and recognition. Each
              work approaches human experience through symbolic figure,
              tension, and awareness rather than fixed explanation.
            </p>
            <p className="coll-invitation__text coll-romans">
              Working with the series becomes a gradual confrontation with
              what remains divided, hidden, projected, undeveloped, or
              unconscious within the self — while also recognizing the
              universality of those same patterns across human experience.{' '}
              <em>
                &ldquo;Be transformed by the renewing of your mind.&rdquo;
                &nbsp;— Romans 12:2
              </em>
            </p>
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
          <p className="eyebrow">Poems</p>
          <h2 id="lib-preview-heading">
            Concrete poetry<br />
            <em>grounded in image and symbol.</em>
          </h2>
          <p className="lib-preview-body">
            The poems of AwakenArts work through parable, figure, and
            symbolic form — language given visible shape through years
            of close attention to image and meaning.
          </p>
          <p className="lib-preview-cta">
            <Link href="/poems" className="text-link">
              View the Poems <span aria-hidden="true">→</span>
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
              <li><Link href="/poems">Poems</Link></li>
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
