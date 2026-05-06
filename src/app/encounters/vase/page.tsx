"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export default function VaseEncounterPage() {
  const [ended, setEnded] = useState(false);
  const [showLine1, setShowLine1] = useState(false);
  const [showLine2, setShowLine2] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowLine1(true), 2500);
    const t2 = setTimeout(() => setShowLine2(true), 5000);
    const t3 = setTimeout(() => setShowButton(true), 9000);
    return () => {
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
        src="/videos/vase.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={(e) => {
          const v = e.currentTarget;
          v.pause();
          v.currentTime = Math.max(0, v.duration - 0.05);
          setEnded(true);
        }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
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
          We are more than an outer shell.
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
          We hold a truth within.
        </p>

        <Link
          href="/encounters/queen"
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
