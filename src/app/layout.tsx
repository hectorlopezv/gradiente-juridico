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
  title: "Gradiente Jurídico | Propiedad intelectual y derecho de los negocios",
  description:
    "Soluciones legales para proteger, estructurar y fortalecer negocios. Firma especializada en propiedad intelectual y derecho de los negocios.",
  keywords: [
    "propiedad intelectual",
    "derecho de los negocios",
    "marcas",
    "contratos",
    "abogados",
    "México",
  ],
  openGraph: {
    title: "Gradiente Jurídico",
    description:
      "Soluciones legales para proteger, estructurar y fortalecer negocios.",
    type: "website",
    locale: "es_MX",
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
