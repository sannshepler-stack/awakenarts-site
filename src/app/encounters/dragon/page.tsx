"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
import { getNextEncounter } from "../sequence";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export default function DragonEncounter() {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Single, continuous easing — no held first frame, no object-fit
  // swap. The dragon begins at a moderate size (already present, not
  // yet looming) and slowly grows into his full confrontational
  // presence over a single steady transition.
  const [expanding, setExpanding] = useState(false);
  const [ended, setEnded] = useState(false);
  const [showLine1, setShowLine1] = useState(false);
  const [showLine2, setShowLine2] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    //  0.0s — video begins playing immediately, dragon visible at his
    //         starting (medium) size against the black backdrop.
    //  0.5s — single 10-second steady scale begins. The dragon eases
    //         from medium to full-screen presence, growing into
    //         confrontation rather than appearing already large.
    //  ~10.5s — scale settles, brightness gently eases down.
    //  11.5s — first descriptive line begins to fade in.
    //  14.0s — second descriptive line begins to fade in.
    //  16.5s — the path forward appears.
    const v = videoRef.current;
    if (v) {
      // Slow the video so its 5.2s of content plays over ~10s — the
      // dragon's motion runs alongside the entire scale, finishing
      // roughly when the scale settles.
      v.playbackRate = 0.5;
      v.play().catch(() => {});
    }
    const tExpand = setTimeout(() => setExpanding(true), 500);
    const tSettle = setTimeout(() => setEnded(true), 10500);
    const t1 = setTimeout(() => setShowLine1(true), 11500);
    const t2 = setTimeout(() => setShowLine2(true), 14000);
    const t3 = setTimeout(() => setShowButton(true), 16500);
    return () => {
      clearTimeout(tExpand);
      clearTimeout(tSettle);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <main
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "#000",
      }}
    >
      <video
        ref={videoRef}
        src="/videos/dragon/dragon.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onLoadedMetadata={(e) => {
          // Apply the slowed playback rate as soon as metadata is
          // available so autoplay starts at the chosen pace rather
          // than full speed.
          const v = e.currentTarget;
          v.playbackRate = 0.5;
        }}
        onEnded={(e) => {
          // Pause on the last frame when the slowed video reaches
          // its end. Brightness has already settled earlier when the
          // scale reached its endpoint.
          const v = e.currentTarget;
          v.pause();
          v.currentTime = Math.max(0, v.duration - 0.05);
        }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          // Single object-fit throughout — `contain` keeps the whole
          // dragon visible at every moment of the transition. No
          // mid-flight swap to `cover`, which is what created the
          // erratic jump in the previous version.
          objectFit: "contain",
          transformOrigin: "center center",
          // Single steady scale: starts at 0.85 (medium, already
          // present but not yet looming), eases to 1.8 — enough to
          // overflow the wider dimension of a standard widescreen
          // viewport, so the dragon fills the screen edge-to-edge
          // at full presence (his top and bottom crop off, much
          // like the mermaid's head leaves her frame). 10s linear
          // for an unhurried easing into the confrontation.
          transform: expanding ? "scale(1.8)" : "scale(0.85)",
          filter: ended ? "brightness(0.7)" : "brightness(1)",
          transition: "transform 10s linear, filter 1.2s ease",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          textAlign: "center",
          color: "#fff",
          textShadow: "0 2px 12px rgba(0,0,0,0.6)",
          padding: "0 24px 8vh 24px",
          pointerEvents: "none",
        }}
      >
        <p
          style={{
            fontSize: "1.25rem",
            letterSpacing: "0.02em",
            margin: 0,
            marginBottom: "0.75rem",
            opacity: showLine1 ? 1 : 0,
            transition: "opacity 1.5s ease",
          }}
        >
          The dragon is both light and darkness.
        </p>

        <p
          style={{
            fontSize: "1.25rem",
            letterSpacing: "0.02em",
            margin: 0,
            marginBottom: "2rem",
            opacity: showLine2 ? 1 : 0,
            transition: "opacity 1.5s ease",
          }}
        >
          Wholeness holds both.
        </p>

        <Link
          href={getNextEncounter("dragon")}
          className={`encounter-forward ${cormorant.className}`}
          style={{
            color: "#fff",
            textDecoration: "none",
            fontStyle: "italic",
            fontSize: "1.5rem",
            letterSpacing: "0.01em",
            opacity: showButton ? 0.9 : 0,
            pointerEvents: showButton ? "auto" : "none",
            transition: "opacity 1.5s ease",
          }}
        >
          forward
        </Link>
      </div>
    </main>
  );
}
