import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FooterSocial from '@/components/FooterSocial'

export const metadata: Metadata = {
  title: 'The Collection — AwakenArts',
  description:
    'The AwakenArts Collection — symbolic works exploring memory, longing, transformation, exile, grace, identity, and symbolic recognition through language and visible form.',
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

        {/* 1 ── HERO ────────────────────────────────────────────── */}
        <section className="col-hero">
          <div className="col-hero__inner">
            <p className="eyebrow col-hero__eyebrow">AwakenArts</p>
            <h1 className="col-hero__title">The Collection</h1>
            <p className="col-hero__sub">
              Works from the Collection
            </p>
            <p className="col-hero__body">
              Works shaped from the inside of lived experience — through image, language, and the things that stay with you.
            </p>
          </div>
        </section>

        {/* 2 ── COLLECTION GRID IMAGE ───────────────────────────────
            Primary visual identity asset of the page.
            Anchor line sits beneath the image.
        ──────────────────────────────────────────────────────────── */}
        <section className="col-overview-section">
          <div className="col-overview-inner">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/collection/connection-all.png"
              alt="The AwakenArts Collection — symbolic concrete poetry — language becoming visible form"
              className="col-overview-img"
              loading="eager"
            />
            <p className="col-overview-caption">
              Symbols and parables have a way of carrying what words alone cannot.
            </p>
          </div>
        </section>

        {/* 3 ── COLLECTION STATEMENT ───────────────────────────────
            Heading and body unified in one section.
        ──────────────────────────────────────────────────────────── */}
        <section className="col-statement-section">
          <div className="col-statement-inner">

            <h2 className="col-archive-statement__heading">
              The Collection is the primary literary archive of AwakenArts —
              the entry point into future works, readings, and editions.
            </h2>

            <p className="col-statement-body">
              Works shaped from memory, longing, exile, grace — the moments that mark us,
              made visible through language and form.
            </p>

            <p className="col-statement-body">
              The Collection gathers works where language has taken shape — poems that have
              become figures, figures that hold what prose cannot.
            </p>

            <p className="col-statement-body">
              Each work is meant to be lived with. The meaning arrives before it can be named.
            </p>

            <p className="col-statement-body">
              The figures within the Collection carry longing, exile, memory, grace, and fear —
              not as subjects to be studied, but as presences to be recognized.
            </p>

            <p className="col-statement-body">
              The Collection grows from the work itself — gathered over time,
              recognized rather than explained.
            </p>

          </div>
        </section>

        {/* 6 ── CTA ─────────────────────────────────────────────────
            Lighter cream section. Stands alone.
        ──────────────────────────────────────────────────────────── */}
        <section className="col-archive-cta">
          <Link href="/encounters" className="col-archive-cta__link">
            Enter the Encounters <span aria-hidden="true">→</span>
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
              Symbolic literary forms exploring the inward journey — rooted in the
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
