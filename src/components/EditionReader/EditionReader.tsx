'use client'

// EditionReader — Implementation Spec v1.0, Section 5. Holds the current
// section index and advances via arrow keys, swipe, or the side nav
// buttons (tap-edge). Exactly one EditionReaderSection is in view at a
// time, per Task 3's pacing requirement — never continuous scroll across
// sections (a single section's own text may scroll internally; see
// EditionReaderSection's long-text note).
//
// Top bar is the only chrome: Edition title as a single "← [Edition
// Title]" return anchor, plus the quiet ProgressMarker. No Nav, no
// WayfindingBand, no Footer while reading — both return once the visitor
// exits to the landing page via that anchor, per Spec Section 5.

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState, type TouchEvent } from 'react'
import type { Edition } from '@/data/editions'
import EditionReaderSection from './EditionReaderSection'
import ProgressMarker from './ProgressMarker'

const SWIPE_THRESHOLD = 50

export default function EditionReader({ edition }: { edition: Edition }) {
  const sections = edition.sections
  const total = sections.length
  const [index, setIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const goNext = useCallback(() => {
    setIndex((i) => Math.min(i + 1, total - 1))
  }, [total])

  const goPrev = useCallback(() => {
    setIndex((i) => Math.max(i - 1, 0))
  }, [])

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      // Don't hijack arrow/page keys while the visitor is typing in the
      // Acquire section's email field (or any future form field) — those
      // keys need to move the text cursor, not change sections.
      const target = e.target as HTMLElement | null
      const isEditable =
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable)
      if (isEditable) return

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault()
        goNext()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        goPrev()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goNext, goPrev])

  function handleTouchStart(e: TouchEvent<HTMLDivElement>) {
    touchStartX.current = e.touches[0]?.clientX ?? null
  }

  function handleTouchEnd(e: TouchEvent<HTMLDivElement>) {
    const startX = touchStartX.current
    touchStartX.current = null
    if (startX === null) return

    // Don't hijack drags/swipes that begin inside the Acquire form (e.g.
    // selecting text in the email field) into a section change.
    const target = e.target as HTMLElement | null
    if (target?.closest('form')) return

    const endX = e.changedTouches[0]?.clientX ?? startX
    const delta = endX - startX
    if (delta <= -SWIPE_THRESHOLD) goNext()
    else if (delta >= SWIPE_THRESHOLD) goPrev()
  }

  if (total === 0) {
    // Defensive only — every Edition wired to /read should have a built
    // sections array. Keeps the route from rendering a blank screen if
    // one doesn't yet (e.g. the other five Editions' current stubs).
    return (
      <div className="reader-shell reader-shell--empty">
        <p>This Edition&rsquo;s Reader isn&rsquo;t built yet.</p>
        <Link href={`/editions/${edition.slug}`} className="reader-topbar__back">
          ← {edition.title}
        </Link>
      </div>
    )
  }

  const section = sections[index]

  return (
    <div className="reader-shell" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <header className="reader-topbar">
        <Link href={`/editions/${edition.slug}`} className="reader-topbar__back">
          ← {edition.title}
        </Link>
        <ProgressMarker index={index} total={total} />
      </header>

      <main className="reader-stage">
        <EditionReaderSection section={section} edition={edition} />
      </main>

      {/* 2026-08-19 — chevrons switched from Unicode glyphs ('‹'/'›',
          rendered via var(--serif), a Google-hosted webfont) to inline
          SVG paths, per Susan's report that the Next control was
          invisible/unusable specifically in Safari on macOS, while Prev
          (grayed, disabled) still appeared. That asymmetry — one glyph
          painting, its mirror not — matches a known WebKit failure mode:
          position:fixed elements can fail to repaint a character after
          an async webfont swap, leaving the glyph blank until some other
          repaint trigger fires. It could not be reproduced in Chromium
          (font-swap repaint bugs are WebKit-specific), so it wasn't
          visible to this repo's own testing. An inline SVG chevron has
          no font dependency and always paints, closing off that failure
          mode regardless of which browser is at fault. Same chevron
          shape/position/size as before — a functional substitution, not
          a redesign. */}
      <button
        type="button"
        className="reader-nav reader-nav--prev"
        onClick={goPrev}
        disabled={index === 0}
        aria-label="Previous section"
      >
        <svg viewBox="0 0 24 24" width="1.1em" height="1.1em" aria-hidden="true" focusable="false">
          <polyline
            points="15 5, 8 12, 15 19"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        type="button"
        className="reader-nav reader-nav--next"
        onClick={goNext}
        disabled={index === total - 1}
        aria-label="Next section"
      >
        <svg viewBox="0 0 24 24" width="1.1em" height="1.1em" aria-hidden="true" focusable="false">
          <polyline
            points="9 5, 16 12, 9 19"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}
