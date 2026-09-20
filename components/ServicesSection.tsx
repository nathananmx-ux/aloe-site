"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { temporaryMedia } from "@/data/media";

const areas = [
  {
    number: "01",
    title: "Financeiro",
    text: "Boletos, pagamentos, despesas e prestação de contas.",
    image: temporaryMedia.administration
  },
  {
    number: "02",
    title: "Administrativo",
    text: "Cadastros, documentos, contratos e histórico.",
    image: temporaryMedia.administration
  },
  {
    number: "03",
    title: "Assembleias",
    text: "Editais, pautas, atas e acompanhamento das decisões.",
    image: temporaryMedia.assembly
  },
  {
    number: "04",
    title: "Cobrança",
    text: "Acompanhamento de inadimplência e apoio às medidas cabíveis.",
    image: temporaryMedia.administration
  },
  {
    number: "05",
    title: "Operação",
    text: "Fornecedores, orçamentos, manutenção e serviços contratados.",
    image: temporaryMedia.residentialHall
  },
  {
    number: "06",
    title: "Comunicação",
    text: "Interlocução organizada com síndico, conselho e moradores.",
    image: temporaryMedia.commonArea
  }
];

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeArea = areas[activeIndex];

  return (
    <section id="administracao" className="bg-paper py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-5 border-b border-moss/15 pb-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="eyebrow">O que a Aloe organiza</p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.05] text-ink sm:text-5xl md:text-6xl">
              A rotina inteira precisa conversar.
            </h2>
          </div>
          <p className="max-w-xl self-end text-base leading-7 text-graphite/75 lg:col-span-5 lg:justify-self-end">
            Financeiro, documentos, decisões e operação acompanhados como partes da mesma gestão.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-mist">
              <Image
                key={activeArea.image.src}
                src={activeArea.image.src}
                alt={activeArea.image.alt}
                fill
                sizes="(max-width: 1023px) 100vw, 42vw"
                className="services-active-image object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-6 pb-6 pt-24">
                <p className="text-xs font-bold uppercase text-white/75">{activeArea.number}</p>
                <p className="mt-1 font-serif text-2xl text-white">{activeArea.title}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-moss/20 lg:col-span-7">
            {areas.map((area, index) => {
              const isActive = activeIndex === index;
              return (
                <div key={area.number} className="border-b border-moss/20">
                  <button
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={`service-panel-${index}`}
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    className="focus-ring grid w-full grid-cols-[2.5rem_1fr_auto] items-start gap-3 py-5 text-left sm:grid-cols-[3.5rem_1fr_auto] md:py-6"
                  >
                    <span className={`pt-1 text-xs font-bold transition ${isActive ? "text-bronze" : "text-moss/45"}`}>
                      {area.number}
                    </span>
                    <span>
                      <span className={`block font-serif text-2xl transition md:text-3xl ${isActive ? "text-moss" : "text-ink"}`}>
                        {area.title}
                      </span>
                      <span
                        id={`service-panel-${index}`}
                        className={`${isActive ? "block" : "hidden"} mt-2 max-w-xl text-sm leading-6 text-graphite/70 lg:block`}
                      >
                        {area.text}
                      </span>
                    </span>
                    <ChevronDown
                      size={20}
                      className={`mt-1 text-moss/55 transition lg:hidden ${isActive ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
