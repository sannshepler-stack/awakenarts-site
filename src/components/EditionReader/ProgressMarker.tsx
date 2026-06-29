// ProgressMarker — Implementation Spec v1.0, Section 5. A quiet "II of VIII"
// cue, deliberately not a progress bar: Task 3 rejects loading-style
// indicators for a reading experience meant to feel paced, not tracked.
// Roman numerals are generated, not hand-mapped, so this keeps working
// correctly if a future Edition's template grows past 8 sections.

const ROMAN_TABLE: [number, string][] = [
  [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
  [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
  [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
]

function toRoman(num: number): string {
  let n = num
  let result = ''
  for (const [value, symbol] of ROMAN_TABLE) {
    while (n >= value) {
      result += symbol
      n -= value
    }
  }
  return result
}

export default function ProgressMarker({ index, total }: { index: number; total: number }) {
  return (
    <p className="reader-progress" aria-live="polite">
      {toRoman(index + 1)} of {toRoman(total)}
    </p>
  )
}
