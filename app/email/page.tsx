import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Email — SIKKIM",
  description: "Reach the SIKKIM team by email.",
};

export default function EmailPage() {
  return (
    <PageShell
      kicker="A Letter by Wire"
      title="Email"
      intro="For questions, corrections, travel advice and collaborations — one address reaches the whole team."
    >
      <div className="rounded-2xl border border-gold/20 bg-black/20 p-8 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-gold-soft/70">Replies usually within 3 days</p>
        <a
          href="mailto:hello@sikkim-tourism.in"
          className="mt-4 block break-all font-title text-2xl text-gold-soft transition-colors hover:text-ivory sm:text-3xl"
        >
          hello@sikkim-tourism.in
        </a>

        <div className="mx-auto mt-8 h-px w-24 bg-gold/40" />

        <p className="mt-8 text-sm uppercase tracking-[0.25em] text-gold-soft/70">What to write about</p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {["Travel questions", "Corrections", "Permits help", "Sharing your journey", "Media & press"].map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-gold/25 bg-[#28131F]/70 px-3 py-1.5 text-xs tracking-wide text-ivory-dim/80"
            >
              {topic}
            </span>
          ))}
        </div>

        <p className="mt-8 text-xs leading-6 text-ivory-dim/50">
          For urgent travel or weather emergencies, always contact the Sikkim Tourism helpline and
          local authorities directly — never rely on email for time-critical help.
        </p>
      </div>
    </PageShell>
  );
}

