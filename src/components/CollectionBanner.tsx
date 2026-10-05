// CollectionBanner — the AwakenArts Collection image (six framed works),
// restored 2026-10-05 per Susan as a major visual asset introducing the
// broader body of work. Same markup, crop and alt text as its original
// homepage placement (HomeSection2, kept in git). Not used as the hero.

export default function CollectionBanner({ marginBottom }: { marginBottom?: string }) {
  return (
    <div className="section2-dark__collection" style={marginBottom ? { marginBottom } : undefined}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/collection/collection-banner-02.png"
        alt="The AwakenArts Collection — poetic encounters in shape, symbol, and story — six framed visual-literary works displayed as a gallery wall"
        className="section2-dark__collection-img"
        loading="lazy"
      />
    </div>
  )
}
