import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { ChatCta } from "@/components/chat-cta";
import { CtaLink } from "@/components/cta-link";
import { brand } from "@/lib/data";
import { experts } from "@/lib/team";

export const metadata: Metadata = {
  title: "Prensa | Gradiente Jurídico",
  description:
    "Contactos de prensa de Gradiente Jurídico para entrevistas y consultas de medios sobre propiedad intelectual.",
};

const pressContacts = experts.slice(0, 2);

export default function PrensaPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <PageHero
          kicker="Prensa"
          title="Contactos de medios"
          description="Para entrevistas, declaraciones y consultas de periodistas sobre propiedad intelectual en Colombia. Los casos de clientes se comentan solo de forma anonimizada y con autorización."
        />
        <section id="contenido" className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Colombia
            </p>
            <ul className="mt-10 grid gap-12 sm:grid-cols-2">
              {pressContacts.map((person) => (
                <li key={person.slug}>
                  <div className="relative aspect-[3/4] max-w-xs overflow-hidden">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover"
                      sizes="(min-width: 640px) 40vw, 80vw"
                    />
                  </div>
                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {person.location}
                  </p>
                  <h2 className="mt-2 font-heading text-3xl font-semibold uppercase tracking-wide">
                    {person.name}
                  </h2>
                  <p className="mt-1 text-[15px] text-muted-foreground">
                    {person.role} · {person.practice}
                  </p>
                  <div className="mt-5 flex flex-col items-start gap-3 text-[15px]">
                    <Link
                      href={`mailto:${person.email}?subject=${encodeURIComponent("Consulta de prensa — Gradiente Jurídico")}`}
                      className="hover:text-primary"
                    >
                      {person.email}
                    </Link>
                    <Link
                      href={brand.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      {brand.phone}
                    </Link>
                    <CtaLink href={`/equipo/${person.slug}`} variant="red">
                      Ver perfil
                    </CtaLink>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-16 max-w-2xl border-t border-black/10 pt-10">
              <h2 className="font-heading text-2xl font-semibold uppercase tracking-wide">
                Qué cubrimos
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                Marcas, patentes, software, diseños y estrategia de activos
                intangibles. Para un comentario o una entrevista, escriba con el
                medio, el plazo y el ángulo. Si es un asunto de cliente, use
                contacto general —no es el canal de prensa.
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                <ChatCta variant="red">Hablemos</ChatCta>
                <CtaLink href="/insight" variant="dark">
                  Ver insight
                </CtaLink>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
