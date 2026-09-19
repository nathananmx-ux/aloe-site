const signals = [
  { title: "Gerente dedicado", detail: "Responsável pela rotina" },
  { title: "Conta do condomínio", detail: "Gestão financeira individualizada" },
  { title: "Portal do morador", detail: "Informações acessíveis" },
  { title: "ABCDM + Grande SP", detail: "Presença regional" }
];

export function AuthorityBar() {
  return (
    <section className="border-b border-moss/15 bg-white" aria-label="Atuação da Aloe">
      <div className="section-shell grid grid-cols-2 lg:grid-cols-4">
        {signals.map((signal) => (
          <div key={signal.title} className="border-b border-moss/10 py-5 pr-3 even:pl-3 lg:border-b-0 lg:border-r lg:px-5 lg:first:pl-0 lg:last:border-r-0">
            <strong className="block font-serif text-lg leading-6 text-moss md:text-xl">{signal.title}</strong>
            <span className="mt-1 block text-xs leading-5 text-graphite/65">{signal.detail}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
