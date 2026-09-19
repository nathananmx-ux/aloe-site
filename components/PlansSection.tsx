import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { plans } from "@/data/plans";
import { temporaryMedia } from "@/data/media";

const visualMessages = [
  { message: "Administração", image: temporaryMedia.administration },
  { message: "Administração + limpeza", image: temporaryMedia.commonArea },
  { message: "Maior frequência de limpeza", image: temporaryMedia.commonArea },
  { message: "Administração + limpeza + manutenção", image: temporaryMedia.maintenance },
  { message: "Gestão mais completa", image: temporaryMedia.maintenance }
];

export function PlansSection() {
  return (
    <section id="planos" className="bg-white py-20 md:py-24">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="eyebrow">Planos para até 16 unidades</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
              Uma base sólida, com serviços proporcionais à rotina.
            </h2>
          </div>
          <p className="self-end text-lg leading-8 text-graphite/75">
            Cinco modalidades evoluem da administração essencial para composições com limpeza e manutenção programada.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 border-y border-moss/20 lg:grid-cols-5">
          {plans.map((plan, index) => {
            const visual = visualMessages[index];
            return (
              <article key={plan.name} className="group border-b border-r border-moss/15 p-3 even:border-r-0 sm:p-4 lg:border-b-0 lg:border-r lg:even:border-r lg:last:border-r-0">
                <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                  <Image
                    src={visual.image.src}
                    alt=""
                    fill
                    loading="lazy"
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 220px"
                    className="object-cover transition duration-500 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" aria-hidden="true" />
                  <span className="absolute bottom-3 left-3 text-xs font-bold uppercase text-white">Nível {plan.level}</span>
                </div>
                <p className="mt-5 text-xs font-bold uppercase text-bronze">{plan.badge}</p>
                <h3 className="mt-1 font-serif text-3xl text-ink">{plan.name}</h3>
                <p className="mt-3 text-xs font-bold uppercase leading-5 text-moss">{visual.message}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-sm leading-6 text-graphite/65">
            Os benefícios e as condições completas de cada modalidade estão detalhados na comparação de planos.
          </p>
          <a href="/planos" data-event="click_comparar_planos" className="focus-ring inline-flex shrink-0 items-center gap-2 border-b border-moss pb-2 font-semibold text-moss hover:text-bronze">
            Comparar modalidades <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
