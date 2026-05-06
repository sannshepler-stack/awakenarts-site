"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Cormorant_Garamond } from "next/font/google";
import { getFirstEncounterPath } from "./sequence";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

const STEP_WORDS = ["enter"] as const;

// ── TIMING ──────────────────────────────────────────────────────────
// The intro video is 11.2 seconds long. We want "enter" to be fully
// visible roughly a second before the video ends, so it feels like the
// word arrives WITH the closing beat, not after it.
//
// REVEAL_AT_MS:  when "enter" begins fading in, measured from page load
// FADE_MS:       how long the fade itself takes
//
// With the values below: fade starts at 6.5s, completes at 7.1s, and
// the video ends at 11.2s — leaving "enter" present and waiting for
// the final ~4 seconds of the video, so it's clearly part of the
// sequence rather than an afterthought. To tune, only change these
// two numbers.
// ────────────────────────────────────────────────────────────────────
const REVEAL_AT_MS = 6500;
const FADE_MS = 600;

export default function EncountersPage() {
  const router = useRouter();
  // step = 0 → "enter" hidden
  // step = 1 → "enter" visible
  // click after "enter" appears → navigate to mermaid
  const [step, setStep] = useState(0);

  // Single deterministic timer, started on mount. No dependence on
  // video-element events for the primary reveal — those proved
  // unreliable across browsers and dev/prod environments.
  useEffect(() => {
    const t = setTimeout(() => setStep(1), REVEAL_AT_MS);
    return () => clearTimeout(t);
  }, []);

  // Safety nets — if anything goes wrong with the video or the page
  // sits longer than expected, still surface "enter" so the visitor
  // is never stranded.
  const handleVideoEnded = () => setStep(1);
  const handleVideoError = () => setStep(1);

  const handleAdvance = () => {
    if (step === 0) return; // wait for "enter" to appear
    if (step < STEP_WORDS.length) {
      setStep((s) => s + 1);
    } else {
      router.push(getFirstEncounterPath());
    }
  };

  return (
    <main
      onClick={handleAdvance}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "#000",
        cursor: step >= 1 ? "pointer" : "default",
      }}
    >
      <video
        src="/videos/intro.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleVideoEnded}
        onError={handleVideoError}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#fff",
          textShadow: "0 2px 18px rgba(0,0,0,0.65)",
          padding: "0 24px",
          pointerEvents: "none",
        }}
      >
        <div
          className={cormorant.className}
          style={{
            color: "#fff",
            fontStyle: "italic",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "0.01em",
            lineHeight: 1.15,
            whiteSpace: "nowrap",
          }}
        >
          {STEP_WORDS.map((word, i) => (
            <span
              key={word}
              style={{
                display: "inline-block",
                opacity: step > i ? 1 : 0,
                transform: step > i ? "translateY(0)" : "translateY(6px)",
                transition:
                  `opacity ${FADE_MS}ms ease, transform ${FADE_MS}ms ease`,
                marginRight: i === STEP_WORDS.length - 1 ? 0 : "0.3em",
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
