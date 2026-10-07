'use client'

import { useEffect, useState } from 'react'

// PoemEnlarge — the Queen Ann poem image, with a click-to-enlarge view so
// the concrete poem can be read comfortably (2026-10-07, Susan).

export default function PoemEnlarge({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <>
      <button type="button" className="poem-enlarge__trigger" onClick={() => setOpen(true)} aria-label="Enlarge the poem">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="poem-enlarge__img" loading="lazy" />
        <span className="poem-enlarge__hint">Enlarge the poem</span>
      </button>
      {open && (
        <div className="poem-enlarge__overlay" role="dialog" aria-modal="true" aria-label={alt} onClick={() => setOpen(false)}>
          <button type="button" className="poem-enlarge__close" onClick={() => setOpen(false)} aria-label="Close">
            ×
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="poem-enlarge__full" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  )
}
