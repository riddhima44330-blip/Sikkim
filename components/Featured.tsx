"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { MONASTERIES } from "@/lib/data";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { MonasteryDrawer } from "./MonasteryDrawer";
import { Mist, Dust } from "./atmosphere";

import { HimalayanPageBackground } from "./HimalayanPageBackground";

export function Featured() {
  const { t } = useLang();
  const [selected, setSelected] = useState<string | null>(null);
  const chosen = MONASTERIES.find((m) => m.id === selected) ?? null;

  return (
    <section id="featured" aria-label="Featured Monasteries" className="relative overflow-hidden py-24">
      <HimalayanPageBackground />
      <Mist seed={12} density={5} />
      <Dust seed={13} count={22} />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <header className="mb-16 text-center">
          <p className="divider-ornament mb-4 text-xs uppercase tracking-[0.4em] text-gold-soft/80">
            {t("featured.kicker")}
          </p>
          <h2 className="font-title text-4xl sm:text-6xl">
            <span className="gold-text">{t("featured.title")}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-subtitle text-lg italic text-ivory-dim/85">
            {t("featured.subtitle")}
          </p>
        </header>

        <div className="flex flex-col gap-24">
          {MONASTERIES.map((m, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={m.id} variant={flip ? "left" : "right"} className="group">
                <article
                  className="relative grid overflow-hidden rounded-3xl border border-gold/15 shadow-deep transition-all duration-700 hover:-translate-y-2 hover:border-gold/50 hover:shadow-[0_40px_90px_-30px_rgba(212,175,55,0.35)] lg:grid-cols-2"
                >
                  {/* full-bleed image */}
                  <div className={`relative h-64 overflow-hidden sm:h-80 lg:h-auto ${flip ? "lg:order-2" : ""}`}>
                    <Photo scene={m.scene} src={m.image} seed={i + 50} alt={m.name} sizes="(min-width: 1024px) 50vw, 100vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                    {m.hiddenGem && (
                      <span className="absolute left-4 top-4 rounded-full border border-gold/50 bg-[#28131F]/85 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold-soft">
                        ◆ {t("drawer.hiddenGem")}
                      </span>
                    )}
                  </div>

                  {/* glass panel */}
                  <div className={`relative flex flex-col justify-center p-7 sm:p-12 ${flip ? "lg:order-1" : ""}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,rgba(212,175,55,0.1),transparent_55%)]" />
                    <div className="relative">
                      <p className="font-subtitle text-sm italic text-gold-soft/85">{m.district} · {m.tradition}</p>
                      <h3 className="mt-2 font-title text-3xl text-ivory sm:text-4xl">{m.name}</h3>
                      <p className="mt-1 font-subtitle text-lg italic text-gold-soft/70">{m.tagline}</p>
                      <p className="mt-4 max-w-md text-sm leading-relaxed text-ivory-dim/85">{m.description}</p>

                      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.2em] text-ivory-dim/60">
                        <span>
                          {t("featured.year")}: <span className="text-gold-soft/90">{m.yearBuilt}</span>
                        </span>
                      </div>

                      <button onClick={() => setSelected(m.id)} className="btn-gold mt-7">
                        {t("featured.explore")} <span aria-hidden>→</span>
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      {chosen && (
        <MonasteryDrawer
          monastery={chosen}
          onClose={() => setSelected(null)}
          onExploreHistory={() => {
            setSelected(null);
            document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      )}
    </section>
  );
}
