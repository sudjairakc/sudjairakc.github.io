/* Shared shape for every locale. en.ts is authoritative; th.ts mirrors it. */

export interface Row {
  label: string;
  /** Right-aligned column: a date (YY.MM) or a short tag. */
  aside: string;
}

export interface Highlight {
  title: string;
  body: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Link {
  label: string;
  url: string;
}

export interface ProjectSection {
  index: string;
  category: string;
  title: string;
  intro: string;
  points: string[];
  stats: Stat[];
  stack: string[];
  links: Link[];
}

export interface Content {
  meta: {title: string; description: string};

  nav: {
    profile: string;
    work: string;
    projects: string;
    contact: string;
    resume: string;
    scroll: string;
  };

  top: {
    builtBy: string;
    categories: string[];
  };

  cover: {
    name: string;
    role: string;
    caption: string;
  };

  profile: {
    photoAlt: string;
    rolePre: string;
    namePost: string;
    headline: string;
    contactLabels: {email: string; github: string; linkedin: string; resume: string};
    education: {heading: string; rows: Row[]};
    experience: {heading: string; rows: Row[]};
    skills: {heading: string; rows: Row[]};
  };

  index: {
    heading: string;
    items: {index: string; title: string; entries: string[]; href: string}[];
  };

  work: {
    index: string;
    category: string;
    title: string;
    company: string;
    period: string;
    about: string[];
    highlights: Highlight[];
    earlierHeading: string;
    earlier: {role: string; company: string; period: string; note: string}[];
  };

  election: ProjectSection;
  synctune: ProjectSection;

  contact: {
    heading: string;
    intro: string;
    switchLang: string;
    rights: string;
    resumeCta: string;
  };
}
