/* English content — authoritative source of shape. th.ts mirrors this. */

import type {Content} from "./types";

export const en: Content = {
  meta: {
    title: "Chaichana Sudjairak (James) — Senior Full-Stack Developer",
    description:
      "Senior Full-Stack Developer at FIN Insurance Broker, co-leading a Go microservices rewrite. Go, React Native, Next.js, data visualization, and real-time systems."
  },

  top: {
    builtBy: "Designed & built by",
    categories: ["Full-Stack", "Data Visualization", "Real-time"]
  },

  cover: {
    name: "Chaichana Sudjairak (James)",
    role: "Senior Full-Stack Developer",
    caption: "Portfolio"
  },

  profile: {
    photoAlt: "Portrait of Chaichana Sudjairak",
    rolePre: "Senior Full-Stack Developer",
    namePost: "Chaichana Sudjairak",
    headline:
      "Co-leading a Go microservices rewrite at FIN Insurance Broker. I like owning a problem from the question to the shipped result.",
    contactLabels: {
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      resume: "Résumé"
    },
    education: {
      heading: "Education",
      rows: [
        {
          label: "Burapha University — B.Sc. Computer Science (GPA 3.31)",
          aside: "17.08–21.04"
        }
      ]
    },
    experience: {
      heading: "Experience",
      rows: [
        {label: "FIN Insurance Broker — Senior Full-Stack Developer", aside: "26.07–"},
        {label: "FIN Insurance Broker — Full-Stack Developer", aside: "23.06–26.07"},
        {label: "Customix — Software Developer", aside: "21.04–23.05"},
        {label: "ClickNext — Web Developer Intern", aside: "20.11–21.03"}
      ]
    },
    skills: {
      heading: "Skills",
      rows: [
        {label: "Go, gRPC, PostgreSQL, MySQL / MariaDB", aside: "Backend"},
        {label: "Node.js, Redis, WebSocket, WebRTC", aside: "Backend"},
        {label: "React Native, Next.js, React, TypeScript", aside: "Frontend"},
        {label: "Astro, Svelte, Tailwind CSS, SVG charts", aside: "Web & Data"},
        {label: "GitLab CI, GitHub Actions, Kubernetes, Docker, AWS", aside: "Infra"}
      ]
    }
  },

  index: {
    heading: "Index",
    items: [
      {
        index: "01",
        title: "Work",
        entries: ["Go services rewrite", "In-app AI assistant", "Model catalogue", "Agent app"],
        href: "#work"
      },
      {
        index: "02",
        title: "Data Visualization",
        entries: ["BKK Election 65 → 69"],
        href: "#data-visualization"
      },
      {
        index: "03",
        title: "Real-time Collaboration",
        entries: ["SyncTune"],
        href: "#real-time"
      }
    ]
  },

  work: {
    index: "01",
    category: "Work",
    title: "Senior Full-Stack Developer",
    company: "FIN Insurance Broker Co., Ltd.",
    period: "Jun 2023 – Present · Senior since Jul 2026",
    about: [
      "My work spans the whole stack: Go services and BFFs on the backend, React Native and Next.js on the front, and the data work that decides what is worth building in the first place.",
      "I start with the data, not the opinion in the room. I fix things at the root rather than closing the ticket. And I use AI-assisted workflows to ship at a pace a small team normally can't, without lowering the bar on review and tests."
    ],
    highlights: [
      {
        title: "Rewrite leadership",
        body: "One of three leads splitting a Node.js monolith into Go services across 29 systems and 13 developers. I own the BFF layer and 220 RPCs in the core service, wrote the contracts other systems were built against, and shipped the first read and write cutovers that the other BFFs followed."
      },
      {
        title: "Delivery at scale",
        body: "Merged 1,200+ MRs across 52 projects in Jul–Oct 2026 with an AI-assisted workflow, and built the CI dashboard and merge automation that kept 12+ developers shipping on 6 shared runners."
      },
      {
        title: "Data-driven product call",
        body: "The room believed we lost on price. Matching 5,563 competitor records showed the real gap was coverage, as we did not list ~70% of competitor trims. I built the pipeline that filled it: 664 new policies, 58% month-over-month growth after launch, confirmed as new business."
      },
      {
        title: "Full-stack, end to end",
        body: "Built the in-app AI assistant that issues real quotations from chat (usage grew 3×). Cut app splash from 2s to under 1s, home-screen API calls from 27 to 4, and Android download from ~48 MB to ~25 MB. Kept revenue features shipping on legacy during the rewrite."
      },
      {
        title: "Root-cause fixes",
        body: "Traced long-standing Android crashes and \"cannot connect\" reports to their real causes. Set test-enforced security rules for the new frontend: no secrets in the browser bundle, same-origin calls only."
      },
      {
        title: "Trusted at lead level",
        body: "Fellow leads delegated decisions and merge authority over their areas to me. Built the commission-rate review process that Internal and External Audit accepted to close their finding."
      }
    ],
    earlierHeading: "Earlier",
    earlier: [
      {
        role: "Software Developer",
        company: "Customix Co., Ltd.",
        period: "Apr 2021 – May 2023",
        note: "Web and mobile apps for enterprise platforms with React, React Native, Node.js, and Go, plus a shared UI component library."
      },
      {
        role: "Web Developer Intern",
        company: "ClickNext Co., Ltd.",
        period: "Nov 2020 – Mar 2021",
        note: "A dynamic CMS for insurance-bureau and financial-cooperative systems in ASP.NET."
      }
    ]
  },

  election: {
    index: "02",
    category: "Data Visualization",
    title: "BKK Election 65 → 69",
    intro:
      "Bangkok council election results from 2022 to 2026 across all 50 districts, turned into visual stories people can scan: party seat comparison, district maps, Sankey-style transitions, searchable tables, and score movement charts.",
    points: [
      "District-level winner changes and party movement in one view.",
      "Sankey, bar charts, grid map, dumbbell chart, matrix, and a sortable table.",
      "Astro, TypeScript, vanilla DOM, and SVG, with no heavy runtime framework."
    ],
    stats: [
      {value: "50", label: "districts"},
      {value: "65 → 69", label: "seats compared"},
      {value: "27", label: "changed hands"},
      {value: "32", label: "repeat winners"}
    ],
    stack: ["Astro", "TypeScript", "SVG", "Vanilla DOM"],
    links: [
      {label: "Open website", url: "https://sudjairakc.github.io/bkk-election-69-results-compare"},
      {label: "Repository", url: "https://github.com/sudjairakc/bkk-election-69-results-compare"}
    ]
  },

  synctune: {
    index: "03",
    category: "Real-time Collaboration",
    title: "SyncTune",
    intro:
      "A shared music room built on my own time for the office. Create a room, queue YouTube videos together, chat, vote on playback, trigger the sound pad, and talk with push-to-talk. It made new joiners part of the room from day one.",
    points: [
      "No account needed: join with a name and a room ID.",
      "Go backend with multi-room state, WebSocket broadcasting, and Redis as the single source of truth.",
      "WebRTC signaling for push-to-talk voice; Svelte and Vite on the front."
    ],
    stats: [],
    stack: ["Svelte", "Go", "WebSocket", "WebRTC", "Redis"],
    links: [
      {label: "Open website", url: "https://synctune-frontend.vercel.app"},
      {label: "Frontend repo", url: "https://github.com/sudjairakc/synctune-frontend"},
      {label: "Backend repo", url: "https://github.com/sudjairakc/synctune-backend"}
    ]
  },

  contact: {
    heading: "Have an idea worth building?",
    intro: "I'm happy to talk about products, systems, and the data behind them.",
    switchLang: "ภาษาไทย",
    rights: "All rights reserved."
  }
};
