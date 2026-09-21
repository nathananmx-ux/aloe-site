"use client";

import {
  Archive,
  BadgeCheck,
  Banknote,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  ChevronDown,
  ClipboardCheck,
  FileSignature,
  FileText,
  Landmark,
  ListChecks,
  MessageSquareText,
  ReceiptText,
  ScrollText,
  SearchCheck,
  UserRoundCheck,
  UsersRound,
  Vote,
  Wrench,
  type LucideIcon
} from "lucide-react";
import { useState } from "react";

type Stage = { label: string; icon: LucideIcon };

const areas = [
  {
    number: "01",
    title: "Financeiro",
    text: "Boletos, pagamentos, despesas e prestação de contas.",
    stages: [
      { label: "Boleto", icon: ReceiptText },
      { label: "Conta", icon: Landmark },
      { label: "Pagamento", icon: Banknote },
      { label: "Prestação de contas", icon: ClipboardCheck }
    ] satisfies Stage[]
  },
  {
    number: "02",
    title: "Administrativo",
    text: "Cadastros, documentos, contratos e histórico.",
    stages: [
      { label: "Documento", icon: FileText },
      { label: "Contrato", icon: FileSignature },
      { label: "Conferência", icon: SearchCheck },
      { label: "Arquivo organizado", icon: Archive }
    ] satisfies Stage[]
  },
  {
    number: "03",
    title: "Assembleias",
    text: "Editais, pautas, atas e acompanhamento das decisões.",
    stages: [
      { label: "Pauta", icon: ListChecks },
      { label: "Reunião", icon: UsersRound },
      { label: "Deliberação", icon: Vote },
      { label: "Ata", icon: ScrollText }
    ] satisfies Stage[]
  },
  {
    number: "04",
    title: "Cobrança",
    text: "Acompanhamento de inadimplência e apoio às medidas cabíveis.",
    stages: [
      { label: "Boleto", icon: ReceiptText },
      { label: "Vencimento", icon: CalendarClock },
      { label: "Acompanhamento", icon: SearchCheck },
      { label: "Regularização", icon: BadgeCheck }
    ] satisfies Stage[]
  },
  {
    number: "05",
    title: "Operação",
    text: "Fornecedores, orçamentos, manutenção e serviços contratados.",
    stages: [
      { label: "Condomínio", icon: Building2 },
      { label: "Fornecedor", icon: BriefcaseBusiness },
      { label: "Serviço", icon: Wrench },
      { label: "Acompanhamento", icon: ClipboardCheck }
    ] satisfies Stage[]
  },
  {
    number: "06",
    title: "Comunicação",
    text: "Interlocução organizada com síndico, conselho e moradores.",
    stages: [
      { label: "Síndico", icon: UserRoundCheck },
      { label: "Gerente", icon: MessageSquareText },
      { label: "Conselho", icon: UsersRound },
      { label: "Moradores", icon: Building2 }
    ] satisfies Stage[]
  }
];

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeArea = areas[activeIndex];

  return (
    <section id="administracao" className="bg-paper py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-5 border-b border-moss/15 pb-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="eyebrow">O que a Aloe organiza</p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.05] text-ink sm:text-5xl md:text-6xl">
              A rotina inteira precisa conversar.
            </h2>
          </div>
          <p className="max-w-xl self-end text-base leading-7 text-graphite/75 lg:col-span-5 lg:justify-self-end">
            Financeiro, documentos, decisões e operação acompanhados como partes da mesma gestão.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden border border-moss/15 bg-porcelain p-6 sm:p-8" aria-live="polite">
              <div key={activeArea.number} className="services-active-image flex h-full flex-col">
                <div className="flex items-end justify-between border-b border-moss/20 pb-5">
                  <div>
                    <p className="text-xs font-bold text-bronze">{activeArea.number}</p>
                    <p className="mt-1 font-serif text-3xl text-ink">{activeArea.title}</p>
                  </div>
                  <span className="text-xs font-bold uppercase text-moss/60">Fluxo Aloe</span>
                </div>
                <ol className="my-auto">
                  {activeArea.stages.map(({ label, icon: Icon }, index) => (
                    <li key={label} className="relative grid grid-cols-[3rem_1fr] items-center gap-4 py-3.5">
                      {index < activeArea.stages.length - 1 ? <span className="absolute left-6 top-[3.9rem] h-7 w-px bg-bronze/55" aria-hidden="true" /> : null}
                      <span className={`grid size-12 place-items-center rounded-full border ${index === activeArea.stages.length - 1 ? "border-bronze bg-bronze text-deep" : "border-moss/20 bg-paper text-moss"}`}>
                        <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-[0.65rem] font-bold text-bronze">{String(index + 1).padStart(2, "0")}</span>
                        <span className="mt-0.5 block text-sm font-semibold text-ink sm:text-base">{label}</span>
                      </span>
                    </li>
                  ))}
                </ol>
                <p className="border-t border-moss/15 pt-4 text-xs leading-5 text-graphite/65">Uma sequência conectada, com registro e acompanhamento.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-moss/20 lg:col-span-7">
            {areas.map((area, index) => {
              const isActive = activeIndex === index;
              return (
                <div key={area.number} className="border-b border-moss/20">
                  <button
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={`service-panel-${index}`}
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    className="focus-ring grid w-full grid-cols-[2.5rem_1fr_auto] items-start gap-3 py-5 text-left sm:grid-cols-[3.5rem_1fr_auto] md:py-6"
                  >
                    <span className={`pt-1 text-xs font-bold transition ${isActive ? "text-bronze" : "text-moss/45"}`}>
                      {area.number}
                    </span>
                    <span>
                      <span className={`block font-serif text-2xl transition md:text-3xl ${isActive ? "text-moss" : "text-ink"}`}>
                        {area.title}
                      </span>
                      <span
                        id={`service-panel-${index}`}
                        className={`${isActive ? "block" : "hidden"} mt-2 max-w-xl text-sm leading-6 text-graphite/70 lg:block`}
                      >
                        {area.text}
                      </span>
                    </span>
                    <ChevronDown
                      size={20}
                      className={`mt-1 text-moss/55 transition lg:hidden ${isActive ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
