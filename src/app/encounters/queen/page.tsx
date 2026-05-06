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

export default function QueenEncounterPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  // The queen is present immediately — no grow-in. She comes
  // forward at full screen from the start. The video has a white
  // border baked in, so we hold a slight constant zoom (scale 1.15)
  // to crop that border off the visible edges. Slowed playback
  // gives the encounter time to breathe.
  const [ended, setEnded] = useState(false);
  const [showLine1, setShowLine1] = useState(false);
  const [showLine2, setShowLine2] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    //  0.0s — video begins playing immediately at slowed pace, the
    //         queen present and full-screen from the start.
    //  ~8.3s — video reaches its end (2.9s at 0.35x).
    //  8.5s — brightness gently eases down.
    //  9.5s — first descriptive line begins to fade in.
    // 12.0s — second descriptive line begins to fade in.
    // 14.5s — the path forward appears.
    const v = videoRef.current;
    if (v) {
      v.playbackRate = 0.35;
      v.play().catch(() => {});
    }
    const tSettle = setTimeout(() => setEnded(true), 8500);
    const t1 = setTimeout(() => setShowLine1(true), 9500);
    const t2 = setTimeout(() => setShowLine2(true), 12000);
    const t3 = setTimeout(() => setShowButton(true), 14500);
    return () => {
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
        src="/videos/queen.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onLoadedMetadata={(e) => {
          // Apply the slowed playback rate as soon as metadata is
          // available so autoplay starts at the chosen pace.
          const v = e.currentTarget;
          v.playbackRate = 0.35;
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
          // `cover` plus a slight constant zoom (scale 1.15) keeps
          // the white border baked into the video off the visible
          // edges of the screen. No animation on the transform —
          // she is fully present from the first frame.
          objectFit: "cover",
          transformOrigin: "center center",
          transform: "scale(1.15)",
          filter: ended ? "brightness(0.7)" : "brightness(1)",
          transition: "filter 1.2s ease",
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
          You are leaving what once was.
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
          There is a Kingdom beyond the one that ends.
        </p>

        <Link
          href={getNextEncounter("queen")}
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
