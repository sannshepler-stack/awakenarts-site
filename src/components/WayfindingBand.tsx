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
 * Contains ONLY the primary site navigation:
 *   Home · Encounters · Collection · Poems · Journal · About
 * No icons, no buttons, no explanatory copy, no secondary/contextual
 * navigation (the earlier per-Encounter prev/next row was removed in
 * this directive — visitors always return to the complete AwakenArts
 * navigation rather than being locked into a linear sequence).
 *
 * Home was added 2026-06-25 per the "Global Page Architecture
 * Standard" directive. The header Nav omits a literal "Home" link
 * because its wordmark already links home — but the band has no logo,
 * so Home is listed explicitly here as one of the places a visitor may
 * want to continue.
 *
 * Single reusable component, referenced identically by every page —
 * future changes to links, typography, or spacing happen once, here.
 *
 * A page's own reflective closing line is NOT part of this component —
 * it belongs to the page content above the band, per the standing
 * design principle "reflection belongs to the work, navigation belongs
 * to the website."
 */

const PRIMARY_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Encounters', href: '/encounters' },
  { label: 'Collection', href: '/collection' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Journal', href: '/journal' },
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
