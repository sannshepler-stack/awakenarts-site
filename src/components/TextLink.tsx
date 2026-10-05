import Link from 'next/link'

// TextLink — the site's single call-to-action style (2026-10-05, per Susan):
// uppercase sans text with a thin gold underline, no box. Styling lives in
// globals.css (.text-link) so hover / focus / active states work:
//   default  gold text + gold underline
//   hover/focus  text and underline shift to navy; underline thickens and
//                settles 2px closer to the text
//   active   brief darker state
// tone 'light' is the same link for navy bands (light gold → cream).

export default function TextLink({
  href,
  children,
  tone = 'gold',
  cta,
}: {
  href: string
  children: React.ReactNode
  tone?: 'gold' | 'light'
  cta?: string
}) {
  return (
    <Link href={href} data-cta={cta} className={`text-link${tone === 'light' ? ' text-link--light' : ''}`}>
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
