"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { ACTIVITIES, type Activity } from "@/lib/activities";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { Mist, Dust } from "./atmosphere";

import { HimalayanPageBackground } from "./HimalayanPageBackground";

export function ThingsToDo() {
  const { t } = useLang();
  const [open, setOpen] = useState<Activity | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="activities" aria-label="Things to Do in Sikkim" className="relative overflow-hidden px-5 py-24 sm:px-8">
      <HimalayanPageBackground />
      <Mist seed={24} density={5} />
      <Dust seed={25} count={20} />

      <div className="relative mx-auto max-w-7xl">
        <header className="mb-16 text-center">
          <p className="divider-ornament mb-4 text-xs uppercase tracking-[0.4em] text-gold-soft/80">
            {t("activities.kicker")}
          </p>
          <h2 className="font-title text-4xl sm:text-6xl">
            <span className="gold-text">{t("activities.title")}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-subtitle text-lg italic text-ivory-dim/85">
            {t("activities.subtitle")}
          </p>
        </header>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {ACTIVITIES.map((act, i) => (
            <Reveal key={act.id} variant="up" delay={(i % 4) * 70}>
              <button
                onClick={() => setOpen(act)}
                className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-gold/15 bg-black/30 text-left transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/45 hover:shadow-[0_20px_60px_-20px_rgba(212,175,55,0.4)]"
              >
                <div className="relative h-32 overflow-hidden sm:h-36">
                  <Photo scene={act.scene} src={act.image} seed={i + 300} alt={act.title} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute bottom-2.5 left-3 text-[10px] uppercase tracking-[0.2em] text-gold-soft/90">
                    {act.difficulty}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-title text-base text-ivory sm:text-lg">{act.title}</h3>
                  <p className="mt-1 text-[10px] uppercase tracking-widest text-ivory-dim/50">
                    {act.bestSeason}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6">
          <button
            aria-label={t("culture.close")}
            onClick={() => setOpen(null)}
            className="absolute inset-0 h-full w-full bg-black/75 backdrop-blur-sm"
          />
          <div
            className="manuscript-unfold relative z-10 max-h-[88vh] w-full max-w-2xl overflow-hidden rounded-t-3xl border border-gold/30 paper-texture shadow-deep sm:rounded-3xl"
            role="dialog"
            aria-modal="true"
            aria-label={open.title}
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border border-gold/40 bg-black/60 text-gold-soft"
            >
              ✕
            </button>
            <div className="relative h-52 overflow-hidden sm:h-64">
              <Photo scene={open.scene} src={open.image} seed={388} alt={open.title} sizes="(min-width: 640px) 672px, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#180C14] via-transparent to-black/30" />
              <div className="absolute bottom-4 left-6">
                <h3 className="font-title text-3xl text-ivory">{open.title}</h3>
                <p className="font-subtitle italic text-gold-soft/85">
                  {open.difficulty} · {open.duration} · {open.bestSeason}
                </p>
              </div>
            </div>
            <div className="max-h-[52vh] overflow-y-auto px-6 pb-8 pt-5 sm:px-9">
              <div className="mb-5 h-px w-24 bg-gold/50" />
              <p className="font-body text-sm leading-7 text-[#f0e6cf]/90 sm:text-base">{open.description}</p>

              {open.nearby.length > 0 && (
                <div className="mt-5">
                  <h4 className="text-xs uppercase tracking-[0.25em] text-gold-soft/80">{t("activities.nearby")}</h4>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {open.nearby.map((n) => (
                      <span key={n} className="rounded-full border border-gold/25 bg-[#28131F]/70 px-2.5 py-1 text-[10px] uppercase tracking-wider text-gold-soft/80">
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {open.safetyTips.length > 0 && (
                <div className="mt-5">
                  <h4 className="text-xs uppercase tracking-[0.25em] text-gold-soft/80">{t("activities.safety")}</h4>
                  <ul className="mt-2 space-y-1.5">
                    {open.safetyTips.map((s) => (
                      <li key={s} className="flex gap-2 text-sm leading-6 text-[#f0e6cf]/85">
                        <span className="text-gold-soft">◆</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-7 flex flex-wrap gap-3">
                <a href={open.videoUrl} target="_blank" rel="noopener noreferrer" className="btn-gold text-sm">
                  {t("activities.videos")} ▶
                </a>
                <a
                  href={open.reelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/50 px-6 py-3 font-subtitle text-sm tracking-wide text-gold-soft transition-all duration-500 hover:border-gold hover:shadow-[0_0_26px_-6px_rgba(212,175,55,0.55)]"
                >
                  {t("activities.reels")} ◉
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
