"use client";

import { CheckCircle2, FileCheck2, MessageCircle } from "lucide-react";
import { useState } from "react";
import { plans } from "@/data/home";
import { getPlanWhatsAppHref } from "@/lib/planWhatsApp";
import { ButtonLink } from "./ButtonLink";

export function PlansSection() {
  const defaultIndex = plans.findIndex((plan) => plan.name === "Gold");
  const [selectedIndex, setSelectedIndex] = useState(
    defaultIndex >= 0 ? defaultIndex : 0
  );
  const selectedPlan = plans[selectedIndex];

  return (
    <section id="planos" className="bg-porcelain py-20 md:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Plano para pequenos condomínios até 16 unidades</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Uma base de suporte para cada rotina condominial.
          </h2>
          <p className="mt-5 text-lg leading-8 text-graphite/75">
            A Aloe estrutura planos de administração para condomínios que
            precisam desde a organização essencial até uma gestão mais completa,
            com evolução clara de acompanhamento, suporte e presença na rotina.
          </p>
        </div>

        <div className="mt-8 grid gap-5 rounded-lg border border-bronze/30 bg-paper p-6 shadow-[0_18px_45px_rgba(25,33,29,0.08)] md:grid-cols-[auto_1fr] md:p-7">
          <div className="flex h-14 w-14 items-center justify-center rounded-md bg-moss text-porcelain">
            <FileCheck2 aria-hidden="true" size={26} strokeWidth={1.7} />
          </div>
          <div>
            <span className="inline-flex rounded-md bg-bronze/10 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.08em] text-bronze">
              Diferencial para pequenos condomínios
            </span>
            <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink">
              Abertura de CNPJ por conta da Aloe
            </h3>
            <p className="mt-3 text-base font-semibold leading-7 text-graphite/75">
              Para condomínios de até 16 unidades, a Aloe cobre o valor da
              abertura do CNPJ, facilitando a regularização inicial e reduzindo
              custos para quem está começando a organizar a administração do
              condomínio.
            </p>
            <p className="mt-3 text-sm font-semibold leading-6 text-graphite/68">
              Um diferencial pensado para pequenos condomínios que precisam sair
              da informalidade e iniciar a gestão com mais segurança,
              documentação e estrutura.
            </p>
          </div>
        </div>

        <div
          className="mt-10 flex gap-2 overflow-x-auto pb-2"
          aria-label="Selecionar plano"
          role="tablist"
        >
          {plans.map((plan, index) => {
            const selected = selectedIndex === index;

            return (
              <button
                key={plan.name}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setSelectedIndex(index)}
                className={`focus-ring shrink-0 rounded-md border px-4 py-2 text-sm font-bold transition ${
                  selected
                    ? "border-bronze bg-ink text-white shadow-[0_10px_24px_rgba(25,33,29,0.12)]"
                    : "border-moss/10 bg-white text-graphite/72 hover:border-bronze/35 hover:text-moss"
                }`}
              >
                {plan.name}
                {plan.name === "Gold" ? (
                  <span className="ml-2 text-[10px] uppercase tracking-[0.08em] text-bronze">
                    Mais pedido
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid items-stretch gap-4 lg:grid-cols-5">
          {plans.map((plan, index) => {
            const selected = selectedIndex === index;

            return (
              <article
                key={plan.name}
                className={`relative flex min-h-[350px] flex-col rounded-lg border p-6 transition duration-300 ${
                  selected
                    ? "scale-[1.015] border-bronze/70 bg-ink text-porcelain shadow-[0_24px_55px_rgba(25,33,29,0.18)]"
                    : "border-moss/10 bg-white text-graphite opacity-90 hover:border-bronze/35 hover:opacity-100 hover:shadow-[0_12px_35px_rgba(25,33,29,0.08)]"
                }`}
              >
                <button
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setSelectedIndex(index)}
                  className="focus-ring flex flex-1 flex-col rounded-md text-left"
                >
                  <div className="flex min-h-8 items-start justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      <span
                        className={`rounded-md px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.08em] ${
                          selected || plan.name === "Gold"
                            ? "bg-bronze text-white"
                            : "bg-bronze/10 text-bronze"
                        }`}
                      >
                        {plan.badge ?? plan.label}
                      </span>
                      {selected ? (
                        <span
                          className={`rounded-md px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.08em] ${
                            plan.name === "Gold"
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
                        selected ? "text-white/55" : "text-graphite/45"
                      }`}
                    >
                      Nível {plan.level}
                    </span>
                  </div>

                  <div className="mt-5 flex gap-1.5" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, levelIndex) => (
                      <span
                        key={levelIndex}
                        className={`h-1.5 flex-1 rounded-full ${
                          levelIndex < plan.level
                            ? selected
                              ? "bg-bronze"
                              : "bg-moss"
                            : selected
                              ? "bg-white/15"
                              : "bg-moss/10"
                        }`}
                      />
                    ))}
                  </div>

                  <h3
                    className={`mt-6 font-serif text-3xl font-semibold leading-none ${
                      selected ? "text-white" : "text-ink"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`mt-4 min-h-[72px] text-sm font-semibold leading-6 ${
                      selected ? "text-white/82" : "text-graphite/72"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div
                    className={`mt-auto border-t pt-4 ${
                      selected ? "border-white/12" : "border-moss/10"
                    }`}
                  >
                    <span
                      className={`block text-xs font-extrabold uppercase tracking-[0.08em] ${
                        selected ? "text-bronze" : "text-moss"
                      }`}
                    >
                      Ideal para
                    </span>
                    <span
                      className={`mt-2 block text-sm font-semibold leading-6 ${
                        selected ? "text-white/72" : "text-graphite/68"
                      }`}
                    >
                      {plan.idealFor}
                    </span>
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

        <div className="mt-6 grid gap-6 rounded-lg border border-moss/10 bg-paper p-6 md:grid-cols-[0.78fr_1.22fr] md:p-8">
          <div>
            <p className="eyebrow">Plano selecionado</p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <h3 className="font-serif text-4xl font-semibold text-ink">
                {selectedPlan.name}
              </h3>
              <span className="rounded-md bg-bronze px-3 py-1 text-sm font-extrabold text-white">
                {selectedPlan.badge ?? selectedPlan.label}
              </span>
              <span className="rounded-md bg-moss px-3 py-1 text-sm font-extrabold text-white">
                Selecionado
              </span>
            </div>
            <p className="mt-4 text-sm font-semibold leading-6 text-graphite/75">
              {selectedPlan.description}
            </p>
            <div className="mt-6 rounded-md border border-moss/10 bg-white p-4">
              <span className="text-xs font-extrabold uppercase tracking-[0.08em] text-moss">
                O que muda
              </span>
              <p className="mt-2 text-sm font-semibold leading-6 text-graphite/75">
                {selectedPlan.evolution}
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-bronze">
              Inclui
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {selectedPlan.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-md border border-moss/10 bg-white px-4 py-3"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-moss"
                    size={19}
                    strokeWidth={1.8}
                  />
                  <span className="text-sm font-semibold leading-6 text-graphite">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-lg border border-moss/10 bg-white p-6 md:flex-row md:items-center">
          <p className="max-w-2xl text-sm font-semibold leading-6 text-graphite/75">
            O serviço de síndico profissional pode ser contratado como
            complemento aos planos.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/#contato">Solicitar proposta personalizada</ButtonLink>
            <ButtonLink
              href={getPlanWhatsAppHref(selectedPlan.name)}
              variant="secondary"
              whatsapp
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar sobre {selectedPlan.name}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
