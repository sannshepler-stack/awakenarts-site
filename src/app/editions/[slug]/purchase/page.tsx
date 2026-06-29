import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import ProtectedImage from '@/components/ProtectedImage'
import { editions } from '@/data/editions'

export function generateStaticParams() {
  return editions.map((e) => ({ slug: e.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const edition = editions.find((e) => e.slug === params.slug)
  if (!edition) return {}
  return {
    title: `Acquire ${edition.title} — Figure Edition — AwakenArts`,
    description: `Acquisition details for the ${edition.title} Figure Edition.`,
    alternates: { canonical: `/editions/${edition.slug}/purchase` },
    robots: { index: false, follow: true }, // not a separate Store entry point — see note below
  }
}

/*
 * Edition-specific Purchase page — /editions/[slug]/purchase
 *
 * Added 2026-06-29, per Susan's directive recorded in full in
 * AwakenArts_Publishing_Platform_Architecture.md ("Evolution: the Purchase
 * Page Becomes Its Own Edition-Specific Page"). "Acquire" is promoted from
 * a section of the Edition Preview page to its own route — but this is
 * explicitly NOT a centralized Store. Each Edition gets its own Purchase
 * page, reachable only from that Edition's own Preview page; there is no
 * index, listing, or nav entry that surfaces every Purchase page at once
 * (hence `robots: noindex` above — this page belongs to its Edition, not
 * to a browsable storefront).
 *
 * Per Susan's brief: "Present the edition as a published work available
 * for acquisition... answer practical questions: What am I receiving?
 * What is included? How is it delivered? Use placeholders where
 * purchasing details are not yet finalized." Pricing and the purchasing/
 * entitlement mechanism are still open (Open Decision #1,
 * AwakenArts_Product_Architecture.md) — every price and CTA below is an
 * honest placeholder, not a functioning cart or checkout. "Think like a
 * publisher rather than an online retailer" still governs the tone.
 *
 * Restructured again same day, per Susan's governing principle for this
 * page: "The Purchase page is not selling symbolism. It's selling a
 * published edition." The Preview page creates desire; the Purchase page
 * answers practical questions. Concretely:
 *   - About This Edition: one short, generic paragraph (publisher voice,
 *     not interpretive) — separate from the Preview page's own About
 *     section and from the shared `editions.ts` `about` field, which this
 *     page no longer reads from.
 *   - What You'll Receive: a scannable bulleted list of contents, not
 *     prose. Includes two complimentary printable items per Susan's brief.
 *   - Formats: just the two delivery formats, no pricing mixed in.
 *   - Price: its own section, placeholder-only ("Price to be announced")
 *     until Open Decision #1 (purchasing/entitlement mechanism,
 *     AwakenArts_Product_Architecture.md) is resolved.
 *   - Purchase: a single CTA, "Acquire the Figure Edition" — rendered as a
 *     disabled button with a one-line disclosure, since no functioning
 *     cart or checkout exists yet. Not a real purchase action.
 *   - Navigation: one link back to the Edition's own Preview page only;
 *     "Back to the Collection" was removed per Susan's note.
 */
export default function PurchasePage({ params }: { params: { slug: string } }) {
  const edition = editions.find((e) => e.slug === params.slug)
  if (!edition) return notFound()

  return (
    <>
      <Nav />
      <main className="purchase-page">
        <section className="purchase-hero">
          <p className="eyebrow purchase-hero__eyebrow">Acquire This Edition</p>
          <h1 className="purchase-hero__title">{edition.title}</h1>
          <p className="purchase-hero__kicker">{edition.kicker}</p>
        </section>

        <section className="purchase-cover-section">
          <ProtectedImage
            src={edition.contactSheet}
            alt={edition.contactSheetAlt}
            className="purchase-cover-img"
            loading="lazy"
          />
        </section>

        <section className="purchase-about">
          <p className="eyebrow purchase-about__eyebrow">About This Edition</p>
          <p className="purchase-about__body">
            This Figure Edition presents the complete AwakenArts work as a published edition.
            Image and poem are accompanied by Recognition, Reflection, and Facilitator Notes,
            creating a thoughtful experience for personal reading, discussion, or group
            exploration.
          </p>
        </section>

        <section className="purchase-receive">
          <p className="eyebrow purchase-receive__eyebrow">What You&rsquo;ll Receive</p>
          <p className="purchase-receive__intro">Your edition includes:</p>
          <ul className="purchase-receive__list">
            <li>Complete Figure Edition (PDF)</li>
            <li>Original image and concrete poem</li>
            <li>Recognition pages</li>
            <li>Reflection pages</li>
            <li>Facilitator Notes</li>
            <li>AwakenArts Colophon</li>
            <li>Complimentary printable poem sheet (PDF)</li>
            <li>Complimentary printable figure image (PDF) (when available)</li>
          </ul>
        </section>

        <section className="purchase-options">
          <p className="eyebrow purchase-options__eyebrow">Formats</p>

          <div className="purchase-option">
            <p className="purchase-option__title">Digital Figure Edition</p>
            <p className="purchase-option__detail">
              Delivered immediately as a high-quality PDF suitable for reading on screen or
              printing at home.
            </p>
          </div>

          <div className="purchase-option">
            <p className="purchase-option__title">Print Figure Edition</p>
            <p className="purchase-option__detail">
              Professionally printed and bound. Availability announced separately.
            </p>
          </div>
        </section>

        <section className="purchase-price">
          <p className="eyebrow purchase-price__eyebrow">Price</p>
          <p className="purchase-price__line">Digital Figure Edition — Price to be announced</p>
          <p className="purchase-price__line">Print Figure Edition — Price to be announced</p>
        </section>

        <section className="purchase-cta">
          <button type="button" className="purchase-cta__button" disabled aria-disabled="true">
            Acquire the Figure Edition
          </button>
          <p className="purchase-cta__note">
            Purchasing is currently in development — this button is not yet active.
          </p>
        </section>

        <section className="edition-actions">
          <Link href={`/editions/${edition.slug}`} className="edition-actions__back">
            ← Return to Edition Preview
          </Link>
        </section>
      </main>

      <footer className="edition-footer">
        <span>© 2026 AwakenArts · awakenarts.com · All Rights Reserved</span>
      </footer>
    </>
  )
}
