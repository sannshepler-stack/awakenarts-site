// ─── Journal — Entry Data ────────────────────────────────────────────────────
// AwakenArts · The Journal
//
// Single source of truth for Journal content. The /journal index and every
// /journal/<territory> page reads from this array via the helpers in
// get-entries.ts. Do NOT hardcode entries into individual pages.
//
// Organization follows the five symbolic territories defined in
// categories.ts. Entries are grouped by territory in this file for
// readability; the helpers preserve this order when filtering.
//
// Authoring conventions:
//   • orientation       — observational, not definitional ("often appear")
//   • reflectionPrompt  — invitational, second person, no directive language
//   • artPrompt         — gesture / materials / shapes, never instructive
//
// Future symbols (placed in territories but awaiting prompts — do not
// invent prompts; wait for Susan):
//   Passage           — path, sea, dove
//   Time & Memory     — church, poppy, glass
//   Power & Identity  — king, chessmen, angel, bowls
//
// Set aside (preserved at end of file in a comment block, not part of the
// current architecture):
//   mountain          — original prompts retained for possible future
//                       restoration in a territory of Susan's choice
// ─────────────────────────────────────────────────────────────────────────────

import type { JournalEntry } from './types'

export const JOURNAL_ENTRIES: ReadonlyArray<JournalEntry> = [
  // ─── Thresholds ──────────────────────────────────────────────────────────
  {
    slug: 'doorway',
    name: 'The Doorway',
    categorySlug: 'thresholds',
    orientation:
      'Doorways suggest thresholds, invitation, uncertainty, and movement into unfamiliar space.',
    reflectionPrompt:
      'What possibility or change feels near but not fully entered?',
    artPrompt:
      'Create visual openings, frames, or layered entrances across the page.',
  },
  {
    slug: 'gate',
    name: 'The Gate',
    categorySlug: 'thresholds',
    orientation:
      'Gates suggest permission, limitation, separation, or the possibility of entry.',
    reflectionPrompt:
      'What boundary in your life feels necessary right now?',
    artPrompt:
      'Create visual thresholds, barriers, or openings within the page.',
  },
  {
    slug: 'window',
    name: 'The Window',
    categorySlug: 'thresholds',
    orientation:
      'Windows suggest perspective, longing, separation, and the possibility of seeing differently.',
    reflectionPrompt:
      'What perspective might you need to reconsider right now?',
    artPrompt:
      'Frame parts of the page as openings, borders, or partial views.',
  },
  {
    slug: 'crossroads',
    name: 'The Crossroads',
    categorySlug: 'thresholds',
    orientation:
      'Crossroads appear where direction, uncertainty, and decision meet.',
    reflectionPrompt:
      'What decision or tension in your life currently feels unresolved?',
    artPrompt:
      'Create intersecting paths, marks, or layered directions across the page.',
  },
  {
    slug: 'bridge',
    name: 'The Bridge',
    categorySlug: 'thresholds',
    orientation:
      'Bridges appear where connection, transition, distance, or reconciliation become necessary.',
    reflectionPrompt:
      'What relationship, idea, or part of yourself feels difficult to cross toward right now?',
    artPrompt:
      'Create a page that visually connects two separated spaces.',
  },
  {
    slug: 'staircase',
    name: 'The Staircase',
    categorySlug: 'thresholds',
    orientation:
      'Staircases suggest movement between levels of awareness, effort, uncertainty, or progression.',
    reflectionPrompt:
      'Where in your life do you feel caught between one stage and another?',
    artPrompt:
      'Create ascending or descending movement using repeated forms or shifting perspective.',
  },

  // ─── Transformation ──────────────────────────────────────────────────────
  {
    slug: 'butterfly',
    name: 'The Butterfly',
    categorySlug: 'transformation',
    orientation:
      'Butterflies often appear around change, fragility, and emerging identity.',
    reflectionPrompt:
      'What part of yourself feels unfinished, changing, or newly emerging?',
    artPrompt:
      'Create layered forms using torn paper, transparent materials, or repeated shapes to explore change.',
  },
  {
    slug: 'flame',
    name: 'The Flame',
    categorySlug: 'transformation',
    orientation:
      'Flames often appear where energy, danger, memory, and endurance meet.',
    reflectionPrompt:
      'What in your life still feels alive beneath exhaustion or uncertainty?',
    artPrompt:
      'Use layered warm and dark tones to represent intensity, endurance, or renewal.',
  },
  {
    slug: 'river',
    name: 'The River',
    categorySlug: 'transformation',
    orientation:
      'Rivers often symbolize movement, persistence, surrender, and changing direction.',
    reflectionPrompt:
      'Where in your life do you feel resistance to movement or change?',
    artPrompt:
      'Use flowing lines, layered marks, or gradual transitions across the page.',
  },
  {
    slug: 'moon',
    name: 'The Moon',
    categorySlug: 'transformation',
    orientation:
      'The moon often reflects cycles, reflection, distance, and emotional atmosphere.',
    reflectionPrompt:
      'What pattern or cycle keeps returning in your life?',
    artPrompt:
      'Experiment with repeated circular forms, phases, or gradual shifts in tone.',
  },
  {
    slug: 'shadow',
    name: 'The Shadow',
    categorySlug: 'transformation',
    orientation:
      'Shadows often appear where uncertainty, memory, fear, or unrecognized aspects of the self remain present.',
    reflectionPrompt:
      'What feeling or experience have you been reluctant to examine closely?',
    artPrompt:
      'Experiment with obscured forms, layered dark tones, or partially hidden imagery.',
  },
  {
    slug: 'forest',
    name: 'The Forest',
    categorySlug: 'transformation',
    orientation:
      'Forests appear where uncertainty, instinct, mystery, and discovery overlap.',
    reflectionPrompt:
      'What situation in your life currently feels difficult to see through clearly?',
    artPrompt:
      'Layer marks, textures, or shapes to create density, obscurity, or hidden pathways.',
  },
  {
    slug: 'feather',
    name: 'The Feather',
    categorySlug: 'transformation',
    orientation:
      'Feathers often symbolize lightness, memory, fragility, or fleeting presence.',
    reflectionPrompt:
      'What are you trying too hard to hold onto?',
    artPrompt:
      'Use delicate line-work or repeated drifting forms across the page.',
  },

  // ─── Passage ─────────────────────────────────────────────────────────────
  // Also belonging here (awaiting prompts): path, sea, dove.
  {
    slug: 'ship',
    name: 'The Ship',
    categorySlug: 'passage',
    orientation:
      'Ships often suggest transition, distance, risk, and movement between one place and another.',
    reflectionPrompt:
      'What part of your life feels suspended between departure and arrival?',
    artPrompt:
      'Use lines, maps, waves, or fragments of writing to create a visual sense of movement.',
  },
  {
    slug: 'lantern',
    name: 'The Lantern',
    categorySlug: 'passage',
    orientation:
      'Lanterns often symbolize guidance, attention, endurance, or carrying light through uncertainty.',
    reflectionPrompt:
      'What helps you continue when clarity feels limited?',
    artPrompt:
      'Create contrast between illuminated and shadowed areas of the page.',
  },
  {
    slug: 'bell',
    name: 'The Bell',
    categorySlug: 'passage',
    orientation:
      'Bells often symbolize attention, interruption, memory, or moments that ask to be noticed.',
    reflectionPrompt:
      'What in your life has been asking quietly for your attention?',
    artPrompt:
      'Experiment with repeated circular marks, echoes, or radiating patterns.',
  },

  // ─── Time & Memory ───────────────────────────────────────────────────────
  // Also belonging here (awaiting prompts): church, poppy, glass.
  {
    slug: 'hourglass',
    name: 'The Hourglass',
    categorySlug: 'time-and-memory',
    orientation:
      'Hourglasses remind us of passing seasons, waiting, endings, and the visible movement of time.',
    reflectionPrompt:
      'Where do you feel pressure from time in your current season of life?',
    artPrompt:
      'Create a page divided into two spaces: what is leaving and what is arriving.',
  },
  {
    slug: 'mirror',
    name: 'The Mirror',
    categorySlug: 'time-and-memory',
    orientation:
      'Mirrors suggest recognition, identity, memory, and the tension between appearance and truth.',
    reflectionPrompt:
      'What have you recently noticed about yourself that is difficult to ignore?',
    artPrompt:
      'Use repetition, reflective shapes, or fragmented imagery to explore self-perception.',
  },
  {
    slug: 'thread',
    name: 'The Thread',
    categorySlug: 'time-and-memory',
    orientation:
      'Threads can symbolize continuity, repair, memory, or the attempt to hold something together.',
    reflectionPrompt:
      'What connection in your life feels fragile but important to preserve?',
    artPrompt:
      'Use stitching, line-work, or layered pathways to create a sense of connection.',
  },
  {
    slug: 'garden',
    name: 'The Garden',
    categorySlug: 'time-and-memory',
    orientation:
      'Gardens often reflect cultivation, patience, hidden growth, and changing seasons.',
    reflectionPrompt:
      'What part of your life requires care rather than force?',
    artPrompt:
      'Build layered organic forms using repeated growth-like shapes or textures.',
  },

  // ─── Power & Identity ────────────────────────────────────────────────────
  // Also belonging here (awaiting prompts): king, chessmen, angel, bowls.
  {
    slug: 'crown',
    name: 'The Crown',
    categorySlug: 'power-and-identity',
    orientation:
      'Crowns can suggest responsibility, visibility, inheritance, or the burden of identity.',
    reflectionPrompt:
      'What role or responsibility currently feels heavy to carry?',
    artPrompt:
      'Create a symbolic object using repeated shapes, marks, or materials associated with authority or expectation.',
  },
  {
    slug: 'dragon',
    name: 'The Dragon',
    categorySlug: 'power-and-identity',
    orientation:
      'Dragons often appear in stories where something powerful must be faced, guarded, or understood.',
    reflectionPrompt:
      'What challenge in your life currently feels larger or more powerful than you know how to approach?',
    artPrompt:
      'Create a page using layered textures, shapes, or marks that represent something difficult to approach directly.',
  },
  {
    slug: 'mask',
    name: 'The Mask',
    categorySlug: 'power-and-identity',
    orientation:
      'Masks often symbolize protection, performance, concealment, or identity.',
    reflectionPrompt:
      'What part of yourself feels visible to others, and what remains hidden?',
    artPrompt:
      'Divide the page into visible and concealed sections using overlays or fragmented imagery.',
  },
  {
    slug: 'key',
    name: 'The Key',
    categorySlug: 'power-and-identity',
    orientation:
      'Keys often suggest access, secrecy, permission, or the possibility of opening something long closed.',
    reflectionPrompt:
      'What part of your life feels ready to be opened, understood, or approached differently?',
    artPrompt:
      'Create marks, layers, or shapes that suggest hidden compartments, locks, or openings.',
  },
]

// ─── Set aside — not currently mapped to a territory ─────────────────────────
// Mountain was authored in an earlier prototype but is not placed in the
// five-territory architecture. Prompts preserved below. To restore: pick
// a categorySlug, uncomment, and add to JOURNAL_ENTRIES in the appropriate
// section above.
//
// {
//   slug: 'mountain',
//   name: 'The Mountain',
//   categorySlug: '???',  // territory to be chosen by Susan
//   orientation:
//     'Mountains suggest endurance, perspective, difficulty, and long effort.',
//   reflectionPrompt:
//     'What challenge in your life requires patience rather than speed?',
//   artPrompt:
//     'Use layered elevation, texture, or repeated forms to create a sense of ascent.',
// },
