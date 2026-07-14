'use client'

// FoundationPoemLightbox — 2026-07-14, per Susan: the "A Watery Cross"
// thumbnail on /foundation used to link straight to the raw
// watery_cross.png in a new tab. That file is only 594x741 natively (the
// artwork's actual master resolution — there's no larger source to swap
// in), and a browser's default image view shows it at native pixel size
// with no framing, which reads as small and washes out the poem's finer
// tapering lines. This keeps the exact same thumbnail-in-the-column
// experience, but clicking it now opens the full image large and framed
// in an on-page overlay instead of handing off to a bare browser tab —
// solves the readability complaint without introducing a new route
// (this page's own comment already rules that out, matching /gallery's
// "no links, no new decisions" scoping).
//
// Deliberately not a generic/reusable lightbox component — just enough
// here to serve this one poem. If a second image needs the same
// treatment later, worth generalizing then, not before.

import { useEffect, useState } from 'react'

export default function FoundationPoemLightbox() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="foundation-poem-link"
        aria-haspopup="dialog"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/mandala/watery_cross-thumb.png"
          alt="A Watery Cross — a shaped poem about a ship anchored near shore, guided by moonlight, its lines tapering into the form of a cross."
          className="foundation-poem-thumb"
        />
        <span className="foundation-poem-caption">A Watery Cross</span>
      </button>

      {open && (
        <div
          className="foundation-poem-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="A Watery Cross, shown at full size"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            className="foundation-poem-overlay-close"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            &times;
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/mandala/watery_cross.png"
            alt="A Watery Cross — a shaped poem about a ship anchored near shore, guided by moonlight, its lines tapering into the form of a cross."
            className="foundation-poem-overlay-img"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
