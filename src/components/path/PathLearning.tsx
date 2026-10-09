import Link from 'next/link'

// The AwakenArts Path — "What Symbol Awareness Can Teach Us" and
// "Where to Continue" (approved by Susan, 2026-10-09).
//
// The Path explains the educational possibilities; the rest of AwakenArts
// lets visitors experience them. The learning content below is the approved
// four-category list (all 25 learning outcomes, with three approved merges),
// including Susan's three editorial refinements. Do not reword without her
// approval.
//
// Layout: the four categories sit two by two on desktop and stack in one
// column on tablet and phone (auto-fit grid, no media queries). Inline
// styles, per the site's convention.

export const LEARNING_ANCHOR = 'what-symbol-awareness-can-teach'

type Point = { lead: string; text: string }
type Category = { title: string; points: Point[]; benefit: string }

const CATEGORIES: Category[] = [
  {
    title: 'Notice the symbols you already live with',
    points: [
      { lead: 'The objects you keep.', text: 'A wedding ring, a family photograph, a keepsake, a flag: the things you keep and wear already speak.' },
      { lead: 'The pictures in your own words.', text: '“I’m at a crossroads.” “I’ve hit a wall.” “I’m carrying a heavy burden.”' },
      { lead: 'What a thing is, and what it means.', text: 'A key opens a lock. It can also stand for freedom, responsibility, or a new beginning.' },
      { lead: 'One image, many meanings.', text: 'A dove may mean peace to one person and remembrance to another.' },
    ],
    benefit: 'Symbolic language is already part of how you speak, remember, and understand.',
  },
  {
    title: 'See yourself more clearly',
    points: [
      { lead: 'What you value.', text: 'What you preserve, display, and commemorate can reveal something about what matters to you.' },
      { lead: 'Who you are.', text: 'Notice the images that express where you’ve come from and who you hope to become.' },
      { lead: 'Images that return.', text: 'Certain images may return in memory or experience, inviting you to explore feelings and associations that are difficult to put into words.' },
      { lead: 'Change.', text: 'Paths, thresholds, bridges, and seasons give you ways to reflect on the changes in your life.' },
      { lead: 'A new angle.', text: 'Find another way of seeing an experience you thought you understood.' },
    ],
    benefit: 'Greater self-awareness through your own observation, never a fixed interpretation.',
  },
  {
    title: 'Understand others, culture, and faith',
    points: [
      { lead: 'Meaning beyond words.', text: 'Gifts, gestures, and rituals carry meaning that words alone can’t.' },
      { lead: 'Belonging.', text: 'Family traditions, community emblems, and religious imagery show where people belong.' },
      { lead: 'Different readings.', text: 'The same image can mean different things across generations and traditions.' },
      { lead: 'Scripture’s images.', text: 'Read Scripture with fresh attention to its lamps, vines, seeds, bread, water, and shepherds.' },
      { lead: 'Literature.', text: 'Poems, parables, fairy tales, and stories speak through figure and image.' },
      { lead: 'Belief.', text: 'Symbols express what we believe, commit to, and hope for.' },
    ],
    benefit: 'A richer appreciation of language, culture, Scripture, literature, and one another.',
  },
  {
    title: 'Carry it into your life',
    points: [
      { lead: 'Choices.', text: 'Name the directions pulling at you when you stand at a crossroads.' },
      { lead: 'Hard experiences.', text: 'Find words for experiences that resist plain description.' },
      { lead: 'Journaling.', text: 'Begin journaling from a single image or metaphor.' },
      { lead: 'Your own forms.', text: 'Shape your own words into image, poem, and form.' },
      { lead: 'Other points of view.', text: 'Look at a familiar story from another side.' },
      { lead: 'Attention.', text: 'Notice which images are asking for your attention.' },
      { lead: 'A daily habit.', text: 'Make noticing part of ordinary life.' },
    ],
    benefit: 'Symbolic awareness becomes a practice of noticing, reflecting, and understanding everyday experience.',
  },
]

const CONTINUE = [
  { label: 'Symbols', href: '/symbols', text: 'Recognize the meanings in everyday images, one card at a time.' },
  { label: 'Journal', href: '/journal', text: 'Practice reflection with prompts for thresholds, change, memory, and identity.' },
  { label: 'Christian Symbols', href: '/christian-symbols', text: 'Read Scripture’s images with fresh attention.' },
  { label: 'Presentations', href: '/presentations', text: 'Explore the work in conversation with others.' },
]

const divider: React.CSSProperties = {
  width: 64,
  height: 1,
  background: 'var(--gold)',
  opacity: 0.6,
  margin: '0 auto 2.5rem',
}

const sectionHeading: React.CSSProperties = {
  fontFamily: 'var(--serif)',
  fontWeight: 400,
  fontSize: 'var(--t-section)',
  color: 'var(--deep)',
  textAlign: 'center',
  lineHeight: 1.2,
  margin: '0 0 1.25rem',
}

export default function PathLearning() {
  return (
    <section
      id={LEARNING_ANCHOR}
      aria-labelledby={`${LEARNING_ANCHOR}-heading`}
      style={{ padding: 'var(--band-gap) 1.5rem', scrollMarginTop: 0 }}
    >
      <div style={divider} aria-hidden="true" />
      <h2 id={`${LEARNING_ANCHOR}-heading`} style={sectionHeading}>
        What Symbol Awareness Can Teach Us
      </h2>
      <p
        style={{
          fontFamily: 'var(--serif)',
          fontStyle: 'italic',
          fontSize: '1.25rem',
          lineHeight: 1.5,
          color: 'var(--mid)',
          textAlign: 'center',
          maxWidth: 680,
          margin: '0 auto 3rem',
        }}
      >
        You already live with symbols. Along this path, you&rsquo;ll learn to notice them, understand what they carry,
        and use them to see your own story more clearly.
      </p>

      <div
        style={{
          maxWidth: 1040,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: '2.5rem 3.5rem',
        }}
      >
        {CATEGORIES.map((c, i) => (
          <article key={c.title}>
            <p
              style={{
                fontFamily: 'var(--sans)',
                fontSize: 'var(--label-size, 0.75rem)',
                fontWeight: 600,
                letterSpacing: 'var(--label-tracking, 0.16em)',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                margin: 0,
              }}
            >
              {i + 1}
            </p>
            <h3
              style={{
                fontFamily: 'var(--serif)',
                fontWeight: 400,
                fontSize: '1.6rem',
                lineHeight: 1.25,
                color: 'var(--deep)',
                margin: '0.4rem 0 1rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--gold-lt)',
              }}
            >
              {c.title}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {c.points.map((pt) => (
                <li
                  key={pt.lead}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--body-size)',
                    lineHeight: 'var(--body-line)',
                    color: 'var(--deep)',
                    margin: '0 0 0.75rem',
                  }}
                >
                  <strong style={{ fontWeight: 600 }}>{pt.lead}</strong> {pt.text}
                </li>
              ))}
            </ul>
            <p
              style={{
                fontFamily: 'var(--serif)',
                fontStyle: 'italic',
                fontSize: '1.15rem',
                lineHeight: 1.5,
                color: 'var(--gold)',
                margin: '1.25rem 0 0',
              }}
            >
              {c.benefit}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function PathContinue() {
  return (
    <section
      aria-labelledby="path-continue-heading"
      style={{ background: 'var(--warm)', padding: 'var(--band-gap) 1.5rem' }}
    >
      <h2 id="path-continue-heading" style={{ ...sectionHeading, margin: '0 0 2.5rem' }}>
        Where to Continue
      </h2>
      <div
        style={{
          maxWidth: 1040,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: '1.5rem',
        }}
      >
        {CONTINUE.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            data-cta={`path-continue-${c.href.replace('/', '')}`}
            style={{
              display: 'block',
              textDecoration: 'none',
              border: '1px solid var(--gold-lt)',
              borderRadius: 8,
              background: 'var(--cream)',
              padding: '1.5rem 1.25rem',
              textAlign: 'center',
            }}
          >
            <span
              style={{
                display: 'block',
                fontFamily: 'var(--sans)',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
              }}
            >
              {c.label}&nbsp;&rarr;
            </span>
            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.55,
                color: 'var(--deep)',
                marginTop: '0.6rem',
              }}
            >
              {c.text}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}

// Compact preview of the learning (2026-10-09, Susan: "more vital than the
// page allows — clear, inclusive, but not overloaded"). Shows all four
// categories with their approved benefit lines only, then links to the
// full list on The AwakenArts Path. Used on /about/introduction.
export function PathLearningPreview() {
  return (
    <section
      aria-labelledby="learning-preview-heading"
      style={{ padding: '3.5rem 1.5rem var(--band-gap)' }}
    >
      <div style={divider} aria-hidden="true" />
      <h2 id="learning-preview-heading" style={sectionHeading}>
        What Symbol Awareness Can Teach Us
      </h2>
      <ol
        style={{
          listStyle: 'none',
          padding: 0,
          maxWidth: 880,
          margin: '2rem auto 0',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
          gap: '1.75rem 3rem',
        }}
      >
        {CATEGORIES.map((c, i) => (
          <li key={c.title} style={{ display: 'flex', gap: '1rem', alignItems: 'baseline' }}>
            <span
              aria-hidden="true"
              style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--gold)', minWidth: '1rem' }}
            >
              {i + 1}
            </span>
            <span>
              <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: '1.35rem', lineHeight: 1.3, color: 'var(--deep)' }}>
                {c.title}
              </span>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--serif)',
                  fontStyle: 'italic',
                  fontSize: '1.05rem',
                  lineHeight: 1.5,
                  color: 'var(--gold)',
                  marginTop: '0.35rem',
                }}
              >
                {c.benefit}
              </span>
            </span>
          </li>
        ))}
      </ol>
      <p style={{ textAlign: 'center', margin: '2.5rem 0 0' }}>
        <Link
          href={`/awakenarts-path#${LEARNING_ANCHOR}`}
          className="home-coll-cta home-coll-cta--light-surface"
          data-cta="introduction-to-learning"
        >
          Explore What Symbol Awareness Can Teach
        </Link>
      </p>
    </section>
  )
}
