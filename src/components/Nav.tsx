'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// Nav — persistent site header.
// 2026-07-14 "Header Logo Correction," per Susan: the header carries the
// header logo, on-navy transparent PNG, same production pipeline as the
// footer logo — no live-rendered text, no baked background. The
// homepage hero keeps its own separate, larger logo lockup unchanged;
// this is scoped to the shared nav only.
// 2026-07-14, same day, follow-up correction: the full lockup (with
// tagline) originally used at desktop widths read with the tagline
// "too small" to be legible at header height. Per Susan — "use the
// inline logo created for this purpose without the tagline" — the nav
// now uses only the compact/inline lockup (the same no-tagline asset
// used on the Collection cover and footer) at every breakpoint, sized
// down at narrower widths rather than swapping assets. Fixed-height /
// auto-width, no absolute positioning, negative margins, or
// transforms, so it can only ever make the nav bar taller, never
// overflow it horizontally.

// Gallery (formerly Poems) directive (2026-06-29): the Poems page is
// renamed Gallery — quiet browsing and appreciation, not part of the
// marketing sequence. See AwakenArts_Publishing_Platform_Architecture.md.
const links = [
  // 2026-08-18, New Paradigm activation: Workshops is the central
  // conducted AwakenArts practice and therefore the first substantive
  // destination. Gallery remains available through the footer and page
  // pathways rather than competing with Workshops in primary navigation.
  { label: 'Workshops', href: '/workshops', cta: false },
  // 2026-07-25, per Susan's "AwakenArts Primer Housing Page" revision
  // directive: "Explore the Path" now leads to the Path document first
  // (orientation), not directly into Encounters (experience) -- the
  // Primer's own closing section ("Begin the Encounter Sequence") carries
  // the visitor onward from there. Encounters itself is untouched and
  // reachable on its own; this only changes where the site's primary
  // "Explore the Path" doorway leads.
  // 2026-07-26, per Susan's terminology-alignment pass: label shortened
  // from "Explore the Path" to "The Path" -- same destination, just the
  // settled short name for this section going forward.
  // 2026-07-27, per Susan's "no Primer anywhere" directive: destination
  // route renamed from /primer to /awakenarts-path (permanent redirect
  // from the old route lives in next.config.js).
  { label: 'The Path', href: '/awakenarts-path', cta: false },
  // 2026-08-11, per Susan's "Publish the Symbols page" directive: Symbols
  // enters primary nav directly after The Path. Per her clarification,
  // Journal keeps its existing position — only Symbols is newly inserted.
  { label: 'Symbols', href: '/symbols', cta: false },
  { label: 'Journal',    href: '/journal',    cta: false },
  { label: 'About',      href: '/about',      cta: false },
]

// Unlisted Page System (locked 2026-06-27): some pages are built and live
// on the site but deliberately left out of this list (and out of
// WayfindingBand / Footer) so they're reachable only by direct URL —
// see AwakenArts_Site_Architecture.md -> "Unlisted Page System" for the
// historical convention. The New Paradigm activation above supersedes that
// treatment for /workshops only.

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
      {/* 2026-07-14 "Header Container Alignment," per Susan: the navy
          bar itself (.nav) stays full-bleed edge-to-edge, but its
          content now sits inside .nav-inner — the same max-width +
          centering as .hero's own content container — so the logo's
          left edge lines up with the page's principal content
          boundary instead of sitting at a flat, viewport-relative
          padding. Only this containment changed: logo size, wordmark,
          nav-link position (still visually centered within the same
          box), header height, and all colors/spacing are untouched. */}
      <div className="nav-inner">

        {/* Left: header logo — the compact/inline lockup (no tagline),
            sized down at narrower breakpoints via globals.css .nav-logo. */}
        <div className="nav-left">
          <Link href="/" onClick={close} aria-label="AwakenArts home" className="nav-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/brand/exports/AwakenArts-Logo-CompactHorizontal-OnNavy-1024.png"
              alt="AwakenArts"
              className="nav-logo"
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

      </div>
    </nav>
  )
}
