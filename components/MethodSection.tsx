import { methodSteps } from "@/data/home";

export function MethodSection() {
  return (
    <section id="metodo" className="scroll-mt-16 bg-moss py-16 text-white md:py-24">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase text-[#d9b383]">Método Aloe</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">Um método para colocar o condomínio sob controle.</h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-white/75">
            Diagnóstico, organização, gestão e transparência formam uma sequência de trabalho.
            Cada etapa dá clareza à próxima.
          </p>
        </div>
        <ol className="mt-12 grid border-t border-white/30 md:grid-cols-4">
          {methodSteps.map((step, index) => (
            <li key={step.title} className="border-b border-white/20 py-6 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
              <span className="text-sm font-bold text-[#d9b383]">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 font-serif text-2xl text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/75">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
