# sudjairakc.github.io

Project hub / landing page for **Chaichana Sudjairak (James)** — an AI-focused full stack developer. A single-page, Apple-style glassmorphism showcase of three flagship projects: a developer portfolio, a Bangkok election data visualization, and SyncTune (a real-time collaborative music app).

## Stack

- [Astro 5](https://astro.build) — static site generation
- [Tailwind CSS v4](https://tailwindcss.com) — via `@tailwindcss/vite`
- TypeScript
- Deployed to **GitHub Pages** at the repo root (`https://sudjairakc.github.io`)

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output → dist/
npm run preview  # preview the production build
```

## Structure

```
src/
├─ layouts/Layout.astro     # <head>, SEO/OG, JSON-LD (AEO), theme + scroll-reveal scripts
├─ styles/global.css        # design tokens + glass/pill/button component classes
├─ data/
│  ├─ site.ts               # identity, socials, tech groups, philosophy
│  └─ projects.ts           # the three showcased projects
├─ components/              # Navbar, Hero, project cards, deep-dive showcases, etc.
└─ pages/index.astro        # composes the page
public/
├─ favicon.svg
├─ robots.txt · sitemap.xml # SEO
└─ llms.txt                 # AEO (answer-engine summary)
```

## SEO / AEO

- Per-page meta, Open Graph, Twitter cards, canonical URL
- `schema.org` JSON-LD: `Person`, `WebSite`, and an `ItemList` of projects
- `robots.txt` explicitly allows major AI crawlers; `sitemap.xml`
- `llms.txt` — a plain-text summary for answer engines

## Deploy

Push to `main` → GitHub Actions builds with Astro and deploys to GitHub Pages
(`.github/workflows/deploy.yml`). No `base` path is set because this is a
`<user>.github.io` root site.
