import Link from 'next/link'

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
 * AtmosphericHeader is no longer imported/used by this component —
 * see .poems-showcase-foundation in globals.css, whose padding-top was
 * originally tuned as "gap before the threshold image begins" and now
 * simply serves as the gap before the eyebrow instead, unchanged
 * value, still reads correctly as ordinary section-opening breathing
 * room.
 */
export default function HomeChristianSymbols() {
  return (
    <section className="poems-showcase-foundation" aria-label="Christian Symbols">
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

        <figure className="home-recognition__encounters-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/homepage/encounters-symbols-ship-v3.png"
            alt="A quiet path opening onto calm water, where a sailing ship waits beneath a soft horizon"
            loading="lazy"
          />
        </figure>

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
            passage: five short paragraphs added below the verse and
            citation, closing the section as one continuous meditation
            rather than ending on the citation alone. See
            .hero-quote-reflection in globals.css for the full
            reasoning, including the restored "Christ is the center.
            Scripture is the authority." credo line (originally
            retired from /foundation on 2026-07-14, brought back here
            per her explicit request). */}
        <div className="hero-quote-reflection">
          <p>
            Jesus taught through the familiar language of image,
            story, metaphor, and the ordinary things of human life. He
            entered the world as he found it without surrendering the
            truth he carried.
          </p>
          <p className="hero-quote-reflection__bridge">
            AwakenArts works within that tradition.
          </p>
          <p>
            Its study of symbol and archetypal pattern may lead into
            literature, psychology, mythology, folklore, and the long
            history of human imagination. Entering those territories
            does not require surrendering the ground from which we
            enter them.
          </p>
          <p className="hero-quote-reflection__credo">
            Christ is the center. Scripture is the authority.
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
