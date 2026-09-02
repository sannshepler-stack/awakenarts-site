import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import styles from './page.module.css'

/*
 * /style-guide — AwakenArts Typography & Design System Reference.
 *
 * 2026-09-02, created per Susan's "Build the standalone style-guide/
 * reference page first" directive, in response to her "Looking pretty
 * good now -- a prototype for typography" note on the homepage's
 * completed typography-normalization pass (Task #169). Scope, exactly
 * as she specified: "the approved typography hierarchy, responsive
 * sizes, font families, accessible text gold vs decorative gold,
 * navy/slate/cream colors, standard text widths (760/680/640px),
 * buttons, labels, quotations, captions, spacing principles, and
 * mobile behavior... Use the approved homepage as the working visual
 * reference."
 *
 * Every specimen below renders with the SAME classes/custom properties
 * the live site uses (var(--h1-size), .home-coll-cta, .eyebrow, etc.)
 * rather than restating their values -- see page.module.css's own
 * header comment for the full reasoning.
 *
 * Internal-only: not linked from <Nav/>, noindex below. Per her "do
 * not continue the remaining sitewide pass until I review and approve
 * the guide" instruction, Tasks #170-173 (typography normalization for
 * the ~37 remaining pages, shared Nav/Footer components, and the
 * responsive breakpoint audit) stay paused until she signs off on this
 * page.
 */

export const metadata: Metadata = {
  title: 'Style Guide — AwakenArts',
  description: 'Internal typography and design system reference.',
  robots: { index: false, follow: false },
}

export default function StyleGuidePage() {
  return (
    <>
      <Nav />
      <div className={styles.page}>

        <div className={styles.intro}>
          <p className={`eyebrow ${styles.introEyebrow}`}>AwakenArts</p>
          <h1 className={styles.introTitle}>Typography &amp; Design System</h1>
          <p className={styles.introNote}>
            Internal reference — the approved type hierarchy, colors,
            text widths, and spacing principles from the 2026-09-02
            typography-normalization pass. Every example on this page
            renders live, from the site&rsquo;s own tokens.
          </p>
        </div>

        <main className={styles.main}>

          {/* ── TYPEFACES ──────────────────────────────────────────── */}
          <section className={styles.section}>
            <p className={`eyebrow ${styles.sectionEyebrow}`}>Typefaces</p>
            <h2 className={styles.sectionTitle}>Two typefaces, one job each</h2>
            <p className={styles.sectionIntro}>
              Cormorant Garamond carries headings and display type. Lora
              carries body copy, statements, and captions. Inter is
              reserved for uppercase labels and navigation. No page
              should introduce a fourth typeface.
            </p>
            <div className={styles.specimenGrid}>
              <div className={styles.specimen}>
                <p className={styles.specimenLabel}>Cormorant Garamond — Headings</p>
                <p className={styles.specimenExample} style={{ fontFamily: 'var(--serif)', fontSize: '2rem', color: 'var(--deep)' }}>
                  Scripture Speaks in Symbols
                </p>
                <div className={styles.specimenMeta}>
                  <span>Weights loaded: <code>300 400 600</code> (roman + italic)</span>
                  <span>Role: <code>--serif</code></span>
                </div>
              </div>
              <div className={styles.specimen}>
                <p className={styles.specimenLabel}>Lora — Body, statements, captions</p>
                <p className={styles.specimenExample} style={{ fontFamily: 'var(--font-body)', fontSize: '1.15rem', color: 'var(--charcoal)' }}>
                  Jesus taught through image, story, and metaphor.
                </p>
                <div className={styles.specimenMeta}>
                  <span>Weights loaded: <code>400 500 600</code> roman, <code>400</code> italic</span>
                  <span>Role: <code>--font-body</code></span>
                </div>
              </div>
              <div className={styles.specimen}>
                <p className={styles.specimenLabel}>Inter — Labels, navigation, buttons</p>
                <p className={styles.specimenExample} style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--deep)' }}>
                  View Current Workshops
                </p>
                <div className={styles.specimenMeta}>
                  <span>Weights loaded: <code>400 500 600</code></span>
                  <span>Role: <code>--sans</code></span>
                </div>
              </div>
            </div>
          </section>

          {/* ── TYPE HIERARCHY ─────────────────────────────────────── */}
          <section className={styles.section}>
            <p className={`eyebrow ${styles.sectionEyebrow}`}>Type Hierarchy</p>
            <h2 className={styles.sectionTitle}>The approved scale</h2>
            <p className={styles.sectionIntro}>
              Eight tiers cover every editorial role on the site. Do not
              invent a new heading size for a section — use the tier
              that matches its role.
            </p>
            <div className={styles.specimenGrid}>

              <div className={styles.specimen}>
                <p className={styles.specimenLabel}>H1 — Page / major section title</p>
                <p className={`${styles.specimenExample} ${styles.exH1}`}>A Path of Stones</p>
                <div className={styles.specimenMeta}>
                  <span>Size: <code>44px / 38px / 32px</code> (desktop / 1024px / 640px)</span>
                  <span>Weight: <code>600</code> Semibold</span>
                  <span>Line-height: <code>1.15</code></span>
                  <span>Tracking: <code>0.5px</code></span>
                  <span>Token: <code>--h1-size</code></span>
                </div>
              </div>

              <div className={styles.specimen}>
                <p className={styles.specimenLabel}>H2 — Section heading</p>
                <p className={`${styles.specimenExample} ${styles.exH2}`}>Scripture Speaks in Symbols</p>
                <div className={styles.specimenMeta}>
                  <span>Size: <code>28px / 26px / 24px</code></span>
                  <span>Weight: <code>600</code> Semibold</span>
                  <span>Line-height: <code>1.25</code></span>
                  <span>Tracking: <code>0.5px</code></span>
                  <span>Token: <code>--h2-size</code></span>
                </div>
              </div>

              <div className={styles.specimen}>
                <p className={styles.specimenLabel}>H3 / Subheading — lead statement</p>
                <p className={`${styles.specimenExample} ${styles.exH3}`}>Images can reveal what experience has been trying to tell us.</p>
                <div className={styles.specimenMeta}>
                  <span>Size: <code>20px</code> (flat, all breakpoints)</span>
                  <span>Weight: Regular (roman); short lines may be Cormorant Italic per role</span>
                  <span>Line-height: <code>1.35</code></span>
                  <span>Tracking: <code>0.5px</code></span>
                  <span>Token: <code>--subtitle-size</code></span>
                </div>
              </div>

              <div className={styles.specimen}>
                <p className={styles.specimenLabel}>H4 — Small heading (Lora Semibold)</p>
                <p className={`${styles.specimenExample} ${styles.exH4}`}>Christian Symbols</p>
                <div className={styles.specimenMeta}>
                  <span>Size: <code>16px</code> (flat)</span>
                  <span>Weight: <code>600</code> Semibold</span>
                  <span>Line-height: <code>1.35</code></span>
                  <span>Tracking: <code>0.3px</code></span>
                  <span>Token: <code>--h4-size</code></span>
                </div>
              </div>

              <div className={styles.specimen}>
                <p className={styles.specimenLabel}>Body — editorial paragraph</p>
                <p className={`${styles.specimenExample} ${styles.exBody}`}>
                  Jesus taught through image, story, and metaphor. He did not
                  surrender the Truth He carried. AwakenArts works within
                  that tradition while engaging literature, psychology,
                  mythology, folklore, and a long history of human
                  imagination.
                </p>
                <div className={styles.specimenMeta}>
                  <span>Size: <code>16px</code> (flat — never reduce)</span>
                  <span>Line-height: <code>1.75</code></span>
                  <span>Tracking: normal</span>
                  <span>Token: <code>--body-size</code></span>
                </div>
              </div>

              <div className={styles.specimen}>
                <p className={styles.specimenLabel}>Body Italic — quotations, reflective copy</p>
                <p className={`${styles.specimenExample} ${styles.exBodyItalic}`}>
                  A lamp. A path. A flower. A vine. A shepherd. Ordinary
                  things become carriers of meaning.
                </p>
                <div className={styles.specimenMeta}>
                  <span>Size: <code>16px</code></span>
                  <span>Line-height: <code>1.75</code></span>
                  <span>Token: <code>--body-size</code>, <code>font-style: italic</code></span>
                </div>
              </div>

              <div className={styles.specimen}>
                <p className={styles.specimenLabel}>Caption / Note — beneath an image or figure</p>
                <p className={`${styles.specimenExample} ${styles.exCaption}`}>
                  The AwakenArts Collection — poetic encounters in shape,
                  symbol, and story.
                </p>
                <div className={styles.specimenMeta}>
                  <span>Size: <code>12px</code></span>
                  <span>Line-height: <code>1.4</code></span>
                  <span>Tracking: <code>0.2px</code></span>
                  <span>Token: <code>--caption-size</code></span>
                </div>
              </div>

              <div className={styles.specimen}>
                <p className={styles.specimenLabel}>Small / Footer text</p>
                <p className={`${styles.specimenExample} ${styles.exSmall}`}>
                  © AwakenArts. All rights reserved.
                </p>
                <div className={styles.specimenMeta}>
                  <span>Size: <code>11px</code></span>
                  <span>Line-height: <code>1.4</code></span>
                  <span>Tracking: <code>0.2px</code></span>
                  <span>Token: <code>--small-size</code></span>
                  <span>Not yet wired into a rule — reserved for footer/legal text review (Task #171)</span>
                </div>
              </div>

            </div>
          </section>

          {/* ── COLOR SYSTEM ───────────────────────────────────────── */}
          <section className={styles.section}>
            <p className={`eyebrow ${styles.sectionEyebrow}`}>Color System</p>
            <h2 className={styles.sectionTitle}>Navy, slate, cream — and two golds</h2>
            <p className={styles.sectionIntro}>
              Gold is an accent color site-wide, never the primary
              reading-text color. There are two golds with different
              jobs — using the wrong one for text is an accessibility
              failure, not a style preference.
            </p>

            <div className={styles.swatchGrid}>
              <div className={styles.swatch}>
                <div className={styles.swatchFill} style={{ background: 'var(--deep)' }} />
                <div className={styles.swatchMeta}>
                  <p className={styles.swatchName}>Navy / Deep</p>
                  <p className={styles.swatchHex}>#1C2B3A</p>
                  <p className={styles.swatchUse}>Primary headings, logo, nav, footer, dark section backgrounds.</p>
                </div>
              </div>
              <div className={styles.swatch}>
                <div className={styles.swatchFill} style={{ background: 'var(--charcoal)' }} />
                <div className={styles.swatchMeta}>
                  <p className={styles.swatchName}>Charcoal</p>
                  <p className={styles.swatchHex}>#2B2B2B</p>
                  <p className={styles.swatchUse}>Primary body-copy text on light backgrounds.</p>
                </div>
              </div>
              <div className={styles.swatch}>
                <div className={styles.swatchFill} style={{ background: 'var(--mid)' }} />
                <div className={styles.swatchMeta}>
                  <p className={styles.swatchName}>Slate</p>
                  <p className={styles.swatchHex}>#55606B</p>
                  <p className={styles.swatchUse}>Secondary/quieter body text, captions, statement copy.</p>
                </div>
              </div>
              <div className={styles.swatch}>
                <div className={styles.swatchFill} style={{ background: 'var(--cream)' }} />
                <div className={styles.swatchMeta}>
                  <p className={styles.swatchName}>Cream</p>
                  <p className={styles.swatchHex}>#FAF6EC</p>
                  <p className={styles.swatchUse}>Main light background, site-wide.</p>
                </div>
              </div>
              <div className={styles.swatch}>
                <div className={styles.swatchFill} style={{ background: 'var(--warm)' }} />
                <div className={styles.swatchMeta}>
                  <p className={styles.swatchName}>Warm / Parchment</p>
                  <p className={styles.swatchHex}>#F0EAE0</p>
                  <p className={styles.swatchUse}>Alternating light sections, body background.</p>
                </div>
              </div>
              <div className={styles.swatch}>
                <div className={styles.swatchFill} style={{ background: 'var(--mist)' }} />
                <div className={styles.swatchMeta}>
                  <p className={styles.swatchName}>Mist</p>
                  <p className={styles.swatchHex}>#DDD8CF</p>
                  <p className={styles.swatchUse}>Hairline borders, dividers.</p>
                </div>
              </div>
              <div className={styles.swatch}>
                <div className={styles.swatchFill} style={{ background: 'var(--gold)' }} />
                <div className={styles.swatchMeta}>
                  <p className={styles.swatchName}>Accessible Gold</p>
                  <p className={styles.swatchHex}>#7E5F12</p>
                  <p className={styles.swatchUse}>5.51:1 on cream — safe for text. See rule below.</p>
                </div>
              </div>
              <div className={styles.swatch}>
                <div className={styles.swatchFill} style={{ background: 'var(--gold-lt)' }} />
                <div className={styles.swatchMeta}>
                  <p className={styles.swatchName}>Light Gold (dark bg)</p>
                  <p className={styles.swatchHex}>#C9A84C</p>
                  <p className={styles.swatchUse}>Accessible gold&rsquo;s counterpart on navy backgrounds.</p>
                </div>
              </div>
              <div className={styles.swatch}>
                <div className={styles.swatchFill} style={{ background: 'var(--gold-accent)' }} />
                <div className={styles.swatchMeta}>
                  <p className={styles.swatchName}>Decorative / Warm Gold</p>
                  <p className={styles.swatchHex}>#B08A3E</p>
                  <p className={styles.swatchUse}>2.97:1 on cream — fails text contrast. See rule below.</p>
                </div>
              </div>
              <div className={styles.swatch}>
                <div className={styles.swatchFill} style={{ background: 'var(--gold-bg)' }} />
                <div className={styles.swatchMeta}>
                  <p className={styles.swatchName}>Gold Background</p>
                  <p className={styles.swatchHex}>#F5EDD6</p>
                  <p className={styles.swatchUse}>Tinted fills behind gold-accented callouts.</p>
                </div>
              </div>
            </div>

            <div className={styles.goldRule}>
              <p className={styles.goldRuleTitle}>Gold Usage Standard, Two-Tier</p>
              <div className={styles.goldRuleList}>
                <p className={styles.goldRuleItem}>
                  <span className={styles.goldSwatchInline} style={{ background: 'var(--gold)' }} />
                  <strong>Accessible gold (#7E5F12)</strong> — small gold headings,
                  labels, links, buttons, and other functional text. The
                  only gold proven ≥4.5:1 (WCAG AA-normal) on the site&rsquo;s
                  light backgrounds. Use anywhere gold carries readable
                  text at body/label scale.
                </p>
                <p className={styles.goldRuleItem}>
                  <span className={styles.goldSwatchInline} style={{ background: 'var(--gold-accent)' }} />
                  <strong>Warm/decorative gold (#B08A3E)</strong> — ornaments,
                  borders, rules, icons, decorative flourishes, and
                  sufficiently large display elements (≥24px bold, where
                  the 3:1 AA-large/UI floor applies). Never for body- or
                  label-sized text.
                </p>
                <p className={styles.goldRuleItem}>
                  <span className={styles.goldSwatchInline} style={{ background: 'var(--deep)' }} />
                  <strong>Navy / charcoal</strong> — primary headings and body
                  copy. Gold is always an accent, never the primary
                  reading-text color.
                </p>
              </div>
            </div>
          </section>

          {/* ── TEXT WIDTH SYSTEM ──────────────────────────────────── */}
          <section className={styles.section}>
            <p className={`eyebrow ${styles.sectionEyebrow}`}>Text Width System</p>
            <h2 className={styles.sectionTitle}>Three widths — no page invents a fourth</h2>
            <p className={styles.sectionIntro}>
              Always center with <code>margin: 0 auto</code>. On mobile,
              use 20px side padding (<code>calc(100% - 40px)</code> or
              equivalent) rather than relying on max-width alone.
            </p>
            <div className={styles.widthDemo}>
              <div className={styles.widthRow}>
                <p className={styles.widthLabel}>Poetic / Quotation — 640px</p>
                <div className={`${styles.widthBar} ${styles.widthPoetic}`}>
                  <p className={styles.widthBarText}>
                    &ldquo;He did not say anything to them without using a
                    parable.&rdquo; Poetic and quotation blocks stay narrow —
                    breaking into short, balanced lines rather than
                    stretching wide.
                  </p>
                </div>
              </div>
              <div className={styles.widthRow}>
                <p className={styles.widthLabel}>Introductory / Reflective — 680px</p>
                <div className={`${styles.widthBar} ${styles.widthIntro}`}>
                  <p className={styles.widthBarText}>
                    You already speak in images. We all do. AwakenArts
                    brings image and language into conversation — a
                    statement rather than standard body copy, given a
                    little more room to breathe.
                  </p>
                </div>
              </div>
              <div className={styles.widthRow}>
                <p className={styles.widthLabel}>Main Body Paragraphs — 760px</p>
                <div className={`${styles.widthBar} ${styles.widthBody}`}>
                  <p className={styles.widthBarText}>
                    Jesus taught through image, story, and metaphor. He did
                    not surrender the Truth He carried. Ordinary editorial
                    paragraphs are held to this ceiling — never allowed to
                    span the full content container.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── BUTTONS ─────────────────────────────────────────────── */}
          <section className={styles.section}>
            <p className={`eyebrow ${styles.sectionEyebrow}`}>Buttons</p>
            <h2 className={styles.sectionTitle}>One button, two surface themes</h2>
            <p className={styles.sectionIntro}>
              Same structure, spacing, typography, border weight, and
              hover animation everywhere — only the theme (color tokens)
              changes for the surface it sits on. Never invent a third
              button treatment.
            </p>
            {/* 2026-09-02, per Susan's build-failure report ("Event handlers
                cannot be passed to Client Component props" on Vercel,
                commit 2d24b29): these were `<a href="#" onClick={(e) =>
                e.preventDefault()}>` -- a Server Component (this page has
                no "use client") cannot pass a function prop like onClick
                to a DOM element; Next.js allows it in local dev but fails
                static generation in production. These are inert style
                specimens, not real navigation, so the fix is a
                non-interactive <span> with the same classes -- identical
                visual result, no client/server boundary violation. */}
            <div className={styles.buttonRow}>
              <div className={styles.buttonSwatchDark}>
                <span className="home-coll-cta">
                  View Current Workshops
                </span>
              </div>
              <div className={styles.buttonSwatchLight}>
                <span className="home-coll-cta home-coll-cta--light-surface">
                  Explore Christian Symbols
                </span>
              </div>
            </div>
            <div className={styles.specimenMeta} style={{ marginTop: '1.5rem' }}>
              <span>Font: <code>Inter, 0.9rem, 600</code></span>
              <span>Tracking: <code>0.08em</code>, uppercase</span>
              <span>Padding: <code>1rem 2.25rem</code></span>
              <span>Border: <code>1px</code>, radius <code>2px</code></span>
              <span>Class: <code>.home-coll-cta</code> / <code>.home-coll-cta--light-surface</code></span>
            </div>
          </section>

          {/* ── LABELS ──────────────────────────────────────────────── */}
          <section className={styles.section}>
            <p className={`eyebrow ${styles.sectionEyebrow}`}>Labels</p>
            <h2 className={styles.sectionTitle}>The eyebrow — one label, everywhere</h2>
            <p className={styles.sectionIntro}>
              Gold category label with a short rule — COLLECTION, POEMS,
              CHRISTIAN SYMBOLS, and every section eyebrow on the site
              use this exact treatment. A distinct, established brand
              element, not part of the H1-H4 scale.
            </p>
            <div className={styles.demoBlock}>
              <p className="eyebrow" style={{ justifyContent: 'center' }}>Christian Symbols</p>
            </div>
            <div className={styles.specimenMeta} style={{ marginTop: '1.25rem' }}>
              <span>Font: <code>Inter, 0.85rem, 600</code></span>
              <span>Tracking: <code>0.18em</code></span>
              <span>Color: <code>--gold</code></span>
              <span>Class: <code>.eyebrow</code></span>
            </div>
          </section>

          {/* ── QUOTATIONS ──────────────────────────────────────────── */}
          <section className={styles.section}>
            <p className={`eyebrow ${styles.sectionEyebrow}`}>Quotations</p>
            <h2 className={styles.sectionTitle}>Scripture, example phrases — same treatment</h2>
            <p className={styles.sectionIntro}>
              Quoted lines and the three homepage example phrases share
              one register: Cormorant Garamond italic, gold, centered.
            </p>
            <div className={styles.demoBlock}>
              <p className={styles.quoteExample}>
                &ldquo;He did not say anything to them without using a parable.&rdquo;
              </p>
            </div>
            <div className={styles.demoBlock} style={{ marginTop: '1.25rem' }}>
              <p className={styles.examplesRow}>
                &ldquo;We&rsquo;ve put up walls.&rdquo;
                <span className={styles.examplesSep}>·</span>
                &ldquo;I&rsquo;m at a crossroads.&rdquo;
                <span className={styles.examplesSep}>·</span>
                &ldquo;It became a stepping stone.&rdquo;
              </p>
            </div>
            <div className={styles.specimenMeta} style={{ marginTop: '1.25rem' }}>
              <span>Font: <code>Cormorant Garamond italic, weight 300</code></span>
              <span>Size: <code>clamp(1.15rem, 2vw, 1.35rem)</code></span>
              <span>Color: <code>--gold</code></span>
            </div>
          </section>

          {/* ── SPACING PRINCIPLES ─────────────────────────────────── */}
          <section className={styles.section}>
            <p className={`eyebrow ${styles.sectionEyebrow}`}>Spacing Principles</p>
            <h2 className={styles.sectionTitle}>Standard gaps, not one-off numbers</h2>
            <p className={styles.sectionIntro}>
              Two shared gap systems govern vertical rhythm site-wide —
              use these tokens rather than inventing a new spacing value
              per section.
            </p>

            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Value</th>
                  <th>Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>--band-gap</code></td>
                  <td>6rem (108px) desktop</td>
                  <td>Standard section-to-section gap</td>
                </tr>
                <tr>
                  <td><code>--band-gap-md</code></td>
                  <td>5rem (90px), ≤1024px</td>
                  <td>Tablet tier of the same gap</td>
                </tr>
                <tr>
                  <td><code>--band-gap-sm</code></td>
                  <td>4rem (72px), ≤640px</td>
                  <td>Mobile tier of the same gap</td>
                </tr>
              </tbody>
            </table>

            <p className={styles.sectionIntro} style={{ marginTop: '2rem' }}>
              A separate, tighter convention governs the gap directly
              beneath a threshold image (an <code>AtmosphericHeader</code>)
              before a section&rsquo;s own eyebrow/heading begins:
            </p>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Breakpoint</th>
                  <th>Standard gap</th>
                  <th>Homepage exception</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Desktop</td>
                  <td>56px</td>
                  <td>16px (Ann + Christian Symbols sections, tightened per Susan&rsquo;s review)</td>
                </tr>
                <tr>
                  <td>1024px</td>
                  <td>48px</td>
                  <td>16px</td>
                </tr>
                <tr>
                  <td>640px</td>
                  <td>40px</td>
                  <td>12px</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* ── EDITORIAL SECTION PATTERN ───────────────────────────── */}
          <section className={styles.section}>
            <p className={`eyebrow ${styles.sectionEyebrow}`}>Editorial Section Pattern</p>
            <h2 className={styles.sectionTitle}>How a section reads, top to bottom</h2>
            <p className={styles.sectionIntro}>
              Locked 2026-07-26. Do not change this sequence per
              section, and do not invent new font sizes for a
              section&rsquo;s title/statement/paragraph tiers.
            </p>
            <div className={styles.patternList}>
              <div className={styles.patternStep}>
                <span className={styles.patternNumber}>1</span>
                <p className={styles.patternText}><strong>Section title</strong> — H2, roman</p>
              </div>
              <div className={styles.patternStep}>
                <span className={styles.patternNumber}>2</span>
                <p className={styles.patternText}><strong>Optional statement(s)</strong> — H3/subtitle tier; short lines may be Cormorant Italic</p>
              </div>
              <div className={styles.patternStep}>
                <span className={styles.patternNumber}>3</span>
                <p className={styles.patternText}><strong>Editorial paragraph</strong> — body tier, roman prose</p>
              </div>
              <div className={styles.patternStep}>
                <span className={styles.patternNumber}>4</span>
                <p className={styles.patternText}><strong>Invitation / CTA</strong> — only when the section has a next step; reuse the existing button/label treatment, never a third CTA style</p>
              </div>
              <div className={styles.patternStep}>
                <span className={styles.patternNumber}>5</span>
                <p className={styles.patternText}><strong>Visual content</strong> — images, grids; the affirmation of what the copy invited, not a barrier ahead of it</p>
              </div>
            </div>
          </section>

          {/* ── MOBILE / RESPONSIVE BEHAVIOR ────────────────────────── */}
          <section className={styles.section}>
            <p className={`eyebrow ${styles.sectionEyebrow}`}>Mobile Behavior</p>
            <h2 className={styles.sectionTitle}>What scales, what holds flat</h2>
            <p className={styles.sectionIntro}>
              Only H1 and H2 step down at breakpoints. Every other tier
              — H3, H4, body, caption, small — holds one flat size at
              every viewport width, per Susan&rsquo;s &ldquo;Body: remain
              16px across breakpoints... never reduce below 16px&rdquo;
              instruction.
            </p>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Tier</th>
                  <th>Desktop</th>
                  <th>≤1024px</th>
                  <th>≤640px</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>H1</td>
                  <td>44px</td>
                  <td>38px</td>
                  <td>32px</td>
                </tr>
                <tr>
                  <td>H2</td>
                  <td>28px</td>
                  <td>26px</td>
                  <td>24px</td>
                </tr>
                <tr>
                  <td>H3 / Subheading</td>
                  <td colSpan={3}>20px, flat</td>
                </tr>
                <tr>
                  <td>H4</td>
                  <td colSpan={3}>16px, flat</td>
                </tr>
                <tr>
                  <td>Body</td>
                  <td colSpan={3}>16px, flat</td>
                </tr>
                <tr>
                  <td>Caption</td>
                  <td colSpan={3}>12px, flat</td>
                </tr>
                <tr>
                  <td>Small / Footer</td>
                  <td colSpan={3}>11px, flat</td>
                </tr>
              </tbody>
            </table>
          </section>

          <p className={styles.closingNote}>
            This guide documents the tokens and patterns approved on the
            homepage (Task #169). The remaining ~37 pages, shared Nav/
            Footer components, and a full responsive breakpoint audit
            (Tasks #170–172) are paused pending Susan&rsquo;s review of
            this page.
          </p>

        </main>
      </div>
      <Footer />
    </>
  )
}
