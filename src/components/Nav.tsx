'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'Begin Here',    href: '/begin',      cta: true  },
  { label: 'The Path',      href: '/path',       cta: false },
  { label: 'Library',       href: '/library',    cta: false },
  { label: 'Guidance Deck', href: '/deck',       cta: false },
  { label: 'Gallery',       href: '/gallery',    cta: false },
  { label: 'Offerings',     href: '/#offerings', cta: false },
  { label: 'About',         href: '/about',      cta: false },
]

export default function Nav() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname                = usePathname()
  const isHome                  = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>

      {/* Left: logo + tagline — always visible */}
      <div className="nav-left">
        <Link href="/" onClick={close} aria-label="AwakenArts home" className="nav-brand">
          {!isHome && (
            <Image
              src="/images/brand/logo.png"
              alt="AwakenArts"
              width={160}
              height={160}
              className="nav-logo"
              priority
            />
          )}
          <span className="nav-tagline">Symbols Speak.&nbsp;The Soul Listens</span>
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
