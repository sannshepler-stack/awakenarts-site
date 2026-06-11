import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FooterSocial from '@/components/FooterSocial'

export const metadata: Metadata = {
  title: 'Poems — AwakenArts',
  description:
    'The poems of AwakenArts — concrete poetry and symbolic verse, each rooted in image, parable, and the literary tradition of Scripture.',
  alternates: { canonical: '/poems' },
  openGraph: {
    url: '/poems',
    title: 'Poems — AwakenArts',
    description:
      'Concrete poetry and symbolic verse by Susan Ann Shepler — language given visible shape through image, figure, and form.',
  },
}

/* ── Poem gallery entries ───────────────────────────────────────────── */

const poems = [
  {
    name: 'The Ballerina',
    image: { src: '/images/library/ballerinas-art.jpg', alt: 'The Ballerina — motif' },
    quotes: [
      'Each dream is sweet, like pieces of candy in a crackly box of chocolates, a garden of powder puff frills, a big bunch of white carnations in a wavy milk glass vase.',
      'She twirls on tip toes in pink satin slippers with high laced ribbons, crossed at her ancles.',
    ],
  },
  {
    name: 'Mermaid Grismere',
    image: { src: '/images/library/grismere-image.png', alt: 'Mermaid Grismere — motif' },
    quotes: [
      'The darkest of emerald your tail be! Silently waving silvery, bouncing moonbeams over coral reefs.',
      'Sleep, mermaid, sleep, under morning\'s misty veil. Your story is told from the times of old in the mariners\' hearty tales.',
    ],
  },
  {
    name: 'The Dragon',
    image: { src: '/images/library/dragon-duality.jpg', alt: 'The Dragon — motif' },
    quotes: [
      'The dragon didn\'t seem to know tails and heads are one somehow.',
      'The steaming dragon huffed and burned; with fireballs the dragon churned.',
    ],
  },
  {
    name: 'Queen Ann',
    image: { src: '/images/library/ann-chess.jpg', alt: 'Queen Ann — motif' },
    quotes: [
      'Ann flees a seized regime seeking arms and crests of kings with chests hearty enough to save a queen.',
    ],
  },
]

/* ── Page ──────────────────────────────────────────────── */

export default function PoemsPage() {
  return (
    <>
      <Nav />

      <section className="lib-hero" aria-label="Poems">
        <div className="lib-hero__inner">
          <h1>
            Poems
          </h1>
        </div>
      </section>

      <section className="lib-section lib-section--dark" aria-label="Poem gallery">
        <div className="lib-poem-gallery">
          {poems.map(({ name, image, quotes }) => (
            <article key={name} className="lib-poem-entry">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                className="lib-poem-entry__image"
                loading="lazy"
              />
              <div className="lib-poem-entry__text">
                <h2 className="lib-poem-entry__name">{name}</h2>
                <div className="lib-poem-entry__quotes">
                  {quotes.map((q, i) => (
                    <blockquote key={i} className="lib-poem-entry__quote">
                      <p>{q}</p>
                    </blockquote>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
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
              The works express emotion and meaning in symbolic form, where
              word and image reveal archetypal patterns of thought and
              inward experience. By Susan Ann Shepler.
            </p>
            <FooterSocial />
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link href="/poems">Poems</Link></li>
              <li><Link href="/encounters">Encounters</Link></li>
              <li><Link href="/studio">Studio</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>The Work</h4>
            <ul>
              <li><Link href="/encounters">Encounters</Link></li>
              <li><Link href="/studio">Studio</Link></li>
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
