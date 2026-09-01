import Link from 'next/link'

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
 * 2026-08-24, later still, per her "SECTION DIVIDER ASSET RECOVERY"
 * directive: she supplied the canonical #2 Section Divider directly
 * (AArts-Divider-Image-1.png, 1962x802) -- the symmetrical three-leaf
 * central flourish with extended horizontal rules, confirmed a
 * genuinely different design from the LeafPair/Complete asset used
 * above, which is retired from this placement (left defined, unused,
 * in globals.css, per no-silent-deletion; still referenced by its own
 * name where it may be needed elsewhere).
 *
 * The file as supplied was not actually a transparent PNG -- mode
 * RGB, with the transparency-checkerboard baked into the pixels
 * (uniform ~245/254 gray squares) rather than a real alpha channel,
 * most likely an exported "transparency preview" rather than a true
 * alpha export. Recovered real transparency via a color-key
 * extraction (checkerboard squares are neutral gray -- R=G=B --
 * while the gold ornament is saturated, so alpha derives from pixel
 * chroma) -- no redraw, no recolor, no added elements, just restoring
 * the alpha channel the file should have shipped with.
 *
 * First extraction pass judged "clean" from composited previews alone
 * turned out not to be, per her direct instruction not to trust the
 * visual preview: a scaled-chroma alpha with no floor left background
 * pixels at alpha 3-7 instead of exactly 0, because the checkerboard
 * itself carries ~1-3 levels of compression noise (R,G,B not perfectly
 * equal). Invisible on screen, but not actually zero. Fixed with a
 * hard threshold verified against the real noise ceiling (measured
 * max chroma 3 in pure-background strips) before choosing 6 as the
 * cutoff: alpha = 0 for chroma <= 6, else scaled. Re-verified
 * pixel-by-pixel, not visually: outermost border strip is alpha == 0
 * exactly (checked, not assumed), no fully-opaque near-black pixels
 * anywhere (ruling out a stray "black rectangle"), and composited over
 * white, cream, AND navy (--deep, #1C2B3A) -- all three checked, not
 * just the two from the first pass.
 *
 * Cropped to content bounds with a small pad -- 1894x271, ~6.99:1
 * aspect ratio, matching the source. Saved under the canonical name
 * she specified: brand-assets/png-exports/dividers/
 * AwakenArts-Section-Divider-Gold.png (documented in
 * brand-assets/README.md), copied as-is to
 * public/images/brand/ornaments/AwakenArts-Section-Divider-Gold.png
 * for live use. The raw upload is archived separately, for provenance,
 * at .../dividers/AwakenArts-Divider-2-RawUpload.png.
 *
 * Sizing note: her production spec gives two targets -- "18-26px
 * intended display height" AND "approximately 35-45% of text-block
 * width." This asset's actual proportions (6.98:1, much flatter/wider
 * than the previous leaf-pair file) can't satisfy both at once: 35%
 * of the ~605px text column would stand ~30px tall, already past the
 * height ceiling, and 45% would stand ~39px tall. Held to the exact
 * height range instead (the more specific, pixel-exact instruction,
 * and consistent with "restrained... quiet mark" from her original
 * framing) via height: clamp(18px, 1.6vw, 26px); width: auto --
 * which keeps proportions locked and produces a width of roughly
 * 24-27% of the text column on the desktop widths checked, short of
 * the 35-45% guideline. Flagged to her directly rather than silently
 * picking one target over the other.
 *
 * Same placement as before -- centered beneath both completed tagline
 * lines, never between them, outside the fade animation, always
 * opaque, never fades.
 *
 * THIS REMAINS A PROTOTYPE FOR REVIEW, NOT AN APPROVED DESIGN.
 *
 * 2026-08-31, per Susan's "Hero / Section 2 swap" directive: this
 * section and the Hero's CTA traded places, because the animated
 * tagline directly beneath the Hero (same cream background, same
 * general color palette) was reading as a continuation of the Hero
 * rather than its own section. The "When Images Become Words / And
 * Language Shapes a Path" fade -- unchanged wording, unchanged
 * animation -- moved UP into the Hero itself, resized to match the
 * CTA's own text size (see .hero-tagline-fade in globals.css, and
 * page.tsx's own history comment at the new location). In its place,
 * this section now holds the "Explore Workshops" CTA and its
 * methodology line ("Story, poetry, image, and shared experience."),
 * moved down from the Hero as a pair -- her explicit instruction was
 * that the methodology line stays attached to the CTA, not the
 * tagline. Both reuse their existing classes (.home-coll-cta /
 * --light-surface, .hero-method) unchanged; only their parent section
 * changed, so their own typography/spacing rules still apply as-is.
 * The divider below is untouched -- it was never part of the
 * animation and stays exactly where it was, now closing this CTA
 * section instead of the tagline section.
 */

export default function BrandSignature() {
  return (
    <section className="brand-signature" aria-label="AwakenArts">
      <Link href="/workshops" className="home-coll-cta home-coll-cta--light-surface">
        Explore Workshops
      </Link>
      <p className="hero-method">
        Story, poetry, image, and shared experience.
      </p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/brand/ornaments/AwakenArts-Section-Divider-Gold.png"
        alt=""
        aria-hidden="true"
        className="brand-signature__divider"
        loading="lazy"
      />
    </section>
  )
}
