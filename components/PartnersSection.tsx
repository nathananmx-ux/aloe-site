const partnerSlots = [
  "Banco/conta condominial",
  "Condomínios/app",
  "Manutenção",
  "Limpeza",
  "Jurídico",
  "Serviços operacionais"
];

export function PartnersSection() {
  return (
    <section className="bg-paper py-16 md:py-20">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Parceiros Aloe</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ink">
            Soluções e empresas parceiras que apoiam a rotina dos condomínios
            atendidos pela Aloe.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {partnerSlots.map((slot) => (
            <div
              key={slot}
              className="flex min-h-[130px] items-center justify-center rounded-lg border border-moss/10 bg-porcelain px-4 text-center shadow-[0_12px_35px_rgba(25,33,29,0.04)]"
            >
              <span className="text-sm font-bold leading-5 text-graphite/62">
                {slot}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
