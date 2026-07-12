import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import AtmosphericHeader from '@/components/AtmosphericHeader'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'

// The homepage explicitly sets its canonical to "/" so the trailing-slash
// and bare-domain forms collapse to a single URL in search results.
// Title and description are inherited from the root layout default.
export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: {
    url: '/',
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
 *   2. Discovery   — The Collection. Navy architectural framework,
 *                     cream type, the complete uncropped cover.
 *                     Introduces the Figure Editions as the central
 *                     published body of work; the broader explanation
 *                     of companion works and the growing library
 *                     lives on /collection itself, not here.
 *   3. Understanding — The AwakenArts Method. Answers the question
 *                     Discovery naturally raises ("what is happening
 *                     here?"). Deliberately quiet — a thoughtful
 *                     pause, not a second headline moment — and
 *                     written as an introduction to a future
 *                     standalone Method page, not a full explanation.
 *   4. Embodiment  — Queen Ann Introduction & Encounter. Still + poem
 *                     as one literary spread, the Method made visible
 *                     in an actual work.
 *   5. Foundation  — Matthew 13:34, the quiet theological threshold,
 *                     resolving into an invitation to /foundation
 *                     rather than a closed statement.
 *   6. Footer
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
 * step instead of closing the thought itself.
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
          {/* Logo — primary identity placement. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/brand/AwakenArts-Logo-Primary.svg"
            alt="AwakenArts"
            className="hero-logo"
            width={937}
            height={817}
            loading="eager"
          />

          {/* Primary tagline — the studio's full identity phrase.
              2026-06-30, per Susan ("Oops — Where Language Shapes a
              Path remains"): the headline is restored to its original
              two-line title treatment. The new copy added earlier today
              belongs below it as the mission line — the reason the work
              is done, not the headline itself. */}
          <h1 className="hero-tagline">
            <span>When Language</span>
            <span>Shapes a Path</span>
          </h1>

          {/* Mission line — restates the AwakenArts USP directly beneath
              the headline, echoed again on /encounters and in the Poems
              preview section below.
              2026-07-10, per Susan's "Homepage Refinement — Production
              Pass": supersedes the 2026-07-07 pared-down single
              sentence. The mission line now carries the "every life
              tells its story in images" framing that the Method
              section (below) builds on — two sentences, deliberately,
              so the Hero itself plants the idea the rest of the
              homepage develops.
              2026-07-10, "Hero Typography Refinement" (same day, later
              pass), per Susan: the title must stay the Hero's clear
              focal point, so this line now (1) breaks after the first
              sentence — <br /> between them, not two separate <p>
              elements, so they still read as one supporting thought
              with a natural pause, not two competing statements — and
              (2) is decoupled from the shared --subtitle-size token
              (see globals.css) and reduced ~17%, so it reads as a
              quiet, discoverable invitation rather than a second
              headline. */}
          <p className="hero-mission">
            Every life tells its story in images.
            <br />
            AwakenArts invites you to recognize the symbolic language
            already present in your life through image, poem,
            reflection, and conversation.
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
            <Link href="/encounters" className="hero-invitation__title">
              Enter the Encounters
            </Link>
          </div>
        </div>

        <div className="hero__media">
          <picture className="hero__picture">
            <source
              media="(max-width: 640px)"
              srcSet="/images/brand/chess-ann-hero-mobile.jpg"
            />
            <source
              media="(max-width: 1024px)"
              srcSet="/images/brand/chess-ann-hero-tablet.jpg"
            />
            {/* 2026-07-11 — Susan's brand-image swap, confirmed and
                extended to all three breakpoints. Recolored to the
                site's --deep navy (#1C2B3A) in her own edit
                (Chess-Ann.jpg.png, full-res 3934x3269). Desktop cropped
                to match .hero__media's actual rendered aspect (~1.3:1)
                so object-fit: cover doesn't re-crop further. Tablet and
                mobile crops were pixel-matched against the original
                maroon crops (queen-ann-hero-tablet.jpg / -mobile.jpg) so
                the King/Queen framing is identical to what was already
                tuned — same crop boxes, applied to the new source. */}
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

      {/* ── THE COLLECTION ───────────────────────────────────────
          Stage 2, Discovery — immediately after the Hero. Presented on
          a navy field per the Homepage Reformation Directive: the
          darker ground establishes the Collection as AwakenArts'
          architectural framework and creates a clear visual transition
          before the Method section that follows. Cream typography,
          restrained gold accents, the complete uncropped cover,
          generous surrounding space.

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
              src="/images/collection/collection-cover.jpg"
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
              Each Figure Edition explores a symbolic figure through
              image, poem, and reflection&mdash;inviting recognition
              rather than explanation, and opening new ways of seeing
              ordinary life.
            </p>
            <Link href="/collection" className="home-coll-cta">
              Explore the Collection <span aria-hidden="true">→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ── THE AWAKENARTS METHOD ─────────────────────────────────────
          Stage 3, Understanding. First added 2026-07-10 directly after
          the Hero, per Susan's "establish the AwakenArts Method as the
          conceptual center" directive; moved here, after Collection,
          the same day per her "Homepage Refinement — Production Pass"
          clarification of the narrative hierarchy — Discovery before
          Understanding. This section now answers the question
          Discovery naturally raises: "what is happening here?"

          Deliberately quiet by design — reduced typographic dominance
          (see globals.css's "HOMEPAGE: THE AWAKENARTS METHOD" block),
          no image, still no mention of workshops or Sketchbook. The
          two former explanatory paragraphs are combined into one
          continuous paragraph per Susan's direction. The section is
          written as an introduction to the standalone Method page
          (src/app/method/page.tsx, shipped 2026-07-10), not a
          complete explanation — see the CTA note below.

          Method CTA: originally "Learn More About the AwakenArts
          Method →," held as static placeholder text
          (.home-method-future) until /method existed, then wired to a
          real <Link> the same day the page shipped.
          2026-07-10, later still the same day, per Susan: "the Method
          is no longer a placeholder — it's becoming one of the
          foundational pages — the homepage invitation should reflect
          that." Copy strengthened to "Discover the AwakenArts Method
          →" (her preference over "Explore," to avoid echoing the
          Collection CTA's own "Explore the Collection"). Class renamed
          .home-method-future -> .home-method-cta, since "future" no
          longer describes it. Visual treatment upgraded from a plain
          text link to an outlined "framed link" (see globals.css) —
          more presence than before, still deliberately lighter than
          .home-coll-cta's solid button: an invitation to keep reading,
          not a second product CTA. */}
      <section className="home-method-section" aria-labelledby="home-method-heading">
        <div className="home-method-inner">
          <p className="eyebrow">The AwakenArts Method</p>
          <h2 id="home-method-heading">
            People tell their stories with facts.{' '}
            <em>They reveal their lives through images.</em>
          </h2>
          <p className="home-method-body">
            Long before we settle on words, certain pictures return to
            us&mdash;in conversation, in memory, and in the stories we
            tell about our own lives. AwakenArts begins there, with the
            images a life has already chosen, not with a theory placed
            over them. AwakenArts is a practice of attention&mdash;learning
            to notice an image and remain with it long enough for
            recognition to emerge.
          </p>
          <Link href="/method" className="home-method-cta">
            Discover the AwakenArts Method <span aria-hidden="true">→</span>
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

      {/* ── QUEEN ANN ENCOUNTER & FOUNDATION ───────────────────────
          A flat cream field carrying two quiet movements, encountered
          rather than explained:
            1. Queen Ann Encounter — the portrait still and the poem
               as facing pages of one open book, equal partners.
            2. Matthew 13:34 (the foundation, placed last, quiet) —
               the encounter resolves directly into it; no replacement
               band or divider between them.
          Revised per Susan's June 2026 review: the navy stage and
          rounded bottom corners that used to wrap the title page (see
          .poems-showcase-intro above, since split into its own
          full-bleed section) read as an accidental dark strip and a
          "card" rather than a publication, so both were removed —
          this field begins directly where the Introduction band above
          it ends. See the POEMS / EDITIONS SHOWCASE block in
          globals.css. */}
      <section className="poems-showcase-section" aria-label="Queen Ann Encounter">
        <div className="poems-showcase-inner">

          {/* 2. Queen Ann Encounter — the poem and the portrait still
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

        {/* 3. Matthew 13:34 — the foundation. Placed last, quiet and
            secondary: the theological/literary grounding after the
            viewer has already encountered the image and poem. The
            encounter resolves directly into it — no transitional
            band between them. */}
        <div className="poems-showcase-foundation">
          <AtmosphericHeader
            src="/images/headers/biblical-foundation.jpg"
            alt="Sunrise over hills and a winding river, seen through a worn stone window — a threshold image."
            tall
            fadeTo="#f5f0e8"
            fadeHeight={25}
          />
          <div className="poems-showcase-foundation__inner">
            <p className="hero-quote-text">
              He did not say anything to them without using a parable.
            </p>
            <p className="hero-quote-cite">Matthew 13:34</p>
            {/* 2026-07-10, per Susan's directive: the homepage close is
                trimmed to threshold image + Scripture + one short bridge
                line + a CTA to /foundation. The longer explanatory
                paragraph that used to sit here ("AwakenArts works within
                that same enduring tradition — bringing image and poem
                together as symbolic forms that invite recognition
                through attentive engagement, not explanation.") and the
                "Christ is the center. Scripture is the authority." credo
                line below it are removed from the homepage — both ideas
                already live in full on /foundation (see
                src/app/foundation/page.tsx), which is exactly where
                Susan wants the complete statement read, without
                interrupting the homepage's flow.

                2026-07-10 "Foundation Section Refinement," per Susan:
                copy unchanged, but .hero-quote-text/.hero-quote-cite/
                .hero-quote-body/.hero-quote-closing were retyped and
                respaced in globals.css so Scripture, citation, and
                this bridge line read as one closing meditation —
                Scripture -> Reflection -> Invitation — rather than
                three stacked blocks. See globals.css for the full
                rationale on each rule. */}
            <p className="hero-quote-body">
              AwakenArts works within that same tradition.
            </p>
            {/* 2026-06-28 Final Editorial Refinement: the former closed
                statement ("Symbolic language invites recognition before
                explanation.") is replaced with an invitation forward —
                continuity, not promotion. This is the homepage's one
                quiet point of departure toward /foundation. */}
            <Link href="/foundation" className="hero-quote-closing">
              Read the Foundation of AwakenArts <span aria-hidden="true">→</span>
            </Link>
          </div>
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
