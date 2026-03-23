'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav style={{ padding: scrolled ? '.4rem 3rem' : '.6rem 3rem' }}>
      {/*
        logo-nav.png has a solid black background.
        mix-blend-mode: screen (in globals.css) makes the black invisible
        against the deep navy nav bar — calligraphy and gold ring show through.
      */}
      <Link href="/" onClick={close}>
        <Image
          src="/images/brand/logo-nav.png"
          alt="AwakenArts — Symbols Speak. The Soul Listens."
          width={700}
          height={336}
          className="nav-logo-img"
          priority
        />
      </Link>

      <ul className={`nav-links${open ? ' open' : ''}`} id="nav-links">
        <li><Link href="#path"      onClick={close}>The Path</Link></li>
        <li><Link href="#deck"      onClick={close}>Guidance Deck</Link></li>
        <li><Link href="#library"   onClick={close}>Library</Link></li>
        <li><Link href="#offerings" onClick={close}>Offerings</Link></li>
        <li><Link href="#about"     onClick={close}>About</Link></li>
        <li>
          <Link href="#begin" className="nav-begin" onClick={close}>
            Begin Here
          </Link>
        </li>
      </ul>

      <button
        className="nav-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
