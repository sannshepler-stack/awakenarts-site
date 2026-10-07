import CollectionBanner from '@/components/CollectionBanner'
import TextLink, { TextLinkRow } from '@/components/TextLink'

// HomeCollection — homepage Section 3 (2026-10-07, Susan): the AwakenArts
// Collection banner (no caption), then Workshops. "View Current Workshops"
// uses the existing workshop destination, /presentations (where the
// Grismere workshop and future ones are listed; /workshops redirects there).

export default function HomeCollection() {
  return (
    <section className="section2" aria-label="The AwakenArts Collection and Workshops">
      <div className="section2-dark">
        <CollectionBanner marginBottom="0" caption="" />
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
