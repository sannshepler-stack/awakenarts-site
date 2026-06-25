import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import FooterSocial from '@/components/FooterSocial'

// RETIRED 2026-06-25 — "Retire Gallery and Reinstate Journal" directive.
// The site no longer needs a dedicated Gallery: this imagery now lives
// within Encounters, Collection, Poems, Editions, and supporting
// atmosphere imagery throughout the site (see public/images/atmosphere/).
// Removed from primary nav and the Navigation Band; noindexed below.
// Route and file left in place rather than deleted, matching how the
// earlier figure-encounter routes were set aside.
export const metadata: Metadata = {
  title: 'Gallery — AwakenArts',
  description:
    'A quiet visual encounter with the symbolic figures of AwakenArts. Come and see — then choose where to walk next.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    url: '/gallery',
    title: 'Gallery — AwakenArts',
    description:
      'A quiet visual encounter with the symbolic figures of AwakenArts. Come and see — then choose where to walk next.',
  },
  robots: {
    index: false,
    follow: false,
  },
}

/*
 * Gallery — June 2026 architecture revision, refined per Susan's note:
 * "Present the Gallery as a place of visual encounter, not interpretation."
 *
 * Rules this page follows:
 *   - Heading/intro invite, they don't explain. No symbolism spelled out.
 *   - Per-figure captions are short and evocative — curiosity, not meaning.
 *     None of them paraphrase Scripture or name what the figure "means."
 *   - Images are the strongest available figure/atmosphere artwork for
 *     each figure. No Figure Edition covers, contact sheets, or production
 *     graphics (word-art, teaching diagrams) — checked against actual
 *     source imagery, not just filenames, before being used here.
 *   - CTA is "Walk the Path" wherever a Path exists, otherwise "Explore
 *     the Figure Edition." Queen Ann and Butterfly have neither yet, so
 *     they're marked "Coming soon" with no link.
 */

interface GalleryFigure {
  slug: string
  name: string
  image: string
  alt: string
  caption: string
  cta?: { label: string; href: string }
}

const figures: GalleryFigure[] = [
  {
    slug: 'grismere',
    name: 'Grismere',
    image: '/images/forms/mermaid-grismere-still.png',
    alt: 'Grismere — a figure beneath the water, rendered in atmosphere and silhouette.',
    caption: 'What the deep is keeping.',
    cta: { label: 'Walk the Path', href: '/encounters/mermaid' },
  },
  {
    slug: 'dragon',
    name: 'The Dragon',
    image: '/images/forms/dragon-still.png',
    alt: 'The Dragon — a symbolic presence within an elemental environment.',
    caption: 'Something not yet settled.',
    cta: { label: 'Walk the Path', href: '/encounters/dragon' },
  },
  {
    slug: 'bowls',
    name: 'Bowls',
    image: '/images/forms/bowls-still.jpg',
    alt: 'Bowls — an earthen vessel, lit in quiet stillness.',
    caption: 'Kept, not displayed.',
    cta: { label: 'Walk the Path', href: '/encounters/vase' },
  },
  {
    slug: 'ballerina',
    name: 'The Ballerina',
    image: '/images/forms/ballerina-still.png',
    alt: 'The Ballerina — pointe shoes resting in a sunlit, dust-veiled room, ribbons loosened.',
    caption: 'Caught between movements.',
    cta: { label: 'Explore the Figure Edition', href: '/editions/ballerina' },
  },
  {
    slug: 'queen-ann',
    name: 'Queen Ann',
    image: '/images/forms/queen-ann-still.png',
    alt: 'Queen Ann — a windswept, crowned figure against a night sky.',
    caption: 'Waiting for her country.',
  },
  {
    slug: 'butterfly',
    name: 'Butterfly',
    image: '/images/forms/butterfly-still.jpg',
    alt: 'Butterfly — resting on blossom, wings open to the light.',
    caption: 'Still becoming.',
  },
]

export default function GalleryPage() {
  return (
    <>
      <Nav />

      <section className="gal-hero" aria-label="Gallery">
        <div className="gal-hero__inner">
          <p className="eyebrow">Gallery</p>
          <h1>Come and see</h1>
          <p className="gal-hero__sub">
            A quiet place to meet the figures of AwakenArts. Look first —
            then choose where to walk next.
          </p>
        </div>
      </section>

      <section className="gal-grid-section" aria-label="Figures">
        <div className="gal-grid">
          {figures.map((f) => (
            <article className="gal-card" key={f.slug}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={f.image}
                alt={f.alt}
                className="gal-card__img"
                loading="lazy"
              />
              <div className="gal-card__body">
                <h2 className="gal-card__name">{f.name}</h2>
                <p className="gal-card__caption">{f.caption}</p>
                {f.cta ? (
                  <Link href={f.cta.href} className="gal-card__cta">
                    {f.cta.label} →
                  </Link>
                ) : (
                  <span className="gal-card__soon">Coming soon</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <WayfindingBand />

      {/* ── FOOTER ── */}
      <footer className="site-footer" aria-label="Site footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label="AwakenArts home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/brand/logo-reversed.svg"
                alt="AwakenArts"
                className="footer-logo"
                loading="lazy"
              />
            </Link>
            <p>
              An artistic body of work shaped through image and language.
              The works express emotion and meaning in symbolic form, where
              word and image reveal archetypal patterns of thought and
              inward experience. By Susan Ann Shepler.
            </p>
            <FooterSocial />
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link href="/encounters">Path</Link></li>
              <li><Link href="/collection">Collection</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>The Work</h4>
            <ul>
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
