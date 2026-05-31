"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

/**
 * The Continuum — a quiet stopping place at the end of the encounter
 * sequence. Reached automatically by whichever encounter is currently
 * last (see /encounters/sequence.ts). Designed in the same dream-language
 * as the encounters themselves: black field, slow fade, italic Cormorant,
 * no instructional framing. The visitor is meant to feel held, not
 * stranded.
 *
 * Video support:
 *   If /videos/continuum.mp4 exists it plays at slowed pace and the dark
 *   field shows through behind it. If the file is missing or fails to
 *   load, the page degrades gracefully to the dark field with text only.
 *   To add a video later: drop the file at public/videos/continuum.mp4
 *   — no code change required.
 */
export default function ContinuumPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasVideo, setHasVideo] = useState(true);
  const [ended, setEnded] = useState(false);
  const [showLine1, setShowLine1] = useState(false);
  const [showExits, setShowExits] = useState(false);

  useEffect(() => {
    // Slowed playback if the video does load — matches the dream-pace
    // of the other encounters.
    const v = videoRef.current;
    if (v) {
      v.playbackRate = 0.5;
      v.play().catch(() => {});
    }
    // Pacing tuned to feel like the other encounters but slightly
    // slower at the end — this is rest, not advance.
    //   3.0s — first line begins to fade in
    //   6.0s — second line begins to fade in
    //  10.0s — quiet exits appear
    //   8.5s — brightness settles (only meaningful if a video is playing)
    const t1 = setTimeout(() => setShowLine1(true), 3000);
    const t3 = setTimeout(() => setShowExits(true), 10000);
    const tSettle = setTimeout(() => setEnded(true), 8500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t3);
      clearTimeout(tSettle);
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
      {/*
       * Ambient atmosphere — sits behind the optional video so it
       * acts as the page's own "presence" when no video is loaded.
       * When /videos/continuum.mp4 is added later, the video covers
       * these layers and they have no visual effect. See globals.css
       * (CONTINUUM — ambient atmosphere) for the gradient + breath.
       */}
      <div className="continuum-glow" aria-hidden="true" />
      <div className="continuum-vignette" aria-hidden="true" />

      {hasVideo && (
        <video
          ref={videoRef}
          src="/videos/continuum.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          onError={() => setHasVideo(false)}
          onEnded={(e) => {
            const v = e.currentTarget;
            v.pause();
            v.currentTime = Math.max(0, v.duration - 0.05);
          }}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: ended ? "brightness(0.55)" : "brightness(0.85)",
            transition: "filter 1.5s ease",
          }}
        />
      )}

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
          textShadow: "0 2px 18px rgba(0,0,0,0.7)",
          padding: "0 24px",
        }}
      >
        <p
          className={cormorant.className}
          style={{
            fontStyle: "italic",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            letterSpacing: "0.01em",
            lineHeight: 1.2,
            margin: 0,
            marginBottom: "3rem",
            opacity: showLine1 ? 1 : 0,
            transition: "opacity 2s ease",
          }}
        >
          The way continues.
        </p>

        <nav
          aria-label="Continue"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem 2rem",
            opacity: showExits ? 1 : 0,
            transition: "opacity 2s ease",
            pointerEvents: showExits ? "auto" : "none",
          }}
        >
          {[
            { href: "/path", label: "The Path" },
            { href: "/library", label: "The Library" },
            { href: "/gallery", label: "The Gallery" },
            { href: "/", label: "Home" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cormorant.className}
              style={{
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                fontStyle: "italic",
                fontSize: "1.5rem",
                letterSpacing: "0.06em",
                borderBottom: "1px solid rgba(255,255,255,0.25)",
                paddingBottom: "2px",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
