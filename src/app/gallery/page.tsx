import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import TextLink, { TextLinkRow } from '@/components/TextLink'
import { bodyStyle, h2Style } from '@/components/guided/GuidedParts'

// /gallery — From the Books (2026-10-07, Susan). The former Gallery repeated
// the Collection's figures; it now gathers the story images from the
// AwakenArts books, one group per book, starting with Where You Stand.
// The June 2026 Gallery is kept unrouted in src/app/_archive/gallery-2026-06.
// Images: KINGS & QUEENS/REVISION_2026-09-26/.../02_ASSETS, resized for web.
// DRAFT: Susan is choosing which images stay.

export const metadata: Metadata = {
  title: 'From the Books — AwakenArts',
  description: 'Story images from the AwakenArts books, beginning with Where You Stand: A Seek & Find Journal.',
  alternates: { canonical: '/gallery' },
}

type Img = { file: string; title: string; alt: string }

const BOOKS: {
  slug: string
  title: string
  subtitle: string
  cover: string
  line: string
  dir: string
  images: Img[]
}[] = [
  {
    slug: 'where-you-stand',
    title: 'Where You Stand',
    subtitle: 'A Seek & Find Journal',
    cover: '/images/books/where-you-stand-cover.jpg',
    line: 'A story of a queen, a king, and a path, told in image and poem.',
    dir: '/images/gallery/where-you-stand',
    images: [
      { file: '01-enter-the-story', title: 'Enter the Story', alt: 'A stone archway marked “Enter the Story,” a satchel at its foot and a path beyond' },
      { file: '02-ann-at-the-viewpoint', title: 'Ann at the Viewpoint', alt: 'Ann in a blue cloak looking out over a river valley toward a distant castle' },
      { file: '03-queen-ann-on-the-balcony', title: 'Queen Ann on the Balcony', alt: 'Queen Ann at a stone balcony, a castle on the hill beyond' },
      { file: '04-the-burning-castle', title: 'The Burning Castle', alt: 'Ann hurrying down a hillside path, the castle burning behind her' },
      { file: '05-the-queen-on-the-terrace', title: 'The Queen on the Terrace', alt: 'A carved chess queen on a flowered terrace above the hills' },
      { file: '06-king-and-queen-on-the-terrace', title: 'King and Queen on the Terrace', alt: 'Carved chess king and queen side by side on a sunlit terrace' },
      { file: '07-the-archway', title: 'The Archway', alt: 'A vine-covered stone archway opening onto a winding path' },
      { file: '08-the-path-forward', title: 'The Path Forward', alt: 'A path winding through open country toward a distant town' },
      { file: '09-the-courtyard', title: 'The Courtyard', alt: 'An empty checkered courtyard with low stone walls, the hills beyond' },
      { file: '10-the-king', title: 'The King', alt: 'A crowned king with a sceptre and blue cloak standing on a hillside' },
      { file: '11-the-kings-castle', title: 'The King’s Castle', alt: 'A many-towered castle among trees' },
      { file: '12-crown-and-sword-at-the-gate', title: 'Crown and Sword at the Gate', alt: 'A crown and sword resting on a wall beside an open gate and a path' },
      { file: '13-the-throne-room', title: 'The Throne Room', alt: 'A sunlit throne room, a crown and rose at the foot of the throne' },
      { file: '14-king-and-queen-on-the-board', title: 'King and Queen on the Board', alt: 'Chess king and queen facing each other on a board set in the hills' },
      { file: '15-the-valley-path', title: 'The Valley Path', alt: 'A path crossing a wide valley toward a castle on the horizon' },
      { file: '16-the-road-ahead-olive-hillside', title: 'The Road Ahead', alt: 'A stone path through an olive hillside at sunset' },
      { file: '17-the-road-ahead', title: 'The Road Ahead, Valley', alt: 'A path winding down through wildflowers into a sunlit valley' },
    ],
  },
]

export default function GalleryPage() {
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--cream)' }}>
        <section style={{ padding: 'calc(var(--band-gap) + 1rem) 1.5rem 2.5rem', textAlign: 'center' }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Gallery</p>
          <h1 style={{ ...h2Style, fontSize: 'var(--t-page)' }}>From the Books</h1>
          {/* The Jung epigraph moved to /explore (Susan, 2026-10-07). */}
          <p style={{ ...bodyStyle, maxWidth: 620, margin: '0 auto' }}>A selection of images from the AwakenArts books, gathered by book.</p>
        </section>

        {BOOKS.map((b) => (
          <section key={b.slug} aria-labelledby={`book-${b.slug}`} style={{ padding: '1rem 1.5rem var(--band-gap)' }}>
            <div style={{ maxWidth: 1120, margin: '0 auto' }}>
              <div className="fb-book">
                <Link href={`/books/${b.slug}`} className="fb-book__cover" data-cta={`gallery-book-${b.slug}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.cover} alt={`Cover of ${b.title}: ${b.subtitle}`} loading="lazy" />
                </Link>
                <div>
                  <h2 id={`book-${b.slug}`} style={{ ...h2Style, margin: 0 }}>{b.title}</h2>
                  <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--mid)', margin: '0.2rem 0 0.75rem' }}>
                    {b.subtitle}
                  </p>
                  <p style={{ ...bodyStyle, margin: '0 0 1rem' }}>{b.line}</p>
                  <TextLinkRow>
                    <TextLink href={`/books/${b.slug}`} cta={`gallery-about-${b.slug}`}>About the Book</TextLink>
                  </TextLinkRow>
                </div>
              </div>

              <div className="fb-grid">
                {b.images.map((im) => (
                  <figure key={im.file} className="fb-grid__item">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${b.dir}/${im.file}.jpg`} alt={im.alt} loading="lazy" />
                    <figcaption>{im.title}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
      <WayfindingBand />
      <Footer />
    </>
  )
}
