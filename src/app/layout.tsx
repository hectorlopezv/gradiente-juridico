import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gradiente Jurídico | Propiedad Intelectual",
  description:
    "Especialistas en Propiedad Intelectual. Protegemos tus ideas. Potenciamos tu futuro. Buenos Aires, Argentina.",
  keywords: [
    "propiedad intelectual",
    "marcas",
    "patentes",
    "diseños industriales",
    "derechos de autor",
    "abogados",
    "Buenos Aires",
    "Argentina",
  ],
  openGraph: {
    title: "Gradiente Jurídico",
    description:
      "Especialistas en Propiedad Intelectual. Protegemos tus ideas. Potenciamos tu futuro.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
