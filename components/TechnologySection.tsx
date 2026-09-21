import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { mediaMap } from "@/data/media";

const features = ["2ª via de boletos", "Balancetes", "Comunicados", "Documentos"];

export function TechnologySection() {
  return (
    <section id="tecnologia" className="overflow-hidden bg-deep py-20 text-white md:py-28">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <p className="text-sm font-bold uppercase text-bronze">Portal do Morador • Tecnologia CondoNow</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">
            O condomínio na palma da mão.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/80">
            Boletos, balancetes, comunicados e documentos organizados para facilitar o acesso às informações do condomínio.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-4 border-y border-white/15 py-6">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 text-sm font-semibold">
                <Check size={17} className="shrink-0 text-bronze" aria-hidden="true" />
                {feature}
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-white/60">
            Funcionalidades podem variar conforme a configuração de cada condomínio.
          </p>
          <a href="/area-do-cliente" className="focus-ring mt-8 inline-flex items-center gap-2 border-b border-bronze pb-2 font-semibold text-white hover:text-bronze">
            Área do Cliente <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="relative min-h-[400px] border-b border-white/20 sm:min-h-[600px] lg:col-span-7" aria-label="Telas oficiais do CondoNow">
          <div className="theme-preserve-white absolute bottom-0 left-[8%] z-20 aspect-[9/16] w-[48%] max-w-[285px] overflow-hidden rounded-[1.35rem] border-[6px] border-[#17231f] bg-white shadow-[0_24px_50px_rgba(0,0,0,0.24)] sm:left-[14%] sm:w-[43%]">
            <Image
              src={mediaMap.home.condoNow.home.src}
              alt={mediaMap.home.condoNow.home.alt}
              width={380}
              height={675}
              sizes="(max-width: 640px) 48vw, 285px"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="theme-preserve-white absolute bottom-0 right-[7%] z-10 aspect-[9/16] w-[42%] max-w-[245px] overflow-hidden rounded-[1.2rem] border-[6px] border-[#17231f] bg-white opacity-90 shadow-[0_18px_38px_rgba(0,0,0,0.18)] sm:right-[13%] sm:w-[37%]">
            <Image
              src={mediaMap.home.condoNow.financial.src}
              alt={mediaMap.home.condoNow.financial.alt}
              width={380}
              height={675}
              sizes="(max-width: 640px) 42vw, 245px"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
