"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { FAMOUS_PLACES, HIDDEN_GEMS, type Place } from "@/lib/places";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { Mist, Dust } from "./atmosphere";
import { HimalayanPageBackground } from "./HimalayanPageBackground";

function PlaceCard({ place, index }: { place: Place; index: number }) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <Reveal variant="up" delay={(index % 4) * 80}>
        <button
          onClick={() => setOpen(true)}
          className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-gold/15 bg-black/30 text-left transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/45 hover:shadow-[0_20px_60px_-20px_rgba(212,175,55,0.4)]"
        >
          <div className="relative h-40 overflow-hidden sm:h-44">
            <Photo scene={place.scene} src={place.image} seed={index + 500} alt={place.name} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
            {place.gem && (
              <span className="absolute left-3 top-3 rounded-full border border-gold/50 bg-[#28131F]/85 px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] text-gold-soft">
                ◆ {t("places.gem")}
              </span>
            )}
            <span className="absolute bottom-2.5 left-3 text-[10px] uppercase tracking-[0.2em] text-gold-soft/90">
              {place.district}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h3 className="font-title text-lg text-ivory">{place.name}</h3>
            <p className="mt-1 text-[10px] uppercase tracking-widest text-ivory-dim/50">{place.bestTime}</p>
            <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-ivory-dim/70">{place.description}</p>
            <span className="mt-3 text-sm text-gold-soft/70 transition-transform duration-500 group-hover:translate-x-1">
              {t("featured.explore")} →
            </span>
          </div>
        </button>
      </Reveal>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6">
          <button
            aria-label={t("culture.close")}
            onClick={() => setOpen(false)}
            className="absolute inset-0 h-full w-full bg-black/75 backdrop-blur-sm"
          />
          <div
            className="manuscript-unfold relative z-10 max-h-[88vh] w-full max-w-2xl overflow-hidden rounded-t-3xl border border-gold/30 paper-texture shadow-deep sm:rounded-3xl"
            role="dialog"
            aria-modal="true"
            aria-label={place.name}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border border-gold/40 bg-black/60 text-gold-soft"
            >
              ✕
            </button>
            <div className="relative h-52 overflow-hidden sm:h-64">
              <Photo scene={place.scene} src={place.image} seed={688} alt={place.name} sizes="(min-width: 640px) 672px, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#180C14] via-transparent to-black/30" />
              <div className="absolute bottom-4 left-6">
                <h3 className="font-title text-3xl text-ivory">{place.name}</h3>
                <p className="font-subtitle italic text-gold-soft/85">
                  {place.district} · {place.bestTime}
                </p>
              </div>
            </div>
            <div className="max-h-[52vh] overflow-y-auto px-6 pb-8 pt-5 sm:px-9">
              <div className="mb-5 h-px w-24 bg-gold/50" />
              <p className="font-body text-sm leading-7 text-[#f0e6cf]/90 sm:text-base">{place.description}</p>
              {place.hiddenTip && (
                <div className="mt-5 rounded-xl border border-gold/25 bg-[#28131F]/60 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-gold-soft/80">{t("places.tip")}</p>
                  <p className="mt-2 font-subtitle text-sm italic text-ivory/90">{place.hiddenTip}</p>
                </div>
              )}
              <button onClick={() => setOpen(false)} className="btn-gold mt-7">
                {t("culture.close")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function ExplorePlaces() {
  const { t } = useLang();

  return (
    <section id="places" aria-label="Explore Places in Sikkim" className="relative overflow-hidden px-5 py-24 sm:px-8">
      <HimalayanPageBackground />
      <Mist seed={26} density={5} />
      <Dust seed={27} count={20} />

      <div className="relative mx-auto max-w-7xl">
        <header className="mb-16 text-center">
          <p className="divider-ornament mb-4 text-xs uppercase tracking-[0.4em] text-gold-soft/80">
            {t("places.kicker")}
          </p>
          <h2 className="font-title text-4xl sm:text-6xl">
            <span className="gold-text">{t("places.title")}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-subtitle text-lg italic text-ivory-dim/85">
            {t("places.subtitle")}
          </p>
        </header>

        <div className="mb-16">
          <h3 className="mb-6 font-title text-2xl text-gold-soft sm:text-3xl">{t("places.famous")}</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FAMOUS_PLACES.map((p, i) => (
              <PlaceCard key={p.id} place={p} index={i} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 font-title text-2xl text-gold-soft sm:text-3xl">{t("places.gems")}</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HIDDEN_GEMS.map((p, i) => (
              <PlaceCard key={p.id} place={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


