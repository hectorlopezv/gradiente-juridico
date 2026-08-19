import Image from "next/image";
import { ChatCta } from "@/components/chat-cta";
import { Reveal } from "@/components/reveal";
import { images } from "@/lib/data";

export function Opportunity() {
  return (
    <section className="relative min-h-[520px] overflow-hidden bg-black text-white">
      <Image
        src={images.opportunity}
        alt=""
        fill
        className="object-cover transition-transform duration-[8000ms] hover:scale-105"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 mx-auto flex min-h-[420px] max-w-[1400px] items-center px-4 py-16 sm:px-6 sm:py-24 lg:min-h-[520px] lg:px-10">
        <Reveal className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight sm:text-5xl">
            Piensa innovación.
            <br />
            Piensa Gradiente Jurídico.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Acompañamos a empresas, creadores y emprendedores en cada etapa:
            proteger, estructurar y defender lo que diferencia al negocio.
          </p>
          <ChatCta className="mt-8">Hablemos</ChatCta>
        </Reveal>
      </div>
    </section>
  );
}
