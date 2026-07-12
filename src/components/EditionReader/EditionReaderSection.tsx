'use client'

// EditionReaderSection — Implementation Spec v1.0, Section 5/6. Renders one
// screen of the Reader: a responsive protected image, a text block, or (for
// the 'acquire' section) the existing EmailGateDownload component reused
// unmodified.
//
// Long-text decision (Phase 2, recorded in the Implementation Log): Dragon's
// Recognition and Reflection sections each combine two print pages into one
// EditionSection.text string, which is long for a single screen. Rather than
// growing the 8-section template, a text section's content area scrolls
// internally (overflow-y: auto, capped to the space below the top bar) when
// it doesn't fit — the section still occupies exactly one "screen" in the
// Reader's pacing model (one swipe/arrow-press = one section), it just isn't
// forced to fit without scrolling. This applies uniformly to every text
// section, not only Recognition/Reflection, so it holds up for future
// Editions without special-casing by id.

import EmailGateDownload from '@/components/EmailGateDownload'
import type { Edition, EditionSection } from '@/data/editions'

function TextBlock({ text }: { text: string }) {
  const paragraphs = text.split('\n\n')
  return (
    <>
      {paragraphs.map((para, i) => (
        <p key={i}>
          {para.split('\n').map((line, j, arr) => (
            <span key={j}>
              {line}
              {j < arr.length - 1 ? <br /> : null}
            </span>
          ))}
        </p>
      ))}
    </>
  )
}

export default function EditionReaderSection({
  section,
  edition,
}: {
  section: EditionSection
  edition: Edition
}) {
  if (section.id === 'acquire') {
    return (
      <div className="reader-section reader-section--acquire">
        <p className="eyebrow reader-acquire__eyebrow">Hear When the Next Edition Arrives</p>
        <h2 className="reader-acquire__title">{edition.title} Is Yours to Keep</h2>
        <p className="reader-acquire__sub">
          Leave your email and the full Figure Edition is yours instantly — and you&rsquo;ll hear
          when the next one is ready.
        </p>
        <div className="reader-acquire__form">
          <EmailGateDownload
            pdfHref={edition.pdf}
            fileName={`${edition.title.replace(/\s+/g, '_')}_Figure_Edition.pdf`}
            source={`edition-${edition.slug}`}
            itemLabel={`the ${edition.title} Figure Edition`}
            submitLabel="Send Me the Edition →"
            thanksText="You're on the list — your copy is on its way."
          />
        </div>
      </div>
    )
  }

  // Word/Poem — background art with a single piece of authored artwork
  // composited on top, no HTML text. Added for the Dragon Revision
  // Directive, 2026-07-12: the poem is real artwork, not generated text;
  // the background supports it rather than replacing it. Checked before
  // the plain `image` and `text` branches since this section has neither
  // a `desktop/tablet/mobile` image set nor a `text` string.
  if (section.background && section.overlayImage && !section.text) {
    return (
      <div
        className={`reader-section reader-section--image reader-section--${section.id}`}
        style={{ backgroundImage: `url(${section.background})` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={section.overlayImage.src}
          alt={section.overlayImage.alt}
          className="reader-overlay-img protected-img"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        />
      </div>
    )
  }

  if (section.image) {
    const { image } = section
    // Figure — matted presentation, added 2026-07-12: at full-bleed size
    // this piece (wings spread edge to edge, teeth bared) reads as too
    // dominating/intense filling nearly the whole viewport. The master
    // manuscript's own production note describes this page as "the framed
    // watercolor dragon figure on a cream mat" — a contained, matted
    // presentation, not full-bleed — so it's scaled down and given a
    // visible cream mat instead, closer to how it reads in the Gallery.
    const matted = section.id === 'image'
    return (
      <div className={`reader-section reader-section--image${matted ? ' reader-section--figure-matted' : ''}`}>
        <picture>
          <source media="(max-width: 640px)" srcSet={image.mobile} />
          <source media="(max-width: 1000px)" srcSet={image.tablet} />
          <img
            src={image.desktop}
            alt={image.alt}
            className={`reader-img protected-img${matted ? ' reader-img--matted' : ''}`}
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
        </picture>
      </div>
    )
  }

  if (section.text) {
    // Recognition and Reflection's background art are landscape banners
    // paired with long, internally-scrolling text — stretching either to a
    // CSS cover background behind the whole (very tall) section would
    // crush/crop it. Both render as a real <img> banner above the text
    // instead. Every other background image here is a portrait piece
    // behind comparatively short text, where a CSS cover background works.
    const useBanner = section.id === 'recognition' || section.id === 'reflection'
    // Colophon's background renders as a bottom-band-only strip (a real
    // <img>, absolutely positioned within the section, masked to fade into
    // the page above it) rather than a full-page cover — added 2026-07-12
    // per the Dragon Revision Directive's "fade it naturally into the
    // paper, let it quietly close the edition."
    const bottomBand = section.id === 'colophon'
    const style =
      section.background && !useBanner && !bottomBand
        ? { backgroundImage: `url(${section.background})` }
        : undefined
    return (
      <div
        className={`reader-section reader-section--text reader-section--${section.id}${
          section.background && !useBanner && !bottomBand ? ' reader-section--has-bg' : ''
        }`}
        style={style}
      >
        {section.background && bottomBand && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={section.background}
            alt=""
            className="reader-colophon__band"
            aria-hidden="true"
          />
        )}
        {section.background && useBanner && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={section.background} alt="" className="reader-section__banner" aria-hidden="true" />
        )}
        {section.id === 'colophon' && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src="/images/brand/AwakenArts-Logo-Primary.svg"
            alt="AwakenArts"
            className="reader-colophon__logo"
          />
        )}
        {section.id === 'message-delivered' && (
          <span className="reader-ampersand" aria-hidden="true">&amp;</span>
        )}
        <div className="reader-text">
          <TextBlock text={section.text} />
          {section.id === 'journal' && (
            // Real ruled lines, beneath the intro text only — per the
            // Dragon Revision Directive: "Add journal lines only beneath
            // the introductory text. Preserve generous writing space."
            <div className="reader-journal__lines" aria-hidden="true">
              {Array.from({ length: 11 }).map((_, i) => (
                <div key={i} className="reader-journal__line" />
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }

  return null
}
