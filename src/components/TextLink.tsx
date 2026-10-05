import Link from 'next/link'

// TextLink — the site's single call-to-action style (2026-10-05, per Susan):
// uppercase sans text with a thin gold underline, no box. Matches the hero.
//   tone 'gold'  → gold text      (primary action on cream)
//   tone 'navy'  → navy text      (secondary action on cream)
//   tone 'light' → light gold text (on navy bands)

export const textLinkStyle: React.CSSProperties = {
  fontFamily: 'var(--sans)',
  fontSize: '0.88rem',
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  borderBottom: '1px solid var(--gold-lt)',
  paddingBottom: 4,
  lineHeight: 1.4,
  display: 'inline-block',
}

const COLORS = { gold: 'var(--gold)', navy: 'var(--deep)', light: 'var(--gold-lt)' }

export default function TextLink({
  href,
  children,
  tone = 'gold',
  cta,
}: {
  href: string
  children: React.ReactNode
  tone?: 'gold' | 'navy' | 'light'
  cta?: string
}) {
  return (
    <Link href={href} data-cta={cta} style={{ ...textLinkStyle, color: COLORS[tone] }}>
      {children}
    </Link>
  )
}

/** A row of TextLinks on one baseline with comfortable spacing. */
export function TextLinkRow({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem 2.75rem', alignItems: 'baseline', justifyContent: center ? 'center' : 'flex-start' }}>
      {children}
    </div>
  )
}
