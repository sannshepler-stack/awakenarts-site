import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FooterSocial from '@/components/FooterSocial'

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
 * Per AwakenArts Site Alignment Brief (April 2026):
 * The homepage is an invitation, not an overview. It sends the
 * visitor into Encounters. All orientation, explanation, tiles,
 * scholar quotes, signup, marquee, library previews, and the
 * experience promo have been relocated or removed so the page
 * functions as a single threshold.
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

          {/* Tagline — two lines, each in its own span so the
              second line can be indented for a balanced shape. */}
          <h1 className="hero-tagline">
            <span>Symbols speak.</span>
            <span>The soul listens</span>
          </h1>

          {/* Sub line — secondary, lighter. */}
          <p className="hero-subline">Symbols do not explain. They reveal</p>

          {/* Existing paragraph. */}
          <p className="hero-sub">
            AwakenArts is a guided encounter with the symbolic life of the
            soul — rooted in the Christian tradition, and the language of
            image and symbol.
          </p>

          {/*
           * Primary CTA. Wording opens the whole AwakenArts world rather
           * than naming any one feature; encounters remain reachable
           * (this still routes to /encounters) but the language no
           * longer implies that the encounter system is the entire site.
           */}
          <Link href="/encounters" className="hero-cta">
            Enter AwakenArts <span className="arrow" aria-hidden="true">→</span>
          </Link>

          {/*
           * Secondary paths — quiet, understated, not button-like.
           * Their job is to surface the broader body of work (Path,
           * Gallery, About) so that encounters reads as one unfolding
           * dimension of the site rather than the sole destination.
           * Styling deliberately lightweight (.hero-secondary).
           */}
          <nav className="hero-secondary" aria-label="Other paths">
            <Link href="/path" className="hero-secondary-link">
              Explore the Path
            </Link>
            <span className="hero-secondary-sep" aria-hidden="true">·</span>
            <Link href="/gallery" className="hero-secondary-link">
              View the Gallery
            </Link>
            <span className="hero-secondary-sep" aria-hidden="true">·</span>
            <Link href="/about" className="hero-secondary-link">
              About Susan
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
              alt="Queen Ann — a painted figure in contemplation, central to the AwakenArts identity"
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
      <section className="hero-quote-section" aria-label="Opening quote">
        <p className="hero-quote-text" style={{ fontStyle: 'normal' }}>
          &ldquo;Though seeing, they do not see.&rdquo;
        </p>
        <p className="hero-quote-cite">
          — Matthew 13:13
        </p>
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
              Original symbolic figures for the interior life — rooted in the
              Christian tradition, created through the transformative language
              arts process. By Susan Ann Shepler.
            </p>

            <FooterSocial />
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link href="/encounters">Encounters</Link></li>
              {/*
               * Descriptive anchor pointing directly at Mermaid.
               * Quiet placement (footer sub-item), descriptive text
               * ("The Mermaid — a threshold between two worlds")
               * rather than generic "enter" or "continue". Two effects:
               *   - reinforces crawl priority for the one indexable
               *     encounter
               *   - gives search engines indexable language tying the
               *     URL to its meaning
               */}
              <li className="footer-sub"><Link href="/encounters/mermaid">The Mermaid — a threshold between two worlds</Link></li>
              <li><Link href="/library">The Library</Link></li>
              <li><Link href="/begin">Begin Here</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>The Work</h4>
            <ul>
              <li><Link href="/path">The Path</Link></li>
              <li><Link href="/experience">The Experience</Link></li>
              <li><Link href="/library">Concrete Poetry</Link></li>
              <li><Link href="/library">Figures</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li><Link href="/about">Formation &amp; Provenance</Link></li>
              <li><Link href="/begin">Begin Here</Link></li>
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
