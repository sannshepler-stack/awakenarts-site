// SUPERSEDED 2026-08-20, later the same day, per Susan's "Christian
// Symbols — Reduce Vocabulary, Restore Encounters" directive: this
// component recreated Journey/The Deep/The Table/The Word as four new
// prose essays, built from a draft document's copy rather than the
// already-established Encounters experience. Her explicit correction:
// "I would have Claude reuse what exists rather than recreate it from
// our memory of it. That protects the work we've already done." See
// SymbolsEncounters.tsx (now used in src/app/symbols/page.tsx instead)
// — it links directly to the real /encounters/journey, /encounters/
// deep, /encounters/table, /encounters/word pages via the same
// card-grid entrance already built for /encounters/page.tsx, rather
// than re-authoring their content. This file is left in the codebase,
// unused, per the standing no-silent-deletion practice.
//
// SymbolsDeepen — "Following a Symbol Further," the third movement on
// /symbols, per Susan's "Christian Symbols — Placement of the Four
// Developed Symbolic Territories" directive (2026-08-20).
//
// Placement, per that directive: after the existing Symbol Vocabulary
// section (Encounter the Symbols -> Symbol Vocabulary -> this), with
// substantial breathing room after the Vocabulary divider before this
// begins. Symbol Vocabulary shows that Scripture contains a broad,
// recurring symbolic language; this section shows what it looks like to
// follow one symbolic field more deeply -- through Scripture, familiar
// language, image, and human experience. Not a card gallery, not another
// vocabulary list: four developed examples.
//
// Explicitly not "Encounters" -- that former program name is not used
// anywhere in this component, per her direct instruction. The four
// fields (Journey, The Deep, The Table, The Word) are built from
// AwakenArts_Christian_Symbols_Draft_Four.md's own Participant-Facing
// Copy blocks, used as drafted rather than rewritten into new marketing
// copy. Continue and the Encounter Journal are not part of this section,
// per that document's own dispositions.
//
// The existing card gallery and Symbol Vocabulary section
// (SymbolsExperience.tsx, src/data/symbols.ts) are untouched by this
// pass.

const FIELDS = [
  {
    slug: 'journey',
    title: 'Journey',
    reference: 'Genesis 12:1 · Hebrews 11:8',
    paragraphs: [
      <>
        Abraham was told to go before he was told where. Genesis records
        the call plainly: leave your country, your people, your
        father&rsquo;s household, for a land I will show you (Genesis
        12:1). The land isn&rsquo;t named. The route isn&rsquo;t given.
        What&rsquo;s given is a voice, and a promise that only comes after
        the leaving.
      </>,
      <>
        Hebrews looks back on this and calls it faith: &ldquo;By faith
        Abraham obeyed and went, even though he did not know where he was
        going&rdquo; (Hebrews 11:8). Scripture doesn&rsquo;t treat this
        uncertainty as a flaw in the story. It treats it as the
        story&rsquo;s shape. Faith, here, isn&rsquo;t certainty about the
        destination&mdash;it&rsquo;s willingness to move before the
        destination is visible.
      </>,
      <>
        We reach for this shape constantly without noticing. We say
        we&rsquo;re &ldquo;at a crossroads,&rdquo; that we&rsquo;re
        &ldquo;finding our way,&rdquo; that we don&rsquo;t know
        &ldquo;where this road leads.&rdquo; Journey has become one of the
        ordinary languages we use when life won&rsquo;t stay still.
        Scripture got there first, and named something we still
        recognize: that movement can be faithful even before sight is
        given.
      </>,
    ],
  },
  {
    slug: 'the-deep',
    title: 'The Deep',
    reference: 'Proverbs 20:5 · Psalm 42:7',
    paragraphs: [
      <>
        Scripture doesn&rsquo;t treat the human heart as something simple.
        &ldquo;The purposes of a person&rsquo;s heart are deep
        waters,&rdquo; Proverbs says, &ldquo;but one who has insight draws
        them out&rdquo; (Proverbs 20:5). What we carry inside
        isn&rsquo;t always available on request&mdash;it has to be drawn
        up, the way water is drawn from a well: slowly, often with help.
      </>,
      <>
        The Psalms let the deep speak for itself: &ldquo;Deep calls to
        deep&hellip; all your waves and breakers have swept over
        me&rdquo; (Psalm 42:7). This isn&rsquo;t tidy language.
        It&rsquo;s what it feels like to be overwhelmed by something too
        large for a sentence&mdash;grief, longing, an ache with no clear
        edge. Scripture doesn&rsquo;t require that feeling to explain
        itself before it counts.
      </>,
      <>
        We already talk this way. We say we&rsquo;re &ldquo;in over our
        heads,&rdquo; that something hit us &ldquo;deep down,&rdquo; that
        a person is &ldquo;deep&rdquo; when their inner life clearly runs
        further than what shows on the surface. The Deep names what we
        already sense: that we are not only what&rsquo;s visible, and
        that some of what&rsquo;s truest about us has to be drawn out
        rather than simply stated.
      </>,
    ],
  },
  {
    slug: 'the-table',
    title: 'The Table',
    reference: 'Psalm 23:5 · Luke 22:19–20',
    paragraphs: [
      <>
        &ldquo;You prepare a table before me,&rdquo; the psalmist writes,
        &ldquo;in the presence of my enemies&rdquo; (Psalm 23:5). Sit with
        that a moment&mdash;provision offered not after the danger has
        passed, but in the middle of it. The table doesn&rsquo;t wait for
        safety. It&rsquo;s set anyway.
      </>,
      <>
        By the Gospels, the table has become one of the most contested
        spaces in Jesus&rsquo;s ministry&mdash;not because of what was
        served, but because of who was seated. He ate with tax collectors
        and the people the religious establishment considered sinners,
        and it scandalized the people watching (Luke 15:1&ndash;2). In
        that world, sharing a table was a public statement about who
        belonged. Jesus kept making that statement in favor of people who
        weren&rsquo;t supposed to be there.
      </>,
      <>
        The night before his death, he took that same ordinary
        act&mdash;a shared meal&mdash;and gave it lasting weight:
        &ldquo;This is my body&hellip; this cup is the new covenant in my
        blood&rdquo; (Luke 22:19&ndash;20). The table became the place
        memory happens, the place a community keeps returning to in order
        to remember who it is.
      </>,
      <>
        We still know, in our own language, that a table is never just
        furniture. We talk about &ldquo;having a seat at the
        table,&rdquo; about who we&rsquo;d want at ours and who
        we wouldn&rsquo;t, about &ldquo;breaking bread&rdquo; with someone
        as shorthand for real connection. Even the word{' '}
        <em>companion</em> comes from this&mdash;one who shares bread
        with another. The Table asks what it means to be welcomed
        somewhere your presence isn&rsquo;t earned. Only given.
      </>,
    ],
  },
  {
    slug: 'the-word',
    title: 'The Word',
    reference: 'Genesis 1:3 · John 1:1, 14',
    paragraphs: [
      <>
        Genesis opens with speech, not material. &ldquo;And God said, Let
        there be light: and there was light&rdquo; (Genesis 1:3). Nine
        more times in that first chapter, the same pattern
        holds&mdash;God speaks, and what is spoken comes to be. In this
        telling, creation isn&rsquo;t shaped by hand before it&rsquo;s
        shaped by word. The word comes first.
      </>,
      <>
        John&rsquo;s Gospel picks up that same opening line&mdash;&ldquo;In
        the beginning&rdquo;&mdash;and takes it further: &ldquo;In the
        beginning was the Word, and the Word was with God, and the Word
        was God&hellip; All things were made through him&rdquo; (John
        1:1, 3). Then further still: &ldquo;the Word became flesh and
        dwelt among us&rdquo; (John 1:14). The same creative speech that
        spoke light into being is, in John&rsquo;s account, someone you
        could stand next to.
      </>,
      <>
        We already trust that words carry more than information. We say
        someone&rsquo;s &ldquo;word is their bond.&rdquo; We say words can
        build up or tear down. People now say they &ldquo;spoke something
        into existence&rdquo;&mdash;language that, without necessarily
        meaning to, echoes Genesis far more closely than most idioms do.
        The Word asks us to take seriously what we already sense: that
        speech isn&rsquo;t incidental to reality, and that being spoken
        to&mdash;really heard, really addressed&mdash;is one of the
        oldest ways human beings have of knowing they are not alone.
      </>,
    ],
  },
]

export default function SymbolsDeepen() {
  return (
    <>
      <div className="symbols-deepen-divider" aria-hidden="true" />

      <section className="symbols-deepen-section" aria-labelledby="symbols-deepen-heading">
        <p className="symbols-deepen-eyebrow">Christian Symbols</p>
        <h2 id="symbols-deepen-heading" className="symbols-deepen-title">
          Following a Symbol Further
        </h2>
        <p className="symbols-deepen-intro">
          Symbol Vocabulary shows that Scripture speaks in a broad and
          recurring symbolic language. The four fields below follow that
          language further&mdash;through Scripture, the words we already
          use, and the experiences a symbol can illuminate&mdash;to show
          what it looks like to explore one symbol in depth, rather than
          name many at a glance.
        </p>

        <div className="symbols-deepen-list">
          {FIELDS.map((field) => (
            <article key={field.slug} className="symbols-deepen-item" aria-labelledby={`symbols-deepen-${field.slug}`}>
              <h3 id={`symbols-deepen-${field.slug}`} className="symbols-deepen-item__title">
                {field.title}
              </h3>
              <p className="symbols-deepen-item__ref">{field.reference}</p>
              {field.paragraphs.map((paragraph, i) => (
                <p key={i} className="symbols-deepen-item__body">
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
