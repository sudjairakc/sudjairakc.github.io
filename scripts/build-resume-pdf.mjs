// Prints dist/resume/index.html to dist/resume/Chaichana-Sudjairak-Resume.pdf.
// Runs after `astro build`. Needs a local Chrome: set CHROME_PATH, or it tries
// the usual macOS / Linux locations (GitHub's ubuntu runners ship google-chrome).
import { createServer } from "node:http";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import puppeteer from "puppeteer-core";

const DIST = new URL("../dist/", import.meta.url).pathname;
const OUT = join(DIST, "resume", "Chaichana-Sudjairak-Resume.pdf");

const chrome = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium-browser",
  "/usr/bin/chromium",
].find((p) => p && existsSync(p));

if (!chrome) {
  const msg = "build-resume-pdf: no Chrome found (set CHROME_PATH).";
  if (process.env.CI) {
    console.error(msg);
    process.exit(1);
  }
  console.warn(`${msg} Skipping the PDF locally.`);
  process.exit(0);
}

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
};

// Minimal static server so absolute asset paths (/_astro/…) resolve.
const server = createServer(async (req, res) => {
  let path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname));
  if (path.endsWith("/")) path += "index.html";
  try {
    const body = await readFile(join(DIST, path));
    res.writeHead(200, { "content-type": types[extname(path)] ?? "application/octet-stream" });
    res.end(body);
  } catch {
    res.writeHead(404).end();
  }
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const { port } = server.address();

const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: true,
  args: process.env.CI ? ["--no-sandbox"] : [],
});
try {
  const page = await browser.newPage();
  await page.goto(`http://127.0.0.1:${port}/resume/`, { waitUntil: "networkidle0" });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: OUT, format: "A4", printBackground: true, preferCSSPageSize: true });
  console.log(`build-resume-pdf: wrote ${OUT.replace(DIST, "dist/")}`);
} finally {
  await browser.close();
  server.close();
}
