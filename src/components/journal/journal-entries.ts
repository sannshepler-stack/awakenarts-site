// ─── Journal — Entry Data ────────────────────────────────────────────────────
// AwakenArts · /journal-prototype
//
// First ten Journal entries.
//
// Authoring conventions:
//   • orientation       — observational, not definitional ("often appear")
//   • reflectionPrompt  — invitational, second person, no directive language
//   • artPrompt         — gesture / materials / shapes, never instructive
//
// Future symbols queued for later expansion (do not add until prompts written):
//   sea · tree · poppy · church · glass · dove · angel · bowls · chessmen · path
// ─────────────────────────────────────────────────────────────────────────────

import type { JournalEntry } from './types'

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    slug: 'dragon',
    name: 'The Dragon',
    orientation:
      'Dragons often appear in stories where something powerful must be faced, guarded, or understood.',
    reflectionPrompt:
      'What challenge in your life currently feels larger or more powerful than you know how to approach?',
    artPrompt:
      'Create a page using layered textures, shapes, or marks that represent something difficult to approach directly.',
  },
  {
    slug: 'ship',
    name: 'The Ship',
    orientation:
      'Ships often suggest transition, distance, risk, and movement between one place and another.',
    reflectionPrompt:
      'What part of your life feels suspended between departure and arrival?',
    artPrompt:
      'Use lines, maps, waves, or fragments of writing to create a visual sense of movement.',
  },
  {
    slug: 'butterfly',
    name: 'The Butterfly',
    orientation:
      'Butterflies often appear around change, fragility, and emerging identity.',
    reflectionPrompt:
      'What part of yourself feels unfinished, changing, or newly emerging?',
    artPrompt:
      'Create layered forms using torn paper, transparent materials, or repeated shapes to explore change.',
  },
  {
    slug: 'hourglass',
    name: 'The Hourglass',
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
    orientation:
      'Mirrors suggest recognition, identity, memory, and the tension between appearance and truth.',
    reflectionPrompt:
      'What have you recently noticed about yourself that is difficult to ignore?',
    artPrompt:
      'Use repetition, reflective shapes, or fragmented imagery to explore self-perception.',
  },
  {
    slug: 'crossroads',
    name: 'The Crossroads',
    orientation:
      'Crossroads appear where direction, uncertainty, and decision meet.',
    reflectionPrompt:
      'What decision or tension in your life currently feels unresolved?',
    artPrompt:
      'Create intersecting paths, marks, or layered directions across the page.',
  },
  {
    slug: 'window',
    name: 'The Window',
    orientation:
      'Windows suggest perspective, longing, separation, and the possibility of seeing differently.',
    reflectionPrompt:
      'What perspective might you need to reconsider right now?',
    artPrompt:
      'Frame parts of the page as openings, borders, or partial views.',
  },
  {
    slug: 'crown',
    name: 'The Crown',
    orientation:
      'Crowns can suggest responsibility, visibility, inheritance, or the burden of identity.',
    reflectionPrompt:
      'What role or responsibility currently feels heavy to carry?',
    artPrompt:
      'Create a symbolic object using repeated shapes, marks, or materials associated with authority or expectation.',
  },
  {
    slug: 'flame',
    name: 'The Flame',
    orientation:
      'Flames often appear where energy, danger, memory, and endurance meet.',
    reflectionPrompt:
      'What in your life still feels alive beneath exhaustion or uncertainty?',
    artPrompt:
      'Use layered warm and dark tones to represent intensity, endurance, or renewal.',
  },
  {
    slug: 'doorway',
    name: 'The Doorway',
    orientation:
      'Doorways suggest thresholds, invitation, uncertainty, and movement into unfamiliar space.',
    reflectionPrompt:
      'What possibility or change feels near but not fully entered?',
    artPrompt:
      'Create visual openings, frames, or layered entrances across the page.',
  },
  {
    slug: 'key',
    name: 'The Key',
    orientation:
      'Keys often suggest access, secrecy, permission, or the possibility of opening something long closed.',
    reflectionPrompt:
      'What part of your life feels ready to be opened, understood, or approached differently?',
    artPrompt:
      'Create marks, layers, or shapes that suggest hidden compartments, locks, or openings.',
  },
  {
    slug: 'bridge',
    name: 'The Bridge',
    orientation:
      'Bridges appear where connection, transition, distance, or reconciliation become necessary.',
    reflectionPrompt:
      'What relationship, idea, or part of yourself feels difficult to cross toward right now?',
    artPrompt:
      'Create a page that visually connects two separated spaces.',
  },
  {
    slug: 'bell',
    name: 'The Bell',
    orientation:
      'Bells often symbolize attention, interruption, memory, or moments that ask to be noticed.',
    reflectionPrompt:
      'What in your life has been asking quietly for your attention?',
    artPrompt:
      'Experiment with repeated circular marks, echoes, or radiating patterns.',
  },
  {
    slug: 'thread',
    name: 'The Thread',
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
    orientation:
      'Gardens often reflect cultivation, patience, hidden growth, and changing seasons.',
    reflectionPrompt:
      'What part of your life requires care rather than force?',
    artPrompt:
      'Build layered organic forms using repeated growth-like shapes or textures.',
  },
  {
    slug: 'staircase',
    name: 'The Staircase',
    orientation:
      'Staircases suggest movement between levels of awareness, effort, uncertainty, or progression.',
    reflectionPrompt:
      'Where in your life do you feel caught between one stage and another?',
    artPrompt:
      'Create ascending or descending movement using repeated forms or shifting perspective.',
  },
  {
    slug: 'mask',
    name: 'The Mask',
    orientation:
      'Masks often symbolize protection, performance, concealment, or identity.',
    reflectionPrompt:
      'What part of yourself feels visible to others, and what remains hidden?',
    artPrompt:
      'Divide the page into visible and concealed sections using overlays or fragmented imagery.',
  },
  {
    slug: 'forest',
    name: 'The Forest',
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
    orientation:
      'Feathers often symbolize lightness, memory, fragility, or fleeting presence.',
    reflectionPrompt:
      'What are you trying too hard to hold onto?',
    artPrompt:
      'Use delicate line-work or repeated drifting forms across the page.',
  },
  {
    slug: 'moon',
    name: 'The Moon',
    orientation:
      'The moon often reflects cycles, reflection, distance, and emotional atmosphere.',
    reflectionPrompt:
      'What pattern or cycle keeps returning in your life?',
    artPrompt:
      'Experiment with repeated circular forms, phases, or gradual shifts in tone.',
  },
  {
    slug: 'river',
    name: 'The River',
    orientation:
      'Rivers often symbolize movement, persistence, surrender, and changing direction.',
    reflectionPrompt:
      'Where in your life do you feel resistance to movement or change?',
    artPrompt:
      'Use flowing lines, layered marks, or gradual transitions across the page.',
  },
  {
    slug: 'gate',
    name: 'The Gate',
    orientation:
      'Gates suggest permission, limitation, separation, or the possibility of entry.',
    reflectionPrompt:
      'What boundary in your life feels necessary right now?',
    artPrompt:
      'Create visual thresholds, barriers, or openings within the page.',
  },
  {
    slug: 'lantern',
    name: 'The Lantern',
    orientation:
      'Lanterns often symbolize guidance, attention, endurance, or carrying light through uncertainty.',
    reflectionPrompt:
      'What helps you continue when clarity feels limited?',
    artPrompt:
      'Create contrast between illuminated and shadowed areas of the page.',
  },
  {
    slug: 'mountain',
    name: 'The Mountain',
    orientation:
      'Mountains suggest endurance, perspective, difficulty, and long effort.',
    reflectionPrompt:
      'What challenge in your life requires patience rather than speed?',
    artPrompt:
      'Use layered elevation, texture, or repeated forms to create a sense of ascent.',
  },
  {
    slug: 'shadow',
    name: 'The Shadow',
    orientation:
      'Shadows often appear where uncertainty, memory, fear, or unrecognized aspects of the self remain present.',
    reflectionPrompt:
      'What feeling or experience have you been reluctant to examine closely?',
    artPrompt:
      'Experiment with obscured forms, layered dark tones, or partially hidden imagery.',
  },
]
