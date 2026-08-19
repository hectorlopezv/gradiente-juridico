import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Opportunity } from "@/components/opportunity";
import { Trending } from "@/components/trending";
import { StatsBand } from "@/components/stats-band";
import { FutureFirm } from "@/components/future-firm";
import { Footer } from "@/components/footer";

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
