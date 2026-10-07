import CollectionBanner from '@/components/CollectionBanner'

// HomeCollection — the AwakenArts Collection as its own dark homepage
// section, right after the recognition/mirror section (2026-10-07, Susan):
// the visitor's first encounter with the larger body of work. Same image
// and dark background as before; it used to open the Guided Encounters band.

export default function HomeCollection() {
  return (
    <section className="section2" aria-label="The AwakenArts Collection">
      <div className="section2-dark" style={{ paddingBottom: '1rem' }}>
        <CollectionBanner marginBottom="0" />
      </div>
    </section>
  )
}
