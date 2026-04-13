import Link from 'next/link'
import Nav from '@/components/Nav'

export default function EncountersPage() {
  return (
    <>
      <Nav />

      <main className="legal-page" style={{ paddingTop: '8rem' }}>
        <p className="eyebrow">Coming Soon</p>

        <h1 className="legal-page__heading">Encounters</h1>

        <p className="legal-page__body">
          A guided symbolic experience shaped through image, reflection, and response.
        </p>

        <p className="legal-page__body">
          This work is in development and will open soon.
        </p>

        <p style={{ marginTop: '2rem' }}>
          <Link href="/path" className="legal-page__link">
            Enter the Path
          </Link>
        </p>
      </main>
    </>
  )
}