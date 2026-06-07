import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FooterSocial from '@/components/FooterSocial'

export const metadata: Metadata = {
  title: 'The Collection — AwakenArts',
  description:
    'The Collection gathers the works of AwakenArts — pieces meant to be returned to over time, through reflection, journaling, and quiet re-reading. By Susan Ann Shepler.',
  alternates: { canonical: '/collection' },
  openGraph: {
    url: '/collection',
    title: 'The AwakenArts Collection',
    description:
      'A literary collection of works — image and language shaped as one — meant to be lived with, not read just once.',
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
              Works shaped from lived experience — the moments that define us,<br />
              made visible through image and language.
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
              The Collection is the heart of AwakenArts — not an archive to
              pass through once, but a place to keep returning to, as new
              works, readings, and materials take shape around it.
            </h2>

            <p className="col-statement-body">
              Works shaped from memory, longing, exile, and grace — the moments
              that stay with us, given visible form so they can be sat with,
              rather than only remembered.
            </p>

            <p className="col-statement-body">
              The Collection gathers works where language has taken visible
              shape — pieces that hold what&rsquo;s hard to put into plain
              words, and that give you something to come back to when you need
              it again.
            </p>

            <p className="col-statement-body">
              Each work is meant to be lived with. You might feel something the
              first time you encounter one and not have the words for it yet —
              then come back to it later and recognize exactly what it was.
            </p>

            <p className="col-statement-body">
              The works in the Collection hold longing, exile, memory, grace,
              and fear — not as ideas to study, but as things you&rsquo;ll
              likely recognize from your own life, whenever you happen to meet
              them again.
            </p>

            <p className="col-statement-body">
              The Collection grows slowly, the way the works themselves do —
              gathered over time, and best understood simply by spending time
              with them.
            </p>

          </div>
        </section>

        {/* 6 ── CTA ─────────────────────────────────────────────────
            Lighter cream section. Stands alone.
        ──────────────────────────────────────────────────────────── */}
        <section className="col-archive-cta">
          <Link href="/encounters" className="col-archive-cta__link">
            Enter Encounters <span aria-hidden="true">→</span>
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
              A collection of reflective works — image and language shaped as
              one, rooted in the Christian contemplative tradition. By Susan
              Ann Shepler.
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
