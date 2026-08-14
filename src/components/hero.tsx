import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { DiamondDivider } from "@/components/diamond-divider";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-30"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 top-0 size-[500px] rounded-full border border-brand/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 border-l border-b border-brand/15"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Firma de servicios legales
          </p>
          <h1 className="font-heading text-4xl font-normal leading-tight text-brand text-balance sm:text-5xl lg:text-6xl">
            Propiedad intelectual y derecho de los negocios
          </h1>
          <div className="mt-6 h-1 w-16 bg-brand" />
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Soluciones legales para proteger, estructurar y fortalecer
            negocios.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#areas"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-brand px-8 hover:bg-brand/90"
              )}
            >
              Conoce nuestras áreas
              <ArrowRight className="ml-2 size-4" />
            </Link>
            <Link
              href="#contacto"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-brand/30 px-8 text-brand hover:bg-brand/5"
              )}
            >
              Agenda una consulta
            </Link>
          </div>
        </div>

        <div className="mt-20">
          <DiamondDivider />
          <p className="mt-8 text-center font-heading text-lg italic text-brand/80 sm:text-xl">
            Protegemos activos. Estructuramos negocios. Defendemos intereses.
          </p>
        </div>
      </div>
    </section>
  );
}
