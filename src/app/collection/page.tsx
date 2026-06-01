import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FooterSocial from '@/components/FooterSocial'

export const metadata: Metadata = {
  title: 'The Collection — AwakenArts',
  description:
    'Folios, readings, and curated editions. Concrete poems and symbolic readings shaped through image, language, atmosphere, and path.',
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
              Folios, readings, and curated editions
            </p>
            <p className="col-hero__body">
              Concrete poems and symbolic readings shaped through image,
              language, atmosphere, and path.
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
              alt="The AwakenArts Collection — poetic encounters in shape, symbol and story"
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
                <span className="col-work-fig__type">Concrete poem · Folio edition</span>
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
                <span className="col-work-fig__type">Concrete poem · Folio edition</span>
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
                <span className="col-work-fig__type">Concrete poem · Folio edition</span>
              </figcaption>
            </figure>

          </div>
        </section>

        {/* ── INVITATION ───────────────────────────────────────
            Understated. Literary. No sales language.
        ──────────────────────────────────────────────────────── */}
        <section className="col-invitation">
          <p className="col-invitation__body">
            Each work is a complete authored reading — symbolic form,
            language, and atmosphere held together as a single encounter.
          </p>
          <Link href="/encounters" className="col-invitation__link">
            Begin an Encounter <span aria-hidden="true">→</span>
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
              Original symbolic figures for the interior life — rooted in the
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
