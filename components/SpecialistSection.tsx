import { ArrowDown, Building2, Network, UserRoundCheck } from "lucide-react";

const backoffice = ["Financeiro", "Documentos", "Fornecedores", "Cobrança", "Operação"];

export function SpecialistSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <div>
          <p className="eyebrow">Gerente dedicado</p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
            Seu condomínio não deveria falar com um atendimento diferente a cada problema.
          </h2>
          <p className="mt-7 font-serif text-2xl text-moss md:text-3xl">Na Aloe, a gestão tem responsável.</p>
          <p className="mt-5 max-w-xl text-base leading-8 text-graphite/75">
            Um gerente acompanha a rotina do condomínio, centraliza demandas e coordena
            o backoffice para que assuntos financeiros, administrativos e operacionais
            avancem com organização.
          </p>
        </div>
        <div className="self-center bg-paper p-6 md:p-9">
          <div className="grid grid-cols-[48px_1fr] items-center gap-4 border-b border-moss/15 pb-5">
            <span className="grid size-12 place-items-center rounded-full bg-white text-moss"><Building2 size={22} aria-hidden="true" /></span>
            <div>
              <span className="text-xs font-bold uppercase text-bronze">Síndico / condomínio</span>
              <p className="mt-1 text-sm text-graphite/65">Uma porta de entrada para as demandas.</p>
            </div>
          </div>
          <ArrowDown className="mx-auto my-3 text-bronze" size={20} aria-hidden="true" />
          <div className="grid grid-cols-[48px_1fr] items-center gap-4 border-b border-moss/15 pb-5">
            <span className="grid size-12 place-items-center rounded-full bg-moss text-white"><UserRoundCheck size={22} aria-hidden="true" /></span>
            <div>
              <span className="text-xs font-bold uppercase text-bronze">Gerente responsável</span>
              <p className="mt-1 font-serif text-2xl text-moss">Acompanha e coordena</p>
            </div>
          </div>
          <ArrowDown className="mx-auto my-3 text-bronze" size={20} aria-hidden="true" />
          <div className="grid grid-cols-[48px_1fr] items-center gap-4">
            <span className="grid size-12 place-items-center rounded-full bg-white text-moss"><Network size={22} aria-hidden="true" /></span>
            <div>
              <span className="text-xs font-bold uppercase text-bronze">Backoffice Aloe</span>
              <p className="mt-2 text-sm leading-6 text-graphite/70">{backoffice.join("  •  ")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
