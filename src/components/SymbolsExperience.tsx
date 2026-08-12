'use client'

// SymbolsExperience — the interactive body of /symbols ("Symbols for the
// Christian Soul"). Two modes of engagement, per Susan's brief: image ->
// encounter -> recognition (the cards, now the page's visual entrance),
// and word -> symbolic meaning (the vocabulary, the second, informational
// way of exploring the same symbols).
//
// 2026-08-11 revision, per Susan: cards moved above vocabulary, and the
// card interaction itself changed from an in-grid crossfade to a large
// lightbox ("encounter view") — the grid shows fronts only; clicking a
// card opens it large, with a discreet close control and previous/next
// controls to move between cards without leaving the lightbox. Full 2:3
// (or each card's own native) proportions are preserved throughout via
// object-fit: contain — nothing is ever cropped.
//
// 2026-08-12 correction, per Susan: the visitor has already encountered
// the front in the gallery grid before clicking a card, so opening the
// lightbox on the front again read as the complete experience — the
// left/right nav made it easy to browse every card without ever
// discovering the back. The lightbox now opens directly to the BACK
// (the "reflection") of the selected card, and prev/next between cards
// while the lightbox is open also lands on each card's back, since the
// visitor is already in "going deeper" mode at that point. A small,
// explicit "View Image" / "View Reflection" toggle (not just a click on
// the card itself) lets the visitor move between the two sides.
//
// Built as a single client component so the grid, the lightbox, and the
// vocabulary reveal can share one deep-link entry point (`initialSlug`,
// passed down from /symbols/[slug]/page.tsx) without the vocabulary list
// itself ever moving or reflowing when a word is chosen.

import { useCallback, useEffect, useRef, useState } from 'react'
import { SYMBOLS, CARD_SYMBOLS } from '@/data/symbols'

interface SymbolsExperienceProps {
  /** A symbol slug to open already in focus — used by /symbols/[slug]. */
  initialSlug?: string
}

export default function SymbolsExperience({ initialSlug }: SymbolsExperienceProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null)
  const [openSlug, setOpenSlug] = useState<string | null>(null)
  const [showBack, setShowBack] = useState(false)

  const revealRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<Map<string, HTMLButtonElement>>(new Map())

  const openIndex = openSlug ? CARD_SYMBOLS.findIndex((s) => s.slug === openSlug) : -1
  const openSymbol = openIndex >= 0 ? CARD_SYMBOLS[openIndex] : undefined

  // Opening the lightbox is the "go deeper" gesture — the front was
  // already the gallery encounter, so the lightbox opens straight to
  // the back (the reflection/scripture side).
  const openCard = useCallback((slug: string) => {
    setOpenSlug(slug)
    setShowBack(true)
  }, [])

  const closeCard = useCallback(() => setOpenSlug(null), [])

  // Moving to the next/previous card while the lightbox is already open
  // keeps the visitor in "reflection" mode rather than resetting them to
  // the front each time.
  const goTo = useCallback((dir: 1 | -1) => {
    setOpenSlug((current) => {
      if (!current) return current
      const idx = CARD_SYMBOLS.findIndex((s) => s.slug === current)
      const nextIdx = (idx + dir + CARD_SYMBOLS.length) % CARD_SYMBOLS.length
      return CARD_SYMBOLS[nextIdx].slug
    })
    setShowBack(true)
  }, [])

  // Deep-link focus: on mount, if a slug was supplied via the URL, select
  // it in the vocabulary reveal and, if it has finished card art, open the
  // lightbox on that card (back/reflection shown first, same as any other
  // open — arriving via a direct symbol link is itself an act of choosing
  // that card).
  useEffect(() => {
    if (!initialSlug) return
    const symbol = SYMBOLS.find((s) => s.slug === initialSlug)
    if (!symbol) return

    setActiveSlug(symbol.slug)

    if (symbol.hasCard) {
      requestAnimationFrame(() => {
        cardRefs.current.get(symbol.slug)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      })
      openCard(symbol.slug)
    } else {
      requestAnimationFrame(() => {
        revealRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      })
    }
    // Only ever run for the slug the page was loaded with.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // While the lightbox is open: lock background scroll and wire up
  // Escape / arrow-key / space-enter controls.
  useEffect(() => {
    if (!openSlug) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeCard()
      } else if (e.key === 'ArrowRight') {
        goTo(1)
      } else if (e.key === 'ArrowLeft') {
        goTo(-1)
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        setShowBack((v) => !v)
      }
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [openSlug, closeCard, goTo])

  const activeSymbol = activeSlug ? SYMBOLS.find((s) => s.slug === activeSlug) : undefined

  return (
    <>
      {/* ─── Section 1 — Encounter the Symbols (the cards) ───────────────
          The visual entrance. Grid shows fronts only; each card opens a
          large lightbox on click. */}
      <section className="symbols-cards-section" aria-labelledby="symbols-cards-heading">
        <h2 id="symbols-cards-heading" className="symbols-cards-heading">
          Encounter the Symbols
        </h2>

        <div className="symbols-cards-grid" ref={cardsRef}>
          {CARD_SYMBOLS.map((symbol) => (
            <button
              key={symbol.slug}
              ref={(el) => {
                if (el) cardRefs.current.set(symbol.slug, el)
              }}
              type="button"
              className="symbols-card"
              style={{ aspectRatio: symbol.aspectRatio }}
              onClick={() => openCard(symbol.slug)}
              aria-label={`${symbol.name} — activate to view`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={symbol.frontImage}
                alt={`${symbol.name} — card artwork`}
                className="symbols-card__img"
                loading="lazy"
                draggable={false}
              />
            </button>
          ))}
        </div>
      </section>

      {/* ─── Transition ───────────────────────────────────────────────── */}
      <div className="symbols-transition">
        <p>
          Symbols can be encountered.
          <br />
          They can also be understood.
        </p>
      </div>

      {/* ─── Section 2 — Symbol Vocabulary (the words) ─────────────────── */}
      <section className="symbols-vocab-section" aria-labelledby="symbols-vocab-heading">
        <h2 id="symbols-vocab-heading" className="symbols-vocab-heading">
          Symbol Vocabulary
        </h2>
        <p className="symbols-vocab-cue">Choose a symbol to discover its meaning.</p>

        <div className="symbols-vocab-list" role="list">
          {SYMBOLS.map((symbol, i) => (
            <span key={symbol.slug} role="listitem" className="symbols-vocab-item">
              <button
                type="button"
                className={`symbols-vocab-word${activeSlug === symbol.slug ? ' is-active' : ''}`}
                onClick={() => setActiveSlug(symbol.slug)}
                aria-pressed={activeSlug === symbol.slug}
              >
                {symbol.name}
              </button>
              {i < SYMBOLS.length - 1 && (
                <span className="symbols-vocab-sep" aria-hidden="true">·</span>
              )}
            </span>
          ))}
        </div>

        {/* Fixed reveal area — content changes here, the list above never moves. */}
        <div className="symbols-vocab-reveal" ref={revealRef} aria-live="polite">
          {activeSymbol ? (
            <div className="symbols-vocab-reveal__inner">
              <p className="symbols-vocab-reveal__name">{activeSymbol.name}</p>
              <p className="symbols-vocab-reveal__meanings">
                {activeSymbol.meanings.join(' · ')}
              </p>
              <p className="symbols-vocab-reveal__ref">{activeSymbol.scriptureReference}</p>
            </div>
          ) : (
            <div className="symbols-vocab-reveal__inner symbols-vocab-reveal__inner--empty" aria-hidden="true" />
          )}
        </div>
      </section>

      {/* ─── Lightbox — the large encounter view ───────────────────────── */}
      {openSymbol && (
        <div
          className="symbols-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${openSymbol.name} card`}
          onClick={closeCard}
        >
          <button
            type="button"
            className="symbols-lightbox__close"
            onClick={(e) => {
              e.stopPropagation()
              closeCard()
            }}
            aria-label="Close"
          >
            ×
          </button>

          {CARD_SYMBOLS.length > 1 && (
            <>
              <button
                type="button"
                className="symbols-lightbox__nav symbols-lightbox__nav--prev"
                onClick={(e) => {
                  e.stopPropagation()
                  goTo(-1)
                }}
                aria-label="Previous symbol"
              >
                ‹
              </button>
              <button
                type="button"
                className="symbols-lightbox__nav symbols-lightbox__nav--next"
                onClick={(e) => {
                  e.stopPropagation()
                  goTo(1)
                }}
                aria-label="Next symbol"
              >
                ›
              </button>
            </>
          )}

          <div className="symbols-lightbox__stage" onClick={(e) => e.stopPropagation()}>
            <div
              className="symbols-lightbox__frame"
              style={{ aspectRatio: openSymbol.aspectRatio }}
              role="button"
              tabIndex={0}
              aria-pressed={showBack}
              aria-label={`${openSymbol.name} — ${showBack ? 'showing reflection, activate to return to the artwork' : 'activate to reveal its reflection'}`}
              onClick={() => setShowBack((v) => !v)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  e.stopPropagation()
                  setShowBack((v) => !v)
                }
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={openSymbol.frontImage}
                alt={`${openSymbol.name} — card artwork`}
                className={`symbols-lightbox__img symbols-lightbox__img--front${showBack ? ' is-hidden' : ''}`}
                draggable={false}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={openSymbol.backImage}
                alt={`${openSymbol.name} — reflection and scripture`}
                className={`symbols-lightbox__img symbols-lightbox__img--back${showBack ? ' is-visible' : ''}`}
                draggable={false}
              />
            </div>

            {/* Explicit, visually restrained control for moving between
                the two sides — the card itself still toggles on click/tap
                (kept for continuity), but this is the discoverable way to
                find the other side without relying on an unexplained
                click on the artwork. */}
            <button
              type="button"
              className="symbols-lightbox__flip-toggle"
              onClick={() => setShowBack((v) => !v)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.stopPropagation()
                }
              }}
            >
              {showBack ? 'Card Front' : 'View Reflection'}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
