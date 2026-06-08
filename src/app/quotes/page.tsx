import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FooterSocial from '@/components/FooterSocial'

export const metadata: Metadata = {
  title: 'Quotes — AwakenArts',
  description:
    'Voices from Scripture and the Christian literary tradition — parable, poetry, image, and symbol — gathered as part of the literary-symbolic foundation beneath AwakenArts.',
  alternates: { canonical: '/quotes' },
  openGraph: {
    url: '/quotes',
    title: 'Quotes — AwakenArts',
    description:
      'Scripture and the voices of the Christian literary tradition — parable, poetry, image, and symbol — gathered as part of the foundation beneath AwakenArts.',
  },
}

/* ── Page ──────────────────────────────────────────────────
   /quotes — a primary literary-symbolic grounding page.
   Structure: Opening → Scripture & Parable → Authors → Closing.
   Voice carries the page — minimal framing, generous spacing,
   no ornamental quote styling. Curated, not crowded.
──────────────────────────────────────────────────────────── */

const scriptureCitations = [
  {
    text: '“He did not say anything to them without using a parable.”',
    ref: 'Matthew 13:34',
  },
  {
    text: '“I will open my mouth in a parable; I will utter hidden things, things from of old.”',
    ref: 'Psalm 78:2',
  },
  {
    text: '“The heavens declare the glory of God; the skies proclaim the work of his hands.”',
    ref: 'Psalm 19:1',
  },
  {
    text: '“Deep calls to deep.”',
    ref: 'Psalm 42:7',
  },
  {
    text: '“Your word is a lamp for my feet, a light on my path.”',
    ref: 'Psalm 119:105',
  },
  {
    text: '“For now we see through a glass, darkly.”',
    ref: '1 Corinthians 13:12',
  },
  {
    text: '“He who has ears to hear, let him hear.”',
    ref: 'Matthew 13:9',
  },
  {
    text: '“Where there is no vision, the people perish.”',
    ref: 'Proverbs 29:18',
  },
]

const authors = [
  {
    name: 'C. S. Lewis',
    intro:
      'C. S. Lewis helped restore the legitimacy of imagination, symbol, and figurative language within Christian thought. Through works such as The Chronicles of Narnia and his theological writings, Lewis demonstrated that story, image, and literary form could communicate truth in ways argument alone could not. His work remains one of the clearest examples of symbolic Christian expression in modern literature.',
    quotes: [
      '“Reason is the natural order of truth; but imagination is the organ of meaning.”',
      '“We do not want merely to see beauty… we want something else which can hardly be put into words — to be united with the beauty we see.”',
      '“A children’s story that can only be enjoyed by children is not a good children’s story in the slightest.”',
    ],
  },
  {
    name: 'John Bunyan',
    intro:
      'John Bunyan’s The Pilgrim’s Progress stands as one of the most influential Christian allegories ever written. Through symbolic figures, landscapes, burdens, journeys, and encounters, Bunyan demonstrated how spiritual realities could be expressed through image-bearing narrative and figurative structure.',
    quotes: [
      'This hill, though high, I covet to ascend;\nThe difficulty will not me offend.',
      '“Then I saw in my dream…”',
      '“Christianity is not in talk and profession, but in practice and reality.”',
    ],
  },
  {
    name: 'George MacDonald',
    intro:
      'George MacDonald profoundly influenced later Christian writers including C. S. Lewis. His stories and reflections approached imagination not as escapism, but as a means through which deeper recognition could emerge. MacDonald’s work consistently joined poetry, symbol, spiritual insight, and literary form.',
    quotes: [
      '“A genuine work of art must mean many things; the truer the art, the more things it will mean.”',
      '“It is there not so much to convey a meaning as to wake a meaning.”',
      '“To inquire into what God has made is the main function of the imagination.”',
    ],
  },
  {
    name: 'G. K. Chesterton',
    intro:
      'G. K. Chesterton approached Christianity with wit, paradox, symbolism, and imaginative clarity. His writing often revealed how ordinary things could suddenly appear charged with deeper meaning when viewed through wonder, metaphor, and spiritual perception.',
    quotes: [
      '“The world will never starve for want of wonders; but only for want of wonder.”',
      '“Poets do not go mad; but chess-players do.”',
      '“The whole object of travel is not to set foot on foreign land; it is at last to set foot on one’s own country as a foreign land.”',
    ],
  },
  {
    name: 'Dorothy L. Sayers',
    intro:
      'Dorothy L. Sayers defended the relationship between theology, drama, creativity, and literary form. She argued that Christian truth was not merely abstract doctrine, but living drama capable of being embodied through story, image, and artistic expression.',
    quotes: [
      '“The dogma is the drama.”',
      '“We may call Art the expression of man’s delight in God’s work.”',
      '“The imagination is not a separate faculty of the mind, but the mind working at full strength.”',
    ],
  },
  {
    name: 'J. R. R. Tolkien',
    intro:
      'J. R. R. Tolkien’s literary world was shaped deeply by Christian imagination, moral structure, sacrifice, longing, beauty, and symbolic resonance. Though resistant to rigid allegory, Tolkien demonstrated how mythic and poetic forms could carry profound moral and spiritual meaning.',
    quotes: [
      '“Fantasy remains a human right: we make in our measure and in our derivative mode, because we are made.”',
      '“We make still by the law in which we’re made.”',
      '“Not all those who wander are lost.”',
    ],
  },
  {
    name: 'T. S. Eliot',
    intro:
      'T. S. Eliot approached poetry as a carrier of spiritual, symbolic, and cultural memory. His work often communicates through image, rhythm, fragmentation, and layered meaning that reaches beyond literal explanation into recognition and atmosphere.',
    quotes: [
      '“Genuine poetry can communicate before it is understood.”',
      '“Humankind cannot bear very much reality.”',
      '“The communication of the dead is tongued with fire beyond the language of the living.”',
    ],
  },
]

export default function QuotesPage() {
  return (
    <>
      <Nav />

      {/* ── OPENING ── */}
      <section className="quotes-hero" aria-label="Quotes">
        <p className="eyebrow">Quotes</p>
        <h1>Voices</h1>
        <p className="quotes-hero__intro">
          Christianity has long spoken through parable, poetry, image,
          allegory, and symbol. The following voices helped shape the
          literary-symbolic understanding beneath <em>AwakenArts</em>.
        </p>
        <p className="quotes-hero__intro">
          From Scripture and poetic theology to literary imagination and
          figurative narrative, these passages reflect a longstanding
          tradition in which language carries meaning through image,
          symbol, and poetic form.
        </p>
      </section>

      {/* ── SCRIPTURE & PARABLE ──────────────────────────────────
          Establishes the Biblical foundation: poetry, parable,
          figurative language, and symbolic vision as native modes
          of Scripture itself — not borrowed or applied to it.
      ──────────────────────────────────────────────────────────── */}
      <section className="quotes-section quotes-section--scripture" aria-label="Scripture and Parable">
        <div className="quotes-section__inner">
          <div className="quotes-section__header">
            <p className="eyebrow">Scripture &amp; Parable</p>
            <h2>The language Scripture <em>already speaks</em></h2>
          </div>

          <div className="quotes-intro">
            <p>
              Scripture itself speaks extensively through poetry, parable,
              metaphor, image, symbolic vision, and figurative language. From
              the Psalms and Proverbs to the prophetic books and the parables
              of Christ, the Bible repeatedly communicates truth through
              image-bearing forms that invite recognition as much as
              explanation.
            </p>
            <p>
              The language of Scripture is not merely informational. It is
              poetic, narrative, symbolic, and embodied. Christ Himself taught
              predominantly through parable, allowing meaning to unfold
              through story, image, and reflection rather than abstraction
              alone.
            </p>
            <p>
              This symbolic and poetic dimension of Biblical language forms an
              essential foundation beneath the AwakenArts framework.
            </p>
          </div>

          <div className="quotes-citation-list">
            {scriptureCitations.map(({ text, ref }) => (
              <div className="quotes-citation" key={ref}>
                <p>{text}</p>
                <cite>{ref}</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LITERARY / CHRISTIAN AUTHORS ──────────────────────────
          Each voice introduced briefly, then allowed to speak.
          The authority rests in the voices themselves.
      ──────────────────────────────────────────────────────────── */}
      <section className="quotes-section" aria-label="Literary and Christian authors">
        <div className="quotes-section__header">
          <p className="eyebrow">Literary Voices</p>
          <h2>Writers within the <em>same tradition</em></h2>
        </div>

        {authors.map(({ name, intro, quotes }) => (
          <article className="quotes-author" key={name}>
            <h3 className="quotes-author__name">{name}</h3>
            <p className="quotes-author__intro">{intro}</p>
            <div className="quotes-citation-list">
              {quotes.map((q, i) => (
                <div className="quotes-citation" key={i}>
                  <p style={{ whiteSpace: 'pre-line' }}>{q}</p>
                  <cite>{name}</cite>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      {/* ── CLOSING ── */}
      <section className="quotes-closing" aria-label="Closing">
        <p>
          Different centuries, forms, and voices — yet each reaching for
          the same thing Scripture reached for first: truth carried in image,
          story, and symbol, met rather than merely explained. AwakenArts
          continues that practice, not as commentary on the tradition, but as
          part of it.
        </p>
      </section>

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
              A collection of works that join image and language the way
              Scripture itself so often does — through parable, poetry, and
              symbol. By Susan Ann Shepler.
            </p>
            <FooterSocial />
          </div>

          <div className="footer-col">
            <h4>The Work</h4>
            <ul>
              <li><Link href="/encounters">Encounters</Link></li>
              <li><Link href="/studio">Studio</Link></li>
              <li><Link href="/library">Library</Link></li>
              <li><Link href="/quotes">Quotes</Link></li>
              <li><Link href="/journal">Journal</Link></li>
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
