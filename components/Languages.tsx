"use client";

import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { Dust, Mist } from "./atmosphere";

const AVAILABLE = [
  { code: "en" as const, name: "English", native: "English", sub: "United Kingdom · India" },
  { code: "hi" as const, name: "Hindi", native: "हिन्दी", sub: "भारत" },
];

const PLANNED = [
  { name: "Nepali", native: "नेपाली" },
  { name: "Bhutia", native: "བོད་སྐད་" },
  { name: "Lepcha", native: "ᰕᰫᰊᰪᰰ" },
  { name: "Tibetan", native: "བོད་ཡིག" },
];

import { HimalayanPageBackground } from "./HimalayanPageBackground";

export function Languages() {
  const { t, lang, setLang } = useLang();

  return (
    <section id="languages" aria-label="Languages" className="relative overflow-hidden px-5 py-24 sm:px-8">
      <HimalayanPageBackground />
      <Mist seed={25} density={4} />
      <Dust seed={26} count={16} />

      <div className="relative mx-auto max-w-4xl text-center">
        <header className="mb-12">
          <p className="divider-ornament mb-4 text-xs uppercase tracking-[0.4em] text-gold-soft/80">
            {t("languages.kicker")}
          </p>
          <h2 className="font-title text-4xl sm:text-5xl">
            <span className="gold-text">{t("languages.title")}</span>
          </h2>
          <p className="mt-4 font-subtitle italic text-ivory-dim/80">{t("languages.subtitle")}</p>
        </header>

        <div className="flex flex-wrap items-stretch justify-center gap-6">
          {AVAILABLE.map((l) => {
            const active = lang === l.code;
            return (
              <Reveal key={l.code} variant="up" delay={120}>
                <button
                  onClick={() => setLang(l.code)}
                  className={`tablet relative flex h-40 w-40 flex-col items-center justify-center rounded-2xl border-2 p-4 transition-all duration-500 ${
                    active
                      ? "border-gold/80 bg-gold/10 shadow-gold-glow"
                      : "border-gold/25 bg-[#28131F]/40 hover:border-gold/50"
                  }`}
                >
                  {/* carved glyphs */}
                  <span className="absolute left-2 top-2 text-gold-soft/50">❖</span>
                  <span className="absolute bottom-2 right-2 text-gold-soft/50">❖</span>
                  <span className="font-title text-2xl text-ivory">{l.native}</span>
                  <span className="mt-2 font-subtitle text-sm text-ivory-dim/80">{l.name}</span>
                  <span className="mt-1 text-[10px] uppercase tracking-wider text-ivory-dim/50">{l.sub}</span>
                  {active && (
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-gold px-2 py-0.5 text-[9px] font-bold text-[#0a1016]">
                      ✓
                    </span>
                  )}
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal variant="fade" className="mt-14">
          <p className="mb-4 text-[11px] uppercase tracking-[0.35em] text-ivory-dim/50">
            {t("languages.planned")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {PLANNED.map((p) => (
              <span
                key={p.name}
                className="flex flex-col items-center rounded-xl border border-dashed border-gold/20 px-5 py-3 opacity-55 transition-opacity hover:opacity-90"
              >
                <span className="font-subtitle text-lg text-ivory-dim">{p.native}</span>
                <span className="text-[10px] uppercase tracking-wider text-ivory-dim/50">{p.name}</span>
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

