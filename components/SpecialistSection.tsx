import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Conhecimento da rotina condominial",
    text: "Acompanhamento das necessidades específicas do condomínio, considerando porte, perfil dos moradores e demandas operacionais."
  },
  {
    title: "Atendimento próximo ao síndico",
    text: "Canal direto para orientar decisões, organizar prioridades e reduzir ruídos na comunicação administrativa."
  },
  {
    title: "Apoio em dúvidas administrativas",
    text: "Suporte para questões do dia a dia, documentos, cobranças, assembleias e demandas recorrentes."
  },
  {
    title: "Acompanhamento de demandas recorrentes",
    text: "Organização das solicitações para evitar que problemas simples virem pendências acumuladas."
  },
  {
    title: "Orientação para decisões do condomínio",
    text: "Apoio técnico e administrativo para que o síndico e o conselho decidam com mais clareza."
  },
  {
    title: "Comunicação mais clara com moradores e conselho",
    text: "Informações melhor estruturadas, reduzindo dúvidas, cobranças repetidas e conflitos desnecessários."
  }
];

export function SpecialistSection() {
  return (
    <section className="bg-paper py-20 md:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="overflow-hidden rounded-lg border border-moss/10 bg-porcelain shadow-soft">
          <img
            src="/images/gerente-aloe.jpg"
            alt="Gerente Aloe em ambiente institucional"
            className="h-[520px] w-full object-cover object-[center_28%]"
          />
          <div className="border-t border-moss/10 p-6">
            <p className="text-sm font-semibold leading-7 text-graphite/75">
              Cada condomínio tem uma rotina própria. Por isso, a Aloe trabalha
              com acompanhamento próximo, análise das demandas recorrentes e
              suporte direto ao síndico para transformar problemas do dia a dia
              em decisões mais organizadas, documentadas e previsíveis.
            </p>
          </div>
        </div>

        <div>
          <p className="eyebrow">Gerente exclusivo</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Gerente exclusivo para uma gestão mais próxima, ágil e estratégica.
          </h2>
          <p className="mt-6 text-lg leading-8 text-graphite/75">
            Na Aloe, cada condomínio conta com um gerente de relacionamento para
            acompanhar a rotina administrativa, apoiar o síndico nas decisões e
            garantir uma comunicação mais clara entre administração, conselho e
            moradores.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-start gap-3 rounded-lg border border-moss/10 bg-porcelain px-5 py-4"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-moss"
                  size={20}
                  strokeWidth={1.8}
                />
                <div>
                  <h3 className="text-sm font-bold leading-6 text-ink">
                    {benefit.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold leading-6 text-graphite/70">
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
