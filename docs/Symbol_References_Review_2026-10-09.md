# Symbol References — Pre-Publication Review

Reviewed 2026-10-09 against the site's published content: 8 Symbol Cards, 20 Symbol Vocabulary entries, 23 ready Journal entries (35 total, 12 not yet ready), and 5 Christian Encounters.

**Status:** 65 entries received, all `draft`. Integrated on the `home/symbol-references` branch. Nothing displays publicly until an entry's `status` is changed to `approved` in `src/data/symbol-references.json`. Draft entries never reach the browser.

## How the search now behaves

1. Published AwakenArts content (Symbol Cards, Vocabulary, Journal, Encounters) is searched first, exactly as before.
2. Approved references follow, matched by name or "also found as" form, including multi-word forms such as "olive branch" and "eagle's wings".
3. A reference is **not shown** when its symbol already has published AwakenArts content, so published work always takes priority.
4. Related symbols link only when they resolve to a published route. Otherwise they are dropped silently.
5. A Practice of Attention, the Journal, and Make Your Own Word Art remain the continuation whenever there is no published entry, including symbols with only a reference and symbols not in the library at all.
6. Search stays entirely in the browser. Nothing typed is stored or sent.

## 1. Duplicate content: reference names that already have published entries (31)

Under rule 3, these references would never show. Each needs a decision: retire it, keep it as source material, or rename it.

| Reference | Already published as |
|---|---|
| Path | Symbol Card, Vocabulary (Journal entry not yet ready) |
| Lamp | Symbol Card, Vocabulary, Encounter *The Word* |
| Gate | Symbol Card, Vocabulary, Journal (Thresholds) |
| Pearl, Vine, Shepherd, Net | Symbol Card + Vocabulary |
| Tree, Seed, Bread, Light, Door, Flower, Anchor, Stone, Cup | Vocabulary |
| Water | Vocabulary, Encounter *The Deep* |
| Crown | Vocabulary, Journal (Power and Identity) |
| Table | Encounter *The Table* |
| Feather, Butterfly, River, Mountain, Moon | Journal (Transformation) |
| Bridge, Crossroads, Window | Journal (Thresholds) |
| Key | Journal (Power and Identity) |
| Garden, Mirror, Hourglass | Journal (Time and Memory) |

**34 references remain** that could appear once approved: Eagle, Dove, Cross, Lily, Rose, Bird, Nest, Boat, Fish, Wall, Ring, Tattoo, Photograph, Keepsake, Necklace, Watch, Compass, Map, Valley, Desert, Fruit, Harvest, Fire, Candle, Star, Sun, Rainbow, Foundation, Threshold, Book, Sheep, Olive Branch, Pearl Necklace, Cocoon.

Dove has a Journal entry that is **not yet ready**. Once that entry is marked ready, the Dove reference will step aside automatically.

## 2. Mapping issues

### Aliases that collide with published entries
These will show a reference alongside a *different* published entry:

- Fire ← "flame", "flames" (Journal: *The Flame*)
- Lamp ← "lantern" (Journal: *The Lantern*). Inactive while Lamp is suppressed.
- Gate ← "doorway" (Journal: *The Doorway*). Inactive while Gate is suppressed.
- Boat ← "ship" (Journal: *The Ship*)

### Aliases shared between two references
- "sheep": Shepherd and Sheep
- "sunlight": Light and Sun

### Aliases likely to produce unintended matches
Everyday words that will match ordinary sentences: Path ← "way", "road"; Water ← "well"; Ring ← "band"; Tattoo ← "ink"; Necklace ← "chain"; Shepherd ← "staff"; Photograph ← "picture"; Stone ← "rock"; Mirror ← "reflection"; Light ← "illumination"; Lily ← "flower lily" (Flower is its own entry); Flower ← "rose flower" (Rose is its own entry).

### Related links that resolve to no published route (22 links dropped, not linked)

| Related name | Referenced from |
|---|---|
| dove | Feather, Bird, Nest, Tattoo, Olive Branch |
| ring | Photograph, Keepsake, Necklace |
| table | Bread, Cup *(resolvable to Encounter /encounters/table if you approve Encounters as a link target)* |
| lily | Flower, Rose |
| boat | Anchor, Net |
| eagle | Bird |
| cross | Ring |
| keepsake | Watch |
| compass | Map |
| fruit | Harvest |
| star | Moon |
| watch | Hourglass |
| necklace | Pearl Necklace |

Of 129 related links, 107 resolve: 50 to Symbol Card portals, 54 to Vocabulary anchors, 3 to Journal entries.

**Pattern to note:** "lamp" and "path" appear as related links on 20+ entries, often without a clear connection (Eagle → lamp, path; Dove → lamp, vine; Cross → light, path; Star → light, path). This gives the impression that every symbol leads back to the same two cards.

## 3. Overlapping content within the database

These pairs or groups cover close ground and may read as repetitive:

- Pearl / Pearl Necklace / Necklace
- Flower / Lily / Rose
- Fire / Candle / Light / Lamp
- Gate / Door / Threshold
- Bird / Dove / Eagle / Feather / Nest
- Butterfly / Cocoon
- Stone / Foundation
- Watch / Hourglass
- Shepherd / Sheep

## 4. Entries for editorial review (biblical context and nuance)

- **Rainbow**: "diversity" in *can suggest* carries a contemporary association that may not fit a Christian audience, and it is not in Genesis 9.
- **Key**: Matthew 16:19 (keys of the kingdom) is read differently across traditions.
- **Book**: Revelation 20:12 is the book of judgment, an uneasy fit for "learning; memory; story".
- **Wall**: Joshua 6:20 shows walls falling, while the entry leads with "protection".
- **Sheep**: alias "lamb" folds in the Lamb of God (John 1:29), a distinct Christological image.
- **Cross**: alias "crucifix" carries a denominational distinction.
- **Olive Branch**: Genesis 8:11 is an olive *leaf*. The note says so, but the name and Scripture pairing should be checked.
- **Mirror**: James 1:23–24 is about hearing without doing. 1 Corinthians 13:12 may fit "recognition" better.
- **Cup**: Psalm 23:5 (overflowing) and Matthew 26:39 (Gethsemane) pull in opposite directions under one entry.
- **Fire**: "testing" with Exodus 3:2 and Acts 2:3. Neither passage is about testing.
- **Desert**: Exodus 16:1 is the wilderness of Sin, which differs from the general "wilderness" in the alias.
- **Dove**: "Spirit" is capitalized in *can suggest*. Confirm the intent.

## 5. Field checks

No duplicate names. No duplicate reflection questions. Every entry tagged *biblical* has Scripture, and every entry with Scripture is tagged *biblical*. `portal_url` is blank on all entries as intended. The `link_symbols`, `link_journal`, and `link_word_art` fields are identical on every entry, so the site uses its own continuation links in their place.
