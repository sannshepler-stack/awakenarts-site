// ─── /sketchbook — The Artist's Sketchbook ─────────────────────────────
// AwakenArts · Unlisted page, built per Susan's directive (2026-06-30).
//
// Built per the Unlisted Page System (see AwakenArts_Site_Architecture.md):
// full Global Page Architecture Standard (Nav -> content -> WayfindingBand
// -> Footer), but withheld from Nav/WayfindingBand/Footer and noindexed,
// so it's reachable only by direct URL — and, per this directive, from a
// single inbound link on the About page — until Susan decides to publish
// it into primary navigation.
//
// Purpose (per Susan): not part of the Figure Editions, Collection, or
// Gallery. A place for original artwork and ongoing visual creations —
// an active creative practice, not a published body of work. The concept
// is deliberately not explained on the page; the work is left to speak
// for itself, so there is no body copy beyond the single intro sentence.
//
// Framework-only build: this page is fully designed and wired into the
// site, but every tile below is a placeholder until Susan selects final
// images. PIECES is a plain data array — adding a real work later means
// adding one object (image + optional title) to that array; the grid,
// spacing, and page do not need to change. Each tile is a single <div>
// today so that future enlargement/lightbox behavior can be added later
// (e.g. wrapping the tile in a button) without restructuring the grid.
// ─────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: "The Artist's Sketchbook — AwakenArts",
  description: 'Original artwork by Susan Ann Shepler.',
  alternates: { canonical: '/sketchbook' },
  robots: { index: false, follow: true },
}

interface SketchbookPiece {
  id: string
  title?: string
}

// Placeholder set — replace/extend freely. Each entry may carry an
// optional `title`; omit it for an untitled tile. No image field yet —
// once Susan selects final artwork, add `image: { src, alt }` here and
// render it in the tile markup below in place of the placeholder
// block (with object-fit: contain inside the frame, per the comment
// on .thumb in page.module.css). Every tile shares one fixed portrait
// aspect-ratio (set on .thumb) — per Susan: vertical thumbnails at a
// consistent height, three equally-spaced columns.
const PIECES: SketchbookPiece[] = [
  { id: 'sketch-01' },
  { id: 'sketch-02' },
  { id: 'sketch-03' },
  { id: 'sketch-04' },
  { id: 'sketch-05' },
  { id: 'sketch-06' },
]

export default function SketchbookPage() {
  return (
    <>
      <Nav />

      <main className={styles.page}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Artist&rsquo;s Studio</p>
          <h1 className={styles.title}>The Artist&rsquo;s Sketchbook</h1>
          <p className={styles.lede}>
            A Collection of Feminine Motifs
          </p>
          <p className={styles.sublede}>
            Original artwork by Susan Ann Shepler celebrating grace, wonder, kindness, and quiet strength.
          </p>
        </div>

        <div className={styles.grid} aria-label="Sketchbook pieces">
          {PIECES.map((piece) => (
            <div key={piece.id} className={styles.tile}>
              <div className={styles.thumb} aria-hidden="true" />
              {piece.title ? (
                <p className={styles.tileTitle}>{piece.title}</p>
              ) : null}
            </div>
          ))}
        </div>
      </main>

      <WayfindingBand />
      <Footer />
    </>
  )
}
