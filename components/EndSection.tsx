"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { Logo } from "./Logo";
import { Fireflies, ButterLamps, Mist } from "./atmosphere";
import { Reveal } from "./Reveal";
import { scrollToSection } from "./Providers";

/* ─────────────────────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────────────────────── */

const QUICK_LINKS = [
  { label: "Monasteries",  href: "#featured",     external: false },
  { label: "Heritage Map", href: "#mandala-map",  external: false },
  { label: "Culture",      href: "#culture",      external: false },
  { label: "Plan Journey", href: "#plan",         external: false },
  { label: "Gallery",      href: "#gallery",      external: false },
  { label: "Contact",      href: "/contact",      external: false },
  { label: "Sources",      href: "/sources",      external: false },
  { label: "Privacy",      href: "/privacy",      external: false },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/sikkimtourism/",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-[18px] w-[18px]" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/results?search_query=sikkim+tourism+official",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-[18px] w-[18px]" aria-hidden>
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Official Tourism Portal",
    href: "https://www.sikkimtourism.gov.in",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-[18px] w-[18px]" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "/github",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-[18px] w-[18px]" aria-hidden>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   MANDALA BACKGROUND
───────────────────────────────────────────────────────────────────────────── */

function MandalaSVG({ parallaxY }: { parallaxY: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      style={{ transform: `translateY(${parallaxY}px)` }}
    >
      <svg
        viewBox="0 0 600 600"
        className="absolute h-[min(95vw,780px)] w-[min(95vw,780px)] opacity-[0.045]"
        style={{ animation: "mandalaSpin 100s linear infinite" }}
        aria-hidden
      >
        {/* ── Outermost ring: 24 dots ── */}
        {Array.from({ length: 24 }, (_, i) => (
          <circle
            key={`dot-${i}`}
            cx={300 + 274 * Math.cos((i * 15 * Math.PI) / 180)}
            cy={300 + 274 * Math.sin((i * 15 * Math.PI) / 180)}
            r="3.5"
            fill="#d4af37"
          />
        ))}

        {/* ── Outer petal ring: 16 elongated ellipses ── */}
        {Array.from({ length: 16 }, (_, i) => (
          <g key={`petal-outer-${i}`} transform={`rotate(${i * 22.5} 300 300)`}>
            <ellipse cx="300" cy="78" rx="16" ry="58" fill="#d4af37" opacity="0.85" />
          </g>
        ))}

        {/* ── Outer concentric circles ── */}
        <circle cx="300" cy="300" r="262" fill="none" stroke="#d4af37" strokeWidth="0.6" />
        <circle cx="300" cy="300" r="230" fill="none" stroke="#d4af37" strokeWidth="1.2" />
        <circle cx="300" cy="300" r="200" fill="none" stroke="#d4af37" strokeWidth="0.6" />

        {/* ── Mid diamond ring: 12 facets ── */}
        {Array.from({ length: 12 }, (_, i) => (
          <g key={`diamond-${i}`} transform={`rotate(${i * 30} 300 300)`}>
            <polygon points="300,132 316,188 300,214 284,188" fill="#d4af37" opacity="0.75" />
          </g>
        ))}

        {/* ── Mid circles ── */}
        <circle cx="300" cy="300" r="165" fill="none" stroke="#d4af37" strokeWidth="1.5" />
        <circle cx="300" cy="300" r="140" fill="none" stroke="#d4af37" strokeWidth="0.6" />

        {/* ── Inner lotus ring: 8 petals ── */}
        {Array.from({ length: 8 }, (_, i) => (
          <g key={`lotus-${i}`} transform={`rotate(${i * 45} 300 300)`}>
            <ellipse cx="300" cy="196" rx="13" ry="40" fill="#d4af37" opacity="0.9" />
          </g>
        ))}

        {/* ── Hexagram (Star of David) ── */}
        <polygon points="300,178 400,348 200,348" fill="none" stroke="#d4af37" strokeWidth="1.6" />
        <polygon points="300,422 200,252 400,252" fill="none" stroke="#d4af37" strokeWidth="1.6" />

        {/* ── Inner circles ── */}
        <circle cx="300" cy="300" r="108" fill="none" stroke="#d4af37" strokeWidth="1.2" />
        <circle cx="300" cy="300" r="80"  fill="none" stroke="#d4af37" strokeWidth="0.6" />
        <circle cx="300" cy="300" r="56"  fill="none" stroke="#d4af37" strokeWidth="2" />

        {/* ── Innermost lotus: 6 petals ── */}
        {Array.from({ length: 6 }, (_, i) => (
          <g key={`core-lotus-${i}`} transform={`rotate(${i * 60} 300 300)`}>
            <ellipse cx="300" cy="256" rx="9" ry="24" fill="#d4af37" />
          </g>
        ))}

        {/* ── 8 spokes ── */}
        {Array.from({ length: 8 }, (_, i) => (
          <line
            key={`spoke-${i}`}
            x1="300" y1="300"
            x2={300 + 255 * Math.cos(((i * 45 - 22.5) * Math.PI) / 180)}
            y2={300 + 255 * Math.sin(((i * 45 - 22.5) * Math.PI) / 180)}
            stroke="#d4af37"
            strokeWidth="0.4"
            opacity="0.7"
          />
        ))}

        {/* ── Inner ring: 16 tiny diamonds ── */}
        {Array.from({ length: 16 }, (_, i) => (
          <circle
            key={`inner-dot-${i}`}
            cx={300 + 118 * Math.cos((i * 22.5 * Math.PI) / 180)}
            cy={300 + 118 * Math.sin((i * 22.5 * Math.PI) / 180)}
            r="2.5"
            fill="#d4af37"
          />
        ))}

        {/* ── Center core ── */}
        <circle cx="300" cy="300" r="24" fill="#d4af37" opacity="0.4" />
        <circle cx="300" cy="300" r="12" fill="#d4af37" opacity="0.7" />
        <circle cx="300" cy="300" r="4"  fill="#d4af37" />
      </svg>

      {/* Counter-rotating outer ring */}
      <svg
        viewBox="0 0 600 600"
        className="absolute h-[min(95vw,780px)] w-[min(95vw,780px)] opacity-[0.025]"
        style={{ animation: "mandalaSpin 140s linear infinite reverse" }}
        aria-hidden
      >
        {Array.from({ length: 8 }, (_, i) => (
          <g key={i} transform={`rotate(${i * 45} 300 300)`}>
            <polygon points="300,40 310,70 300,90 290,70" fill="#d4af37" />
          </g>
        ))}
        <circle cx="300" cy="300" r="285" fill="none" stroke="#d4af37" strokeWidth="1" />
        <circle cx="300" cy="300" r="290" fill="none" stroke="#d4af37" strokeWidth="0.4" strokeDasharray="4 8" />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   FLOATING GOLD PARTICLES
───────────────────────────────────────────────────────────────────────────── */

function GoldParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {Array.from({ length: 28 }, (_, i) => {
        const left   = `${(i * 13 + 5) % 100}%`;
        const top    = `${(i * 19 + 8) % 100}%`;
        const size   = 2 + (i % 3);
        const dur    = 7 + (i % 7);
        const delay  = -(i * 0.6);
        const dx     = -15 + (i % 30);
        const dy     = -(50 + (i % 40));

        const style = {
          left,
          top,
          width:  size,
          height: size,
          animationDuration:  `${dur}s`,
          animationDelay:     `${delay}s`,
          "--gp-x": `${dx}px`,
          "--gp-y": `${dy}px`,
        } as CSSProperties & Record<string, string>;

        return (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              ...style,
              background: i % 3 === 0
                ? "radial-gradient(circle, rgba(244,223,160,0.95), rgba(212,175,55,0))"
                : i % 3 === 1
                  ? "radial-gradient(circle, rgba(232,200,122,0.8), rgba(176,141,42,0))"
                  : "radial-gradient(circle, rgba(212,175,55,0.7), rgba(212,175,55,0))",
              animation: `goldParticleFloat ${dur}s ease-in-out ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   ANIMATED GOLD DIVIDER
───────────────────────────────────────────────────────────────────────────── */

function GoldDivider({ className = "" }: { className?: string }) {
  const ref  = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`flex items-center gap-5 ${className}`} aria-hidden>
      <div
        className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
        style={{
          width:      vis ? "100%" : "0%",
          opacity:    vis ? 1 : 0,
          transition: "width 1.6s cubic-bezier(0.22,1,0.36,1), opacity 0.6s ease",
        }}
      />
      <span className="shrink-0 text-xl text-gold/50">✦</span>
      <div
        className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
        style={{
          width:      vis ? "100%" : "0%",
          opacity:    vis ? 1 : 0,
          transition: "width 1.6s cubic-bezier(0.22,1,0.36,1) 0.1s, opacity 0.6s ease",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────────────────────── */

export function EndSection() {
  const { t } = useLang();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handle = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  /* mild parallax on the mandala */
  const parallaxY = scrollY * 0.07;

  return (
    <section id="end-section" aria-label="Farewell">

      {/* ══════════════════════════════════════════════════════════════════════
          CINEMATIC FAREWELL BLOCK
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-24 sm:px-8">

        {/* ── Backgrounds ── */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D060A] via-[#12080F] to-[#180C14]" />

        {/* ── Central radial glow ── */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width:      "70vw",
            height:     "70vh",
            background: "radial-gradient(ellipse, rgba(212,175,55,0.07) 0%, transparent 70%)",
          }}
        />

        {/* ── Bottom altar glow ── */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-full"
          style={{
            width:      "90vw",
            height:     "35vh",
            background: "radial-gradient(ellipse at bottom, rgba(212,175,55,0.09), transparent 70%)",
          }}
        />

        {/* ── Mandala ── */}
        <MandalaSVG parallaxY={parallaxY} />

        {/* ── Floating particles ── */}
        <GoldParticles />

        {/* ── Atmosphere ── */}
        <Mist seed={88} density={4} className="opacity-40" />
        <Fireflies seed={88} count={16} />

        {/* ── Content ── */}
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">

          {/* Kicker — logo + label */}
          <Reveal variant="fade">
            <div className="mb-10 flex flex-col items-center gap-3">
              <div
                className="grid h-16 w-16 place-items-center rounded-full border border-gold/30"
                style={{
                  background:   "radial-gradient(circle, rgba(212,175,55,0.12), transparent)",
                  boxShadow:    "0 0 30px rgba(212,175,55,0.15), inset 0 0 20px rgba(212,175,55,0.06)",
                }}
              >
                <Logo className="h-9 w-9 text-gold-soft" />
              </div>
              <p className="text-[10px] uppercase tracking-[0.55em] text-gold-soft/55">
                ☸&nbsp; Sacred Himalaya &nbsp;☸
              </p>
            </div>
          </Reveal>

          {/* Divider */}
          <Reveal variant="fade" delay={80} className="w-full max-w-xl">
            <GoldDivider />
          </Reveal>

          {/* ── Glassmorphism quote card ── */}
          <Reveal variant="up" delay={180} className="mt-12 w-full">
            <div
              className="relative overflow-hidden rounded-3xl border border-gold/20 p-9 sm:p-14 md:p-16"
              style={{
                background:   "linear-gradient(155deg, rgba(44,20,35,0.65) 0%, rgba(10,6,12,0.80) 100%)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                boxShadow:    "0 0 100px -24px rgba(212,175,55,0.18), 0 40px 80px -30px rgba(0,0,0,0.7), inset 0 1px 0 rgba(232,200,122,0.1)",
              }}
            >
              {/* Corner ornaments */}
              <span className="absolute left-5 top-5   text-gold/25 text-2xl select-none">✦</span>
              <span className="absolute right-5 top-5  text-gold/25 text-2xl select-none">✦</span>
              <span className="absolute left-5 bottom-5  text-gold/25 text-2xl select-none">✦</span>
              <span className="absolute right-5 bottom-5 text-gold/25 text-2xl select-none">✦</span>

              {/* Top edge glow */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

              {/* Large opening quotation mark */}
              <p
                className="mb-4 -mt-4 font-title text-7xl sm:text-9xl leading-none select-none"
                style={{ color: "rgba(212,175,55,0.18)" }}
              >
                &ldquo;
              </p>

              {/* Quote body */}
              <blockquote
                className="font-subtitle text-2xl sm:text-3xl lg:text-[2.1rem] italic leading-[1.55] text-ivory"
                style={{ textShadow: "0 0 60px rgba(212,175,55,0.18), 0 2px 20px rgba(0,0,0,0.4)" }}
              >
                The mountains call not to the feet, but to the soul.
                Once you have walked these sacred halls,{" "}
                <span className="gold-text">Sikkim walks with you</span> — forever.
              </blockquote>

              {/* Attribution */}
              <footer className="mt-8">
                <div className="mx-auto mb-4 h-px w-16 bg-gold/40" />
                <p className="font-subtitle text-sm tracking-[0.35em] uppercase text-gold-soft/60">
                  — Ancient Sikkimese Wisdom
                </p>
              </footer>
            </div>
          </Reveal>

          {/* ── Thank you message ── */}
          <Reveal variant="fade" delay={380} className="mt-14">
            <p className="font-subtitle text-xl sm:text-2xl italic leading-relaxed text-ivory/75">
              Thank you for being part of our journey.
            </p>
            <p className="mt-2 font-body text-sm tracking-widest text-ivory-dim/45 uppercase">
              We look forward to welcoming you.
            </p>
          </Reveal>

          {/* ── CTA Buttons ── */}
          <Reveal variant="up" delay={520} className="mt-12">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5">

              {/* Primary — gold gradient */}
              <button
                onClick={() => scrollToSection("#intro")}
                id="begin-journey-cta"
                className="group relative overflow-hidden rounded-full px-9 py-4 font-subtitle text-base tracking-wide transition-all duration-500 hover:scale-[1.04] focus-visible:outline-none"
                style={{
                  background:   "linear-gradient(135deg, #9a7520 0%, #d4af37 28%, #f4dfa0 50%, #d4af37 72%, #9a7520 100%)",
                  backgroundSize: "200% 200%",
                  color:        "#0a0508",
                  boxShadow:    "0 4px 24px rgba(212,175,55,0.35), 0 0 0 1px rgba(212,175,55,0.3)",
                  transition:   "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 50px rgba(212,175,55,0.55), 0 0 0 1px rgba(212,175,55,0.5)";
                  (e.currentTarget as HTMLElement).style.backgroundPosition = "right center";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(212,175,55,0.35), 0 0 0 1px rgba(212,175,55,0.3)";
                  (e.currentTarget as HTMLElement).style.backgroundPosition = "left center";
                }}
              >
                <span className="relative z-10 flex items-center gap-2 font-semibold">
                  Begin Your Journey
                  <span
                    className="inline-block transition-transform duration-400 group-hover:translate-x-1.5"
                    style={{ transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)" }}
                  >
                    →
                  </span>
                </span>
              </button>

              {/* Secondary — outlined */}
              <Link
                href="/contact"
                id="contact-us-cta"
                className="group rounded-full border border-gold/45 px-9 py-4 font-subtitle text-base tracking-wide text-gold-soft transition-all duration-400 hover:border-gold hover:bg-gold/10 hover:scale-[1.04] focus-visible:outline-none"
                style={{
                  boxShadow:  "0 0 0 0 rgba(212,175,55,0)",
                  transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease, background-color 0.3s, border-color 0.3s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px -8px rgba(212,175,55,0.4)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 0 rgba(212,175,55,0)";
                }}
              >
                <span className="flex items-center gap-2">
                  Contact Us
                  <span
                    className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </span>
              </Link>
            </div>
          </Reveal>

          {/* Second divider */}
          <Reveal variant="fade" delay={680} className="mt-16 w-full max-w-xl">
            <GoldDivider />
          </Reveal>

          {/* Butter lamps */}
          <Reveal variant="fade" delay={800} className="mt-10 opacity-75">
            <ButterLamps count={9} />
          </Reveal>

          {/* Closing kicker */}
          <Reveal variant="fade" delay={900} className="mt-8">
            <p className="font-subtitle text-[11px] italic tracking-[0.4em] uppercase text-ivory-dim/30">
              ༄ བོད་ཡིག ༄ &nbsp;·&nbsp; Digital Preservation of Sikkim&apos;s Monastic Heritage
            </p>
          </Reveal>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          MINIMAL LUXURY FOOTER
      ══════════════════════════════════════════════════════════════════════ */}
      <footer
        id="contact"
        aria-label="Site footer"
        className="relative border-t border-gold/10 bg-[#0A0508] px-5 py-14 sm:px-10"
      >
        {/* Top horizontal glow line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

        <div className="mx-auto max-w-5xl">

          {/* ── Three-column row ── */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6 lg:gap-10">

            {/* Brand column */}
            <div className="flex flex-col items-center gap-3 sm:items-start">
              <button
                onClick={() => scrollToSection("#intro")}
                className="group flex items-center gap-2.5 font-title text-base tracking-[0.28em] text-gold-soft transition-opacity hover:opacity-80"
              >
                <Logo className="h-7 w-7 transition-transform duration-700 group-hover:rotate-[180deg]" />
                SIKKIM
              </button>
              <p className="font-subtitle text-xs italic text-ivory-dim/40 text-center sm:text-left max-w-[175px]">
                Where the Mist Meets the Divine
              </p>
            </div>

            {/* Quick links column */}
            <nav aria-label="Footer navigation">
              <p className="mb-4 text-center text-[10px] uppercase tracking-[0.35em] text-gold-soft/50 sm:text-left">
                Explore
              </p>
              <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2.5 sm:justify-start sm:flex-col sm:flex-nowrap sm:gap-y-2">
                {QUICK_LINKS.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith("#") ? (
                      <button
                        onClick={() => scrollToSection(l.href)}
                        className="relative font-body text-xs text-ivory-dim/45 transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-gold/60 after:transition-all after:duration-300 hover:text-gold-soft/80 hover:after:w-full"
                      >
                        {l.label}
                      </button>
                    ) : (
                      <Link
                        href={l.href}
                        className="relative font-body text-xs text-ivory-dim/45 transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-gold/60 after:transition-all after:duration-300 hover:text-gold-soft/80 hover:after:w-full"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social column */}
            <div className="flex flex-col items-center gap-4 sm:items-end">
              <p className="text-[10px] uppercase tracking-[0.35em] text-gold-soft/50">
                Follow
              </p>
              <div className="flex items-center gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-9 w-9 place-items-center rounded-full border border-gold/20 text-ivory-dim/45 transition-all duration-300 hover:border-gold/60 hover:text-gold-soft hover:bg-gold/8 hover:shadow-[0_0_16px_-4px_rgba(212,175,55,0.3)]"
                    style={{ transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)" }}
                  >
                    {s.svg}
                  </a>
                ))}
              </div>

              {/* Email */}
              <a
                href="mailto:hello@sikkim-tourism.in"
                className="font-subtitle text-xs italic text-ivory-dim/35 transition-colors hover:text-gold-soft/70"
              >
                hello@sikkim-tourism.in
              </a>
            </div>
          </div>

          {/* ── Divider ── */}
          <div className="my-10 h-px bg-gradient-to-r from-transparent via-gold/12 to-transparent" />

          {/* ── Bottom strip ── */}
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex items-center gap-3 text-gold-soft/30">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold/30" />
              <Logo className="h-5 w-5" />
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold/30" />
            </div>
            <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-ivory-dim/25">
              © {new Date().getFullYear()} SIKKIM — Where the Mist Meets the Divine
            </p>
            <p className="font-subtitle text-[11px] italic text-ivory-dim/18">
              Digital preservation of Sikkim&apos;s sacred monastic heritage
            </p>
          </div>
        </div>
      </footer>

      {/* ── Keyframe injections ── */}
      <style>{`
        @keyframes mandalaSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes goldParticleFloat {
          0%   { transform: translate(0, 0);                               opacity: 0;   }
          12%  { opacity: 0.85; }
          55%  { transform: translate(var(--gp-x, 20px), var(--gp-y, -50px)); opacity: 0.5; }
          88%  { opacity: 0;   }
          100% { transform: translate(0, 0);                               opacity: 0;   }
        }
      `}</style>
    </section>
  );
}
