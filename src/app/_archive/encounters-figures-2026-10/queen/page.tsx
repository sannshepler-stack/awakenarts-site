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

export default function QueenEncounterPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const v = videoRef.current;

    if (v) {
      v.playbackRate = 0.8;
      v.play().catch(() => {});
    }

    const tButton = setTimeout(() => setShowButton(true), 2800);

    return () => clearTimeout(tButton);
  }, []);

  return (
    <main className="enc-page-layout">
      <section className="enc-video-section">
        <video
          ref={videoRef}
          src="/videos/queen.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={(e) => {
            e.currentTarget.playbackRate = 0.8;
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
            objectFit: "cover",
            objectPosition: "50% 50%",
            filter: "brightness(0.92)",
            transition: "filter 2s ease",
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
            Queen
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
            {`“For here we have no lasting city, but we seek the city that is to come.” — Hebrews 13:14`}
          </p>

          <p className="enc-aside__label">observation</p>
          <p className="enc-aside__prompt">
            Let your eyes stay here a moment longer. What do you notice first — and what do you notice only after?
          </p>

          <p className="enc-aside__label">reflection</p>
          <p className="enc-aside__prompt">
            There is nothing here to resolve. Stay with whatever rises, and let it be enough for now.
          </p>

          <Link
            href={getNextEncounter("queen")}
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