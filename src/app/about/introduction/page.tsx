import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import ProtectedImage from '@/components/ProtectedImage'
import { PathLearningPreview } from '@/components/path/PathLearning'

// /about/introduction — An Introduction to AwakenArts: the illustrated book
// "The AwakenArts Path" (2026-10-09, Susan).
//
// The book moved here from /awakenarts-path so that page can serve as the
// educational learning path. Cover, introduction line and Read/Download
// actions are carried over unchanged; the PDF itself is unchanged. The
// shared title is deliberate — the eyebrow "An Introduction to AwakenArts"
// (the book's own cover line; "free" wording removed per Susan 2026-10-09,
// since free symbol cards may be offered later) marks this
// as the book, distinct from the learning page.

export const metadata: Metadata = {
  title: 'The AwakenArts Path — An Introduction to AwakenArts',
  description:
    'Read or download The AwakenArts Path, an illustrated introduction to the image, poetry, and reflection behind AwakenArts.',
  alternates: { canonical: '/about/introduction' },
  openGraph: {
    url: '/about/introduction',
    title: 'The AwakenArts Path — An Introduction to AwakenArts',
    description:
      'Read or download The AwakenArts Path, an illustrated introduction to the image, poetry, and reflection behind AwakenArts.',
    images: ['/images/path/when-language-shapes-a-path-cover.jpg'],
  },
}

export default function FreeIntroductionPage() {
  return (
    <>
      <Nav />

      <main className="path-intro-page">
        <section className="path-intro-hero">
          <p className="eyebrow path-intro-hero__eyebrow">An Introduction to AwakenArts</p>
          <h1 className="path-intro-hero__title">The AwakenArts Path</h1>
          <p className="path-intro-hero__subtitle">Poetry, Image, and Seeing Your Life</p>
        </section>

        <section className="path-intro-cover-section">
          <ProtectedImage
            src="/images/path/when-language-shapes-a-path-cover.jpg"
            alt="The AwakenArts Path — cover"
            className="path-intro-cover-img"
            loading="eager"
          />
        </section>

        <section className="path-intro-about">
          <p className="path-intro-about__body">
            This is a short introduction to how AwakenArts works — read
            it before your first presentation or workshop.
          </p>
        </section>

        <section className="path-intro-actions">
          <a
            href="/files/path/AwakenArts_Path_Intro.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="path-intro-btn"
          >
            Read the Path
          </a>
          <a
            href="/files/path/AwakenArts_Path_Intro.pdf"
            download="AwakenArts_Path_Intro.pdf"
            className="path-intro-btn"
          >
            Download the Path
          </a>
        </section>

        <PathLearningPreview />
      </main>

      <WayfindingBand />
      <Footer />
    </>
  )
}
