import { ArrowUpRight } from "lucide-react";

const groups = [
  { number: "01", title: "Base administrativa", text: "Boletos, contas comuns, CNPJ, fundo de caixa e apoio remoto à gestão.", detail: "Basic" },
  { number: "02", title: "Limpeza recorrente", text: "A base administrativa com uma ou duas limpezas mensais das áreas comuns.", detail: "Silver e Gold" },
  { number: "03", title: "Cuidados programados", text: "Rotinas de limpeza e manutenção previstas na composição de cada modalidade.", detail: "Platinum e Black" }
];

export function PlansSection() {
  return (
    <section id="planos" className="bg-white py-20 md:py-24">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div><p className="eyebrow">Planos para até 16 unidades</p><h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">Uma base sólida, com serviços proporcionais à rotina.</h2></div>
          <p className="self-end text-lg leading-8 text-graphite/75">Cinco modalidades partem de uma base administrativa e diferem nos serviços de limpeza e manutenção. A escolha depende do que o seu condomínio precisa e das condições detalhadas na proposta.</p>
        </div>
        <div className="mt-12 grid border-t border-moss/20 md:grid-cols-3">
          {groups.map((group) => (
            <div key={group.number} className="border-b border-moss/20 py-7 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0">
              <p className="text-sm font-bold text-bronze">{group.number} / {group.detail}</p>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-ink">{group.title}</h3>
              <p className="mt-3 leading-7 text-graphite/75">{group.text}</p>
            </div>
          ))}
        </div>
        <a href="/planos" data-event="click_comparar_planos" className="focus-ring mt-9 inline-flex items-center gap-2 border-b border-moss pb-2 font-semibold text-moss hover:text-bronze">Comparar as cinco modalidades <ArrowUpRight size={18} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
