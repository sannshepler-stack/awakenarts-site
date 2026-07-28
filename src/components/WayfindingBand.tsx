import Link from 'next/link'
import styles from './WayfindingBand.module.css'

/*
 * WayfindingBand — the permanent AwakenArts Wayfinding Band.
 *
 * Per Susan's "Global Wayfinding Band Standard" directive (2026-06-25):
 * this is NOT the site footer and NOT just another nav menu. It marks
 * the transition between a page's own content and the informational
 * footer — "you have reached the end of this experience; where would
 * you like to continue?" It always appears after the final content
 * section of a page and before the site footer, full width, never
 * folded into the footer markup itself.
 *
 * No icons, no buttons, no explanatory copy, no secondary/contextual
 * navigation (the earlier per-Encounter prev/next row was removed in
 * this directive — visitors always return to the complete AwakenArts
 * navigation rather than being locked into a linear sequence).
 *
 * Single reusable component, referenced identically by every page —
 * future changes to links, typography, or spacing happen once, here.
 *
 * A page's own reflective closing line is NOT part of this component —
 * it belongs to the page content above the band, per the standing
 * design principle "reflection belongs to the work, navigation belongs
 * to the website."
 *
 * 2026-07-26, per Susan's "Footer Navigation Update" directive: this
 * band (her "bottom navigation") is brought into alignment with the
 * current top Nav (src/components/Nav.tsx) rather than carrying its
 * own separate roster --
 *   Home · Encounters · Collection · Gallery · Journal · About
 *   -> The Path · Collections · Gallery · Journals · About
 * Home is removed (the header Nav's own reasoning for including Home
 * here -- "the wordmark already links home, so Home is listed
 * explicitly" -- no longer matches her stated goal that "the top and
 * bottom navigation should present the same site architecture"; the
 * top Nav has never carried a literal Home link, so the band no longer
 * does either). Encounters is removed -- not part of top Nav (it's
 * reached downstream, via The Path and Path of Recognition, not
 * as its own primary nav destination). "Collection" -> "Collections"
 * and "Journal" -> "Journals" are label-only changes, per her explicit
 * spec -- the destinations are unchanged (/collection, /journal, the
 * same routes top Nav's "Collection"/"Journal" links use); only this
 * band's own wording pluralizes them. Order and routes otherwise match
 * top Nav exactly: The Path (/awakenarts-path, renamed from /primer
 * 2026-07-27), Collections (/collection), Gallery (/gallery), Journals
 * (/journal), About (/about). No styling, spacing, typography, or
 * hover behavior changed -- WayfindingBand.module.css is untouched;
 * this is a data-only change. */

const PRIMARY_LINKS = [
  { label: 'The Path', href: '/awakenarts-path' },
  { label: 'Collections', href: '/collection' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Journals', href: '/journal' },
  { label: 'About', href: '/about' },
]

export default function WayfindingBand() {
  return (
    <nav className={styles.band} aria-label="AwakenArts site navigation">
      <ul className={styles.primary}>
        {PRIMARY_LINKS.map((l) => (
          <li key={l.href}>
            <Link href={l.href}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
