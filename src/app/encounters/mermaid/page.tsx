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

export default function MermaidEncounterPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  // The descent has two movements:
  //   stage 1 — the main descent: a 9-second steady scale from
  //     full presence to tail-focus, running underneath the
  //     swimming video.
  //   stage 2 — the deepening: when the main descent and the
  //     video both reach their endpoint, the camera does not
  //     fully stop. It transitions into a much slower, almost
  //     imperceptible drift inward (~45s), so the visitor never
  //     registers an "end." The unconscious never quite finishes
  //     opening.
  const [stage, setStage] = useState<0 | 1 | 2>(0);
  const [ended, setEnded] = useState(false);
  const [showLine1, setShowLine1] = useState(false);
  const [showLine2, setShowLine2] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    //  0.0s — the mermaid begins moving the moment the page arrives.
    //         No pre-pause, no held first frame. She is alive from
    //         the start.
    //  0.5s — single 12.5-second steady descent begins; camera scales
    //         from origin center-bottom so the tail stays planted
    //         while the head slowly leaves the frame. The descent
    //         lands while the tail is still visibly swimming.
    // ~13.0s — descent endpoint reached. The video, slowed to 0.78x,
    //         reaches its own end on roughly the same beat — so the
    //         tail's motion settles into stillness right as the
    //         camera does. Brightness gently eases down and stage 2
    //         takes over with an almost imperceptible inward drift.
    // 14.5s — first descriptive line begins to fade in.
    // 16.5s — second descriptive line begins to fade in.
    // 18.5s — the path forward appears.
    //
    // Tail-focus duration trimmed by ~2.5s overall so the settled
    // beat doesn't outlast the visitor's attention before the text
    // arrives. The change is intentionally subtle — the dream-pace
    // is preserved, just slightly less drawn out at the tail.
    const v = videoRef.current;
    if (v) {
      // Slow the video so its 10s of content plays over ~12.8s real
      // time — synced to the descent so the tail keeps moving the
      // whole way down and lands as the camera lands.
      v.playbackRate = 0.78;
      v.play().catch(() => {});
    }
    const tDescend = setTimeout(() => setStage(1), 500);
    const tDeepen = setTimeout(() => setStage(2), 13000);
    // Brightness settles when the main descent reaches its endpoint,
    // marking the rest while the slowed video continues underneath.
    const tSettle = setTimeout(() => setEnded(true), 13000);
    const t1 = setTimeout(() => setShowLine1(true), 14500);
    const t2 = setTimeout(() => setShowLine2(true), 16500);
    const t3 = setTimeout(() => setShowButton(true), 18500);
    return () => {
      clearTimeout(tDescend);
      clearTimeout(tDeepen);
      clearTimeout(tSettle);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <>
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
        src="/videos/mermaid.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onLoadedMetadata={(e) => {
          // Apply the slowed playback rate as soon as metadata is
          // available so autoplay starts at the dreamlike pace
          // rather than full speed.
          const v = e.currentTarget;
          v.playbackRate = 0.78;
        }}
        onEnded={(e) => {
          // When the slowed video reaches its end (around 25s),
          // pause it on the last frame. The brightness settle has
          // already happened earlier when the descent reached its
          // endpoint, so we don't re-trigger it here.
          const v = e.currentTarget;
          v.pause();
          v.currentTime = Math.max(0, v.duration - 0.05);
        }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          // Single continuous descent. We never switch object-fit —
          // that switch is what created the hidden discontinuity
          // before. The mermaid is contained throughout, anchored
          // at the bottom of the screen, and a steady linear scale
          // from origin center-bottom does all the work: the tail
          // stays planted at the bottom while the body and head
          // slowly leave through the top of the frame.
          objectFit: "contain",
          objectPosition: "50% 100%",
          transform:
            stage === 0
              ? "scale(1)"
              : stage === 1
              ? "scale(2.6)"
              : "scale(2.85)",
          transformOrigin: "center bottom",
          filter: ended ? "brightness(0.7)" : "brightness(1)",
          // Stage 1 uses a 12.5s linear descent — paced so the camera
          // lands while the tail is still visibly moving. Stage 2
          // takes over at the moment stage 1 finishes and continues
          // with a much slower 45s drift, so the camera never
          // visibly stops moving.
          transition:
            stage === 2
              ? "transform 45s linear, filter 1.2s ease"
              : "transform 12.5s linear, filter 1.2s ease",
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
          Part of you is seen.
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
          Part of you remains beneath.
        </p>

        <Link
          href={getNextEncounter("mermaid")}
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

    {/*
     * Plain, visible text below the immersive video.
     * Two purposes:
     *   1. For crawlers and AI assistants — Mermaid is the first
     *      indexable encounter, and /encounters is noindex, so this
     *      page must carry its own semantic weight. Without context
     *      it would rank as "a page with a video" rather than as a
     *      symbolic encounter.
     *   2. For human visitors who scroll — a quiet caption that sits
     *      under the encounter rather than over it. The encounter
     *      itself remains uninterrupted in the viewport above.
     * Kept short and contemplative; no instructional framing.
     */}
    <section className="encounter-caption" aria-label="On the Mermaid">
      <p>
        The Mermaid marks a threshold between two worlds&mdash;what is known
        and what is not yet seen. In this encounter, the movement between
        those worlds becomes visible.
      </p>
    </section>
    </>
  );
}
