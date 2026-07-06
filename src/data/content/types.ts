/* Shared shape for every locale. en.ts is authoritative; th.ts mirrors it.
   Headings with mid-sentence gradient emphasis are stored as `*Html` strings
   rendered via set:html, so each language can phrase them naturally. */

export interface StatValueLabel {
  value: string;
  label: string;
}

export interface PhilosophyCard {
  title: string;
  caption: string;
  applies: string;
}

export interface TechGroupText {
  label: string;
}

export interface ProjectText {
  eyebrow: string;
  title: string;
  shortTitle: string;
  description: string;
  repoLabels: string[];
}

export interface Content {
  meta: {title: string; description: string};

  common: {
    role: string;
    location: string;
  };

  nav: {
    projects: string;
    aiFocus: string;
    stack: string;
    contact: string;
    viewGithub: string;
  };

  hero: {
    headlineHtml: string;
    intro: string;
    exploreBtn: string;
    viewGithub: string;
    jumpTo: string;
    jumpChips: string[];
    cardRole: string;
  };

  featured: {
    eyebrow: string;
    headingHtml: string;
    intro: string;
  };

  profile: {
    eyebrow: string;
    headingHtml: string;
    intro: string;
    points: string[];
    openWebsite: string;
    viewRepository: string;
    cardRole: string;
    stats: string[];
  };

  election: {
    eyebrow: string;
    headingHtml: string;
    intro: string;
    points: string[];
    stats: StatValueLabel[];
    openWebsite: string;
    viewRepository: string;
  };

  synctune: {
    eyebrow: string;
    headingHtml: string;
    intro: string;
    points: string[];
    openWebsite: string;
    frontendRepo: string;
    backendRepo: string;
  };

  ai: {
    eyebrow: string;
    headingHtml: string;
    intro: string;
    appliesTo: string;
    philosophy: PhilosophyCard[];
  };

  stack: {
    eyebrow: string;
    headingHtml: string;
    groups: TechGroupText[];
  };

  contact: {
    eyebrow: string;
    headingHtml: string;
    intro: string;
    contactMe: string;
    github: string;
    linkedin: string;
    downloadResume: string;
  };

  projectCard: {
    openWebsite: string;
  };

  projects: ProjectText[];

  footer: {
    copyright: string;
  };
}
