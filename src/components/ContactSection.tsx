import Link from 'next/link'
import { INQUIRY_EMAIL } from '@/data/guidedEncounters'

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
// Each placement passes a line suited to that page and a mailto subject,
// so Susan can see at a glance where a message came from.

export default function ContactSection({
  source,
  line,
  subject,
  background = 'var(--warm)',
}: {
  /** Where this band sits, for click tracking (data-cta). */
  source: string
  /** One sentence suited to the page. */
  line: string
  /** Pre-filled email subject. */
  subject: string
  background?: string
}) {
  const href = `mailto:${INQUIRY_EMAIL}?subject=${encodeURIComponent(subject)}`
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
        <a
          href={href}
          data-cta={`${source}-contact-email`}
          style={{
            display: 'inline-block',
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(1.2rem, 4vw, 1.45rem)',
            color: 'var(--gold)',
            textDecoration: 'none',
            borderBottom: '1px solid var(--gold-accent)',
            paddingBottom: '0.15rem',
            wordBreak: 'break-word',
          }}
        >
          {INQUIRY_EMAIL}
        </a>
      </div>
    </section>
  )
}
