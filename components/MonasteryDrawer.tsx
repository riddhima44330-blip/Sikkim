"use client";

import { useEffect } from "react";
import { useLang } from "@/lib/i18n";
import { MONASTERIES, type Monastery } from "@/lib/data";
import { Photo } from "./Photo";

export function MonasteryDrawer({
  monastery,
  onClose,
  onExploreHistory,
}: {
  monastery: Monastery;
  onClose: () => void;
  onExploreHistory: () => void;
}) {
  const { t } = useLang();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(monastery.mapsQuery)}`;
  const nearby = MONASTERIES.filter((m) => monastery.nearby.includes(m.name));

  return (
    <div className="fixed inset-0 z-50">
      {/* scrim */}
      <button
        aria-label={t("drawer.close")}
        onClick={onClose}
        className="absolute inset-0 h-full w-full bg-black/70 backdrop-blur-sm"
      />
      {/* drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={monastery.name}
        className="glass-warm absolute inset-y-0 right-0 flex w-full max-w-lg flex-col overflow-hidden border-gold/20 shadow-[0_0_80px_-20px_rgba(0,0,0,0.9)]"
        style={{ animation: "drawerslide 0.7s cubic-bezier(0.22,1,0.36,1) both" }}
      >
        <div className="relative h-60 shrink-0 overflow-hidden">
          <Photo scene={monastery.scene} src={monastery.image} seed={17} alt={monastery.name} sizes="(min-width: 640px) 32rem, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#180C14] via-transparent to-black/30" />
          <button
            onClick={onClose}
            aria-label={t("drawer.close")}
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-gold/40 bg-black/50 text-gold-soft transition-colors hover:bg-black/70"
          >
            ✕
          </button>
          {monastery.hiddenGem && (
            <span className="absolute left-4 top-4 rounded-full border border-gold/50 bg-[#28131F]/85 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold-soft">
              ◆ {t("drawer.hiddenGem")}
            </span>
          )}
        </div>

        <div className="lenis-prevent min-h-0 flex-1 overflow-y-auto px-6 py-6">
          <p className="mb-1 font-subtitle text-sm italic text-gold-soft/80">{monastery.tagline}</p>
          <h3 className="font-title text-3xl text-ivory">{monastery.name}</h3>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <Fact label={t("drawer.year")} value={monastery.yearBuilt} />
            <Fact label={t("drawer.founder")} value={monastery.founder} />
            <Fact label={t("drawer.sect")} value={monastery.tradition} />
            <Fact label={t("drawer.heritage")} value={monastery.heritage} />
          </div>

          <DrawerBlock title={t("drawer.architecture")} body={monastery.architecture} />
          <DrawerBlock title={t("drawer.history")} body={monastery.history} />

          <div className="mt-5">
            <h4 className="mb-2 font-subtitle text-sm uppercase tracking-[0.25em] text-gold-soft">
              {t("drawer.festivals")}
            </h4>
            <div className="flex flex-wrap gap-2">
              {monastery.festivals.map((f) => (
                <span key={f} className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs text-ivory-dim">
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <h4 className="mb-1 font-subtitle text-sm uppercase tracking-[0.25em] text-gold-soft">
              {t("drawer.hours")}
            </h4>
            <p className="text-sm text-ivory-dim/85">{monastery.hours}</p>
          </div>

          <DrawerBlock title={t("drawer.facts")} list={monastery.facts} />

          {/* visitor guidelines summary */}
          <div className="mt-5 rounded-xl border border-gold/25 bg-[#28131F]/70 p-4">
            <h4 className="mb-2 font-subtitle text-sm uppercase tracking-[0.25em] text-gold-soft">
              {t("drawer.guidelines")}
            </h4>
            <ul className="space-y-1.5 text-sm text-ivory-dim/90">
              <li>• Walk clockwise · spin wheels with the right hand</li>
              <li>• Remove shoes before entering prayer halls</li>
              <li>• No flash photography inside shrine rooms</li>
              <li>• Cover shoulders and knees · speak softly</li>
            </ul>
          </div>

          {nearby.length > 0 && (
            <div className="mt-5">
              <h4 className="mb-2 font-subtitle text-sm uppercase tracking-[0.25em] text-gold-soft">
                {t("drawer.nearby")}
              </h4>
              <div className="flex flex-wrap gap-2">
                {nearby.map((n) => (
                  <span key={n.id} className="rounded-full border border-gold/20 px-3 py-1 text-xs text-ivory-dim/85">
                    {n.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-7 flex flex-col gap-3">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-gold w-full text-sm"
            >
              ⌖ {t("drawer.maps")}
            </a>
            <button onClick={onExploreHistory} className="btn-gold w-full text-sm">
              ✦ {t("drawer.historyBtn")}
            </button>
          </div>
        </div>

        <style>{`@keyframes drawerslide { from { transform: translateX(40px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`}</style>
      </aside>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-gold/15 bg-black/25 px-3 py-2">
      <p className="text-[10px] uppercase tracking-[0.2em] text-gold-soft/70">{label}</p>
      <p className="mt-0.5 text-sm text-ivory-dim/90">{value}</p>
    </div>
  );
}

function DrawerBlock({
  title,
  body,
  list,
}: {
  title: string;
  body?: string;
  list?: string[];
}) {
  return (
    <div className="mt-5">
      <h4 className="mb-2 font-subtitle text-sm uppercase tracking-[0.25em] text-gold-soft">{title}</h4>
      {body && <p className="text-sm leading-relaxed text-ivory-dim/85">{body}</p>}
      {list && (
        <ul className="space-y-1.5 text-sm leading-relaxed text-ivory-dim/85">
          {list.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

