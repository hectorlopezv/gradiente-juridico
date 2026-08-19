import { CtaLink } from "@/components/cta-link";

export function PageHero({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-black pt-28 text-white lg:pt-32">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -right-24 top-0 size-[420px] rounded-full border border-white/10" />
      </div>
      <div className="relative mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <p className="animate-fade-up text-[12px] font-semibold uppercase tracking-[0.18em] text-white/60">
          {kicker}
        </p>
        <h1
          className="animate-fade-up mt-4 max-w-4xl font-heading text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl"
          style={{ animationDelay: "120ms" }}
        >
          {title}
        </h1>
        <p
          className="animate-fade-up mt-6 max-w-2xl text-lg text-white/75"
          style={{ animationDelay: "220ms" }}
        >
          {description}
        </p>
        <div className="animate-fade-up mt-8" style={{ animationDelay: "320ms" }}>
          <CtaLink href="#contenido">Explorar</CtaLink>
        </div>
      </div>
    </section>
  );
}
