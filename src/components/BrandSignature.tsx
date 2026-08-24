/*
 * BrandSignature — the expanded tagline section beneath the Hero
 * ("When Images Become Words / and Language Shapes a Path").
 *
 * 2026-08-24, per Susan's "CLAUDE DIRECTIVE — HOMEPAGE TAGLINE MOTION
 * PROTOTYPE": became a client component carrying an A/B review toggle
 * between the original static treatment and a slow CSS marquee, for
 * her to compare in localhost.
 *
 * 2026-08-24, later the same day, per Susan's "CLAUDE DIRECTIVE —
 * REPLACE TICKER WITH SOFT PHRASE FADE": the marquee/ticker treatment
 * is discontinued outright — "we will not use the ticker treatment" —
 * along with its A/B toggle. Replaced with a soft two-phrase fade-in:
 * "When Images Become Words" fades in first, "And Language Shapes a
 * Path" follows with a delayed fade, then both simply remain — a
 * single, one-time arrival, no loop.
 *
 * 2026-08-24, later still, per her follow-up: a single fade risked a
 * visitor arriving just after page load missing the effect entirely.
 * Her explicit sequence: fade in -> hold -> fade/reset, repeated twice
 * more (three complete cycles total), and only on the THIRD cycle does
 * the sequence skip its own fade/reset and settle -- "leave the
 * complete tagline visible and still" -- rather than looping
 * indefinitely, which she was explicit would "turn a quiet detail into
 * constant movement." Implemented as: each line runs a repeating
 * fade-in/hold/fade-out/pause keyframe for exactly 2 iterations (cycles
 * 1 and 2), immediately followed by a separate one-shot fade-in
 * animation with `animation-fill-mode: forwards` (cycle 3) that has no
 * fade-out step at all and simply holds forever. The two animations'
 * active windows are timed back-to-back with no gap, so the visual
 * result reads as one continuous three-cycle sequence, not two
 * separate effects. See the two keyframes and their timing comment in
 * globals.css for the exact numbers.
 *
 * No JS/interactivity is needed for this treatment — it's pure CSS
 * (see .brand-signature-fade__line and its keyframes in globals.css),
 * so this file is a plain server component, not 'use client'.
 * `prefers-reduced-motion: reduce` is handled in that same CSS: a
 * reduced-motion visitor sees the complete tagline immediately,
 * statically, no animation, no cycling.
 *
 * Wording for THIS prototype capitalizes "And" in the second line, per
 * Susan's explicit instruction ("the wording is locked for this
 * prototype, including the capital A in And") — distinct from the
 * lowercase "and" used elsewhere in the site's own governing tagline
 * copy. Locked as given; not to be normalized to lowercase without
 * asking her first.
 *
 * THIS REMAINS A PROTOTYPE FOR REVIEW, NOT AN APPROVED DESIGN.
 */

export default function BrandSignature() {
  return (
    <section className="brand-signature" aria-label="AwakenArts">
      <p className="brand-signature__text brand-signature-fade">
        <span className="brand-signature-fade__line brand-signature-fade__line--1">
          When Images Become Words
        </span>
        <br />
        <span className="brand-signature-fade__line brand-signature-fade__line--2">
          And Language Shapes a Path
        </span>
      </p>
    </section>
  )
}
