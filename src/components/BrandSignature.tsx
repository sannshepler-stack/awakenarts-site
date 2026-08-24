'use client'

import { useState } from 'react'

/*
 * BrandSignature — the expanded tagline section beneath the Hero
 * ("When Images Become Words / and Language Shapes a Path").
 *
 * 2026-08-24, per Susan's "CLAUDE DIRECTIVE — HOMEPAGE TAGLINE MOTION
 * PROTOTYPE": this component exists so she can compare, in localhost,
 * the original static treatment (A) against a restrained slow-marquee
 * alternative (B). THIS IS A PROTOTYPE FOR REVIEW, NOT AN APPROVED
 * DESIGN. The A/B toggle below is a review aid only — not part of the
 * approved homepage — and should be removed (reverting to a plain
 * static section, or wired permanently to whichever option she picks)
 * once she decides. Wording is locked verbatim in both treatments,
 * per her explicit "do not rewrite it."
 *
 * Treatment A (static) is exactly the markup/styling this section
 * carried before this prototype pass — see .brand-signature__text in
 * globals.css, unchanged.
 *
 * Treatment B (motion) is a CSS-only keyframe marquee — no animation
 * library, nothing commercial-ticker in character. One content track
 * is duplicated exactly once and translated by exactly -50% of its
 * own rendered width, so the loop has no visible seam or reset jump.
 * Very slow and linear (70s per full loop), per her explicit "must be
 * very slow and smooth... no news-ticker appearance... no commercial
 * banner appearance... no abrupt entrance, bounce, pulse, flashing."
 * Same serif/italic/gold treatment and the same apparent type size as
 * the static version (.brand-signature__text's own clamp()) — only
 * the motion and the repeated-with-middot sequencing are new. Generous
 * horizontal spacing between repetitions (see
 * .brand-signature-marquee__item's padding) per her "maintain generous
 * spacing between repetitions."
 *
 * Accessibility: the marquee's repeated on-screen copies are decorative
 * (aria-hidden) — a single, visually-hidden (.sr-only) instance of the
 * full tagline is the one thing screen readers actually announce in
 * Motion mode. `prefers-reduced-motion: reduce` is handled in CSS: even
 * when Motion is the selected comparison mode, a reduced-motion visitor
 * sees a static single-line treatment instead of the moving track, per
 * her explicit instruction — see .brand-signature-marquee__reduced-
 * fallback and its media query in globals.css.
 */

const LOCKED_LINE_1 = 'When Images Become Words'
const LOCKED_LINE_2 = 'and Language Shapes a Path'

// One full pass through her example sequence ("...Words · ...Path ·
// ...Words · ...Path"), repeated enough times that the track
// comfortably spans the widest expected viewport before the loop
// point recurs.
const SEQUENCE = [LOCKED_LINE_1, LOCKED_LINE_2, LOCKED_LINE_1, LOCKED_LINE_2]

function MarqueeCopy() {
  return (
    <div className="brand-signature-marquee__copy">
      {SEQUENCE.map((text, i) => (
        <span className="brand-signature-marquee__item" key={i}>
          {text}
          <span className="brand-signature-marquee__sep" aria-hidden="true">&middot;</span>
        </span>
      ))}
    </div>
  )
}

export default function BrandSignature() {
  const [mode, setMode] = useState<'static' | 'motion'>('static')

  return (
    <section className="brand-signature" aria-label="AwakenArts">
      {/* Prototype comparison toggle — review aid only, see header
          comment. Not part of the approved design. */}
      <div
        className="brand-signature-proto-toggle"
        role="group"
        aria-label="Tagline treatment comparison (prototype)"
      >
        <span className="brand-signature-proto-toggle__label">
          Prototype comparison — not final:
        </span>
        <button
          type="button"
          className={mode === 'static' ? 'is-active' : ''}
          onClick={() => setMode('static')}
        >
          A — Static
        </button>
        <button
          type="button"
          className={mode === 'motion' ? 'is-active' : ''}
          onClick={() => setMode('motion')}
        >
          B — Motion
        </button>
      </div>

      {mode === 'static' ? (
        <p className="brand-signature__text">
          {LOCKED_LINE_1}
          <br />
          {LOCKED_LINE_2}
        </p>
      ) : (
        <>
          <p className="sr-only">
            {LOCKED_LINE_1} {LOCKED_LINE_2}
          </p>
          <div className="brand-signature-marquee" aria-hidden="true">
            <p className="brand-signature-marquee__reduced-fallback brand-signature__text">
              {LOCKED_LINE_1}
              <br />
              {LOCKED_LINE_2}
            </p>
            <div className="brand-signature-marquee__track">
              <MarqueeCopy />
              <MarqueeCopy />
            </div>
          </div>
        </>
      )}
    </section>
  )
}
