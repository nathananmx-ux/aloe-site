const problems = [
  "Documentos espalhados",
  "Prestação de contas difícil de entender",
  "Demandas sem responsável",
  "Fornecedores sem acompanhamento",
  "Decisões de assembleia que não avançam",
  "Síndico sobrecarregado"
];

export function ProblemSection() {
  return (
    <section className="border-y border-moss/10 bg-porcelain py-16 md:py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="eyebrow">O que resolvemos</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
            Quando a gestão não está organizada, o problema aparece em todo lugar.
          </h2>
        </div>
        <div>
          <ul className="grid sm:grid-cols-2">
            {problems.map((problem) => (
              <li key={problem} className="border-b border-moss/15 py-4 pr-5 text-sm font-semibold leading-6 text-graphite/80">{problem}</li>
            ))}
          </ul>
          <p className="mt-7 font-serif text-2xl text-moss">A Aloe organiza essas frentes em uma única gestão.</p>
        </div>
      </div>
    </section>
  );
}
