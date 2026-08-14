import Image from "next/image";
import { DiamondDivider } from "@/components/diamond-divider";
import { missionStatements, workPrinciples } from "@/lib/data";

export function HowWeWork() {
  return (
    <section id="forma-de-trabajar" className="border-t border-border/60 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Metodología
          </p>
          <h2 className="mt-4 font-heading text-3xl text-brand sm:text-4xl">
            Nuestra forma de trabajar
          </h2>
          <DiamondDivider className="mt-8" />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="grid gap-8 sm:grid-cols-2">
            {workPrinciples.map((principle) => {
              const Icon = principle.icon;
              return (
                <div key={principle.number} className="group">
                  <div className="mb-4 flex size-14 items-center justify-center rounded-full border border-brand/30 text-brand transition-colors group-hover:border-brand group-hover:bg-brand/5">
                    <Icon className="size-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-base font-medium text-brand">
                    {principle.number}. {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="relative hidden lg:block">
            <div
              className="absolute -inset-4 bg-dot-pattern opacity-20"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden border border-border/60 bg-background p-2">
              <Image
                src="/brand-work.png"
                alt="Nuestra forma de trabajar - Gradiente Jurídico"
                width={600}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-20 max-w-3xl border border-brand/30 px-8 py-12 sm:px-12">
          <div
            className="absolute -left-1 top-1/2 size-2 -translate-y-1/2 rotate-45 bg-brand"
            aria-hidden="true"
          />
          <div
            className="absolute -right-1 top-1/2 size-2 -translate-y-1/2 rotate-45 bg-brand"
            aria-hidden="true"
          />
          <div className="space-y-4 text-center">
            {missionStatements.map((statement) => (
              <p
                key={statement}
                className="font-heading text-lg italic text-brand sm:text-xl"
              >
                {statement}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
