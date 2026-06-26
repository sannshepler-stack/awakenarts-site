'use client'

/*
 * ProtectedImage — per the "Homepage / Collection Flow Revision" directive's
 * image-protection requirements: the Figure Editions are intellectual
 * property, and edition preview images should discourage casual copying
 * (right-click save, drag-and-drop save) while remaining fully accessible
 * (alt text intact, no interference with normal viewing or with the
 * surrounding <Link> click-to-navigate behavior).
 *
 * This is deliberately a "reasonable, not absolute" layer — no web-based
 * protection can fully prevent copying, and this component doesn't try to.
 * It only adds friction against the simplest, most casual save paths:
 *   - onContextMenu: blocks the right-click "Save image as..." menu
 *   - onDragStart + draggable=false: blocks drag-out-to-save
 *   - CSS (see .protected-img in globals.css): disables the iOS long-press
 *     "Save to Photos" callout and text/image selection highlighting
 *
 * Kept as its own small client component (rather than marking the whole
 * page 'use client') so the pages that use it — /collection and
 * /editions/[slug] — stay server components apart from this one leaf.
 */
export default function ProtectedImage({
  src,
  alt,
  className,
  loading = 'lazy',
}: {
  src: string
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className ? `protected-img ${className}` : 'protected-img'}
      loading={loading}
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    />
  )
}
