'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// Nav — text links only.
// The logo lives in the homepage hero; it is deliberately not repeated here.
// Keeping a small wordmark link on the left so there is still a way home.

// Gallery (formerly Poems) directive (2026-06-29): the Poems page is
// renamed Gallery — quiet browsing and appreciation, not part of the
// marketing sequence. See AwakenArts_Publishing_Platform_Architecture.md.
const links = [
  { label: 'Encounters', href: '/encounters', cta: false },
  { label: 'Collection', href: '/collection', cta: false },
  { label: 'Gallery',    href: '/gallery',    cta: false },
  { label: 'Journal',    href: '/journal',    cta: false },
  { label: 'About',      href: '/about',      cta: false },
]

// Unlisted Page System (locked 2026-06-27): some pages are built and live
// on the site but deliberately left out of this list (and out of
// WayfindingBand / Footer) so they're reachable only by direct URL —
// e.g. /workshops. See AwakenArts_Site_Architecture.md -> "Unlisted Page
// System" for the full convention and current roster.

export default function Nav() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>

      {/* Left: text home link only. No logo image. */}
      <div className="nav-left">
        <Link href="/" onClick={close} aria-label="AwakenArts home" className="nav-brand">
          <span className="nav-tagline">AwakenArts</span>
        </Link>
      </div>

      {/* Center: nav links — Begin Here first, evenly spaced */}
      <ul className={`nav-links${open ? ' open' : ''}`} id="nav-links">
        {links.map(({ label, href, cta }) => (
          <li key={href}>
            <Link
              href={href}
              onClick={close}
              className={cta ? 'nav-link-cta' : undefined}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right: hamburger (mobile only) */}
      <div className="nav-right">
        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen(o => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

    </nav>
  )
}
