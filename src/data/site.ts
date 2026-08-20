// Shared site-wide constants: identity, socials, SEO. Single source of truth.

export const site = {
  name: "Chaichana Sudjairak",
  displayName: "James",
  handle: "ChaichanaS",
  role: "AI-focused Senior Full-Stack Developer",
  location: "Thailand",
  title: "Chaichana Sudjairak — AI-focused Senior Full-Stack Developer",
  description:
    "Project hub of Chaichana Sudjairak, an AI-focused senior full-stack developer building web products, data visualizations, automation tools, and real-time collaborative systems.",
  url: "https://sudjairakc.github.io",
  ogImage: "/images/og-image.png",
};

export const socials = {
  github: "https://github.com/sudjairakc",
  linkedin: "https://www.linkedin.com/in/chaichana-sudjairak/",
  gitlab: "https://gitlab.com/sudjairakc",
  facebook: "https://www.facebook.com/chaichana.sudjairak",
  email: "sudjairak.c@gmail.com",
  resume:
    "https://drive.google.com/file/d/1KQie2ie0wg0qvmD3pWzrNw2O4j8FgyMF/view?usp=sharing",
};

// Tech stack cloud, grouped (brief §6.8).
export const techGroups = [
  {
    label: "Frontend",
    glow: "from-sky-300/40 to-blue-300/30",
    items: [
      "Astro",
      "Svelte",
      "React",
      "React Native",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    label: "Backend & Real-time",
    glow: "from-violet-300/40 to-fuchsia-300/30",
    items: ["Go", "Node.js", "WebSocket", "WebRTC", "Redis", "REST API"],
  },
  {
    label: "Data & Visualization",
    glow: "from-emerald-300/40 to-cyan-300/30",
    items: [
      "SVG",
      "Vanilla DOM",
      "Data Visualization",
      "Election Data",
      "Interactive Tables",
    ],
  },
  {
    label: "Infra & Tools",
    glow: "from-amber-300/40 to-orange-300/30",
    items: [
      "GitHub Actions",
      "GitHub Pages",
      "Vercel",
      "Docker",
      "PostgreSQL",
      "MariaDB",
      "MongoDB",
      "AWS",
    ],
  },
];

// AI workflow / build philosophy cards (brief §6.7).
export const philosophy = [
  {
    title: "Product Thinking",
    caption: "From vague idea to usable interface",
    applies: "Portfolio · SyncTune",
  },
  {
    title: "Data Understanding",
    caption: "From raw data to visual insight",
    applies: "BKK Election",
  },
  {
    title: "System Design",
    caption: "From single-user UI to real-time multi-user state",
    applies: "SyncTune backend",
  },
  {
    title: "Automation Ready",
    caption: "Built with static deployment, GitHub Actions, and content workflows in mind",
    applies: "Landing page · Portfolio",
  },
];
