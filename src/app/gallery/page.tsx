import type { Metadata } from 'next'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Gallery — AwakenArts',
  description:
    'Original works by Susan Ann Shepler — figures, archetypes, and symbolic imagery drawn from the Jungian path of Individuation.',
}

/* ── Artwork catalogue ──────────────────────────────────────────────────────
   To add a piece: copy one entry, update path / title / medium / category.
   Categories: 'figure' | 'card' | 'study'
───────────────────────────────────────────────────────────────────────────── */
const artworks = [
  {
    src: '/images/figures/ann/ann.png',
    title: 'Queen Ann',
    medium: 'Mixed media',
    category: 'figure',
    wide: true,
  },
  {
    src: '/images/figures/grismere/grismere.png',
    title: 'Grismere',
    medium: 'Mixed media',
    category: 'figure',
    wide: false,
  },
  {
    src: '/images/figures/ballerina/ballerina.png',
    title: 'The Ballerina',
    medium: 'Mixed media',
    category: 'figure',
    wide: false,
  },
  {
    src: '/images/figures/ballerina/ballet-art-image.png',
    title: 'Ballet Study',
    medium: 'Pointillist work on paper',
    category: 'study',
    wide: true,
  },
  {
    src: '/images/cards/fronts/transcendence.jpg',
    title: 'Transcendence',
    medium: 'Guidance Deck',
    category: 'card',
    wide: false,
  },
  {
    src: '/images/cards/fronts/rebirth.jpg',
    title: 'Rebirth',
    medium: 'Guidance Deck',
    category: 'card',
    wide: false,
  },
  {
    src: '/images/cards/fronts/grace.jpg',
    title: 'Grace',
    medium: 'Guidance Deck',
    category: 'card',
    wide: false,
  },
  {
    src: '/images/cards/fronts/transformation.jpg',
    title: 'Transformation',
    medium: 'Guidance Deck',
    category: 'card',
    wide: false,
  },
  {
    src: '/images/cards/fronts/wisdom.jpg',
    title: 'Wisdom',
    medium: 'Guidance Deck',
    category: 'card',
    wide: false,
  },
  {
    src: '/images/cards/fronts/mystery.jpg',
    title: 'Mystery',
    medium: 'Guidance Deck',
    category: 'card',
    wide: false,
  },
]

export default function GalleryPage() {
  return (
    <>
      <Nav />

      <main className="gallery-page">

        {/* ── OPENING ── */}
        <section className="gallery-opening">
          <p className="eyebrow gallery-opening__eyebrow">Original Works</p>
          <h1 className="gallery-opening__headline">The Art Behind the Path</h1>
          <p className="gallery-opening__sub">
            Each image began as an interior encounter — a symbol pressing forward
            from the unconscious. These works are not illustrations of ideas.
            They are events in their own right.
          </p>
        </section>

        {/* ── GALLERY GRID ── */}
        <section className="gallery-grid-section">
          <div className="gallery-grid">
            {artworks.map((art, i) => (
              <figure
                key={i}
                className={`gallery-item${art.wide ? ' gallery-item--wide' : ''}`}
              >
                <div className="gallery-item__frame">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={art.src}
                    alt={art.title}
                    loading={i < 4 ? 'eager' : 'lazy'}
                    className="gallery-item__img"
                  />
                  <div className="gallery-item__overlay">
                    <figcaption className="gallery-item__caption">
                      <span className="gallery-item__title">{art.title}</span>
                      <span className="gallery-item__medium">{art.medium}</span>
                    </figcaption>
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </section>

        {/* ── CLOSING NOTE ── */}
        <section className="gallery-closing">
          <p className="gallery-closing__note">
            More works are added as the journey continues.
            <br />
            If a piece calls to you, it has something to say.
          </p>
        </section>

      </main>
    </>
  )
}
