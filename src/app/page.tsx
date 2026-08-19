import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Opportunity } from "@/components/opportunity";
import { Trending } from "@/components/trending";
import { StatsBand } from "@/components/stats-band";
import { FutureFirm } from "@/components/future-firm";
import { Footer } from "@/components/footer";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Gradiente Jurídico | Propiedad Intelectual",
  description:
    "Firma boutique de propiedad intelectual en Colombia. Marcas, patentes, derechos de autor y estrategia para proteger y potenciar tus ideas.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <Opportunity />
        <Trending />
        <StatsBand />
        <FutureFirm />
      </main>
      <Footer />
    </>
  );
}
