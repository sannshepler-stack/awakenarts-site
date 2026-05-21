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
//   sea · bridge · tree · key · poppy · church · glass · dove · angel · bowls
//   chessmen · lantern · forest · mountain · river · thread · bell · feather
//   gate · shadow · path · moon · mask · staircase · garden
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
]
