// Résumé copy that must match the LinkedIn profile (linkedin.com/in/sudjairakc)
// word for word: name, headline and Experience. Update this file whenever
// LinkedIn changes. The short Summary, Skills, Projects and Education come from
// content/en.ts (LinkedIn's About is too long for the résumé).

export const resume = {
  name: "Chaichana Sudjairak",
  headline:
    "Senior Full-Stack Developer at FIN Insurance Broker | Co-leading a Go microservices rewrite | Go · React Native · Next.js · AI-assisted delivery",

  experience: [
    {
      title: "Senior Full Stack Developer",
      company: "Fin Insurance Broker Co., Ltd.",
      type: "Full-time",
      period: "Jun 2023 – Present",
      location: "Bangkok, Thailand · Hybrid",
      bullets: [
        "Rewrite leadership: One of three leads splitting a Node.js monolith into Go services across 29 systems and 13 developers. I own the BFF layer and 220 RPCs in the core service, wrote the contracts other systems were built against, and shipped the first read and write cutovers that the other BFFs followed.",
        "Delivery at scale: Merged 1,200+ MRs across 52 projects in Jul–Oct 2026 with an AI-assisted workflow, and built the CI dashboard and merge automation that kept 12+ developers shipping on 6 shared runners.",
        "Data-driven product call: The room believed we lost on price. Matching 5,563 competitor records showed the real gap was coverage, as we did not list ~70% of competitor trims. I built the pipeline that filled it: 664 new policies, 58% month-over-month growth after launch, confirmed as new business.",
        "Full-stack, end to end: Built the in-app AI assistant that issues real quotations from chat (usage grew 3×). Cut app splash from 2s to under 1s, home-screen API calls from 27 to 4, and Android download from ~48 MB to ~25 MB. Kept revenue features shipping on legacy during the rewrite (coupon auto-apply, installment quotas, High Volume Agent).",
        "Root-cause fixes: Traced long-standing Android crashes and \"cannot connect\" reports to their real causes. Set test-enforced security rules for the new frontend: no secrets in the browser bundle, same-origin calls only.",
        "Trusted at lead level: Fellow leads delegated decisions and merge authority over their areas to me. Built the commission-rate review process that Internal and External Audit accepted to close their finding.",
        "Built on my own time: A real-time collaborative music app for the office that made new joiners part of the room from day one.",
      ],
    },
    {
      title: "Software Developer",
      company: "Customix.co",
      type: "Full-time",
      period: "Apr 2021 – May 2023",
      location: "Chonburi, Thailand",
      bullets: [
        "Built web and mobile apps for enterprise platforms using React, React Native, Node.js, and Go.",
        "Designed a reusable UI component library that improved dev velocity by 20% and kept design consistent across platforms.",
        "Improved RESTful API integration and worked closely with designers and PMs to deliver complex features on schedule.",
      ],
    },
  ],
};
