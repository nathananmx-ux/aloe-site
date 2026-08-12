"use client";

import { CheckCircle2, FileCheck2, MessageCircle, Minus } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { contact } from "@/data/home";
import { getPlanWhatsAppHref } from "@/lib/planWhatsApp";

const planCards = [
  {
    name: "Basic",
    badge: "Essencial",
    level: 1,
    description:
      "Para condomínios que precisam estruturar a administração básica com organização financeira e suporte inicial.",
    idealFor: "Rotinas que precisam sair da informalidade com uma base confiável.",
    benefits: [
      "Boleto individualizado por unidade",
      "Pagamento de contas da área comum",
      "Abertura de conta bancária",
      "Abertura e regularização de CNPJ",
      "Balancete mensal direto no boleto"
    ]
  },
  {
    name: "Silver",
    badge: "Intermediário",
    level: 2,
    description:
      "Para condomínios que querem mais apoio recorrente na rotina administrativa e operacional.",
    idealFor: "Condomínios que precisam de administração com apoio operacional.",
    benefits: [
      "Benefícios administrativos essenciais",
      "1 limpeza mensal das áreas comuns",
      "Apoio documental e operacional",
      "Rotina administrativa mais acompanhada",
      "Auxílio jurídico, inclusive cobrança"
    ]
  },
  {
    name: "Gold",
    badge: "Mais pedido",
    level: 3,
    description:
      "Para condomínios que buscam equilíbrio entre administração, suporte, limpeza recorrente e acompanhamento mais completo.",
    idealFor: "Quem quer o melhor equilíbrio entre gestão e operação.",
    benefits: [
      "Benefícios administrativos essenciais",
      "2 limpezas mensais das áreas comuns",
      "Apoio jurídico e cobrança",
      "Indicação de profissionais",
      "Maior equilíbrio entre administração e operação"
    ],
    featured: true
  },
  {
    name: "Platinum",
    badge: "Avançado",
    level: 4,
    description:
      "Para condomínios que precisam de gestão mais preventiva, manutenção recorrente e maior suporte operacional.",
    idealFor: "Condomínios que querem reduzir pendências e antecipar cuidados.",
    benefits: [
      "Benefícios administrativos essenciais",
      "2 limpezas mensais das áreas comuns",
      "Limpeza anual da caixa d'água",
      "Lubrificação trimestral do portão",
      "Troca de lâmpadas queimadas"
    ]
  },
  {
    name: "Black",
    badge: "Completo",
    level: 5,
    description:
      "Para condomínios que desejam a cobertura mais ampla da linha, com mais serviços incluídos e suporte ampliado.",
    idealFor: "Condomínios que querem a cobertura mais completa da linha.",
    benefits: [
      "Benefícios administrativos essenciais",
      "2 limpezas mensais das áreas comuns",
      "Limpeza anual da caixa d'água",
      "Pinturas programadas a cada 5 anos",
      "Troca de motor queimado do portão"
    ]
  }
];

const comparisonRows = [
  ["Boleto individualizado por unidade", true, true, true, true, true],
  ["Pagamento de contas da área comum", true, true, true, true, true],
  ["Abertura de conta bancária", true, true, true, true, true],
  ["Abertura e regularização de CNPJ", true, true, true, true, true],
  ["Administração do fundo de caixa", true, true, true, true, true],
  ["Balancete mensal direto no boleto", true, true, true, true, true],
  ["Indicação de profissionais", true, true, true, true, true],
  ["Auxílio jurídico, inclusive cobrança", true, true, true, true, true],
  ["Limpeza das áreas comuns por mês", "-", "1", "2", "2", "2"],
  ["Limpeza anual da caixa d'água", false, false, false, true, true],
  ["Lubrificação trimestral do portão", false, false, false, true, true],
  ["Troca de lâmpadas queimadas", false, false, false, true, true],
  ["Pintura do hall e garagem a cada 5 anos", false, false, false, false, true],
  ["Pintura externa a cada 5 anos", false, false, false, false, true],
  ["Troca de motor queimado do portão", false, false, false, false, true]
] as const;

const planNames = ["Basic", "Silver", "Gold", "Platinum", "Black"];

function FeatureValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <CheckCircle2
        aria-label="Incluído"
        className="mx-auto text-moss"
        size={20}
        strokeWidth={1.8}
      />
    );
  }

  if (value === false || value === "-") {
    return (
      <Minus
        aria-label="Não incluído"
        className="mx-auto text-graphite/30"
        size={20}
        strokeWidth={1.8}
      />
    );
  }

  return <span className="font-bold text-ink">{value}</span>;
}

function normalizePlanId(planName: string) {
  return `plano-${planName.toLowerCase()}`;
}

export function PlansPageContent() {
  const [selectedPlan, setSelectedPlan] = useState("Gold");

  const selectPlan = (planName: string, scroll = false) => {
    setSelectedPlan(planName);

    if (scroll) {
      document
        .getElementById(normalizePlanId(planName))
        ?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };

  return (
    <main className="bg-porcelain">
      <section className="border-b border-moss/10 bg-paper py-20 md:py-24">
        <div className="section-shell max-w-4xl">
          <p className="eyebrow">Planos</p>
          <h1 className="mt-3 font-serif text-5xl font-semibold leading-tight text-ink md:text-6xl">
            Planos Aloe
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-graphite/75">
            Soluções de administração condominial para diferentes portes e
            rotinas, com comparação clara do que muda em cada nível de suporte.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="section-shell grid gap-6 lg:grid-cols-2">
          <article className="rounded-lg border border-bronze/25 bg-white p-7 shadow-soft">
            <span className="rounded-md bg-bronze px-3 py-1 text-xs font-extrabold uppercase tracking-[0.08em] text-white">
              Até 16 unidades
            </span>
            <h2 className="mt-5 font-serif text-4xl font-semibold text-ink">
              Planos para pequenos condomínios
            </h2>
            <p className="mt-4 text-sm leading-7 text-graphite/72">
              Para condomínios de até 16 unidades, a Aloe oferece planos
              especiais com estrutura administrativa, organização financeira,
              suporte próximo e serviços progressivos conforme a rotina do
              condomínio.
            </p>
            <div className="mt-7">
              <ButtonLink href="#planos-ate-16">
                Comparar planos até 16 unidades
              </ButtonLink>
            </div>
          </article>

          <article className="rounded-lg border border-moss/10 bg-ink p-7 text-porcelain shadow-soft">
            <span className="rounded-md bg-white/10 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.08em] text-bronze">
              Acima de 16 unidades
            </span>
            <h2 className="mt-5 font-serif text-4xl font-semibold text-white">
              Condomínios acima de 16 unidades
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/72">
              Para condomínios maiores, a Aloe realiza uma análise personalizada
              da rotina, estrutura, necessidades operacionais e demandas
              administrativas para montar uma proposta adequada.
            </p>
            <div className="mt-7">
              <ButtonLink href="/#contato" variant="secondary">
                Solicitar proposta personalizada
              </ButtonLink>
            </div>
          </article>
        </div>
      </section>

      <section id="planos-ate-16" className="bg-paper py-16 md:py-20">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">
              Plano para pequenos condomínios até 16 unidades
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
              Uma base de suporte para cada rotina condominial.
            </h2>
            <p className="mt-5 text-lg leading-8 text-graphite/75">
              A Aloe estrutura planos de administração para pequenos condomínios
              que precisam desde uma organização essencial até uma gestão mais
              completa, com evolução clara de acompanhamento, suporte e serviços
              incluídos.
            </p>
          </div>

          <div className="mt-8 grid gap-5 rounded-lg border border-bronze/30 bg-porcelain p-6 shadow-[0_18px_45px_rgba(25,33,29,0.08)] md:grid-cols-[auto_1fr] md:p-7">
            <div className="flex h-14 w-14 items-center justify-center rounded-md bg-moss text-porcelain">
              <FileCheck2 aria-hidden="true" size={26} strokeWidth={1.7} />
            </div>
            <div>
              <span className="inline-flex rounded-md bg-bronze/10 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.08em] text-bronze">
                Diferencial Aloe
              </span>
              <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink">
                Abertura de CNPJ por conta da Aloe
              </h3>
              <p className="mt-3 text-base font-semibold leading-7 text-graphite/75">
                Para condomínios de até 16 unidades, a Aloe cobre o valor da
                abertura do CNPJ, facilitando a regularização inicial e
                reduzindo custos para quem está começando a organizar a
                administração do condomínio.
              </p>
              <p className="mt-3 text-sm font-semibold leading-6 text-graphite/68">
                Um diferencial pensado para pequenos condomínios que precisam
                sair da informalidade e iniciar a gestão com mais segurança,
                documentação e estrutura.
              </p>
            </div>
          </div>

          <div
            className="mt-10 flex gap-2 overflow-x-auto pb-2"
            aria-label="Selecionar plano"
            role="tablist"
          >
            {planCards.map((plan) => {
              const active = selectedPlan === plan.name;

              return (
                <button
                  key={plan.name}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => selectPlan(plan.name, true)}
                  className={`focus-ring shrink-0 rounded-md border px-4 py-2 text-sm font-bold transition ${
                    active
                      ? "border-bronze bg-ink text-white shadow-[0_10px_24px_rgba(25,33,29,0.12)]"
                      : "border-moss/10 bg-white text-graphite/72 hover:border-bronze/35 hover:text-moss"
                  }`}
                >
                  {plan.name}
                  {plan.name === "Gold" ? (
                    <span
                      className={`ml-2 text-[10px] uppercase tracking-[0.08em] ${
                        active ? "text-bronze" : "text-bronze"
                      }`}
                    >
                      Mais pedido
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {planCards.map((plan) => {
              const selected = selectedPlan === plan.name;
              const muted = !selected;

              return (
                <article
                  id={normalizePlanId(plan.name)}
                  key={plan.name}
                  className={`flex min-h-[560px] flex-col rounded-lg border p-6 transition duration-300 ${
                    selected
                      ? "scale-[1.015] border-bronze/70 bg-ink text-porcelain shadow-[0_24px_55px_rgba(25,33,29,0.18)]"
                      : `${muted ? "opacity-90" : ""} border-moss/10 bg-white text-graphite shadow-[0_12px_35px_rgba(25,33,29,0.04)] hover:border-bronze/35`
                  }`}
                >
                  <button
                    type="button"
                    aria-pressed={selected}
                    onClick={() => selectPlan(plan.name)}
                    className="focus-ring flex flex-1 flex-col rounded-md text-left"
                  >
                    <div className="flex min-h-8 items-start justify-between gap-3">
                      <div className="flex flex-wrap gap-2">
                        <span
                          className={`shrink-0 rounded-md px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.08em] ${
                            selected || plan.featured
                              ? "bg-bronze text-white"
                              : "bg-bronze/10 text-bronze"
                          }`}
                        >
                          {plan.badge}
                        </span>
                        {selected ? (
                          <span
                            className={`rounded-md px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.08em] ${
                              plan.featured
                                ? "bg-white/10 text-white"
                                : "bg-moss/10 text-moss"
                            }`}
                          >
                            Selecionado
                          </span>
                        ) : null}
                      </div>
                      <span
                        className={`whitespace-nowrap text-xs font-bold ${
                          selected ? "text-white/62" : "text-graphite/48"
                        }`}
                      >
                        Nível {plan.level}
                      </span>
                    </div>

                    <h3
                      className={`mt-6 font-serif text-3xl font-semibold ${
                        selected ? "text-white" : "text-ink"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`mt-4 text-sm font-semibold leading-6 ${
                        selected ? "text-white/78" : "text-graphite/72"
                      }`}
                    >
                      {plan.description}
                    </p>
                    <div
                      className={`mt-5 border-t pt-4 ${
                        selected ? "border-white/12" : "border-moss/10"
                      }`}
                    >
                      <p
                        className={`text-xs font-extrabold uppercase tracking-[0.08em] ${
                          selected ? "text-bronze" : "text-moss"
                        }`}
                      >
                        Principais inclusões
                      </p>
                      <div className="mt-4 space-y-3">
                        {plan.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-start gap-2">
                            <CheckCircle2
                              aria-hidden="true"
                              className={
                                selected
                                  ? "mt-0.5 text-bronze"
                                  : "mt-0.5 text-moss"
                              }
                              size={17}
                              strokeWidth={1.8}
                            />
                            <span
                              className={`text-xs font-semibold leading-5 ${
                                selected ? "text-white/78" : "text-graphite/76"
                              }`}
                            >
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      className={`mt-auto border-t pt-4 ${
                        selected ? "border-white/12" : "border-moss/10"
                      }`}
                    >
                      <p
                        className={`text-xs font-extrabold uppercase tracking-[0.08em] ${
                          selected ? "text-bronze" : "text-moss"
                        }`}
                      >
                        Ideal para
                      </p>
                      <p
                        className={`mt-2 text-xs font-semibold leading-5 ${
                          selected ? "text-white/72" : "text-graphite/70"
                        }`}
                      >
                        {plan.idealFor}
                      </p>
                    </div>
                  </button>

                  <a
                    href={getPlanWhatsAppHref(plan.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`focus-ring mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-semibold transition ${
                      selected
                        ? "bg-bronze text-white hover:bg-white hover:text-moss"
                        : "border border-moss/15 bg-porcelain text-moss hover:border-bronze/35 hover:bg-white"
                    }`}
                  >
                    <span>Falar sobre este plano</span>
                    <MessageCircle aria-hidden="true" size={17} strokeWidth={1.8} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-porcelain py-16 md:py-20">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Comparativo</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
              Compare os planos
            </h2>
            <p className="mt-5 text-lg leading-8 text-graphite/75">
              Veja de forma clara o que está incluído em cada plano para
              condomínios de até 16 unidades.
            </p>
          </div>

          <div className="mt-10 hidden overflow-hidden rounded-lg border border-moss/10 bg-white shadow-soft md:block">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-paper">
                  <th className="w-[34%] px-5 py-5 text-xs font-extrabold uppercase tracking-[0.08em] text-moss">
                    Recurso
                  </th>
                  {planNames.map((plan) => {
                    const selected = selectedPlan === plan;

                    return (
                      <th
                        key={plan}
                        className={`px-4 py-5 text-center text-xs font-extrabold uppercase tracking-[0.08em] ${
                          selected
                            ? "border-x border-bronze/30 bg-bronze/10 text-bronze"
                            : plan === "Gold"
                              ? "border-x border-bronze/20 bg-bronze/5 text-bronze"
                              : "text-moss"
                        }`}
                      >
                        <span>{plan}</span>
                        <div className="mt-2 flex flex-col items-center gap-1">
                          {plan === "Gold" ? (
                            <span className="w-fit rounded-md bg-bronze px-2 py-1 text-[10px] text-white">
                              Mais pedido
                            </span>
                          ) : null}
                          {selected ? (
                            <span className="w-fit rounded-md bg-moss px-2 py-1 text-[10px] text-white">
                              Selecionado
                            </span>
                          ) : null}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([feature, ...values]) => (
                  <tr key={feature} className="border-t border-moss/10">
                    <th className="px-5 py-4 text-sm font-semibold leading-6 text-graphite/80">
                      {feature}
                    </th>
                    {values.map((value, index) => {
                      const planName = planNames[index];
                      const selected = selectedPlan === planName;

                      return (
                        <td
                          key={`${feature}-${planName}`}
                          className={`px-4 py-4 text-center text-sm ${
                            selected
                              ? "border-x border-bronze/25 bg-bronze/10"
                              : planName === "Gold"
                                ? "border-x border-bronze/15 bg-bronze/5"
                                : ""
                          }`}
                        >
                          <FeatureValue value={value} />
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-4 md:hidden">
            {planCards.map((plan, planIndex) => {
              const selected = selectedPlan === plan.name;

              return (
                <article
                  key={`mobile-${plan.name}`}
                  className={`rounded-lg border p-5 transition ${
                    selected
                      ? "border-bronze/60 bg-ink text-porcelain shadow-soft"
                      : "border-moss/10 bg-white text-graphite"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => selectPlan(plan.name)}
                    className="focus-ring flex w-full items-center justify-between gap-3 rounded-md text-left"
                    aria-pressed={selected}
                  >
                    <h3
                      className={`font-serif text-3xl font-semibold ${
                        selected ? "text-white" : "text-ink"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <span
                      className={`whitespace-nowrap rounded-md px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.08em] ${
                        selected ? "bg-bronze text-white" : "bg-bronze/10 text-bronze"
                      }`}
                    >
                      Nível {plan.level}
                    </span>
                  </button>
                  <div className="mt-5 space-y-3">
                    {comparisonRows.map(([feature, ...values]) => (
                      <div
                        key={`${plan.name}-${feature}`}
                        className="flex items-center justify-between gap-4 border-t border-current/10 pt-3"
                      >
                        <span className="text-sm font-semibold leading-5 opacity-75">
                          {feature}
                        </span>
                        <span className="min-w-8 text-center">
                          <FeatureValue value={values[planIndex]} />
                        </span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={getPlanWhatsAppHref(plan.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`focus-ring mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-semibold transition ${
                      selected
                        ? "bg-bronze text-white hover:bg-white hover:text-moss"
                        : "border border-moss/15 bg-porcelain text-moss hover:bg-white"
                    }`}
                  >
                    <span>Falar sobre este plano</span>
                    <MessageCircle aria-hidden="true" size={17} strokeWidth={1.8} />
                  </a>
                </article>
              );
            })}
          </div>

          <div className="mt-10 rounded-lg border border-moss/10 bg-paper p-7 shadow-[0_14px_40px_rgba(25,33,29,0.06)] md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-ink">
                Ainda em dúvida sobre o plano ideal?
              </h2>
              <p className="mt-3 max-w-2xl text-sm font-semibold leading-6 text-graphite/72">
                A Aloe pode analisar a rotina do seu condomínio e indicar o
                plano mais adequado para o número de unidades, demandas
                operacionais e nível de acompanhamento necessário.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-0 md:shrink-0">
              <ButtonLink href="/#contato">
                Solicitar proposta personalizada
              </ButtonLink>
              <ButtonLink
                href={contact.whatsappHref}
                variant="secondary"
                whatsapp
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar pelo WhatsApp
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
