import type { Metadata } from "next";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@/components/analytics";
import { CookieBanner } from "@/components/cookie-banner";
import { SupportChatbot } from "@/components/support-chatbot";
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

export const metadata: Metadata = {
  title: "Gradiente Jurídico | Propiedad Intelectual",
  description:
    "Especialistas en Propiedad Intelectual. Protegemos tus ideas. Potenciamos tu futuro.",
  alternates: {
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
        {children}
        <SupportChatbot />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
