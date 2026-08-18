import { Mist, Dust, Mountains, PrayerFlagString } from "./atmosphere";
import type { CSSProperties } from "react";

type Motif =
  | "stupa"
  | "monastery"
  | "lamps"
  | "wheel"
  | "mask"
  | "manuscript"
  | "mural"
  | "horn"
  | "dancer"
  | "robe"
  | "throne"
  | "scaffold"
  | "map"
  | "hologram"
  | "lake"
  | "none";

interface SceneConfig {
  sky: [string, string, string];
  glow: string;
  sun?: { x: number; y: number; r: number };
  moon?: boolean;
  ridge: [string, string];
  motif: Motif;
  flags?: boolean;
  snow?: boolean;
  rays?: boolean;
  time?: "day" | "dusk" | "night";
}

const SCENES: Record<string, SceneConfig> = {
  rumtek: {
    sky: ["#16232e", "#27434a", "#a8844a"],
    glow: "rgba(212,175,55,0.4)",
    sun: { x: 76, y: 22, r: 16 },
    ridge: ["rgba(31,54,66,0.9)", "rgba(13,21,29,0.98)"],
    motif: "monastery",
    flags: true,
    rays: true,
  },
  pemayangtse: {
    sky: ["#1a2734", "#3e5c76", "#c8b08a"],
    glow: "rgba(240,214,160,0.4)",
    sun: { x: 62, y: 30, r: 12 },
    ridge: ["rgba(62,92,118,0.85)", "rgba(16,26,36,0.98)"],
    motif: "stupa",
    flags: true,
  },
  enchey: {
    sky: ["#172630", "#2f4a44", "#b39a6a"],
    glow: "rgba(176,210,150,0.28)",
    sun: { x: 30, y: 24, r: 14 },
    ridge: ["rgba(36,60,56,0.9)", "rgba(14,22,26,0.98)"],
    motif: "monastery",
    flags: true,
  },
  tashiding: {
    sky: ["#16232e", "#3c4e68", "#d4b880"],
    glow: "rgba(255,190,120,0.45)",
    sun: { x: 52, y: 34, r: 18 },
    ridge: ["rgba(56,76,100,0.85)", "rgba(16,24,34,0.98)"],
    motif: "stupa",
    flags: true,
    rays: true,
  },
  dubdi: {
    sky: ["#17262a", "#314e3e", "#a8945e"],
    glow: "rgba(200,220,150,0.3)",
    sun: { x: 40, y: 26, r: 13 },
    ridge: ["rgba(36,60,46,0.9)", "rgba(14,22,18,0.98)"],
    motif: "monastery",
  },
  phodong: {
    sky: ["#101b26", "#2a4660", "#b08d5f"],
    glow: "rgba(150,190,230,0.35)",
    sun: { x: 72, y: 26, r: 11 },
    ridge: ["rgba(40,66,92,0.9)", "rgba(12,18,26,0.98)"],
    motif: "monastery",
    flags: true,
  },
  ralang: {
    sky: ["#16202c", "#3c425c", "#c89a5f"],
    glow: "rgba(212,150,180,0.32)",
    sun: { x: 66, y: 30, r: 12 },
    ridge: ["rgba(54,60,84,0.88)", "rgba(14,18,26,0.98)"],
    motif: "monastery",
    flags: true,
  },
  kartok: {
    sky: ["#1b232b", "#46575e", "#a89a74"],
    glow: "rgba(190,200,170,0.3)",
    sun: { x: 34, y: 28, r: 12 },
    ridge: ["rgba(52,66,66,0.9)", "rgba(16,22,24,0.98)"],
    motif: "stupa",
  },
  coronation: {
    sky: ["#1a2333", "#4a5a74", "#d8a860"],
    glow: "rgba(232,170,90,0.5)",
    sun: { x: 50, y: 26, r: 20 },
    ridge: ["rgba(70,80,104,0.85)", "rgba(16,22,30,0.98)"],
    motif: "throne",
    flags: true,
    rays: true,
  },
  builders: {
    sky: ["#182636", "#3c5872", "#c8b087"],
    glow: "rgba(220,200,150,0.35)",
    sun: { x: 60, y: 30, r: 13 },
    ridge: ["rgba(52,72,96,0.85)", "rgba(14,22,30,0.98)"],
    motif: "scaffold",
  },
  artists: {
    sky: ["#1c2030", "#46455e", "#c0945a"],
    glow: "rgba(220,140,120,0.35)",
    ridge: ["rgba(60,56,84,0.85)", "rgba(16,18,26,0.98)"],
    motif: "mural",
  },
  mapchange: {
    sky: ["#101a28", "#2e4662", "#a8885c"],
    glow: "rgba(120,160,210,0.3)",
    ridge: ["rgba(38,56,78,0.85)", "rgba(10,16,24,0.98)"],
    motif: "map",
  },
  digital: {
    sky: ["#0d1220", "#20283e", "#5a5a54"],
    glow: "rgba(90,180,220,0.35)",
    ridge: ["rgba(28,32,48,0.85)", "rgba(10,12,18,0.98)"],
    motif: "hologram",
    time: "night",
  },
  festival: {
    sky: ["#1c2336", "#3e4a6a", "#d8a860"],
    glow: "rgba(255,180,90,0.5)",
    sun: { x: 46, y: 26, r: 17 },
    ridge: ["rgba(70,76,104,0.85)", "rgba(16,20,30,0.98)"],
    motif: "dancer",
    flags: true,
    rays: true,
  },
  cham: {
    sky: ["#182038", "#3a3a62", "#d09050"],
    glow: "rgba(240,130,70,0.45)",
    sun: { x: 54, y: 30, r: 14 },
    ridge: ["rgba(60,64,94,0.85)", "rgba(16,18,28,0.98)"],
    motif: "mask",
    flags: true,
  },
  dance: {
    sky: ["#1a1e34", "#40385c", "#c8905a"],
    glow: "rgba(220,120,150,0.4)",
    ridge: ["rgba(58,52,84,0.85)", "rgba(16,16,26,0.98)"],
    motif: "dancer",
    flags: true,
  },
  clothing: {
    sky: ["#1c2530", "#3f4a58", "#c08c5c"],
    glow: "rgba(210,150,120,0.35)",
    ridge: ["rgba(52,60,78,0.85)", "rgba(16,20,28,0.98)"],
    motif: "robe",
  },
  wheels: {
    sky: ["#161d28", "#363e54", "#b08a50"],
    glow: "rgba(200,160,110,0.35)",
    ridge: ["rgba(48,54,78,0.85)", "rgba(12,16,24,0.98)"],
    motif: "wheel",
  },
  lamps: {
    sky: ["#0a0f18", "#16222e", "#4a3a2a"],
    glow: "rgba(255,190,90,0.5)",
    ridge: ["rgba(18,24,34,0.9)", "rgba(8,12,18,0.98)"],
    motif: "lamps",
    time: "night",
  },
  mural: {
    sky: ["#1a2032", "#3a3e60", "#c07a50"],
    glow: "rgba(220,120,90,0.4)",
    ridge: ["rgba(54,54,82,0.85)", "rgba(14,16,26,0.98)"],
    motif: "mural",
  },
  manuscript: {
    sky: ["#1c2426", "#3c4a46", "#b89a52"],
    glow: "rgba(230,190,110,0.4)",
    ridge: ["rgba(52,62,54,0.85)", "rgba(16,22,20,0.98)"],
    motif: "manuscript",
  },
  monk: {
    sky: ["#131a24", "#323a50", "#a06a4a"],
    glow: "rgba(180,120,90,0.35)",
    ridge: ["rgba(42,48,68,0.85)", "rgba(12,16,24,0.98)"],
    motif: "robe",
  },
  masks: {
    sky: ["#141a2c", "#363458", "#b86a42"],
    glow: "rgba(220,100,80,0.4)",
    ridge: ["rgba(52,48,76,0.85)", "rgba(14,14,22,0.98)"],
    motif: "mask",
  },
  architecture: {
    sky: ["#101c2c", "#2c4664", "#c09a62"],
    glow: "rgba(170,200,230,0.3)",
    ridge: ["rgba(40,62,88,0.85)", "rgba(12,18,28,0.98)"],
    motif: "monastery",
    flags: true,
  },
  music: {
    sky: ["#101826", "#2c3a52", "#a8865c"],
    glow: "rgba(150,170,210,0.3)",
    ridge: ["rgba(38,48,70,0.85)", "rgba(12,16,26,0.98)"],
    motif: "horn",
  },
  tsomgo: {
    sky: ["#16283c", "#3e5c7c", "#d8c898"],
    glow: "rgba(200,230,255,0.4)",
    sun: { x: 68, y: 24, r: 14 },
    ridge: ["rgba(70,100,140,0.85)", "rgba(22,30,46,0.98)"],
    motif: "lake",
  },
  yumthang: {
    sky: ["#1a2e2c", "#4a6454", "#d0c090"],
    glow: "rgba(190,240,170,0.35)",
    sun: { x: 30, y: 24, r: 15 },
    ridge: ["rgba(52,88,70,0.85)", "rgba(22,34,30,0.98)"],
    motif: "none",
    snow: false,
  },
  night: {
    sky: ["#080b14", "#141a2a", "#2a2830"],
    glow: "rgba(120,140,220,0.3)",
    moon: true,
    ridge: ["rgba(14,18,28,0.9)", "rgba(6,8,14,0.98)"],
    motif: "stupa",
    time: "night",
  },
  snow: {
    sky: ["#1c2530", "#3a4a58", "#a8b0b8"],
    glow: "rgba(220,230,240,0.3)",
    sun: { x: 44, y: 26, r: 12 },
    ridge: ["rgba(76,92,108,0.85)", "rgba(30,36,46,0.98)"],
    motif: "stupa",
    snow: true,
  },
  drone: {
    sky: ["#152236", "#3c5a7e", "#b8985c"],
    glow: "rgba(180,200,240,0.3)",
    sun: { x: 72, y: 20, r: 15 },
    ridge: ["rgba(50,70,104,0.85)", "rgba(14,20,32,0.98)"],
    motif: "monastery",
    flags: true,
  },
};

export function Scenic({
  scene,
  className = "",
  seed = 5,
}: {
  scene: string;
  className?: string;
  seed?: number;
}) {
  const cfg: SceneConfig = SCENES[scene] ?? SCENES.rumtek;
  const isNight = cfg.time === "night";

  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className}`}
      role="img"
      aria-label={scene}
    >
      {/* sky */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${cfg.sky[0]} 0%, ${cfg.sky[1]} 55%, ${cfg.sky[2]} 100%)`,
        }}
      />

      {/* sun or moon */}
      {cfg.sun && !isNight && (
        <div
          className="absolute rounded-full blur-[2px]"
          style={{
            left: `${cfg.sun.x}%`,
            top: `${cfg.sun.y}%`,
            width: cfg.sun.r * 3,
            height: cfg.sun.r * 3,
            transform: "translate(-50%,-50%)",
            background: `radial-gradient(circle, rgba(255,236,190,0.9), rgba(255,220,150,0.25) 55%, transparent 72%)`,
            boxShadow: `0 0 60px 20px ${cfg.glow}`,
          }}
        />
      )}
      {cfg.moon && (
        <div
          className="absolute rounded-full"
          style={{
            left: "70%",
            top: "20%",
            width: 44,
            height: 44,
            transform: "translate(-50%,-50%)",
            background: "radial-gradient(circle, #e8ecf4, #aab2c8 70%)",
            boxShadow: "0 0 40px 14px rgba(200,210,240,0.5)",
          }}
        />
      )}

      {/* distant ridges */}
      <div className="absolute inset-x-0 bottom-0 h-[58%]">
        <Mountains opacity={0.85} className="absolute inset-0 h-full w-full" />
      </div>

      {/* motif */}
      <div className="absolute inset-x-0 bottom-[8%] flex h-[52%] items-end justify-center">
        <Motif motif={cfg.motif} isNight={isNight} />
      </div>

      {/* prayer flags */}
      {cfg.flags && (
        <PrayerFlagString count={11} className="absolute top-[6%] left-[4%] w-[92%] opacity-90" />
      )}

      {/* god rays */}
      {cfg.rays && !isNight && (
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "linear-gradient(115deg, transparent 40%, rgba(255,236,190,0.14) 46%, transparent 55%)",
          }}
        />
      )}

      {/* snow */}
      {cfg.snow && <Snow className="absolute inset-0" />}

      {/* atmosphere */}
      <Mist seed={seed} density={4} />
      <Dust seed={seed + 2} count={12} />

      {/* vignette */}
      <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 120px 40px rgba(0,0,0,0.55)" }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/25" />
    </div>
  );
}

function Motif({ motif, isNight }: { motif: Motif; isNight: boolean }) {
  switch (motif) {
    case "monastery":
      return <MonasteryShape night={isNight} />;
    case "stupa":
      return <StupaShape night={isNight} />;
    case "throne":
      return <ThroneShape />;
    case "scaffold":
      return <ScaffoldShape />;
    case "mural":
      return <MuralShape />;
    case "map":
      return <MapShape />;
    case "hologram":
      return <HologramShape />;
    case "dancer":
      return <DancerShape />;
    case "mask":
      return <MaskShape />;
    case "robe":
      return <RobeShape />;
    case "wheel":
      return <WheelShape />;
    case "lamps":
      return <LampsShape />;
    case "manuscript":
      return <ManuscriptShape />;
    case "horn":
      return <HornShape />;
    case "lake":
      return <LakeShape />;
    default:
      return <PinesShape />;
  }
}

const GOLD = "#d4af37";

/* ------- SVG motifs ------- */

function MonasteryShape({ night }: { night?: boolean }) {
  const warm = night ? "#7a5a3a" : "#d4a860";
  return (
    <svg viewBox="0 0 300 300" className="h-full w-auto" aria-hidden>
      <g>
        {/* base */}
        <rect x="70" y="150" width="160" height="120" fill="#27404f" />
        <rect x="60" y="150" width="180" height="120" fill="url(#pgrad)" opacity={0.9} />
        <rect x="55" y="142" width="190" height="12" fill={GOLD} opacity={0.85} />
        {/* tiers */}
        <polygon points="60,142 150,96 240,142" fill={warm} stroke={GOLD} strokeWidth="2" />
        <polygon points="88,108 150,66 212,108" fill={warm} stroke={GOLD} strokeWidth="2" />
        <polygon points="120,80 150,46 180,80" fill={warm} stroke={GOLD} strokeWidth="2" />
        {/* finial */}
        <rect x="146" y="20" width="8" height="30" fill={GOLD} />
        <circle cx="150" cy="16" r="7" fill={GOLD} />
        {/* windows */}
        <rect x="100" y="170" width="20" height="26" rx="10" fill="#0a1016" />
        <rect x="140" y="170" width="20" height="26" rx="10" fill="#0a1016" />
        <rect x="180" y="170" width="20" height="26" rx="10" fill="#0a1016" />
        {/* door */}
        <rect x="133" y="206" width="34" height="64" rx="17" fill="#0d1822" stroke={GOLD} strokeWidth="2" />
        {/* gold glow windows */}
        <rect x="102" y="172" width="16" height="22" rx="8" fill="#e8c050" opacity={0.9} />
        <rect x="182" y="172" width="16" height="22" rx="8" fill="#e8c050" opacity={0.9} />
      </g>
      <defs>
        <linearGradient id="pgrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3e5c76" />
          <stop offset="1" stopColor="#16232e" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function StupaShape({ night }: { night?: boolean }) {
  const warm = night ? "#8a6a3a" : "#d4a860";
  return (
    <svg viewBox="0 0 300 300" className="h-full w-auto" aria-hidden>
      <g>
        <rect x="20" y="230" width="260" height="40" fill="#16232e" />
        <rect x="60" y="220" width="180" height="14" fill="#1f3b33" />
        {/* dome */}
        <path d="M80 222 Q80 130 150 130 Q220 130 220 222 Z" fill="#efe6d0" stroke={GOLD} strokeWidth="3" />
        <path d="M80 222 Q80 140 150 140 Q220 140 220 222 Z" fill="#d9c69a" opacity={0.5} />
        {/* harmika */}
        <rect x="130" y="112" width="40" height="20" fill={GOLD} />
        <rect x="124" y="118" width="52" height="6" fill="#b08d2a" />
        {/* spire */}
        <polygon points="144,112 150,40 156,112" fill={warm} />
        <g transform="rotate(45 150 58)">
          <circle cx="150" cy="58" r="6" fill={GOLD} />
        </g>
        <circle cx="150" cy="34" r="7" fill={GOLD} />
      </g>
    </svg>
  );
}

function PinesShape() {
  return (
    <svg viewBox="0 0 300 200" className="h-full w-auto" aria-hidden>
      {[
        [50, 60], [90, 90], [130, 50], [170, 85], [210, 62], [250, 96],
      ].map(([x, w], i) => (
        <g key={i}>
          <polygon points={`${x - w / 2},200 ${x},120 ${x + w / 2},200`} fill="#2c4a34" opacity={0.9} />
          <polygon points={`${x - w / 3},200 ${x},140 ${x + w / 3},200`} fill="#3a5a40" opacity={0.9} />
          <rect x={x - 3} y={200} width="6" height="24" fill="#3a2a1c" />
        </g>
      ))}
    </svg>
  );
}

function LakeShape() {
  return (
    <svg viewBox="0 0 300 220" className="h-full w-auto" aria-hidden>
      <ellipse cx="150" cy="150" rx="120" ry="34" fill="#7fb4c8" opacity={0.9} />
      <ellipse cx="150" cy="150" rx="120" ry="34" fill="url(#lwater)" opacity={0.55} />
      {[
        [60, 0], [100, 20], [140, 0], [180, 26], [220, 0],
      ].map(([x, y], i) => (
        <path key={i} d={`M${x} ${90 + y} q 20 14 44 -2 q 24 -16 40 4`} fill="none" stroke="#aab4c8" strokeWidth="2" opacity={0.7} />
      ))}
      <defs>
        <linearGradient id="lwater" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cfe8f4" stopOpacity="0" />
          <stop offset="1" stopColor="#3a6a7c" stopOpacity="0.6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ThroneShape() {
  return (
    <svg viewBox="0 0 300 300" className="h-full w-auto" aria-hidden>
      <rect x="70" y="210" width="160" height="60" fill="#2a3c4e" />
      <rect x="90" y="150" width="120" height="60" fill="#3e5870" />
      <polygon points="90,150 150,96 210,150" fill={GOLD} opacity={0.9} />
      <rect x="112" y="104" width="12" height="20" fill="#0a1016" />
      <rect x="176" y="104" width="12" height="20" fill="#0a1016" />
      <rect x="140" y="118" width="20" height="18" rx="3" fill="#0a1016" />
      <ellipse cx="150" cy="200" rx="70" ry="10" fill="#1f3b33" />
      {/* crown */}
      <polygon points="150,40 162,66 178,60 170,78 186,86 166,88 162,108 138,108 134,88 114,86 130,78 122,60 138,66" fill={GOLD} />
    </svg>
  );
}

function ScaffoldShape() {
  return (
    <svg viewBox="0 0 300 300" className="h-full w-auto" aria-hidden>
      <rect x="96" y="120" width="108" height="160" fill="#2a4354" opacity={0.85} />
      <polygon points="96,140 150,70 204,140" fill="#d4a860" stroke={GOLD} strokeWidth="2" />
      <line x1="60" y1="300" x2="60" y2="120" stroke="#4e6a82" strokeWidth="5" />
      <line x1="240" y1="300" x2="240" y2="120" stroke="#4e6a82" strokeWidth="5" />
      <line x1="60" y1="180" x2="240" y2="180" stroke="#4e6a82" strokeWidth="4" />
      <line x1="60" y1="240" x2="240" y2="240" stroke="#4e6a82" strokeWidth="4" />
      <line x1="96" y1="120" x2="60" y2="120" stroke="#4e6a82" strokeWidth="4" />
      <line x1="204" y1="120" x2="240" y2="120" stroke="#4e6a82" strokeWidth="4" />
      {/* figure */}
      <circle cx="120" cy="150" r="7" fill="#16232e" />
      <rect x="116" y="158" width="8" height="26" rx="3" fill="#3e5870" />
    </svg>
  );
}

function MuralShape() {
  return (
    <svg viewBox="0 0 300 220" className="h-full w-auto" aria-hidden>
      <rect x="30" y="20" width="240" height="180" rx="6" fill="#e8dcc0" />
      <rect x="38" y="28" width="224" height="164" fill="#c95a3a" opacity={0.9} />
      <circle cx="90" cy="80" r="22" fill="#e8c050" />
      <path d="M150 60 q 20 30 0 60 q -20 -30 0 -60" fill="#5a2f5a" />
      <path d="M120 110 q 60 10 90 0 q -10 30 -45 34 q -35 -4 -45 -34" fill="#e8dcc0" />
      <path d="M150 130 q 30 10 60 0" stroke="#b08d2a" strokeWidth="2" fill="none" />
      <rect x="150" y="30" width="8" height="20" fill="#b08d2a" />
      {/* lattice */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line key={i} x1={38} y1={40 + i * 26} x2={262} y2={40 + i * 26} stroke="#7a3a20" strokeWidth="1" opacity={0.5} />
      ))}
    </svg>
  );
}

function MapShape() {
  return (
    <svg viewBox="0 0 300 260" className="h-full w-auto" aria-hidden>
      <path
        d="M70 40 C 40 60 30 110 55 150 C 75 185 60 220 90 235 C 130 255 200 240 235 205 C 262 178 268 120 240 80 C 215 45 150 28 110 30 C 92 31 82 34 70 40 Z"
        fill="#b9c4cc"
        stroke="#5a6e82"
        strokeWidth="3"
      />
      <path
        d="M70 40 C 40 60 30 110 55 150 C 75 185 60 220 90 235 C 130 255 200 240 235 205 C 262 178 268 120 240 80 C 215 45 150 28 110 30 C 92 31 82 34 70 40 Z"
        fill="url(#mgra)"
        opacity={0.4}
      />
      <circle cx="150" cy="130" r="14" fill="#1e4e79" stroke={GOLD} strokeWidth="2" />
      <path d="M150 116 L150 92 M138 108 L122 96 M162 108 L178 96" stroke="#1e4e79" strokeWidth="2" />
      <path d="M120 170 C 140 180 170 178 190 165" fill="none" stroke="#2c8a8a" strokeWidth="3" opacity={0.7} />
      <defs>
        <linearGradient id="mgra" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f8f4e8" stopOpacity="0.6" />
          <stop offset="1" stopColor="#3e5c76" stopOpacity="0.4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function HologramShape() {
  return (
    <svg viewBox="0 0 300 300" className="h-full w-auto" aria-hidden>
      <StupaLines />
      {[30, 60, 90, 120, 150, 180, 210].map((x) => (
        <line key={x} x1={x} y1={0} x2={x - 10} y2={300} stroke="#6ad0e8" strokeWidth="1" opacity={0.35} />
      ))}
      {[60, 120, 180, 240].map((y) => (
        <line key={y} x1={0} y1={y} x2={300} y2={y} stroke="#6ad0e8" strokeWidth="1" opacity={0.35} />
      ))}
    </svg>
  );
}

function StupaLines() {
  return (
    <g stroke="#9ae8f0" strokeWidth="1.6" fill="none" opacity={0.9}>
      <path d="M80 222 Q80 140 150 140 Q220 140 220 222" />
      <line x1="150" y1="140" x2="150" y2="50" />
      <line x1="150" y1="50" x2="150" y2="30" />
      <circle cx="150" cy="30" r="7" />
      <rect x="128" y="132" width="44" height="14" />
    </g>
  );
}

function DancerShape() {
  return (
    <svg viewBox="0 0 300 300" className="h-full w-auto" aria-hidden>
      <circle cx="150" cy="70" r="20" fill="#e8dcc0" />
      <path d="M110 120 L190 120 L170 210 L130 210 Z" fill="#c95a3a" />
      <path d="M130 210 Q 150 260 120 300" stroke="#c95a3a" strokeWidth="18" fill="none" />
      <path d="M170 210 Q 150 260 180 300" stroke="#c95a3a" strokeWidth="18" fill="none" />
      <path d="M120 130 Q 70 110 60 150" stroke="#e8dcc0" strokeWidth="14" fill="none" strokeLinecap="round" />
      <path d="M180 130 Q 230 110 240 150" stroke="#e8dcc0" strokeWidth="14" fill="none" strokeLinecap="round" />
      <circle cx="60" cy="150" r="10" fill={GOLD} />
      <circle cx="240" cy="150" r="10" fill={GOLD} />
      <path d="M150 70 L150 44 M140 54 L120 40 M160 54 L180 40" stroke={GOLD} strokeWidth="3" />
    </svg>
  );
}

function MaskShape() {
  return (
    <svg viewBox="0 0 300 260" className="h-full w-auto" aria-hidden>
      <path d="M60 80 Q150 30 240 80 Q258 150 210 200 Q150 235 90 200 Q42 150 60 80 Z" fill="#b83a28" stroke={GOLD} strokeWidth="3" />
      <circle cx="110" cy="130" r="22" fill="#e8dcc0" />
      <circle cx="190" cy="130" r="22" fill="#e8dcc0" />
      <circle cx="110" cy="130" r="8" fill="#1c0915" />
      <circle cx="190" cy="130" r="8" fill="#1c0915" />
      <path d="M140 170 Q 150 180 160 170" stroke="#1c0915" strokeWidth="4" fill="none" />
      <path d="M90 80 L70 50 M210 80 L230 50" stroke="#b83a28" strokeWidth="8" />
      <circle cx="70" cy="48" r="8" fill={GOLD} />
      <circle cx="230" cy="48" r="8" fill={GOLD} />
      <path d="M120 200 Q 150 225 180 200" fill="none" stroke={GOLD} strokeWidth="3" />
    </svg>
  );
}

function RobeShape() {
  return (
    <svg viewBox="0 0 300 300" className="h-full w-auto" aria-hidden>
      <circle cx="150" cy="60" r="18" fill="#d8b088" />
      <path d="M110 100 L190 100 L200 240 L100 240 Z" fill="#8a2f2f" />
      <path d="M120 100 L150 160 L180 100" fill="#7a2020" />
      <path d="M100 240 Q 150 260 200 240" stroke="#6a1a1a" strokeWidth="8" fill="none" />
      <path d="M150 100 L150 240" stroke="#f0d090" strokeWidth="3" />
    </svg>
  );
}

function WheelShape() {
  return (
    <svg viewBox="0 0 300 300" className="h-full w-auto" aria-hidden>
      <circle cx="150" cy="150" r="95" fill="#e8dcc0" stroke={GOLD} strokeWidth="6" />
      <circle cx="150" cy="150" r="80" fill="none" stroke="#b08d2a" strokeWidth="2" />
      <circle cx="150" cy="150" r="22" fill="#1e4e79" />
      <circle cx="150" cy="150" r="10" fill={GOLD} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1={150}
          y1={150}
          x2={150}
          y2={55}
          stroke="#b08d2a"
          strokeWidth="3"
          transform={`rotate(${deg} 150 150)`}
        />
      ))}
      <g transform="rotate(22 150 150)">
        {[0, 1, 2].map((i) => (
          <text key={i} x={150 + (i - 1) * 30} y={150 + 42} fontSize="16" fill="#1e4e79" textAnchor="middle">
            ༀ
          </text>
        ))}
      </g>
      <rect x="142" y="245" width="16" height="26" fill="#1f3b33" />
    </svg>
  );
}

function LampsShape() {
  return (
    <svg viewBox="0 0 300 220" className="h-full w-auto" aria-hidden>
      {[60, 95, 130, 165, 200, 235].map((x, i) => (
        <g key={i}>
          <path d={`M${x - 8} 170 q 8 14 16 0 l -8 -22 Z`} fill="#e8c050" opacity={0.9} />
          <rect x={x - 9} y={168} width="18" height="7" rx="2" fill="#8a6a3a" />
          <rect x={x - 12} y={175} width="24" height="34" rx="3" fill="#2a3a4a" />
          <rect x={x - 12} y={175} width="24" height="6" fill="#1f3b33" />
          <path d={`M${x} 170 q 0 -12 6 -16`} stroke="#e8c050" strokeWidth="2" fill="none" opacity={0.8} />
        </g>
      ))}
      <rect x="20" y="210" width="260" height="8" fill="#16232e" />
    </svg>
  );
}

function ManuscriptShape() {
  return (
    <svg viewBox="0 0 300 260" className="h-full w-auto" aria-hidden>
      <g transform="rotate(-8 120 150)">
        <rect x="40" y="90" width="100" height="140" rx="4" fill="#dcc48e" stroke="#8a6a2a" strokeWidth="2" />
        <rect x="140" y="90" width="100" height="140" rx="4" fill="#dcc48e" stroke="#8a6a2a" strokeWidth="2" />
      </g>
      <g transform="rotate(-8 120 150)">
        <path d="M60 110 q 30 8 60 0 M60 130 q 30 8 60 0 M60 150 q 30 8 60 0 M60 170 q 30 8 60 0 M60 190 q 30 8 60 0" stroke="#1e4e79" strokeWidth="3" fill="none" opacity={0.8} />
        <path d="M160 110 q 30 8 60 0 M160 130 q 30 8 60 0 M160 150 q 30 8 60 0 M160 170 q 30 8 60 0 M160 190 q 30 8 60 0" stroke="#1e4e79" strokeWidth="3" fill="none" opacity={0.8} />
        <circle cx="78" cy="100" r="6" fill="#b83a28" />
      </g>
      <circle cx="200" cy="150" r="34" fill={GOLD} opacity={0.85} />
      <path d="M186 150 a 14 14 0 0 1 28 0" fill="none" stroke="#1e4e79" strokeWidth="3" />
      <path d="M176 150 l 24 8 M176 150 l 24 -8" stroke="#1e4e79" strokeWidth="3" />
    </svg>
  );
}

function HornShape() {
  return (
    <svg viewBox="0 0 300 300" className="h-full w-auto" aria-hidden>
      <path d="M230 260 L120 170 Q90 140 70 90 Q50 60 30 40" stroke="#d4af37" strokeWidth="10" fill="none" strokeLinecap="round" />
      <circle cx="230" cy="260" r="18" fill="none" stroke="#d4af37" strokeWidth="8" />
      <circle cx="230" cy="260" r="7" fill="#1e4e79" />
      <path d="M90 120 q 40 8 60 0 M70 100 q 40 8 60 0" stroke="#8a6a2a" strokeWidth="2" fill="none" />
    </svg>
  );
}

function Snow({ className = "" }: { className?: string }) {
  const flakes = Array.from({ length: 26 }, (_, i) => {
    const style: CSSProperties & Record<string, string> = {
      left: `${(i * 37) % 100}%`,
      animationDuration: `${5 + (i % 5)}s`,
      animationDelay: `${-i * 0.6}s`,
      "--fl-x": `${-20 + (i % 40)}px`,
      "--fl-y": `${80 + (i % 60)}px`,
    } as CSSProperties & Record<string, string>;
    return (
      <span
        key={i}
        className="absolute top-0 h-[5px] w-[2px] rounded-full bg-ivory/80"
        style={{ ...style, animation: `snowfall ${5 + (i % 5)}s linear ${-i * 0.6}s infinite` }}
      />
    );
  });
  return (
    <div className={`pointer-events-none overflow-hidden ${className}`}>
      {flakes}
      <style>{`@keyframes snowfall { to { transform: translateY(120vh) translateX(20px); opacity: 0.9; } }`}</style>
    </div>
  );
}
