import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from "@astrojs/cloudflare";
import vercel from "@astrojs/vercel";

const adapter = import.meta.env.API_KEY === 'vercel' ? vercel() : cloudflare({ mode: 'directory' });

export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: true
  })],
  output: "server",
  adapter: adapter
});