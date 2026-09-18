"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

const offers = [
  {
    title: "Gerente especialista com atendimento próximo",
    text: "Um gerente dedicado para acompanhar a rotina do condomínio, apoiar o síndico e facilitar a comunicação com a administração.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=82"
  },
  {
    title: "Conta bancária individual para todos os condomínios",
    text: "Mais organização financeira, controle dos recursos e separação adequada das movimentações de cada condomínio.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=82"
  },
  {
    title: "Valor de administração claro, sem taxas inesperadas",
    text: "Uma proposta objetiva, com mais previsibilidade para o condomínio e menos surpresas na rotina administrativa.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=82"
  },
  {
    title: "Condomínio na palma da mão, pelo app, 24 horas por dia",
    text: "Acesso prático a boletos, informações e facilidades para moradores e síndicos, sempre que necessário.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=82"
  },
  {
    title: "Parcerias e soluções diferenciadas para o condomínio",
    text: "Apoio na indicação de profissionais, serviços e soluções que ajudam a manter a rotina condominial mais organizada.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=82"
  }
];

export function ServicesSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "previous" | "next") => {
    trackRef.current?.scrollBy({
      left: direction === "next" ? 420 : -420,
      behavior: "smooth"
    });
  };

  return (
    <section id="servicos" className="bg-porcelain py-20 md:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow">O que a Aloe te oferece</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
              Recursos práticos para uma administração mais próxima e previsível.
            </h2>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scroll("previous")}
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-md border border-moss/15 text-moss transition hover:border-bronze hover:text-bronze"
              aria-label="Ver ofertas anteriores"
            >
              <ArrowLeft aria-hidden="true" size={19} strokeWidth={1.8} />
            </button>
            <button
              type="button"
              onClick={() => scroll("next")}
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-md border border-moss/15 text-moss transition hover:border-bronze hover:text-bronze"
              aria-label="Ver próximas ofertas"
            >
              <ArrowRight aria-hidden="true" size={19} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-10 flex snap-x gap-5 overflow-x-auto pb-3 [scrollbar-width:thin]"
        >
          {offers.map((offer) => (
            <article
              key={offer.title}
              className="min-h-[450px] w-[min(86vw,390px)] shrink-0 snap-start overflow-hidden rounded-lg border border-moss/10 bg-white shadow-[0_12px_35px_rgba(25,33,29,0.06)]"
            >
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${offer.image})` }}
              />
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold leading-tight text-ink">
                  {offer.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-graphite/70">
                  {offer.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
