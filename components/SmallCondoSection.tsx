import { ArrowUpRight } from "lucide-react";

export function SmallCondoSection() {
  return (
    <section className="bg-paper py-20 md:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div><p className="eyebrow">Até 16 unidades</p><h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">Condomínio pequeno também merece gestão profissional.</h2></div>
        <div className="self-end">
          <p className="text-lg leading-8 text-graphite/80">Uma operação menor não elimina boletos, contas, documentação e decisões coletivas. A Aloe organiza essa base administrativa e oferece opções de limpeza e manutenção de acordo com o plano contratado.</p>
          <p className="mt-5 leading-7 text-graphite/70">Para pequenos condomínios, a proposta prevê o custeio da abertura do CNPJ pela Aloe. A necessidade de regularização e as condições da contratação são avaliadas na proposta.</p>
          <a href="/pequenos-condominios" className="focus-ring mt-8 inline-flex items-center gap-2 font-semibold text-moss underline-offset-4 hover:underline">Saiba como funciona <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
