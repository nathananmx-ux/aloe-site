import { services } from "@/data/home";

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-porcelain py-20 md:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">O que a Aloe entrega</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Gestão condominial com controle financeiro, respaldo técnico e
            comunicação clara.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="rounded-lg border border-moss/10 bg-white p-6 shadow-[0_12px_35px_rgba(25,33,29,0.05)]"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-md bg-moss/10 text-moss">
                  <Icon aria-hidden="true" size={23} strokeWidth={1.7} />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-graphite/70">
                  {service.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
