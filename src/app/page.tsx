import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ValueEquation } from "@/components/value-equation";
import { IpSection } from "@/components/ip-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueEquation />
        <IpSection />
      </main>
      <Footer />
    </>
  );
}
