import Image from "next/image";
import Link from "next/link";
import { CtaLink } from "@/components/cta-link";
import { images, newsItems } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="relative min-h-[65svh] lg:min-h-[93vh]">
        <Image
          src={images.hero}
          alt=""
          fill
          priority
          className="ken-burns object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto flex min-h-[65svh] max-w-[1400px] flex-col justify-end px-4 pb-10 pt-28 sm:px-6 lg:min-h-[93vh] lg:px-10 lg:pb-40 lg:pt-32">
          <p className="animate-fade-up text-sm text-white/85">
            Especialistas en propiedad intelectual
          </p>
          <h1
            className="animate-fade-up mt-3 max-w-3xl font-heading text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "140ms" }}
          >
            Protegemos
            <br />
            tus ideas
          </h1>
          <div
            className="animate-fade-up mt-6"
            style={{ animationDelay: "280ms" }}
          >
            <CtaLink href="/practica">Conocer más</CtaLink>
          </div>
        </div>
      </div>

      <div
        id="novedades"
        className="relative z-20 grid lg:absolute lg:inset-x-0 lg:bottom-0 lg:grid-cols-[200px_1fr]"
      >
        <Link
          href="/novedades"
          className="flex items-center bg-black px-4 py-3 sm:px-6"
        >
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white">
            Novedades
          </p>
        </Link>
        <div className="flex snap-x snap-mandatory overflow-x-auto bg-primary md:grid md:grid-cols-3 md:overflow-visible">
          {newsItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="news-item min-w-[80%] snap-start border-white/10 px-5 py-4 hover:bg-black/20 md:min-w-0 md:border-l"
            >
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/70">
                {item.kicker}
              </p>
              <p className="mt-2 font-heading text-base font-semibold uppercase leading-snug tracking-wide text-white sm:text-lg">
                {item.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
