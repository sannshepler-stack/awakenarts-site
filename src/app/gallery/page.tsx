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
    // Six only (Susan, 2026-10-07: too many giveaway images). All 17 files
    // stay in public/images/gallery/where-you-stand. The book page's Look
    // Inside uses three others (02, 10, 14).
    images: [
      { file: '01-enter-the-story', title: 'Enter the Story', alt: 'A stone archway marked “Enter the Story,” a satchel at its foot and a path beyond' },
      { file: '03-queen-ann-on-the-balcony', title: 'Queen Ann on the Balcony', alt: 'Queen Ann at a stone balcony, a castle on the hill beyond' },
      { file: '04-the-burning-castle', title: 'The Burning Castle', alt: 'Ann hurrying down a hillside path, the castle burning behind her' },
      { file: '06-king-and-queen-on-the-terrace', title: 'King and Queen on the Terrace', alt: 'Carved chess king and queen side by side on a sunlit terrace' },
      { file: '13-the-throne-room', title: 'The Throne Room', alt: 'A sunlit throne room, a crown and rose at the foot of the throne' },
      { file: '17-the-road-ahead', title: 'The Road Ahead, Valley', alt: 'A path winding down through wildflowers into a sunlit valley' },
    ],
  },
  {
    slug: 'shape-symbol-and-story',
    title: 'Shape, Symbol & Story',
    subtitle: 'Journeys to Awareness',
    cover: '/images/books/shape-symbol-story-cover.jpg',
    line: 'Five Figures, from ordinary poems to the images their words became.',
    dir: '/images/gallery/shape-symbol-story',
    // Source: Shape_Symbol_Story_BUILD_v25_BLEED.pdf, embedded images.
    images: [
      { file: '01-the-mermaid-at-rest', title: 'The Mermaid at Rest', alt: 'A mermaid seated on a rock above a quiet sea at sunset, a sailboat on the horizon' },
      { file: '02-ladybug-on-the-page', title: 'Ladybug on the Page', alt: 'A ladybug resting on the open page of a book in warm light' },
      { file: '03-poppy-hills', title: 'Poppy Hills', alt: 'Hills covered in orange poppies at sunset, a bell tower on the far rise' },
      { file: '04-merriweather', title: 'Merriweather', alt: 'A young woman in a blue hat and dress resting on a terrace above the sea' },
    ],
  },
  {
    slug: 'whispers-of-awareness',
    title: 'Whispers of Awareness',
    subtitle: 'Awakening Through Art, Stories, and Symbols',
    cover: '/images/books/whispers-of-awareness-cover.jpg',
    line: 'What if an image could show us something before we fully understood it?',
    dir: '/images/gallery/whispers',
    // Source: Whispers_of_Awareness_2nd_Edition_KDP_Interior.pdf, embedded images.
    images: [
      { file: '01-poppy-tree', title: 'The Poppy', alt: 'An orange poppy shaped from words, in an ornamental frame' },
      { file: '02-ballerina', title: 'The Ballerina', alt: 'A pink ballerina figure on a pedestal, in an ornamental frame' },
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
