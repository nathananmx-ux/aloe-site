import { CheckCircle2 } from "lucide-react";
import { professionalSyndicItems } from "@/data/home";
import { ButtonLink } from "./ButtonLink";

export function ProfessionalSyndicSection() {
  return (
    <section id="sindico-profissional" className="bg-paper py-20 md:py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="eyebrow">Síndico profissional</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Síndico profissional para condomínios que precisam de
            acompanhamento mais próximo.
          </h2>
          <p className="mt-6 text-lg leading-8 text-graphite/75">
            Além da administração condominial, a Aloe oferece o serviço de
            síndico profissional para apoiar decisões, acompanhar prestadores,
            organizar demandas e dar mais previsibilidade à rotina do
            condomínio.
          </p>
          <p className="mt-5 rounded-lg border border-bronze/25 bg-porcelain px-5 py-4 text-sm font-semibold leading-6 text-graphite">
            O serviço de síndico profissional pode ser contratado como
            complemento aos planos de administração.
          </p>
          <div className="mt-8">
            <ButtonLink href="#contato" variant="secondary">
              Conhecer serviço de síndico profissional
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {professionalSyndicItems.map((item) => (
            <div
              key={item}
              className="flex min-h-16 items-center gap-3 rounded-lg border border-moss/10 bg-porcelain px-5 py-4"
            >
              <CheckCircle2
                aria-hidden="true"
                className="shrink-0 text-moss"
                size={20}
                strokeWidth={1.8}
              />
              <span className="text-sm font-semibold leading-6 text-graphite">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
