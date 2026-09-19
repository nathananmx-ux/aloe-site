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
        <div className="self-center border-l-2 border-moss/25 pl-6 md:pl-10">
          <div className="border-b border-moss/15 pb-6">
            <span className="text-xs font-bold uppercase text-bronze">Quem traz a demanda</span>
            <p className="mt-2 font-serif text-2xl text-ink">Síndico, conselho e moradores</p>
          </div>
          <div className="border-b border-moss/15 py-6">
            <span className="text-xs font-bold uppercase text-bronze">Quem acompanha</span>
            <p className="mt-2 font-serif text-3xl text-moss">Gerente responsável</p>
          </div>
          <div className="pt-6">
            <span className="text-xs font-bold uppercase text-bronze">Quem executa e apoia</span>
            <p className="mt-2 font-serif text-2xl text-ink">Backoffice Aloe</p>
            <p className="mt-3 text-sm leading-7 text-graphite/65">{backoffice.join("  ·  ")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
