"use client";

import { useLang } from "@/lib/i18n";
import { Dust, Mist, PrayerFlagString, ButterLamps } from "./atmosphere";
import { Scenic } from "./Scenic";
import { Reveal } from "./Reveal";

/**
 * PART 2 — The Homepage / monastery chamber.
 * Warm sunlight from the side, mountains framed by arches, prayer flags
 * hanging from the ceiling, dust drifting. The real website begins here.
 */
export function Chamber() {
  const { t } = useLang();

  return (
    <section
      id="home"
      aria-label="Home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* chamber walls */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#28131F] via-[#180C14] to-[#12080F]" />

      {/* warm sunlight from the left */}
      <div className="absolute left-0 top-0 h-full w-[30%] bg-gradient-to-r from-gold/15 via-gold/5 to-transparent" />

      {/* arches through which the mountains are visible */}
      <div className="absolute left-[6%] top-[16%] hidden h-[70vh] w-[26vw] overflow-hidden md:block" style={{ borderRadius: "999px 999px 0 0" }}>
        <Scenic scene="pemayangtse" seed={11} />
      </div>
      <div className="absolute right-[6%] top-[18%] hidden h-[60vh] w-[22vw] overflow-hidden md:block" style={{ borderRadius: "999px 999px 0 0" }}>
        <Scenic scene="phodong" seed={23} />
      </div>
      {/* arch mullions */}
      <div className="absolute left-[6%] top-[16%] hidden h-[70vh] w-[26vw] md:block" style={{ borderRadius: "999px 999px 0 0", boxShadow: "inset 0 0 0 14px rgba(22,35,46,0.85), inset 0 0 60px rgba(0,0,0,0.5)" }} />
      <div className="absolute right-[6%] top-[18%] hidden h-[60vh] w-[22vw] md:block" style={{ borderRadius: "999px 999px 0 0", boxShadow: "inset 0 0 0 12px rgba(22,35,46,0.85), inset 0 0 60px rgba(0,0,0,0.5)" }} />

      {/* hanging prayer flags from the ceiling */}
      <PrayerFlagString count={14} className="absolute left-0 top-0 w-full opacity-80" />

      {/* floor sheen */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />

      {/* atmosphere */}
      <Dust seed={5} count={26} />
      <Mist seed={8} density={5} />

      {/* side butter lamps */}
      <div className="absolute bottom-4 left-6 hidden sm:block">
        <ButterLamps count={5} />
      </div>
      <div className="absolute bottom-4 right-6 hidden sm:block">
        <ButterLamps count={5} />
      </div>
      {/* central devotion */}
      <div className="relative z-10 flex flex-col items-center px-6 py-32 text-center">
        <Reveal variant="fade">
          <p className="divider-ornament mb-8 text-[11px] uppercase tracking-[0.45em] text-gold-soft/80">
            ☸
          </p>
        </Reveal>

        <Reveal variant="up" delay={120}>
          <h1 className="gold-text font-title text-[clamp(3rem,14vw,9.5rem)] font-bold leading-none tracking-wide drop-shadow-[0_6px_30px_rgba(212,175,55,0.35)]">
            SIKKIM
          </h1>
        </Reveal>

        <Reveal variant="up" delay={260}>
          <p className="mt-6 font-subtitle text-2xl font-light italic tracking-wide text-ivory-dim sm:text-3xl">
            Where the Mist Meets the Divine
          </p>
        </Reveal>

        <Reveal variant="up" delay={400}>
          <div className="mt-12 flex flex-col items-center gap-3 text-gold-soft">
            <span className="scrollcue text-2xl">↓</span>
            <span className="text-xs uppercase tracking-[0.4em]">{t("home.scroll")}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

