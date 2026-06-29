import styles from './AtmosphericHeader.module.css'

/*
 * AtmosphericHeader — the "Threshold Image" that opens every major
 * informational section, per Susan's "Atmospheric Header System"
 * directive (2026-06-25).
 *
 * Purpose: create a moment of arrival before the section's own
 * content. The image sets atmosphere; it does not illustrate the
 * text. No overlay, no gradient, no text baked into the image.
 *
 * Source images live in public/images/headers/, one per section,
 * named by section slug (e.g. biblical-foundation.jpg, collection.jpg,
 * poems.jpg, about.jpg, journal.jpg). Full-width landscape, ~21:6–21:7
 * aspect ratio, warm/neutral natural light, quiet and uncluttered —
 * per the directive's Visual Character spec.
 *
 * Drop this directly above a section's opening content (no wrapper
 * spacing above it — it should butt flush against whatever precedes
 * it). The component supplies its own bottom margin so the section
 *'s own top padding should be removed where this is used.
 *
 * `flush` (added 2026-06-25, "Revise Biblical Foundation Threshold
 * Section" directive): when the section directly beneath shares the
 * same cream field and needs to read as one continuous block rather
 * than two — image, then a visible seam, then content — pass `flush`
 * to zero out this component's own bottom margin. The receiving
 * section should then supply the breathing room itself (inside its
 * own background) via padding-top, so the gap is one consistent
 * color rather than a strip of the page's base background showing
 * through between two different creams.
 *
 * `tall` (added 2026-06-26, homepage Matthew 13:34 section refinement):
 * a one-off, ~25% taller variant for the single instance where the
 * landscape is the pivot between the Queen Ann encounter and
 * Scripture — "a quiet landscape that lets the visitor exhale," with
 * more visual presence than a normal divider but still short of a
 * hero image. Scoped to this prop so every other AtmosphericHeader
 * instance site-wide keeps its standard height.
 *
 * `fadeTo` (added 2026-06-29, "Banner Height + Seam" directive): a CSS
 * color the bottom of the image dissolves into, so it reads as one
 * continuous composition with whatever section follows rather than a
 * hard-edged photo butting against a flat-colored block. Pass the
 * exact background color of the section immediately below. Implies
 * flush spacing (no separate gap beneath the fade) — the fade itself
 * is the transition.
 *
 * `fadeHeight` (added 2026-06-29, Matthew section refinement): optional
 * override of the fade zone's height, as a percentage of the image's
 * own height (the CSS default is 34%). Per Susan's note on the
 * biblical-foundation landscape — "preserve another 5-10% of the
 * lower landscape before beginning the fade" so the stone wall and
 * shoreline stay grounded — pass a smaller number (e.g. 25) to start
 * the fade lower and reveal more of the image above it, without
 * changing the transition itself. Only meaningful alongside `fadeTo`.
 */

interface AtmosphericHeaderProps {
  src: string
  alt: string
  flush?: boolean
  tall?: boolean
  fadeTo?: string
  fadeHeight?: number
}

export default function AtmosphericHeader({ src, alt, flush, tall, fadeTo, fadeHeight }: AtmosphericHeaderProps) {
  const classNames = [
    styles.header,
    flush || fadeTo ? styles.flush : '',
  ].filter(Boolean).join(' ')

  return (
    <div className={classNames}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={tall ? `${styles.img} ${styles.imgTall}` : styles.img}
        loading="lazy"
      />
      {fadeTo ? (
        <div
          className={styles.fade}
          style={{
            background: `linear-gradient(to bottom, transparent, ${fadeTo})`,
            ...(fadeHeight ? { height: `${fadeHeight}%` } : {}),
          }}
          aria-hidden="true"
        />
      ) : null}
    </div>
  )
}
