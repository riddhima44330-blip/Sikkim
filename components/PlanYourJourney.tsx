"use client";

import { useLang } from "@/lib/i18n";
import { TRIPS } from "@/lib/trips";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { Mist, Dust } from "./atmosphere";

import { HimalayanPageBackground } from "./HimalayanPageBackground";

export function PlanYourJourney() {
  const { t } = useLang();

  return (
    <section id="plan" aria-label="Plan Your Journey" className="relative overflow-hidden px-5 py-24 sm:px-8">
      <HimalayanPageBackground />
      <Mist seed={22} density={5} />
      <Dust seed={23} count={18} />

      <div className="relative mx-auto max-w-7xl">
        <header className="mb-16 text-center">
          <p className="divider-ornament mb-4 text-xs uppercase tracking-[0.4em] text-gold-soft/80">
            {t("plan.kicker")}
          </p>
          <h2 className="font-title text-4xl sm:text-6xl">
            <span className="gold-text">{t("plan.title")}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-subtitle text-lg italic text-ivory-dim/85">
            {t("plan.subtitle")}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRIPS.map((trip, i) => (
            <Reveal key={trip.id} variant="up" delay={(i % 3) * 90}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gold/15 bg-black/30 text-left transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/45 hover:shadow-[0_20px_60px_-20px_rgba(212,175,55,0.4)]">
                <div className="relative h-44 overflow-hidden">
                  <Photo scene={trip.scene} src={trip.image} seed={i + 200} alt={trip.title} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.25em] text-gold-soft/90">
                    {trip.duration}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-title text-xl text-ivory">{trip.title}</h3>
                  <p className="mt-1 font-subtitle text-sm italic text-gold-soft/75">
                    {trip.bestSeason}
                  </p>
                  <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-ivory-dim/70">
                    {trip.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {trip.places.slice(0, 4).map((p) => (
                      <span key={p} className="rounded-full border border-gold/25 bg-[#28131F]/70 px-2.5 py-1 text-[10px] uppercase tracking-wider text-gold-soft/80">
                        {p}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-5">
                    <a
                      href={trip.exploreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold inline-block text-sm"
                    >
                      {t("plan.explore")} <span aria-hidden>→</span>
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-xs uppercase tracking-[0.25em] text-ivory-dim/50">
          {t("plan.note")}
        </p>
      </div>
    </section>
  );
}
