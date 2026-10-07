import CollectionBanner from '@/components/CollectionBanner'
import TextLink, { TextLinkRow } from '@/components/TextLink'

// HomeCollection — homepage Section 3 (2026-10-07, Susan): the AwakenArts
// Collection banner with its caption, then Workshops. "View Current Workshops"
// uses the existing workshop destination, /presentations (where the
// Grismere workshop and future ones are listed; /workshops redirects there).

export default function HomeCollection() {
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
          <h2 className="section2-dark__title">Workshops</h2>
          <p className="section2-dark__worlds" style={{ marginBottom: '2rem' }}>
            Explore the collection through image, poetry, and conversation. Notice what draws you in and how it connects
            with your own experience.
          </p>
          <TextLinkRow center>
            <TextLink href="/presentations" tone="light" cta="home-view-workshops">
              View Current Workshops
            </TextLink>
          </TextLinkRow>
        </div>
      </div>
    </section>
  )
}
