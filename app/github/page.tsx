import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "GitHub — SIKKIM",
  description: "The open source code behind the SIKKIM digital pilgrimage.",
};

const REPOS = [
  {
    name: "SIKKIM",
    url: "https://github.com",
    note: "This pilgrimage — a Next.js + Tailwind experience. Clone it, fork it, walk it.",
  },
  {
    name: "Data & Content",
    url: "https://github.com",
    note: "The monastery, festival and place datasets powering every section of the site.",
  },
  {
    name: "Guide Scripts",
    url: "https://github.com",
    note: "The AI guide's knowledge base and the scripts that keep it accurate.",
  },
];

export default function GitHubPage() {
  return (
    <PageShell
      kicker="The Code of the Path"
      title="Open Source"
      intro="This site is built in the open. Read the code, report an issue, or carry the project onward."
    >
      <div className="space-y-4">
        {REPOS.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-gold/20 bg-black/20 p-6 transition-colors hover:border-gold/50"
          >
            <p className="flex items-center gap-2 font-subtitle text-lg text-gold-soft">
              {repo.name} <span className="text-xs opacity-70">↗</span>
            </p>
            <p className="mt-1 text-sm text-ivory-dim/80">{repo.note}</p>
          </a>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-gold/20 bg-black/20 p-6 text-center">
        <p className="font-subtitle text-sm italic text-ivory-dim/80">
          Found something that could be better? The monastery doors are open.
        </p>
        <a
          href="mailto:hello@sikkim-tourism.in"
          className="btn-gold mt-5 inline-block"
        >
          Contribute →
        </a>
      </div>
    </PageShell>
  );
}
