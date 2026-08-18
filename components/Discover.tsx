"use client";

import { useMemo, useState, type ReactNode } from "react";
import { useLang } from "@/lib/i18n";
import {
  MONASTERIES,
  LANDMARKS,
  DISTRICT_LIST,
  TRADITION_LIST,
  type District,
  type Monastery,
  type Tradition,
} from "@/lib/data";
import { Mist, Dust } from "./atmosphere";
import { Reveal } from "./Reveal";
import { MonasteryDrawer } from "./MonasteryDrawer";
import { scrollToSection } from "./Providers";

type ViewMode = "district" | "heritage" | "popular" | "gems";

const VIEW_OPTIONS: Array<{ id: ViewMode; key: string }> = [
  { id: "district", key: "map.view.district" },
  { id: "heritage", key: "map.view.heritage" },
  { id: "popular", key: "map.view.popular" },
  { id: "gems", key: "map.view.gems" },
];

const DISTRICT_COLOR: Record<District, string> = {
  East: "#e8c050",
  West: "#c95a3a",
  North: "#7fa8c8",
  South: "#8fb88a",
};

const ROUTES: Array<[number, number, number, number]> = [
  [62, 41, 60, 38],
  [62, 41, 33, 55],
  [33, 55, 33, 69],
  [33, 55, 42, 63],
  [42, 63, 47, 66],
  [47, 66, 40, 62],
  [62, 41, 55, 24],
];

const HERITAGE_GLOW: Record<Monastery["heritage"], string> = {
  National: "rgba(232,192,80,0.9)",
  State: "rgba(200,210,220,0.8)",
  Regional: "rgba(200,140,90,0.8)",
};

export function Discover() {
  const { t } = useLang();
  const [query, setQuery] = useState("");
  const [district, setDistrict] = useState<"All" | District>("All");
  const [tradition, setTradition] = useState<"All" | Tradition>("All");
  const [view, setView] = useState<ViewMode>("district");
  const [selected, setSelected] = useState<string | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(
    () =>
      MONASTERIES.filter((m) => {
        if (district !== "All" && m.district !== district) return false;
        if (tradition !== "All" && m.tradition !== tradition) return false;
        if (query && !m.name.toLowerCase().includes(query.toLowerCase())) return false;
        return true;
      }),
    [query, district, tradition],
  );

  const selectedMonastery = MONASTERIES.find((m) => m.id === selected) ?? null;

  const goHistory = () => {
    setSelected(null);
    requestAnimationFrame(() => scrollToSection("#timeline"));
  };

  return (
    <section
      id="discover"
      aria-label="Discover Sikkim"
      className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-12"
    >
      {/* parchment ambience */}
      <div className="absolute inset-0 parchment-texture opacity-[0.12]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#180C14] via-[#28131F] to-[#12080F]" />
      <Mist seed={4} density={6} />
      <Dust seed={6} count={24} />

      {/* header */}
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mb-10 text-center">
          <p className="divider-ornament mb-4 text-xs uppercase tracking-[0.4em] text-gold-soft/80">
            {t("map.kicker")}
          </p>
          <h2 className="font-title text-4xl sm:text-6xl">
            <span className="gold-text">{t("map.title")}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-subtitle text-lg italic text-ivory-dim/85">
            {t("map.subtitle")}
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          {/* ------- left filter panel / bottom sheet ------- */}
          <div className="relative z-20">
            <button
              onClick={() => setFiltersOpen((o) => !o)}
              className="carved-panel flex w-full items-center justify-between rounded-2xl px-5 py-4 font-subtitle text-base text-ivory lg:hidden"
            >
              <span>{t("map.filters")}</span>
              <span className="text-gold">{filtersOpen ? "▲" : "▼"}</span>
            </button>

            <div
              className={`carved-panel mt-0 rounded-2xl p-5 lg:mt-0 lg:sticky lg:top-24 ${
                filtersOpen ? "mt-4 block" : "hidden lg:block"
              }`}
            >
              <h3 className="mb-4 font-subtitle text-lg text-gold-soft">{t("map.search")}</h3>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("map.search") + "…"}
                className="w-full rounded-xl border border-gold/25 bg-black/30 px-4 py-3 font-body text-sm text-ivory placeholder:text-ivory-dim/40 focus:border-gold/60 focus:outline-none"
              />

              <label className="mt-4 block font-subtitle text-sm text-ivory-dim/90">{t("map.district")}</label>
              <div className="mt-2 flex flex-wrap gap-2">
                <FilterChip active={district === "All"} onClick={() => setDistrict("All")}>
                  {t("map.district")}
                </FilterChip>
                {DISTRICT_LIST.map((d) => (
                  <FilterChip key={d} active={district === d} onClick={() => setDistrict(d)}>
                    {d}
                  </FilterChip>
                ))}
              </div>

              <label className="mt-4 block font-subtitle text-sm text-ivory-dim/90">{t("map.type")}</label>
              <div className="mt-2 flex flex-wrap gap-2">
                <FilterChip active={tradition === "All"} onClick={() => setTradition("All")}>
                  {t("map.type")}
                </FilterChip>
                {TRADITION_LIST.map((tr) => (
                  <FilterChip key={tr} active={tradition === tr} onClick={() => setTradition(tr)}>
                    {tr}
                  </FilterChip>
                ))}
              </div>

              <label className="mt-4 block font-subtitle text-sm text-ivory-dim/90">{t("map.viewby")}</label>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {VIEW_OPTIONS.map((v) => (
                  <FilterChip key={v.id} active={view === v.id} onClick={() => setView(v.id)}>
                    {t(v.key)}
                  </FilterChip>
                ))}
              </div>

              {/* legend */}
              <div className="mt-5 border-t border-gold/15 pt-4">
                <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-gold-soft/70">{t("map.legend")}</p>
                {view === "district" ? (
                  DISTRICT_LIST.map((d) => (
                    <LegendRow key={d} color={DISTRICT_COLOR[d]} label={d} />
                  ))
                ) : (
                  <>
                    <LegendRow color={HERITAGE_GLOW.National} label="National" />
                    <LegendRow color={HERITAGE_GLOW.State} label="State" />
                    <LegendRow color={HERITAGE_GLOW.Regional} label="Regional" />
                  </>
                )}
              </div>

              {selectedMonastery && (
                <div className="mt-4">
                  <button onClick={goHistory} className="btn-gold w-full text-sm">
                    ✦ {t("drawer.historyBtn")}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* ------- the map ------- */}
          <div className="relative">
            <Reveal variant="zoom">
              <div className="relative overflow-hidden rounded-2xl border border-gold/20 shadow-deep">
                {/* map chrome — tactical HUD style */}
                <div className="flex items-center justify-between border-b border-[#00ff88]/20 bg-[#050e08]/80 px-5 py-3 backdrop-blur">
                  <div className="flex items-center gap-3 font-title text-sm tracking-[0.2em] text-[#00ff88]">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00ff88]" />
                    </span>
                    SIKKIM — TACTICAL MAP
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#00ff88]/80">
                    <span className="rounded border border-[#00ff88]/30 bg-[#00ff88]/5 px-3 py-1.5 tracking-wider">☷ {t("map.layers")}</span>
                    <span className="rounded border border-[#00ff88]/30 bg-[#00ff88]/5 px-3 py-1.5">▦</span>
                    <span className="rounded bg-[#00ff88]/90 px-3 py-1.5 font-bold text-[#050e08]">✦ {t("map.title")}</span>
                  </div>
                </div>

                {/* TACTICAL MAP CANVAS */}
                <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10]">
                  {/* Dark military ground */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse 70% 60% at 40% 35%, #0d1f12 0%, #091508 40%, #050e06 100%)",
                    }}
                  />

                  {/* Grid overlay — classic BGMI tactical grid */}
                  <svg className="absolute inset-0 h-full w-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
                    {Array.from({ length: 11 }, (_, i) => (
                      <line key={`v${i}`} x1={i * 10} y1="0" x2={i * 10} y2="100"
                        stroke="#00ff88" strokeWidth="0.15" />
                    ))}
                    {Array.from({ length: 11 }, (_, i) => (
                      <line key={`h${i}`} x1="0" y1={i * 10} x2="100" y2={i * 10}
                        stroke="#00ff88" strokeWidth="0.15" />
                    ))}
                  </svg>

                  {/* Glowing elevation contours */}
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
                    <defs>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    {[18, 30, 42, 54, 66, 78].map((y, i) => (
                      <path
                        key={y}
                        d={`M0 ${y} Q 18 ${y - 8} 38 ${y + 4} T 75 ${y - 3} T 100 ${y + 5}`}
                        fill="none"
                        stroke={i < 3 ? "rgba(0,255,136,0.55)" : "rgba(0,200,100,0.3)"}
                        strokeWidth={i < 3 ? 0.5 : 0.3}
                        filter="url(#glow)"
                      />
                    ))}
                    {/* River — cyan tactical */}
                    <path
                      d="M40 0 C 44 22, 30 34, 36 48 C 42 60, 28 72, 34 100"
                      fill="none"
                      stroke="rgba(0,220,255,0.7)"
                      strokeWidth="1.2"
                      filter="url(#glow)"
                    />
                    {/* Routes — dashed tactical roads */}
                    {ROUTES.map(([x1, y1, x2, y2], i) => (
                      <path
                        key={i}
                        d={`M ${x1} ${y1} Q ${(x1 + x2) / 2} ${Math.max(y1, y2) - 7} ${x2} ${y2}`}
                        fill="none"
                        stroke="rgba(255,220,80,0.45)"
                        strokeWidth="0.5"
                        strokeDasharray="1.8 1.2"
                      />
                    ))}
                  </svg>

                  {/* Vignette for depth */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse 75% 70% at 50% 45%, transparent 30%, rgba(0,0,0,0.65) 100%)",
                    }}
                  />

                  {/* Atmospheric scan-line effect */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-5"
                    style={{
                      backgroundImage: "repeating-linear-gradient(0deg, rgba(0,255,136,0.4) 0 1px, transparent 1px 3px)",
                    }}
                  />

                  {/* monastery pins */}
                  {MONASTERIES.map((m) => {
                    const visible = filtered.some((f) => f.id === m.id);
                    const emphasis =
                      view === "popular" && m.popular
                        ? 1.3
                        : view === "gems" && m.hiddenGem
                          ? 1.3
                          : 1;
                    const color =
                      view === "district"
                        ? DISTRICT_COLOR[m.district]
                        : HERITAGE_GLOW[m.heritage];
                    return (
                      <PinButton
                        key={m.id}
                        label={m.name}
                        top={m.mapTop}
                        left={m.mapLeft}
                        color={color}
                        dimmed={!visible}
                        emphasized={emphasis}
                        active={selected === m.id}
                        gem={view === "gems" && m.hiddenGem}
                        onClick={() => setSelected(m.id)}
                      />
                    );
                  })}

                  {/* landmarks */}
                  {LANDMARKS.map((lm) => (
                    <LandmarkPin key={lm.id} label={lm.label} top={lm.mapTop} left={lm.mapLeft} kind={lm.kind} />
                  ))}

                  {/* scale + compass — HUD style */}
                  <div className="absolute bottom-4 left-5 flex items-center gap-3 rounded border border-[#00ff88]/30 bg-[#050e08]/70 px-3 py-1.5 backdrop-blur">
                    <span className="text-[10px] font-mono text-[#00ff88]/80">50 KM</span>
                    <span className="block h-px w-12 bg-gradient-to-r from-[#00ff88] to-transparent" />
                  </div>
                  <div
                    className="absolute bottom-4 right-5 grid h-10 w-10 place-items-center rounded-full border-2 border-[#00ff88]/50 bg-[#050e08]/60 text-sm font-bold text-[#00ff88]"
                    style={{ boxShadow: "0 0 12px rgba(0,255,136,0.3), inset 0 0 8px rgba(0,255,136,0.1)" }}
                  >
                    N
                  </div>

                  {/* no results */}
                  {filtered.length === 0 && (
                    <div className="absolute inset-0 grid place-items-center bg-[#050e08]/60">
                      <p className="px-6 text-center font-subtitle text-lg italic text-[#00ff88]/80">
                        {t("map.noresults")}
                      </p>
                    </div>
                  )}

                  {/* bottom fade */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#050e08] to-transparent" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {selectedMonastery && (
        <MonasteryDrawer
          monastery={selectedMonastery}
          onClose={() => setSelected(null)}
          onExploreHistory={goHistory}
        />
      )}
    </section>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-xs transition-all duration-300 ${
        active
          ? "border-gold bg-gold/15 text-gold-soft shadow-gold-glow"
          : "border-gold/20 text-ivory-dim/70 hover:border-gold/50 hover:text-ivory"
      }`}
    >
      {children}
    </button>
  );
}

function LegendRow({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2 py-1">
      <span className="h-2.5 w-2.5 rounded-full" style={{ background: color, boxShadow: `0 0 8px ${color}` }} />
      <span className="text-xs text-ivory-dim/75">{label}</span>
    </div>
  );
}

function PinButton({
  label,
  top,
  left,
  color,
  dimmed,
  emphasized,
  active,
  gem,
  onClick,
}: {
  label: string;
  top: string;
  left: string;
  color: string;
  dimmed: boolean;
  emphasized: number;
  active: boolean;
  gem?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`group absolute z-10 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
        dimmed ? "scale-75 opacity-25" : ""
      } ${active ? "z-20 scale-125" : ""}`}
      style={{
        top,
        left,
        filter: active
          ? "drop-shadow(0 0 10px rgba(0,255,136,0.9)) drop-shadow(0 0 20px rgba(0,255,136,0.5))"
          : "none",
      }}
      aria-label={label}
    >
      {/* tooltip */}
      <span
        className={`pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded border border-[#00ff88]/40 bg-[#050e08]/90 px-2 py-1 text-[10px] uppercase tracking-wider text-[#00ff88] opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-mono ${
          active ? "opacity-100" : ""
        }`}
      >
        {label}
      </span>
      {/* radar pulse halo */}
      <span
        className="pin-halo absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "rgba(0,255,136,0.4)", opacity: active ? 0.6 : 0.3 }}
      />
      {/* stupa pin */}
      <span
        className="relative block transition-transform duration-500 group-hover:scale-125"
        style={{ transform: `scale(${emphasized})` }}
      >
        <MiniStupa color={color} />
      </span>
      {gem && <span className="absolute -right-1 -top-1 text-xs text-[#00ff88]">◆</span>}
    </button>
  );
}

function MiniStupa({ color }: { color: string }) {
  return (
    <svg width="20" height="26" viewBox="0 0 20 26" aria-hidden>
      <rect x="3" y="21" width="14" height="3" fill="#16232e" />
      <path d="M4 21 Q4 12 10 12 Q16 12 16 21 Z" fill="#efe6d0" stroke="#b08d2a" strokeWidth="0.6" />
      <rect x="8" y="10" width="4" height="3" fill="#d4af37" />
      <polygon points="9.2,10 10,3 10.8,10" fill={color} />
      <circle cx="10" cy="2.4" r="1.4" fill="#d4af37" />
    </svg>
  );
}

function LandmarkPin({ label, top, left, kind }: { label: string; top: string; left: string; kind: string }) {
  const glyph = kind === "lake" ? "◈" : kind === "pass" ? "▲" : kind === "peak" ? "△" : "◦";
  return (
    <div
      className="group absolute z-0 -translate-x-1/2 -translate-y-1/2"
      style={{ top, left }}
      aria-label={label}
    >
      <span className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/70 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-ivory-dim/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {label}
      </span>
      <span className="text-sm text-stone-mute/70 transition-colors group-hover:text-gold-soft/90">{glyph}</span>
    </div>
  );
}

