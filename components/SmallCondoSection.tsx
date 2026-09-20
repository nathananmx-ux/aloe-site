import Image from "next/image";
import { ArrowUpRight, Building2, Sparkles, Wrench } from "lucide-react";
import { mediaMap } from "@/data/media";

const services = [
  { label: "Administração", icon: Building2 },
  { label: "Limpeza", icon: Sparkles },
  { label: "Manutenção", icon: Wrench }
];

export function SmallCondoSection() {
  return (
    <section className="bg-paper py-20 md:py-24">
      <div className="section-shell grid overflow-hidden bg-white lg:grid-cols-[1.02fr_0.98fr]">
        <div className="relative min-h-[360px] lg:min-h-[610px]">
          <Image
            src={mediaMap.home.smallCondominiums.src}
            alt={mediaMap.home.smallCondominiums.alt}
            fill
            loading="lazy"
            sizes="(max-width: 1023px) 100vw, 52vw"
            className="object-cover object-center"
          />
          <div className="absolute left-5 top-5 bg-moss px-4 py-2 text-xs font-bold uppercase text-white shadow-soft">
            Até 16 unidades
          </div>
        </div>
        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
          <p className="eyebrow">Pequenos condomínios</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
            Condomínio pequeno também merece gestão profissional.
          </h2>
          <p className="mt-5 text-base leading-7 text-graphite/75">
            Uma base administrativa organizada, com limpeza e manutenção conforme o plano contratado.
          </p>
          <div className="mt-8 flex flex-col border-y border-moss/15 py-5 sm:flex-row sm:items-center">
            {services.map(({ label, icon: Icon }, index) => (
              <div key={label} className="flex items-center gap-3 py-2 sm:flex-1 sm:flex-col sm:gap-2 sm:border-r sm:border-moss/15 sm:px-3 sm:text-center sm:last:border-r-0">
                <Icon size={22} className="text-bronze" aria-hidden="true" />
                <span className="text-sm font-bold uppercase text-moss">{label}</span>
                {index < services.length - 1 ? <span className="ml-auto text-bronze sm:hidden">+</span> : null}
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-graphite/65">A composição dos serviços depende da modalidade escolhida.</p>
          <a href="/pequenos-condominios" className="focus-ring mt-7 inline-flex w-fit items-center gap-2 border-b border-moss pb-2 font-semibold text-moss hover:text-bronze">
            Saiba como funciona <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
