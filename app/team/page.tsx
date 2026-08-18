import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Team — SIKKIM",
  description: "The people and organisations behind SIKKIM — Where the Mist Meets the Divine.",
};

const TEAM = [
  {
    name: "SIKKIM Digital Trust",
    role: "Curators",
    about:
      "A collective of monks, historians, photographers and digital craftspeople working to preserve Sikkim's monastic heritage for future generations.",
  },
  {
    name: "Department of Tourism, Government of Sikkim",
    role: "Knowledge Partner",
    about:
      "The official custodian of Sikkim's travel information, permits and visitor guidance — our primary source for practical travel details.",
  },
  {
    name: "Wikimedia Commons Photographers",
    role: "Visual Heritage",
    about:
      "Dozens of generous photographers who released their photographs of Sikkim under Creative Commons licences, letting us show the real mountains, monasteries and festivals.",
  },
  {
    name: "The Monastery Communities",
    role: "Living Keepers",
    about:
      "The resident monks and caretakers of Rumtek, Pemayangtse, Tashiding, Dubdi and every prayer hall who keep these sacred chambers alive.",
  },
];

export default function TeamPage() {
  return (
    <PageShell
      kicker="The Hands Behind the Journey"
      title="Our Team"
      intro="Every chamber of this pilgrimage was carried by someone — curators, communities and the photographers who brought the light."
    >
      <div className="space-y-8">
        {TEAM.map((member) => (
          <div key={member.name} className="rounded-2xl border border-gold/20 bg-black/20 p-6 sm:p-8">
            <h2 className="font-title text-2xl text-gold-soft">{member.name}</h2>
            <p className="mt-1 font-subtitle text-sm italic text-gold-soft/70">{member.role}</p>
            <p className="mt-3 font-body text-sm leading-7 text-[#f0e6cf]/85">{member.about}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
