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
 * Path" follows with a delayed fade, then both simply remain — no
 * loop/reset, since her instruction framed that as optional ("may...
 * if needed") and a one-time arrival reads as the more restrained,
 * literary choice per her own "should not feel cyclical, mechanical,
 * or attention-seeking." A gentle breathing loop can be added later if
 * she asks for one after seeing this.
 *
 * No JS/interactivity is needed for this treatment — it's a pure CSS
 * animation (see .brand-signature-fade__line and its keyframe in
 * globals.css), so this file is a plain server component again, not
 * 'use client'. `prefers-reduced-motion: reduce` is handled in that
 * same CSS: a reduced-motion visitor sees the complete tagline
 * immediately, statically, no animation.
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
