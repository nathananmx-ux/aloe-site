import { methodSteps } from "@/data/home";

export function MethodSection() {
  return (
    <section id="metodo" className="bg-moss py-20 text-porcelain md:py-24">
      <div className="mx-auto w-[min(1240px,calc(100%_-_32px))]">
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] xl:gap-10">
          <div className="max-w-xl">
            <p className="text-base font-extrabold text-bronze">Método Aloe</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
              Um método de gestão mais próximo, claro e previsível.
            </h2>
            <p className="mt-5 text-sm font-semibold leading-7 text-white/72">
              A rotina fica mais leve quando diagnóstico, organização,
              acompanhamento e transparência trabalham como uma sequência única.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {methodSteps.map((step, index) => (
              <article
                key={step.title}
                className="flex min-h-[244px] flex-col rounded-lg border border-white/15 bg-white/10 p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-bronze text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-7 font-serif text-2xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/75">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
