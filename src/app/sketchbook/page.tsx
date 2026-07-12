// ─── /sketchbook — The Artist's Sketchbook ─────────────────────────────
// AwakenArts · Unlisted page.
//
// Built per the Unlisted Page System (see AwakenArts_Site_Architecture.md):
// full Global Page Architecture Standard (Nav -> content -> WayfindingBand
// -> Footer), but withheld from Nav/WayfindingBand/Footer and noindexed,
// so it's reachable only by direct URL — and, per the original 2026-06-30
// directive, from a single inbound link on the About page — until Susan
// decides to publish it into primary navigation.
//
// 2026-07-10, per Susan's "Refine the Sketchbook Collection Page" directive:
// this page moves from an experimental gallery of placeholder thumbnails to
// a curated collection of finished artwork prepared for viewing and
// purchase. The primary visual asset is no longer a plain image tile — it's
// the Contact Sheet (Susan's refined, marketability-focused evolution of the
// original "Collection Sheet" concept, same day) — a fixed-layout landscape
// production asset (painting, title, subtitle, detail enlargements, palette,
// and description, plus a shared closing footer band — credit, AwakenArts
// monogram, and collection tagline/CTA — common to every sheet) built per
// piece, one at a time. This page's job is to showcase those sheets,
// full-size, in the order they're finished — not to run its own gallery
// grid or add captions the sheet already carries.
//
// Adding a piece later means adding one object (id, image) to the
// COLLECTION array below; nothing else on the page needs to change.
// ─────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import ProtectedImage from '@/components/ProtectedImage'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: "The Artist's Sketchbook — AwakenArts",
  description: 'Original artwork by Susan Ann Shepler.',
  alternates: { canonical: '/sketchbook' },
  robots: { index: false, follow: true },
}

interface CollectionSheet {
  id: string
  image: {
    src: string
    alt: string
  }
}

// One entry per finished Contact Sheet, in the order pieces are completed.
// Each sheet is a single flattened production asset — painting, title,
// subtitle, detail enlargements, palette, description, and the shared
// closing footer band are already composed into the image itself — so
// this page renders it full-size and adds nothing on top of it.
const COLLECTION: CollectionSheet[] = [
  {
    id: 'julie',
    image: {
      src: '/images/sketchbook/collection-sheets/Julie-contact-sheet.png',
      alt:
        'Contact Sheet for "Julie, A Portrait of Grace" — original painting by Susan Ann Shepler, AwakenArts Collection. Portrait of a woman with a rose in her hair, shown with detail enlargements, a color palette, and the description: "Soft strength. Quiet joy. She carries beauty as her natural expression. A moment of stillness reveals the soul."',
    },
  },
  {
    id: 'may',
    image: {
      src: '/images/sketchbook/collection-sheets/May-contact-sheet.png',
      alt:
        'Contact Sheet for "May, A Portrait of Grace" — original painting by Susan Ann Shepler, AwakenArts Collection. Portrait of a woman with a rose in her hair, shown with detail enlargements, a color palette, and the description: "Warmth and wonder live in her gaze. A quiet joy that blooms without asking for attention. She carries kindness like a song only she can hear."',
    },
  },
]

export default function SketchbookPage() {
  return (
    <>
      <Nav />

      <main className={styles.page}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Artist&rsquo;s Studio</p>
          <h1 className={styles.title}>The Artist&rsquo;s Sketchbook</h1>
          <p className={styles.lede}>A Collection of Feminine Motifs</p>
          <p className={styles.sublede}>
            Original artwork by Susan Ann Shepler celebrating grace, wonder, kindness, and quiet strength.
          </p>
        </div>

        <div className={styles.collection} aria-label="Sketchbook Collection Sheets">
          {COLLECTION.map((piece) => (
            <figure key={piece.id} className={styles.sheet}>
              <ProtectedImage
                src={piece.image.src}
                alt={piece.image.alt}
                className={styles.sheetImg}
              />
            </figure>
          ))}
        </div>
      </main>

      <WayfindingBand />
      <Footer />
    </>
  )
}
