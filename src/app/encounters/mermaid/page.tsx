"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
import { getNextEncounter } from "../sequence";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
});

export default function MermaidEncounterPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stage, setStage] = useState<0 | 1 | 2>(0);
  const [ended, setEnded] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const v = videoRef.current;

    if (v) {
      v.playbackRate = 0.78;
      v.play().catch(() => {});
    }

    const tDescend = setTimeout(() => setStage(1), 500);
    const tDeepen = setTimeout(() => setStage(2), 13000);
    const tSettle = setTimeout(() => setEnded(true), 13000);
    const tButton = setTimeout(() => setShowButton(true), 7000);

    return () => {
      clearTimeout(tDescend);
      clearTimeout(tDeepen);
      clearTimeout(tSettle);
      clearTimeout(tButton);
    };
  }, []);

  return (
    <main
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "#000",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "75vh",
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
            e.currentTarget.playbackRate = 0.78;
          }}
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
            transition:
              stage === 2
                ? "transform 45s linear, filter 1.2s ease"
                : "transform 12.5s linear, filter 1.2s ease",
          }}
        />
      </section>

      <aside
        style={{
          height: "25vh",
          width: "100%",
          background: "#f4efe6",
          color: "#2f2a26",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem 2rem",
          boxSizing: "border-box",
          borderTop: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <Link
          href="/"
          className={cormorant.className}
          style={{
            position: "absolute",
            top: "1.1rem",
            left: "1.5rem",
            color: "#6f665e",
            textDecoration: "none",
            fontSize: "1.15rem",
            fontStyle: "italic",
          }}
        >
          home
        </Link>

        <div
          style={{
            maxWidth: "780px",
            textAlign: "center",
          }}
        >
          <h1
            className={cormorant.className}
            style={{
              fontSize: "2.35rem",
              fontWeight: 400,
              fontStyle: "italic",
              margin: "0 0 0.45rem",
            }}
          >
            Mermaid
          </h1>

         <p
  style={{
  fontFamily: "Georgia, serif",
  fontSize: "1.16rem",
  lineHeight: 1.42,
  letterSpacing: "0.01em",
  margin: "0 0 0.9rem",
  whiteSpace: "pre-line",
}}
>
  {`“He drew me out of many waters.” — Psalm 18:16

We begin in the depths and rise toward the light.`}
</p>

          <Link
            href={getNextEncounter("mermaid")}
            className={cormorant.className}
            style={{
              color: "#2f2a26",
              textDecoration: "none",
              fontSize: "1.4rem",
              fontStyle: "italic",
              opacity: showButton ? 0.9 : 0,
              pointerEvents: showButton ? "auto" : "none",
              transition: "opacity 0.6s ease",
            }}
          >
            forward
          </Link>
        </div>
      </aside>
    </main>
  );
}