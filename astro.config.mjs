// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://yulibet210106.github.io",
  base:"/PORTAFOLIO/",
  vite: {
    plugins: [tailwindcss()],
  },
});
