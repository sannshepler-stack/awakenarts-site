"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Cormorant_Garamond } from "next/font/google";
import { getFirstEncounterPath } from "./sequence";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

const STEP_WORDS = ["Begin the Encounter"] as const;

// ── TIMING ──────────────────────────────────────────────────────────
// The intro video is 11.2 seconds long. The reveal phrase needs to
// surface early enough that a visitor isn't left waiting in silence,
// wondering whether anything is going to happen — it should arrive
// while the video is still unfolding, not at its close.
//
// REVEAL_AT_MS:  when the phrase begins fading in, measured from page load
// FADE_MS:       how long the fade itself takes
//
// With the values below: fade starts at 4.5s and completes at 5.1s —
// early enough to be discovered quickly, while still letting the
// video establish its mood first. To tune, only change these two
// numbers.
// ────────────────────────────────────────────────────────────────────
const REVEAL_AT_MS = 4500;
const FADE_MS = 600;

// Slightly slower than natural speed — gives the opening a more
// unhurried, contemplative pace without dragging.
const PLAYBACK_RATE = 0.85;

export default function EncountersPage() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement | null>(null);
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

  // Slow the intro slightly for a more unhurried opening. Set on the
  // element directly (no HTML attribute exists for playback rate),
  // and re-applied on loadedmetadata in case the browser resets it.
  const applyPlaybackRate = () => {
    const v = videoRef.current;
    if (v) v.playbackRate = PLAYBACK_RATE;
  };

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
        ref={videoRef}
        src="/videos/intro.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onLoadedMetadata={applyPlaybackRate}
        onPlay={applyPlaybackRate}
        onEnded={handleVideoEnded}
        onError={handleVideoError}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          // A faint warm-gold cast over the opening footage —
          // sepia + hue-rotate + saturation, kept subtle so the
          // image still reads naturally rather than as a filter.
          filter: "sepia(0.22) saturate(1.18) hue-rotate(-12deg) brightness(0.97)",
          pointerEvents: "none",
        }}
      />

      {/* Soft gold wash layered over the video — reinforces the tint
          without flattening contrast, and warms the black margins
          the video doesn't fill. */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(201,168,76,0.10) 0%, rgba(28,43,58,0.28) 100%)",
          mixBlendMode: "overlay",
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
            fontSize: "clamp(1.5rem, 4vw, 2.6rem)",
            letterSpacing: "0.01em",
            lineHeight: 1.25,
            whiteSpace: "normal",
            maxWidth: "90vw",
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
