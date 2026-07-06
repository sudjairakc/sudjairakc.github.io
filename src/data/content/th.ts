/* Thai content — mirrors the shape of en.ts (authoritative source). */

import type {Content} from "./types";

export const th: Content = {
  meta: {
    title: "Chaichana Sudjairak — AI-focused Full Stack Developer",
    description:
      "ศูนย์รวมโปรเจกต์ของ Chaichana Sudjairak นักพัฒนา Full Stack สาย AI ผู้สร้างเว็บโปรดักต์ งาน data visualization เครื่องมืออัตโนมัติ และระบบทำงานร่วมกันแบบเรียลไทม์"
  },

  common: {
    role: "Full Stack Developer สาย AI",
    location: "ประเทศไทย"
  },

  nav: {
    projects: "โปรเจกต์",
    aiFocus: "จุดเด่นด้าน AI",
    stack: "เทคโนโลยี",
    contact: "ติดต่อ",
    viewGithub: "ดูบน GitHub"
  },

  hero: {
    headlineHtml:
      'สร้างเว็บโปรดักต์ที่<span class="gradient-text">ชาญฉลาด</span> เล่าเรื่องผ่าน<span class="gradient-text">ข้อมูล</span> และพัฒนาระบบ<span class="gradient-text">เรียลไทม์</span>',
    intro:
      "ผมชื่อ James — นักพัฒนา Full Stack ที่เปลี่ยนไอเดียให้เป็นโปรดักต์ที่ใช้งานได้จริง ครอบคลุมทั้ง Astro, Svelte, React, Go, TypeScript, data visualization และการทำงานร่วมกันแบบเรียลไทม์",
    exploreBtn: "สำรวจโปรเจกต์",
    viewGithub: "ดูบน GitHub",
    jumpTo: "ไปยัง:",
    jumpChips: ["Portfolio", "Election Data Viz", "SyncTune"],
    cardRole: "Full Stack Developer · ประเทศไทย"
  },

  featured: {
    eyebrow: "ผลงานที่คัดสรร",
    headingHtml:
      'สามโปรเจกต์ สาม<span class="gradient-text">มุมมองของโปรดักต์</span>',
    intro:
      "โปรไฟล์นักพัฒนามืออาชีพ งาน data visualization เชิงพลเมือง และแอปฟังเพลงร่วมกันแบบเรียลไทม์"
  },

  profile: {
    eyebrow: "01 · Portfolio",
    headingHtml:
      'โปรไฟล์นักพัฒนาที่สร้างขึ้นเพื่อสื่อสาร<span class="gradient-text">ความสามารถ</span> ความรวดเร็ว และความเป็นเจ้าของงาน',
    intro:
      "เว็บไซต์พอร์ตโฟลิโอแนะนำ James ในฐานะนักพัฒนา Full Stack ที่มีประสบการณ์ครอบคลุมทั้ง frontend, mobile, backend, data และ infrastructure สร้างด้วย Astro และ Tailwind ปรับให้เป็น static site และออกแบบให้อัปเดตเนื้อหาโปรไฟล์ได้จากแหล่งข้อมูลเดียว",
    points: [
      "นำเสนอโปรไฟล์มืออาชีพ ทักษะ การศึกษา ประสบการณ์ทำงาน โปรเจกต์ และช่องทางติดต่อ",
      "ใช้ Astro static generation เพื่อความรวดเร็วและ deploy บน GitHub Pages",
      "ใช้ Tailwind CSS v4 สำหรับอินเทอร์เฟซที่ทันสมัยและ responsive",
      "รองรับ dark mode, splash screen, ลิงก์โซเชียล และการเข้าถึงเรซูเม่"
    ],
    openWebsite: "เปิดเว็บไซต์",
    viewRepository: "ดู Repository",
    cardRole: "Full Stack Developer · ประเทศไทย",
    stats: ["5+ ปีประสบการณ์", "ส่งมอบงานแบบครบวงจร"]
  },

  election: {
    eyebrow: "02 · Data Visualization",
    headingHtml:
      'เปลี่ยนผลการเลือกตั้งที่ซับซ้อนให้เป็น<span class="gradient-text">เรื่องราวเชิงภาพ</span>ที่อ่านเข้าใจได้ในพริบตา',
    intro:
      "โปรเจกต์นี้เปรียบเทียบผลการเลือกตั้งสมาชิกสภากรุงเทพมหานครระหว่างปี 2022 ถึง 2026 ครบทั้ง 50 เขต โดยแปลงความเปลี่ยนแปลงเชิงการเมืองและระดับเขตให้เป็น visualization แบบโต้ตอบได้ ทั้งการเปรียบเทียบที่นั่งของแต่ละพรรค แผนที่เขต การเปลี่ยนแปลงแบบ Sankey ตารางที่ค้นหาได้ และกราฟการเคลื่อนไหวของคะแนน",
    points: [
      "เปรียบเทียบ 50 เขตของกรุงเทพฯ ระหว่างปี 2022 และ 2026",
      "แสดงการเปลี่ยนแปลงผู้ชนะในระดับเขตและการเคลื่อนย้ายของพรรค/กลุ่ม",
      "มีทั้ง Sankey, bar chart, grid map, dumbbell chart, matrix และตารางที่จัดเรียงได้",
      "สร้างด้วย Astro, TypeScript, vanilla DOM และ SVG โดยไม่พึ่ง framework ที่หนักในรันไทม์"
    ],
    stats: [
      {value: "50", label: "เขต"},
      {value: "65 → 69", label: "ที่นั่งที่เปรียบเทียบ"},
      {value: "27", label: "เปลี่ยนขั้ว"},
      {value: "32", label: "ผู้ชนะซ้ำ"}
    ],
    openWebsite: "เปิดเว็บไซต์",
    viewRepository: "ดู Repository"
  },

  synctune: {
    eyebrow: "03 · Real-time Collaboration",
    headingHtml:
      'ห้องฟังเพลงร่วมกันที่ขับเคลื่อนด้วย <span class="gradient-text">WebSocket</span>, WebRTC และ Redis',
    intro:
      "SyncTune คือแอปทดลองสำหรับการฟังเพลงร่วมกันแบบเรียลไทม์ ผู้ใช้สามารถสร้างห้อง เพิ่มวิดีโอ YouTube เข้าคิวที่ใช้ร่วมกัน แชทกับผู้อื่น โหวตการควบคุมการเล่น เล่นเสียงเอฟเฟกต์ และใช้เสียงพูดแบบ push-to-talk ฝั่ง frontend สร้างด้วย Svelte และ Vite ส่วน backend ใช้ Go, การกระจายข้อมูลผ่าน WebSocket และ Redis เป็น single source of truth",
    points: [
      "คิวเพลงร่วมกันแบบเรียลไทม์พร้อมการเล่นผ่าน YouTube",
      "ไม่ต้องมีบัญชี: ผู้ใช้เข้าร่วมด้วยชื่อและ room ID",
      "แชท ผู้ใช้ออนไลน์ ประวัติคิว sound pad หน้าต่างโหวต และเสียงพูดแบบ PTT",
      "backend จัดการสถานะหลายห้อง การกระจายข้อมูลผ่าน WebSocket การเก็บข้อมูลด้วย Redis และการทำ WebRTC signaling"
    ],
    openWebsite: "เปิดเว็บไซต์",
    frontendRepo: "Repo ฝั่ง Frontend",
    backendRepo: "Repo ฝั่ง Backend"
  },

  ai: {
    eyebrow: "แนวคิดในการสร้างงาน",
    headingHtml:
      'วิศวกรรมที่<span class="gradient-text">ขับเคลื่อนด้วย AI</span> และคำนึงถึงโปรดักต์',
    intro:
      "ผมใช้ AI เป็นตัวทวีพลังในการพัฒนา — ไม่ใช่แค่สร้างโค้ด แต่รวมถึงการสำรวจสถาปัตยกรรม ปรับ UX ให้ดีขึ้น ดีบักได้เร็วขึ้น และเปลี่ยนไอเดียคร่าวๆ ให้เป็นโปรดักต์ที่ส่งมอบได้จริง โปรเจกต์เหล่านี้สะท้อนกระบวนการทำงานที่ใช้ได้จริง: นิยามปัญหา ออกแบบอินเทอร์เฟซ สร้างระบบ และปรับปรุงจากการใช้งานจริง",
    appliesTo: "นำไปใช้กับ",
    philosophy: [
      {
        title: "การคิดเชิงโปรดักต์",
        caption: "จากไอเดียคลุมเครือสู่อินเทอร์เฟซที่ใช้งานได้",
        applies: "Portfolio · SyncTune"
      },
      {
        title: "ความเข้าใจข้อมูล",
        caption: "จากข้อมูลดิบสู่ข้อค้นพบเชิงภาพ",
        applies: "BKK Election"
      },
      {
        title: "การออกแบบระบบ",
        caption: "จาก UI ผู้ใช้คนเดียวสู่สถานะหลายผู้ใช้แบบเรียลไทม์",
        applies: "SyncTune backend"
      },
      {
        title: "พร้อมสำหรับระบบอัตโนมัติ",
        caption:
          "สร้างโดยคำนึงถึง static deployment, GitHub Actions และ workflow จัดการเนื้อหา",
        applies: "Landing page · Portfolio"
      }
    ]
  },

  stack: {
    eyebrow: "เทคโนโลยีที่ใช้",
    headingHtml:
      '<span class="gradient-text">เครื่องมือ</span>เบื้องหลังผลงาน',
    groups: [
      {label: "Frontend"},
      {label: "Backend & Real-time"},
      {label: "Data & Visualization"},
      {label: "Infra & Tools"}
    ]
  },

  contact: {
    eyebrow: "ติดต่อผม",
    headingHtml:
      'มีไอเดียที่คุ้มค่าแก่การ<span class="gradient-text">สร้าง</span>ไหม?',
    intro:
      "ผมยินดีพูดคุยเกี่ยวกับเว็บโปรดักต์ เครื่องมือด้านข้อมูล workflow อัตโนมัติ และระบบเรียลไทม์ — โดยเฉพาะโปรเจกต์ที่ AI ช่วยให้เดินจากไอเดียสู่การใช้งานจริงได้เร็วขึ้น",
    contactMe: "ติดต่อผม",
    github: "GitHub",
    linkedin: "LinkedIn",
    downloadResume: "ดาวน์โหลดเรซูเม่"
  },

  projectCard: {
    openWebsite: "เปิดเว็บไซต์"
  },

  projects: [
    {
      eyebrow: "เว็บไซต์ส่วนตัว",
      title: "Portfolio — Full Stack Developer Profile",
      shortTitle: "Portfolio",
      description:
        "พอร์ตโฟลิโอ Astro + Tailwind ที่เรียบสะอาด นำเสนอทักษะ ประสบการณ์ การศึกษา โปรเจกต์ที่คัดสรร เรซูเม่ และช่องทางติดต่อ",
      repoLabels: ["ดู Repository"]
    },
    {
      eyebrow: "Data Visualization",
      title: "BKK Election 65 → 69 Results Compare",
      shortTitle: "BKK Election",
      description:
        "visualization แบบโต้ตอบได้ที่เปรียบเทียบผู้ชนะการเลือกตั้งสภากรุงเทพฯ ครบทั้ง 50 เขต ระหว่างปี 2022 ถึง 2026",
      repoLabels: ["ดู Repository"]
    },
    {
      eyebrow: "แอปเรียลไทม์",
      title: "SyncTune — Listen Together in Sync",
      shortTitle: "SyncTune",
      description:
        "ห้องฟังเพลงร่วมกันแบบเรียลไทม์ที่เพื่อนๆ เข้าคิววิดีโอ YouTube แชท โหวต ใช้ sound pad และพูดคุยผ่าน push-to-talk",
      repoLabels: ["Repo ฝั่ง Frontend", "Repo ฝั่ง Backend"]
    }
  ],

  footer: {
    copyright: "© 2026 Chaichana Sudjairak. สร้างด้วย Astro & Tailwind."
  }
};
