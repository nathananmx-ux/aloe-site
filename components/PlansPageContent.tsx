"use client";

import { useState } from "react";
import { Check, Minus } from "lucide-react";
import { plans, comparisonRows } from "@/data/plans";
import { getPlanWhatsAppHref } from "@/lib/planWhatsApp";
import { ButtonLink } from "./ButtonLink";

function Value({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="mx-auto text-moss" size={18} aria-label="Incluído" />;
  if (value === false || value === "-") return <Minus className="mx-auto text-graphite/40" size={16} aria-label="Não incluído" />;
  return <span>{value}</span>;
}

export function PlansPageContent() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = plans[selectedIndex];

  return (
    <main className="bg-white">
      <section className="bg-paper py-16 md:py-20">
        <div className="section-shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div><p className="eyebrow">Planos Aloe</p><h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl md:text-6xl">A gestão que o condomínio precisa, na medida certa.</h1></div>
          <p className="self-end text-lg leading-8 text-graphite/75">Os planos abaixo são destinados a condomínios de até 16 unidades. Para condomínios de outro porte, a Aloe prepara uma proposta de acordo com as necessidades da operação.</p>
        </div>
      </section>
      <section id="modalidades" className="py-16 md:py-20">
        <div className="section-shell">
          <div className="max-w-3xl"><p className="eyebrow">Cinco modalidades</p><h2 className="mt-3 font-serif text-3xl font-semibold text-ink sm:text-4xl">Entenda a evolução dos serviços.</h2><p className="mt-5 leading-7 text-graphite/75">Todos partem da administração essencial. A limpeza e as manutenções programadas variam entre os planos; confira escopo e condições na proposta.</p></div>
          <div className="mt-10 border-t border-moss/20">
            {plans.map((plan) => (
              <details key={plan.name} className="group border-b border-moss/20 py-5">
                <summary className="focus-ring flex cursor-pointer list-none items-center gap-4 marker:hidden [&::-webkit-details-marker]:hidden">
                  <span className="w-8 shrink-0 text-sm font-bold text-bronze">0{plan.level}</span>
                  <span className="min-w-0 flex-1 font-serif text-2xl font-semibold text-ink sm:text-3xl">{plan.name}</span>
                  <span className="hidden max-w-[45%] text-right text-sm text-graphite/70 sm:block">{plan.badge}</span>
                  <span aria-hidden="true" className="text-xl text-moss group-open:rotate-45">+</span>
                </summary>
                <div className="grid gap-7 pb-4 pt-6 pl-12 md:grid-cols-2 md:gap-12">
                  <div><p className="leading-7 text-graphite/80">{plan.evolution}</p><p className="mt-4 text-sm leading-6 text-graphite/70"><strong className="text-ink">Indicado para:</strong> {plan.idealFor}</p></div>
                  <div><ul className="space-y-3 text-sm leading-6 text-graphite/80">{plan.benefits.map((benefit) => <li key={benefit} className="flex gap-3"><Check size={17} className="mt-1 shrink-0 text-moss" aria-hidden="true" />{benefit}</li>)}</ul><a className="focus-ring mt-7 inline-block border-b border-moss pb-1 font-semibold text-moss" href={getPlanWhatsAppHref(plan.name)} target="_blank" rel="noopener noreferrer">Conversar sobre {plan.name}</a></div>
                </div>
              </details>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-graphite/65">Para condomínios de até 16 unidades, a proposta prevê o custeio da abertura do CNPJ pela Aloe, conforme a necessidade de regularização e as condições contratuais.</p>
        </div>
      </section>
      <section className="bg-paper py-16 md:py-20">
        <div className="section-shell min-w-0">
          <p className="eyebrow">Comparativo</p><h2 className="mt-3 font-serif text-3xl font-semibold text-ink sm:text-4xl">Compare item por item.</h2>
          <div className="mt-8 md:hidden">
            <label htmlFor="compare-plan" className="block text-sm font-semibold text-ink">Plano para comparar</label>
            <select id="compare-plan" value={selectedIndex} onChange={(event) => setSelectedIndex(Number(event.target.value))} className="focus-ring mt-2 min-h-11 w-full rounded-sm border border-moss/25 bg-white px-3 text-ink">
              {plans.map((plan, index) => <option key={plan.name} value={index}>{plan.name}</option>)}
            </select>
            <div className="mt-5 border-t border-moss/20">
              {comparisonRows.map(([feature, ...values]) => <div key={feature} className="grid grid-cols-[minmax(0,1fr)_3rem] items-center gap-3 border-b border-moss/15 py-3 text-sm"><span className="min-w-0 leading-5 text-graphite/80">{feature}</span><span className="text-center font-semibold text-ink"><Value value={values[selectedIndex]} /></span></div>)}
            </div>
            <a href={getPlanWhatsAppHref(selected.name)} target="_blank" rel="noopener noreferrer" className="focus-ring mt-6 inline-flex min-h-11 items-center border-b border-moss font-semibold text-moss">Conversar sobre {selected.name}</a>
          </div>
          <div className="mt-9 hidden overflow-x-auto md:block">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm"><caption className="sr-only">Serviços incluídos em cada plano Aloe</caption><thead><tr className="border-y border-moss/20"><th scope="col" className="w-[40%] py-4 pr-4 font-semibold text-ink">Serviço</th>{plans.map((plan) => <th scope="col" key={plan.name} className="px-2 py-4 text-center font-semibold text-ink">{plan.name}</th>)}</tr></thead><tbody>{comparisonRows.map(([feature, ...values]) => <tr key={feature} className="border-b border-moss/15"><th scope="row" className="py-3 pr-4 font-normal leading-6 text-graphite/80">{feature}</th>{values.map((value, index) => <td key={plans[index].name} className="px-2 py-3 text-center font-semibold text-ink"><Value value={value} /></td>)}</tr>)}</tbody></table>
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-graphite/65">A tabela resume as modalidades para pequenos condomínios. Escopo, frequências, responsabilidades e valores devem ser confirmados na proposta comercial.</p>
          <div className="mt-8"><ButtonLink href="/#contato">Solicitar proposta personalizada</ButtonLink></div>
        </div>
      </section>
    </main>
  );
}
