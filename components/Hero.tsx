"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { condoNowMedia, temporaryMedia } from "@/data/media";

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
    kind: "photo"
  },
  {
    eyebrow: "Especialistas em pequenos condomínios",
    title: "Seu condomínio é pequeno. A administração não precisa ser improvisada.",
    description:
      "Planos especiais para condomínios de até 16 unidades, combinando administração, limpeza e manutenção conforme a necessidade.",
    image: temporaryMedia.smallCondo.src,
    imageAlt: temporaryMedia.smallCondo.alt,
    primary: { label: "Conhecer os planos", href: "/planos" },
    kind: "photo"
  },
  {
    eyebrow: "Portal do Morador • Tecnologia CondoNow",
    title: "O condomínio na palma da mão.",
    description:
      "Informações importantes disponíveis de forma organizada para facilitar a rotina dos moradores.",
    primary: { label: "Conhecer como funciona", href: "/#tecnologia" },
    kind: "technology"
  },
  {
    eyebrow: "Gestão administrativa e operacional",
    title: "Administração que vai além do boleto.",
    description:
      "Planos que podem integrar gestão administrativa, limpeza e serviços de manutenção em uma única solução.",
    image: temporaryMedia.maintenance.src,
    imageAlt: temporaryMedia.maintenance.alt,
    primary: { label: "Comparar os planos", href: "/planos" },
    kind: "photo"
  }
] as const;

const buttonBase =
  "focus-ring inline-flex min-h-12 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition";

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [manualPause, setManualPause] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(query.matches);
    updatePreference();
    query.addEventListener("change", updatePreference);
    return () => query.removeEventListener("change", updatePreference);
  }, []);

  const moveTo = useCallback((index: number, fromInteraction = false) => {
    setActiveIndex((index + slides.length) % slides.length);
    if (!fromInteraction) return;

    setManualPause(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setManualPause(false), 9000);
  }, []);

  useEffect(() => {
    if (hovered || focused || manualPause || reducedMotion) return;
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [focused, hovered, manualPause, reducedMotion]);

  useEffect(
    () => () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    },
    []
  );

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
          const isTechnology = slide.kind === "technology";

          return (
            <article
              key={slide.title}
              className={`absolute inset-0 transition-opacity duration-700 ${isActive ? "z-10 opacity-100" : "pointer-events-none z-0 opacity-0"}`}
              aria-hidden={!isActive}
              aria-label={`${index + 1} de ${slides.length}`}
            >
              {!isTechnology && "image" in slide ? (
                <>
                  <Image
                    src={slide.image}
                    alt={slide.imageAlt}
                    fill
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="100vw"
                    className={`object-cover ${index === 0 ? "hero-directors-image" : index === 1 ? "hero-condo-image" : "hero-maintenance-image"}`}
                  />
                  <div className="hero-carousel-overlay absolute inset-0" aria-hidden="true" />
                </>
              ) : (
                <div className="absolute inset-0 bg-moss" aria-hidden="true">
                  <div className="hero-technology-pattern absolute inset-0" />
                </div>
              )}

              {isTechnology ? (
                <div className="absolute right-[-2.5rem] top-24 h-[340px] w-[190px] rotate-6 overflow-hidden rounded-[1.25rem] border-[6px] border-[#17231f] bg-white opacity-20 shadow-2xl lg:hidden" aria-hidden="true">
                  <Image src={condoNowMedia[0].src} alt="" width={380} height={675} sizes="190px" className="h-full w-full object-cover object-top" />
                </div>
              ) : null}

              <div className={`section-shell relative grid min-h-[650px] items-center gap-10 py-20 md:min-h-[min(720px,78svh)] lg:grid-cols-[0.95fr_1.05fr] ${isTechnology ? "lg:gap-16" : ""}`}>
                <div className={`max-w-[680px] ${isTechnology ? "pt-4" : ""}`}>
                  <p className="mb-5 inline-flex border-l-2 border-bronze pl-3 text-xs font-bold uppercase text-[#e6c498] sm:text-sm">
                    {slide.eyebrow}
                  </p>
                  {index === 0 ? (
                    <h1 className="font-serif text-[2.65rem] font-semibold leading-[1.02] text-white sm:text-5xl lg:text-[4rem]">
                      {slide.title}
                    </h1>
                  ) : (
                    <h2 className="font-serif text-[2.65rem] font-semibold leading-[1.02] text-white sm:text-5xl lg:text-[4rem]">
                      {slide.title}
                    </h2>
                  )}
                  <p className="mt-6 max-w-[610px] text-base leading-7 text-white/90 md:text-lg md:leading-8">
                    {slide.description}
                  </p>
                  {"support" in slide ? (
                    <p className="mt-4 text-sm font-semibold text-white/75">{slide.support}</p>
                  ) : null}
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

                {isTechnology ? (
                  <div className="hero-phone-stage hidden items-end justify-center lg:flex" aria-label="Telas oficiais do CondoNow">
                    {condoNowMedia.slice(0, 3).map((screen, screenIndex) => (
                      <div
                        key={screen.src}
                        className={`hero-phone hero-phone-${screenIndex + 1} relative overflow-hidden rounded-[1.5rem] border-[7px] border-[#17231f] bg-white shadow-2xl`}
                      >
                        <Image src={screen.src} alt={screen.alt} width={380} height={675} sizes="240px" className="h-full w-full object-cover object-top" />
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          );
        })}

        <div className="section-shell pointer-events-none absolute inset-x-0 bottom-6 z-20 flex items-center justify-between">
          <div className="pointer-events-auto flex items-center gap-2" role="tablist" aria-label="Escolher destaque">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-label={`Mostrar slide ${index + 1}`}
                onClick={() => moveTo(index, true)}
                className={`focus-ring h-2.5 rounded-full transition-all ${activeIndex === index ? "w-9 bg-bronze" : "w-2.5 bg-white/55 hover:bg-white"}`}
              />
            ))}
          </div>
          <div className="pointer-events-auto flex gap-2">
            <button
              type="button"
              aria-label="Slide anterior"
              onClick={() => moveTo(activeIndex - 1, true)}
              className="focus-ring grid size-11 place-items-center rounded-full border border-white/30 bg-ink/35 text-white backdrop-blur-sm transition hover:bg-white hover:text-moss"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Próximo slide"
              onClick={() => moveTo(activeIndex + 1, true)}
              className="focus-ring grid size-11 place-items-center rounded-full border border-white/30 bg-ink/35 text-white backdrop-blur-sm transition hover:bg-white hover:text-moss"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
