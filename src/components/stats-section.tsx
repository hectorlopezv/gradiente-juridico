import { stats } from "@/lib/data";

export function StatsSection() {
  return (
    <section className="bg-brand py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-4xl font-normal sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-snug text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
