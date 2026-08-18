"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/i18n";
import { TIMELINE } from "@/lib/data";
import { Photo } from "./Photo";
import { Dust, Mist } from "./atmosphere";
import { HimalayanPageBackground } from "./HimalayanPageBackground";

export function Timeline() {
  const { t, lang } = useLang();
  const railRef = useRef<HTMLDivElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const items = Array.from(rail.querySelectorAll("[data-timeline-item]"));
    const io = new IntersectionObserver(
      (entries) => {
        let best = -1;
        let bestDist = Infinity;
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          const idx = Number(el.dataset.idx ?? -1);
          const center = el.getBoundingClientRect().top + el.offsetHeight / 2;
          const dist = Math.abs(center - window.innerHeight / 2);
          if (dist < bestDist) {
            bestDist = dist;
            best = idx;
          }
        }
        if (best >= 0 && best !== activeIdx) setActiveIdx(best);
      },
      { threshold: 0.05 },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [activeIdx]);

  return (
    <section id="timeline" aria-label="Timeline of Sikkim" className="relative overflow-hidden px-5 py-24 sm:px-8">
      <HimalayanPageBackground overlay={0.45} />
      <div className="absolute inset-0 paper-texture opacity-20 mix-blend-overlay pointer-events-none" />
      <Mist seed={9} density={4} />
      <Dust seed={11} count={12} />

      <div className="relative mx-auto max-w-5xl">
        <header className="mb-16 text-center">
          <p className="divider-ornament mb-4 text-xs uppercase tracking-[0.4em] text-gold-soft/80">
            {t("timeline.kicker")}
          </p>
          <h2 className="font-title text-4xl sm:text-6xl">
            <span className="gold-text">{t("timeline.title")}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-subtitle text-lg italic text-ivory-dim/85">
            {t("timeline.subtitle")}
          </p>
        </header>

        {/* the illuminated rail */}
        <div ref={railRef} className="relative">
          {/* glowing golden thread */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/60 to-transparent" />
          {/* progress filament */}
          <div
            className="absolute left-1/2 top-0 w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-gold-soft to-gold shadow-gold-glow transition-[height] duration-700"
            style={{ height: activeIdx >= 0 ? `${((activeIdx + 0.6) / TIMELINE.length) * 100}%` : "0%" }}
          />

          {TIMELINE.map((ev, i) => {
            const left = i % 2 === 0;
            const active = i <= activeIdx;
            return (
              <div
                key={ev.year}
                data-timeline-item
                data-idx={i}
                className={`relative mb-16 grid items-center gap-6 pl-8 sm:grid-cols-2 sm:gap-16 sm:pl-0 ${
                  left ? "" : ""
                }`}
              >
                {/* node on the thread */}
                <div
                  className={`absolute left-1/2 top-2 hidden -translate-x-1/2 sm:block ${
                    active ? "text-gold-soft" : "text-stone-mute/60"
                  } transition-colors duration-700`}
                >
                  <span className="text-xl">☸</span>
                </div>

                {/* card */}
                <div
                  className={`group ${
                    left ? "sm:col-start-1 sm:pr-4 sm:text-right" : "sm:col-start-2 sm:pl-4 sm:text-left"
                  }`}
                >
                  <div
                    className={`manuscript-unfold relative rounded-2xl border p-5 transition-colors duration-700 ${
                      active
                        ? "border-gold/40 bg-maroon-900/50 shadow-[0_0_40px_-16px_rgba(212,175,55,0.5)]"
                        : "border-gold/15 bg-black/25"
                    }`}
                    style={{ animationDelay: "0.1s" }}
                  >
                    {/* wax seal */}
                    <div
                      className={`absolute -top-3 left-5 h-6 w-6 rounded-full bg-gradient-to-br from-gold to-gold-dim ring-2 ring-gold/40 transition-opacity duration-700 ${
                        active ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <p className="font-title text-3xl text-gold-soft">{ev.year}</p>
                    <h3 className="mt-2 font-subtitle text-2xl text-ivory">{lang === "hi" ? ev.titleHi : ev.title}</h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-ivory-dim/85">
                      {lang === "hi" ? ev.bodyHi : ev.body}
                    </p>
                    {/* authentic real source photo */}
                    <div className="mt-4 h-36 sm:h-44 overflow-hidden rounded-xl border border-gold/30 shadow-md relative">
                      <img
                        src={ev.image}
                        alt={ev.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    </div>
                    <div className="mt-3 h-px w-full bg-gradient-to-r from-gold/40 via-gold/15 to-transparent" />
                  </div>
                </div>
              </div>
            );
          })}

          {/* endpoints */}
          <div className="flex justify-between pt-2 font-subtitle text-xs uppercase tracking-[0.3em] text-gold-soft/60">
            <span>{t("timeline.past")}</span>
            <span>{t("timeline.present")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}