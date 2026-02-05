// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://hmdigital.hr',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      entryLimit: 10000,
    })
  ],
  i18n: {
    defaultLocale: 'hr',
    locales: ['hr', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  build: {
    format: 'directory'
  }
});
