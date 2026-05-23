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

    const tButton = setTimeout(() => setShowButton(true), 12000);

    return () => clearTimeout(tButton);
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

        <div style={{ maxWidth: "780px", textAlign: "center" }}>
          <h1
            className={cormorant.className}
            style={{
              fontSize: "2.35rem",
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
              fontSize: "1.16rem",
              lineHeight: 1.42,
              letterSpacing: "0.01em",
              margin: "0 0 0.9rem",
              whiteSpace: "pre-line",
            }}
          >
            {`“For here we have no lasting city, but we seek the city that is to come.” — Hebrews 13:14

As we are called forward, we leave a burning city behind us.`}
          </p>

          <Link
            href={getNextEncounter("queen")}
            className={cormorant.className}
            style={{
              color: "#2f2a26",
              textDecoration: "none",
              fontSize: "1.4rem",
              fontStyle: "italic",
              opacity: showButton ? 0.9 : 0,
              pointerEvents: showButton ? "auto" : "none",
              transition: "opacity 1.5s ease",
            }}
          >
            forward
          </Link>
        </div>
      </aside>
    </main>
  );
}