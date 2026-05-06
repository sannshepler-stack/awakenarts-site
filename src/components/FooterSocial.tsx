/*
 * FooterSocial — the four `rel="me"` profile links rendered in every
 * page footer's footer-brand block. Extracted to a single component so
 * adding a new platform (Substack, Bluesky, etc.) is one edit, not 17.
 *
 * rel="me" tells identity verifiers (IndieAuth, Mastodon) and AI tools
 * that these profiles belong to the same person as this site, building
 * a coherent identity graph across the web.
 *
 * Styling lives in globals.css (.footer-social).
 */

const profiles = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/s.shepler/',
    aria: 'Susan Ann Shepler on Instagram',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/s.a.shepler/',
    aria: 'Susan Ann Shepler on Facebook',
  },
  {
    label: 'Pinterest',
    href: 'https://www.pinterest.com/sshepler/',
    aria: 'Susan Ann Shepler on Pinterest',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sannshepler/',
    aria: 'Susan Ann Shepler on LinkedIn',
  },
] as const

export default function FooterSocial() {
  return (
    <ul className="footer-social" aria-label="Social profiles">
      {profiles.map(({ label, href, aria }) => (
        <li key={label}>
          <a
            href={href}
            rel="me noopener noreferrer"
            target="_blank"
            aria-label={aria}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  )
}
