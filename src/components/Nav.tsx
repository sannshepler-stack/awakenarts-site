'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { label: 'Home',          href: '/' },
  { label: 'The Path',      href: '/path' },
  { label: 'Experience', href: '/experience' },
  { label: 'Guidance Deck', href: '/deck' },
  { label: 'Library',       href: '/library' },
  { label: 'Offerings',     href: '#offerings' },
  { label: 'About',         href: '/about' },
]

export default function Nav() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <ul className={`nav-links${open ? ' open' : ''}`} id="nav-links">
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link href={href} onClick={close}>{label}</Link>
          </li>
        ))}
        <li>
          <Link href="/begin" className="nav-begin" onClick={close}>
            Begin Here
          </Link>
        </li>
      </ul>

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
    </nav>
  )
}
