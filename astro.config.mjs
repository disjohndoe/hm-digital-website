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
      filter: (page) => !page.includes('/uspjeh') && !page.includes('/en/success'),
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
