import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from "@astrojs/cloudflare";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://ifornite.com',
  trailingSlash: 'never',
  build: {
    assets: '_assets',
  },
  integrations: [tailwind({
    applyBaseStyles: true
  }), preact()],
  output: "server",
  adapter: cloudflare({
    mode: "directory"
  }),
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});