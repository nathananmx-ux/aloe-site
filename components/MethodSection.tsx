import { methodSteps } from "@/data/home";

export function MethodSection() {
  return (
    <section id="metodo" className="scroll-mt-16 bg-deep py-16 text-white md:py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-bold uppercase text-bronze">Método Aloe</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">Um método para colocar o condomínio sob controle.</h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-white/70">
            Diagnóstico, organização, gestão e transparência formam uma sequência de trabalho.
            Cada etapa dá clareza à próxima.
          </p>
        </div>
        <ol className="relative border-y border-white/20 py-3">
          <span className="absolute bottom-12 left-[1.35rem] top-12 w-px bg-gradient-to-b from-bronze via-white/25 to-bronze" aria-hidden="true" />
          {methodSteps.map((step, index) => (
            <li key={step.title} className="relative grid grid-cols-[2.75rem_1fr] gap-5 border-b border-white/15 py-6 last:border-b-0 sm:grid-cols-[3.5rem_1fr] sm:gap-7">
              <span className="relative z-10 grid size-11 place-items-center rounded-full border border-bronze bg-deep text-xs font-bold text-bronze sm:size-12">{String(index + 1).padStart(2, "0")}</span>
              <div className="sm:grid sm:grid-cols-[0.42fr_0.58fr] sm:gap-6">
                <h3 className="font-serif text-2xl text-white sm:text-3xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70 sm:mt-1">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
