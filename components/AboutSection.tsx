import { partners } from "@/data/home";

export function AboutSection() {
  return (
    <section id="quem-somos" className="bg-porcelain py-20 md:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">Quem Somos</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
              Experiência técnica, operacional e financeira aplicada à gestão
              condominial.
            </h2>
          </div>
          <p className="text-lg leading-8 text-graphite/75">
            A Aloe Condomínios une experiência técnica, gestão operacional e
            visão financeira para oferecer uma administração mais próxima,
            organizada e transparente. Nosso trabalho combina tecnologia,
            atendimento dedicado e processos claros para apoiar síndicos,
            moradores e conselhos na rotina do condomínio.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="rounded-lg border border-moss/10 bg-white p-7 shadow-[0_12px_35px_rgba(25,33,29,0.05)]"
            >
              <span className="rounded-md bg-bronze/10 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.08em] text-bronze">
                {partner.role}
              </span>
              <h3 className="mt-5 font-serif text-3xl font-semibold text-ink">
                {partner.name}
              </h3>
              <p className="mt-4 text-sm leading-7 text-graphite/70">
                {partner.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
