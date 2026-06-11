import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FooterSocial from '@/components/FooterSocial'

export const metadata: Metadata = {
  title: 'Voices — AwakenArts',
  description:
    'A gathering of companion voices — Scripture, parable, and the writers who received that tradition deeply — that have accompanied the making of AwakenArts.',
  alternates: { canonical: '/quotes' },
  openGraph: {
    url: '/quotes',
    title: 'Voices — AwakenArts',
    description:
      'Scripture, parable, and the literary tradition — voices that have accompanied the making of AwakenArts.',
  },
}

/* ── Scripture ────────────────────────────────────────────── */

const scripture = [
  { text: 'He did not say anything to them without using a parable.',                                      ref: 'Matthew 13:34' },
  { text: 'I will open my mouth in a parable; I will utter hidden things, things from of old.',            ref: 'Psalm 78:2' },
  { text: 'The heavens declare the glory of God; the skies proclaim the work of his hands.',               ref: 'Psalm 19:1' },
  { text: 'Deep calls to deep.',                                                                            ref: 'Psalm 42:7' },
  { text: 'Your word is a lamp for my feet, a light on my path.',                                          ref: 'Psalm 119:105' },
  { text: 'For now we see through a glass, darkly.',                                                       ref: '1 Corinthians 13:12' },
  { text: 'He who has ears to hear, let him hear.',                                                        ref: 'Matthew 13:9' },
  { text: 'Where there is no vision, the people perish.',                                                  ref: 'Proverbs 29:18' },
]

/* ── Literary voices — ordered per editorial hierarchy ──── */

const voices = [
  {
    slug: 'lewis',
    name: 'C. S. Lewis',
    note: null,
    quotes: [
      'Reason is the natural order of truth; but imagination is the organ of meaning.',
      'We do not want merely to see beauty… we want something else which can hardly be put into words — to be united with the beauty we see.',
      "A children's story that can only be enjoyed by children is not a good children's story in the slightest.",
    ],
  },
  {
    slug: 'tolkien',
    name: 'J. R. R. Tolkien',
    note: 'The Lord of the Rings · On Fairy-Stories',
    quotes: [
      'Fantasy remains a human right: we make in our measure and in our derivative mode, because we are made.',
      "We make still by the law in which we're made.",
      'Not all those who wander are lost.',
    ],
  },
  {
    slug: 'sayers',
    name: 'Dorothy L. Sayers',
    note: 'The Mind of the Maker · Creed or Chaos',
    quotes: [
      'The dogma is the drama.',
      "We may call Art the expression of man's delight in God's work.",
      'The imagination is not a separate faculty of the mind, but the mind working at full strength.',
    ],
  },
  {
    slug: 'macdonald',
    name: 'George MacDonald',
    note: 'Phantastes · The Princess and the Goblin',
    quotes: [
      'A genuine work of art must mean many things; the truer the art, the more things it will mean.',
      'It is there not so much to convey a meaning as to wake a meaning.',
      'To inquire into what God has made is the main function of the imagination.',
    ],
  },
  {
    slug: 'eliot',
    name: 'T. S. Eliot',
    note: 'Four Quartets · Ash Wednesday',
    quotes: [
      'Genuine poetry can communicate before it is understood.',
      'Humankind cannot bear very much reality.',
      'The communication of the dead is tongued with fire beyond the language of the living.',
    ],
  },
  {
    slug: 'bunyan',
    name: 'John Bunyan',
    note: 'The Pilgrim’s Progress, 1678',
    quotes: [
      'This hill, though high, I covet to ascend;\nThe difficulty will not me offend.',
      'Then I saw in my dream…',
      'Christianity is not in talk and profession, but in practice and reality.',
    ],
  },
  {
    slug: 'chesterton',
    name: 'G. K. Chesterton',
    note: 'Orthodoxy · Heretics',
    quotes: [
      'The world will never starve for want of wonders; but only for want of wonder.',
      'Poets do not go mad; but chess-players do.',
      "The whole object of travel is not to set foot on foreign land; it is at last to set foot on one's own country as a foreign land.",
    ],
  },
]

/* ── Page ──────────────────────────────────────────────────── */

export default function QuotesPage() {
  return (
    <>
      <Nav />

      {/* ── VOICES PAGE ── */}
      <div className="voices-page">

        {/* Full-width page heading */}
        <header className="voices-header">
          <h1 className="voices-header__title">Voices</h1>
          <p className="voices-header__sub">
            Scripture speaks through parable. Poets speak through image.
            Stories reveal what argument cannot. Language has always carried
            meaning through more than explanation alone.
          </p>
        </header>

      <div className="voices-layout">

        {/* Left: sticky section nav */}
        <aside className="voices-nav" aria-label="Voices navigation">
          <nav aria-label="Jump to voice">
            <ul className="voices-nav__list">
              <li>
                <a href="#scripture" className="voices-nav__link">
                  Scripture &amp; Parable
                </a>
              </li>
              {voices.map(({ slug, name }) => (
                <li key={slug}>
                  <a href={`#${slug}`} className="voices-nav__link">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Right: scrolling quotations */}
        <div className="voices-content">

          {/* Scripture */}
          <section id="scripture" className="voices-section" aria-label="Scripture and Parable">
            <h2 className="voices-section__name">
              Scripture <em>&amp; Parable</em>
            </h2>
            <div className="voices-citations">
              {scripture.map(({ text, ref }) => (
                <blockquote className="voices-citation" key={ref}>
                  <p className="voices-citation__text">{text}</p>
                  <cite className="voices-citation__attr">{ref}</cite>
                </blockquote>
              ))}
            </div>
          </section>

          {/* Literary voices */}
          {voices.map(({ slug, name, note, quotes }) => (
            <section
              id={slug}
              className="voices-section"
              key={slug}
              aria-label={name}
            >
              <h2 className="voices-section__name">{name}</h2>
              {note && <p className="voices-section__note">{note}</p>}
              <div className="voices-citations">
                {quotes.map((q, i) => (
                  <blockquote className="voices-citation" key={i}>
                    <p
                      className="voices-citation__text"
                      style={{ whiteSpace: 'pre-line' }}
                    >
                      {q}
                    </p>
                    <cite className="voices-citation__attr">{name}</cite>
                  </blockquote>
                ))}
              </div>
            </section>
          ))}

        </div>
      </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="site-footer" aria-label="Site footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label="AwakenArts home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/brand/logo.png"
                alt="AwakenArts"
                className="footer-logo"
                loading="lazy"
              />
            </Link>
            <p>
              Original symbolic figures for the interior life — rooted in the
              Christian tradition, created through the transformative language
              arts process. By Susan Ann Shepler.
            </p>
            <FooterSocial />
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link href="/path">The Path</Link></li>
              <li><Link href="/poems">Poems</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>The Work</h4>
            <ul>
              <li><Link href="/deck">Illustrated Awakening</Link></li>
              <li>
                <a
                  href="https://www.amazon.com/dp/B0G4R4KTZD"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Whispers of Awareness
                </a>
              </li>
              <li><Link href="/poems">Concrete Poetry</Link></li>
              <li><Link href="/poems">Figures</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li><Link href="/about">Formation &amp; Provenance</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 AwakenArts · awakenarts.com · All Rights Reserved</span>
          <span>© Susan Ann Shepler · Confidential</span>
        </div>
      </footer>
    </>
  )
}
