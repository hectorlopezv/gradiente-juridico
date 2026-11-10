import { NextResponse, type NextRequest } from "next/server";

const SKIP =
  /^\/(?:api|_next|favicon|images|logo-|og\.|apple-|icon|feed\.xml|rss)/;

const SPANISH_COUNTRIES = new Set([
  "AR",
  "BO",
  "CL",
  "CO",
  "CR",
  "CU",
  "DO",
  "EC",
  "ES",
  "GQ",
  "GT",
  "HN",
  "MX",
  "NI",
  "PA",
  "PE",
  "PR",
  "PY",
  "SV",
  "UY",
  "VE",
]);

const BOT =
  /googlebot|bingbot|slurp|duckduckbot|baiduspider|yandex|facebookexternalhit|twitterbot|linkedinbot|embedly|quora|pinterest|redditbot|applebot|semrush|ahrefs|mj12bot|dotbot/i;

const LOCALE_COOKIE = "gj-locale";
const LOCALE_MAX_AGE = 60 * 60 * 24 * 365;

function localeCookie(request: NextRequest) {
  const value = request.cookies.get(LOCALE_COOKIE)?.value;
  return value === "es" || value === "en" ? value : null;
}

function withLocaleCookie(response: NextResponse, locale: "es" | "en") {
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: LOCALE_MAX_AGE,
    sameSite: "lax",
  });
  return response;
}

function vercelCountry(request: NextRequest) {
  return (
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("x-vercel-ip-country".toUpperCase()) ||
    ""
  )
    .trim()
    .toUpperCase();
}

function preferredLang(acceptLanguage: string | null) {
  if (!acceptLanguage) return null;
  const parts = acceptLanguage.split(",").map((part) => {
    const [tag, ...params] = part.trim().split(";");
    const q = params.find((item) => item.trim().startsWith("q="));
    const quality = q ? Number(q.trim().slice(2)) : 1;
    const lang = tag.trim().toLowerCase().split("-")[0];
    return { lang, quality: Number.isFinite(quality) ? quality : 1 };
  });
  const es = parts.find((part) => part.lang === "es");
  const en = parts.find((part) => part.lang === "en");
  if (es && en) return es.quality >= en.quality ? "es" : "en";
  if (es) return "es";
  if (en) return "en";
  return null;
}

function prefersSpanish(request: NextRequest) {
  const country = vercelCountry(request);
  const lang = preferredLang(request.headers.get("accept-language"));
  if (country && SPANISH_COUNTRIES.has(country)) return true;
  if (lang === "es") return true;
  if (lang === "en") return false;
  if (country) return false;
  return true;
}

function isBot(request: NextRequest) {
  return BOT.test(request.headers.get("user-agent") || "");
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (SKIP.test(pathname) || pathname.includes(".")) {
    return NextResponse.next();
  }

  const isEs = pathname === "/es" || pathname.startsWith("/es/");
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const chosen = localeCookie(request);
  const bot = isBot(request);

  // /es is an explicit Spanish choice: persist it, then serve the unprefixed URL.
  if (isEs) {
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/es" ? "/" : pathname.slice(3) || "/";
    return withLocaleCookie(NextResponse.redirect(url), "es");
  }

  if (
    !isEn &&
    !bot &&
    request.method === "GET" &&
    (chosen === "en" || (!chosen && !prefersSpanish(request)))
  ) {
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? "/en" : `/en${pathname}`;
    return withLocaleCookie(NextResponse.redirect(url), "en");
  }

  const locale = isEn ? "en" : "es";
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);
  requestHeaders.set("x-pathname", pathname);

  if (!isEn) {
    const response = NextResponse.next({
      request: { headers: requestHeaders },
    });
    return chosen || bot ? response : withLocaleCookie(response, "es");
  }

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/en" ? "/" : pathname.slice(3) || "/";
  return withLocaleCookie(
    NextResponse.rewrite(url, {
      request: { headers: requestHeaders },
    }),
    "en"
  );
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};
