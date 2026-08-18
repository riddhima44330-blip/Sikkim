import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy — SIKKIM",
  description: "Privacy policy for the SIKKIM digital pilgrimage.",
};

export default function PrivacyPage() {
  return (
    <PageShell
      kicker="A Quiet Place for Your Data"
      title="Privacy Policy"
      intro="We believe a pilgrimage should not follow you home. This site collects almost nothing."
    >
      <div className="space-y-6 font-body text-sm leading-7 text-[#f0e6cf]/90">
        <section>
          <h2 className="font-title text-xl text-gold-soft">1. Information We Collect</h2>
          <p className="mt-2">
            This website is static. It does not run analytics, advertising trackers or profiling.
            We do not collect names, addresses, or browsing histories.
          </p>
        </section>

        <section>
          <h2 className="font-title text-xl text-gold-soft">2. Local Storage</h2>
          <p className="mt-2">
            A small marker in your browser&apos;s local storage remembers that you have already
            watched the opening film, so we do not replay it on every visit. It contains no
            personal information and never leaves your device.
          </p>
        </section>

        <section>
          <h2 className="font-title text-xl text-gold-soft">3. Fonts & Images</h2>
          <p className="mt-2">
            Fonts are loaded from Google Fonts and photographs from Wikimedia Commons. Those
            services may set their own cookies according to their respective privacy policies.
          </p>
        </section>

        <section>
          <h2 className="font-title text-xl text-gold-soft">4. Contact Messages</h2>
          <p className="mt-2">
            Messages sent through the Contact page are delivered to our email inbox. We use them
            only to reply to you and never share them with third parties.
          </p>
        </section>

        <section>
          <h2 className="font-title text-xl text-gold-soft">5. External Links</h2>
          <p className="mt-2">
            Plan Your Journey and Sources link to external services (booking platforms, government
            portals, social networks). Once you leave this site, their privacy policies apply.
          </p>
        </section>

        <section>
          <h2 className="font-title text-xl text-gold-soft">6. Contact</h2>
          <p className="mt-2">
            Questions about this policy? Write to{" "}
            <a href="mailto:hello@sikkim-tourism.in" className="text-gold-soft underline-offset-4 hover:underline">
              hello@sikkim-tourism.in
            </a>
            .
          </p>
        </section>
      </div>
    </PageShell>
  );
}
