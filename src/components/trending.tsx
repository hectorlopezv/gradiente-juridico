import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { trending } from "@/lib/data";

export function Trending() {
  return (
    <section id="insight" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Contenido destacado
          </p>
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {trending.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <Link href={item.href} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <h3 className="mt-5 font-heading text-2xl font-semibold uppercase tracking-wide group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <span className="cta-link cta-link-red mt-4">Más información</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
