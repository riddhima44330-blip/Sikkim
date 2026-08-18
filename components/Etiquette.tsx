"use client";

import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { Dust, Mist, Fireflies } from "./atmosphere";

const DOS = [
  "Walk clockwise around stupas, prayer wheels and monastery buildings",
  "Spin prayer wheels with your right hand, clockwise",
  "Remove shoes before entering prayer halls",
  "Speak softly inside shrine rooms",
  "Ask permission before photographing monks",
  "Dress modestly",
];

const DONT = [
  "Point your feet toward statues, monks or altars",
  "Touch murals, thangkas or manuscripts",
  "Use flash photography inside shrine halls",
  "Enter restricted meditation or monk-only quarters",
  "Smoke or drink alcohol on monastery grounds",
  "Disrupt ongoing prayers or rituals",
];

const PERMITS = [
  {
    title: "Inner Line Permit (ILP) & Protected Area Permit",
    body: "Indian nationals require an ILP for North Sikkim zones (including Phodong). Foreign nationals need a Protected Area Permit for most areas beyond Gangtok — arrange these through a registered tour operator or the state tourism department before arrival.",
  },
  {
    title: "Where permits are issued",
    body: "The Sikkim Tourism Department (Gangtok), designated checkpoints on entry routes, and the online portal run by the Sikkim government. Carry a valid photo ID and two passport-size photos.",
  },
  {
    title: "Documents to carry",
    body: "Government photo ID (Aadhaar / passport / driving licence), a copy of your itinerary, and hotel details for the permit application.",
  },
  {
    title: "Photography rules",
    body: "Some inner shrine halls forbid photography entirely. Flash is almost always prohibited. Always ask a monk before photographing people or sacred objects.",
  },
  {
    title: "Dress code",
    body: "Cover shoulders and knees. Remove shoes before stepping into shrine halls. A modest scarf or kira around the waist is appreciated.",
  },
  {
    title: "Best hours & closures",
    body: "Visit mornings (8–11 AM) for quiet halls. Some monasteries close on festival afternoons or for special ceremonies — check locally before setting out.",
  },
];

export function Etiquette() {
  const { t } = useLang();

  return (
    <section id="etiquette" aria-label="Visiting etiquette and permits" className="relative overflow-hidden px-5 py-24 sm:px-8">
      {/* Himalayan photo background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/himalayan-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 25%",
            backgroundRepeat: "no-repeat",
            opacity: 0.55,
            filter: "saturate(0.7) brightness(0.65)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 50% 30%, rgba(30,14,24,0.55) 0%, rgba(20,10,16,0.72) 60%, rgba(12,5,8,0.88) 100%)",
          }}
        />
      </div>
      <Mist seed={17} density={5} />
      <Dust seed={18} count={18} />
      <Fireflies seed={21} count={6} className="opacity-60" />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-14 text-center">
          <p className="divider-ornament mb-4 text-xs uppercase tracking-[0.4em] text-gold-soft/80">
            {t("etiquette.kicker")}
          </p>
          <h2 className="font-title text-4xl sm:text-6xl">
            <span className="gold-text">{t("etiquette.title")}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-subtitle text-lg italic text-ivory-dim/85">
            {t("etiquette.subtitle")}
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* ---- left: permits ---- */}
          <Reveal variant="left">
            <div className="carved-panel rounded-3xl p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 text-xl text-gold-soft">🪪</span>
                <h3 className="font-title text-2xl text-ivory">{t("etiquette.permits")}</h3>
              </div>
              <div className="space-y-5">
                {PERMITS.map((p, i) => (
                  <div key={i} className="border-l-2 border-gold/30 pl-4">
                    <h4 className="font-subtitle text-base text-gold-soft">{p.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-ivory-dim/85">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ---- right: two hanging plaques ---- */}
          <Reveal variant="right">
            <div className="flex h-full flex-col justify-center gap-8">
              <HangingPlaque tone="do" title={t("etiquette.dos")} items={DOS} icon="✓" />
              <HangingPlaque tone="dont" title={t("etiquette.donts")} items={DONT} icon="✕" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HangingPlaque({
  tone,
  title,
  items,
  icon,
}: {
  tone: "do" | "dont";
  title: string;
  items: string[];
  icon: string;
}) {
  const wood = tone === "do" ? "from-[#28131F] via-[#1C0A14] to-[#0D060A]" : "from-[#7a1f24] via-[#5a1820] to-[#3a1016]";
  const accent = tone === "do" ? "text-gold-soft" : "text-[#f0a0a0]";
  return (
    <div className="plaque">
      {/* ropes */}
      <div className="mx-auto flex justify-between px-10">
        <span className="h-6 w-px bg-stone-mute/50" />
        <span className="h-6 w-px bg-stone-mute/50" />
      </div>
      <div
        className={`relative rounded-b-2xl rounded-t-sm border-2 border-gold/30 bg-gradient-to-b ${wood} p-6 shadow-deep`}
      >
        {/* plank lines */}
        <div className="pointer-events-none absolute inset-0 opacity-40 [background:repeating-linear-gradient(0deg,rgba(0,0,0,0.25)_0_2px,transparent_2px_34px)]" />
        <h4 className={`relative mb-4 flex items-center gap-2 font-title text-2xl ${accent}`}>
          <span>{icon}</span> {title}
        </h4>
        <ul className="relative space-y-2.5">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm leading-snug text-ivory-dim/90">
              <span className={`mt-0.5 shrink-0 ${accent}`}>{icon}</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
