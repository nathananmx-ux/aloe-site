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
            Planos para diferentes rotinas condominiais.
          </h2>
          <p className="mt-5 text-lg leading-8 text-graphite/75">
            A Aloe estrutura planos de administração para condomínios que
            precisam desde a organização essencial até uma gestão mais completa,
            com serviços adicionais de conservação e acompanhamento.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-6">
          {plans.map((plan, index) => {
            const selected = selectedIndex === index;

            return (
              <button
                key={plan.name}
                type="button"
                aria-pressed={selected}
                onClick={() => setSelectedIndex(index)}
                className={`focus-ring relative rounded-lg border text-left transition duration-300 ${
                  selected
                    ? "md:col-span-2 lg:col-span-2 border-bronze/50 bg-ink p-7 text-porcelain shadow-soft"
                    : "border-moss/10 bg-white p-5 text-graphite hover:-translate-y-1 hover:border-bronze/35 hover:shadow-[0_12px_35px_rgba(25,33,29,0.08)]"
                }`}
              >
                {plan.badge ? (
                  <span className="mb-5 inline-flex rounded-md bg-bronze px-3 py-1 text-sm font-extrabold text-white">
                    {plan.badge}
                  </span>
                ) : null}
                <h3
                  className={`font-serif font-semibold ${
                    selected ? "text-4xl text-white" : "text-3xl text-ink"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mt-4 leading-7 ${
                    selected ? "text-base text-white/80" : "text-sm text-graphite/70"
                  }`}
                >
                  {plan.description}
                </p>
              </button>
            );
          })}
        </div>

        <div className="mt-6 grid gap-6 rounded-lg border border-moss/10 bg-paper p-6 md:grid-cols-[0.75fr_1.25fr] md:p-8">
          <div>
            <p className="eyebrow">Plano selecionado</p>
            <h3 className="mt-3 font-serif text-4xl font-semibold text-ink">
              {selectedPlan.name}
            </h3>
            <p className="mt-4 text-sm font-semibold leading-6 text-graphite/75">
              {selectedPlan.description}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
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
