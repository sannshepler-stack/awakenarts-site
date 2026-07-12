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

  if (section.image) {
    const { image } = section
    return (
      <div className="reader-section reader-section--image">
        <picture>
          <source media="(max-width: 640px)" srcSet={image.mobile} />
          <source media="(max-width: 1000px)" srcSet={image.tablet} />
          <img
            src={image.desktop}
            alt={image.alt}
            className="reader-img protected-img"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
        </picture>
      </div>
    )
  }

  if (section.text) {
    // Recognition's background art is a landscape banner paired with long,
    // internally-scrolling text — stretching it to a CSS cover background
    // behind the whole (very tall) section would crush/crop it. It renders
    // as a real <img> banner above the text instead. Every other
    // background image here is a portrait full-page piece behind
    // comparatively short text, where a CSS cover background works.
    const useBanner = section.id === 'recognition'
    const style =
      section.background && !useBanner
        ? { backgroundImage: `url(${section.background})` }
        : undefined
    return (
      <div
        className={`reader-section reader-section--text reader-section--${section.id}${
          section.background && !useBanner ? ' reader-section--has-bg' : ''
        }`}
        style={style}
      >
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
        </div>
      </div>
    )
  }

  return null
}
