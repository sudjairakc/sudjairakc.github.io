/* Thai content — mirrors en.ts. */

import type {Content} from "./types";

export const th: Content = {
  meta: {
    title: "Chaichana Sudjairak (James) — Senior Full-Stack Developer",
    description:
      "Senior Full-Stack Developer ที่ FIN Insurance Broker ตอนนี้กำลังช่วยพาทีมย้ายระบบไปเป็น Go microservices ทำได้ตั้งแต่ Go, React Native, Next.js ไปจนถึง data visualization และระบบ real-time"
  },

  nav: {
    profile: "Profile",
    work: "Work",
    projects: "Projects",
    contact: "Contact",
    resume: "Résumé",
    scroll: "เลื่อนลงมาดู"
  },

  top: {
    builtBy: "ออกแบบและเขียนโดย",
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
      "ตอนนี้เป็นหนึ่งในคนที่พาทีมย้ายระบบเก่าไปเป็น Go microservices อยู่ที่ FIN ครับ ชอบงานที่ได้ดูตั้งแต่ต้นจนจบ ตั้งแต่ถามว่าปัญหาจริงๆ คืออะไร ไปจนถึงวันที่มันขึ้นไปใช้งานจริง",
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
        entries: ["ย้ายระบบไป Go", "AI assistant ใน app", "Model catalogue", "App ที่ agent ใช้ทุกวัน"],
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

  statement: {
    eyebrow: "How I work",
    text: "ผมชอบเริ่มจากข้อมูล มากกว่าเชื่อตามที่คนในห้องคิดกัน เจอปัญหาก็ขุดไปให้ถึงต้น\u2060เหตุ ไม่ใช่แค่ปิด ticket ให้จบๆ ไป แล้วก็ส่งงานให้เร็ว แต่ไม่ยอมให้คุณภาพตก"
  },

  numbers: {
    eyebrow: "By the numbers",
    heading: "ถ้าให้เล่าเป็นตัวเลข",
    items: [
      {value: "29", label: "ระบบที่กำลังย้ายไป Go ซึ่งผมเป็นหนึ่งใน lead"},
      {value: "220", label: "RPC ใน service หลักที่ผมดูแลอยู่"},
      {value: "1,200+", label: "MR ที่ merge ไปช่วง ก.ค.–ต.ค. 2026"},
      {value: "664", label: "กรมธรรม์ใหม่ ที่มาจากการไปขุดข้อมูลแค่รอบเดียว"},
      {value: "3×", label: "คนใช้ AI assistant เพิ่มขึ้นสามเท่า"},
      {value: "27 → 4", label: "จำนวน API call ตอนเปิดหน้าแรกของ app"}
    ]
  },

  work: {
    index: "01",
    category: "Work",
    title: "Senior Full-Stack Developer",
    company: "FIN Insurance Broker Co., Ltd.",
    period: "มิ.ย. 2023 – ตอนนี้ · ได้ขึ้น Senior เมื่อ ก.ค. 2026",
    about: [
      "งานผมแทบจะทุกชั้นเลยครับ ฝั่ง backend ก็ Go services กับ BFF ฝั่ง frontend ก็ React Native กับ Next.js แล้วก็มีงานข้อมูล ที่ช่วยตอบว่าอะไรควรทำก่อน และอะไรไม่ต้องทำเลย",
      "ผมชอบเริ่มจากข้อมูลมากกว่าความเชื่อ เจอปัญหาก็ตามไปให้ถึงต้นเหตุ และใช้ AI ช่วยให้ส่งงานได้เร็วแบบที่ทีมเล็กๆ ปกติทำไม่ทัน โดยที่ยังต้อง review และมี test ครบเหมือนเดิม"
    ],
    highlights: [
      {
        title: "พาทีม rewrite ระบบ",
        body: "ผมเป็น 1 ใน 3 lead ที่พาทีม 13 คน แยก Node.js monolith ตัวเก่าออกมาเป็น Go services รวม 29 ระบบ ส่วนที่ผมดูแลคือชั้น BFF ทั้งหมด กับ RPC อีก 220 ตัวใน service หลัก เขียน contract ให้ระบบอื่นเอาไปสร้างตาม แล้วก็ทำ read/write cutover ชุดแรก ให้ BFF ตัวอื่นๆ มีตัวอย่างไว้ทำตาม"
      },
      {
        title: "ส่งงานเยอะ แต่ไม่ลวก",
        body: "ช่วง ก.ค.–ต.ค. 2026 merge ไปกว่า 1,200 MR ใน 52 project โดยมี AI ช่วยทำงาน แล้วพอทั้งทีมต้องแชร์ runner กันแค่ 6 ตัว ผมก็เลยทำ CI dashboard กับ merge automation ขึ้นมา ให้คนสิบกว่าคนส่งงานกันได้ไม่ติดขัด"
      },
      {
        title: "ข้อมูลบอกคนละอย่าง",
        body: "ตอนนั้นทุกคนเชื่อว่าเราแพ้คู่แข่งเพราะราคา ผมเลยลองเอาข้อมูลคู่แข่ง 5,563 record มาเทียบดู ปรากฏว่าไม่ใช่เลย เราแพ้เพราะไม่มีรุ่นรถให้ขายต่างหาก รุ่นที่คู่แข่งขายอยู่ ราว 70% เราไม่มีเลย ผมเลยทำ pipeline เติมรุ่นที่ขาดเข้าไป ได้กรมธรรม์ใหม่ 664 ฉบับ โตเดือนละ 58% หลังเปิดใช้ และเช็กแล้วว่าเป็นลูกค้าใหม่จริงๆ ไม่ได้ย้ายมาจากรุ่นเดิม"
      },
      {
        title: "ทำได้ทุกชั้น",
        body: "ทำ AI assistant ใน app ที่ออกใบเสนอราคาจริงได้จากในแชท คนใช้เพิ่มขึ้น 3 เท่า ไล่ปรับ app จนหน้า splash จาก 2 วินาทีเหลือไม่ถึงวินาที หน้าแรกเรียก API จาก 27 ครั้งเหลือ 4 ครั้ง ไฟล์ Android จาก ~48 MB เหลือ ~25 MB ระหว่างนั้นก็ยังทำ feature ที่หาเงินให้บริษัทบนระบบเก่าไปด้วย"
      },
      {
        title: "ขุดให้ถึงต้นเหตุ",
        body: "Android crash กับอาการ \"เชื่อมต่อไม่ได้\" ที่มีคนแจ้งเข้ามานาน ผมตามไปจนเจอต้นเหตุจริงทั้งคู่ ส่วน frontend ตัวใหม่ ผมวางกฎไว้เลยว่าห้ามมี secret หลุดไปใน browser bundle และเรียกได้แค่ same-origin โดยมี test คอยกันไม่ให้ใครเผลอทำผิด"
      },
      {
        title: "lead คนอื่นไว้ใจ",
        body: "lead คนอื่นให้ผมตัดสินใจและ merge งานในส่วนของเขาได้เอง แล้วก็มีขั้นตอนตรวจอัตราค่าคอมที่ผมทำขึ้นมา ซึ่งทั้ง Internal และ External Audit ใช้ปิดข้อสังเกตได้จริง"
      }
    ],
    earlierHeading: "ก่อนหน้านี้",
    earlier: [
      {
        role: "Software Developer",
        company: "Customix Co., Ltd.",
        period: "เม.ย. 2021 – พ.ค. 2023",
        note: "ทำ web กับ mobile app ให้ลูกค้าองค์กร ด้วย React, React Native, Node.js และ Go แล้วก็ทำ UI component library ไว้ให้ทีมใช้ร่วมกัน"
      },
      {
        role: "Web Developer Intern",
        company: "ClickNext Co., Ltd.",
        period: "พ.ย. 2020 – มี.ค. 2021",
        note: "ฝึกงานทำ CMS ให้ระบบของสำนักงานประกันภัยกับระบบสหกรณ์ ด้วย ASP.NET"
      }
    ]
  },

  election: {
    index: "02",
    category: "Data Visualization",
    title: "BKK Election 65 → 69",
    intro:
      "เอาผลเลือกตั้ง ส.ก. กรุงเทพฯ ปี 65 กับปี 69 ครบทั้ง 50 เขต มาทำเป็นภาพ ให้ดูแล้วเข้าใจได้เลย ไม่ต้องไล่อ่านตาราง มีทั้งเทียบที่นั่งแต่ละพรรค แผนที่เขต Sankey ที่ดูได้ว่าใครย้ายไปไหน ตารางที่ค้นหาได้ และกราฟคะแนนที่ขยับไป",
    points: [
      "ดูได้ในหน้าเดียวว่าเขตไหนเปลี่ยนคนชนะ และพรรคไหนได้หรือเสียที่นั่ง",
      "มี Sankey, bar chart, grid map, dumbbell chart, matrix และตารางที่กดเรียงได้",
      "ทำด้วย Astro, TypeScript, vanilla DOM กับ SVG ล้วนๆ ไม่ได้ลาก framework หนักๆ มาด้วย"
    ],
    stats: [
      {value: "50", label: "เขต"},
      {value: "65 → 69", label: "ปีที่เอามาเทียบกัน"},
      {value: "27", label: "เขตที่เปลี่ยนขั้ว"},
      {value: "32", label: "คนที่ชนะซ้ำ"}
    ],
    stack: ["Astro", "TypeScript", "SVG", "Vanilla DOM"],
    links: [
      {label: "เข้าไปดู", url: "https://sudjairakc.github.io/bkk-election-69-results-compare"},
      {label: "Repository", url: "https://github.com/sudjairakc/bkk-election-69-results-compare"}
    ]
  },

  synctune: {
    index: "03",
    category: "Real-time Collaboration",
    title: "SyncTune",
    intro:
      "อันนี้ทำนอกเวลางานให้คนในออฟฟิศครับ เปิดห้องแล้วต่อคิวเพลงจาก YouTube ฟังด้วยกัน แชทกัน โหวตข้ามเพลง กด sound pad หรือกดค้างแล้วพูดใส่ไมค์ก็ได้ ปรากฏว่าคนที่เพิ่งเข้ามาใหม่ ก็เข้ากับทีมได้ตั้งแต่วันแรกเลย",
    points: [
      "ไม่ต้องสมัครอะไร ใส่ชื่อกับ room ID ก็เข้าห้องได้เลย",
      "หลังบ้านเป็น Go ดูแลหลายห้องพร้อมกัน ส่งข้อมูลหากันผ่าน WebSocket และใช้ Redis เป็นที่เก็บ state กลาง",
      "เสียง push-to-talk ใช้ WebRTC ส่วนหน้าบ้านเป็น Svelte กับ Vite"
    ],
    stats: [],
    stack: ["Svelte", "Go", "WebSocket", "WebRTC", "Redis"],
    links: [
      {label: "เข้าไปลองเล่น", url: "https://synctune-frontend.vercel.app"},
      {label: "Repo ฝั่ง Frontend", url: "https://github.com/sudjairakc/synctune-frontend"},
      {label: "Repo ฝั่ง Backend", url: "https://github.com/sudjairakc/synctune-backend"}
    ]
  },

  contact: {
    heading: "มีอะไรอยากทำ มาคุยกันได้นะครับ",
    intro: "จะเป็นเรื่องโปรดักต์ ระบบ หรือข้อมูลเบื้องหลัง ทักมาได้เลย",
    switchLang: "English",
    rights: "สงวนลิขสิทธิ์",
    resumeCta: "ดาวน์โหลด Résumé (PDF)"
  }
};
