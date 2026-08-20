import type { Metadata } from "next";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import { headers } from "next/headers";
import { Analytics } from "@/components/analytics";
import { CookieBanner } from "@/components/cookie-banner";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SiteJsonLd } from "@/components/site-json-ld";
import { SupportChatbot } from "@/components/support-chatbot";
import { listInsights } from "@/lib/insights";
import { getLocale } from "@/lib/locale-server";
import { pageMeta, SITE_NAME } from "@/lib/seo";
import { siteUrl } from "@/lib/rss";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const homeDescription =
  "Firma boutique de propiedad intelectual y derecho empresarial en Colombia. Protegemos activos, estructuramos negocios y respaldamos decisiones clave.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  ...pageMeta({
    title: `${SITE_NAME} | Empresa y propiedad intelectual`,
    description: homeDescription,
    path: "/",
  }),
  keywords: [
    "propiedad intelectual",
    "derecho empresarial",
    "marcas Colombia",
    "patentes",
    "derechos de autor",
    "sociedades",
    "contratos comerciales",
    "SIC",
    "Gradiente Jurídico",
  ],
  applicationName: SITE_NAME,
  category: "legal",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: siteUrl(),
    types: {
      "application/rss+xml": "/rss-landing/insight/all",
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const pathname = (await headers()).get("x-pathname") || "";
  const isAdmin =
    pathname.startsWith("/admin");
  const locale = await getLocale();
  const insights = isAdmin
    ? []
    : listInsights(locale).slice(0, 8).map((item) => ({
        slug: item.slug,
        title: item.title,
        kicker: item.kicker,
      }));

  return (
    <html
      lang={locale}
      className={`${sourceSans.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {isAdmin ? (
          children
        ) : (
          <>
            <SiteJsonLd />
            <Header locale={locale} insights={insights} />
            {children}
            <Footer locale={locale} />
            <SupportChatbot locale={locale} />
            <CookieBanner locale={locale} />
            <Analytics />
          </>
        )}
      </body>
    </html>
  );
}
