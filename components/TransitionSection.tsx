import { ArrowUpRight } from "lucide-react";

const steps = [
  "Diagnóstico da situação atual",
  "Planejamento da mudança",
  "Solicitação e conferência de documentos",
  "Levantamento financeiro e contratual",
  "Organização de acessos e cadastros",
  "Comunicação com síndico e conselho",
  "Início das rotinas administrativas",
  "Acompanhamento das pendências da transição"
];

export function TransitionSection() {
  return (
    <section className="bg-moss py-20 text-white md:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-sm font-bold uppercase text-bronze">Troca de administradora</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">Uma mudança com sequência e responsabilidade.</h2>
          <p className="mt-6 max-w-lg leading-7 text-white/75">A transição começa pela compreensão do condomínio. Documentos, contratos, contas e pendências são levantados para que a nova rotina tenha continuidade.</p>
          <a href="/troca-de-administradora" className="focus-ring mt-8 inline-flex items-center gap-2 border-b border-bronze pb-2 font-semibold text-white hover:text-bronze">Entenda a transição <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
        <ol className="grid gap-x-8 sm:grid-cols-2">
          {steps.map((step, index) => (
            <li key={step} className="flex gap-5 border-t border-white/20 py-5">
              <span className="font-serif text-2xl text-bronze">{String(index + 1).padStart(2, "0")}</span>
              <span className="pt-1 text-base leading-6">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
