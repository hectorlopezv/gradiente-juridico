import { Check, Shield } from "lucide-react";
import { brand, services, whyChooseUs } from "@/lib/data";

export function IpSection() {
  return (
    <section className="bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div id="servicios">
            <h2 className="font-heading text-2xl text-white sm:text-3xl">
              Nuestros Servicios
            </h2>
            <div className="mt-2 h-0.5 w-12 bg-brand-light" />
            <ul className="mt-10 space-y-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <li key={service.title} className="flex gap-5">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/30 text-white">
                      <Icon className="size-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-white">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/70">
                        {service.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div id="por-que-elegirnos">
            <h2 className="font-heading text-2xl text-brand-light sm:text-3xl">
              ¿Por Qué Elegirnos?
            </h2>
            <div className="mt-2 h-0.5 w-12 bg-brand-light" />
            <ul className="mt-10 space-y-5">
              {whyChooseUs.map((item) => (
                <li key={item.number} className="flex items-start gap-3">
                  <Check
                    className="mt-0.5 size-5 shrink-0 text-brand-light"
                    strokeWidth={2}
                  />
                  <span className="text-base leading-relaxed text-white/90">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-sm bg-mission-gradient px-6 py-8 sm:px-12 sm:py-10">
          <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-6">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-white/40 bg-white/10">
              <Shield className="size-7 text-white" strokeWidth={1.5} />
            </div>
            <p className="font-heading text-xl tracking-[0.15em] text-white sm:text-2xl">
              {brand.missionBanner}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
