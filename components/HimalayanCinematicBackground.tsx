"use client";

import { useEffect, useRef, useMemo } from "react";

export function HimalayanCinematicBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const section = el.closest("section");
    if (!section) return;
    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const progress = -rect.top / (rect.height + window.innerHeight);
      el.style.transform = `translateY(${progress * 40}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const particles = useMemo(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${(i * 2.5 + 3) % 100}%`,
      top: `${(i * 3.7 + 5) % 100}%`,
      size: 1 + (i % 3) * 1.2,
      delay: `${(i * 0.45) % 7}s`,
      duration: `${6 + (i % 5)}s`,
      opacity: 0.15 + (i % 5) * 0.06,
    })), []
  );

  const flagColors = ["#CC2200","#F5F5F0","#D4AF37","#1A6B2A","#1A2F8A"];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>

      {/* ─── Real Himalayan photo base ─── */}
      <div className="absolute inset-0" style={{
        backgroundImage: "url('/timeline/himalayan-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
        backgroundRepeat: "no-repeat",
        opacity: 0.35,
        filter: "saturate(0.5) brightness(0.55)",
      }} />
      {/* ─── Dark maroon overlay on top of photo ─── */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 50% 20%, rgba(42,16,32,0.70) 0%, rgba(24,12,20,0.75) 45%, rgba(14,6,9,0.82) 100%)"
      }} />

      {/* ─── Parallax scenic layer ─── */}
      <div ref={containerRef} className="absolute inset-0 will-change-transform">

        {/* === FAR SNOW PEAKS === */}
        <svg
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMax slice"
          className="absolute bottom-0 w-full h-[85%]"
          style={{ opacity: 0.55 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="hcb-peak1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9E7B5A" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#5C3040" stopOpacity="1" />
              <stop offset="100%" stopColor="#180C14" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="hcb-peak2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7A4A5A" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#401828" stopOpacity="1" />
              <stop offset="100%" stopColor="#180C14" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="hcb-peak3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3A2030" stopOpacity="1" />
              <stop offset="100%" stopColor="#0E0609" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="hcb-snow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F0E8D8" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#C8A870" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#9E7B5A" stopOpacity="0" />
            </linearGradient>
            <filter id="hcb-blur1"><feGaussianBlur stdDeviation="4" /></filter>
            <filter id="hcb-blur2"><feGaussianBlur stdDeviation="2" /></filter>
          </defs>

          {/* Furthest distant range */}
          <path filter="url(#hcb-blur1)"
            d="M0,420 L60,330 L130,380 L210,260 L310,340 L430,175 L540,280 L650,145 L760,250 L880,120 L990,230 L1100,160 L1220,280 L1340,200 L1440,240 L1440,600 L0,600 Z"
            fill="url(#hcb-peak1)" />

          {/* Snow caps on far peaks */}
          <path filter="url(#hcb-blur1)" style={{ opacity: 0.9 }}
            d="M430,175 L455,210 L480,185 L460,195 Z
               M650,145 L672,172 L698,158 L678,165 Z
               M880,120 L902,148 L928,133 L908,140 Z
               M1100,160 L1122,185 L1148,170 L1128,177 Z"
            fill="url(#hcb-snow)" />

          {/* Mid mountain ridge */}
          <path filter="url(#hcb-blur2)"
            d="M0,490 L90,405 L200,460 L320,370 L450,440 L580,330 L700,410 L840,305 L970,390 L1090,325 L1220,400 L1350,340 L1440,370 L1440,600 L0,600 Z"
            fill="url(#hcb-peak2)" />

          {/* Near dark ridge */}
          <path
            d="M0,545 L120,480 L250,525 L380,462 L510,510 L640,448 L770,500 L900,440 L1040,495 L1180,448 L1310,490 L1440,462 L1440,600 L0,600 Z"
            fill="url(#hcb-peak3)" />
        </svg>

        {/* === DENSE FOREST SILHOUETTE - EDGES === */}
        <svg
          viewBox="0 0 1440 260"
          preserveAspectRatio="xMidYMax slice"
          className="absolute bottom-0 w-full h-[35%]"
          style={{ opacity: 0.7 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="hcb-tree" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1E0E18" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#0E0609" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* Left forest */}
          {[0,24,48,72,96,120,144,168,192,220,248,276,304,332,360,390].map((x, i) => {
            const h = 100 + (i % 6) * 18 + (i % 3) * 12;
            const w = 28 + (i % 4) * 6;
            return (
              <path key={`lt-${i}`}
                d={`M${x},260 L${x},${260-h} L${x + w/2},${260-h-30} L${x+w},${260-h} L${x+w},260 Z`}
                fill="url(#hcb-tree)" />
            );
          })}

          {/* Right forest */}
          {[1050,1078,1106,1134,1162,1190,1218,1246,1274,1302,1330,1358,1386,1414].map((x, i) => {
            const h = 95 + (i % 5) * 20 + (i % 3) * 10;
            const w = 26 + (i % 4) * 7;
            return (
              <path key={`rt-${i}`}
                d={`M${x},260 L${x},${260-h} L${x + w/2},${260-h-28} L${x+w},${260-h} L${x+w},260 Z`}
                fill="url(#hcb-tree)" />
            );
          })}
        </svg>

        {/* === MONASTERY SILHOUETTE - LEFT === */}
        <svg
          viewBox="0 0 320 420"
          preserveAspectRatio="xMinYMax meet"
          className="absolute bottom-0 left-[2%] w-[18%] h-[48%]"
          style={{ opacity: 0.35 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main body */}
          <rect x="55" y="230" width="140" height="100" fill="#3A1F2C" />
          {/* Floor 2 */}
          <rect x="65" y="205" width="120" height="30" fill="#4A2838" />
          {/* Floor 3 - narrow */}
          <rect x="80" y="185" width="90" height="24" fill="#5A3040" />
          {/* Top tier */}
          <rect x="95" y="168" width="60" height="20" fill="#6A3848" />
          {/* Swept roof */}
          <path d="M72,185 Q125,152 178,185" fill="none" stroke="#C8A040" strokeWidth="3.5" />
          <path d="M85,205 Q125,175 165,205" fill="none" stroke="#A87830" strokeWidth="2.5" />
          {/* Spire */}
          <rect x="120" y="148" width="10" height="24" fill="#D4AF37" />
          <ellipse cx="125" cy="146" rx="9" ry="6" fill="#C89A30" />
          <rect x="123" y="138" width="4" height="12" fill="#D4AF37" />
          {/* Windows */}
          <rect x="72" y="240" width="18" height="24" fill="#1A0C12" />
          <rect x="116" y="240" width="18" height="24" fill="#1A0C12" />
          <rect x="160" y="240" width="18" height="24" fill="#1A0C12" />
          {/* Door */}
          <rect x="110" y="285" width="30" height="45" rx="4" fill="#1A0C12" />
          {/* Stupa beside */}
          <ellipse cx="230" cy="308" rx="22" ry="12" fill="#3A1F2C" />
          <path d="M218,308 L225,260 L235,260 L242,308 Z" fill="#3A1F2C" />
          <ellipse cx="230" cy="258" rx="10" ry="7" fill="#4A2838" />
          <rect x="227" y="245" width="6" height="16" fill="#C89A30" />
          <ellipse cx="230" cy="243" rx="7" ry="5" fill="#D4AF37" />
        </svg>

        {/* === MONASTERY SILHOUETTE - RIGHT === */}
        <svg
          viewBox="0 0 320 420"
          preserveAspectRatio="xMaxYMax meet"
          className="absolute bottom-0 right-[2%] w-[18%] h-[48%]"
          style={{ opacity: 0.35 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="90" y="240" width="150" height="100" fill="#3A1F2C" />
          <rect x="100" y="212" width="130" height="32" fill="#4A2838" />
          <rect x="115" y="190" width="100" height="26" fill="#5A3040" />
          <rect x="132" y="172" width="66" height="22" fill="#6A3848" />
          <path d="M108,190 Q165,155 222,190" fill="none" stroke="#C8A040" strokeWidth="3.5" />
          <path d="M118,212 Q165,182 212,212" fill="none" stroke="#A87830" strokeWidth="2.5" />
          <rect x="159" y="150" width="12" height="26" fill="#D4AF37" />
          <ellipse cx="165" cy="148" rx="10" ry="7" fill="#C89A30" />
          <rect x="162" y="138" width="5" height="14" fill="#D4AF37" />
          <rect x="112" y="252" width="20" height="26" fill="#1A0C12" />
          <rect x="155" y="252" width="20" height="26" fill="#1A0C12" />
          <rect x="198" y="252" width="20" height="26" fill="#1A0C12" />
          <rect x="150" y="295" width="30" height="45" rx="4" fill="#1A0C12" />
        </svg>

        {/* === PRAYER FLAGS - LEFT STRING === */}
        <svg
          viewBox="0 0 700 180"
          preserveAspectRatio="none"
          className="absolute left-0 w-[50%] h-[22%]"
          style={{ top: "10%", opacity: 0.45 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10,30 Q350,90 690,20" fill="none" stroke="#C8A96E" strokeWidth="2" />
          {[0.08,0.18,0.28,0.38,0.48,0.58,0.68,0.78,0.88,0.96].map((t, i) => {
            const x = t * 700;
            const y = 30 + Math.sin(t * Math.PI) * 60;
            return <rect key={i} x={x-7} y={y} width="14" height="18" rx="1" fill={flagColors[i % 5]} opacity="0.85" />;
          })}
        </svg>

        {/* === PRAYER FLAGS - RIGHT STRING === */}
        <svg
          viewBox="0 0 700 180"
          preserveAspectRatio="none"
          className="absolute right-0 w-[50%] h-[22%]"
          style={{ top: "14%", opacity: 0.45 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10,20 Q350,85 690,30" fill="none" stroke="#C8A96E" strokeWidth="2" />
          {[0.06,0.16,0.26,0.36,0.46,0.56,0.66,0.76,0.86,0.94].map((t, i) => {
            const x = t * 700;
            const y = 20 + Math.sin(t * Math.PI) * 65;
            return <rect key={i} x={x-7} y={y} width="14" height="18" rx="1" fill={flagColors[(i+3) % 5]} opacity="0.85" />;
          })}
        </svg>

      </div>

      {/* ─── Fog / mist overlays ─── */}
      {/* Bottom fade to maroon */}
      <div className="absolute inset-x-0 bottom-0 h-64" style={{
        background: "linear-gradient(to top, rgba(14,6,9,0.98) 0%, rgba(24,12,20,0.7) 40%, transparent 100%)"
      }} />
      {/* Left edge */}
      <div className="absolute inset-y-0 left-0 w-72" style={{
        background: "linear-gradient(to right, rgba(14,6,9,0.75) 0%, rgba(24,12,20,0.3) 60%, transparent 100%)"
      }} />
      {/* Right edge */}
      <div className="absolute inset-y-0 right-0 w-72" style={{
        background: "linear-gradient(to left, rgba(14,6,9,0.75) 0%, rgba(24,12,20,0.3) 60%, transparent 100%)"
      }} />
      {/* Horizontal fog mid-band */}
      <div className="absolute inset-x-0" style={{
        top: "52%", height: "100px",
        background: "linear-gradient(to bottom, transparent, rgba(28,14,22,0.3), transparent)",
        filter: "blur(24px)"
      }} />

      {/* ─── Dark vignette — keeps center readable ─── */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(10,4,8,0.6) 65%, rgba(8,3,6,0.92) 100%)"
      }} />
      {/* Extra center-darkness for timeline text */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 55% 65% at 50% 42%, rgba(12,6,10,0.5) 0%, transparent 100%)"
      }} />

      {/* ─── Subtle golden glow at top ─── */}
      <div className="absolute top-0 inset-x-0 h-64" style={{
        background: "radial-gradient(ellipse at 50% 0%, rgba(200,140,40,0.15) 0%, rgba(180,100,20,0.05) 50%, transparent 80%)"
      }} />

      {/* ─── Gold dust particles ─── */}
      {particles.map((p) => (
        <div key={p.id}
          className="absolute rounded-full animate-pulse"
          style={{
            left: p.left, top: p.top,
            width: `${p.size}px`, height: `${p.size}px`,
            background: "#D4AF37",
            opacity: p.opacity,
            boxShadow: "0 0 6px rgba(212,175,55,0.8)",
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
