import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { DiamondDivider } from "@/components/diamond-divider";
import { buttonVariants } from "@/components/ui/button";
import { brand } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <Logo size="lg" className="mx-auto lg:mx-0" />
            <DiamondDivider className="mx-auto mt-8 max-w-md lg:mx-0" />
            <p className="mt-8 font-heading text-xl text-brand sm:text-2xl">
              {brand.tagline}
            </p>
            <p className="mt-2 text-lg font-medium text-brand-light sm:text-xl">
              {brand.taglineHighlight}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="#servicios"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-brand px-8 hover:bg-brand/90"
                )}
              >
                Nuestros servicios
                <ArrowRight className="ml-2 size-4" />
              </Link>
              <Link
                href="#contacto"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-brand/30 px-8 text-brand hover:bg-brand/5"
                )}
              >
                Contáctanos
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="overflow-hidden rounded-sm border border-border/60 bg-white shadow-lg">
              <Image
                src="/brand-flyer.png"
                alt="Gradiente Jurídico - Especialistas en Propiedad Intelectual"
                width={800}
                height={500}
                className="h-auto w-full object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
