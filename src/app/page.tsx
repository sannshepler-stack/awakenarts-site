import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import HomeCollectionPremise from '@/components/HomeCollectionPremise'
import HomeSection2 from '@/components/HomeSection2'
import HomeChristianSymbols from '@/components/HomeChristianSymbols'
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
 *
 * 2026-08-20, per Susan's "Homepage Recomposition — Architecture and
 * Asset Placement" directive: supersedes every ordering above with a
 * five-section architecture built around one guided progression --
 * encounter an actual work, recognize the underlying principle, cross
 * the biblical hinge, arrive at Scripture's own symbolic vocabulary.
 * (This five-section version is itself superseded by the six-section
 * version below, same day -- kept here for the unbroken history.)
 *
 *   1. Opening   — Hero. Unchanged.
 *   2. Queen Ann / The Actual Works — HomeQueenAnnCollection.tsx, cream.
 *                  Compilation leads, Queen Ann follows in the same
 *                  section, reduced in scale, no CTA.
 *   3. A Path of Stones -> Workshops — HomeSection2.tsx, one section,
 *                  cream premise band into navy Workshops band.
 *   4. Foundation — Matthew 13:34, the biblical hinge.
 *   5. Christian Symbols — HomeChristianSymbols.tsx, cream.
 *   6. Footer.
 *
 * 2026-08-20, later the same day, per Susan's "Section Two / Section
 * Three" follow-up directive, reviewed against a live screenshot:
 * Queen Ann and the Path of Stones premise trade places relative to
 * the version above. The Path of Stones question ("Do we use
 * metaphors...") becomes part of the Collection Compilation section
 * rather than following Queen Ann; Queen Ann is pulled out into her
 * own dedicated section that follows instead. Six sections now, not
 * five:
 *
 *   1. Opening — Hero. Unchanged.
 *   2. The AwakenArts Collection — HomeCollectionPremise.tsx, cream.
 *                  NEW (replaces HomeQueenAnnCollection.tsx's former
 *                  role). Collection Compilation leads (its own
 *                  baked-in title announces the section), directly
 *                  followed by the Path of Stones premise -- eyebrow,
 *                  question, three metaphor examples, recognition
 *                  statement -- moved here verbatim from HomeSection2
 *                  .tsx's former light band. "This is a body of work"
 *                  and "here is the premise behind it" as one thought.
 *   3. Queen Ann — HomeQueenAnn.tsx, cream. NEW (split out of
 *                  HomeQueenAnnCollection.tsx). One actual work,
 *                  encountered closely, in her own space: quiet title,
 *                  reduced poem+portrait spread, excerpt, PDF link. No
 *                  CTA -- Workshops (practice) follows next.
 *   4. Workshops — HomeSection2.tsx, now the dark band only (its light
 *                  band moved to section 2, above). Same image
 *                  (Collection Book Cover), copy, and CTA as before --
 *                  see that component's own header comment.
 *   5. Foundation — Matthew 13:34, the biblical hinge. Unchanged.
 *   6. Christian Symbols — HomeChristianSymbols.tsx, cream. Unchanged.
 *   7. Footer.
 *
 * HomeQueenAnnCollection.tsx is left in the codebase, unused by this
 * page, per the engagement's standing no-silent-deletion practice --
 * see its own header comment and HomeCollectionPremise.tsx / HomeQueenAnn
 * .tsx's comments for the full supersession trail.
 *
 * 2026-08-20, later still, per Susan's "revise the architecture"
 * directive: the seven-section version above is superseded by a
 * three-movement architecture. Her diagnosis: Matthew and Queen Ann
 * were each floating as independent homepage chapters when they
 * actually belong inside the sections next to them — Matthew explains
 * why AwakenArts can move from figurative language into Scripture
 * (belongs inside Christian Symbols), and Ann is a Figure Edition/
 * workshop world who can demonstrate what the workshop material looks
 * like (belongs inside Workshops) rather than interrupting the
 * Collection -> Path of Stones progression. "That solves both floating
 * areas by integrating them into the subjects they actually belong to,
 * rather than trying to improve the spacing around misplaced
 * sections." Three movements after the Hero now, each named for what
 * it does:
 *
 *   1. Opening — Hero. Unchanged.
 *   2. THE WORK: The AwakenArts Collection — HomeCollectionPremise.tsx,
 *                  cream. Unchanged from the "Section Two / Section
 *                  Three" pass: Compilation leads, Path of Stones
 *                  premise follows in the same section. No Queen Ann.
 *   3. THE EXPERIENCE: Workshops + Queen Ann — HomeSection2.tsx, one
 *                  section, navy Workshops band (book cover, "Each
 *                  workshop opens a different world...," Figure
 *                  Edition names, CTA) directly followed by Queen Ann
 *                  in cream, in the same section -- "she becomes the
 *                  concrete example: one of those different worlds
 *                  looks like this." See that component's own comment
 *                  for the navy-vs-cream judgment call.
 *   4. THE SCRIPTURAL FIELD: Christian Symbols + Matthew —
 *                  HomeChristianSymbols.tsx, cream. The former
 *                  standalone Foundation section is retired; Matthew
 *                  13:34 (AtmosphericHeader, verse, citation) now opens
 *                  this section directly, leading into "Scripture
 *                  Speaks in Symbols," the sailboat image, and the
 *                  single "Explore Christian Symbols" CTA. "AwakenArts
 *                  works within that same tradition." is cut outright;
 *                  the former "Read the Foundation of AwakenArts" link
 *                  is also removed, flagged as a judgment call -- see
 *                  that component's own comment for both.
 *   5. Footer.
 *
 * HomeQueenAnn.tsx (Queen Ann's independent section) and the standalone
 * Foundation JSX that used to live directly in this file are both
 * retired by this pass. HomeQueenAnn.tsx is left unused in the
 * codebase per no-silent-deletion; the Foundation JSX is removed from
 * page.tsx entirely since its content now lives inside
 * HomeChristianSymbols.tsx itself, not as page-level markup.
 *
 * Revised order: Hero -> HomeCollectionPremise -> HomeSection2
 * (Workshops + Queen Ann) -> HomeChristianSymbols (Christian Symbols +
 * Matthew) -> WayfindingBand -> Footer.
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
          {/* 2026-08-19, per the Rework Pass 2 Implementation Standard
              (Everyday-Language Standard, Priority 1: homepage): the
              prior lede/body asked a first-time visitor to "recognize
              the symbolic language" before knowing what that meant --
              recognition was announced rather than earned. Replaced
              with plain, story-first language. Susan's second pass:
              "AwakenArts workshops use..." wrongly scoped the whole
              site's promise down to one offering, and "carry something
              forward" was still AwakenArts-internal language rather
              than a stated value -- it didn't say what a visitor
              gains. Susan supplied lede and body verbatim across a
              series of "HERO COPY" passes, converging here on her own
              stated distinction: "Discovery is the process;
              understanding and possibility are where it leads." The
              lede reads "appear throughout our lives" (not "teach us
              about our lives") -- stories as an ongoing presence, not a
              lesson delivered. Susan's final pass changed the body's
              outcome clause once more, "understanding" -> "connection"
              (naming the relational result, not just a cognitive one)
              and folded the em-dash break into one continuous clause --
              "the experiences that shape us and lead us toward
              connection and possibility" -- rather than treating the
              outcome as a separate trailing thought. Susan's final
              lede pass dropped the leading "Our": "Stories are lived,
              told..." rather than "Our stories are lived, told..." --
              avoids opening on a possessive immediately followed by
              "our lives" at the sentence's end. Markup/classes
              unchanged. */}
          <p className="hero-mission">
            <span className="hero-mission__lede">
              Stories are lived, told, and appear throughout our lives.
            </span>
            <br />
            <span className="hero-mission__body">
              AwakenArts explores what our stories tell us.
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
            {/* 2026-08-19, per Everyday-Language Standard: "literary-
                symbolic" is internal AwakenArts vocabulary a first-time
                visitor hasn't been given yet. Same claim, plainer
                wording.
                2026-08-19, later the same day, per Susan's "HERO COPY"
                passes: "image, poetry, and reflection" -> "story,
                poetry, image, and shared experience" -> "story, poetry,
                image, and connection" -> back to "story, poetry, image,
                and shared experience," this time dropping the
                "Workshops built around" lead-in entirely -- now a
                four-term fragment read as a quiet label beneath the
                CTA rather than a sentence describing workshops
                specifically. */}
            <p className="hero-method">
              Story, poetry, image, and shared experience.
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

      {/* ── THE WORK: THE AWAKENARTS COLLECTION ──────────────────
          2026-08-20, per Susan's "revise the architecture" directive:
          movement #1 of three after the Hero. The Collection
          Compilation leads (its own baked-in title announces the
          section — "this is a body of original work"), directly
          followed by the Path of Stones premise (eyebrow, question,
          three metaphor examples, recognition statement). Together:
          "here are these unusual poetic works; here is the familiar
          phenomenon they are exploring." No Queen Ann here — she now
          appears within Workshops, below (see that section's own
          comment). See HomeCollectionPremise.tsx for the full
          rationale. Unchanged from the prior "Section Two / Section
          Three" pass. */}
      <HomeCollectionPremise />

      {/* ── THE EXPERIENCE: WORKSHOPS + QUEEN ANN ────────────────
          2026-08-20, per Susan's "revise the architecture" directive:
          movement #2. Queen Ann moves out of her former independent
          section (HomeQueenAnn.tsx, now unused, left in the codebase
          per no-silent-deletion) and into Workshops directly — "Ann is
          a Figure Edition/workshop world, so she can demonstrate what
          the workshop material actually looks like instead of
          interrupting the Collection -> Path of Stones progression
          with a floating third homepage chapter." Navy Workshops band
          (book cover, "Each workshop opens a different world...,"
          Figure Edition names, CTA) directly followed by Ann in cream,
          in the same section — see HomeSection2.tsx for the full
          rationale, including the navy-vs-cream judgment call flagged
          there. */}
      <HomeSection2 />

      {/* ── THE SCRIPTURAL FIELD: CHRISTIAN SYMBOLS + MATTHEW ────
          2026-08-20, per Susan's "revise the architecture" directive:
          movement #3, the page's close. Matthew 13:34 no longer stands
          as its own section (the former standalone Foundation section
          that used to sit here is retired) — it belongs inside
          Christian Symbols, as the opening biblical premise that
          explains why AwakenArts can move from figurative language
          into Scripture so naturally. "AwakenArts works within that
          same tradition." is cut outright (no longer needed once
          Matthew is physically integrated — "the juxtaposition
          demonstrates the relationship"); the former "Read the
          Foundation of AwakenArts ->" link is also removed, as a
          flagged judgment call — see HomeChristianSymbols.tsx's own
          comment for the full reasoning on both cuts, the reused
          AtmosphericHeader/verse/citation, and the unchanged "Scripture
          Speaks in Symbols" copy, sailboat image, and single CTA.
          PathOfRecognition.tsx (superseded even earlier) and
          HomeQueenAnnCollection.tsx (superseded by the "Section Two /
          Section Three" pass) remain unused in the codebase, per the
          engagement's standing no-silent-deletion practice. */}
      <HomeChristianSymbols />

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
