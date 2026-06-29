import Link from 'next/link'
import FooterSocial from './FooterSocial'

/*
 * Footer — the permanent AwakenArts Standard Footer.
 *
 * Per Susan's "AwakenArts Global Page Architecture Standard" directive
 * (2026-06-25): every primary page ends with the same footer — logo,
 * short description, Explore links, About links, copyright. "No page
 * should terminate without the footer. The footer communicates
 * completion."
 *
 * Before this component existed, this exact markup was hand-copied
 * across nine pages (homepage, /poems, /collection, /encounters + its
 * five detail pages...) and had drifted: some had two link columns,
 * some had three with overlapping links, and three primary pages
 * (/journal, /journal/[category], /about) had no footer at all. A
 * single shared component — same pattern already used for
 * WayfindingBand and FooterSocial — fixes the drift once and makes it
 * structurally impossible to recur: every page importing Footer gets
 * the identical, current footer automatically.
 *
 * Always pair with WayfindingBand immediately above it — the band is
 * universal site navigation ("where would you like to continue?"); the
 * footer is site information and closes the page.
 */

const EXPLORE_LINKS = [
  { label: 'Collection', href: '/collection' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Encounters', href: '/encounters' },
  { label: 'Journal', href: '/journal' },
]

const ABOUT_LINKS = [
  { label: 'Formation & Provenance', href: '/about' },
  // Added 2026-06-28 per Susan's directive: findable from the footer,
  // but deliberately not in main nav — see /foundation/page.tsx.
  { label: 'Foundation', href: '/foundation' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Use', href: '/terms' },
]

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" aria-label="AwakenArts home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/brand/logo-reversed.svg"
              alt="AwakenArts"
              className="footer-logo"
              width={500}
              height={170}
              loading="lazy"
            />
          </Link>
          <p>
            An artistic body of work shaped through image and language.
            The works express emotion and meaning in symbolic form, where
            word and image reveal archetypal patterns of thought and
            inward experience. By Susan Ann Shepler.
          </p>
          <FooterSocial />
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            {EXPLORE_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>About</h4>
          <ul>
            {ABOUT_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 AwakenArts · awakenarts.com · All Rights Reserved</span>
        <span>© Susan Ann Shepler · Confidential</span>
      </div>
    </footer>
  )
}
