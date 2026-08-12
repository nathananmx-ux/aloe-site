"use client";

import { useEffect, useState } from "react";
import { ButtonLink } from "./ButtonLink";

const slides = [
  {
    title: "Administração de condomínios com o cuidado que o seu merece.",
    text: "Uma gestão moderna e inteligente, com tecnologia, gerente exclusivo para o síndico e atendimento próximo, porque cada condomínio, pequeno, médio ou grande, merece atenção de verdade.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=82"
  },
  {
    title: "Soluções inteligentes para todos os tipos de condomínio.",
    text: "Atendemos condomínios residenciais e comerciais de todos os portes, sempre com foco em organização, economia, transparência e um atendimento próximo para síndicos e moradores.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=2200&q=82"
  },
  {
    title: "Seu condomínio tem até 16 unidades? Temos um plano ideal para você.",
    text: "Especialistas em condomínios pequenos. Entendemos as necessidades desse perfil e oferecemos soluções sob medida para uma gestão próxima, organizada e eficiente.",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=2200&q=82"
  }
];

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % slides.length);
    }, 6200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-ink">
      <div className="absolute inset-0 -z-10">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`hero-slide-image absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
              active === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
        <div className="hero-contrast-overlay absolute inset-0" />
      </div>

      <div className="section-shell flex min-h-[68svh] items-center py-16 md:py-20">
        <div className="max-w-4xl text-porcelain">
          <p className="mb-5 text-base font-extrabold text-bronze">
            Aloe Condomínios
          </p>
          <div className="grid min-h-[320px] items-center">
            {slides.map((slide, index) => (
              <div
                key={slide.title}
                className={`col-start-1 row-start-1 transition duration-700 ${
                  active === index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
              >
                <h1 className="hero-copy-shadow font-serif text-4xl font-semibold leading-[1.05] text-white md:text-6xl 2xl:text-7xl">
                  {slide.title}
                </h1>
                <p className="hero-copy-shadow mt-6 max-w-3xl text-lg font-medium leading-8 text-white/92">
                  {slide.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/#contato">Solicitar proposta</ButtonLink>
            <ButtonLink href="/planos" variant="secondary">
              Conhecer planos
            </ButtonLink>
          </div>

          <div className="mt-10 flex items-center">
            <div className="flex gap-2" aria-label="Controle dos slides">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    active === index ? "w-10 bg-bronze" : "w-5 bg-white/35"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
