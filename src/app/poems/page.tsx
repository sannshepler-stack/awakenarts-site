import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import FooterSocial from '@/components/FooterSocial'

export const metadata: Metadata = {
  title: 'Poems — AwakenArts',
  description:
    'A curated preview of the poems of AwakenArts — image and language paired in symbolic form, each a doorway into its complete Figure Edition.',
  alternates: { canonical: '/poems' },
  openGraph: {
    url: '/poems',
    title: 'Poems — AwakenArts',
    description:
      'A curated preview of the poems of AwakenArts — image and language paired in symbolic form, each a doorway into its complete Figure Edition.',
  },
}

/* ── Poem preview gallery ──────────────────────────────────────────────
 * Claude Directive — Poems Page Editorial Standard (2026-06-25,
 * Susan's formal directive, superseding earlier sourcing notes below):
 * the Poems page is a curated index to the completed AwakenArts
 * Editions. Every card represents an existing Edition — no works in
 * progress. Every image and every excerpt must come directly from
 * that Edition's own approved files, never from Workbook drafts,
 * concept art, or invented/placeholder text.
 *
 * Verification method: each Edition's deployed PDF
 * (public/files/editions/*.pdf — the authoritative source, not the
 * loose Workbook folders, which can and do differ from what's
 * actually approved) follows a consistent ~11-page template. Page 3
 * ("THE [FIGURE]") carries the Edition's own figure artwork; the
 * "Recognition" page carries the section title and a blockquoted
 * "— THE POEM" (or "— THE IMAGE") pull-quote — the one piece of text
 * guaranteed to be the finished, published language inside the
 * Edition itself. Every title and excerpt below was read directly off
 * those rendered pages.
 *
 * Per Susan's image-standard preferred order (1. atmospheric, 2.
 * figure, 3. supporting): Poppy keeps its existing atmosphere image —
 * never flagged, already sourced from the Edition's own production
 * files. Bowls, Grismere, and Ballerina were flagged as wrong or weak
 * (a vase instead of the actual bowls; a "stunted" Grismere
 * atmosphere shot; a "moody" Ballerina shot); Dragon was switched
 * too, at Susan's request, to keep the gallery consistent. All four
 * now use each Edition's own page-3 figure artwork, cropped from the
 * authoritative PDF and saved to public/images/editions/{slug}-figure.jpg
 * — cropped tight to the artwork itself (template's mat box at
 * x:1254–4058, y:900–4465 on the 200dpi/5313×6875 page render, then
 * shaved a further ~50px) so no white mat or navy page-background
 * edge shows inside the card's image box.
 *
 * Scope: a work appears here only if it has a completed Figure
 * Edition (src/data/editions.ts) — currently Dragon, Bowls, Ballerina,
 * Grismere, Poppy, i.e. all five. Queen Ann, Dove, Bear, Butterfly,
 * and Pottery remain off this page — none has a completed Edition
 * yet. As additional Editions are completed, they may be added here
 * following this same standard.
 */

interface PoemPreview {
  slug: string
  kicker: string
  title: string
  image: { src: string; alt: string }
  excerpt: string
  edition: { label: string; href: string }
}

const poems: PoemPreview[] = [
  {
    slug: 'poppy',
    kicker: 'Poppy',
    title: "Her Mother's Hands",
    image: {
      src: '/images/atmosphere/poppy.png',
      alt: 'Poppy — a golden hillside of poppies in bloom at sunset, the same photograph used inside the Poppy Edition.',
    },
    excerpt: 'She has her mother’s hands.',
    edition: { label: 'View the Edition', href: '/editions/poppy' },
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
    edition: { label: 'View the Edition', href: '/editions/dragon' },
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
    edition: { label: 'View the Edition', href: '/editions/grismere' },
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
    edition: { label: 'View the Edition', href: '/editions/bowls' },
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
    edition: { label: 'View the Edition', href: '/editions/ballerina' },
  },
]

/* ── Page ──────────────────────────────────────────────── */

export default function PoemsPage() {
  return (
    <>
      <Nav />

      {/* Threshold Header removed (2026-06-25, Susan: "The header isn't
          working on the poetry page and you can delete it."). The
          carved-stone "poetry" image is no longer used here; this
          section now opens the page directly. See the dark-field note
          on .lib-hero/.poems-gallery-section in globals.css for the
          related background change made at the same time. */}
      <section className="lib-hero" aria-label="Poems">
        <div className="lib-hero__inner">
          <p className="eyebrow">Poems</p>
          <h1>Image and poem become symbolic language.</h1>
          <p className="lib-hero__sub">
            A curated preview of the poems of AwakenArts — each pairing of
            image and excerpt offers a glimpse into symbolic language, and
            a doorway into the complete Edition.
          </p>
        </div>
      </section>

      <section className="poems-gallery-section" aria-label="Poem previews">
        <div className="poems-gallery">
          {poems.map(({ slug, kicker, title, image, excerpt, edition }) => (
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
                <Link href={edition.href} className="poem-card__cta">
                  {edition.label} <span aria-hidden="true">→</span>
                </Link>
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
