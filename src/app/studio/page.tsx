import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FooterSocial from '@/components/FooterSocial'

export const metadata: Metadata = {
  title: 'Studio — AwakenArts',
  description:
    'The visual symbolic art practice of AwakenArts — silhouettes, digital art paintings, and concrete poems by Susan Ann Shepler.',
  alternates: { canonical: '/studio' },
  openGraph: {
    url: '/studio',
    title: 'Studio — AwakenArts',
    description:
      'The visual symbolic art practice of AwakenArts by Susan Ann Shepler.',
  },
}

export default function StudioPage() {
  return (
    <>
      <Nav />

      <main className="studio-page">

        {/* ── OPENING ─────────────────────────────────────────────
            One restrained paragraph. The imagery arrives almost
            immediately after. The work speaks for itself.
        ──────────────────────────────────────────────────────── */}
        <section className="studio-opening">
          <div className="studio-opening__inner">
            <p className="eyebrow studio-opening__eyebrow">Studio</p>
            <h1 className="studio-opening__headline">
              The visual symbolic<br />
              <em>art practice</em>
            </h1>

            <div className="studio-opening__body">
              <p>
                AwakenArts emerged through poetry, image, and symbolic form —
                a contemplative visual practice shaped through atmosphere,
                language, and recurring symbolic presences.
              </p>
            </div>
          </div>
        </section>

        {/* ── 1. SILHOUETTES ──────────────────────────────────────
            Opening visual territory. Queen Ann leads. Two quieter
            silhouettes follow — restrained, spacious, no labels.
            Together they establish the threshold atmosphere.
        ──────────────────────────────────────────────────────── */}
        <section className="studio-entry-section" aria-label="Silhouettes">
          <div className="studio-section__inner">

            {/* Primary: Ann still — links to full silhouettes page */}
            <div className="studio-entry-panels studio-entry-panels--single">
              <Link href="/studio/silhouettes" className="studio-entry-panel">
                <div className="studio-entry-panel__frame">
                  <Image
                    src="/images/forms/queen-ann-still.png"
                    alt="Queen Ann — symbolic figure"
                    fill
                    sizes="(max-width: 640px) 80vw, 360px"
                    className="studio-entry-panel__img"
                  />
                </div>
                <div className="studio-entry-panel__label">
                  <p className="eyebrow">Silhouettes</p>
                </div>
              </Link>
            </div>

            {/* Secondary: two quieter silhouettes — no labels, reduced scale */}
            <div className="studio-silhouette-pair" aria-hidden="true">
              <div className="studio-silhouette-pair__item">
                <Image
                  src="/images/forms/mermaid-grismere-still.png"
                  alt="Mermaid Grismere — symbolic figure"
                  fill
                  sizes="(max-width: 640px) 38vw, 180px"
                  className="studio-silhouette-pair__img"
                />
              </div>
              <div className="studio-silhouette-pair__item">
                <Image
                  src="/images/figures/ballerina/ballerina.png"
                  alt="The Ballerina — symbolic figure"
                  fill
                  sizes="(max-width: 640px) 38vw, 180px"
                  className="studio-silhouette-pair__img"
                />
              </div>
            </div>

          </div>
        </section>

        {/* ── 2. DIGITAL ART PAINTINGS ────────────────────────────
            Quieter territory. Atmospheric figures at restrained
            scale. Warm field. Curated, not crowded.
        ──────────────────────────────────────────────────────── */}
        <section className="studio-painterly-section" aria-labelledby="studio-painterly-heading">
          <div className="studio-section__inner">

            <div className="studio-painterly-header">
              <p className="eyebrow">Digital Art Paintings</p>
              <h2 id="studio-painterly-heading">
                Atmospheric figures<br />
                <em>and studies</em>
              </h2>
            </div>

            <div className="studio-painterly-grid">
              <div className="studio-painterly-item">
                <Image
                  src="/images/gallery/angel.PNG"
                  alt="Angel — atmospheric painterly figure"
                  fill
                  sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 26vw"
                  className="studio-painterly-img"
                />
              </div>
              <div className="studio-painterly-item">
                <Image
                  src="/images/gallery/mermaid-genie-1.PNG"
                  alt="Mermaid Genie — atmospheric painterly figure"
                  fill
                  sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 26vw"
                  className="studio-painterly-img"
                />
              </div>
              <div className="studio-painterly-item">
                <Image
                  src="/images/gallery/may.jpg"
                  alt="May — atmospheric painterly figure"
                  fill
                  sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 26vw"
                  className="studio-painterly-img"
                />
              </div>
              <div className="studio-painterly-item">
                <Image
                  src="/images/gallery/dark-girl.jpg"
                  alt="Figure Study — atmospheric painterly work"
                  fill
                  sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 26vw"
                  className="studio-painterly-img"
                />
              </div>
              <div className="studio-painterly-item">
                <Image
                  src="/images/gallery/hawaiian-girl.jpg"
                  alt="Figure — atmospheric painterly study"
                  fill
                  sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 26vw"
                  className="studio-painterly-img"
                />
              </div>
              <div className="studio-painterly-item">
                <Image
                  src="/images/gallery/indian-girl.jpg"
                  alt="Figure Study — painterly atmospheric work"
                  fill
                  sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 26vw"
                  className="studio-painterly-img"
                />
              </div>
            </div>

          </div>
        </section>

        {/* ── 3. CONCRETE POEMS ───────────────────────────────────
            The quietest and most restrained territory.
            Originating language-image structures. Intimate scale.
            More spaciously separated than the paintings above.
        ──────────────────────────────────────────────────────── */}
        <section className="studio-poems-section" aria-labelledby="studio-poems-heading">
          <div className="studio-poems-inner">

            <div className="studio-poems-header">
              <p className="eyebrow studio-poems-eyebrow">Concrete Poems</p>
              <h2 id="studio-poems-heading">
                Language as<br />
                <em>visual form</em>
              </h2>
              <p className="studio-poems-intro">
                Originating image-text structures — the language-forms
                beneath the larger symbolic world.
              </p>
            </div>

            <div className="studio-poems-grid">
              <div className="studio-poems-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/experiences/butterfly-wordart.png"
                  alt="Butterfly Word-Art — a concrete poem in the shape of a butterfly"
                  className="studio-poems-img"
                  loading="lazy"
                />
              </div>
              <div className="studio-poems-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/experiences/word-form-spiral.png"
                  alt="Word-Form Spiral — a concrete poem in spiral form"
                  className="studio-poems-img"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </section>

        {/* ── CTA ── */}
        <section className="studio-cta">
          <Link href="/encounters" className="path-cta__link">
            Enter the Encounters
          </Link>
          <Link href="/library" className="path-cta__link path-cta__link--quiet">
            The Library
          </Link>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="site-footer" aria-label="Site footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label="AwakenArts home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/brand/logo.png"
                alt="AwakenArts"
                className="footer-logo"
                loading="lazy"
              />
            </Link>
            <p>
              Original symbolic figures for the interior life — rooted in the
              Christian tradition, created through the transformative language
              arts process. By Susan Ann Shepler.
            </p>
            <FooterSocial />
          </div>
          <div className="footer-col">
            <h4>Studio</h4>
            <ul>
              <li><Link href="/studio/silhouettes">Silhouettes</Link></li>
              <li><span className="footer-pending">Digital Art Paintings</span></li>
              <li><span className="footer-pending">Concrete Poems</span></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>The Work</h4>
            <ul>
              <li><Link href="/encounters">Encounters</Link></li>
              <li><Link href="/library">Library</Link></li>
              <li><Link href="/journal">Journal</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li><Link href="/about">Formation &amp; Provenance</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 AwakenArts · awakenarts.com · All Rights Reserved</span>
          <span>© Susan Ann Shepler · Confidential</span>
        </div>
      </footer>
    </>
  )
}
