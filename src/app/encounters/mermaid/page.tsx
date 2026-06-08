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
    const tButton = setTimeout(() => setShowButton(true), 2300);

    return () => {
      clearTimeout(tDescend);
      clearTimeout(tDeepen);
      clearTimeout(tSettle);
      clearTimeout(tButton);
    };
  }, []);

  return (
    <main className="enc-page-layout">
      <section className="enc-video-section">
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

      <aside className="enc-aside">
        <Link
          href="/"
          className={`${cormorant.className} enc-aside__home`}
          style={{
            opacity: showButton ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        >
          home
        </Link>

        <div className="enc-aside__content">
          <h1
            className={cormorant.className}
            style={{
              fontSize: "clamp(1.6rem, 5vw, 2.35rem)",
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
  fontSize: "clamp(1rem, 2.5vw, 1.16rem)",
  lineHeight: 1.42,
  letterSpacing: "0.01em",
  margin: "0 0 0.9rem",
  whiteSpace: "pre-line",
}}
>
  {`“He drew me out of many waters.” — Psalm 18:16`}
</p>

          <Link
            href={getNextEncounter("mermaid")}
            className={`${cormorant.className} enc-forward`}
            style={{
              color: "#2f2a26",
              textDecoration: "none",
              fontStyle: "italic",
              opacity: showButton ? 1 : 0,
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