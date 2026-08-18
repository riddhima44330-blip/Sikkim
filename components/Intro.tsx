"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/lib/i18n";
import { Dust } from "./atmosphere";
import { useSoundscape } from "./Soundscape";

const clamp01 = (n: number) => Math.max(0, Math.min(1, n));

/**
 * PART 1 — The Cinematic Entrance.
 * Doors open horizontally. After the doors open, an editorial three-column
 * composition is revealed:
 *   LEFT   — Heritage text: title, tagline, description, CTA
 *   CENTER — The Himalayan video, completely clean (zero text overlay)
 *   RIGHT  — Typographic stack: MOUNTAINS / MONASTERIES / MEMORY + scroll cue
 */
export function Intro() {
  const { t } = useLang();
  const { enabled, toggle } = useSoundscape();

  const sectionRef  = useRef<HTMLElement | null>(null);
  const doorLRef    = useRef<HTMLDivElement | null>(null);
  const doorRRef    = useRef<HTMLDivElement | null>(null);
  const videoRef    = useRef<HTMLVideoElement | null>(null);
  const contentRef  = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const apply = (p: number) => {
      // Door open phase: 0% → 40% scroll
      const open = clamp01(p / 0.40);

      if (doorLRef.current) {
        doorLRef.current.style.transform = `translateX(${-open * 100}%)`;
        doorLRef.current.style.opacity   = open >= 1 ? "0" : "1";
      }
      if (doorRRef.current) {
        doorRRef.current.style.transform = `translateX(${open * 100}%)`;
        doorRRef.current.style.opacity   = open >= 1 ? "0" : "1";
      }

      // Fade-in editorial content as doors finish opening
      if (contentRef.current) {
        const fadeIn = clamp01((open - 0.55) / 0.45);
        contentRef.current.style.opacity   = String(fadeIn);
        contentRef.current.style.transform = `translateY(${(1 - fadeIn) * 20}px)`;
      }

      // Auto-play video
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      }
    };

    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const total = Math.max(1, el.offsetHeight - window.innerHeight);
      apply(clamp01((window.scrollY - el.offsetTop) / total));
    };

    if (reduce) {
      if (doorLRef.current) {
        doorLRef.current.style.transform = "translateX(-100%)";
        doorLRef.current.style.opacity   = "0";
      }
      if (doorRRef.current) {
        doorRRef.current.style.transform = "translateX(100%)";
        doorRRef.current.style.opacity   = "0";
      }
      if (contentRef.current) {
        contentRef.current.style.opacity   = "1";
        contentRef.current.style.transform = "none";
      }
      return;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="intro"
      aria-label="The entrance"
      className="relative z-0 h-[300vh]"
    >
      {/* ── Sticky viewport ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Himalayan Mountain Photo Background */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            backgroundImage: "url('/himalayan-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            backgroundRepeat: "no-repeat",
            opacity: 0.65,
            filter: "contrast(1.05) brightness(0.70)",
          }}
        />
        {/* Dark radial overlay for text readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background: "radial-gradient(ellipse at 50% 30%, rgba(20,9,16,0.50) 0%, rgba(14,6,10,0.78) 60%, rgba(8,3,6,0.92) 100%)",
          }}
        />
        <Dust seed={2} count={16} className="opacity-35" />

        {/* ═══════════════════════════════════════════════════
            EDITORIAL COMPOSITION (fades in after doors open)
        ═══════════════════════════════════════════════════ */}
        <div
          ref={contentRef}
          className="relative z-[2] w-full h-full flex items-center justify-center px-6 md:px-10 lg:px-14"
          style={{ opacity: 0, transition: "opacity 0.5s ease, transform 0.5s ease" }}
        >
          {/* Decorative horizontal rules */}
          <div
            className="absolute top-[11%] left-0 right-0 h-px pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, rgba(212,162,74,0.2) 25%, rgba(212,162,74,0.2) 75%, transparent)" }}
          />
          <div
            className="absolute bottom-[11%] left-0 right-0 h-px pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, rgba(212,162,74,0.2) 25%, rgba(212,162,74,0.2) 75%, transparent)" }}
          />

          <div className="w-full max-w-[1440px] grid grid-cols-[1fr_auto_1fr] items-center gap-8 xl:gap-14">

            {/* ══════════ LEFT COLUMN ══════════ */}
            <div className="flex flex-col gap-5 lg:gap-7 pr-4 lg:pr-8">

              {/* Small index label */}
              <div className="flex items-center gap-3">
                <div className="h-px w-8" style={{ background: "#D4A24A" }} />
                <span
                  className="font-subtitle uppercase tracking-[0.32em]"
                  style={{ fontSize: "0.65rem", color: "rgba(212,162,74,0.65)" }}
                >
                  01 — BEGIN THE JOURNEY
                </span>
              </div>

              {/* SIKKIM — large serif gold title */}
              <div>
                <h1
                  className="font-title leading-none tracking-widest"
                  style={{
                    fontSize: "clamp(2.8rem, 5.5vw, 6rem)",
                    background: "linear-gradient(155deg, #8a6022 0%, #C9922A 20%, #D4A24A 40%, #F2C66D 55%, #D4A24A 72%, #9a7030 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "0.22em",
                  }}
                >
                  SIKKIM
                </h1>
                {/* Rule under title */}
                <div
                  className="mt-3 h-[1px] w-16"
                  style={{ background: "linear-gradient(90deg, rgba(212,162,74,0.8), transparent)" }}
                />
              </div>

              {/* Tagline */}
              <p
                className="font-subtitle italic leading-snug"
                style={{
                  fontSize: "clamp(0.8rem, 1.2vw, 1.05rem)",
                  color: "rgba(245,239,230,0.8)",
                  maxWidth: "24ch",
                }}
              >
                &ldquo;Where the Himalayas meet heritage.&rdquo;
              </p>

              {/* Description */}
              <p
                className="font-body leading-relaxed"
                style={{
                  fontSize: "clamp(0.72rem, 0.95vw, 0.85rem)",
                  color: "rgba(200,184,154,0.65)",
                  maxWidth: "28ch",
                }}
              >
                A journey through ancient monasteries, living traditions, sacred landscapes, and the stories that shaped Sikkim.
              </p>

              {/* CTA button */}
              <a
                href="#discover"
                className="group relative inline-flex items-center gap-2.5 self-start"
                aria-label="Discover the journey"
              >
                <span
                  className="font-subtitle uppercase tracking-[0.24em] transition-colors duration-300"
                  style={{
                    fontSize: "clamp(0.6rem, 0.82vw, 0.72rem)",
                    color: "#D4A24A",
                  }}
                >
                  DISCOVER THE JOURNEY
                </span>
                <span
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: "#D4A24A" }}
                >
                  →
                </span>
              </a>
            </div>

            {/* ══════════ CENTER COLUMN — Pure, Clean Video ══════════ */}
            <div
              className="relative flex-shrink-0"
              style={{
                width: "clamp(240px, 34vw, 520px)",
                aspectRatio: "9/16",
                maxHeight: "78vh",
              }}
            >
              {/* Gold gradient border frame */}
              <div
                className="absolute -inset-[1px] rounded-2xl pointer-events-none"
                style={{
                  background: "linear-gradient(160deg, rgba(212,162,74,0.55), rgba(212,162,74,0.1) 40%, rgba(212,162,74,0.45))",
                  zIndex: 4,
                  borderRadius: "inherit",
                  padding: "1px",
                }}
              />

              {/* Left vertical accent line */}
              <div
                className="absolute pointer-events-none"
                style={{
                  left: "-20px",
                  top: "20%",
                  bottom: "20%",
                  width: "1px",
                  background: "linear-gradient(180deg, transparent, rgba(212,162,74,0.5) 30%, rgba(212,162,74,0.5) 70%, transparent)",
                }}
              />
              {/* Right vertical accent line */}
              <div
                className="absolute pointer-events-none"
                style={{
                  right: "-20px",
                  top: "20%",
                  bottom: "20%",
                  width: "1px",
                  background: "linear-gradient(180deg, transparent, rgba(212,162,74,0.5) 30%, rgba(212,162,74,0.5) 70%, transparent)",
                }}
              />

              {/* Corner ornaments */}
              {(
                [
                  ["top-0 left-0",     "border-t border-l"],
                  ["top-0 right-0",    "border-t border-r"],
                  ["bottom-0 left-0",  "border-b border-l"],
                  ["bottom-0 right-0", "border-b border-r"],
                ] as const
              ).map(([pos, borders], i) => (
                <div
                  key={i}
                  className={`absolute ${pos} w-6 h-6 ${borders} pointer-events-none`}
                  style={{ borderColor: "rgba(212,162,74,0.65)", zIndex: 5 }}
                />
              ))}

              {/* ✦ THE VIDEO — ZERO text overlays, completely clean ✦ */}
              <video
                ref={videoRef}
                src="/intro-video.mp4"
                className="w-full h-full object-cover rounded-xl"
                style={{ display: "block" }}
                loop
                muted
                playsInline
                preload="metadata"
              />

              {/* Subtle outer ambient glow */}
              <div
                className="absolute -inset-8 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(212,162,74,0.06), transparent 70%)",
                  zIndex: 0,
                }}
              />
            </div>

            {/* ══════════ RIGHT COLUMN ══════════ */}
            <div
              className="flex flex-col justify-between pl-4 lg:pl-8"
              style={{ height: "clamp(240px, 78vh, 600px)" }}
            >
              {/* Top typography block */}
              <div className="flex flex-col gap-4 lg:gap-6 pt-2">
                <span
                  className="font-subtitle uppercase tracking-[0.3em]"
                  style={{ fontSize: "0.62rem", color: "rgba(212,162,74,0.55)" }}
                >
                  THE LAND OF
                </span>

                {/* Stacked heritage words */}
                <div className="flex flex-col gap-2">
                  {(["MOUNTAINS", "MONASTERIES", "MEMORY"] as const).map((word, i) => (
                    <div key={word} className="flex items-baseline gap-3">
                      <span
                        className="font-subtitle tabular-nums"
                        style={{ fontSize: "0.58rem", color: "rgba(212,162,74,0.35)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="font-title leading-none tracking-widest"
                        style={{
                          fontSize: "clamp(0.9rem, 2.2vw, 2rem)",
                          color: "rgba(245,239,230,0.88)",
                          letterSpacing: "0.15em",
                        }}
                      >
                        {word}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Thin gold divider */}
                <div
                  className="h-px w-10 mt-1"
                  style={{ background: "linear-gradient(90deg, rgba(212,162,74,0.65), transparent)" }}
                />

                {/* Supporting italic quote */}
                <p
                  className="font-subtitle italic"
                  style={{
                    fontSize: "clamp(0.68rem, 0.88vw, 0.78rem)",
                    color: "rgba(200,184,154,0.55)",
                    maxWidth: "20ch",
                  }}
                >
                  &ldquo;A living Himalayan heritage.&rdquo;
                </p>
              </div>

              {/* Bottom: Scroll cue */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className="h-10 w-px"
                  style={{ background: "linear-gradient(180deg, rgba(212,162,74,0.5), transparent)" }}
                />
                <span
                  className="font-subtitle uppercase tracking-[0.26em]"
                  style={{ fontSize: "0.58rem", color: "rgba(212,162,74,0.6)" }}
                >
                  SCROLL TO DISCOVER
                </span>
                <span className="scrollcue text-base" style={{ color: "rgba(212,162,74,0.6)" }}>↓</span>
              </div>
            </div>

          </div>
        </div>

        {/* ══ The Doors (full-screen overlay, on top of everything) ══ */}
        <div className="absolute inset-0 z-[5] flex pointer-events-none">
          {/* LEFT DOOR */}
          <div
            ref={doorLRef}
            className="absolute left-0 top-0 h-full w-1/2"
            style={{
              transformOrigin: "left center",
              willChange: "transform, opacity",
              backgroundImage: "url('/door-image.png')",
              backgroundSize: "200% 100%",
              backgroundPosition: "left center",
              backgroundRepeat: "no-repeat",
              boxShadow: "inset -6px 0 20px rgba(0,0,0,0.5)",
            }}
          />
          {/* RIGHT DOOR */}
          <div
            ref={doorRRef}
            className="absolute right-0 top-0 h-full w-1/2"
            style={{
              transformOrigin: "right center",
              willChange: "transform, opacity",
              backgroundImage: "url('/door-image.png')",
              backgroundSize: "200% 100%",
              backgroundPosition: "right center",
              backgroundRepeat: "no-repeat",
              boxShadow: "inset 6px 0 20px rgba(0,0,0,0.5)",
            }}
          />
        </div>

        {/* ── Soundscape Toggle ── */}
        <div className="absolute top-6 right-6 z-20">
          <button
            onClick={toggle}
            className="pointer-events-auto rounded-full border border-[#D4A24A]/30 bg-[#100808]/70 px-4 py-2 font-subtitle text-xs tracking-wide text-[#F5EFE6] backdrop-blur-md transition-colors hover:border-[#D4A24A] hover:text-[#F2C66D]"
          >
            {enabled ? t("intro.soundoff") : t("intro.soundon")}
          </button>
        </div>
      </div>
    </section>
  );
}