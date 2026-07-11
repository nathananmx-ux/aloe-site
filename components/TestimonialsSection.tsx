import { Quote } from "lucide-react";
import { testimonials } from "@/data/home";

export function TestimonialsSection() {
  return (
    <section className="bg-porcelain py-20 md:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Depoimentos</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Relatos de quem acompanha a rotina do condomínio de perto.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={`${testimonial.name}-${testimonial.role}`}
              className="rounded-lg border border-moss/10 bg-white p-6 shadow-[0_12px_35px_rgba(25,33,29,0.05)]"
            >
              <Quote
                aria-hidden="true"
                className="text-bronze"
                size={27}
                strokeWidth={1.7}
              />
              <p className="mt-6 text-sm leading-7 text-graphite/75">
                “{testimonial.quote}”
              </p>
              <div className="mt-8 border-t border-moss/10 pt-5">
                <strong className="block text-sm text-ink">{testimonial.name}</strong>
                <span className="mt-1 block text-xs font-semibold text-graphite/60">
                  {testimonial.role} - {testimonial.condo}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
