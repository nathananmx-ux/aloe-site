import { differentials } from "@/data/home";

export function DifferentialsSection() {
  return (
    <section className="bg-paper py-20 md:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Diferenciais reais</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Por que condomínios escolhem a Aloe
          </h2>
          <p className="mt-5 text-lg leading-8 text-graphite/75">
            Uma administração pensada para condomínios que precisam de clareza,
            presença e organização no dia a dia.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-lg border border-moss/10 bg-porcelain p-5"
              >
                <Icon
                  aria-hidden="true"
                  className="mb-6 text-moss"
                  size={24}
                  strokeWidth={1.7}
                />
                <h3 className="text-base font-semibold leading-6 text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-graphite/70">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
