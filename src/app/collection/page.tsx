import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FooterSocial from '@/components/FooterSocial'

export const metadata: Metadata = {
  title: 'The Collection — AwakenArts',
  description:
    'The AwakenArts Collection — symbolic poetic forms suited to personal reading, discussion, retreats, and teaching. By Susan Ann Shepler.',
  alternates: { canonical: '/collection' },
  openGraph: {
    url: '/collection',
    title: 'The AwakenArts Collection',
    description:
      'The AwakenArts Collection — symbolic poetic forms suited to personal reading, discussion, retreats, and teaching. By Susan Ann Shepler.',
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
              The Collection gathers poetic works shaped through figurative
              language, symbolic forms, and literary imagery.
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
              The Collection is the heart of AwakenArts — new works,
              readings, and materials take shape around it.
            </h2>

            <p className="col-statement-body">
              Symbols play an important and recurring role in human experience.
              They appear in dreams, art, stories, and faith, often carrying
              meanings that are difficult to express through language alone.
            </p>

            <p className="col-statement-body">
              The works in the Collection provide opportunities to become
              attentive to symbolic patterns and paths, and to ways symbols
              shape understanding and meaning.
            </p>

            <ul className="col-use-list">
              <li>Use them in workshops.</li>
              <li>Use them in retreats.</li>
              <li>Use them in group discussion.</li>
              <li>Use them in literary discussion.</li>
              <li>Use them in personal reflection.</li>
              <li>Use them as symbolic prompts when ordinary language falls short.</li>
              <li>Use them as companions to understanding.</li>
            </ul>


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
              An artistic body of work shaped through image and language.
              The works express meaning in symbolic form, where word and image
              reveal archetypal patterns of thought and human experience.
              By Susan Ann Shepler.
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
              <li><Link href="/poems">Poems</Link></li>
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
