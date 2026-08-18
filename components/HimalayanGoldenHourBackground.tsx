"use client";

import React, { useMemo } from "react";

export function HimalayanGoldenHourBackground() {
  // Generate random snowfall / gold dust particles
  const particles = useMemo(() => {
    return Array.from({ length: 35 }, (_, i) => ({
      id: i,
      left: `${(i * 2.85 + 7) % 100}%`,
      top: `${(i * 3.7 + 12) % 100}%`,
      size: `${(i % 3) + 1.5}px`,
      delay: `${(i * 0.4) % 6}s`,
      duration: `${6 + (i % 5)}s`,
      opacity: 0.2 + (i % 5) * 0.12,
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Deep Burgundy to Charcoal Gradient Base with Radial Vignette */}
      <div
        className="absolute inset-0 bg-[#180C14]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, #28131F 0%, #180C14 60%, #12080F 100%)",
        }}
      />

      {/* Volumetric Sunrise Rays Breaking Through Peaks */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(242,198,109,0.35) 0%, rgba(212,162,74,0.15) 45%, transparent 75%)",
        }}
      />

      {/* Low-Contrast Distant Himalayan Mountain Silhouettes SVG */}
      <svg
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full h-[55%] opacity-35"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="mountGradFar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#28131F" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#180C14" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="mountGradMid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1F0D17" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#12080F" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Far Snow Peak Ridge */}
        <path
          d="M 0,380 L 180,240 L 310,320 L 460,180 L 620,290 L 800,120 L 980,260 L 1150,190 L 1320,310 L 1440,220 L 1440,600 L 0,600 Z"
          fill="url(#mountGradFar)"
        />

        {/* Mid Mountain Ridge */}
        <path
          d="M 0,450 L 140,360 L 290,420 L 510,310 L 710,410 L 910,290 L 1120,400 L 1310,330 L 1440,410 L 1440,600 L 0,600 Z"
          fill="url(#mountGradMid)"
        />
      </svg>

      {/* Atmospheric Fog Drift Layers */}
      <div
        className="absolute bottom-0 inset-x-0 h-72 opacity-50 blur-2xl"
        style={{
          background:
            "linear-gradient(to top, rgba(24,12,20,0.95) 0%, rgba(40,19,31,0.4) 60%, transparent 100%)",
        }}
      />

      {/* Subtle Snowfall & Gold Dust Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-[#F2C66D] animate-pulse"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            boxShadow: "0 0 6px rgba(242,198,109,0.8)",
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
