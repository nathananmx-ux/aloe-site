"use client";

import { useEffect, useState } from "react";
import { ButtonLink } from "./ButtonLink";

const slides = [
  {
    title: "Administração condominial com clareza e proximidade.",
    text: "A Aloe apoia síndicos e conselhos com organização financeira, gerente dedicado e processos claros. Atendimento no ABCDM e na Grande São Paulo.",
    image:
      "https://images.unsplash.com/photo-1760235674447-fe0cc115b697?auto=format&fit=crop&w=2200&q=82",
    visual: "https://images.unsplash.com/photo-1774161140968-1320b44a634c?auto=format&fit=crop&w=1000&q=82",
    visualAlt: "Edifícios residenciais com área verde"
  },
  {
    title: "Mais controle para a rotina do seu condomínio.",
    text: "Contas organizadas, comunicação clara e apoio ao síndico nas decisões do dia a dia, em condomínios residenciais e comerciais.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=82",
    visual: "https://images.unsplash.com/photo-1767556246380-5dfe3a448222?auto=format&fit=crop&w=1000&q=82",
    visualAlt: "Edifício residencial com varandas"
  },
  {
    title: "Planos para condomínios de até 16 unidades.",
    text: "Para pequenos condomínios, planos com serviços definidos e suporte adequado ao tamanho da operação. Compare as opções e converse com a equipe.",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=2200&q=82",
    visual: "https://images.unsplash.com/photo-1760235674447-fe0cc115b697?auto=format&fit=crop&w=1000&q=82",
    visualAlt: "Edifício residencial com varandas"
  }
];

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setTimeout(() => {
      setActive((value) => (value + 1) % slides.length);
    }, 9500);

    return () => window.clearTimeout(timer);
  }, [active, paused]);

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
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

      <div className="section-shell grid min-h-[68svh] items-center gap-8 py-12 text-porcelain md:py-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div>
          <p className="mb-5 text-base font-extrabold text-bronze">
            Aloe Condomínios
          </p>
          <div className="grid min-h-[320px] items-center">
            {slides.map((slide, index) => (
              <div
                key={slide.title}
                aria-hidden={active !== index}
                className={`col-start-1 row-start-1 transition duration-700 ${
                  active === index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
              >
                <h1 className="hero-copy-shadow font-serif text-4xl font-semibold leading-[1.05] text-white md:text-5xl 2xl:text-6xl">
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
        <div className="relative hidden h-[380px] lg:block" aria-hidden="true">
          {slides.map((slide, index) => (
            <img
              key={slide.title}
              src={slide.visual}
              alt=""
              className={`hero-side-photo absolute inset-0 h-full w-full object-cover object-[center_58%] transition-opacity duration-700 ${
                active === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
