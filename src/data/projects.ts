// The three showcased projects. Local data now; can be swapped for a CMS later.

export type Project = {
  slug: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  description: string;
  website: string;
  repos: { label: string; url: string }[];
  stack: string[];
  // Tailwind gradient utilities used for the card's accent glow.
  accent: string;
  theme: "blue-slate" | "civic-pastel" | "music-glow";
};

export const projects: Project[] = [
  {
    slug: "portfolio",
    eyebrow: "Personal Site",
    title: "Portfolio — Senior Full-Stack Developer Profile",
    shortTitle: "Portfolio",
    description:
      "A clean Astro + Tailwind portfolio presenting skills, experience, education, selected projects, resume, and contact channels.",
    website: "https://sudjairakc.github.io/portfolio",
    repos: [{ label: "View Repository", url: "https://github.com/sudjairakc/portfolio" }],
    stack: [
      "Astro 5",
      "Tailwind CSS v4",
      "TypeScript",
      "Dark Mode",
      "Lottie",
      "GitHub Pages",
    ],
    accent: "from-sky-300/40 to-slate-300/30",
    theme: "blue-slate",
  },
  {
    slug: "bkk-election",
    eyebrow: "Data Visualization",
    title: "BKK Election 65 → 69 Results Compare",
    shortTitle: "BKK Election",
    description:
      "An interactive visualization comparing Bangkok council election winners across 50 districts from 2022 to 2026.",
    website: "https://sudjairakc.github.io/bkk-election-69-results-compare",
    repos: [
      {
        label: "View Repository",
        url: "https://github.com/sudjairakc/bkk-election-69-results-compare",
      },
    ],
    stack: [
      "Astro",
      "TypeScript",
      "SVG Charts",
      "Sankey",
      "Sortable Table",
      "Civic Data",
    ],
    accent: "from-orange-200/40 via-sky-200/30 to-emerald-200/30",
    theme: "civic-pastel",
  },
  {
    slug: "synctune",
    eyebrow: "Real-time App",
    title: "SyncTune — Listen Together in Sync",
    shortTitle: "SyncTune",
    description:
      "A real-time collaborative music room where friends queue YouTube videos, chat, vote, use sound pads, and talk with push-to-talk.",
    website: "https://synctune-frontend.vercel.app",
    repos: [
      { label: "Frontend Repo", url: "https://github.com/sudjairakc/synctune-frontend" },
      { label: "Backend Repo", url: "https://github.com/sudjairakc/synctune-backend" },
    ],
    stack: ["Svelte", "Go", "WebSocket", "WebRTC", "Redis", "YouTube IFrame API"],
    accent: "from-fuchsia-300/40 via-cyan-300/30 to-violet-300/40",
    theme: "music-glow",
  },
];
