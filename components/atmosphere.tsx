/* Deterministic, dependency-free ambient scenery layers.
   Positions are seeded so SSR output matches the client. */

import type { CSSProperties } from "react";

type Style = CSSProperties;

const FOG_PALETTE = ["rgba(168,190,208,", "rgba(120,150,172,", "rgba(196,210,222,"];

function seeded(seed: number) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export function Mist({
  seed = 3,
  density = 5,
  className = "",
}: {
  seed?: number;
  density?: number;
  className?: string;
}) {
  const r = seeded(seed);
  const blobs = Array.from({ length: density }, (_, i) => {
    const left = r() * 100;
    const top = r() * 70;
    const w = 32 + r() * 55;
    const h = w * (0.5 + r() * 0.5);
    const c = FOG_PALETTE[i % FOG_PALETTE.length];
    return (
      <div
        key={i}
        className="absolute rounded-full"
        style={{
          left: `${left}%`,
          top: `${top}%`,
          width: `${w}%`,
          height: `${h}%`,
          background: `radial-gradient(ellipse at center, ${c}0.10, transparent 70%)`,
          filter: "blur(30px)",
          animation: `fogdrift ${26 + r() * 30}s ease-in-out ${-r() * 40}s infinite alternate`,
        }}
      />
    );
  });
  return <div className={`pointer-events-none absolute inset-0 ${className}`}>{blobs}</div>;
}

export function Dust({
  seed = 7,
  count = 16,
  className = "",
}: {
  seed?: number;
  count?: number;
  className?: string;
}) {
  const rnd = seeded(seed);
  const motes = Array.from({ length: count }, (_, i) => {
    const size = 1.5 + rnd() * 3.5;
    const style: Style = {
      left: `${rnd() * 100}%`,
      top: `${rnd() * 100}%`,
      width: size,
      height: size,
      "--d-dur": `${10 + rnd() * 16}s`,
      "--d-delay": `${-rnd() * 20}s`,
      "--d-op": 0.25 + rnd() * 0.5,
      "--d-x": `${-40 + rnd() * 80}px`,
      "--d-y": `${-60 + rnd() * 30}px`,
      "--d-x2": `${-40 + rnd() * 80}px`,
      "--d-y2": `${30 + rnd() * 50}px`,
    } as Style;
    return <span key={i} className="dust" style={style} />;
  });
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {motes}
    </div>
  );
}

export function Rays({
  count = 3,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const rnd = seeded(21);
  const rays = Array.from({ length: count }, (_, i) => {
    const left = 8 + rnd() * 80;
    const delay = -rnd() * 8;
    return (
      <div
        key={i}
        className="godray"
        style={{
          left: `${left}%`,
          animationDelay: `${delay}s`,
          width: `${18 + rnd() * 26}vw`,
        }}
      />
    );
  });
  return <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>{rays}</div>;
}

export function Fireflies({
  seed = 99,
  count = 12,
  className = "",
}: {
  seed?: number;
  count?: number;
  className?: string;
}) {
  const rnd = seeded(seed);
  const f = Array.from({ length: count }, (_, i) => {
    return (
      <span
        key={i}
        className="firefly"
        style={
          {
            left: `${rnd() * 100}%`,
            top: `${rnd() * 100}%`,
            "--fl-dur": `${7 + rnd() * 8}s`,
            "--fl-delay": `${-rnd() * 12}s`,
            "--fl-x": `${-60 + rnd() * 120}px`,
            "--fl-y": `${-60 + rnd() * 80}px`,
            "--fl-x2": `${-60 + rnd() * 120}px`,
            "--fl-y2": `${30 + rnd() * 80}px`,
          } as Style
        }
      />
    );
  });
  return <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>{f}</div>;
}

export function ButterLamps({
  count = 7,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const rnd = seeded(40);
  const lamps = Array.from({ length: count }, (_, i) => {
    const delay = -rnd() * 4;
    return (
      <div
        key={i}
        className="butter-glow relative h-16 w-4"
        style={{ animationDelay: `${delay}s` }}
      >
        <div className="absolute bottom-0 left-1/2 h-4 w-3 -translate-x-1/2 rounded-sm bg-[#180C14]/90" />
        <div className="absolute bottom-4 left-1/2 h-9 w-2 -translate-x-1/2 rounded-t-full bg-gradient-to-t from-gold-dim via-gold to-gold-soft blur-[1px]" />
        <div
          className="butter-glow absolute bottom-4 left-1/2 h-12 w-6 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,220,140,0.55),transparent_70%)] blur-md"
          style={{ animationDelay: `${delay}s` }}
        />
      </div>
    );
  });
  return (
    <div className={`pointer-events-none flex items-end ${className}`}>
      {lamps}
    </div>
  );
}

export function Mountains({
  className = "",
  opacity = 0.5,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      className={`pointer-events-none ${className}`}
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ opacity }}
    >
      {/* far range — misty slate blue */}
      <path
        d="M0 230 L120 150 L215 200 L330 100 L445 190 L560 130 L700 210 L820 120 L940 195 L1060 150 L1180 205 L1300 140 L1440 215 L1440 320 L0 320 Z"
        fill="rgba(86,110,132,0.85)"
      />
      {/* mid range — forest fog blue-green */}
      <path
        d="M0 270 L95 210 L210 250 L330 160 L470 245 L590 190 L730 265 L845 180 L975 260 L1100 205 L1230 255 L1350 190 L1440 250 L1440 320 L0 320 Z"
        fill="rgba(30,48,58,0.95)"
      />
      {/* near range — deep mist blue */}
      <path
        d="M0 320 L120 260 L260 300 L395 220 L530 305 L650 250 L800 315 L940 240 L1090 305 L1220 265 L1360 310 L1440 280 L1440 320 L0 320 Z"
        fill="rgba(13,21,29,1)"
      />
      {/* gold-kissed crests */}
      <path d="M330 160 L360 138 L392 158 L392 158 L330 160 Z" fill="rgba(212,175,55,0.5)" />
      <path d="M560 130 L596 104 L634 128 L634 128 L560 130 Z" fill="rgba(212,175,55,0.5)" />
    </svg>
  );
}

export function PrayerFlagString({
  count = 9,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const rnd = seeded(13);
  const colors = ["#c3473a", "#e9b44c", "#3a7ca5", "#f4f1de", "#8a2f2f"];
  const flags = Array.from({ length: count }, (_, i) => {
    const w = 18 + rnd() * 8;
    const h = 28 + rnd() * 14;
    const hue = colors[i % colors.length];
    const dur = 3.6 + rnd() * 2.4;
    return (
      <g key={i} className="flagcloth" style={{ "--f-dur": `${dur}s` } as Style}>
        <rect x={i * 40} y={-10} width={w} height={h} rx={1} fill={hue} opacity={0.85} />
        <path
          d={`M${i * 40} ${h - 10 + 2} L${i * 40 + w} ${h - 10 + 4 + rnd() * 3}`}
          stroke={hue}
          strokeWidth="1"
          fill="none"
        />
      </g>
    );
  });
  const width = 24 + count * 40;
  return (
    <svg
      className={`pointer-events-none ${className}`}
      viewBox={`0 0 ${width} 120`}
      preserveAspectRatio="none"
      aria-hidden
    >
      <path d={`M4 6 Q ${width / 2} 14 ${width - 4} 6`} fill="none" stroke="rgba(180,160,120,0.6)" strokeWidth={1.4} />
      {flags}
    </svg>
  );
}

