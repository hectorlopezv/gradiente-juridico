export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "es" || value === "en";
}

export function localeFromPathname(pathname: string | null | undefined): Locale {
  const path = pathname || "/";
  if (path === "/en" || path.startsWith("/en/")) return "en";
  return "es";
}

export function prefixHref(href: string, locale: Locale) {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  if (locale === "es") return href;
  if (href === "/") return "/en";
  if (href.startsWith("/en/") || href === "/en") return href;
  return `/en${href}`;
}

export function stripLocalePrefix(pathname: string) {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3) || "/";
  return pathname;
}
