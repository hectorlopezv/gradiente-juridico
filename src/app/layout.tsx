import type { Metadata } from "next";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@/components/analytics";
import { CookieBanner } from "@/components/cookie-banner";
import { SiteJsonLd } from "@/components/site-json-ld";
import { SupportChatbot } from "@/components/support-chatbot";
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
  "Firma boutique de propiedad intelectual en Colombia. Marcas, patentes, derechos de autor y estrategia para proteger y potenciar tus ideas.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  ...pageMeta({
    title: `${SITE_NAME} | Propiedad Intelectual`,
    description: homeDescription,
    path: "/",
  }),
  keywords: [
    "propiedad intelectual",
    "marcas Colombia",
    "patentes",
    "derechos de autor",
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
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${sourceSans.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <SiteJsonLd />
        {children}
        <SupportChatbot />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
