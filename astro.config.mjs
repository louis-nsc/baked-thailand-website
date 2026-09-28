import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// Custom URL redirects (old-slug -> new-slug preservation, legacy WordPress
// URLs) live in vercel.json, not here. Astro's own `redirects` config,
// combined with trailingSlash:'always', compiles into a broken ordering in
// the Vercel Build Output API (the framework's trailing-slash normalizer
// route ends up ahead of custom redirects, so any bare incoming URL never
// reaches them) — confirmed via direct testing against the live deployment.
// vercel.json's native `redirects` array is a documented, first-class Vercel
// Project Configuration feature guaranteed to be evaluated before
// framework-generated routes, so all 30 custom redirects live there instead.
export default defineConfig({
  site: 'https://bakedthailand.com',
  trailingSlash: 'always',
  adapter: vercel(),
  integrations: [react(), sitemap()],
});
