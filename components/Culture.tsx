"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { CULTURE, type CultureExhibit } from "@/lib/data";
import { FESTIVALS, type Festival } from "@/lib/festivals";
import { Reveal } from "./Reveal";
import { Dust, Mist } from "./atmosphere";
import { HimalayanPageBackground } from "./HimalayanPageBackground";

export function Culture() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState<CultureExhibit | null>(null);
  const [festival, setFestival] = useState<Festival | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setFestival(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="culture" aria-label="Culture and Traditions" className="relative overflow-hidden px-5 py-24 sm:px-8">
      <HimalayanPageBackground />
      <Mist seed={15} density={5} />
      <Dust seed={16} count={20} />

      <div className="relative mx-auto max-w-7xl">
        <header className="mb-16 text-center">
          <p className="divider-ornament mb-4 text-xs uppercase tracking-[0.4em] text-gold-soft/80">
            {t("culture.kicker")}
          </p>
          <h2 className="font-title text-4xl sm:text-6xl">
            <span className="gold-text">{t("culture.title")}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-subtitle text-lg italic text-ivory-dim/85">
            {t("culture.subtitle")}
          </p>
        </header>

        {/* Culture & Traditions Grid with Real Online Photos */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CULTURE.map((ex, i) => (
            <Reveal key={ex.id} variant="up" delay={(i % 3) * 90}>
              <button
                onClick={() => setOpen(ex)}
                className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-gold/20 bg-black/40 text-left transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_20px_60px_-20px_rgba(212,175,55,0.4)]"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={ex.image}
                    alt={ex.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.25em] text-gold-soft/90">
                    ✦ SACRED HERITAGE
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-title text-xl text-ivory">{lang === "hi" ? ex.titleHi : ex.title}</h3>
                  <p className="mt-1 font-subtitle text-sm italic text-gold-soft/75">
                    {lang === "hi" ? ex.subtitleHi : ex.subtitle}
                  </p>
                  <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-ivory-dim/70">
                    {lang === "hi" ? ex.bodyHi : ex.body}
                  </p>
                  <span className="mt-4 text-sm text-gold-soft/70 transition-transform duration-500 group-hover:translate-x-1">
                    {t("culture.close").split(" ")[0]} →
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Festivals of the Year Grid with Real Online Photos */}
        <div className="mt-20">
          <div className="mb-8 text-center">
            <h3 className="font-title text-2xl text-gold-soft sm:text-3xl">{t("culture.festivals")}</h3>
            <p className="mx-auto mt-3 max-w-xl font-subtitle text-sm italic text-ivory-dim/70">
              {t("culture.festivalsSub")}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FESTIVALS.map((f, i) => (
              <Reveal key={f.id} variant="up" delay={(i % 3) * 90}>
                <button
                  onClick={() => setFestival(f)}
                  className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-gold/20 bg-black/40 text-left transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_20px_60px_-20px_rgba(212,175,55,0.4)]"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={f.image}
                      alt={f.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <span className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.25em] text-gold-soft/90">
                      ✦ {f.month}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-title text-xl text-ivory">{f.name}</h3>
                    <p className="mt-1 font-subtitle text-sm italic text-gold-soft/75">
                      {f.community} · {f.location}
                    </p>
                    <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-ivory-dim/70">{f.significance}</p>
                    <span className="mt-4 text-sm text-gold-soft/70 transition-transform duration-500 group-hover:translate-x-1">
                      Explore →
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Unfolding Culture Manuscript Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6">
          <button aria-label={t("culture.close")} onClick={() => setOpen(null)} className="absolute inset-0 h-full w-full bg-black/75 backdrop-blur-sm" />
          <div
            className="manuscript-unfold relative z-10 max-h-[88vh] w-full max-w-2xl overflow-hidden rounded-t-3xl border border-gold/30 paper-texture shadow-deep sm:rounded-3xl bg-[#180C14]"
            role="dialog"
            aria-modal="true"
            aria-label={open.title}
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border border-gold/40 bg-black/60 text-gold-soft hover:bg-gold/20 transition-colors"
            >
              ✕
            </button>
            <div className="relative h-56 overflow-hidden sm:h-72">
              <img
                src={open.image}
                alt={open.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#180C14] via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <h3 className="font-title text-3xl text-ivory">{lang === "hi" ? open.titleHi : open.title}</h3>
                <p className="font-subtitle italic text-gold-soft/85">{lang === "hi" ? open.subtitleHi : open.subtitle}</p>
              </div>
            </div>
            <div className="max-h-[52vh] overflow-y-auto px-6 pb-8 pt-5 sm:px-9">
              <div className="mb-5 h-px w-24 bg-gold/50" />
              <p className="font-body text-sm leading-7 text-[#f0e6cf]/90 sm:text-base">
                {lang === "hi" ? open.bodyHi : open.body}
              </p>
              <button onClick={() => setOpen(null)} className="btn-gold mt-7">
                {t("culture.close")}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Festival Detail Modal */}
      {festival && (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6">
          <button
            aria-label={t("culture.close")}
            onClick={() => setFestival(null)}
            className="absolute inset-0 h-full w-full bg-black/75 backdrop-blur-sm"
          />
          <div
            className="manuscript-unfold relative z-10 max-h-[88vh] w-full max-w-2xl overflow-hidden rounded-t-3xl border border-gold/30 paper-texture shadow-deep sm:rounded-3xl bg-[#180C14]"
            role="dialog"
            aria-modal="true"
            aria-label={festival.name}
          >
            <button
              onClick={() => setFestival(null)}
              className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border border-gold/40 bg-black/60 text-gold-soft hover:bg-gold/20 transition-colors"
            >
              ✕
            </button>
            <div className="relative h-56 overflow-hidden sm:h-72">
              <img
                src={festival.image}
                alt={festival.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#180C14] via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <h3 className="font-title text-3xl text-ivory">{festival.name}</h3>
                <p className="font-subtitle italic text-gold-soft/85">
                  {festival.month} · {festival.community}
                </p>
              </div>
            </div>
            <div className="max-h-[52vh] overflow-y-auto px-6 pb-8 pt-5 sm:px-9">
              <div className="mb-5 h-px w-24 bg-gold/50" />
              <div className="mb-4 flex flex-wrap gap-1.5">
                <span className="rounded-full border border-gold/25 bg-[#28131F] px-3 py-1 text-[10px] uppercase tracking-wider text-gold-soft">
                  📍 {festival.location}
                </span>
                <span className="rounded-full border border-gold/25 bg-[#28131F] px-3 py-1 text-[10px] uppercase tracking-wider text-gold-soft">
                  📅 {festival.bestTime}
                </span>
              </div>
              <h4 className="text-xs uppercase tracking-[0.25em] text-gold-soft/80">{t("culture.history")}</h4>
              <p className="mt-2 font-body text-sm leading-7 text-[#f0e6cf]/90">{festival.history}</p>
              <h4 className="mt-5 text-xs uppercase tracking-[0.25em] text-gold-soft/80">{t("culture.significance")}</h4>
              <p className="mt-2 font-body text-sm leading-7 text-[#f0e6cf]/90">{festival.significance}</p>
              <h4 className="mt-5 text-xs uppercase tracking-[0.25em] text-gold-soft/80">{t("culture.celebrated")}</h4>
              <p className="mt-2 font-body text-sm leading-7 text-[#f0e6cf]/90">{festival.celebrated}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={festival.videoUrl} target="_blank" rel="noopener noreferrer" className="btn-gold text-sm">
                  {t("activities.videos")} ▶
                </a>
                <a
                  href={festival.reelUrl}
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