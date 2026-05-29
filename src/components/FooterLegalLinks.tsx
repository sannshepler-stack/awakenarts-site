import Link from 'next/link'

/**
 * FooterLegalLinks
 *
 * Add to your footer component or layout:
 *
 *   import FooterLegalLinks from '@/components/FooterLegalLinks'
 *   ...
 *   <FooterLegalLinks />
 */
export default function FooterLegalLinks() {
  return (
    <nav className="footer-legal" aria-label="Legal">
      <Link href="/disclaimer">Disclaimer</Link>
      <Link href="/copyright">Copyright</Link>
      <Link href="/terms">Terms</Link>
    </nav>
  )
}
