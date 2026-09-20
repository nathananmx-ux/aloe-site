"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { temporaryMedia } from "@/data/media";

const AUTOPLAY_DELAY = 6500;

const slides = [
  {
    eyebrow: "Aloe Administradora de Condomínios",
    title: "Administração condominial com clareza e proximidade.",
    description:
      "Gestão financeira, administrativa e operacional com acompanhamento próximo e uma equipe responsável pela rotina do seu condomínio.",
    support: "ABCDM e Grande São Paulo",
    image: "/images/aloe-diretoria-hero.jpg",
    imageAlt: "Diretores da Aloe Administradora de Condomínios",
    primary: { label: "Solicitar uma proposta", href: "/#contato" },
    secondary: { label: "Conhecer a Aloe", href: "/#quem-somos" },
    imageClass: "hero-directors-image"
  },
  {
    eyebrow: "Especialistas em pequenos condomínios",
    title: "Seu condomínio é pequeno. A administração não precisa ser improvisada.",
    description:
      "Planos especiais para condomínios de até 16 unidades, combinando administração, limpeza e manutenção conforme a necessidade.",
    image: temporaryMedia.smallCondo.src,
    imageAlt: temporaryMedia.smallCondo.alt,
    primary: { label: "Conhecer os planos", href: "/planos" },
    imageClass: "hero-condo-image"
  },
  {
    eyebrow: "Gestão administrativa e operacional",
    title: "Administração que vai além do boleto.",
    description:
      "Gestão administrativa, limpeza e serviços de manutenção podem fazer parte de uma única solução.",
    image: temporaryMedia.residentialHall.src,
    imageAlt: temporaryMedia.residentialHall.alt,
    primary: { label: "Comparar os planos", href: "/planos" },
    imageClass: "hero-complete-image"
  }
] as const;

const buttonBase =
  "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition";

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [manualMode, setManualMode] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(query.matches);
    updatePreference();
    query.addEventListener("change", updatePreference);
    return () => query.removeEventListener("change", updatePreference);
  }, []);

  const moveTo = useCallback((index: number, fromInteraction = false) => {
    setActiveIndex((index + slides.length) % slides.length);
    if (fromInteraction) setManualMode(true);
  }, []);

  const autoplayActive = !hovered && !focused && !manualMode && !reducedMotion;

  useEffect(() => {
    if (!autoplayActive) return;
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [autoplayActive]);

  return (
    <section
      id="inicio"
      className="hero-carousel relative isolate overflow-hidden bg-ink text-white"
      aria-roledescription="carrossel"
      aria-label="Destaques da Aloe"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null) return;
        const difference = touchStartX.current - (event.changedTouches[0]?.clientX ?? 0);
        if (Math.abs(difference) > 48) {
          moveTo(activeIndex + (difference > 0 ? 1 : -1), true);
        }
        touchStartX.current = null;
      }}
    >
      <div className="relative min-h-[650px] md:min-h-[min(720px,78svh)]">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <article
              key={slide.title}
              className={`absolute inset-0 transition-opacity duration-700 ${isActive ? "z-10 opacity-100" : "pointer-events-none z-0 opacity-0"}`}
              aria-hidden={!isActive}
              aria-label={`${index + 1} de ${slides.length}`}
            >
              <Image
                src={slide.image}
                alt={slide.imageAlt}
                fill
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="100vw"
                className={`object-cover ${slide.imageClass}`}
              />
              <div className="hero-carousel-overlay absolute inset-0" aria-hidden="true" />

              <div className="section-shell relative grid min-h-[650px] items-start pb-32 pt-12 md:min-h-[min(720px,78svh)] md:pb-28 md:pt-14">
                <div className="max-w-[760px]">
                  <p className="mb-5 inline-flex border-l-2 border-bronze pl-3 text-xs font-bold uppercase text-[#e6c498] sm:text-sm">
                    {slide.eyebrow}
                  </p>
                  {index === 0 ? (
                    <h1 className="font-serif text-[2.65rem] font-semibold leading-[1.02] text-white sm:text-5xl lg:text-[3.75rem]">
                      {slide.title}
                    </h1>
                  ) : (
                    <h2 className={`font-serif font-semibold leading-[1.02] text-white ${index === 1 ? "text-[2.35rem] sm:text-[2.9rem] lg:text-[3.25rem]" : "text-[2.65rem] sm:text-5xl lg:text-[3.75rem]"}`}>
                      {slide.title}
                    </h2>
                  )}
                  <p className="mt-5 max-w-[610px] text-base leading-7 text-white/90 md:text-lg md:leading-8">
                    {slide.description}
                  </p>
                  {"support" in slide ? (
                    <p className="mt-3 text-sm font-semibold text-white/75">{slide.support}</p>
                  ) : null}
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={slide.primary.href}
                      data-event={index === 0 ? "click_solicitar_proposta" : undefined}
                      tabIndex={isActive ? 0 : -1}
                      className={`${buttonBase} bg-bronze text-white hover:bg-white hover:text-moss`}
                    >
                      {slide.primary.label}
                      <ChevronRight size={18} aria-hidden="true" />
                    </a>
                    {"secondary" in slide ? (
                      <a
                        href={slide.secondary.href}
                        tabIndex={isActive ? 0 : -1}
                        className={`${buttonBase} hidden border border-white/35 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-moss sm:inline-flex`}
                      >
                        {slide.secondary.label}
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          );
        })}

        <div className="section-shell pointer-events-none absolute inset-x-0 bottom-5 z-20 flex justify-center md:bottom-7 md:justify-end">
          <div className="pointer-events-auto flex items-center gap-4 border-t border-white/25 pt-3" aria-label="Navegação do carrossel">
            <div className="flex items-center gap-3" role="tablist" aria-label="Escolher destaque">
              {slides.map((slide, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={slide.title}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Mostrar slide ${index + 1}`}
                    onClick={() => moveTo(index, true)}
                    className={`focus-ring flex items-center gap-2 py-1 text-xs font-bold transition ${isActive ? "text-white" : "text-white/55 hover:text-white"}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                    {isActive ? (
                      <span className="hero-progress-track block h-px w-10 overflow-hidden bg-white/30 sm:w-14" aria-hidden="true">
                        <span
                          key={`${activeIndex}-${autoplayActive}`}
                          className={`hero-progress-fill block h-full bg-bronze ${autoplayActive ? "is-running" : "is-static"}`}
                        />
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
            <span className="h-5 w-px bg-white/25" aria-hidden="true" />
            <div className="flex gap-1">
              <button
                type="button"
                aria-label="Slide anterior"
                onClick={() => moveTo(activeIndex - 1, true)}
                className="focus-ring grid size-9 place-items-center text-white/75 transition hover:text-bronze"
              >
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Próximo slide"
                onClick={() => moveTo(activeIndex + 1, true)}
                className="focus-ring grid size-9 place-items-center text-white/75 transition hover:text-bronze"
              >
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
