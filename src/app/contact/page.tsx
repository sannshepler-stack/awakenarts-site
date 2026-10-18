import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import { INQUIRY_EMAIL } from '@/data/guidedEncounters'

// /contact — added 2026-10-18 at Susan's request. There was no contact
// page before because info@awakenarts.com had not yet been created and
// confirmed. info@awakenarts.com is the one public contact address; it is an
// alias of the s.ann@awakenarts.com mailbox, which stays off the site and
// is kept for Susan's direct, personal replies.

const CONTACT_EMAIL = INQUIRY_EMAIL

export const metadata: Metadata = {
  title: 'Contact — AwakenArts',
  description:
    'Write to AwakenArts about presentations, workshops, books, or the work itself.',
  alternates: { canonical: '/contact' },
}

const TOPICS = [
  'Presentations and workshops for your group',
  'Questions about the books and journals',
  'A response to a Figure, a symbol, or something you read here',
]

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--cream)', paddingTop: '4rem' }}>
        <section
          aria-labelledby="contact-heading"
          style={{ padding: 'var(--band-gap) 1.5rem', textAlign: 'center' }}
        >
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <p
              style={{
                fontFamily: 'var(--sans)',
                fontSize: 'var(--label-size)',
                fontWeight: 600,
                letterSpacing: 'var(--label-tracking)',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                margin: 0,
              }}
            >
              Contact
            </p>
            <h1
              id="contact-heading"
              style={{
                fontFamily: 'var(--serif)',
                fontWeight: 400,
                fontSize: 'var(--t-section)',
                color: 'var(--deep)',
                margin: '0.9rem 0 1.25rem',
              }}
            >
              Write to AwakenArts
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.08rem',
                lineHeight: 1.75,
                color: 'var(--ink)',
                margin: '0 0 2rem',
              }}
            >
              Every message is read personally by Susan Ann Shepler. Whether
              you are bringing AwakenArts to a group or an image here spoke to
              you, you are welcome to write.
            </p>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              data-cta="contact-email"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(1.35rem, 4.5vw, 1.75rem)',
                color: 'var(--gold)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--gold-accent)',
                paddingBottom: '0.2rem',
                wordBreak: 'break-word',
              }}
            >
              {CONTACT_EMAIL}
            </a>

            <div
              style={{
                margin: '3rem auto 0',
                paddingTop: '2rem',
                borderTop: '1px solid var(--mist)',
                maxWidth: 460,
                textAlign: 'left',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: 'var(--label-size)',
                  fontWeight: 600,
                  letterSpacing: 'var(--label-tracking)',
                  textTransform: 'uppercase',
                  color: 'var(--mid)',
                  margin: '0 0 0.9rem',
                  textAlign: 'center',
                }}
              >
                People often write about
              </p>
              <ul
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--ink)',
                  margin: 0,
                  paddingLeft: '1.2rem',
                }}
              >
                {TOPICS.map((t) => (
                  <li key={t} style={{ marginBottom: '0.4rem' }}>{t}</li>
                ))}
              </ul>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.98rem',
                lineHeight: 1.7,
                color: 'var(--mid)',
                margin: '2.5rem 0 0',
              }}
            >
              To receive the Encounter Journal and occasional notes from
              AwakenArts, visit{' '}
              <Link href="/stay-connected" style={{ color: 'var(--gold)' }}>
                Stay Connected
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <WayfindingBand />
      <Footer />
    </>
  )
}
