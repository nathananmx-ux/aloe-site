import { Check } from "lucide-react";
import { audienceItems } from "@/data/home";

export function AudienceSection() {
  return (
    <section className="bg-paper py-20 md:py-24">
      <div className="section-shell grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Para quem é</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Para condomínios que querem profissionalizar a gestão.
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {audienceItems.map((item) => (
            <div
              key={item}
              className="flex min-h-16 items-center gap-3 rounded-lg border border-moss/10 bg-porcelain px-5 py-4"
            >
              <Check
                aria-hidden="true"
                className="shrink-0 text-moss"
                size={19}
                strokeWidth={1.9}
              />
              <span className="text-sm font-semibold leading-6 text-graphite">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
