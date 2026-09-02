import Link from 'next/link'
import AtmosphericHeader from '@/components/AtmosphericHeader'

/*
 * HomeChristianSymbols — Christian Symbols + Matthew, one integrated
 * section, cream.
 *
 * 2026-08-20, per Susan's "revise the architecture" directive: Matthew
 * 13:34 no longer stands as its own homepage section between Workshops
 * and Christian Symbols. It belongs inside Christian Symbols. This is
 * the third and final homepage movement after the Hero (THE SCRIPTURAL
 * FIELD), following HomeCollectionPremise.tsx (THE WORK) and
 * HomeSection2.tsx (THE EXPERIENCE).
 *
 * CONTENT CUT: "AwakenArts works within that same tradition." and the
 * former "Read the Foundation of AwakenArts ->" link are both removed
 * — see git history for the full reasoning (the bridge sentence was
 * explicit; the link removal was flagged as a judgment call at the
 * time).
 *
 * 2026-08-20, later the same day, per Susan's follow-up: the section's
 * internal order reverses again. Matthew no longer opens the section —
 * the AtmosphericHeader threshold image (biblical-foundation.jpg) is
 * removed entirely, and the section now starts directly as Christian
 * Symbols: eyebrow -> "Scripture Speaks in Symbols" -> statement ->
 * sailboat image -> CTA. The Matthew verse and citation move to the
 * very end, below the CTA button, as a closing scriptural note rather
 * than an opening threshold — same size/typography as always
 * (.hero-quote-text/.hero-quote-cite, untouched). The sailboat image
 * is now the section's only image.
 *
 * FLOW: "Christian Symbols" eyebrow / "Scripture Speaks in Symbols"
 * heading / statement (reused verbatim from /symbols' own hero copy)
 * -> sailboat image (unchanged) -> CTA, "Explore Christian Symbols
 * ->" -> Matthew verse + citation, closing. Uses .poems-showcase-
 * foundation/-inner as the section's own shell (background, padding)
 * and reuses .home-recognition__header/-statement/-statement-navy/
 * -gold/-encounters-image/-cta/-cta--after-image directly inside it,
 * rather than the old .home-recognition/.home-recognition__inner
 * wrapper (superseded, left defined per no-silent-deletion).
 * AtmosphericHeader was not imported/used by this component from
 * 2026-08-20 until the pass below.
 *
 * 2026-09-02, per Susan's "we now have a section division issue
 * between Ann and Matthew" directive: with Workshops (HomeSection2.tsx)
 * reordered ahead of the Ann/Collection-premise section (see page.tsx's
 * own 2026-09-02 comment), that section's cream field now sits
 * directly against this one's cream field, with nothing marking the
 * seam between them -- the navy Workshops band used to do that job.
 * Her fix: "creating a header from the image that is present" --
 * reusing queen-ann-still.png (already on the page, in the Ann
 * pairing immediately above) as an AtmosphericHeader threshold image
 * here, rather than introducing new imagery. This also revives the
 * `tall` variant's original purpose exactly -- see AtmosphericHeader
 * .tsx's own comment: "the single instance where the landscape is the
 * pivot between the Queen Ann encounter and Scripture."
 *
 * Per her "preserve the best parts of the image" instruction: rather
 * than crop live via object-fit (which would center-crop the source's
 * full 1536x1024 canvas and risk losing her face/crown at wide
 * viewports), a dedicated crop was pre-made -- public/images/headers/
 * queen-ann-threshold.jpg, source rows 5%-57% (crown down through
 * upper dress, full sky, and the castle silhouette + first warmth of
 * the sunset), 2.89:1 -- following the site's established convention
 * of pre-cropping header images to their focal point rather than
 * relying on object-position overrides (see AtmosphericHeader.tsx's
 * own "focal point stays centered" note). fadeTo matches this
 * section's own cream background so the image dissolves into the
 * eyebrow below rather than ending on a hard seam.
 *
 * 2026-09-02, later the same day, per Susan's "The Ann heading is
 * spectacular... but the ann header belongs with the ann section
 * while the boat image in the matthew section can become a header --
 * like the great work on the ann header" follow-up: the sailboat
 * image (encounters-symbols-ship-v3.png), formerly a boxed, contained
 * <figure> mid-section (.home-recognition__encounters-image, rounded
 * corners, max-width 900px, inset in the text column), briefly became
 * a SECOND AtmosphericHeader breaking out mid-section (see git history
 * for that pass -- superseded the same day, below).
 *
 * 2026-09-02, later still, per Susan's direct follow-up on that same-
 * day pass ("the ann header belongs with the ann section... the
 * matthew section starts with the header giving the section its own
 * starting place... All matthew copy follows the header. The Ann
 * header goes to the workshop page instead of what is there."): two
 * changes, superseding both prior 2026-09-02 passes above.
 * (1) The Queen Ann threshold header (queen-ann-threshold.jpg) is
 *     REMOVED from this section entirely -- it now opens /workshops
 *     instead (see that page's own comment). Its role here (marking
 *     this section's own starting place against the Ann/Collection-
 *     premise section's matching cream field) is not removed, just
 *     recast with different art.
 * (2) The sailboat image takes over that exact role and position --
 *     the section's single opening threshold, `tall`, fadeTo cream --
 *     rather than staying a second, mid-section break. All of this
 *     section's own copy (eyebrow through the closing reflection) now
 *     follows it as one continuous .poems-showcase-foundation__inner
 *     block, undoing the split the prior pass introduced.
 * .home-recognition__encounters-image and its img rule, and
 * .poems-showcase-foundation__ship-header, are all left defined,
 * unused, per no-silent-deletion -- see their own comments in
 * globals.css for the fuller history.
 *
 * 2026-09-02, per Susan's "we can choose one of these headers to start
 * section 3 against section 2" directive: presented with two candidate
 * sky-threshold images (both 1536x1024, same source pipeline as
 * queen-ann-threshold.jpg) to mark the seam where Workshops (section 2,
 * dark navy) hands off to Christian Symbols (section 3, cream) -- the
 * same seam-marking role the Ann threshold now plays for Workshops
 * itself. Chose the more centered, symmetric golden break in the
 * clouds over the off-center alternative: a centered composition reads
 * more intentional at full-bleed width, where the eye meets it
 * straight-on above the centered copy column below. Saved as
 * public/images/headers/scripture-threshold.jpg. This REPLACES the
 * sailboat image (encounters-symbols-ship-v3.png) in the section's
 * single opening `tall` threshold slot -- the sailboat is left in
 * place in public/images/homepage/, unused, per no-silent-deletion. */
export default function HomeChristianSymbols() {
  return (
    <section className="poems-showcase-foundation" aria-label="Christian Symbols">

      <AtmosphericHeader
        src="/images/headers/scripture-threshold.jpg"
        alt="A dark sky heavy with clouds breaking open to warm gold light along the horizon -- the threshold into this section's Scripture and symbols"
        tall
        fadeTo="var(--cream)"
      />

      <div className="poems-showcase-foundation__inner">

        <p className="eyebrow">Christian Symbols</p>
        <h2 id="home-recognition-heading">Scripture Speaks in Symbols</h2>

        <p className="home-recognition__statement">
          <span className="home-recognition__statement-navy">
            A lamp. A path. A flower. A vine. A shepherd.
          </span>
          <br />
          <span className="home-recognition__statement-gold">
            Ordinary things become carriers of meaning.
          </span>
        </p>

        {/* 2026-09-02, per Susan's directive to expand the Matthew
            passage: paragraphs added below the verse and citation,
            closing the section as one continuous meditation rather
            than ending on the citation alone. See .hero-quote-
            reflection in globals.css for the full reasoning, including
            the "Christ is the center. Scripture is the authority."
            credo material (originally retired from /foundation on
            2026-07-14, folded back in here per her explicit request).

            2026-09-02, later the same day, per Susan's "revise the
            added text" follow-up: the four separate paragraphs this
            first pass used (opening statement, bridge line, second
            statement, credo line) are condensed into ONE paragraph,
            her own tightened wording, replacing all four. The closing
            italic invitation line was kept separate at that point, per
            her "retain your final italic line separately" instruction.
            .hero-quote-reflection__bridge and __credo (the modifier
            classes those two retired lines used) are unused -- left
            defined in globals.css, per no-silent-deletion.

            2026-09-02, later still, per Susan's "better flow" follow-up
            ("Put the Matthew quote below the explanatory text 'Jesus
            taught...' -- (remove 'The artistic work...') then the
            button -- then end with the quote"): three changes.
            (1) This paragraph moves UP, from after the verse/citation
                to right after the statement -- explanatory text now
                leads into the CTA rather than following the quote.
            (2) The closing italic invitation line ("The artistic work
                is an invitation...") is removed outright, not just
                relocated -- her explicit "remove" instruction, not a
                Keep/Relocate judgment call. .hero-quote-reflection
                __invitation is left defined in globals.css, unused,
                per no-silent-deletion.
            (3) The CTA button and the Matthew verse/citation both move
                DOWN, below this paragraph, in that order -- the
                section now closes on the quote itself, per her "end
                with the quote" instruction, rather than opening with
                it. */}
        {/* 2026-09-02, per Susan's "watch for orphans" note, spotted
            after the typography pass's font-family/size change to this
            paragraph left "Scripture." alone on its own final line at
            the width she was viewing: standard orphan-control fix
            (non-breaking space between the last two words, same
            technique used elsewhere on the homepage) so "of" and
            "Scripture." always wrap together. No visible character
            added. */}
        <div className="hero-quote-reflection">
          <p>
            Jesus taught through image, story, and metaphor, entering
            the world as He found it without surrendering the truth He
            carried. AwakenArts works within that tradition—engaging
            literature, psychology, mythology, folklore, and the long
            history of human imagination while remaining grounded in
            Christ and the authority of&nbsp;Scripture.
          </p>
        </div>

        <div className="home-recognition__cta home-recognition__cta--after-image">
          <Link href="/symbols" className="home-coll-cta home-coll-cta--light-surface">
            Explore Christian Symbols
          </Link>
        </div>

        <p className="hero-quote-text">
          He did not say anything to them without using a parable.
        </p>
        <p className="hero-quote-cite">Matthew 13:34</p>

      </div>
    </section>
  )
}
