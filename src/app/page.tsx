import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import HomeBeginWithSymbol from '@/components/HomeBeginWithSymbol'
import HomeCollectionPremise from '@/components/HomeCollectionPremise'
import HomeChristianSymbols from '@/components/HomeChristianSymbols'
import HomeGuidedEncounters from '@/components/HomeGuidedEncounters'
import HomeBooks from '@/components/HomeBooks'
import HomeAbout from '@/components/HomeAbout'
import StayConnected from '@/components/StayConnected'
import WayfindingBand from '@/components/WayfindingBand'
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
          <h1
            style={{
              fontFamily: 'var(--serif)',
              fontWeight: 400,
              fontSize: 'clamp(2rem, 3.1vw, 2.6rem)',
              lineHeight: 1.18,
              color: 'var(--deep)',
              maxWidth: '24ch',
              margin: '1.1rem 0 2.5rem',
            }}
          >
            Every life holds a pattern, a memory, a direction, a truth, or a story waiting to be revealed.
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem 2rem', alignItems: 'center' }}>
            <Link href="/symbols" className="home-coll-cta home-coll-cta--light-surface" data-cta="hero-explore-symbol">
              Explore a Symbol
            </Link>
            <Link
              href="/explore"
              data-cta="hero-discover"
              style={{
                fontFamily: 'var(--sans)',
                fontSize: '0.9rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--deep)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--gold-lt)',
                paddingBottom: 2,
              }}
            >
              Discover AwakenArts
            </Link>
          </div>
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

      {/* 3 — You Already Speak in Images (existing section, unchanged) */}
      <HomeCollectionPremise />

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

      <WayfindingBand />
      <Footer />
    </>
  )
}
