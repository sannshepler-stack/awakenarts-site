import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FooterSocial from '@/components/FooterSocial'
import FormPanel from '@/components/forms/FormPanel'
import { SYMBOLIC_FORMS } from '@/components/forms/forms-data'

export const metadata: Metadata = {
  title: 'Studio — AwakenArts',
  description:
    'The Studio shows how the works of AwakenArts take shape — language given visible form, made to be encountered slowly and returned to often.',
  alternates: { canonical: '/studio' },
  openGraph: {
    url: '/studio',
    title: 'Studio — AwakenArts',
    description:
      'Symbolic works and concrete poetry — how language becomes visible form in the work of Susan Ann Shepler.',
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
              <p className="eyebrow">Inside the Works</p>
              <h1 id="studio-silhouettes-heading">
                Language takes<br />
                <em>visible shape</em>
              </h1>
            </div>

            {/* ── POEM-FORM PREVIEWS ─────────────────────────────────
                Small glimpses of the concrete-poetry shapes behind
                each figure — Queen Ann, Grismere, the Dragon. Sized
                deliberately small: enough to convey the shape, color,
                and atmosphere of the written form, not to make the
                poems themselves readable here. The full pieces stay
                inside the Collection. Mirrors /studio/silhouettes. ── */}
            <div className="studio-poem-previews" role="list" aria-label="Concrete-poetry form previews">
              <div className="studio-poem-preview" role="listitem">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/forms/ann-text.png"
                  alt="Queen Ann — a glimpse of the concrete-poetry form behind the figure"
                  loading="lazy"
                />
              </div>
              <div className="studio-poem-preview" role="listitem">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/forms/grismere-text.png"
                  alt="Grismere — a glimpse of the concrete-poetry form behind the figure"
                  loading="lazy"
                />
              </div>
              <div className="studio-poem-preview" role="listitem">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/forms/dragon-text.png"
                  alt="The Dragon — a glimpse of the concrete-poetry form behind the figure"
                  loading="lazy"
                />
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
              These works don&rsquo;t explain — they show. A queen crossing through
              fire says something about loss, dignity, and the cost of staying true
              to yourself. A mermaid caught at the surface says something about being
              pulled in two directions at once. A dragon at war with itself says
              something about the parts of us that fight hardest against each other.
              You don&rsquo;t have to puzzle out the symbolism first. You spend time
              with the image, and something in you responds — sometimes right away,
              sometimes only after you&rsquo;ve sat with it a while.
            </p>
            <p className="studio-method-body">
              You meet each piece through its shape, its rhythm, the feeling it
              creates — not through a key you have to learn first. What it means
              tends to arrive on its own, often when you&rsquo;ve stopped trying to
              work it out.
            </p>
            <p className="studio-method-body">
              That&rsquo;s the idea behind every piece here: the work isn&rsquo;t a
              picture of an idea — it&rsquo;s the idea, given a shape you can sit with.
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
              A collection of reflective works — image and language shaped as
              one, rooted in the Christian contemplative tradition. By Susan
              Ann Shepler.
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
