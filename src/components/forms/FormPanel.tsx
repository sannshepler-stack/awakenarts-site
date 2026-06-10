'use client'

// ─── FormPanel ───────────────────────────────────────────────────────────────
// AwakenArts · The Forms · single Form panel
//
// Cinematic, image-led panel. Three render modes:
//
//   • With image + video — still image is the resting state in a 4:5
//                          frame; an atmospheric video is layered over
//                          it at opacity 0 and fades in on hover /
//                          focus-within while playback is triggered
//                          via the ref. On leave / blur the video
//                          pauses, resets to t=0, and fades back out.
//
//   • With image only    — still image fills the frame; the same
//                          hover lift applies (scale + brightness +
//                          inset gold border).
//
//   • Placeholder        — name displayed in a quiet dark frame; whole
//                          panel at reduced opacity to signal
//                          "in preparation." No hover behavior.
//
// No interpretations, no journal prompts, no symbol explanations,
// no full poem text. Image + name only.
// ─────────────────────────────────────────────────────────────────────────────

import { useCallback, useEffect, useRef } from 'react'
import styles from './FormPanel.module.css'
import { hasImage, hasVideo, type SymbolicForm } from './types'

interface FormPanelProps {
  form: SymbolicForm
}

export default function FormPanel({ form }: FormPanelProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const startVideo = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    // Promise rejection (e.g. autoplay policy) is harmless — fall back
    // to the still image silently.
    void v.play().catch(() => {})
  }, [])

  const stopVideo = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.pause()
    v.currentTime = 0
  }, [])

  // ─── Autoplay on mount (for forms with autoplayVideo: true) ───────────
  useEffect(() => {
    if (form.autoplayVideo && videoRef.current) {
      void videoRef.current.play().catch(() => {})
    }
  }, [form.autoplayVideo])

  // ─── Placeholder mode ──────────────────────────────────────────────────
  if (!hasImage(form)) {
    return (
      <figure
        className={`${styles.panel} ${styles.panelPlaceholder}`}
        aria-label={`${form.name} — image to come`}
      >
        <div className={styles.placeholderFrame}>
          <span className={styles.placeholderHint}>Forthcoming</span>
        </div>
        <figcaption className={styles.name}>{form.name}</figcaption>
      </figure>
    )
  }

  // ─── Standard / video mode ─────────────────────────────────────────────
  const withVideo = hasVideo(form)
  const autoplay = form.autoplayVideo && withVideo

  return (
    <figure
      className={styles.panel}
      onMouseEnter={withVideo && !autoplay ? startVideo : undefined}
      onMouseLeave={withVideo && !autoplay ? stopVideo : undefined}
      onFocus={withVideo && !autoplay ? startVideo : undefined}
      onBlur={withVideo && !autoplay ? stopVideo : undefined}
    >
      <div className={styles.imageFrame} tabIndex={withVideo && !autoplay ? 0 : -1}>
        {/* Still image — hidden when autoplay is active */}
        {!autoplay && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={form.imageSrc}
            alt={form.imageAlt ?? form.name}
            className={styles.image}
            draggable={false}
            loading="lazy"
            style={form.imagePosition ? { objectPosition: form.imagePosition } : undefined}
          />
        )}

        {withVideo && (
          <video
            ref={videoRef}
            className={autoplay ? styles.videoAutoplay : styles.video}
            src={form.videoSrc}
            muted
            playsInline
            loop
            preload={autoplay ? 'auto' : 'metadata'}
            aria-hidden="true"
            style={form.imagePosition ? { objectPosition: form.imagePosition } : undefined}
          />
        )}
      </div>

      <figcaption className={styles.name}>{form.name}</figcaption>
    </figure>
  )
}
