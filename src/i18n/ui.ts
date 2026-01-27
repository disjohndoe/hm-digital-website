// Locale type and configuration
export type Locale = 'hr' | 'en';
export const locales = ['hr', 'en'] as const;
export const defaultLocale: Locale = 'hr';

// Canonical route map (HR routes as keys)
export const routes = {
  "/": { hr: "/", en: "/en/" },
  "/o-nama": { hr: "/o-nama", en: "/en/about" },
  "/usluge": { hr: "/usluge", en: "/en/services" },
  "/projekti": { hr: "/projekti", en: "/en/projects" },
  "/kontakt": { hr: "/kontakt", en: "/en/contact" },
  "/cjenik": { hr: "/cjenik", en: "/en/pricing" },
  "/industrije": { hr: "/industrije", en: "/en/industries" },
  "/besplatna-procjena": { hr: "/besplatna-procjena", en: "/en/free-assessment" },
} as const;

export type RouteKey = keyof typeof routes;

// Normalize pathname: consistent trailing slash handling
export function normalizePathname(pathname: string): string {
  if (!pathname) return "/";
  if (pathname === "/en") return "/en/";
  if (pathname === "/en/") return "/en/";
  if (pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

// Detect locale from pathname
export function getLocaleFromPath(path: string): Locale {
  const p = normalizePathname(path);
  return p === "/en/" || p.startsWith("/en/") ? "en" : "hr";
}

// Get route key for current pathname
export function getRouteKeyFromPathname(pathname: string): RouteKey {
  const p = normalizePathname(pathname);

  // If EN: find which key maps to this EN path
  if (p === "/en/" || p.startsWith("/en/")) {
    const match = (Object.keys(routes) as RouteKey[]).find(
      (k) => normalizePathname(routes[k].en) === p
    );
    return match ?? "/";
  }

  // HR: direct match
  const match = (Object.keys(routes) as RouteKey[]).find(
    (k) => normalizePathname(routes[k].hr) === p
  );
  return match ?? "/";
}

// Convert current URL to target locale (preserves query + hash)
export function toLocaleUrl(current: URL, target: Locale): string {
  const key = getRouteKeyFromPathname(current.pathname);
  const targetPath = routes[key][target];
  return `${targetPath}${current.search}${current.hash}`;
}

// Keep existing function for backward compatibility
export function getPathForLocale(path: string, locale: Locale): string {
  const key = getRouteKeyFromPathname(path);
  return routes[key][locale];
}

// Keep other existing functions
export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'hr' ? 'en' : 'hr';
}

export function getDefaultLocale(): Locale {
  return 'hr';
}

// Import and export translations
import { hr } from './hr';
import { en } from './en';

export type Translations = typeof hr;

export const translations = { hr, en };

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}
