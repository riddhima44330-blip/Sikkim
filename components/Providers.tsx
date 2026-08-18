"use client";

import { useEffect, type ReactNode } from "react";
import { LanguageProvider } from "@/lib/i18n";

declare global {
  interface Window {
    __lenis?: unknown;
  }
}

function InitLenis() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId = 0;
    let disposed = false;

    import("lenis").then(({ default: Lenis }) => {
      if (disposed) return;

      const lenis = new Lenis({
        lerp: 0.085,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.2,
        smoothWheel: true,
      });
      window.__lenis = lenis;

      const raf = (time: number) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      disposed = true;
      if (rafId) cancelAnimationFrame(rafId);
      window.__lenis = undefined;
    };
  }, []);

  return null;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      {children}
      <InitLenis />
    </LanguageProvider>
  );
}

/**
 * Smoothly scroll to a section anchor (respecting Lenis when present).
 */
export function scrollToSection(hash: string) {
  const target = document.querySelector(hash);
  if (!target) return;
  const lenis = window.__lenis as
    | { scrollTo: (target: HTMLElement, opts?: { duration?: number }) => void }
    | undefined;
  if (lenis) {
    lenis.scrollTo(target as HTMLElement, { duration: 1.6 });
  } else {
    (target as HTMLElement).scrollIntoView({ behavior: "smooth" });
  }
}