import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FooterSocial from '@/components/FooterSocial'
import FormPanel from '@/components/forms/FormPanel'
import { SYMBOLIC_FORMS } from '@/components/forms/forms-data'

export const metadata: Metadata = {
  title: 'Silhouettes — Studio — AwakenArts',
  description:
    'Symbolic figures rendered within environments built to carry meaning — the silhouette work of AwakenArts by Susan Ann Shepler.',
  alternates: { canonical: '/studio/silhouettes' },
  openGraph: {
    url: '/studio/silhouettes',
    title: 'Silhouettes — Studio — AwakenArts',
    description:
      'Symbolic figures shaped by the environments that hold them — the silhouette work of AwakenArts.',
  },
}

export default function SilhouettesPage() {
  return (
    <>
      <Nav />

      <main className="studio-page">

        {/* ── HEADING ─────────────────────────────────────────────
            Restrained. No explanatory paragraph needed — the
            image itself carries the meaning, the way a parable does.
        ──────────────────────────────────────────────────────── */}
        <section className="studio-opening">
          <div className="studio-opening__inner">
            <p className="eyebrow studio-opening__eyebrow">Studio</p>
            <h1 className="studio-opening__headline">Silhouettes</h1>
            <p className="studio-opening__subline">
              Symbols, Images, and Shapes
            </p>
          </div>
        </section>

        {/* ── FORMS GALLERY ───────────────────────────────────────
            FormPanel components with hover-to-video behavior.
            Preserved intact from the original Studio build.
        ──────────────────────────────────────────────────────── */}
        <section className="studio-silhouettes" aria-label="Silhouette forms">
          <div className="studio-section__inner">

            {/* ── POEM-FORM PREVIEWS ─────────────────────────────────
                Small glimpses of the concrete-poetry shapes behind
                each figure — Queen Ann, Grismere, the Dragon. Sized
                deliberately small: enough to convey the shape, color,
                and texture of the written form, not to make the
                poems themselves readable here. The full pieces stay
                inside the Collection. ─────────────────────────────── */}
            <div className="studio-poem-shelf">
              <div className="studio-poem-previews" role="list" aria-label="Concrete-poetry form previews">
                <div className="studio-poem-preview" role="listitem">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/forms/ann-text-dark-thumb.png"
                    alt="Queen Ann — a glimpse of the concrete-poetry form behind the figure"
                    loading="lazy"
                  />
                </div>
                <div className="studio-poem-preview" role="listitem">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/forms/grismere-text-thumb.png"
                    alt="Grismere — a glimpse of the concrete-poetry form behind the figure"
                    loading="lazy"
                  />
                </div>
                <div className="studio-poem-preview" role="listitem">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/forms/dragon-text-thumb.png"
                    alt="The Dragon — a glimpse of the concrete-poetry form behind the figure"
                    loading="lazy"
                  />
                </div>
              </div>
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

        {/* ── CTA ── */}
        <section className="studio-cta">
          <Link href="/encounters" className="path-cta__link">
            Enter the Encounters
          </Link>
          <Link href="/studio" className="path-cta__link path-cta__link--quiet">
            ← Studio
          </Link>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="site-footer" aria-label="Site footer">
        <div className="footer-grid">
          <div className="footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/brand/logo.png"
              alt="AwakenArts"
              className="footer-logo"
              loading="lazy"
            />
            <p>
              Concrete poetry and symbolic form — language given shape in the
              same literary mode Scripture itself uses: parable, image, and
              figure. By Susan Ann Shepler.
            </p>
            <FooterSocial />
          </div>
          <div className="footer-col">
            <h4>Studio</h4>
            <ul>
              <li><Link href="/studio">Studio</Link></li>
              <li><Link href="/studio/silhouettes">Silhouettes</Link></li>
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
