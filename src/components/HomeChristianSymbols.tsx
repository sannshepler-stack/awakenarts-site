import Link from 'next/link'
import AtmosphericHeader from '@/components/AtmosphericHeader'

/*
 * HomeChristianSymbols — Christian Symbols + Matthew, one integrated
 * section, cream.
 *
 * 2026-08-20, per Susan's "revise the architecture" directive: Matthew
 * 13:34 no longer stands as its own homepage section between Workshops
 * and Christian Symbols. It belongs inside Christian Symbols, because
 * it explains why AwakenArts can move from figurative language into
 * Scripture so naturally — "the opening biblical premise within this
 * same composition, not a bridge sitting between sections." The former
 * standalone Foundation section (.poems-showcase-foundation, in
 * page.tsx) is retired; its AtmosphericHeader image and the verse/
 * citation now open THIS component instead, leading directly into
 * "Scripture Speaks in Symbols." This is now the third and final
 * homepage movement after the Hero (THE SCRIPTURAL FIELD), following
 * HomeCollectionPremise.tsx (THE WORK) and HomeSection2.tsx, which now
 * also carries Queen Ann (THE EXPERIENCE) — see that component's own
 * comment.
 *
 * CONTENT CUT: "AwakenArts works within that same tradition." is
 * removed outright, per Susan's explicit instruction — "it becomes
 * unnecessary once Matthew is physically integrated with Christian
 * Symbols. The juxtaposition demonstrates the relationship. We don't
 * need to tell the visitor what the design itself has just made
 * apparent."
 *
 * JUDGMENT CALL, FLAGGED: the former "Read the Foundation of
 * AwakenArts ->" link (to /foundation) is also removed here, not just
 * the bridge sentence. Susan's own listed sequence for this section
 * ("He did not say anything... / MATTHEW 13:34 / Then Scripture Speaks
 * in Symbols develops that thought") doesn't include it, and keeping
 * it would give this section two competing CTAs (Foundation, then
 * Christian Symbols) where every other homepage section now holds to
 * one. This wasn't explicitly spelled out as "remove the link" the way
 * the bridge sentence was, so it's worth Susan's confirmation rather
 * than treating it as settled — the /foundation page itself is
 * untouched and still reachable via Nav/Footer either way.
 *
 * FLOW: AtmosphericHeader (threshold image) -> verse -> citation ->
 * "Christian Symbols" eyebrow / "Scripture Speaks in Symbols" heading
 * / statement (reused verbatim from /symbols' own hero copy, per
 * Susan's earlier "let existing substantive language create the
 * progression" instruction, still honored) -> sailboat image
 * (unchanged, per her explicit instruction not to replace it with
 * either Collection asset) -> single CTA, "Explore Christian Symbols
 * ->". Uses .poems-showcase-foundation/-inner as the section's own
 * shell (background, padding, AtmosphericHeader placement) and reuses
 * .home-recognition__header/-statement/-statement-navy/-gold/
 * -encounters-image/-cta/-cta--after-image directly inside it, rather
 * than nesting the old .home-recognition/.home-recognition__inner
 * wrapper (which supplied its own now-redundant background/padding) —
 * see .poems-showcase-foundation__symbols in globals.css for the
 * connecting spacing. .home-recognition/.home-recognition__inner
 * themselves are left defined, unused, per no-silent-deletion.
 */
export default function HomeChristianSymbols() {
  return (
    <section className="poems-showcase-foundation" aria-label="Christian Symbols">
      <AtmosphericHeader
        src="/images/headers/biblical-foundation.jpg"
        alt="Sunrise over hills and a winding river, seen through a worn stone window — a threshold image."
        fadeTo="#FAF7F2"
        fadeHeight={25}
      />
      <div className="poems-showcase-foundation__inner">

        <p className="hero-quote-text">
          He did not say anything to them without using a parable.
        </p>
        <p className="hero-quote-cite">Matthew 13:34</p>

        <div className="poems-showcase-foundation__symbols">
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
            Explore Christian Symbols <span aria-hidden="true">→</span>
          </Link>
        </div>

      </div>
    </section>
  )
}
