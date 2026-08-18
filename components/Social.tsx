"use client";

import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { Mist, Dust } from "./atmosphere";

const CHANNELS = [
  {
    id: "instagram",
    label: "Instagram",
    handle: "@sikkim",
    url: "https://www.instagram.com/explore/tags/sikkim/",
    glyph: "◈",
    desc: "tag #Sikkim",
  },
  {
    id: "youtube",
    label: "YouTube",
    handle: "Sikkim Films",
    url: "https://www.youtube.com/results?search_query=sikkim+documentary",
    glyph: "▶",
    desc: "films & journeys",
  },
  {
    id: "facebook",
    label: "Facebook",
    handle: "Sikkim Tourism",
    url: "https://www.facebook.com/SikkimTourism",
    glyph: "f",
    desc: "official updates",
  },
  {
    id: "twitter",
    label: "X",
    handle: "@SikkimTourism",
    url: "https://x.com/SikkimTourism",
    glyph: "𝕏",
    desc: "quick threads",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    handle: "Travel Helpdesk",
    url: "https://wa.me/919873000000?text=Namaste!%20I%20am%20planning%20a%20journey%20to%20Sikkim.",
    glyph: "◉",
    desc: "ask a traveller",
  },
  {
    id: "tourism",
    label: "Gov Portal",
    handle: "sikkimtourism.gov.in",
    url: "https://www.sikkimtourism.gov.in",
    glyph: "❖",
    desc: "permits & info",
  },
];

import { HimalayanPageBackground } from "./HimalayanPageBackground";

export function Social() {
  const { t } = useLang();

  return (
    <section id="social" aria-label="Follow Sikkim Online" className="relative overflow-hidden px-5 py-24 sm:px-8">
      <HimalayanPageBackground />
      <Mist seed={28} density={5} />
      <Dust seed={29} count={18} />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-16 text-center">
          <p className="divider-ornament mb-4 text-xs uppercase tracking-[0.4em] text-gold-soft/80">
            {t("social.kicker")}
          </p>
          <h2 className="font-title text-4xl sm:text-6xl">
            <span className="gold-text">{t("social.title")}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-subtitle text-lg italic text-ivory-dim/85">
            {t("social.subtitle")}
          </p>
        </header>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {CHANNELS.map((c, i) => (
            <Reveal key={c.id} variant="up" delay={i * 70}>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-gold/15 bg-black/30 p-6 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/45 hover:shadow-[0_20px_60px_-20px_rgba(212,175,55,0.4)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/40 bg-[#28131F]/70 font-title text-xl text-gold-soft transition-transform duration-500 group-hover:scale-110">
                  {c.glyph}
                </span>
                <span className="font-title text-lg text-ivory">{c.label}</span>
                <span className="text-xs text-gold-soft/70">{c.handle}</span>
                <span className="text-[10px] uppercase tracking-widest text-ivory-dim/50">{c.desc}</span>
              </a>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center font-subtitle text-sm italic text-ivory-dim/60">
          {t("social.share")} — <span className="text-gold-soft">#Sikkim</span>
        </p>
      </div>
    </section>
  );
}
