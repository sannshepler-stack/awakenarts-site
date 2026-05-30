import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FooterSocial from '@/components/FooterSocial'
import FormPanel from '@/components/forms/FormPanel'
import { SYMBOLIC_FORMS } from '@/components/forms/forms-data'

export const metadata: Metadata = {
  title: 'Studio — AwakenArts',
  description:
    'The AwakenArts Collection — symbolic forms, images, and contemplative works by Susan Ann Shepler.',
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

        {/* ── SILHOUETTES — page opening ──────────────────────────
            Canonical implementation — identical to /studio/silhouettes.
            studio-silhouettes class: dark bg, gold border.
            studio-forms-gallery: 3-equal-column triptych grid.
            FormPanel: hover still/video, 2:3 ratio, caption beneath.
            Source of truth: src/app/studio/silhouettes/page.tsx
        ──────────────────────────────────────────────────────── */}
        <section className="studio-silhouettes" aria-labelledby="studio-silhouettes-heading">
          <div className="studio-section__inner">

            {/* Heading uses studio-section__header — dark-bg color rules
                already defined in globals.css for .studio-silhouettes context. */}
            <div className="studio-section__header">
              <p className="eyebrow">The AwakenArts Collection</p>
              <h1 id="studio-silhouettes-heading">
                Symbolic Forms<br />
                <em>and Images</em>
              </h1>
            </div>

            <div className="studio-forms-gallery" role="list" aria-label="Symbolic figures">
              {SYMBOLIC_FORMS
                .filter(f => ['queen-ann', 'mermaid-grismere', 'the-dragon'].includes(f.slug))
                .map((form) => (
                  <div key={form.slug} role="listitem">
                    <FormPanel form={form} />
                  </div>
                ))}
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
              <p className="eyebrow">Feminine Motifs</p>
              <h2 id="studio-painterly-heading">
                Digital Art<br />
                <em>Paintings</em>
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
            Third major Studio territory.
            Heading system matches Feminine Motifs: eyebrow + serif h2.
        ──────────────────────────────────────────────────────── */}
        <section className="studio-poems-section" aria-labelledby="studio-poems-heading">
          <div className="studio-poems-inner">

            <div className="studio-poems-header">
              <p className="eyebrow studio-poems-eyebrow">Concrete Poems</p>
              <h2 id="studio-poems-heading" className="studio-poems-heading">
                The visual symbolic<br />
                <em>art practice</em>
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

            {/* Contextual body — grounding reflection after the visual work. */}
            <div className="studio-poems-context">
              <p className="studio-poems-context__body">
                AwakenArts emerged through poetry, image, and symbolic form —
                a contemplative visual practice shaped through atmosphere,
                language, and recurring symbolic presences.
              </p>
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
              <li><Link href="/studio/silhouettes">Symbolic Forms</Link></li>
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
