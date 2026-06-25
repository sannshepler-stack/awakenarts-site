import Link from 'next/link'
import styles from './encounter.module.css'

/*
 * Experience Navigation — Claude Directive "Experience Navigation
 * Refinement" (2026-06-25). This belongs to the Encounter itself, not
 * the site's global navigation: no nav bar, no colored band, no box,
 * no border, no divider lines — just gold typography sitting directly
 * on the page's existing dark background, centered, reading like a
 * chapter guide inside a book rather than website navigation.
 *
 * Shared by both the Encounters index (below the card grid) and each
 * individual Encounter page (inside ClosingStrip, below the reflective
 * line) so the five-stage sequence is defined once. `current` is the
 * slug of the page being viewed — its segment renders in a brighter
 * gold with a restrained underline; omit it on the index page, where
 * no single stage is "current."
 */

export const EXPERIENCE_STAGES = [
  { slug: 'journey', label: 'Encounter I', title: 'Journey' },
  { slug: 'deep', label: 'Encounter II', title: 'The Deep' },
  { slug: 'table', label: 'Encounter III', title: 'The Table' },
  { slug: 'word', label: 'Encounter IV', title: 'The Word' },
  { slug: 'continue', label: 'Encounter V', title: 'Continue' },
] as const

export type ExperienceStageSlug = (typeof EXPERIENCE_STAGES)[number]['slug']

export function ExperienceNav({ current }: { current?: ExperienceStageSlug }) {
  return (
    <nav className={styles.experienceNav} aria-label="Experience navigation">
      {EXPERIENCE_STAGES.map((stage, i) => (
        <span key={stage.slug} className={styles.experienceNavItem}>
          {i > 0 && <span className={styles.experienceNavSep} aria-hidden="true">·</span>}
          <Link
            href={`/encounters/${stage.slug}`}
            className={
              stage.slug === current
                ? `${styles.experienceNavLink} ${styles.experienceNavLinkCurrent}`
                : styles.experienceNavLink
            }
            aria-current={stage.slug === current ? 'page' : undefined}
          >
            {stage.label} <span aria-hidden="true">·</span> {stage.title}
          </Link>
        </span>
      ))}
    </nav>
  )
}
