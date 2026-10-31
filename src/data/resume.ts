// Résumé copy: name, headline, Summary and Experience. Written for the résumé
// (ordered by impact for Senior Software / Full-Stack Engineer roles), so it no
// longer mirrors LinkedIn word for word. Skills, Projects and Education come
// from content/en.ts. Keep every number as stated here; add no new metrics.

export const resume = {
  name: "Chaichana Sudjairak",
  headline:
    "Senior Full-Stack Developer at FIN Insurance Broker | Co-leading a Go microservices rewrite | Go · React Native · Next.js · AI-assisted delivery",

  summary:
    "Senior full-stack engineer with 5+ years building web and mobile products end to end: Go services, BFFs and RPC contracts on the backend; React Native and Next.js on the front. Co-leading a Node.js-to-Go microservices rewrite at an insurance broker. I use data to decide what to build, fix problems at the root, and use AI-assisted workflows and CI automation to raise team throughput without lowering the review and test bar.",

  experience: [
    {
      title: "Senior Full Stack Developer",
      company: "Fin Insurance Broker Co., Ltd.",
      type: "Full-time",
      period: "Jun 2023 – Present",
      location: "Bangkok, Thailand · Hybrid",
      bullets: [
        "System modernization: One of three leads splitting a Node.js monolith into Go microservices across 29 systems and 13 developers. I own the BFF layer and 220 RPCs in the core service, wrote the contracts other systems were built against, and shipped the first read and write cutovers that the other BFFs followed.",
        "Business impact from data: Matched 5,563 competitor records and showed the gap was coverage, not price: we did not list ~70% of competitor trims. Built the pipeline that filled it: 664 new policies and 58% month-over-month growth after launch, confirmed as new business.",
        "App performance: Cut app splash from 2s to under 1s, home-screen API calls from 27 to 4, and Android download size from ~48 MB to ~25 MB.",
        "Product delivery: Built the in-app AI assistant that issues real quotations from chat (usage grew 3×). Kept revenue features shipping on legacy during the rewrite: coupon auto-apply, installment quotas, High Volume Agent.",
        "Technical leadership: Fellow leads delegated decisions and merge authority over their areas to me. Built the commission-rate review process that Internal and External Audit accepted to close their finding.",
        "Team throughput: Merged 1,200+ MRs across 52 projects in Jul–Oct 2026 with an AI-assisted workflow, and built the CI dashboard and merge automation that kept 12+ developers shipping on 6 shared runners.",
        "Reliability and security: Traced long-standing Android crashes and \"cannot connect\" reports to their root causes. Set test-enforced security rules for the new frontend: no secrets in the browser bundle, same-origin calls only.",
      ],
    },
    {
      title: "Software Developer",
      company: "Customix.co",
      type: "Full-time",
      period: "Apr 2021 – May 2023",
      location: "Chonburi, Thailand",
      bullets: [
        "Built web and mobile apps for enterprise platforms with React, React Native, Node.js and Go.",
        "Designed a reusable UI component library that improved dev velocity by 20% and kept design consistent across platforms.",
        "Integrated RESTful APIs and worked with designers and PMs to ship complex features on schedule.",
      ],
    },
  ],
};
