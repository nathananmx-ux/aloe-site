import { CalendarCheck, CheckCircle2, ClipboardCheck } from "lucide-react";
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
          <div className="professional-visual-photo min-h-[220px] rounded-lg border border-moss/10 sm:col-span-2" />
          <div className="rounded-lg border border-moss/10 bg-porcelain p-5 sm:col-span-2">
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Visitas e prioridades", icon: CalendarCheck },
                { label: "Demandas acompanhadas", icon: ClipboardCheck }
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex flex-1 items-center gap-3 rounded-md border border-moss/10 bg-white px-4 py-3"
                  >
                    <Icon
                      aria-hidden="true"
                      className="shrink-0 text-moss"
                      size={19}
                      strokeWidth={1.7}
                    />
                    <span className="text-xs font-bold text-graphite/75">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
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
