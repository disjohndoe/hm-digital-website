// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

// GitHub Pages has no redirects, so the conventional /sitemap.xml URL (which
// otherwise 404s, report item 7.3.1) gets a copy of the generated index.
function sitemapXmlAlias() {
  return {
    name: 'sitemap-xml-alias',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const distDir = fileURLToPath(dir);
        writeFileSync(join(distDir, 'sitemap.xml'), readFileSync(join(distDir, 'sitemap-index.xml')));
      }
    }
  };
}

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
      filter: (page) =>
        !page.includes('/uspjeh') && !page.includes('/en/success') &&
        !page.includes('/za-vas') && !page.includes('/en/for-you') &&
        !page.includes('/demo/') &&
        !page.includes('/medical/pravila-privatnosti') &&
        !page.includes('/medical/uvjeti-koristenja') &&
        !page.includes('racunovodstveni-program') &&
        !page.includes('accounting-software'),
      serialize(item) {
        // Stamp every URL with the build time so Google has a crawl-prioritization signal
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
    sitemapXmlAlias()
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
