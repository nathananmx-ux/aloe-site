"use client";

import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { plans } from "@/data/home";
import { ButtonLink } from "./ButtonLink";

export function PlansSection() {
  const defaultIndex = plans.findIndex((plan) => plan.name === "Gold");
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex >= 0 ? defaultIndex : 0);
  const selectedPlan = plans[selectedIndex];

  return (
    <section id="planos" className="bg-porcelain py-20 md:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Planos</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Uma escada de suporte para cada rotina condominial.
          </h2>
          <p className="mt-5 text-lg leading-8 text-graphite/75">
            A Aloe estrutura planos de administração para condomínios que
            precisam desde a organização essencial até uma gestão mais completa,
            com evolução clara de acompanhamento, suporte e presença na rotina.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-5">
          {plans.map((plan, index) => {
            const selected = selectedIndex === index;

            return (
              <button
                key={plan.name}
                type="button"
                aria-pressed={selected}
                onClick={() => setSelectedIndex(index)}
                className={`focus-ring relative flex min-h-[280px] flex-col rounded-lg border text-left transition duration-300 ${
                  selected
                    ? "border-bronze/60 bg-ink p-6 text-porcelain shadow-soft lg:-translate-y-2"
                    : "border-moss/10 bg-white p-6 text-graphite hover:-translate-y-1 hover:border-bronze/35 hover:shadow-[0_12px_35px_rgba(25,33,29,0.08)]"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`rounded-md px-3 py-1 text-xs font-extrabold uppercase tracking-[0.08em] ${
                      selected
                        ? "bg-bronze text-white"
                        : "bg-bronze/10 text-bronze"
                    }`}
                  >
                    {plan.badge ?? plan.label}
                  </span>
                  <span
                    className={`text-xs font-bold ${
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
          <ButtonLink href="#contato">Solicitar proposta personalizada</ButtonLink>
        </div>
      </div>
    </section>
  );
}
