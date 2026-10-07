import type { Metadata } from 'next'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'The Experience — AwakenArts',
  description:
    'A facilitated AwakenArts experience — guided practice with symbol, image, and word for individuals and groups.',
  alternates: { canonical: '/experience' },
  openGraph: {
    url: '/experience',
    title: 'The Experience — AwakenArts',
    description:
      'A facilitated AwakenArts experience — guided practice with symbol, image, and word.',
  },
}

/*
 * 2026-09-02, per Susan's sitewide typography-normalization pass
 * (Task #170): this unlisted utility page (reachable only by direct
 * URL, per the site's own "Unlisted Page System") was built entirely
 * with raw inline styles -- no shared classes, no tokens, a font-size
 * on nearly every element that matched no tier in the approved scale
 * (2.5rem H1, 1.08rem/1.05rem body variants, a one-off #5a4a3a color,
 * and a hand-styled external link duplicating -- imperfectly -- the
 * site's one button treatment). Per her "apply the guide to
 * editorial/interface typography... buttons... except where necessary
 * for typography consistency" instruction, every inline style below now
 * references the same tokens/classes the rest of the site uses:
 *   - H1 -> var(--h1-size)/var(--h1-weight), matching the "page title"
 *     tier used everywhere else (was a fixed 40px; token is 44/38/32
 *     responsive, so this also gains the tablet/mobile step-down it
 *     never had).
 *   - The lede line ("Bring your own words...") was already exactly
 *     1.25rem/20px -- the --subtitle-size tier -- just not wired to it.
 *   - Body paragraphs standardized to var(--body-size)/var(--body-line)
 *     (was 1.08rem/17.28px -- a one-off, not a violation of the "never
 *     go below 16px" floor, but still a fourth size the guide asks not
 *     to invent).
 *   - The two inner paragraph widths (600px/620px) converged on
 *     var(--measure-poetic) (640px), the same narrow-column tier used
 *     for reflective copy elsewhere -- both were already within a few
 *     percent of it.
 *   - "Open WordArt" was its own hand-built button (border color
 *     happened to match --deep, but the font-size/tracking/padding
 *     were all slightly off the standard) -- replaced with the site's
 *     one button component (.home-coll-cta.home-coll-cta--light-
 *     surface), the same treatment used for every other outbound/next-
 *     step link on a light surface.
 *   - The example word-list color (#5a4a3a, a one-off warm brown-gray)
 *     -> var(--mid), the site's existing "quieter secondary text" role.
 * Structure, copy, image, and layout are otherwise untouched -- this is
 * a token-wiring pass, not a redesign.
 */
export default function ExperiencePage() {
  return (
    <>
      <Nav />

      <main
        style={{
          padding: '6rem 2rem 4rem',
          textAlign: 'center',
          maxWidth: 'var(--measure-body)',
          margin: '0 auto',
        }}
      >
        <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'var(--h1-size)', fontWeight: 'var(--h1-weight)', marginBottom: '1.5rem' }}>
          Make Your Own Word Art
        </h1>

        <p
          style={{
            fontSize: 'var(--subtitle-size)',
            lineHeight: 'var(--subtitle-line)',
            margin: '0 auto 1.75rem',
            maxWidth: 'var(--measure-poetic)',
          }}
        >
          Bring your own words and watch them take shape.
        </p>

        <p
          style={{
            fontSize: 'var(--body-size)',
            lineHeight: 'var(--body-line)',
            margin: '0 auto 1.75rem',
            maxWidth: 'var(--measure-poetic)',
          }}
        >
          At AwakenArts, words are more than language alone. They can become form,
          image, and presence. The figures and symbols throughout this site are part
          of that process: language shaping itself into something visible.
        </p>

        <p
          style={{
            fontSize: 'var(--body-size)',
            lineHeight: 'var(--body-line)',
            margin: '0 auto 2.25rem',
            maxWidth: 'var(--measure-poetic)',
          }}
        >
          Here, you can try that process for yourself. Begin with a few words that
          feel meaningful, interesting, or simply close at hand, and see what takes
          shape.
        </p>

        <img
          src="/images/experiences/butterfly-wordart-opt.webp"
          alt="Butterfly formed from words"
          style={{
            maxWidth: '520px',
            width: '100%',
            margin: '2.5rem auto',
            display: 'block',
          }}
        />

        <a
          href="https://wordart.com"
          target="_blank"
          rel="noopener noreferrer"
          className="home-coll-cta home-coll-cta--light-surface"
          style={{ marginTop: '0.5rem' }}
        >
          Open WordArt
        </a>

        <div
          style={{
            margin: '2.5rem auto 0',
            maxWidth: 'var(--measure-poetic)',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: 'var(--body-size)',
              lineHeight: 'var(--body-line)',
              marginBottom: '1.5rem',
            }}
          >
            In WordArt, start by selecting <strong>Dashboard</strong>, then press <strong>Create</strong>. Enter a word or a short group of words. Press <strong>Enter</strong> after each so it appears in the list. Choose a shape, then press <strong>Generate</strong>. If the interface feels unfamiliar, begin simply: use a small word set, one shape, and one or two colors. You can adjust the font, layout, and palette after the image appears. The clearest results often come from a few words, repeated words, and a simple shape. Try a few variations rather than trying to perfect everything at once.
          </p>

          <p
            style={{
              fontSize: 'var(--body-size)',
              lineHeight: 'var(--body-line)',
              marginTop: '1.5rem',
              marginBottom: '1.2rem',
              fontStyle: 'italic',
            }}
          >
            Tip: If your result looks crowded, reduce the number of words and try again.
          </p>

          <p
            style={{
              fontSize: 'var(--body-size)',
              lineHeight: 'var(--body-line)',
              marginBottom: '0.6rem',
            }}
          >
            You might begin with:
          </p>

          <p
            style={{
              fontSize: 'var(--body-size)',
              lineHeight: '2',
              color: 'var(--mid)',
              letterSpacing: '0.03em',
            }}
          >
            Change · Balance · Center · Light · Open · Return
          </p>
        </div>

      </main>
    </>
  )
}