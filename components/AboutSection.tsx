import { partners } from "@/data/home";

export function AboutSection() {
  return (
    <section id="quem-somos" className="bg-porcelain py-20 md:py-24">
      <div className="section-shell">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Quem Somos</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
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

        <div className="mt-12 grid gap-8 border-t border-moss/20 pt-8 md:grid-cols-2">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="grid min-w-0 items-start gap-6 sm:grid-cols-[128px_minmax(0,1fr)]"
            >
              {partner.image ? (
                <div className="mx-auto aspect-[4/5] w-36 overflow-hidden bg-paper sm:mx-0 sm:w-32">
                  <img
                    src={partner.image}
                    alt={`Retrato de ${partner.name}`}
                    className={`h-full w-full object-cover ${partner.imageClassName}`}
                  />
                </div>
              ) : (
                <div
                  aria-hidden="true"
                  className="flex aspect-[4/5] w-28 items-center justify-center rounded-md bg-moss font-serif text-4xl font-semibold text-porcelain"
                >
                  {partner.name.split(" ").map((part) => part[0]).join("")}
                </div>
              )}
              <div className="min-w-0 text-center sm:text-left">
                <span className="text-xs font-bold uppercase text-bronze">
                  {partner.role}
                </span>
                <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight text-ink lg:text-3xl">
                  {partner.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-graphite/70">
                  {partner.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
