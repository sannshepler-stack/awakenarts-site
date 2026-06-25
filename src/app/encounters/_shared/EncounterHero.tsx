import Link from 'next/link'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import WayfindingBand from '@/components/WayfindingBand'
import { ExperienceNav, type ExperienceStageSlug } from './ExperienceNav'
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

export function ClosingStrip({
  line,
  current,
}: {
  line: string
  /** Slug of the encounter being viewed, so its stage highlights in the
   *  Experience Navigation below. */
  current?: ExperienceStageSlug
}) {
  // The reflective closing line belongs to the encounter itself and
  // sits on the same dark background as the Experience Navigation
  // beneath it (Claude Directive "Experience Navigation Refinement,"
  // 2026-06-25) — that navigation is part of the Encounter's own
  // sequence, not the site's global nav, so it lives here rather than
  // in a separate band. The global Wayfinding Band follows after
  // generous breathing room, carrying only the permanent site nav —
  // visitors always return to the complete AwakenArts navigation
  // rather than being locked into a linear sequence.
  return (
    <>
      <section id="continue" className={styles.closingStrip}>
        <p className={`${cormorant.className} ${styles.closingLine}`}>{line}</p>
        <div className={styles.experienceNavWrap}>
          <ExperienceNav current={current} />
        </div>
      </section>
      <WayfindingBand />
    </>
  )
}

export { styles }
