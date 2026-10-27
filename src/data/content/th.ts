/* Thai content — mirrors en.ts. */

import type {Content} from "./types";

export const th: Content = {
  meta: {
    title: "Chaichana Sudjairak (James) — Senior Full-Stack Developer",
    description:
      "Senior Full-Stack Developer ที่ FIN Insurance Broker หนึ่งใน lead ของการ rewrite ระบบเป็น Go microservices ถนัด Go, React Native, Next.js, data visualization และระบบ real-time"
  },

  nav: {
    profile: "Profile",
    work: "Work",
    projects: "Projects",
    contact: "Contact",
    resume: "Résumé",
    scroll: "เลื่อนลง"
  },

  top: {
    builtBy: "ออกแบบและพัฒนาโดย",
    categories: ["Full-Stack", "Data Visualization", "Real-time"]
  },

  cover: {
    name: "Chaichana Sudjairak (James)",
    role: "Senior Full-Stack Developer",
    caption: "Portfolio"
  },

  profile: {
    photoAlt: "รูปของ Chaichana Sudjairak",
    rolePre: "Senior Full-Stack Developer",
    namePost: "Chaichana Sudjairak",
    headline:
      "หนึ่งใน lead ของการ rewrite ระบบเป็น Go microservices ที่ FIN Insurance Broker ชอบรับผิดชอบปัญหาตั้งแต่ตั้งคำถาม จนส่งงานขึ้นใช้จริง",
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
          label: "มหาวิทยาลัยบูรพา — วท.บ. วิทยาการคอมพิวเตอร์ (GPA 3.31)",
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
        entries: ["Rewrite เป็น Go services", "AI assistant ใน app", "Model catalogue", "App ของ agent"],
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
    period: "มิ.ย. 2023 – ปัจจุบัน · เป็น Senior ตั้งแต่ ก.ค. 2026",
    about: [
      "งานของผมครอบคลุมทุกชั้น ตั้งแต่ Go services และ BFF ฝั่ง backend, React Native และ Next.js ฝั่ง frontend ไปจนถึงงานข้อมูลที่ช่วยตัดสินว่าอะไรควรสร้างตั้งแต่แรก",
      "ผมเริ่มจากข้อมูล ไม่ใช่ความเชื่อในห้องประชุม แก้ปัญหาที่ต้นเหตุ ไม่ใช่แค่ปิด ticket และใช้ AI-assisted workflow ส่งงานได้เร็วกว่าที่ทีมเล็กปกติทำได้ โดยไม่ลดมาตรฐานการ review และ test"
    ],
    highlights: [
      {
        title: "นำการ rewrite",
        body: "เป็น 1 ใน 3 lead ที่แยก Node.js monolith ออกเป็น Go services 29 ระบบ ทีม 13 คน ดูแลชั้น BFF และ 220 RPC ใน service หลัก เขียน contract ที่ระบบอื่นใช้สร้างตาม และทำ read/write cutover ชุดแรกที่ BFF อื่นใช้เป็นแบบ"
      },
      {
        title: "ส่งงานในสเกลใหญ่",
        body: "merge ไปกว่า 1,200 MR ใน 52 project ช่วง ก.ค.–ต.ค. 2026 ด้วย AI-assisted workflow และสร้าง CI dashboard กับ merge automation ที่ทำให้ทีม 12+ คนส่งงานได้ต่อเนื่อง ทั้งที่มี shared runner แค่ 6 ตัว"
      },
      {
        title: "ตัดสินใจจากข้อมูล",
        body: "ทุกคนเชื่อว่าเราแพ้เรื่องราคา แต่พอเทียบข้อมูลคู่แข่ง 5,563 record กลับเจอว่าเราแพ้เพราะไม่มีรุ่นรถให้ขาย ราว 70% ของรุ่นที่คู่แข่งขายเราไม่มีเลย ผมสร้าง pipeline เติมส่วนที่ขาด ได้กรมธรรม์ใหม่ 664 ฉบับ โต 58% ต่อเดือนหลังเปิดใช้ และยืนยันแล้วว่าเป็นลูกค้าใหม่จริง"
      },
      {
        title: "Full-stack ครบทุกชั้น",
        body: "สร้าง AI assistant ใน app ที่ออกใบเสนอราคาจริงได้จากในแชท (ยอดใช้งานโต 3 เท่า) ทำให้ splash ของ app จาก 2 วินาทีเหลือไม่ถึง 1 วินาที API call ตอนเปิดหน้าแรกจาก 27 ครั้งเหลือ 4 ครั้ง และขนาดดาวน์โหลดบน Android จาก ~48 MB เหลือ ~25 MB พร้อมทำ feature ที่สร้างรายได้บนระบบเก่าไปพร้อมกับการ rewrite"
      },
      {
        title: "แก้ที่ต้นเหตุ",
        body: "หาต้นเหตุ crash บน Android และอาการ \"เชื่อมต่อไม่ได้\" ที่มีคนแจ้งมานานจนเจอ และวางกฎความปลอดภัยให้ frontend ใหม่ที่มี test คุมไว้ ว่าห้ามมี secret ใน browser bundle และเรียกได้เฉพาะ same-origin"
      },
      {
        title: "ได้รับความไว้ใจระดับ lead",
        body: "lead คนอื่นมอบสิทธิ์ตัดสินใจและ merge งานในส่วนของเขาให้ผม และสร้างขั้นตอนตรวจอัตราค่าคอมที่ Internal และ External Audit ใช้ปิดข้อสังเกตได้จริง"
      }
    ],
    earlierHeading: "ก่อนหน้านี้",
    earlier: [
      {
        role: "Software Developer",
        company: "Customix Co., Ltd.",
        period: "เม.ย. 2021 – พ.ค. 2023",
        note: "พัฒนา web และ mobile app ให้แพลตฟอร์มองค์กรด้วย React, React Native, Node.js และ Go พร้อมทำ UI component library ที่ใช้ร่วมกัน"
      },
      {
        role: "Web Developer Intern",
        company: "ClickNext Co., Ltd.",
        period: "พ.ย. 2020 – มี.ค. 2021",
        note: "พัฒนา CMS สำหรับระบบสำนักงานประกันภัยและสหกรณ์การเงินด้วย ASP.NET"
      }
    ]
  },

  election: {
    index: "02",
    category: "Data Visualization",
    title: "BKK Election 65 → 69",
    intro:
      "เปลี่ยนผลเลือกตั้ง ส.ก. กรุงเทพฯ ปี 2565 และ 2569 ครบทั้ง 50 เขต ให้เป็นภาพที่อ่านเข้าใจได้ทันที ทั้งการเทียบที่นั่งแต่ละพรรค แผนที่เขต การย้ายขั้วแบบ Sankey ตารางที่ค้นหาได้ และกราฟการเปลี่ยนของคะแนน",
    points: [
      "เห็นการเปลี่ยนผู้ชนะระดับเขตและการย้ายของพรรคในหน้าเดียว",
      "มีทั้ง Sankey, bar chart, grid map, dumbbell chart, matrix และตารางที่เรียงลำดับได้",
      "สร้างด้วย Astro, TypeScript, vanilla DOM และ SVG ไม่ใช้ framework หนักๆ ตอน runtime"
    ],
    stats: [
      {value: "50", label: "เขต"},
      {value: "65 → 69", label: "ที่นั่งที่เทียบ"},
      {value: "27", label: "เปลี่ยนขั้ว"},
      {value: "32", label: "ชนะซ้ำ"}
    ],
    stack: ["Astro", "TypeScript", "SVG", "Vanilla DOM"],
    links: [
      {label: "เปิดเว็บไซต์", url: "https://sudjairakc.github.io/bkk-election-69-results-compare"},
      {label: "Repository", url: "https://github.com/sudjairakc/bkk-election-69-results-compare"}
    ]
  },

  synctune: {
    index: "03",
    category: "Real-time Collaboration",
    title: "SyncTune",
    intro:
      "ห้องฟังเพลงร่วมกันที่ทำนอกเวลางานให้คนในออฟฟิศ สร้างห้อง ต่อคิววิดีโอ YouTube ด้วยกัน แชท โหวตควบคุมการเล่น กด sound pad และคุยด้วย push-to-talk ช่วยให้คนใหม่เข้ากับทีมได้ตั้งแต่วันแรก",
    points: [
      "ไม่ต้องสมัครบัญชี เข้าห้องด้วยชื่อและ room ID",
      "backend เป็น Go ดูแลสถานะหลายห้อง กระจายข้อมูลผ่าน WebSocket และใช้ Redis เป็น single source of truth",
      "ใช้ WebRTC signaling สำหรับเสียง push-to-talk ฝั่งหน้าบ้านเป็น Svelte และ Vite"
    ],
    stats: [],
    stack: ["Svelte", "Go", "WebSocket", "WebRTC", "Redis"],
    links: [
      {label: "เปิดเว็บไซต์", url: "https://synctune-frontend.vercel.app"},
      {label: "Repo ฝั่ง Frontend", url: "https://github.com/sudjairakc/synctune-frontend"},
      {label: "Repo ฝั่ง Backend", url: "https://github.com/sudjairakc/synctune-backend"}
    ]
  },

  contact: {
    heading: "มีไอเดียที่อยากสร้างไหม?",
    intro: "ยินดีคุยเรื่องโปรดักต์ ระบบ และข้อมูลที่อยู่เบื้องหลัง",
    switchLang: "English",
    rights: "สงวนลิขสิทธิ์",
    resumeCta: "ดาวน์โหลด Résumé (PDF)"
  }
};
