import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FooterSocial from '@/components/FooterSocial'

export const metadata: Metadata = {
  title: 'Studio — AwakenArts',
  description:
    'The visual symbolic art practice of AwakenArts — silhouettes, symbolic figures, and atmospheric works by Susan Ann Shepler.',
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

        {/* ── 1. SILHOUETTES — entry panel ────────────────────────
            The opening visual territory. Shaping forms, symbolic
            contours, threshold presences. Calm and singular.
        ──────────────────────────────────────────────────────── */}
        <section className="studio-entry-section" aria-label="Silhouettes">
          <div className="studio-section__inner">
            <div className="studio-entry-panels studio-entry-panels--single">

              <Link href="/studio/silhouettes" className="studio-entry-panel">
                <div className="studio-entry-panel__frame">
                  <Image
                    src="/images/forms/queen-ann-still.png"
                    alt="Queen Ann — symbolic figure"
                    fill
                    sizes="(max-width: 640px) 90vw, 420px"
                    className="studio-entry-panel__img"
                  />
                </div>
                <div className="studio-entry-panel__label">
                  <p className="eyebrow">Silhouettes</p>
                  <p>Symbols, Images, and Shapes</p>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* ── 2. IMAGES, SYMBOLS, AND SHAPES ──────────────────────
            The symbolic image territory. Queen Ann leads; Mermaid
            Grismere recedes into secondary presence. Dark field.
        ──────────────────────────────────────────────────────── */}
        <section className="studio-symbolic-section" aria-labelledby="studio-symbolic-heading">
          <div className="studio-section__inner">

            <div className="studio-symbolic-header">
              <p className="eyebrow studio-symbolic-eyebrow">Studio</p>
              <h2 id="studio-symbolic-heading">
                Images, Symbols,<br />
                <em>and Shapes</em>
              </h2>
            </div>

            <div className="studio-preview-panels">
              <div className="studio-preview-panel">
                <div className="studio-preview-panel__frame">
                  <Image
                    src="/images/forms/queen-ann-still.png"
                    alt="Queen Ann — symbolic figure"
                    fill
                    sizes="(max-width: 640px) 90vw, 44vw"
                    className="studio-preview-panel__img"
                  />
                </div>
                <p className="studio-preview-panel__name">Queen Ann</p>
              </div>

              <div className="studio-preview-panel studio-preview-panel--secondary">
                <div className="studio-preview-panel__frame">
                  <Image
                    src="/images/forms/mermaid-grismere-still.png"
                    alt="Mermaid Grismere — symbolic figure"
                    fill
                    sizes="(max-width: 640px) 90vw, 40vw"
                    className="studio-preview-panel__img"
                  />
                </div>
                <p className="studio-preview-panel__name">Mermaid Grismere</p>
              </div>
            </div>

            <p className="studio-symbolic-cta">
              <Link href="/studio/silhouettes" className="text-link studio-symbolic-link">
                View all silhouettes <span aria-hidden="true">→</span>
              </Link>
            </p>

          </div>
        </section>

        {/* ── 3. PAINTERLY WORKS ──────────────────────────────────
            A quieter, secondary territory. Atmospheric figures.
            3-across at smaller scale. Warm field. Curated.
        ──────────────────────────────────────────────────────── */}
        <section className="studio-painterly-section" aria-labelledby="studio-painterly-heading">
          <div className="studio-section__inner">

            <div className="studio-painterly-header">
              <p className="eyebrow">Painterly Works</p>
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
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="studio-painterly-img"
                />
              </div>
              <div className="studio-painterly-item">
                <Image
                  src="/images/gallery/girlsitting.jpg"
                  alt="Seated Figure — atmospheric painterly study"
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="studio-painterly-img"
                />
              </div>
              <div className="studio-painterly-item">
                <Image
                  src="/images/gallery/may.jpg"
                  alt="May — atmospheric painterly figure"
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="studio-painterly-img"
                />
              </div>
              <div className="studio-painterly-item">
                <Image
                  src="/images/gallery/dark-girl.jpg"
                  alt="Figure Study — atmospheric painterly work"
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="studio-painterly-img"
                />
              </div>
              <div className="studio-painterly-item">
                <Image
                  src="/images/gallery/hawaiian-girl.jpg"
                  alt="Figure — atmospheric painterly study"
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="studio-painterly-img"
                />
              </div>
              <div className="studio-painterly-item">
                <Image
                  src="/images/gallery/indian-girl.jpg"
                  alt="Figure Study — painterly atmospheric work"
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="studio-painterly-img"
                />
              </div>
            </div>

            {/* ── 4. FEMININE MOTIFS — quiet orienting subheading ── */}
            <p className="studio-feminine-motifs">Feminine Motifs</p>

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
              <li><span className="footer-pending">Painterly Works</span></li>
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
