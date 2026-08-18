import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PHOTOS } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Credits — SIKKIM",
  description: "Photography and content credits for the SIKKIM digital pilgrimage.",
};

function filePageUrl(file: string) {
  return `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file)}`;
}

export default function CreditsPage() {
  const entries = Object.entries(PHOTOS).sort((a, b) => a[1].credit.localeCompare(b[1].credit));

  return (
    <PageShell
      kicker="The Light Belongs to Others"
      title="Credits"
      intro="Every photograph here was freely shared by a photographer who loved Sikkim. Their names and original files live below."
    >
      <div className="space-y-4">
        {entries.map(([scene, photo]) => (
          <div
            key={scene}
            className="flex flex-col gap-1 rounded-2xl border border-gold/20 bg-black/20 p-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-subtitle text-lg text-gold-soft">{photo.credit}</p>
              <p className="mt-0.5 text-xs uppercase tracking-widest text-ivory-dim/60">
                {scene} · {photo.file}
              </p>
            </div>
            <a
              href={filePageUrl(photo.file)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex shrink-0 items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-xs uppercase tracking-wider text-gold-soft transition-colors hover:border-gold hover:text-ivory sm:mt-0"
            >
              Original file ↗
            </a>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-gold/20 bg-black/20 p-6">
        <h2 className="font-title text-xl text-gold-soft">Licence Note</h2>
        <p className="mt-2 text-sm leading-7 text-[#f0e6cf]/85">
          All photographs are used under Creative Commons licences and the Wikimedia Commons
          free-culture policy, attributed to their respective creators. Photographs are embedded
          from Wikimedia Commons and are not hosted or modified by this site.
        </p>
      </div>
    </PageShell>
  );
}
