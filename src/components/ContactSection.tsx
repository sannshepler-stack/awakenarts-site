import Link from 'next/link'
import { CONTACT_FORM_LIVE } from '@/data/contact'
import ContactForm from '@/components/ContactForm'

// ContactSection — the reusable Contact band (Susan, 2026-10-18).
//
// Contact was deliberately left off the site until info@awakenarts.com
// had been created and confirmed (GoDaddy Microsoft 365, Oct 2026). It is
// now the one public contact address; s.ann@awakenarts.com stays off the
// site for Susan's direct replies.
//
// Placed only where a visitor is most likely to want to write: Explore
// (below Stay Connected), Books, and each presentation page. About carries a one-line contact under Susan's
// credentials instead (her choice, 2026-10-18). /presentations already carries its
// own "Host a Presentation" line, and /contact is the standalone page.
// Each placement passes a line suited to that page. The address itself is
// not shown here (only on /contact), to keep it from harvesting bots:
// the section shows the contact form where requested and live, and
// otherwise a link to /contact.

export default function ContactSection({
  source,
  line,
  background = 'var(--warm)',
  form = false,
}: {
  /** Where this band sits, for click tracking (data-cta). */
  source: string
  /** One sentence suited to the page (may include a line break). */
  line: React.ReactNode
  background?: string
  /** Show the contact form (name, email, message) in place of the link. */
  form?: boolean
}) {
  const showForm = form && CONTACT_FORM_LIVE
  return (
    <section
      aria-labelledby={`contact-${source}`}
      style={{ background, padding: 'var(--band-gap) 1.5rem', textAlign: 'center' }}
    >
      <div style={{ maxWidth: 560, margin: '0 auto' }}>
        <p
          id={`contact-${source}`}
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
          <Link href="/contact" data-cta={`${source}-contact-label`} style={{ color: 'inherit' }}>
            Contact
          </Link>
        </p>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: 'var(--ink)',
            margin: '1rem 0 1.25rem',
          }}
        >
          {line}
        </p>
        {showForm ? (
          <div style={{ margin: '0 auto', maxWidth: 480 }}>
            <ContactForm source={source} />
          </div>
        ) : (
          <Link
            href="/contact"
            className="btn-submit"
            data-cta={`${source}-contact-link`}
            style={{ display: 'inline-block', textDecoration: 'none' }}
          >
            Send a Message
          </Link>
        )}
      </div>
    </section>
  )
}
