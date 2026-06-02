import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FooterSocial from '@/components/FooterSocial'
import FormPanel from '@/components/forms/FormPanel'
import { SYMBOLIC_FORMS } from '@/components/forms/forms-data'

export const metadata: Metadata = {
  title: 'Studio — AwakenArts',
  description:
    'The Studio of AwakenArts — image-shaped poems, concrete poetry, and symbolic forms. Each work joins language to visible structure through contemplative learning and symbolic recognition.',
  alternates: { canonical: '/studio' },
  openGraph: {
    url: '/studio',
    title: 'Studio — AwakenArts',
    description:
      'Concrete poetry and image-shaped poems — how language becomes visible form in the work of Susan Ann Shepler.',
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
              <p className="eyebrow">The Symbolic Forms</p>
              <h1 id="studio-silhouettes-heading">
                Language becomes<br />
                <em>the figure</em>
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

        {/* ── METHOD ────────────────────────────────────────────────
            Parabolic statement — how the forms function.
            Between silhouettes and paintings: grounds the method
            before the reader encounters the broader visual work.
        ──────────────────────────────────────────────────────── */}
        <section className="studio-method-section" aria-label="The AwakenArts method">
          <div className="studio-method-inner">
            <p className="eyebrow">The Method</p>
            <blockquote className="studio-method-quote">
              &ldquo;Though seeing, they do not see.&rdquo;
              <cite>— Matthew 13:13</cite>
            </blockquote>
            <p className="studio-method-body">
              These poems work the way parables work. They do not explain. They show.
              A queen crossing through fire reveals something about loss, dignity, and
              the cost of remaining true. A mermaid at the surface of the water reveals
              something about divided awareness and the pull toward what lies beneath.
              A dragon in conflict with itself reveals something about the tragic nature
              of inner division.
            </p>
            <p className="studio-method-body">
              You do not need to understand the symbolism in advance. You encounter it
              through the form itself — through shape, rhythm, image, and the particular
              emotional atmosphere each poem creates. The meaning arrives through
              recognition, not explanation.
            </p>
            <p className="studio-method-body">
              This is what it means to treat symbolic form as visible language rather
              than as decoration. The poem is not about the figure. The poem is the figure.
            </p>

            <blockquote className="studio-method-quote">
              &ldquo;The purposes of a person&rsquo;s heart are deep waters,
              but one who has insight draws them out.&rdquo;
              <cite>— Proverbs 20:5</cite>
            </blockquote>
          </div>
        </section>

        {/* ── 2. DIGITAL ART PAINTINGS ──────────────────────────── */}
        <section className="paintings-section" aria-labelledby="paintings-heading">
          <div className="paintings-inner">
            <div className="paintings-header">
              <p className="eyebrow">Feminine Motifs</p>
              <h2 id="paintings-heading">
                Digital Art<br />
                <em>Paintings</em>
              </h2>
            </div>
            <div className="paintings-grid">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/gallery/ann-painting.jpg"          alt="Ann"          className="paintings-img" loading="lazy" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/gallery/candace-painting.jpg"      alt="Candace"      className="paintings-img" loading="lazy" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/gallery/may-painting.jpg"          alt="May"          className="paintings-img" loading="lazy" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/gallery/dark-girl-painting.jpg"    alt="Dark Girl"    className="paintings-img" loading="lazy" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/gallery/hawaiian-girl-painting.jpg" alt="Hawaiian Girl" className="paintings-img" loading="lazy" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/gallery/indian-girl-painting.jpg"  alt="Indian Girl"  className="paintings-img" loading="lazy" />
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
              Symbolic concrete poetry exploring the inward journey — rooted in the
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
