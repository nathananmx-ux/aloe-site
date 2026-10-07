import Image from "next/image";
import { partners } from "@/data/home";

export function AboutSection() {
  const photographedPartner = partners[0];

  return (
    <section id="quem-somos" className="bg-porcelain">
      <div className="section-shell py-20 md:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[0.6fr_0.4fr] lg:gap-14">
          <div>
            <p className="eyebrow">Quem Somos</p>
            <h2 className="mt-4 max-w-[44rem] font-serif text-3xl font-semibold leading-[1.02] text-ink sm:text-4xl md:text-[2.5rem]">
              <span className="lg:block">Experiência técnica,</span>{" "}
              <span className="lg:block">operacional e financeira</span>{" "}
              <span className="lg:block">aplicada à gestão condominial.</span>
            </h2>
          </div>
          <div className="border-t border-moss/25 pt-5 lg:mt-9">
            <p className="max-w-[32rem] text-base leading-8 text-graphite/75">
              A Aloe Condomínios une experiência técnica, gestão operacional e visão financeira para oferecer uma administração mais próxima, organizada e transparente.
            </p>
            <p className="mt-4 max-w-[32rem] text-base leading-8 text-graphite/75">
              Tecnologia, atendimento dedicado e processos claros apoiam síndicos, conselhos e moradores na rotina do condomínio.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-deep py-20 text-white md:py-24">
        <div className="section-shell">
          <div className="grid gap-5 border-b border-white/15 pb-9 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-sm font-bold uppercase text-bronze">Liderança Aloe</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl md:text-5xl">Quem está à frente da Aloe.</h2>
            </div>
            <p className="max-w-[23rem] text-balance text-lg leading-7 text-white/75 md:justify-self-end">Competências complementares para uma gestão completa.</p>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:gap-16">
            {photographedPartner.image && (
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper">
                <Image
                  src={photographedPartner.image}
                  alt={`Retrato de ${photographedPartner.name}`}
                  fill
                  sizes="(max-width: 1023px) 100vw, 45vw"
                  className={`object-cover ${photographedPartner.imageClassName}`}
                />
              </div>
            )}

            <div className="grid content-stretch divide-y divide-white/15 border-y border-white/15">
              {partners.map((partner) => (
                <article
                  key={partner.name}
                  className="flex min-w-0 flex-col justify-center py-9 first:pt-0 last:pb-0 lg:px-2 lg:first:pt-8 lg:last:pb-8"
                >
                  <span className="text-xs font-bold uppercase text-bronze">
                    {partner.role}
                  </span>
                  <h3 className="mt-2 font-serif text-3xl font-semibold leading-tight text-white lg:text-4xl">
                    {partner.name}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/72">
                    {partner.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/15 pt-5">
                    {partner.areas.map((area) => (
                      <span
                        key={area}
                        className="text-[0.68rem] font-bold uppercase text-bronze"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
