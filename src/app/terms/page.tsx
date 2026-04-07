import Nav from '@/components/Nav'
import Link from 'next/link'

export const metadata = {
  title: 'Terms',
  description: 'Terms of use for AwakenArts.com.',
}

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="legal-page">

        <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>Legal</p>

        <h1 className="legal-page__heading">Terms</h1>

        <p className="legal-page__body">
          Please read these Terms carefully before using AwakenArts.com or purchasing any products
          or services. By accessing or using this site, you agree to be bound by these Terms.
        </p>

        {/* ── Use of Site ── */}
        <h2 className="legal-page__subheading">Use of Site</h2>
        <p className="legal-page__body">
          {/* Add your use-of-site terms here */}
        </p>

        {/* ── Purchases ── */}
        <h2 className="legal-page__subheading">Purchases</h2>
        <p className="legal-page__body">
          {/* Add your purchase and refund policy here */}
        </p>

        {/* ── Intellectual Property ── */}
        <h2 className="legal-page__subheading">Intellectual Property</h2>
        <p className="legal-page__body">
          All content on this site is the property of AwakenArts.com. See our{' '}
          <Link href="/copyright" className="legal-page__link">Copyright page</Link>{' '}
          for full details.
        </p>

        {/* ── Limitation of Liability ── */}
        <h2 className="legal-page__subheading">Limitation of Liability</h2>
        <p className="legal-page__body">
          See our{' '}
          <Link href="/disclaimer" className="legal-page__link">Disclaimer</Link>{' '}
          for details on limitations of liability.
        </p>

        {/* ── Changes ── */}
        <h2 className="legal-page__subheading">Changes to These Terms</h2>
        <p className="legal-page__body">
          AwakenArts.com reserves the right to modify these Terms at any time. Continued use of
          the site after changes are posted constitutes your acceptance of the updated Terms.
        </p>

        <p className="legal-page__body legal-page__body--fine">
          Last updated: {new Date().getFullYear()}
        </p>

      </main>
    </>
  )
}
