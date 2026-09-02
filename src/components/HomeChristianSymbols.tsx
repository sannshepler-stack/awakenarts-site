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
 * corners, max-width 900px, inset in the text column), is now a
 * second AtmosphericHeader -- full-bleed, edge-to-edge, breaking out
 * of .poems-showcase-foundation__inner's 1000px/2rem-padded column
 * the same way the Ann threshold header above already does, rather
 * than sitting boxed inside it. .poems-showcase-foundation__inner is
 * split into two instances (statement content, then CTA/verse/
 * reflection content) with this header breaking out between them.
 * Unlike the Ann header, this one does NOT use `tall` -- that variant
 * is reserved for the section-boundary threshold per its own comment
 * ("the single instance where the landscape is the pivot"); this is a
 * supporting image within one section, not a transition between two,
 * so the standard height keeps it a visual pause rather than a second
 * threshold. Same center object-position the boxed figure already
 * used (this component's own prior comment confirmed the boat/horizon
 * reads fine center-cropped at both desktop and mobile), so no new
 * pre-crop file was needed the way Ann's was. fadeTo="var(--cream)"
 * matches, so it dissolves into the CTA below exactly as the Ann
 * header dissolves into the eyebrow above.
 * .home-recognition__encounters-image and its img rule are left
 * defined, unused, per no-silent-deletion. */
export default function HomeChristianSymbols() {
  return (
    <section className="poems-showcase-foundation" aria-label="Christian Symbols">

      <AtmosphericHeader
        src="/images/headers/queen-ann-threshold.jpg"
        alt="Queen Ann beneath a clouded sunset sky, crowned and windswept, with a distant castle silhouette -- the same portrait from the encounter above, now a quiet threshold into Scripture"
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

      </div>

      <div className="poems-showcase-foundation__ship-header">
        <AtmosphericHeader
          src="/images/homepage/encounters-symbols-ship-v3.png"
          alt="A quiet path opening onto calm water, where a sailing ship waits beneath a soft horizon"
          fadeTo="var(--cream)"
        />
      </div>

      <div className="poems-showcase-foundation__inner">

        <div className="home-recognition__cta home-recognition__cta--after-image">
          <Link href="/symbols" className="home-coll-cta home-coll-cta--light-surface">
            Explore Christian Symbols
          </Link>
        </div>

        <p className="hero-quote-text">
          He did not say anything to them without using a parable.
        </p>
        <p className="hero-quote-cite">Matthew 13:34</p>

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
            italic invitation line is kept separate, exactly as she
            specified ("retain your final italic line separately").
            .hero-quote-reflection__bridge and __credo (the modifier
            classes those two retired lines used) are now unused --
            left defined in globals.css, per no-silent-deletion. */}
        <div className="hero-quote-reflection">
          <p>
            Jesus taught through image, story, and metaphor, entering
            the world as He found it without surrendering the truth He
            carried. AwakenArts works within that tradition—engaging
            literature, psychology, mythology, folklore, and the long
            history of human imagination while remaining grounded in
            Christ and the authority of Scripture.
          </p>
          <p className="hero-quote-reflection__invitation">
            The artistic work is an invitation to look, recognize, and
            reflect.
          </p>
        </div>

      </div>
    </section>
  )
}
