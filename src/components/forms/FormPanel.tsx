// ─── FormPanel ───────────────────────────────────────────────────────────────
// AwakenArts · The Forms · single Form panel
//
// Cinematic, image-led panel. Two render modes:
//
//   • With image    — still image fills a 4:5 frame; poem name beneath.
//                     Hover / focus-within triggers a subtle lift:
//                       slow scale (1 → 1.025)
//                       gentle brightness lift (0.96 → 1.05)
//                       soft inset gold border fades in
//                     Animation is CSS-only, ~700ms cubic-bezier,
//                     prefers-reduced-motion respected.
//
//   • Placeholder   — name displayed in a quiet dark frame; whole panel
//                     at reduced opacity to signal "in preparation."
//                     No hover behavior — there is no image to lift.
//
// No interpretations, no journal prompts, no symbol explanations,
// no full poem text. Image + name only.
// ─────────────────────────────────────────────────────────────────────────────

import styles from './FormPanel.module.css'
import { hasImage, type SymbolicForm } from './types'

interface FormPanelProps {
  form: SymbolicForm
}

export default function FormPanel({ form }: FormPanelProps) {
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

  return (
    <figure className={styles.panel}>
      <div className={styles.imageFrame}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={form.imageSrc}
          alt={form.imageAlt ?? form.name}
          className={styles.image}
          draggable={false}
          loading="lazy"
        />
      </div>
      <figcaption className={styles.name}>{form.name}</figcaption>
    </figure>
  )
}
