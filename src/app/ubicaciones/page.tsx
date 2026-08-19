import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ChatCta } from "@/components/chat-cta";
import { CtaLink } from "@/components/cta-link";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/data";
import { offices } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Ubicaciones | Gradiente Jurídico",
  description:
    "Sede en Colombia. Atención presencial con cita y online, en propiedad intelectual.",
};

export default function UbicacionesPage() {
  const office = offices[0];

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <section className="relative min-h-[70svh] overflow-hidden bg-black pt-24 text-white">
          <Image
            src={office.image}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-[1400px] flex-col justify-end px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
            <p className="animate-fade-up text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70">
              {office.region} · {office.kicker}
            </p>
            <h1 className="animate-fade-up mt-4 font-heading text-5xl font-bold uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
              {office.headline}
            </h1>
            <p className="animate-fade-up mt-6 max-w-2xl text-lg text-white/80">
              {office.intro}
            </p>
            <div className="animate-fade-up mt-8">
              <ChatCta>Hablemos</ChatCta>
            </div>
          </div>
        </section>

        <section id="contenido" className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[800px] px-4 sm:px-6">
            <h2 className="font-heading text-3xl font-semibold uppercase tracking-wide">
              Cómo operamos
            </h2>
            {office.overview.map((paragraph) => (
              <p
                key={paragraph.slice(0, 28)}
                className="mt-6 text-lg leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="border-t border-black/10 bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Atención
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold uppercase tracking-wide sm:text-4xl">
              Presencial y online
            </h2>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {office.modes.map((mode, index) => (
                <Reveal key={mode.title} delay={index * 80}>
                  <p className="text-[13px] font-semibold tracking-[0.14em] text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-heading text-2xl font-semibold uppercase tracking-wide">
                    {mode.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                    {mode.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f6f6f6] py-16 lg:py-24">
          <div className="mx-auto grid max-w-[1400px] gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
            {office.coverage.map((item) => (
              <div key={item.title}>
                <h2 className="font-heading text-2xl font-semibold uppercase tracking-wide sm:text-3xl">
                  {item.title}
                </h2>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Desde esta sede
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold uppercase tracking-wide">
              Áreas de práctica
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/practica/${service.slug}`}
                    className="block border-t border-black/10 pt-4 text-[17px] hover:text-primary"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
            <CtaLink href="/practica" variant="red" className="mt-10">
              Ver la práctica
            </CtaLink>
          </div>
        </section>

        <section className="bg-primary">
          <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:px-10">
            <p className="max-w-2xl font-heading text-2xl font-semibold uppercase tracking-wide text-white sm:text-3xl">
              Cuéntanos el activo. Coordinamos la reunión.
            </p>
            <ChatCta className="shrink-0">Hablemos</ChatCta>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
