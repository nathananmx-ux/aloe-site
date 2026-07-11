import { AlertCircle } from "lucide-react";
import { painPoints } from "@/data/home";

export function ProblemSection() {
  return (
    <section id="gestao" className="bg-paper py-20 md:py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Gestão com método</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Seu condomínio não precisa depender de improviso.
          </h2>
          <p className="mt-6 text-lg leading-8 text-graphite/75">
            Administrar um condomínio exige método, responsabilidade e
            acompanhamento constante. Quando a gestão não está bem estruturada,
            o síndico passa a lidar com cobranças excessivas, conflitos
            recorrentes, prestação de contas confusa, inadimplência crescente e
            decisões sem respaldo técnico.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {painPoints.map((point) => (
            <article
              key={point}
              className="rounded-lg border border-moss/10 bg-porcelain p-5 shadow-[0_12px_35px_rgba(25,33,29,0.06)]"
            >
              <AlertCircle
                aria-hidden="true"
                className="mb-5 text-clay"
                size={24}
                strokeWidth={1.7}
              />
              <h3 className="text-base font-semibold leading-6 text-ink">{point}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
