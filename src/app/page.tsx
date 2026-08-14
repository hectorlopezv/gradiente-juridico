import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { PracticeAreas } from "@/components/practice-areas";
import { HowWeWork } from "@/components/how-we-work";
import { StatsSection } from "@/components/stats-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <PracticeAreas />
        <HowWeWork />
        <StatsSection />
      </main>
      <Footer />
    </>
  );
}
