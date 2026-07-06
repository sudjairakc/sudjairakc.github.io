/* English content — authoritative source of shape. th.ts mirrors this. */

import type {Content} from "./types";

export const en: Content = {
  meta: {
    title: "Chaichana Sudjairak — AI-focused Full Stack Developer",
    description:
      "Project hub of Chaichana Sudjairak, an AI-focused full stack developer building web products, data visualizations, automation tools, and real-time collaborative systems."
  },

  common: {
    role: "AI-focused Full Stack Developer",
    location: "Thailand"
  },

  nav: {
    projects: "Projects",
    aiFocus: "AI Focus",
    stack: "Stack",
    contact: "Contact",
    viewGithub: "View GitHub"
  },

  hero: {
    headlineHtml:
      'Building <span class="gradient-text">intelligent</span> web products, <span class="gradient-text">data</span> stories, and <span class="gradient-text">real-time</span> systems.',
    intro:
      "I'm James — a full stack developer turning ideas into practical products across Astro, Svelte, React, Go, TypeScript, data visualization, and real-time collaboration.",
    exploreBtn: "Explore Projects",
    viewGithub: "View GitHub",
    jumpTo: "Jump to:",
    jumpChips: ["Portfolio", "Election Data Viz", "SyncTune"],
    cardRole: "Full Stack Developer · Thailand"
  },

  featured: {
    eyebrow: "Selected work",
    headingHtml:
      'Three projects, three <span class="gradient-text">product angles</span>.',
    intro:
      "A professional developer profile, a civic data visualization, and a real-time collaborative music app."
  },

  profile: {
    eyebrow: "01 · Portfolio",
    headingHtml:
      'A developer profile built to communicate <span class="gradient-text">capability</span>, speed, and ownership.',
    intro:
      "The portfolio site introduces James as a full stack developer with experience across frontend, mobile, backend, data, and infrastructure. It is built with Astro and Tailwind, optimized as a static site, and structured so profile content can be updated from a single data source.",
    points: [
      "Presents professional profile, skills, education, work experience, projects, and contact.",
      "Uses Astro static generation for speed and GitHub Pages deployment.",
      "Uses Tailwind CSS v4 for a modern responsive interface.",
      "Includes dark mode, splash screen, social links, and resume access."
    ],
    openWebsite: "Open Website",
    viewRepository: "View Repository",
    cardRole: "Full Stack Developer · Thailand",
    stats: ["5+ yrs experience", "End-to-end delivery"]
  },

  election: {
    eyebrow: "02 · Data Visualization",
    headingHtml:
      'Turning complex election results into <span class="gradient-text">visual stories</span> people can scan.',
    intro:
      "This project compares Bangkok council election results from 2022 to 2026 across all 50 districts. It translates political and district-level changes into interactive visualizations, including party seat comparison, district maps, Sankey-style transitions, searchable tables, and score movement charts.",
    points: [
      "Compares 50 Bangkok districts between 2022 and 2026.",
      "Shows district-level winner changes and party/group movement.",
      "Includes Sankey, bar charts, grid map, dumbbell chart, matrix, and sortable table.",
      "Built with Astro, TypeScript, vanilla DOM, and SVG without a heavy runtime framework."
    ],
    stats: [
      {value: "50", label: "districts"},
      {value: "65 → 69", label: "seats compared"},
      {value: "27", label: "changed hands"},
      {value: "32", label: "repeat winners"}
    ],
    openWebsite: "Open Website",
    viewRepository: "View Repository"
  },

  synctune: {
    eyebrow: "03 · Real-time Collaboration",
    headingHtml:
      'A shared music room powered by <span class="gradient-text">WebSocket</span>, WebRTC, and Redis.',
    intro:
      "SyncTune is an experimental real-time music collaboration app. Users can create a room, add YouTube videos to a shared queue, chat with others, vote on playback actions, trigger sound effects, and use push-to-talk voice. The frontend is built with Svelte and Vite, while the backend uses Go, WebSocket broadcasting, and Redis as the single source of truth.",
    points: [
      "Real-time shared music queue with YouTube playback.",
      "No account required: users join with a name and room ID.",
      "Chat, online users, queue history, sound pad, vote modal, and voice PTT.",
      "Backend handles multi-room state, WebSocket broadcasting, Redis persistence, and WebRTC signaling."
    ],
    openWebsite: "Open Website",
    frontendRepo: "Frontend Repo",
    backendRepo: "Backend Repo"
  },

  ai: {
    eyebrow: "Build philosophy",
    headingHtml:
      '<span class="gradient-text">AI-assisted</span>, product-minded engineering',
    intro:
      "I use AI as a development multiplier — not just to generate code, but to explore architecture, refine UX, debug faster, and turn rough ideas into shipped products. The projects here reflect a practical workflow: define the problem, shape the interface, build the system, and iterate with real usage.",
    appliesTo: "Applies to",
    philosophy: [
      {
        title: "Product Thinking",
        caption: "From vague idea to usable interface",
        applies: "Portfolio · SyncTune"
      },
      {
        title: "Data Understanding",
        caption: "From raw data to visual insight",
        applies: "BKK Election"
      },
      {
        title: "System Design",
        caption: "From single-user UI to real-time multi-user state",
        applies: "SyncTune backend"
      },
      {
        title: "Automation Ready",
        caption:
          "Built with static deployment, GitHub Actions, and content workflows in mind",
        applies: "Landing page · Portfolio"
      }
    ]
  },

  stack: {
    eyebrow: "Tech stack",
    headingHtml:
      'The <span class="gradient-text">tools</span> behind the work.',
    groups: [
      {label: "Frontend"},
      {label: "Backend & Real-time"},
      {label: "Data & Visualization"},
      {label: "Infra & Tools"}
    ]
  },

  contact: {
    eyebrow: "Get in touch",
    headingHtml:
      'Have an idea worth <span class="gradient-text">building</span>?',
    intro:
      "I'm open to discussing web products, data tools, automation workflows, and real-time systems — especially projects where AI can help move faster from idea to production.",
    contactMe: "Contact Me",
    github: "GitHub",
    linkedin: "LinkedIn",
    downloadResume: "Download Resume"
  },

  projectCard: {
    openWebsite: "Open Website"
  },

  projects: [
    {
      eyebrow: "Personal Site",
      title: "Portfolio — Full Stack Developer Profile",
      shortTitle: "Portfolio",
      description:
        "A clean Astro + Tailwind portfolio presenting skills, experience, education, selected projects, resume, and contact channels.",
      repoLabels: ["View Repository"]
    },
    {
      eyebrow: "Data Visualization",
      title: "BKK Election 65 → 69 Results Compare",
      shortTitle: "BKK Election",
      description:
        "An interactive visualization comparing Bangkok council election winners across 50 districts from 2022 to 2026.",
      repoLabels: ["View Repository"]
    },
    {
      eyebrow: "Real-time App",
      title: "SyncTune — Listen Together in Sync",
      shortTitle: "SyncTune",
      description:
        "A real-time collaborative music room where friends queue YouTube videos, chat, vote, use sound pads, and talk with push-to-talk.",
      repoLabels: ["Frontend Repo", "Backend Repo"]
    }
  ],

  footer: {
    copyright: "© 2026 Chaichana Sudjairak. Built with Astro & Tailwind."
  }
};
