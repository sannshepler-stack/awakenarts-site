'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// Nav — persistent site header.
// 2026-07-14 "Header Logo Correction," per Susan: the header now carries
// the complete header logo (full horizontal lockup, on-navy transparent
// PNG, same production pipeline as the footer logo — no live-rendered
// text, no baked background). The homepage hero keeps its own separate,
// larger logo lockup unchanged; this is scoped to the shared nav only.
// Two pre-built assets swap by breakpoint via CSS (.nav-logo--full /
// .nav-logo--compact below in globals.css) rather than shrinking one
// asset indefinitely, so the mark stays legible instead of clipping:
// full lockup (with tagline) above 1024px, compact lockup (no tagline)
// at and below it. Both are fixed-height/auto-width with no absolute
// positioning, negative margins, or transforms, so they can only ever
// make the nav bar taller, never overflow it horizontally.

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

      {/* Left: complete header logo. Two pre-built on-navy PNGs swap by
          breakpoint via CSS display rules (globals.css .nav-logo--full /
          .nav-logo--compact) — full lockup above 1024px, compact (no
          tagline) at and below it, so the mark stays legible instead of
          shrinking indefinitely or clipping. */}
      <div className="nav-left">
        <Link href="/" onClick={close} aria-label="AwakenArts home" className="nav-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/brand/exports/AwakenArts-Logo-FullHorizontal-OnNavy-1024.png"
            alt="AwakenArts"
            className="nav-logo nav-logo--full"
            width={1024}
            height={217}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/brand/exports/AwakenArts-Logo-CompactHorizontal-OnNavy-1024.png"
            alt="AwakenArts"
            className="nav-logo nav-logo--compact"
            width={1024}
            height={165}
          />
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
