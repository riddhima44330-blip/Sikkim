"use client";

import { useEffect, useState } from "react";
import { useLang, LANGS, type Lang } from "@/lib/i18n";
import { scrollToSection } from "./Providers";
import { Logo } from "./Logo";

const LINKS = [
  { key: "nav.home", label: "Home", href: "#intro" },
  { key: "nav.explore", label: "3D GIS Map", href: "#mandala-map" },
  { key: "nav.timeline", label: "Timeline", href: "#timeline" },
  { key: "nav.heritage", label: "Heritage", href: "#culture" },
  { key: "nav.plan", label: "Plan Journey", href: "#plan" },
  { key: "nav.contact", label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { t, lang, setLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setMenuOpen(false);
    requestAnimationFrame(() => scrollToSection(href));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-500 pointer-events-none">
      <div
        className={`w-full pointer-events-auto flex items-center justify-between gap-4 px-6 py-4 transition-all duration-700 sm:px-10 md:px-14 ${
          scrolled
            ? "bg-[#180C14]/75 backdrop-blur-2xl border-b border-gold/30 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
            : "bg-[#180C14]/40 backdrop-blur-md border-b border-gold/15"
        }`}
      >
        {/* Brand */}
        <button
          onClick={() => go("#intro")}
          className="group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
        >
          <div className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/30 bg-black/40 shadow-[inset_0_0_10px_rgba(212,175,55,0.1)] transition-colors group-hover:border-gold/60 group-hover:bg-gold/10">
            <Logo className="h-6 w-6 text-gold transition-transform duration-700 group-hover:rotate-180" />
          </div>
          <div className="flex flex-col items-start leading-none text-left">
            <span className="font-title text-lg tracking-[0.25em] text-gold-soft drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]">
              MANDALA
            </span>
            <span className="font-subtitle text-[9px] uppercase tracking-[0.3em] text-ivory-dim/70 mt-1">
              Sikkim Tourism
            </span>
          </div>
        </button>

        {/* Desktop Links */}
        <nav className="hidden items-center gap-2 md:flex">
          {LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className="relative rounded-full px-4 py-2 font-subtitle text-xs uppercase tracking-[0.2em] text-ivory-dim/90 transition-all duration-300 hover:bg-gold/10 hover:text-gold-soft hover:shadow-[0_0_15px_-3px_rgba(212,175,55,0.2)]"
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2.5">
          {/* Language pill */}
          <button
            onClick={() => setLang(lang === "en" ? "hi" : "en")}
            className="flex items-center gap-2 rounded-full border border-gold/25 bg-black/40 px-4 py-2 font-subtitle text-[10px] uppercase tracking-widest text-ivory transition-all duration-300 hover:border-gold/60 hover:bg-gold/10 hover:text-gold-soft"
            title={t("lang.switch")}
          >
            <span>🌐</span>
            <span>{lang === "en" ? "EN" : "हिन्दी"}</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-gold/25 bg-black/40 text-xs text-ivory transition-all duration-300 hover:border-gold/60 hover:bg-gold/10 hover:text-gold-soft md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`pointer-events-auto mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border border-gold/30 bg-[#180C14]/90 shadow-2xl backdrop-blur-2xl transition-all duration-500 md:hidden ${
          menuOpen ? "max-h-96 opacity-100 py-3" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5">
          {LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className="border-b border-gold/15 px-3 py-4 text-left font-subtitle text-xs uppercase tracking-[0.2em] text-ivory-dim/90 transition-colors last:border-0 hover:bg-gold/5 hover:text-gold-soft hover:pl-5"
              style={{ transition: "all 0.3s ease" }}
            >
              {l.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function LanguagePills({ onNavigate }: { onNavigate?: () => void }) {
  const { lang, setLang } = useLang();
  return (
    <div className="flex gap-2">
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => {
            setLang(l.code as Lang);
            onNavigate?.();
          }}
          className={`rounded-full border px-3.5 py-1.5 font-subtitle text-xs tracking-wider transition-all duration-300 ${
            lang === l.code
              ? "border-[#D4A24A] bg-[#D4A24A]/20 text-[#F2C66D] shadow-[0_0_12px_rgba(212,162,74,0.3)]"
              : "border-[#D4A24A]/20 text-[#F5EFE6]/70 hover:border-[#D4A24A]/50 hover:text-[#F5EFE6]"
          }`}
        >
          {l.native}
        </button>
      ))}
    </div>
  );
}
