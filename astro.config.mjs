import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify/functions";

import react from "@astrojs/react";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [image(), sitemap(), tailwind(), react()],
  site: "https://johncwaters.com",
});
