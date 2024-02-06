import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://ifornite.com',
  integrations: [tailwind({
    applyBaseStyles: true
  })],
  output: "server",
  adapter: cloudflare({ mode: "directory" }),
  i18n: {
    defaultLocale: "en",
    locales: ["en","es"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});