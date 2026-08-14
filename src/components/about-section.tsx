import Image from "next/image";
import { DiamondDivider } from "@/components/diamond-divider";

export function AboutSection() {
  return (
    <section id="nosotros" className="border-t border-border/60 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Sobre nosotros
            </p>
            <h2 className="mt-4 font-heading text-3xl text-brand sm:text-4xl">
              Una visión jurídica con enfoque empresarial
            </h2>
            <DiamondDivider className="my-8" />
            <div className="space-y-6 text-base leading-relaxed text-foreground/80">
              <p>
                <span className="font-heading font-semibold uppercase tracking-wide text-brand">
                  Gradiente Jurídico
                </span>{" "}
                es una firma de servicios legales enfocada en propiedad
                intelectual y derecho de los negocios.
              </p>
              <p>
                Acompañamos a empresas, emprendedores, creadores y titulares de
                activos intangibles en la protección de sus derechos, la
                estructuración de sus relaciones comerciales, la prevención de
                riesgos y la solución de controversias.
              </p>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-4 bg-dot-pattern opacity-20"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden border border-border/60 bg-background p-2">
              <Image
                src="/brand-hero.png"
                alt="Gradiente Jurídico - Propiedad intelectual y derecho de los negocios"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
