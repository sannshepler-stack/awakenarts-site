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
 * the entrance gap (1.9s -> 1.1s) and the empty pause before the next
 * cycle (0.6s -> 0.3s). fadeDuration, hold, fadeOut, and initialDelay
 * unchanged.
 *
 * 2026-08-24, later still, per her one-line follow-up ("just a little
 * sooner second line arrives -- timing of the repeat is good"): gap
 * tightened once more, 1.1s -> 0.8s. Nothing else moved -- the 0.3s
 * restart pause she confirmed as "good" is untouched, as are
 * fadeDuration, hold, and fadeOut. Cycle length is now 7.3s (was
 * 7.6s); the full sequence settles at ~18.5s. Same choreography, same
 * three cycles, same synchronized fade-out -- only the entrance gap
 * moved.
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
 * 2026-08-24, later still, per her "SECTION DIVIDER" directive: the
 * AwakenArts Section Divider ornament (the larger horizontal antique-
 * gold rule-leaf-rule mark, not the small leaf-only signature mark) is
 * added beneath the completed tagline, per her framing: "Fade =
 * movement/arrival. Divider = permanence/identity." Source asset,
 * identified from brand-assets/README.md's Editorial Ornament System
 * notes: AwakenArts-Divider-Complete-*.png -- the flattened composite
 * (thin gold rule, leaf pair, thin gold rule), already approved as
 * "the definitive AwakenArts pause mark," not the LeafPair-only
 * component piece. Copied as-is (no crop, no color change, no
 * re-export) to public/images/brand/ornaments/ -- the directory the
 * README already anticipated for exactly this kind of placement.
 *
 * A first pass wrapped the tagline and the divider together in a new
 * .brand-signature__inner column and sized the divider at 45% of that
 * column. Two problems, both hers to catch: (1) the wrapper's 32ch
 * width was computed in the wrapper's own (non-italic, non-serif)
 * font context, not .brand-signature__text's -- a different ch metric
 * than the tagline itself used, so the "column" the divider was a
 * percentage of wasn't reliably the same width as the approved tagline
 * box. (2) at that computed size the rendered image came out roughly
 * 130x17px -- a 15x downscale of the 2000px master -- and the
 * source's gold rule is a single 1px hairline at 55% alpha even in its
 * own native export (verified: the -500px and -1000px pre-rendered
 * sizes both measure a 1px-thick rule at full resolution, not just the
 * -2000px master). Downscaled that far, the hairline all but
 * disappeared, leaving only the leaf visible -- which read, correctly,
 * as "the small centered botanical mark," not the rule-leaf-rule
 * divider. The file itself was never wrong (md5-verified byte-
 * identical to brand-assets/png-exports/dividers/), only rendered too
 * small to read as itself.
 *
 * Correction, same day: the .brand-signature__inner wrapper is
 * removed. .brand-signature__text goes back to owning its own 32ch
 * max-width/margin directly, byte-identical to the pre-divider CSS
 * (commit eb3db68) -- the tagline's box, centering, typography, and
 * fade are untouched by the divider work now, not just visually close
 * to before. The divider is a plain sibling <img> after the tagline,
 * sized independently (see .brand-signature__divider) at a width
 * large enough that the rule segments actually read as rule-leaf-rule
 * rather than collapsing into a blob -- judged visually against
 * several widths before landing on the current value. Same source
 * family, still the Complete composite, still copied as-is.
 *
 * It remains a plain <img>, entirely outside the fade animation --
 * per her explicit instruction that it stays visible throughout,
 * never fading -- so it renders at full opacity from first paint and
 * stays that way regardless of what .brand-signature-fade__line is
 * doing above it. (Her "Section Divider Asset Recovery" directive
 * afterward flagged that this Complete-composite file is NOT the
 * canonical #2 Section Divider she's after -- a full repo search
 * found no other divider asset anywhere in the project, reported to
 * her directly; this file stays in place only until the correct one
 * is recovered or created.)
 *
 * 2026-08-24, later still, per her "FADE SEQUENCE UPDATE" directive:
 * the three-cycle repeat/settle behavior above is removed. The tagline
 * now runs ONE entrance only -- line 1 fades in, line 2 follows after
 * the same gap, both simply stay visible for the rest of the page
 * session. No fade-out, no restart, no looping. Same initialDelay/
 * fadeDuration/gap values as before (0.3s/1.4s/0.8s) -- "do not
 * otherwise change the approved timing" -- only the repeat/fade-out
 * machinery is gone. See globals.css's own timing comment for the
 * simplified four-checkpoint sequence. The divider is unaffected --
 * it was never part of the animation to begin with.
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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/brand/ornaments/AwakenArts-Divider-Complete-2000.png"
        alt=""
        aria-hidden="true"
        className="brand-signature__divider"
        loading="lazy"
      />
    </section>
  )
}
