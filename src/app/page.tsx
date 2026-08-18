import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import AtmosphericHeader from '@/components/AtmosphericHeader'
import PathOfRecognition from '@/components/PathOfRecognition'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'

// The homepage explicitly sets its canonical to "/" so the trailing-slash
// and bare-domain forms collapse to a single URL in search results.
// Title and description are inherited from the root layout default.
export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: {
    url: '/',
    images: ['/images/brand/og-hero.jpg'],
  },
}

/* ── Page ──────────────────────────────────────────────── */
/*
 * Homepage — The Threshold
 *
 * 2026-07-10 "Homepage Refinement — Production Pass," per Susan: a
 * refinement of content hierarchy and visitor flow, not visual
 * language — typography, spacing, and overall aesthetic are preserved
 * wherever possible. The homepage now unfolds as one guided journey,
 * each stage with a single purpose and a single primary invitation:
 *
 *   1. Invitation  — Hero. One CTA only ("Enter the Encounters");
 *                     the former competing "Explore the Collection"
 *                     doorway is removed now that Collection has its
 *                     own clear invitation immediately below.
 *   2. Foundation  — Matthew 13:34, the quiet theological threshold,
 *                     resolving into an invitation to /foundation
 *                     rather than a closed statement.
 *   3. Discovery   — The Collection. Navy architectural framework,
 *                     cream type, the complete uncropped cover.
 *                     Introduces the Figure Editions as the central
 *                     published body of work; the broader explanation
 *                     of companion works and the growing library
 *                     lives on /collection itself, not here.
 *   4. Understanding — The AwakenArts Method. Answers the question
 *                     Discovery naturally raises ("what is happening
 *                     here?"). Deliberately quiet — a thoughtful
 *                     pause, not a second headline moment — and
 *                     written as an introduction to a future
 *                     standalone Method page, not a full explanation.
 *   5. Embodiment  — Queen Ann Introduction & Encounter. Still + poem
 *                     as one literary spread, the Method made visible
 *                     in an actual work.
 *   6. Footer
 *
 * 2026-07-29, per Susan's "Homepage Softening" directive: Foundation
 * (Matthew 13:34) moves from closing the page to section #2, directly
 * beneath the Hero — "the homepage has become a little harsh," and
 * opening onto Scripture and a quiet threshold image right after the
 * Hero softens that flow before the Collection's more architectural
 * navy band arrives. Foundation is no longer nested inside the same
 * section as the Queen Ann Encounter — it's now its own full-bleed
 * section (see .poems-showcase-foundation in globals.css, which
 * carries its own background + padding rather than inheriting them
 * from .poems-showcase-section). The Queen Ann Encounter keeps its
 * place late in the page, now standing alone in what remains of
 * .poems-showcase-section. Copy, imagery, and the /foundation CTA are
 * otherwise unchanged.
 *
 * This supersedes the previous six-movement ordering (2026-06-28
 * Final Editorial Refinement), which placed Collection first but had
 * no Method section at all. The Method section itself was added
 * 2026-07-10 directly after the Hero, then moved here — after
 * Collection, before Queen Ann — the same day, once Susan clarified
 * the narrative hierarchy: Discovery before Understanding.
 *
 * Editorial framework (June 2026 recalibration, still standing): the
 * works are not symbolic art accompanied by Christian reference —
 * they extend a literary mode Scripture itself already uses (parable,
 * poetry, image, figure, type). The homepage should read as an entry
 * into that tradition, not a mood. By the time a visitor reaches the
 * footer, they should understand what AwakenArts is, why it exists,
 * the Christian foundation it is offered from, and where to continue
 * — without further explanation. /foundation answers the question
 * Matthew 13:34 naturally raises; the homepage now invites that next
 * step instead of closing the thought itself — and, as of 2026-07-29,
 * invites it early rather than only at the close.
 *
 * 2026-08-07, per Susan's "Switch Matthew and A Path of Recognition"
 * directive: Foundation (Matthew 13:34) and A Path of Recognition swap
 * places. A Path of Recognition now sits directly beneath the Hero as
 * section #2; Foundation moves to sit after Collection, immediately
 * before the Queen Ann title band, where A Path of Recognition used to
 * be. Collection keeps its position between them unchanged. Revised
 * order: Hero -> A Path of Recognition -> Collection -> Foundation ->
 * Queen Ann Introduction & Encounter -> Footer. No copy, imagery, or
 * component content changed in this pass -- position only. See the
 * individual section comments below for each section's own updated
 * placement note.
 */

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* ── HERO — one unified section ─────────────────────────
          A single <section class="hero"> with exactly two children:
          .hero__text (left) and .hero__media (right). On desktop and
          tablet they sit side-by-side via grid; on mobile they stack,
          but remain within the same hero section — one shared
          background, no visual break.

          No overlay. No absolute positioning. No background-image.
          No heavy gradient. The image is a plain <img> inside a
          <picture> that switches variant per breakpoint, never
          cropped by CSS.
      ──────────────────────────────────────────────────────── */}
      <section className="hero" aria-label="Hero">

        <div className="hero__text">
          {/* Logo — primary identity placement.
              2026-07-14, per Susan's "AwakenArts Tagline and Hero Rule"
              directive: reversed from the same-day change above (which
              cropped the tagline OUT of this logo to avoid repeating the
              H1). The directive's actual rule is the opposite of what
              that earlier fix assumed — the FULL logo lockup (emblem +
              AWAKENARTS + tagline) is the approved default, and it is
              the redundant H1 headline that should go, not the logo's
              own tagline. Switched back to AwakenArts-Logo-Horizontal.svg
              (with tagline) accordingly. Per the directive's global rule:
              never show the tagline twice in the same visible section —
              use either this full lockup (tagline included, not repeated
              nearby) or the compact lockup (AwakenArts-Logo-Horizontal-
              NoTagline.svg, emblem + wordmark only) where the tagline
              needs to appear separately elsewhere in the composition. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/brand/AwakenArts-Logo-Horizontal.svg"
            alt="AwakenArts — When Language Shapes a Path"
            className="hero-logo"
            width={1237}
            height={244}
            loading="eager"
          />

          {/* Mission line — now the Hero's first line of text; the
              headline that used to sit above it is gone.
              2026-07-14, per Susan's "AwakenArts Tagline and Hero Rule"
              directive: the H1 ("When Language Shapes a Path")
              repeated the logo's own tagline directly above it —
              removed rather than replaced, per the directive's explicit
              "do not invent a replacement headline." This line simply
              moves up to use the recovered space; its own text and
              tone are unchanged.
              2026-07-10, per Susan's "Homepage Refinement — Production
              Pass": supersedes the 2026-07-07 pared-down single
              sentence. The mission line now carries the "every life
              tells its story in images" framing that the Method
              section (below) builds on — two sentences, deliberately,
              so the Hero itself plants the idea the rest of the
              homepage develops.
              2026-07-10, "Hero Typography Refinement" (same day, later
              pass), per Susan: (1) breaks after the first sentence —
              <br /> between them, not two separate <p> elements, so
              they still read as one supporting thought with a natural
              pause, not two competing statements — and (2) is decoupled
              from the shared --subtitle-size token (see globals.css)
              and reduced ~17%. That "quiet, discoverable invitation"
              sizing was calibrated for a supporting line beneath a
              headline; now that it's the Hero's first line, it still
              reads correctly at this size — a deliberate quiet opening,
              not a second headline standing in for the first. */}
          {/* 2026-07-25, per Susan's "Homepage Hero and Primer Closing
              Revision" directive: opening statement retained verbatim
              ("Every life tells its story in images."); the supporting
              line beneath it is rewritten to state the visitor's
              benefit plainly, rather than only describing what
              AwakenArts is.
              2026-07-26, per Susan's terminology-alignment directive:
              closing sentence ("Recognition becomes language, and
              language becomes a path forward.") removed -- paragraph
              now ends at "...begins to take shape."
              2026-07-26, later the same day, per her "Cormorant Usage"
              typography standard: split into two spans -- the short
              opening statement (.hero-mission__lede, italic/gold, "one-
              line thematic statement") and the longer explanatory
              sentence (.hero-mission__body, roman/navy, "body prose")
              -- rather than running both in italic/gold together. Copy
              itself is unchanged, just the markup/styling split.
              2026-08-07, per Susan's directive: opening statement
              changed from "Every life tells its story in images." to
              "Every life leaves something to be recognized." -- now
              that A Path of Recognition (opening line: "People tell
              their stories with facts. / They reveal their lives
              through images.") sits directly beneath the Hero as
              section #2 (see the 2026-08-07 "Switch Matthew and A Path
              of Recognition" reorder below), the old lede repeated the
              very next section's own "stories... images" language.
              The new lede sets up "recognition" as the Hero's own
              theme instead, so the Hero introduces the idea and A Path
              of Recognition develops it, rather than both opening with
              the same "story/images" framing back to back. Styling
              (.hero-mission__lede, italic/gold) and the rest of the
              paragraph are unchanged. */}
          <p className="hero-mission">
            <span className="hero-mission__lede">
              Every life leaves something to be recognized.
            </span>
            <br />
            <span className="hero-mission__body">
              AwakenArts helps you recognize the symbolic language
              already present in your life. Through image, poem,
              reflection, and conversation, what once felt difficult to
              name begins to take shape.
            </span>
          </p>

          {/* Editorial Invitations — the hero's entry point(s) into
              AwakenArts (locked 2026-06-28, "Hero Typographic
              Hierarchy" directive; single-CTA revision 2026-07-10).

              2026-06-29, per Susan: stripped down to the doorway link(s)
              alone — no explanatory teaser line beneath, no arrow glyph.
              The hero's job is the entrance; the destination pages do
              the explaining.

              2026-07-10, per Susan's "Homepage Refinement — Production
              Pass": the Hero now carries exactly one CTA. The former
              second doorway, "Explore the Collection," is removed —
              Collection has since moved to the very next section, with
              its own clear "Explore the Collection →" invitation, so a
              second competing CTA in the Hero itself no longer serves a
              purpose. .hero-invitations remains a flex column built for
              N doorways; removing one required no layout change. */}
          <div className="hero-invitations">
            {/* 2026-07-26, per Susan's "Hero CTA refinement" directive:
                the boxed two-line doorway cards (.primer-btn.hero-doorway
                at the time; /encounters' own reciprocal closing now reuses
                .home-coll-cta--doorway instead) are retired from the Hero
                specifically -- "no border, no box,
                no gold frame... the typography, not a button, should
                invite the visitor to continue." Back to a single
                doorway (Encounters is reached downstream -- Primer's own
                closing, the new "A Path of Recognition" section's CTA --
                not competing here), rendered as pure typography via the
                new .hero-invitation classes: navy at rest, a larger
                serif name line over a smaller quiet subtitle, gold color
                shift and an animated underline only on hover.

                2026-07-26, per Susan's "Primer CTA Naming" directive: the
                .hero-invitation component itself is untouched -- same
                markup structure, layout, spacing, typography, and hover
                behavior. Two content-only changes: (1) label text "The
                Path" -> "The AwakenArts Path," the same more-descriptive
                title now used for this destination elsewhere (see
                /encounters' reciprocal doorway); (2) the
                .hero-invitation__subtitle span is removed entirely --
                "the button should become a single-line invitation using
                the existing Hero button component." No arrow was added
                at that pass, per her explicit instruction then.

                2026-07-26, per Susan's "Hero Path Invitation" directive:
                back to two lines, but a different pairing than before --
                a small uppercase gold "EXPLORE" action identifier over
                the Cormorant Roman navy title, not a title-plus-
                description pair. Still no border/frame, no third
                subtitle line; the whole block is one <Link>, so it's
                still entirely clickable. Hover is unchanged: only the
                title shifts toward gold (see .hero-invitation__label /
                __eyebrow in globals.css); "EXPLORE" is fixed gold at
                rest and stays that way through hover, the same posture
                the old subtitle line had.

                2026-07-26, per Susan's follow-up: an arrow is added
                after the title, inline within .hero-invitation__label
                so it sits on the same line as "The AwakenArts Path" and
                inherits that line's own color (navy at rest, gold on
                hover) -- matching the arrow treatment already used by
                the other homepage CTAs ("View the Collection →,"
                "Experience the Encounters →"). aria-hidden, same as
                those.

                2026-07-26, per Susan: the arrow read too harsh at the
                title's own full navy/gold strength and weight. Given
                its own .hero-invitation__arrow class -- same color
                (inherits the title's navy-at-rest/gold-on-hover), but
                softened via reduced opacity and roman weight, so it
                reads as a quiet directional cue rather than a second
                bold word next to the title.

                2026-07-26, per Susan's follow-up ("Explore not needed
                now"): the .hero-invitation__eyebrow line is removed --
                back to a single line, "The AwakenArts Path →,"
                .hero-invitation__label alone. .hero-invitation__eyebrow
                itself is retired in globals.css (nothing else used
                it). */}
            <Link href="/workshops" className="hero-invitation">
              <span className="hero-invitation__label">Explore Workshops <span className="hero-invitation__arrow" aria-hidden="true">→</span></span>
            </Link>

            {/* Methodology line — added 2026-08-07, per Susan's
                "Figurative Language Methodology Line" directive.
                Originally placed between the mission paragraph and
                this CTA (per her first follow-up, "the line of text
                will work better on the hero section"); moved again
                same day, directly beneath "The AwakenArts Path →," per
                her "one small change" directive: "supporting language
                for that link," not a fourth peer statement in the
                mission stack above. Deliberately minimal change from
                its prior version -- font-family, style, weight, and
                color are untouched (see .hero-method in globals.css);
                only its position (now inside .hero-invitations,
                trailing the Link) and its margin (tightened to read as
                directly attached to the CTA above it, not a spaced
                sibling of the mission paragraph) changed. Names the
                underlying method explicitly (figurative language:
                metaphor, poetry, symbolic imagery, parable) so the
                Hero states plainly, in one line, that AwakenArts is
                not simply poems, images, journals, or workshops but a
                consistent methodology toward recognition and
                learning.

                2026-08-07, later the same day, per Susan's follow-up:
                wording swapped from "Discover how figurative language
                promotes recognition and learning." to "Explore the
                World of Figurative Language" -- a shorter, more direct
                supporting line under the CTA. Position, styling, and
                the surrounding rationale above are unchanged; only the
                copy itself changed. */}
            <p className="hero-method">
              Literary-symbolic workshops conducted by Susan Ann Shepler
            </p>
          </div>
        </div>

        <div className="hero__media">
          <picture className="hero__picture">
            {/* 2026-07-14 "Tablet / Small-Laptop Breakpoint Correction,"
                per Susan: the hero now stacks into one (tall, portrait-
                shaped) column at <=1080px, matching .hero__media's own
                min-height in that state — the old "tablet" landscape
                source (composed for the two-column layout that used to
                persist down to 768px) would now sit inside a portrait-
                shaped container and get cropped hard from the sides to
                fill it, re-introducing the exact over-cropping problem
                this correction removes. So the mobile portrait source's
                breakpoint moves up to match the new stacking point
                (1080px) and the tablet source is retired — below
                1080px this is now, in full, the approved iPhone design:
                same stacked layout, same portrait image. */}
            <source
              media="(max-width: 1080px)"
              srcSet="/images/brand/chess-ann-hero-mobile.jpg"
            />
            {/* 2026-07-11 — Susan's brand-image swap. Recolored to the
                site's --deep navy (#1C2B3A) in her own edit
                (Chess-Ann.jpg.png, full-res 3934x3269). Desktop cropped
                to match .hero__media's actual rendered aspect (~1.3:1)
                so object-fit: cover doesn't re-crop further. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/brand/chess-ann-hero-desktop.jpg"
              alt="Queen Ann — a painted figure standing within a symbolic narrative, central to the AwakenArts identity"
              className="hero__img"
              width={1600}
              height={1100}
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>

      </section>

      {/* ── A PATH OF RECOGNITION ────────────────────────────────
          2026-08-07, per Susan's "Switch Matthew and A Path of
          Recognition" directive: this section moves from after
          Collection to section #2, directly beneath the Hero — trading
          places with Foundation (Matthew 13:34), which now sits where
          this section used to be (after Collection, before the Queen
          Ann title band). Component, copy, and imagery are entirely
          unchanged; only its position on the page moved.

          2026-07-26, per Susan's "Repurpose the Existing Introductory
          Section" directive: this used to be two separate sections —
          "The AwakenArts Method" (Stage 3, Understanding; first added
          2026-07-10, most recently living right here after Collection)
          and a standalone "A Path of Recognition" section placed
          earlier, right after the Hero (added earlier this same day).
          Susan flagged that both used the same "People tell their
          stories with facts / reveal their lives through images" line,
          and asked that they be merged into one continuous section
          rather than left as two independent components repeating
          themselves. The AwakenArts Method section's slot (here, after
          Collection) is kept; its content -- eyebrow, leaf ornament,
          "Discover the AwakenArts Method" CTA to /method, and all
          "method / practice / theory" language -- is retired in favor
          of PathOfRecognition (src/components/PathOfRecognition.tsx),
          which now carries both the section's language (title,
          statement, intro paragraph) and its imagery (the five-image
          sequence) as one piece: "language introduces the visitor,
          imagery deepens the experience, the Encounters become the
          natural invitation to continue." /method itself is untouched
          and still live, just no longer linked from the homepage --
          it joins the site's existing Unlisted Page System (see
          Nav.tsx), reachable by direct URL only. */}
      <PathOfRecognition />

      {/* ── THE COLLECTION ───────────────────────────────────────
          Stage 2, Discovery. Presented on a navy field per the
          Homepage Reformation Directive: the darker ground establishes
          the Collection as AwakenArts' architectural framework and
          creates a clear visual transition on both sides — from A Path
          of Recognition into Collection, and from Collection onward
          into Foundation. Cream typography, restrained gold accents,
          the complete uncropped cover, generous surrounding space.

          2026-08-07, per Susan's "Switch Matthew and A Path of
          Recognition" directive: this section's own position is
          unchanged — it keeps its place between A Path of Recognition
          and Foundation — but the sections on either side of it have
          swapped, so it's now preceded by A Path of Recognition
          (previously followed by it) and followed by Foundation
          (previously preceded by it).

          2026-06-28 Collection Section Editorial Refinement: the hero
          now promises "Explore the Collection" — this section's job is
          to fulfill that promise immediately, not describe a page.
          Copy names the unit of the work explicitly ("Figure Edition,"
          the term already locked across editions.ts, the Edition
          pages, Poems, and Workshops) and describes what reading one
          actually is — image, poem, and reflection as a single
          published work.

          2026-07-10, per Susan's "Homepage Refinement — Production
          Pass": the CTA renamed "Explore the Collection →" (was
          "Browse the Figure Editions →"), echoing the Hero's own
          language and becoming this section's one primary invitation.

          2026-07-10, per Susan's "Homepage Production Directive —
          Collection Section Refinement" (same day, second pass): this
          section stops functioning like a navigation item describing
          how the Collection is organized, and becomes a gallery
          entrance. Subtitle and body copy rewritten as invitation, not
          description — no mention of the library "growing," no
          publishing-model language, no companion-resource detail; all
          of that stays on /collection, whose own job is to explain
          once a visitor has already stepped inside. Success test, per
          Susan: a visitor should think "I'd like to explore these
          Figure Editions," not "I understand what Figure Editions
          are." The CTA itself is restyled in globals.css from a quiet
          underlined text link to a solid gold button — "the button
          opens the door," in her words — the section's one confident
          invitation forward, ending on movement rather than
          explanation. See AwakenArts_Site_Architecture.md /
          AwakenArts_Publishing_Platform_Architecture.md Task 1: the
          Figure Edition is the master publication; this is the
          library where every one of them lives. */}
      <section id="collection" className="home-coll-section" aria-labelledby="home-coll-heading">
        <div className="home-coll-inner">

          <div className="home-coll-cover">
            <Image
              src="/images/collection/collection-cover-clean.png"
              alt="The Collection — the cover of AwakenArts' growing library of Figure Editions"
              width={1122}
              height={1402}
              className="home-coll-cover__img"
              loading="lazy"
            />
          </div>

          <div className="home-coll-text">
            <p className="eyebrow">Figure Editions</p>
            <h2 id="home-coll-heading">The Collection</h2>
            <p className="home-coll-sub">
              Where image, poem, and reflection become a single
              symbolic journey.
            </p>
            <p className="home-coll-body">
              Each Figure Edition is a changing symbolic world Susan
              brings into the AwakenArts workshop experience. The
              underlying practice remains consistent, while image,
              poem, and reflection open a different field of discovery.
            </p>
            {/* 2026-07-26, per Susan's directive: label only,
                "Explore the Collection" -> "View the Collection" --
                component, typography, spacing, hover behavior, and the
                arrow are all unchanged. */}
            <Link href="/collection" className="home-coll-cta">
              View the Collection <span aria-hidden="true">→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ── FOUNDATION — Matthew 13:34 ───────────────────────────
          2026-08-07, per Susan's "Switch Matthew and A Path of
          Recognition" directive: this section moves from section #2
          (directly beneath the Hero) to sit after Collection, directly
          before the Queen Ann title band — trading places with A Path
          of Recognition, which now occupies Foundation's former slot
          beneath the Hero. Copy, imagery, and the /foundation CTA are
          unchanged; only its position moved. See .poems-showcase-
          foundation in globals.css for the matching spacing update at
          this section's new seams (Collection -> Foundation and
          Foundation -> Queen Ann title band).

          2026-07-29, per Susan's "Homepage Softening" directive: this
          used to close the page, nested inside .poems-showcase-section
          alongside the Queen Ann Encounter (see that section further
          down, now Queen Ann Encounter only). Moved at that time to sit
          directly beneath the Hero — to soften the homepage's opening
          flow: Scripture and a quiet threshold image greeting the
          visitor right after the Hero, before the more architectural
          navy Collection band. Now its own full-bleed section rather
          than a div sharing .poems-showcase-section's background/
          padding — see .poems-showcase-foundation in globals.css,
          which carries its own Warm ivory background and top/bottom
          padding standing alone. Copy, imagery, and the /foundation
          CTA are unchanged. */}
      <section className="poems-showcase-foundation" aria-label="Foundation">
        <AtmosphericHeader
          src="/images/headers/biblical-foundation.jpg"
          alt="Sunrise over hills and a winding river, seen through a worn stone window — a threshold image."
          tall
          fadeTo="#FAF7F2"
          fadeHeight={25}
        />
        <div className="poems-showcase-foundation__inner">
          <p className="hero-quote-text">
            He did not say anything to them without using a parable.
          </p>
          <p className="hero-quote-cite">Matthew 13:34</p>
          <p className="hero-quote-body">
            AwakenArts works within that same tradition.
          </p>
          <Link href="/foundation" className="hero-quote-closing">
            Read the Foundation of AwakenArts <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ── QUEEN ANN INTRODUCTION — dark title band ───────────────
          2026-07-10, per Susan: "let the [Queen Ann title] section
          band be dark." This is NOT a reintroduction of the navy
          "stage + rounded card" removed in the June 2026 review (see
          the .poems-showcase-section comment below) — it's a true
          full-bleed band, structured like .home-coll-section: its own
          <section>, full-width navy background, sitting between
          Collection and the cream Queen Ann Encounter. Title and
          tagline only — no image, no poem-excerpt, no card edges.
          2026-06-30, per Susan's "single purpose per element"
          directive: the poem excerpt ("when the night strikes with
          silver light…") that used to sit here has moved to the
          Invitation to Read, directly above the poem-download link.
          What remains here is the title plus one quiet orientation
          line — secondary to the title, not a second headline.
          2026-07-10, later the same day, per Susan: tagline copy
          replaced ("Every AwakenArts work is born as both image and
          poem." -> "There is a Kingdom beyond the one that ends.") —
          now a line from/evocative of Queen Ann's own poem rather
          than a general statement about how AwakenArts works, fitting
          this band's role as Queen Ann's title page specifically. */}
      <section className="poems-showcase-intro" aria-label="Queen Ann">
        <div className="poems-showcase-intro__inner">
          <p className="poems-showcase-intro__title">Queen Ann</p>
          <p className="poems-showcase-intro__tagline">
            There is a Kingdom beyond the one that ends.
          </p>
        </div>
      </section>

      {/* ── QUEEN ANN ENCOUNTER ─────────────────────────────────────
          A flat cream field: the portrait still and the poem as
          facing pages of one open book, equal partners.
          Revised per Susan's June 2026 review: the navy stage and
          rounded bottom corners that used to wrap the title page (see
          .poems-showcase-intro above, since split into its own
          full-bleed section) read as an accidental dark strip and a
          "card" rather than a publication, so both were removed —
          this field begins directly where the Introduction band above
          it ends. See the POEMS / EDITIONS SHOWCASE block in
          globals.css.
          2026-07-29, per Susan's "Homepage Softening" directive: this
          section used to close with Matthew 13:34 nested inside it —
          that block has moved up to its own section #2, directly
          under the Hero (see FOUNDATION above). This section now ends
          with the Encounter itself; its own padding-bottom reverts
          from the Matthew-specific fixed override to the standard
          shared --band-gap token, since it no longer needs to supply
          a Foundation-specific closing gap — see .poems-showcase-
          section in globals.css. */}
      <section className="poems-showcase-section" aria-label="Queen Ann Encounter">
        <div className="poems-showcase-inner">

          {/* Queen Ann Encounter — the poem and the portrait still
              as facing pages of one open book: equal height, equal
              importance, identical top alignment, no captions.
              The imagery now performs the work previously done by
              explanatory text.
              2026-06-29: swapped the poem image for a tighter crop
              (ann-text-dark-crop.png) — the original file carried a
              wide margin of blank page around the actual poem text, so
              even filling its frame completely the poem read as quieter
              and smaller than the edge-to-edge photo opposite it.
              Cropping in on the text itself (same 2:3 ratio, so the
              "facing pages" parity with the photo's frame is unchanged)
              makes the poem's own presence in the frame match the
              photo's, addressing Susan's "one dominates the other."
              2026-07-07, per Susan: the poem must read first, on every
              screen size, not just be reordered on mobile via CSS. The
              poem block now comes first in markup, the photo second —
              this fixes both the mobile stacking order and puts the
              poem in the first (left) desktop column, image second
              (right), as she explicitly asked for. The previous
              mobile-only `order` swap in globals.css is no longer
              needed with the DOM itself in the right order, and has
              been removed. */}
          <div className="poems-showcase-ann">
            <div className="poems-showcase-ann__text">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/forms/ann-text-dark-crop.png"
                alt="Queen Ann — the poem, rendered in concrete poetry form"
                className="poems-showcase-ann__poem-img"
                loading="lazy"
              />
            </div>
            <div className="poems-showcase-ann__frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/forms/queen-ann-still.png"
                alt="Queen Ann — a crowned figure in windswept hair and flowing gown, standing before a castle at sunset."
                loading="lazy"
              />
            </div>
          </div>

          {/* 2026-06-30 — Invitation to Read, per Susan's "single
              purpose per element" directive: the poem excerpt that
              used to sit under the title page heading now lives here,
              immediately above the download link, sized down so it
              reads as an invitation rather than a heading — its job is
              to draw the visitor toward the full poem, not to explain
              the work a second time. */}
          <p className="poems-showcase-ann__excerpt">
            when the night strikes with silver light&hellip;
          </p>

          {/* 2026-06-29: printable PDF link, per Susan — "Ann can be
              linked to a pdf that is printable in some form or style."
              Revised same day: Susan asked to remove the link to the
              Edition (the multi-page Figure Edition product PDF) — this
              section is one of the few places the poem itself is
              offered, not the published Edition. Now points to a new,
              standalone single-page printable PDF of just the poem
              (public/files/poems/Queen_Ann_Poem.pdf), built fresh from
              the same poem artwork, with no Edition framing or Colophon.
              Revised again same day, per Susan: "Download the Poem
              (PDF)" reads as offering a complimentary resource, not
              issuing an instruction the way "Print the poem" did. */}
          <p className="poems-showcase-ann__pdf-link">
            <a
              href="/files/poems/Queen_Ann_Poem.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download the Poem (PDF) <span aria-hidden="true">→</span>
            </a>
          </p>

        </div>
      </section>

      {/* ── WAYFINDING BAND ───────────────────────────────────────
          Global Wayfinding Band Standard (2026-06-25): concludes the
          homepage experience and invites the visitor to continue
          elsewhere in the site. Replaces the former single "Explore
          the Poems" CTA — the band itself is now that invitation.
      ──────────────────────────────────────────────────────────── */}
      <WayfindingBand />
      <Footer />
    </>
  )
}
