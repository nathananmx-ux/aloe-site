import { partners } from "@/data/home";

export function AboutSection() {
  return (
    <section id="sobre" className="bg-porcelain py-20 md:py-24">
      <div className="section-shell">
        <div className="max-w-4xl">
          <p className="eyebrow">Sobre a empresa</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Experiência técnica, operacional e financeira aplicada à gestão
            condominial.
          </h2>
          <p className="mt-6 text-lg leading-8 text-graphite/75">
            A Aloe combina visão técnica, gestão financeira e rotina operacional
            para entregar uma administração mais clara, próxima e previsível
            para condomínios. Nossa atuação une acompanhamento comercial,
            operação condominial, backoffice estruturado e suporte ao síndico
            para transformar a gestão do condomínio em uma rotina mais
            organizada e segura.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=82"
              alt="Sala de reunião corporativa preparada para análise de gestão"
              className="h-full min-h-72 w-full object-cover"
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {partners.map((partner) => (
              <article
                key={partner.name}
                className="rounded-lg border border-moss/10 bg-white p-6 shadow-[0_12px_35px_rgba(25,33,29,0.05)]"
              >
                <p className="text-base font-extrabold text-bronze">{partner.role}</p>
                <h3 className="mt-2 font-serif text-3xl font-semibold text-ink">
                  {partner.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-graphite/70">
                  {partner.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
