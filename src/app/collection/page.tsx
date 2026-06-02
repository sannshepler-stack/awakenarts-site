import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FooterSocial from '@/components/FooterSocial'

export const metadata: Metadata = {
  title: 'The Collection — AwakenArts',
  description:
    'The AwakenArts Collection — symbolic concrete poetry exploring longing, transformation, exile, fear, grace, memory, and identity. Image-shaped forms intended to be encountered slowly.',
  alternates: { canonical: '/collection' },
  openGraph: {
    url: '/collection',
    title: 'The AwakenArts Collection',
    description:
      'A literary-symbolic collection of authored poetic works by Susan Ann Shepler.',
  },
}

export default function CollectionPage() {
  return (
    <>
      <Nav />

      <main className="col-page">

        {/* ── HERO ─────────────────────────────────────────────────
            Restrained. Negative space is structural.
            No CTA above the fold.
        ──────────────────────────────────────────────────────── */}
        <section className="col-hero">
          <div className="col-hero__inner">
            <p className="eyebrow col-hero__eyebrow">AwakenArts</p>
            <h1 className="col-hero__title">The Collection</h1>
            <p className="col-hero__sub">
              Symbolic concrete poetry by Susan Ann Shepler
            </p>
            <p className="col-hero__body">
              Image-shaped poems exploring longing, transformation, exile,
              fear, grace, memory, and identity — where the words themselves
              become the figure.
            </p>
          </div>
        </section>

        {/* ── INTERPRETIVE STATEMENT ───────────────────────────
            The full statement of what the Collection is and does.
        ──────────────────────────────────────────────────────── */}
        <section className="col-statement-section">
          <div className="col-statement-inner">

            <p className="col-statement-body">
              Each work joins language and image so that the words themselves become the figure.
              Shape, rhythm, symbolism, emotional tension, and atmosphere operate together as
              a single structure of meaning.
            </p>

            <p className="col-statement-body">
              The Collection approaches concrete poetry as a contemplative and parabolic form:
              revealing through symbolic image what is often difficult to perceive directly
              within human experience. These poems are not decorative symbolic objects or
              literary curiosities. They are image-shaped forms intended to be encountered
              slowly — allowing recognition, reflection, and symbolic understanding to emerge
              through the body of the poem itself.
            </p>

            <p className="col-statement-body">
              The figures within the Collection embody opposing tensions simultaneously:
              beauty and danger, innocence and illusion, strength and vulnerability,
              fear and transformation, exile and endurance.
            </p>

            <p className="col-statement-body">
              A mermaid becomes divided awareness and longing. A queen becomes loss, dignity,
              and threshold. A dragon becomes instinct, fear, and transformative force.
              A dancer becomes tenderness, aspiration, fragility, and grace.
            </p>

            <p className="col-statement-body">
              The symbolic forms function similarly to parable: revealing through image what
              ordinary language often struggles to express directly. The Collection exists
              not merely to present symbolic artwork, but to help readers encounter deeper
              dimensions of human experience through language becoming form.
            </p>

          </div>
        </section>

        {/* ── TIER 1: Collection overview poster ───────────────
            The full collection in one editorial image.
        ──────────────────────────────────────────────────────── */}
        <section className="col-overview-section">
          <div className="col-overview-inner">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/collection/connection-all.png"
              alt="The AwakenArts Collection — symbolic concrete poetry — language becoming visible form"
              className="col-overview-img"
              loading="eager"
            />
          </div>
        </section>

        {/* ── TIER 2: Individual works ──────────────────────────
            Three works — Queen Ann featured, Ballerina and Kings supporting.
        ──────────────────────────────────────────────────────── */}
        <section className="col-works-section" aria-label="Individual collection works">
          <div className="col-works-inner">

            <figure className="col-work-fig">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/collection/ballerina-collection.png"
                alt="Ballerina — a concrete poem by Susan Ann Shepler"
                className="col-work-fig__img"
                loading="lazy"
              />
              <figcaption className="col-work-fig__caption">
                <span className="col-work-fig__title">Ballerina</span>
                <span className="col-work-fig__type">Symbolic concrete poem</span>
              </figcaption>
            </figure>

            <figure className="col-work-fig">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/collection/chess-collection.png"
                alt="Kings — a concrete poem by Susan Ann Shepler"
                className="col-work-fig__img"
                loading="lazy"
              />
              <figcaption className="col-work-fig__caption">
                <span className="col-work-fig__title">Kings</span>
                <span className="col-work-fig__type">Symbolic concrete poem</span>
              </figcaption>
            </figure>

            <figure className="col-work-fig">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/collection/dragon-collection.png"
                alt="Dragon — a concrete poem by Susan Ann Shepler"
                className="col-work-fig__img"
                loading="lazy"
              />
              <figcaption className="col-work-fig__caption">
                <span className="col-work-fig__title">Dragon</span>
                <span className="col-work-fig__type">Symbolic concrete poem</span>
              </figcaption>
            </figure>

          </div>
        </section>

        {/* ── INVITATION ───────────────────────────────────────
            Understated. Literary. No sales language.
        ──────────────────────────────────────────────────────── */}
        <section className="col-invitation">
          <Link href="/encounters" className="col-invitation__link">
            Explore the Collection <span aria-hidden="true">→</span>
          </Link>
        </section>

      </main>

      <footer className="site-footer" aria-label="Site footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label="AwakenArts home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/brand/logo.png"
                alt="AwakenArts"
                className="footer-logo"
                loading="lazy"
              />
            </Link>
            <p>
              Symbolic concrete poetry exploring the inward journey — rooted in the
              Christian tradition, created through the transformative language
              arts process. By Susan Ann Shepler.
            </p>
            <FooterSocial />
          </div>
          <div className="footer-col">
            <h4>Studio</h4>
            <ul>
              <li><Link href="/studio/silhouettes">Symbolic Forms</Link></li>
              <li><Link href="/collection">The Collection</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>The Work</h4>
            <ul>
              <li><Link href="/encounters">Encounters</Link></li>
              <li><Link href="/library">Library</Link></li>
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
