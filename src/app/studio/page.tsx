import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FooterSocial from '@/components/FooterSocial'
import FormPanel from '@/components/forms/FormPanel'
import { SYMBOLIC_FORMS } from '@/components/forms/forms-data'

export const metadata: Metadata = {
  title: 'Studio — AwakenArts',
  description:
    'The Studio shows how language takes visible shape — parable and symbol given form, in the literary mode Scripture itself has always used.',
  alternates: { canonical: '/studio' },
  openGraph: {
    url: '/studio',
    title: 'Studio — AwakenArts',
    description:
      'Symbolic works and concrete poetry — language given visible shape through parable, image, and figure, in the work of Susan Ann Shepler.',
  },
}

export default function StudioPage() {
  return (
    <>
      <Nav />

      <main className="studio-page">

        {/* ── SILHOUETTES — page opening ──────────────────────────
            Three figure+poem pairs — each symbolic silhouette shown
            alongside its concrete-poetry form. The pairs alternate
            layout (figure-left / poem-left) for visual rhythm.
            FormPanel: hover still/video, 2:3 ratio, caption beneath.
        ──────────────────────────────────────────────────────── */}
        {/* ── LIGHT INTRO — heading on cream ───────────────────── */}
        <section className="studio-silhouettes-intro">
          <div className="studio-section__inner">
            <div className="studio-section__header">
              <p className="eyebrow">Inside the Works</p>
              <h1 id="studio-silhouettes-heading">
                Language takes<br />
                <em>visible shape</em>
              </h1>
              <p className="studio-section__subtitle">
                The poetic works of AwakenArts are the result of a process,
                a becoming rather than a formulation — an inseparable
                relationship between language, image, and symbolic structure.
              </p>
            </div>
            {/* ── Juggling Bear — poem + video pair on cream ── */}
            <div className="studio-intro-bear-wrap">
              <div className="studio-intro-bear-pair">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/forms/bear-text.png"
                  alt="Juggling Bear — concrete-poetry form"
                  className="studio-intro-bear-poem"
                  loading="lazy"
                />
                <div className="studio-intro-bear-panel">
                  <FormPanel form={SYMBOLIC_FORMS.find(f => f.slug === 'juggling-bear')!} />
                </div>
              </div>
              <p className="studio-intro-bear-note">
                The bear may have a convincing act —
                but it is not what it seems.
              </p>
            </div>
          </div>
        </section>

        {/* ── DARK STAGE — poems and silhouettes ───────────────── */}
        <section className="studio-silhouettes" aria-labelledby="studio-silhouettes-heading">
          <div className="studio-section__inner">

            {/* ── Row 1: three concrete-poetry images ── */}
            <div className="studio-poems-row">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/forms/ann-text.png"
                alt="Queen Ann — concrete-poetry form"
                className="studio-poem-img"
                loading="lazy"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/forms/grismere-text.png"
                alt="Mermaid Grismere — concrete-poetry form"
                className="studio-poem-img"
                loading="lazy"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/forms/dragon-text.png"
                alt="The Dragon — concrete-poetry form"
                className="studio-poem-img"
                loading="lazy"
              />
            </div>

            <p className="studio-dark-label">Studio Silhouettes</p>

            {/* ── Row 2: three silhouette panels ── */}
            <div className="studio-panels-row">
              <FormPanel form={SYMBOLIC_FORMS.find(f => f.slug === 'queen-ann')!} />
              <FormPanel form={SYMBOLIC_FORMS.find(f => f.slug === 'mermaid-grismere')!} />
              <FormPanel form={SYMBOLIC_FORMS.find(f => f.slug === 'the-dragon')!} />
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
            <p className="eyebrow">The Language</p>
            <p className="studio-method-body">
              AwakenArts approaches language as something capable of
              shaping awareness through image, figure, metaphor, and
              symbolic form.
            </p>
            <p className="studio-method-body">
              Throughout Scripture, poetry, and parable, language carries
              meaning beyond direct explanation. It does not only describe
              reality; it also shapes how reality is recognized and understood.
            </p>

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
          <Link href="/poems" className="path-cta__link path-cta__link--quiet">
            Poems
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
              An artistic body of work shaped through image and language.
              The works express meaning in symbolic form, where word and image
              reveal archetypal patterns of thought and human experience.
              By Susan Ann Shepler.
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
              <li><Link href="/poems">Poems</Link></li>
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
