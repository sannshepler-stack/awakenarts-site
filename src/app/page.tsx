import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FooterSocial from '@/components/FooterSocial'
import FormPanel from '@/components/forms/FormPanel'
import { SYMBOLIC_FORMS } from '@/components/forms/forms-data'

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
 * Homepage suggests, implies, atmospherically introduces.
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

          <p className="hero-subline">Symbolic concrete poetry for the inner journey.</p>

          <p className="hero-sub">
            AwakenArts creates image-shaped poems where words become the
            figure itself — a queen crossing through exile, a mermaid moving
            beneath the surface, a dragon turned against itself. Each poem
            carries emotional, psychological, and spiritual meaning through
            visible form rather than explanation alone.
          </p>

          <Link href="/encounters" className="hero-cta">
            Enter the Encounters <span className="arrow" aria-hidden="true">→</span>
          </Link>

          {/*
           * Secondary paths — quiet, understated, not button-like.
           * Surfaces the collection, the work itself, and the maker.
           */}
          <nav className="hero-secondary" aria-label="Other paths">
            <Link href="/studio" className="hero-secondary-link">
              Studio
            </Link>
            <span className="hero-secondary-sep" aria-hidden="true">·</span>
            <Link href="/library" className="hero-secondary-link">
              Library
            </Link>
            <span className="hero-secondary-sep" aria-hidden="true">·</span>
            <Link href="/about" className="hero-secondary-link">
              About
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
      <section className="hero-quote-section" aria-label="Opening statement">
        <p className="hero-quote-text">
          Symbols and parables have a way of carrying what words alone cannot.
        </p>
      </section>

      {/* ── SECTION 2: STUDIO PREVIEW ────────────────────────────
          Single symbolic threshold image — Queen Ann only.
          Homepage is the invitation; the Studio holds the full collection.
      ──────────────────────────────────────────────────────────── */}
      <section className="studio-preview-section" aria-labelledby="studio-preview-heading">
        <div className="studio-preview-inner">

          <div className="studio-preview-header">
            <p className="eyebrow">Image-Shaped Poems</p>
            <h2 id="studio-preview-heading">
              The words become<br />
              <em>the figure</em>
            </h2>
          </div>

          {/* Single Queen Ann panel — threshold image, not a gallery.
              The larger collection of forms unfolds inside the Studio. */}
          <div className="studio-preview-panels studio-preview-panels--single">
            <FormPanel form={SYMBOLIC_FORMS.find(f => f.slug === 'queen-ann')!} />
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
            <p className="eyebrow">The AwakenArts Collection</p>
            <h2 id="coll-heading">
              Symbolic concrete poetry<br />
              <em>and visible poetic form</em>
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
            <p className="coll-invitation__text">
              Each work joins language and image into a single structure of meaning — intended for slow encounter, not quick reading.
            </p>
            <Link href="/collection" className="coll-invitation__link">
              The Collection <span aria-hidden="true">→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ── SECTION 4: LIBRARY PREVIEW ───────────────────────────
          Reflective reading/archive companion space. After Collection.
      ──────────────────────────────────────────────────────────── */}
      <section className="lib-preview-section" aria-labelledby="lib-preview-heading">
        <div className="lib-preview-inner">
          <p className="eyebrow">Library</p>
          <h2 id="lib-preview-heading">
            The poems<br />
            <em>and what they reveal.</em>
          </h2>
          <p className="lib-preview-body">
            Depth and hidden life. Exile and threshold. Fear and transformative
            force. Longing and devotion. Thematic readings that draw out what
            the poems carry — the specific human realities within each form.
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
              Symbolic concrete poetry exploring the inward journey — rooted in the
              Christian tradition, created through the transformative language
              arts process. By Susan Ann Shepler.
            </p>
            <FooterSocial />
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link href="/encounters">Encounters</Link></li>
              <li className="footer-sub"><Link href="/encounters/mermaid">The Mermaid — a threshold between two worlds</Link></li>
              <li><Link href="/studio">Studio</Link></li>
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
