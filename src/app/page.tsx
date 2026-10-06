import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import HomeBeginWithSymbol from '@/components/HomeBeginWithSymbol'
import HomeSpeakInImages from '@/components/HomeSpeakInImages'
import TextLink, { TextLinkRow } from '@/components/TextLink'
import HomeChristianSymbols from '@/components/HomeChristianSymbols'
import HomeGuidedEncounters from '@/components/HomeGuidedEncounters'
import HomeBooks from '@/components/HomeBooks'
import HomeAbout from '@/components/HomeAbout'
import StayConnected from '@/components/StayConnected'
import Footer from '@/components/Footer'
import { featuredSymbolCards } from '@/data/symbolCards'

// Homepage — rebuilt 2026-10-05 per the AwakenArts Website Rebuild brief and
// the approved First-Pass Structure Plan (§3). Symbol-first visitor path:
//   1 Hero · 2 Begin with a Symbol · 3 You Already Speak in Images ·
//   4 Scripture Speaks in Symbols · 5 Guided Encounters · 6 Books &
//   Resources · 7 Stay Connected · 8 About AwakenArts
//
// Hero line is Susan's approved core line, used exactly. The previous
// homepage (hero lede/body, animated "When Images Become Words" line,
// Workshops band) and its full comment history are preserved in git at
// commit 9d3746a; the HomeSection2 component file is left in place, unused.
// Sections 3 and 4 reuse their existing components unchanged.

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: {
    url: '/',
    images: ['/images/brand/og-logo.png'],
  },
}

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* 1 — Hero */}
      <section className="hero" aria-label="Hero">
        <div className="hero__text">
          {/* 2026-10-05, per Susan: no logo lockup inside the hero (the nav
              already carries it). Gold eyebrow + the approved line in the
              site's primary serif heading style, matching the other sections. */}
          <p className="eyebrow">AwakenArts</p>
          {/* 2026-10-05, Susan: a short heading at section-heading scale,
              then the reflective statement beneath it. */}
          <h1
            style={{
              fontFamily: 'var(--serif)',
              fontWeight: 400,
              fontSize: 'var(--t-section)',
              lineHeight: 1.15,
              color: 'var(--deep)',
              maxWidth: 640,
              margin: '1.1rem 0 0.8rem',
              ...({ textWrap: 'balance' } as React.CSSProperties),
            }}
          >
            When Language Shapes a Path
          </h1>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontWeight: 400,
              fontSize: 'var(--hero-statement)',
              lineHeight: 1.3,
              color: 'var(--deep)',
              maxWidth: 560,
              margin: '0 0 1.1rem',
            }}
          >
            Every life holds a pattern, a memory, a truth, or a story waiting to be revealed.
          </p>
          {/* Supporting line — Susan, 2026-10-05. */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              lineHeight: 1.65,
              color: 'var(--mid)',
              maxWidth: 610,
              margin: '0 0 1.75rem',
            }}
          >
            AwakenArts brings image, poetry, and symbolic language into conversation, creating space to notice what may
            already be taking shape.
          </p>
          {/* 2026-10-05, per Susan: two identical text links — same size,
              weight, tracking and thin gold underline; only the colour differs. */}
          <TextLinkRow>
            <TextLink href="/symbols" cta="hero-explore-symbol">Explore a Symbol</TextLink>
            <TextLink href="/explore" cta="hero-discover">Discover AwakenArts</TextLink>
          </TextLinkRow>
        </div>

        <div className="hero__media">
          <picture className="hero__picture">
            <source media="(max-width: 1080px)" srcSet="/images/brand/chess-ann-hero-mobile.jpg" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/brand/chess-ann-hero-desktop.jpg"
              alt="A black chess-piece silhouette beside a queen figure formed from the words of her own story -- the AwakenArts word-figure illustration"
              className="hero__img"
              width={1600}
              height={1231}
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>
      </section>

      {/* 2 — Begin with a Symbol (renders once featured Symbol Cards exist) */}
      <HomeBeginWithSymbol cards={featuredSymbolCards()} />

      {/* 3 — You Already Speak in Images (Queen Ann poem/portrait removed — she is the hero image) */}
      <HomeSpeakInImages />

      {/* 4 — Scripture Speaks in Symbols (existing section) */}
      <HomeChristianSymbols />

      {/* 5 — Guided Encounters */}
      <HomeGuidedEncounters />

      {/* 6 — Books & Resources */}
      <HomeBooks />

      {/* 7 — Stay Connected */}
      <StayConnected source="home" />

      {/* 8 — About AwakenArts */}
      <HomeAbout />

      {/* WayfindingBand omitted here: it repeated the top menu directly above the footer. */}
      <Footer />
    </>
  )
}
