type CaseStudy = {
  category: "Implantação" | "Troca de administradora" | "Organização financeira" | "Obra" | "Regularização" | "Pequeno condomínio";
  challenge: string;
  action: string;
  result: string;
};

// A seção permanece oculta até existirem resultados aprovados e autorização de publicação.
const approvedCases: CaseStudy[] = [];

export function CaseStudiesSection() {
  if (approvedCases.length === 0) return null;

  return (
    <section className="bg-paper py-20 md:py-24" aria-labelledby="cases-title">
      <div className="section-shell">
        <p className="eyebrow">Experiências reais</p>
        <h2 id="cases-title" className="mt-4 font-serif text-3xl text-ink sm:text-4xl">Casos acompanhados pela Aloe.</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {approvedCases.map((item) => (
            <article key={`${item.category}-${item.challenge}`} className="border-t border-moss/20 pt-6">
              <p className="text-xs font-bold uppercase text-bronze">{item.category}</p>
              <h3 className="mt-5 font-serif text-xl text-ink">Desafio</h3>
              <p className="mt-2 text-sm leading-6 text-graphite/70">{item.challenge}</p>
              <h3 className="mt-5 font-serif text-xl text-ink">Ação Aloe</h3>
              <p className="mt-2 text-sm leading-6 text-graphite/70">{item.action}</p>
              <h3 className="mt-5 font-serif text-xl text-ink">Resultado</h3>
              <p className="mt-2 text-sm leading-6 text-graphite/70">{item.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
