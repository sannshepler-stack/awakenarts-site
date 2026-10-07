// CollectionBanner — the AwakenArts Collection image (six framed works),
// restored 2026-10-05 per Susan as a major visual asset introducing the
// broader body of work. Same markup, crop and alt text as its original
// homepage placement (HomeSection2, kept in git). Not used as the hero.
// Caption beneath it — Susan, 2026-10-05.

export const COLLECTION_CAPTION =
  'These figures are a selected group from the larger AwakenArts series, a body of figurative work created through image and poetry.'

export default function CollectionBanner({
  marginBottom,
  tone = 'dark',
  caption = COLLECTION_CAPTION,
}: {
  marginBottom?: string
  tone?: 'dark' | 'light'
  caption?: string
}) {
  return (
    <figure style={{ margin: `0 auto ${marginBottom ?? '4rem'}`, maxWidth: 920 }}>
      <div className="section2-dark__collection" style={{ marginBottom: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/collection/collection-banner-02.png"
          alt="The AwakenArts Collection — poetic encounters in shape, symbol, and story — six framed visual-literary works displayed as a gallery wall"
          className="section2-dark__collection-img"
          loading="lazy"
        />
      </div>
      <figcaption
        style={{
          // Caption (Susan, 2026-10-07): makes clear these are a selection.
          fontFamily: 'var(--serif)',
          fontStyle: 'italic',
          fontSize: '1.15rem',
          lineHeight: 1.5,
          color: tone === 'dark' ? 'rgba(250, 247, 242, 0.8)' : 'var(--mid)',
          textAlign: 'center',
          maxWidth: 640,
          margin: '1.1rem auto 0',
          textWrap: 'pretty',
        } as React.CSSProperties}
      >
        {caption}
      </figcaption>
    </figure>
  )
}
