import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Root user site → deploys to https://sudjairakc.github.io
// No `base` needed for a <user>.github.io repo.
export default defineConfig({
  site: "https://sudjairakc.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
});
