const areas = [
  { number: "01", title: "Financeiro", text: "Boletos, pagamentos, controle de despesas e prestação de contas." },
  { number: "02", title: "Administrativo", text: "Cadastros, documentos, contratos e histórico do condomínio." },
  { number: "03", title: "Assembleias", text: "Editais, pautas, listas de presença, atas e acompanhamento das decisões." },
  { number: "04", title: "Cobrança", text: "Acompanhamento de inadimplência e apoio às medidas cabíveis." },
  { number: "05", title: "Operação", text: "Fornecedores, orçamentos, manutenção e serviços contratados." },
  { number: "06", title: "Comunicação", text: "Interlocução com síndico, conselho e moradores." }
];

export function ServicesSection() {
  return (
    <section id="administracao" className="bg-paper py-16 md:py-24">
      <div className="section-shell">
        <div className="grid gap-6 border-b border-moss/20 pb-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="eyebrow">Administração Aloe</p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
              Administrar um condomínio vai muito além de emitir boletos.
            </h2>
          </div>
          <p className="max-w-lg text-base leading-8 text-graphite/75">
            Uma boa administração conecta financeiro, documentação, fornecedores,
            assembleias, manutenção e comunicação em uma única operação organizada.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <div key={area.number} className="grid grid-cols-[40px_1fr] gap-3 border-b border-moss/15 py-7 pr-5 md:pr-8">
              <span className="pt-1 text-xs font-bold text-bronze">{area.number}</span>
              <div>
                <h3 className="font-serif text-2xl text-ink">{area.title}</h3>
                <p className="mt-2 text-sm leading-6 text-graphite/70">{area.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
