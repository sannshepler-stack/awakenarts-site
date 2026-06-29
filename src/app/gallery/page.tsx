import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Gallery — AwakenArts',
  description:
    'A quiet gallery of the published AwakenArts Editions — artwork, titles, and excerpts presented for appreciation, not decision.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    url: '/gallery',
    title: 'Gallery — AwakenArts',
    description:
      'A quiet gallery of the published AwakenArts Editions — artwork, titles, and excerpts presented for appreciation, not decision.',
  },
}

/* ── Gallery (formerly Poems) ──────────────────────────────────────────
 * Directive (2026-06-29): "The current Poems page should be renamed
 * Gallery. The Gallery is not part of the marketing sequence. Its
 * purpose is quiet browsing and appreciation. It presents the published
 * Edition works through representative artwork, the Edition titles, and
 * the existing descriptive text. The Gallery allows visitors to become
 * familiar with the published works without asking them to make
 * decisions." Follow-up directive: "Remove links."
 *
 * This page is the former /poems page (see AwakenArts_Implementation_Log.md
 * and AwakenArts_Publishing_Platform_Architecture.md, 2026-06-29 entries),
 * carried over content-and-image-sourcing intact, with every per-card link
 * to its Edition removed. The Gallery is the one room in the Architectural
 * Sequence (Homepage → Encounters → Gallery → Collection → Edition Preview
 * → ...) that asks nothing of the visitor — no link, button, or path
 * forward. Familiarity with the work happens here; the decision to go
 * further happens at Collection and Edition Preview, not here.
 *
 * Image/excerpt sourcing standard carried over unchanged from the former
 * Poems page: every image and excerpt comes directly from that Edition's
 * own approved files (public/files/editions/*.pdf), never from Workbook
 * drafts or placeholder text. Scope: a work appears here only if it has a
 * completed Figure Edition (src/data/editions.ts) — currently Dragon,
 * Bowls, Ballerina, Grismere, Poppy, and Queen Ann.
 *
 * AtmosphericHeader removed again, 2026-06-29: per Susan, "I love the
 * header style on the gallery page but it doesn't work with the page."
 * The gallery-banner-3.jpg header (added under the "Banner Height + Seam"
 * rollout) is gone; the page now opens directly on `.lib-hero`, which
 * already carries its own dark (#0e1418) field and enough top padding to
 * clear the fixed nav on every breakpoint, so no other section needed to
 * change. This is the second time a threshold header has been tried and
 * removed from this specific page — see the `.lib-hero` comment in
 * globals.css for the first (2026-06-25) removal, of the prior Poems
 * page's Threshold Header.
 */

interface GalleryTile {
  slug: string
  kicker: string
  title: string
  image: { src: string; alt: string }
  excerpt: string
}

const tiles: GalleryTile[] = [
  {
    slug: 'poppy',
    kicker: 'Poppy',
    title: "Her Mother's Hands",
    image: {
      src: '/images/atmosphere/poppy.png',
      alt: 'Poppy — a golden hillside of poppies in bloom at sunset, the same photograph used inside the Poppy Edition.',
    },
    excerpt: 'She has her mother’s hands.',
  },
  {
    slug: 'dragon',
    kicker: 'Dragon',
    title: 'The Dragon',
    image: {
      src: '/images/editions/dragon-figure.jpg',
      alt: 'The Dragon — a watercolor study of a winged dragon coiled and rising, the Edition’s own figure artwork.',
    },
    excerpt: "The dragon didn't seem to know tails and heads are one somehow.",
  },
  {
    slug: 'grismere',
    kicker: 'Grismere',
    title: 'A Lure Toward the Depths',
    image: {
      src: '/images/editions/grismere-figure.jpg',
      alt: 'Grismere — a watercolor mermaid with flowing hair, seated on a rock above the waves, the Edition’s own figure artwork.',
    },
    excerpt:
      'Far out to sea… where nighttime fishermen fear to troll to learn your mysteries.',
  },
  {
    slug: 'bowls',
    kicker: 'Bowls',
    title: 'Two Forms, One Light',
    image: {
      src: '/images/editions/bowls-figure.jpg',
      alt: 'Bowls — two ceramic bowls, one blue and one warm, glowing with concentric rings of light, the Edition’s own figure photograph.',
    },
    excerpt:
      'Neither side is the finished one and neither is the copy — they are simply two, sharing the same morning light, neither one waiting for permission to be there.',
  },
  {
    slug: 'ballerina',
    kicker: 'Ballerina',
    title: 'The Many Become One',
    image: {
      src: '/images/editions/ballerina-figure.jpg',
      alt: 'Ballerina — a watercolor study of a young dancer in pink tutu and pointe shoes, mid-pose, the Edition’s own figure artwork.',
    },
    excerpt: 'Her eyes shine in the bright lights of little girls.',
  },
  {
    slug: 'queen-ann',
    kicker: 'Queen Ann',
    title: 'Between Two Kingdoms',
    image: {
      src: '/images/editions/queen-ann-figure.jpg',
      alt: 'Queen Ann — a crowned figure in a gilded gown looking out over a mountain vista at sunset, the Edition’s own figure artwork.',
    },
    excerpt:
      'She stands at the threshold between a kingdom that is ending and one that cannot yet be fully seen.',
  },
]

/* ── Page ──────────────────────────────────────────────── */

export default function GalleryPage() {
  return (
    <>
      <Nav />

      <section className="lib-hero" aria-label="Gallery">
        <div className="lib-hero__inner">
          <p className="eyebrow">AwakenArts</p>
          <h1>The Gallery</h1>
        </div>
      </section>

      <section className="poems-gallery-section" aria-label="Gallery tiles">
        <div className="poems-gallery">
          {tiles.map(({ slug, kicker, title, image, excerpt }) => (
            <article key={slug} className="poem-card">
              <div className="poem-card__imageFrame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="poem-card__image"
                  loading="lazy"
                />
              </div>
              <div className="poem-card__body">
                <p className="poem-card__kicker">{kicker}</p>
                <h2 className="poem-card__title">{title}</h2>
                <blockquote className="poem-card__excerpt">
                  <p>{excerpt}</p>
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </section>

      <WayfindingBand />
      <Footer />
    </>
  )
}
