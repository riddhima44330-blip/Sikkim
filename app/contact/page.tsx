import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — SIKKIM",
  description: "Reach the SIKKIM team for questions, corrections and travel advice.",
};

export default function ContactPage() {
  return (
    <PageShell
      kicker="Write to the Monastery"
      title="Contact"
      intro="Questions, corrections, or a story from your own journey — the porch is always open."
    >
      <ContactForm />

      <div className="mt-10 border-t border-gold/15 pt-8 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-gold-soft/70">Prefer a letter?</p>
        <a
          href="mailto:hello@sikkim-tourism.in"
          className="mt-2 inline-block font-subtitle text-lg italic text-ivory transition-colors hover:text-gold-soft"
        >
          hello@sikkim-tourism.in
        </a>
        <p className="mt-6 text-xs leading-6 text-ivory-dim/60">
          Emergency travel help should always go to the official channels — the Sikkim Tourism
          helpline and local authorities are listed in the{" "}
          <a href="/sources" className="text-gold-soft underline-offset-4 hover:underline">
            Sources
          </a>{" "}
          page.
        </p>
      </div>
    </PageShell>
  );
}
