# sudjairakc.github.io

Personal site of **Chaichana Sudjairak (James)** — Senior Full-Stack Developer. A single-page, editorial "printed portfolio" layout in English (`/`) and Thai (`/th/`): cover, profile (education · experience · skills), index, work at FIN Insurance Broker, a Bangkok election data visualization, and SyncTune (a real-time collaborative music app).

This site replaces the old `sudjairakc.github.io/portfolio/`; that repo now only serves redirects to here.

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
├─ layouts/Layout.astro     # <head>, SEO/OG, JSON-LD (AEO), scroll-reveal script
├─ styles/global.css        # design tokens (paper / ink / muted) + sheet, meta, wordmark classes
├─ data/
│  ├─ site.ts               # identity, photo, socials
│  ├─ i18n.ts               # locale resolver
│  └─ content/{en,th}.ts    # ALL copy lives here (types.ts = shape; en.ts is authoritative)
├─ components/              # Cover, Profile, Index, Work, Project, Contact, SheetMeta, SectionHead
└─ pages/index.astro, th/index.astro
public/
├─ images/profile.webp · og-image.png
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
