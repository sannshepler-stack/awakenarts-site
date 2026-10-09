// Symbol Cards — the marketing card system (2026-10-05, Rebuild Plan §4).
//
// Journey: Symbol Card → Symbol Portal → AwakenArts World.
//
// These are NOT the Christian Symbols vocabulary (src/data/symbols.ts) and
// NOT the Journal entries. Per Susan (2026-10-05) they serve a different
// purpose:
//   - FRONT: broad cultural, literary, historical or everyday meanings.
//   - BACK:  Christian / biblical meanings and relevant Scripture.
//   - Copy concise enough for a physical or digital card (~40 words a side).
//   - Each printed card carries a QR code to awakenarts.com/s/[slug], which
//     forwards to that symbol's Portal page.
//
// All copy below is approved by Susan, card by card. Nothing is invented.
// Any optional field left out simply does not render.
//
// A card appears on the homepage ("Begin with a Symbol") when `featured`
// is set, and gets its own Portal page at /symbols/[slug] as soon as it is
// listed here. Until then, /symbols/[slug] keeps serving the Christian
// Symbols page exactly as before.

export interface SymbolCard {
  /** URL name, lowercase, e.g. 'lamp'. Printed in the QR address — never change once cards are printed. */
  slug: string
  /** Display name, e.g. 'Lamp'. */
  name: string
  front: {
    /** Card artwork for the front, under /public. */
    image?: string
    imageAlt?: string
    /** 3–4 short phrases: cultural, literary, historical or everyday meanings. */
    meanings: string[]
    /** Optional everyday expression carrying the symbol. */
    expression?: string
  }
  back: {
    /** Optional artwork for the back. */
    image?: string
    imageAlt?: string
    /** 2–3 short Christian / biblical meanings. */
    meanings: string[]
    scripture?: { reference: string; text?: string; translation?: string }
  }
  /** Richer Portal content. Every field optional. */
  portal?: {
    /** Short paragraphs expanding the front's broad meanings. */
    broad?: string[]
    /** Short paragraphs expanding the Christian meaning. */
    christian?: string[]
    /** One reflective question. */
    question?: string
    /** One clear next step into the AwakenArts world. */
    next?: { label: string; href: string; note?: string }
    /** Slug in the Christian Symbols page, when the symbol also appears there. */
    christianSymbol?: string
  }
  /** Show on the homepage "Begin with a Symbol" section. */
  featured?: boolean
  /** One short reflective prompt for the homepage tile. */
  prompt?: string
}

export const symbolCards: SymbolCard[] = [
  // Order follows the Christian Symbols card grid. PATH is the master Symbol
  // Portal (approved by Susan, 2026-10-09). The other seven are DRAFTS for
  // Susan's review (2026-10-09): each follows the Path learning experience
  // (Learn → Recognize → Practice → Apply) while keeping its own character.
  // Card backs carry the Scripture and meanings already on Susan's finished
  // card art and in src/data/symbols.ts — nothing new is introduced there.

  // DRAFT — Lamp
  {
    slug: 'lamp',
    name: 'Lamp',
    front: {
      image: '/images/symbols/Lamp_Card_Front-opt.jpg',
      imageAlt: 'Lamp — card artwork',
      meanings: ['Light in darkness', 'Knowledge', 'Watchfulness', 'A welcome home'],
      expression: '“It shed light on the problem.” “She lit the way.” “We’ll leave the light on.”',
    },
    back: {
      meanings: ['Illumination', 'Discernment', 'The next step'],
      scripture: {
        reference: 'Psalm 119:105',
        text: 'Thy word is a lamp unto my feet, and a light unto my path.',
        translation: 'KJV',
      },
    },
    portal: {
      broad: [
        'Literally, a lamp is a small, contained light: oil and wick, later a bulb and a switch. Symbolically, it stands for whatever helps us see: knowledge, insight, or the care of someone waiting up.',
        'We reach for lamp and light language whenever understanding arrives. A fact sheds light on a problem, a teacher lights the way, and a porch light left on tells someone they are expected.',
        'A lamp can mean different things to different people: study late into the night, a vigil kept beside someone, a nightlight in a child’s room, or a light in the window for a traveler.',
      ],
      christian: [
        'In Scripture, the lamp is closely tied to God’s word. Psalm 119:105 calls God’s word a lamp to the feet and a light to the path. A lamp does not illuminate the whole road. There is light enough for where you stand, and perhaps for the next step.',
      ],
      question: 'What, in your life right now, gives you enough light to see by?',
      next: {
        label: 'Explore the Passage Reflection Path',
        href: '/journal/passage',
        note: 'The Lantern and The Path wait there for your writing.',
      },
      christianSymbol: 'lamp',
    },
  },

  // PATH — the master Symbol Portal (approved by Susan, 2026-10-09).
  // 2026-10-09: card back aligned with Susan's finished Path card
  // (Proverbs 3:6; Direction · Passage · What lies ahead). Psalm 119:105
  // is the Lamp card's verse.
  {
    slug: 'path',
    name: 'Path',
    front: {
      image: '/images/symbols/Path_Card_Front-opt.jpg',
      imageAlt: 'Path — card artwork',
      meanings: ['A journey', 'A direction chosen', 'Progress through time', 'A way others have walked'],
      expression: '“I’m at a crossroads.” “We went our separate ways.” “She’s found her path.”',
    },
    back: {
      meanings: ['Direction', 'Passage', 'What lies ahead'],
      scripture: {
        reference: 'Proverbs 3:6',
        text: 'In all thy ways acknowledge him, and he shall direct thy paths.',
        translation: 'KJV',
      },
    },
    portal: {
      broad: [
        'Literally, a path is simply a way through: worn by feet, marked by stones, leading somewhere. Symbolically, it describes a life: where we have been, where we are going, and the choices along the way.',
        'We speak in paths constantly. We stand at crossroads, take detours, lose our way, and find it again. Each phrase holds a picture of how we are moving through an experience.',
        'A path can mean different things to different people: adventure, duty, pilgrimage, the road home, or a way someone we loved once walked.',
      ],
      christian: [
        'In Scripture, the path can represent the way a person lives before God. Proverbs 3:6 connects acknowledging God in all one’s ways with having one’s paths directed. A path is made by passage. It belongs to what lies ahead.',
      ],
      question: 'If your life right now were a path, what would it look like where you are standing?',
      next: {
        label: 'Explore the Thresholds Reflection Path',
        href: '/journal/thresholds',
        note: 'Take this question into writing.',
      },
      christianSymbol: 'path',
    },
  },

  // DRAFT — Oil
  {
    slug: 'oil',
    name: 'Oil',
    front: {
      image: '/images/symbols/Oil_Card_Front-opt.jpg',
      imageAlt: 'Oil — card artwork',
      meanings: ['Nourishment', 'Healing', 'Fuel for light', 'Something precious kept'],
      expression: '“Pour oil on troubled waters.” “Burning the midnight oil.” “A well-oiled machine.”',
    },
    back: {
      meanings: ['Blessing', 'Abundance', 'Stewardship'],
      scripture: {
        reference: 'Proverbs 21:20',
        text: 'The wise store up choice food and olive oil…',
        translation: 'NIV',
      },
    },
    portal: {
      broad: [
        'Literally, oil is pressed from olives: food for the table, fuel for the lamp, a balm for dry skin. Symbolically, it carries what nourishes, soothes, and keeps a light burning.',
        'Our speech is full of it. We pour oil on troubled waters to calm a quarrel, burn the midnight oil to finish something that matters, and admire a team that runs like a well-oiled machine.',
        'Oil can mean different things to different people: a family kitchen, comfort in illness, an anointing at a sacred moment, or simply something too valuable to waste.',
      ],
      christian: [
        'In Scripture, oil is associated with blessing, anointing, and provision. Proverbs 21:20 pictures the wise storing up oil rather than using it carelessly. Oil represents an outpouring of blessings and abundance. It is to be valued, stored, and used with care.',
      ],
      question: 'What has been given to you that you want to use with care?',
      next: {
        label: 'Enter The Table Encounter',
        href: '/encounters/table',
        note: 'Continue with what is given and received.',
      },
      christianSymbol: 'oil',
    },
  },

  // DRAFT — Net
  {
    slug: 'net',
    name: 'Net',
    front: {
      image: '/images/symbols/Net_Card_Front-opt.jpg',
      imageAlt: 'Net — card artwork',
      meanings: ['Connection', 'Safety', 'Gathering in', 'A web of relationships'],
      expression: '“Cast a wide net.” “A safety net.” “She has a strong network.”',
    },
    back: {
      meanings: ['Gathering', 'Wide reach', 'The harvest'],
      scripture: {
        reference: 'Matthew 13:47',
        text: 'The kingdom of heaven is like a net that was let down into the lake and caught all kinds of fish.',
        translation: 'NIV',
      },
    },
    portal: {
      broad: [
        'Literally, a net is knotted cord made to gather and to hold. Symbolically, it stands for what connects us, and for what catches us when we fall.',
        'We speak in nets all the time. We cast a wide net when we search, rely on a safety net when things go wrong, and build a network of people we can call.',
        'A net can mean different things to different people: a fisherman’s livelihood, a family that holds together, support that catches you, or the feeling of being caught.',
      ],
      christian: [
        'In Scripture, Jesus compares the kingdom of heaven to a net let down into the lake that gathers all kinds of fish (Matthew 13:47), and several of his first disciples were fishermen called from their nets. The gospel is cast widely, gathering those within its reach. Yet not all of the harvest can be counted.',
      ],
      question: 'Who are the people who hold you, and whom do you hold?',
      next: {
        label: 'Enter The Deep Encounter',
        href: '/encounters/deep',
        note: 'Follow the net beneath the surface.',
      },
      christianSymbol: 'net',
    },
  },

  // DRAFT — Pearl
  {
    slug: 'pearl',
    name: 'Pearl',
    front: {
      image: '/images/symbols/Pearl_Card_Front-opt.jpg',
      imageAlt: 'Pearl — card artwork',
      meanings: ['Something precious', 'Beauty formed slowly', 'Wisdom', 'A milestone'],
      expression: '“Pearls of wisdom.” “The world is your oyster.” “A string of pearls for the occasion.”',
    },
    back: {
      meanings: ['Value', 'Recognition', 'Choosing'],
      scripture: {
        reference: 'Matthew 13:45–46',
        text: 'The Kingdom of Heaven is like a merchant in search of fine pearls.',
      },
    },
    portal: {
      broad: [
        'Literally, a pearl forms when an oyster coats a grain of irritation, layer by layer, until something luminous is made. Symbolically, it can stand for beauty or wisdom formed slowly, often out of difficulty.',
        'We use the image whenever something is rare and worth keeping. We pass on pearls of wisdom, wear pearls for a wedding or an anniversary, and hand down a grandmother’s necklace.',
        'A pearl can mean different things to different people: elegance, a milestone reached, a lesson hard-won, or the one thing worth giving everything else up for.',
      ],
      christian: [
        'In Scripture, Jesus tells of a merchant who finds one pearl of great value and sells everything he has to buy it (Matthew 13:45–46). Knowing God and abiding in Him is more valuable than earthly possessions.',
      ],
      question: 'What do you hold as precious, and how did you come to recognize its value?',
      next: {
        label: 'Explore the Time & Memory Reflection Path',
        href: '/journal/time-and-memory',
        note: 'Write about what you carry with you.',
      },
      christianSymbol: 'pearl',
    },
  },

  // DRAFT — Vine. Card back note: Susan’s Vine card image reads “beliving”;
  // spelled “believing” here.
  {
    slug: 'vine',
    name: 'Vine',
    front: {
      image: '/images/symbols/Vine_Card_Front-opt.jpg',
      imageAlt: 'Vine — card artwork',
      meanings: ['Growth', 'Connection', 'Generations', 'Patience and harvest'],
      expression: '“I heard it through the grapevine.” “Withering on the vine.” “The fruit of your labor.”',
    },
    back: {
      meanings: ['Connection', 'Abiding', 'Abundance'],
      scripture: {
        reference: 'John 15:5',
        text: 'I am the vine; you are the branches.',
        translation: 'NIV',
      },
    },
    portal: {
      broad: [
        'Literally, a vine is a climbing plant that must hold on to something to grow, and its branches bear fruit only while they stay attached. Symbolically, it describes connection: what we draw life from, and what grows from us.',
        'The image runs through ordinary speech. News travels through the grapevine, a plan left untended withers on the vine, and hard work yields the fruit of your labor.',
        'A vine can mean different things to different people: a family and its generations, a friendship grown over years, the patience of a vineyard, or celebration at harvest.',
      ],
      christian: [
        'In Scripture, Jesus says, “I am the vine; you are the branches” (John 15:5). To bear fruit, the branches must remain on the vine. It is through connection, following, and believing that we grow in abundance.',
      ],
      question: 'What are you connected to that helps you grow?',
      next: {
        label: 'Explore the Transformation Reflection Path',
        href: '/journal/transformation',
        note: 'Write about what is growing in you.',
      },
      christianSymbol: 'vine',
    },
  },

  // DRAFT — Gate
  {
    slug: 'gate',
    name: 'Gate',
    front: {
      image: '/images/symbols/Gate_Card_Front-opt.jpg',
      imageAlt: 'Gate — card artwork',
      meanings: ['Entrance', 'Boundary', 'Welcome', 'A threshold to cross'],
      expression: '“Right out of the gate.” “It opened the floodgates.” “He’s the gatekeeper.”',
    },
    back: {
      meanings: ['Discipleship', 'Difficulty', 'The way in'],
      scripture: {
        reference: 'Matthew 7:13',
        text: 'Enter through the narrow gate.',
        translation: 'NIV',
      },
    },
    portal: {
      broad: [
        'Literally, a gate is an opening in a wall or fence that can be shut. Symbolically, it marks a threshold: the place where we leave one space and enter another, and where someone decides who may come in.',
        'We speak in gates often. A race begins right out of the gate, one event opens the floodgates for many more, and a gatekeeper decides who gets access.',
        'A gate can mean different things to different people: welcome at a garden entrance, protection for a home, exclusion from a place we cannot enter, or a choice about which way to go.',
      ],
      christian: [
        'In Scripture, Jesus says, “Enter through the narrow gate” (Matthew 7:13), contrasting it with the wide road many take. A life of discipleship is difficult. The narrow gate leads away from self-interest toward true life.',
      ],
      question: 'What gate is in front of you right now?',
      next: {
        label: 'Explore the Thresholds Reflection Path',
        href: '/journal/thresholds',
        note: 'The Gate waits there for your writing.',
      },
      christianSymbol: 'gate',
    },
  },

  // DRAFT — Shepherd
  {
    slug: 'shepherd',
    name: 'Shepherd',
    front: {
      image: '/images/symbols/Shepherd_Card_Front-opt.jpg',
      imageAlt: 'Shepherd — card artwork',
      meanings: ['Care', 'Leadership', 'Protection', 'Watching over others'],
      expression: '“She shepherded the project through.” “He shepherded the group to safety.”',
    },
    back: {
      meanings: ['Guidance', 'Protection', 'Being known'],
      scripture: {
        reference: 'Psalm 23:1',
        text: 'The Lord is my shepherd; I shall not want.',
        translation: 'KJV',
      },
    },
    portal: {
      broad: [
        'Literally, a shepherd tends sheep: leading them to pasture and water, keeping watch at night, going after the one that strays. Symbolically, the shepherd stands for care that guides and protects.',
        'We use the word whenever someone leads with care. A teacher shepherds students through a hard year, and a leader shepherds a project to completion.',
        'A shepherd can mean different things to different people: a parent, a mentor, a pastor, someone who knew your name, or the one you have watched over yourself.',
      ],
      christian: [
        'In Scripture, Psalm 23 opens, “The Lord is my shepherd; I shall not want,” and in John 10:11 Jesus calls himself the Good Shepherd who lays down his life for the sheep. He guards His sheep. He gives His life for them.',
      ],
      question: 'Who has watched over you, and whom are you watching over now?',
      next: {
        label: 'Enter The Journey Encounter',
        href: '/encounters/journey',
        note: 'Begin the way with a guide.',
      },
      christianSymbol: 'shepherd',
    },
  },
]

export function getSymbolCard(slug: string): SymbolCard | undefined {
  return symbolCards.find((c) => c.slug === slug)
}

export function featuredSymbolCards(): SymbolCard[] {
  return symbolCards.filter((c) => c.featured)
}

/** The short, permanent address printed on the card. */
export function qrPath(slug: string): string {
  return `/s/${slug}`
}
