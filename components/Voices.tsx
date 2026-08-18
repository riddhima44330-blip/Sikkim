"use client";

import { useLang } from "@/lib/i18n";
import { VOICES, type Voice } from "@/lib/data";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { Dust, Mist, Fireflies } from "./atmosphere";

const PLATFORM = {
  instagram: { glyph: "◎", cta: "voices.view", cls: "border-[#e4405f]/60 text-[#f0a0b0]" },
  youtube: { glyph: "▶", cta: "voices.watch", cls: "border-[#d33]/60 text-[#f0958f]" },
  blog: { glyph: "✎", cta: "voices.read", cls: "border-gold/50 text-gold-soft" },
} as const;

import { HimalayanPageBackground } from "./HimalayanPageBackground";

export function Voices() {
  const { t } = useLang();

  return (
    <section id="voices" aria-label="Voices from the path" className="relative overflow-hidden px-5 py-24 sm:px-8">
      <HimalayanPageBackground />
      <Mist seed={22} density={5} />
      <Dust seed={23} count={18} />
      <Fireflies seed={24} count={6} className="opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        <header className="mb-12 text-center">
          <p className="divider-ornament mb-4 text-xs uppercase tracking-[0.4em] text-gold-soft/80">
            {t("voices.kicker")}
          </p>
          <h2 className="font-title text-4xl sm:text-6xl">
            <span className="gold-text">{t("voices.title")}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-subtitle text-lg italic text-ivory-dim/85">
            {t("voices.subtitle")}
          </p>
        </header>

        <Reveal variant="fade">
          <div className="horiz-track flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 sm:gap-8">
            {VOICES.map((v) => (
              <VoiceFlag key={v.id} voice={v} />
            ))}
          </div>
        </Reveal>

        {/* share CTA */}
        <Reveal variant="up" className="text-center">
          <div className="mx-auto mt-12 max-w-lg rounded-3xl border border-gold/25 bg-maroon-900/40 p-8 backdrop-blur">
            <p className="text-2xl">🏳️</p>
            <h3 className="mt-3 font-title text-2xl text-ivory">
              <span className="gold-text">#Sikkim</span>
            </h3>
            <p className="mt-2 font-subtitle italic text-ivory-dim/85">{t("voices.shareSub")}</p>
            <a
              href="https://www.instagram.com/explore/tags/sikkim/"
              target="_blank"
              rel="noreferrer"
              className="btn-gold mt-6"
            >
              {t("voices.share")} →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function VoiceFlag({ voice }: { voice: Voice }) {
  const { t } = useLang();
  const p = PLATFORM[voice.platform];
  return (
    <article
      className="group relative shrink-0 snap-start"
      style={{
        width: "min(80vw, 17rem)",
        clipPath: "polygon(0 0, 100% 0, 100% 88%, 82% 100%, 80% 90%, 60% 100%, 58% 90%, 40% 100%, 38% 90%, 18% 100%, 0 88%)",
      }}
    >
      {/* flag body */}
      <div
        className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-b from-[#28131F] to-[#12080F] transition-transform duration-500 group-hover:-translate-y-1"
        style={{ animation: "flagwave 6s ease-in-out infinite" }}
      >
        <a href={voice.url} target="_blank" rel="noreferrer" aria-label={`${voice.handle} — ${voice.caption}`}>
          <div className="relative h-40 overflow-hidden">
            <Photo scene={voice.scene} seed={3} alt={voice.caption} sizes="(min-width: 640px) 17rem, 80vw" />
            <span className={`absolute left-3 top-3 flex items-center gap-1 rounded-full border bg-black/60 px-2.5 py-1 text-[10px] font-semibold tracking-wide ${p.cls}`}>
              {p.glyph} / {voice.platform}
            </span>
          </div>
          <div className="flex items-center justify-between px-4 pt-3">
            <span className="font-subtitle text-base text-ivory">{voice.handle}</span>
            <span className="text-xs text-gold-soft/80">↗</span>
          </div>
          <p className="px-4 pb-2 pt-1 font-body text-sm leading-snug text-ivory-dim/85">
            &ldquo;{voice.caption}&rdquo;
          </p>
        </a>
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 pb-4">
          <span className="flex items-center gap-1 rounded-full border border-gold/25 bg-gold/5 px-2 py-0.5 text-[10px] uppercase tracking-wider text-gold-soft/90">
            ✦ {t("voices.location")} {voice.location}
          </span>
          <a
            href={voice.url}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium text-gold-soft underline-offset-4 hover:underline"
          >
            {t(p.cta)} →
          </a>
        </div>
      </div>
    </article>
  );
}