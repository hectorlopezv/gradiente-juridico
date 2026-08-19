import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { brand } from "@/lib/data";
import { experts } from "@/lib/team";

export const metadata: Metadata = {
  title: "Contacto | Gradiente Jurídico",
  description:
    "Contactos de Gradiente Jurídico en Colombia para asuntos de propiedad intelectual.",
};

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <PageHero
          kicker="Contacto"
          title="Contacto"
          description="El equipo que recibe tu asunto en Colombia. Correo para el primer mensaje; el chat si quieres orientación inmediata."
        />
        <section id="contenido" className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Colombia
            </p>
            <ul className="mt-12 grid gap-x-10 gap-y-16 sm:grid-cols-2">
              {experts.map((person) => (
                <li key={person.slug}>
                  <Link href={`/equipo/${person.slug}`} className="group block">
                    <div className="relative aspect-[3/4] max-w-[320px] overflow-hidden">
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(min-width: 640px) 40vw, 80vw"
                      />
                    </div>
                    <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {person.location}
                    </p>
                    <h2 className="mt-2 font-heading text-3xl font-semibold uppercase tracking-wide group-hover:text-primary sm:text-4xl">
                      {person.name}
                    </h2>
                    <p className="mt-2 text-[15px] text-muted-foreground">
                      {person.role}
                    </p>
                    <p className="mt-1 text-[15px] text-muted-foreground">
                      {person.practice}
                    </p>
                  </Link>
                  <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px]">
                    <span>{brand.phone}</span>
                    <Link
                      href={`mailto:${person.email}?subject=${encodeURIComponent(`Consulta — ${person.name}`)}`}
                      className="hover:text-primary hover:underline"
                    >
                      Correo
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
