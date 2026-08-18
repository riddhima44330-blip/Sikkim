import type { ReactNode } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Mist } from "./atmosphere";

import { HimalayanPageBackground } from "./HimalayanPageBackground";

export function PageShell({
  kicker,
  title,
  intro,
  children,
}: {
  kicker: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <HimalayanPageBackground />
      <Mist seed={77} density={5} className="opacity-70" />

      <div className="relative mx-auto max-w-4xl px-5 py-16 sm:px-8">
        <div className="mb-14 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2 font-title text-lg tracking-[0.25em] text-gold-soft">
            <Logo className="h-8 w-8 transition-transform duration-700 group-hover:rotate-180" />
            SIKKIM
          </Link>
          <Link
            href="/"
            className="rounded-full border border-gold/25 px-4 py-2 font-subtitle text-sm text-ivory-dim/80 transition-colors hover:border-gold/60 hover:text-gold-soft"
          >
            ← Home
          </Link>
        </div>

        <header className="mb-12 text-center">
          <p className="divider-ornament mb-4 text-xs uppercase tracking-[0.4em] text-gold-soft/80">{kicker}</p>
          <h1 className="font-title text-4xl sm:text-6xl">
            <span className="gold-text">{title}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl font-subtitle text-lg italic text-ivory-dim/85">{intro}</p>
        </header>

        <div className="paper-texture rounded-3xl border border-gold/20 shadow-deep">
          <div className="px-6 py-10 sm:px-12 sm:py-12">{children}</div>
        </div>

        <p className="mt-12 text-center text-xs uppercase tracking-[0.25em] text-ivory-dim/40">
          © {new Date().getFullYear()} SIKKIM — Where the Mist Meets the Divine
        </p>
      </div>
    </main>
  );
}
