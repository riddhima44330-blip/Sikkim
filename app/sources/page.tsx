import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Sources — SIKKIM",
  description: "Sources and references behind the SIKKIM digital pilgrimage.",
};

const OFFICIAL = [
  {
    name: "Sikkim Tourism (Government of Sikkim)",
    url: "https://www.sikkimtourism.gov.in",
    note: "Official portal for travel planning, permits, hotel registration and visitor guidance.",
  },
  {
    name: "Department of Tourism, Government of Sikkim",
    url: "https://sikkim.gov.in",
    note: "Primary source for practical travel details, restricted-area permits and district information.",
  },
  {
    name: "Sikkim Tourism on Instagram",
    url: "https://www.instagram.com/sikkimtourism/",
    note: "Official account — festivals, seasonal updates and live mountain views.",
  },
];

const REFERENCES = [
  {
    name: "Wikipedia — Dubdi Monastery",
    url: "https://en.wikipedia.org/wiki/Dubdi_Monastery",
    note: "History and heritage notes on Sikkim's oldest monastery.",
  },
  {
    name: "Wikipedia — Phodong Monastery",
    url: "https://en.wikipedia.org/wiki/Phodong_Monastery",
    note: "Notes on the Phodong Karma Kagyu seat and its history.",
  },
  {
    name: "Wikipedia — Rumtek Monastery",
    url: "https://en.wikipedia.org/wiki/Rumtek_Monastery",
    note: "History of the Karmapa's seat at Rumtek.",
  },
  {
    name: "Wikipedia — Pemayangtse Monastery",
    url: "https://en.wikipedia.org/wiki/Pemayangtse_Monastery",
    note: "Heritage notes on the Nyingma monastery of West Sikkim.",
  },
];

export default function SourcesPage() {
  return (
    <PageShell
      kicker="The Record of the Road"
      title="Sources"
      intro="Every fact, festival date and route on this site traces back to a real source. If we get something wrong, tell us and we will correct it."
    >
      <h2 className="font-title text-2xl text-gold-soft">Official Channels</h2>
      <div className="mt-4 space-y-4">
        {OFFICIAL.map((s) => (
          <a
            key={s.url}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-gold/20 bg-black/20 p-5 transition-colors hover:border-gold/50"
          >
            <p className="font-subtitle text-lg text-gold-soft">{s.name}</p>
            <p className="mt-1 text-sm text-ivory-dim/80">{s.note}</p>
          </a>
        ))}
      </div>

      <h2 className="mt-10 font-title text-2xl text-gold-soft">Historical References</h2>
      <div className="mt-4 space-y-4">
        {REFERENCES.map((s) => (
          <a
            key={s.url}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-gold/20 bg-black/20 p-5 transition-colors hover:border-gold/50"
          >
            <p className="font-subtitle text-lg text-gold-soft">{s.name}</p>
            <p className="mt-1 text-sm text-ivory-dim/80">{s.note}</p>
          </a>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-gold/20 bg-black/20 p-6">
        <h2 className="font-title text-xl text-gold-soft">Photography</h2>
        <p className="mt-2 text-sm leading-7 text-[#f0e6cf]/85">
          Photographs are sourced from Wikimedia Commons under Creative Commons and public-domain
          licences, attributed to their photographers on the{" "}
          <a href="/credits" className="text-gold-soft underline-offset-4 hover:underline">
            Credits
          </a>{" "}
          page. Each image links back to its original file record.
        </p>
      </div>
    </PageShell>
  );
}
