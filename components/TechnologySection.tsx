import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { condoNowMedia } from "@/data/media";

const features = ["2ª via de boletos", "Balancetes", "Comunicados", "Documentos"];

export function TechnologySection() {
  return (
    <section id="tecnologia" className="overflow-hidden bg-moss py-20 text-white md:py-24">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
        <div className="relative min-h-[480px] sm:min-h-[610px]" aria-label="Telas oficiais do CondoNow">
          {condoNowMedia.slice(0, 3).map((screen, index) => (
            <div
              key={screen.src}
              className={`absolute bottom-0 aspect-[9/16] overflow-hidden rounded-[1.35rem] border-[6px] border-[#17231f] bg-white shadow-2xl ${
                index === 0
                  ? "left-0 z-10 w-[40%] -rotate-3 sm:w-[36%]"
                  : index === 1
                    ? "left-1/2 z-30 w-[48%] -translate-x-1/2 sm:w-[42%]"
                    : "right-0 z-20 w-[40%] rotate-3 sm:w-[36%]"
              }`}
            >
              <Image src={screen.src} alt={screen.alt} width={380} height={675} sizes="(max-width: 640px) 44vw, 260px" className="h-full w-full object-cover object-top" />
            </div>
          ))}
          <div className="absolute left-1/2 top-3 -translate-x-1/2 whitespace-nowrap border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur-sm">
            Portal do Morador • CondoNow
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase text-[#ddb98c]">Tecnologia utilizada pela Aloe</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Informação organizada e acessível.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/80">
            A Aloe utiliza o CondoNow para facilitar o acesso dos moradores às informações do condomínio.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-white/15 py-6">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 text-sm font-semibold">
                <Check size={18} className="text-[#ddb98c]" aria-hidden="true" />
                {feature}
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-white/60">
            Funcionalidades disponíveis podem variar conforme a configuração de cada condomínio.
          </p>
          <a href="/area-do-cliente" className="focus-ring mt-8 inline-flex items-center gap-2 border-b border-[#ddb98c] pb-2 font-semibold text-white hover:text-[#ddb98c]">
            Área do Cliente <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
