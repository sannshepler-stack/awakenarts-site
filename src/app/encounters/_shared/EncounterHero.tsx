import Link from 'next/link'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import styles from './encounter.module.css'

// Shared chrome/typography for every Encounters page. See
// encounter.module.css for the full design-system note.

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  weight: ['400'],
})

export const inter = Inter({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--enc-sans',
})

export function Chrome() {
  return (
    <div className={styles.chrome}>
      <Link href="/" className={styles.chromeBrand}>
        AWAKENARTS
      </Link>
      <Link href="/encounters" className={styles.chromeMenu}>
        MENU
      </Link>
    </div>
  )
}

export function Eyebrow() {
  return (
    <div>
      <p className={styles.encLabel}>Encounters</p>
      <div className={styles.eyebrowRule}>
        <span aria-hidden="true" />
        <span className={styles.eyebrowRuleDot} aria-hidden="true">◆</span>
        <span aria-hidden="true" />
      </div>
    </div>
  )
}

export function ScrollCue({ href = '#continue' }: { href?: string }) {
  return (
    <a href={href} className={styles.scrollCue}>
      <span className={styles.scrollArrow} aria-hidden="true">↓</span>
      <span className={styles.scrollWord}>Scroll</span>
    </a>
  )
}

export function ClosingStrip({ line }: { line: string }) {
  // Per Susan's "Global Page Architecture Standard" directive
  // (2026-06-25): the per-stage text navigation ("Encounter I ·
  // Journey · Encounter II · The Deep · ...") that used to sit below
  // the reflective line has been removed entirely, not just
  // de-numbered — "Do not duplicate navigation by listing Encounter
  // I/II/III... This text navigation should be removed... the cards
  // already communicate [the sequence]." The cards on /encounters are
  // the navigation; an individual Encounter page goes straight from
  // its own reflective closing line to the global Wayfinding Band,
  // then the Standard Footer — same architecture every primary page
  // shares.
  return (
    <>
      <section id="continue" className={styles.closingStrip}>
        <p className={`${cormorant.className} ${styles.closingLine}`}>{line}</p>
      </section>
      <WayfindingBand />
      <Footer />
    </>
  )
}

export { styles }
