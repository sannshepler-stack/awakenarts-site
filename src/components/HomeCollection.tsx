import CollectionBanner from '@/components/CollectionBanner'
import TextLink, { TextLinkRow } from '@/components/TextLink'
import { PRESENTATIONS } from '@/data/presentations'

// HomeCollection — homepage Section 3 (2026-10-07, Susan): the AwakenArts
// Collection banner with its caption, then Workshops. "View Current Workshops"
// uses the existing workshop destination, /presentations (where the
// Grismere workshop and future ones are listed; /workshops redirects there).

// 2026-10-08, Susan: the card's visitor should see the Experience offer —
// the block names the current presentation (attendees first) and leads to it.

export default function HomeCollection() {
  const featured = PRESENTATIONS[0]
  return (
    <section className="section2" aria-label="The AwakenArts Collection and Workshops">
      <div className="section2-dark">
        <CollectionBanner marginBottom="0" href="/collection" />
        {/* 2026-10-07, Susan: the homepage leads to the Collection page,
            where all the work with the figures now lives. */}
        <div style={{ marginTop: '1.5rem' }}>
          <TextLinkRow center>
            <TextLink href="/collection" tone="light" cta="home-explore-collection">
              Explore the Collection
            </TextLink>
          </TextLinkRow>
        </div>
        <div className="section2-dark__inner" style={{ maxWidth: 680, marginTop: '3.5rem' }}>
          <h2 className="section2-dark__title">Presentations &amp; Workshops</h2>
          <p className="section2-dark__worlds" style={{ marginBottom: featured ? '1.5rem' : '2rem' }}>
            Explore the collection through image, poetry, and conversation. Notice what draws you in and how it connects
            with your own experience.
          </p>
          {featured && (
            <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.3rem', lineHeight: 1.4, color: 'var(--gold-lt)', margin: '0 0 2rem' }}>
              Now offering: {featured.title}
            </p>
          )}
          <TextLinkRow center>
            {featured && (
              <TextLink href={`/presentations/${featured.slug}`} tone="light" cta={`home-presentation-${featured.slug}`}>
                Discover {featured.shortTitle || featured.title}
              </TextLink>
            )}
            <TextLink href="/presentations" tone="light" cta="home-view-workshops">
              All Presentations
            </TextLink>
          </TextLinkRow>
        </div>
      </div>
    </section>
  )
}
