import type { Metadata } from 'next'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Gallery — AwakenArts',
  description:
    'Original works by Susan Ann Shepler — figures, archetypes, and symbolic imagery drawn from an authentic interior process.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    url: '/gallery',
    title: 'Gallery — AwakenArts',
    description:
      'Original works by Susan Ann Shepler — figures, archetypes, and symbolic imagery drawn from an authentic interior process.',
  },
}

/* ── Artwork catalogue ──────────────────────────────────────────────────────
   To add a piece: copy one entry, update path / title / medium / category.
   Categories: 'figure' | 'card' | 'study'
───────────────────────────────────────────────────────────────────────────── */
const artworks: {
  src: string
  title: string
  medium: string
  category: string
  wide: boolean
  video?: boolean
}[] = [
  {
    src: '/images/gallery/angel1-painting.PNG',
    title: 'Angel',
    medium: 'Original work',
    category: 'figure',
    wide: false,
  },
  {
    src: '/images/gallery/ann-painting.jpg',
    title: 'Ann',
    medium: 'Original work',
    category: 'figure',
    wide: false,
  },
  {
    src: '/images/figures/grismere/grismere.png',
    title: 'Grismere',
    medium: 'Mixed media',
    category: 'figure',
    wide: false,
  },
  {
    src: '/images/gallery/mermaid-genie1-painting.PNG',
    title: 'Mermaid Genie',
    medium: 'Original work',
    category: 'figure',
    wide: false,
  },
  {
    src: '/images/gallery/mermaid1-painting.png',
    title: 'Mermaid',
    medium: 'Original work',
    category: 'figure',
    wide: false,
  },
  {
    src: '/images/gallery/dark-girl-painting.jpg',
    title: 'Dark Girl',
    medium: 'Original work',
    category: 'figure',
    wide: false,
  },
  {
    src: '/images/gallery/hawaiian-girl-painting.jpg',
    title: 'Hawaiian Girl',
    medium: 'Original work',
    category: 'figure',
    wide: false,
  },
  {
    src: '/images/gallery/indian-girl-painting.jpg',
    title: 'Indian Girl',
    medium: 'Original work',
    category: 'figure',
    wide: false,
  },
  {
    src: '/images/gallery/may-painting.jpg',
    title: 'May',
    medium: 'Original work',
    category: 'figure',
    wide: false,
  },
  {
    src: '/images/gallery/candace-painting.jpg',
    title: 'Candace',
    medium: 'Original work',
    category: 'figure',
    wide: false,
  },
  {
    src: '/images/gallery/rose-painting.jpg',
    title: 'Rose',
    medium: 'Original work',
    category: 'figure',
    wide: false,
  },
  {
    src: '/images/gallery/rose2-painting.jpg',
    title: 'Rose II',
    medium: 'Original work',
    category: 'figure',
    wide: false,
  },
  {
    src: '/images/gallery/Girl-yellow-skirt-painting.png',
    title: 'Girl in Yellow Skirt',
    medium: 'Original work',
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
    src: '/images/gallery/daisy-movie.MP4',
    title: 'In Motion',
    medium: 'Video work',
    category: 'study',
    wide: false,
    video: true,
  },
  {
    src: '/images/figures/ballerina/ballet-art-image.png',
    title: 'Ballet Study',
    medium: 'Pointillist work on paper',
    category: 'study',
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
            Each work emerges through a symbolic process—often expressed through feminine forms, where image and meaning take shape together.
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
                  {art.video ? (
                    <video
                      src={art.src}
                      className="gallery-item__img"
                      autoPlay
                      muted
                      loop
                      playsInline
                      aria-label={art.title}
                    />
                  ) : (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={art.src}
                      alt={art.title}
                      loading={i < 4 ? 'eager' : 'lazy'}
                      className="gallery-item__img"
                    />
                  )}
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
