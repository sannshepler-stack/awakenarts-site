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
 * 2026-08-24, later still, per her "REVISE TAGLINE FADE TIMING"
 * directive: the exit was staggered too (line 2 fading out ~1s after
 * line 1), which meant line 1 started disappearing before the
 * complete two-line statement had finished arriving/being read. Fixed
 * by giving line 1 and line 2 DIFFERENT keyframe shapes sharing one
 * cycle duration: line 1 fades in immediately and holds; line 2 stays
 * invisible through line 1's entrance and a noticeably longer gap
 * (~1.9s, her requested 1.8-2.0s range), then fades in -- and now both
 * lines hold together and fade out AT THE SAME PERCENTAGES, so the
 * disappearance is synchronized rather than staggered. Same three-
 * cycle structure as before (2 full loop iterations, then a settle
 * pass that fades in and holds forever). See globals.css's own timing
 * comment for the full six-parameter derivation (fadeDuration, gap,
 * hold, fadeOut, pause, initialDelay).
 *
 * 2026-08-24, later still, per her "FINAL TIMING REFINEMENT" directive
 * ("The fade choreography is correct... refining lag time only, not
 * redesigning the animation"): two of the six parameters tightened --
 * the entrance gap (1.9s -> 1.1s, "the second thought should arrive
 * sooner so the two phrases feel more connected") and the empty pause
 * before the next cycle (0.6s -> 0.3s, "only a brief quiet beat").
 * fadeDuration, hold, fadeOut, and initialDelay are unchanged. Cycle
 * length is now 7.6s (was 8.7s); the full sequence settles at ~19.4s
 * (was ~22.4s). Same choreography, same three cycles, same
 * synchronized fade-out -- only the two lag intervals moved.
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
