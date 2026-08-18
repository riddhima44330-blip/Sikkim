"use client";

import { useEffect, useMemo, useState } from "react";
import { useLang } from "@/lib/i18n";
import { GUIDE_FAQ } from "@/lib/data";
import { Logo } from "./Logo";

// ── Tourism keyword whitelist (Mandala Tourism Assistant) ────────────────────
const TOURISM_KEYWORDS = [
  // Places
  "sikkim","gangtok","pelling","lachung","namchi","ravangla","yuksom","zuluk",
  "tsomgo","gurudongmar","yumthang","zero point","kanchenjunga","teesta",
  "north sikkim","south sikkim","east sikkim","west sikkim","mangan","jorethang",
  "singtam","rangpo","nathula","jelep la","khecheopalri","varsey","phodong",
  // Monasteries / culture
  "monastery","gompa","rumtek","pemayangtse","tashiding","enchey","ralang",
  "phodong","lingdum","dubdi","temple","stupa","prayer","lama","monk","buddhist",
  "cham","thangka","losar","saga dawa","pang lhabsol","bumchu","tihar","dasain",
  "heritage","culture","festival","tradition","dance","music","art","craft",
  "history","lepcha","bhutia","nepali","sikkimese","chogyal","kingdom",
  // Tourism activities
  "trek","trekking","hike","hiking","camping","permit","ipa","inner line","restricted",
  "visit","tour","travel","tourist","trip","journey","itinerary","package","sightseeing",
  "taxi","cab","jeep","shared","bus","transport","airport","bagdogra","nhj","siliguri",
  "route","road","drive","distance","how far","how long","how to reach",
  // Nature
  "rhododendron","orchid","wildlife","snow","glacier","lake","waterfall",
  "forest","mountain","valley","altitude","elevation","weather","season",
  "flower","bird","sanctuary","national park","fambong","khangchendzonga",
  "hotel","homestay","lodge","guesthouse","resort","stay","cuisine","food",
];

function isTourismRelated(text: string): boolean {
  const lower = text.toLowerCase();
  return TOURISM_KEYWORDS.some((kw) => lower.includes(kw));
}

const OFF_TOPIC_REPLY =
  "Tashi Delek! 🙏 I am the Mandala Tourism Assistant, your dedicated guide to Sikkim. Ask me about monasteries, trekking, travel permits, places to visit, festivals, local food, the best season to travel — anything about discovering Sikkim!";

interface Message {
  from: "user" | "bot";
  text: string;
}

export function Guide() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    setMessages([
      {
        from: "bot",
        text: "Tashi Delek! 🙏 Welcome to Sikkim. I am your AI Tourism Assistant. How can I help you plan your journey to our sacred monasteries, mountain trails, and heritage sites?",
      },
    ]);
  }, []);

  const ask = (userMsg: string) => {
    if (!userMsg.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text: userMsg }]);
    setInput("");

    setTimeout(() => {
      let reply: string;

      if (!isTourismRelated(userMsg)) {
        reply = OFF_TOPIC_REPLY;
      } else {
        const text = userMsg.toLowerCase();
        const match = GUIDE_FAQ.find((f) => {
          const tokens = f.q.toLowerCase().split(/[^a-z]+/).filter((w) => w.length > 3);
          return tokens.some((tok) => text.includes(tok));
        });
        reply = match
          ? match.a
          : "That's a great question about Sikkim! 🏔️ For up-to-date travel advice, local permits, or seasonal route details, feel free to explore our GIS Atlas or ask about specific destinations like Rumtek, Nathu La, or Yumthang Valley.";
      }

      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    }, 400);
  };

  const suggested = useMemo(() => GUIDE_FAQ.slice(0, 5).map((f) => f.q), []);

  return (
    <>
      {/* ── Floating trigger button ── */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={t("guide.title")}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full px-5 py-3 font-subtitle text-sm text-ivory shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_28px_rgba(212,175,55,0.35)]"
        style={{
          background: "linear-gradient(135deg, rgba(14,6,10,0.92) 0%, rgba(28,13,22,0.95) 100%)",
          border: "1px solid rgba(212,175,55,0.45)",
        }}
      >
        <Logo className="h-5 w-5 drop-shadow-[0_0_6px_rgba(212,175,55,0.8)]" />
        <span className="bg-gradient-to-r from-[#D4AF37] via-[#F2E09A] to-[#C89A30] bg-clip-text text-transparent font-semibold tracking-wide">
          {open ? "✕ Close" : t("guide.title")}
        </span>
      </button>

      {/* ── Chat panel ── */}
      <div
        className={`fixed bottom-24 right-5 z-40 w-[min(94vw,26rem)] origin-bottom-right overflow-hidden rounded-3xl transition-all duration-500 ${
          open ? "pointer-events-auto scale-100 opacity-100 translate-y-0" : "pointer-events-none scale-90 opacity-0 translate-y-4"
        }`}
        style={{
          boxShadow: "0 24px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(212,175,55,0.25), inset 0 1px 0 rgba(212,175,55,0.2)",
        }}
        role="dialog"
        aria-label={t("guide.title")}
      >
        {/* Himalayan Mountain Background Image & Glassmorphism Overlay */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/himalayan-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center 25%",
              filter: "brightness(0.38) saturate(0.75)",
              transform: "scale(1.05)",
            }}
          />
          {/* Dark gradient overlay for ultra-crisp text contrast */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(175deg, rgba(8,4,6,0.65) 0%, rgba(20,9,16,0.85) 50%, rgba(6,3,5,0.96) 100%)",
            }}
          />
          {/* Frosted glass backdrop filter */}
          <div
            className="absolute inset-0"
            style={{ backdropFilter: "blur(12px) saturate(1.2)" }}
          />
        </div>

        {/* ── Header ── */}
        <div
          className="relative z-10 px-5 py-4"
          style={{
            borderBottom: "1px solid rgba(212,175,55,0.2)",
            background: "linear-gradient(135deg, rgba(35,14,26,0.7) 0%, rgba(12,5,9,0.5) 100%)",
          }}
        >
          <div className="flex items-center gap-3">
            {/* Avatar glow */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gold/30 blur-md" />
              <div className="relative h-10 w-10 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #28131F 0%, #1A0C14 100%)", border: "1.5px solid rgba(212,175,55,0.6)" }}>
                <Logo className="h-6 w-6 drop-shadow-[0_0_8px_rgba(212,175,55,0.9)]" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <p className="font-title text-base text-ivory leading-tight">Mandala Tourism Assistant</p>
              <p className="text-[11px] italic text-[#C8A96E]/90 leading-tight">Your Sacred Sikkim AI Guide</p>
            </div>

            {/* Live indicator */}
            <div className="flex items-center gap-1.5 rounded-full px-2.5 py-1" style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.35)" }}>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[9px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">Online</span>
            </div>
          </div>

          {/* Scope badge */}
          <div className="mt-2.5 flex items-center gap-1.5 rounded-full w-fit px-3 py-1" style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.25)" }}>
            <span className="text-[10px] text-[#F2C66D] tracking-wide font-medium">🏔️ Monasteries · Trekking · Heritage · Culture · Travel</span>
          </div>
        </div>

        {/* ── Messages Container ── */}
        <div
          className="relative z-10 flex max-h-[42vh] flex-col gap-3 overflow-y-auto p-4 scroll-smooth"
          style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(212,175,55,0.25) transparent" }}
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.from === "bot" && (
                <div className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 rounded-full flex items-center justify-center" style={{ background: "rgba(212,175,55,0.2)", border: "1px solid rgba(212,175,55,0.4)" }}>
                  <Logo className="h-3 w-3 text-gold" />
                </div>
              )}
              <div
                className={`max-w-[84%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  msg.from === "user"
                    ? "rounded-br-sm text-ivory"
                    : "rounded-bl-sm text-[#F5EFE6]"
                }`}
                style={
                  msg.from === "user"
                    ? { background: "linear-gradient(135deg, rgba(212,175,55,0.28) 0%, rgba(180,120,30,0.22) 100%)", border: "1px solid rgba(212,175,55,0.4)" }
                    : { background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(10px)" }
                }
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Suggested quick questions */}
          {messages.length === 1 && (
            <div className="mt-1">
              <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-[#C8A96E]/70 font-semibold">{t("guide.hint")}</p>
              <div className="flex flex-wrap gap-2">
                {suggested.map((q) => (
                  <button
                    key={q}
                    onClick={() => ask(q)}
                    className="rounded-full px-3 py-1.5 text-[11px] text-[#F5EFE6] transition-all duration-300 hover:text-[#F2C66D] hover:scale-105"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(212,175,55,0.25)" }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── Input bar ── */}
        <div
          className="relative z-10 flex gap-2 p-3"
          style={{ borderTop: "1px solid rgba(212,175,55,0.2)", background: "rgba(6,3,5,0.65)" }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && ask(input)}
            placeholder="Ask about Sikkim travel, culture..."
            className="min-w-0 flex-1 rounded-full px-4 py-2 text-sm text-ivory placeholder:text-[#C8A96E]/50 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(212,175,55,0.3)" }}
          />
          <button
            onClick={() => ask(input)}
            disabled={!input.trim()}
            className="rounded-full px-4 py-2 text-sm font-semibold text-[#0A0508] transition-all duration-300 disabled:opacity-40 hover:scale-105 hover:shadow-[0_0_16px_rgba(212,175,55,0.5)]"
            style={{ background: "linear-gradient(135deg, #D4AF37 0%, #F2E09A 50%, #C89A30 100%)" }}
          >
            {t("guide.ask")}
          </button>
        </div>

        {/* Decorative bottom mist bar */}
        <div className="relative z-10 h-0.5 w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)" }} />
      </div>
    </>
  );
}