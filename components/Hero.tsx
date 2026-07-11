import { CheckCircle2 } from "lucide-react";
import { managementIndicators } from "@/data/home";
import { ButtonLink } from "./ButtonLink";

export function Hero() {
  return (
    <section id="inicio" className="hero-photo relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-ink/75" />
      <div className="section-shell grid min-h-[62svh] grid-cols-1 items-center gap-10 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:py-10">
        <div className="max-w-3xl text-porcelain">
          <p className="mb-5 text-base font-extrabold text-bronze">
            Aloe Condomínios
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-[1.05] text-white md:text-5xl 2xl:text-6xl">
            Administração condominial para síndicos que querem controle,
            clareza e tranquilidade.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
            A Aloe combina gestão financeira, suporte operacional,
            regularização condominial e acompanhamento próximo para tornar a
            rotina do condomínio mais organizada, transparente e previsível.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contato">Solicitar proposta</ButtonLink>
            <ButtonLink href="#metodo" variant="secondary">
              Conhecer a gestão Aloe
            </ButtonLink>
          </div>
        </div>

        <div className="rounded-lg border border-white/20 bg-porcelain/95 p-5 shadow-soft backdrop-blur md:p-7">
          <div className="flex items-start justify-between gap-6 border-b border-moss/10 pb-5">
            <div>
              <p className="eyebrow">Painel de gestão</p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-ink">
                Rotina sob acompanhamento
              </h2>
            </div>
            <span className="rounded-md bg-moss px-3 py-2 text-xs font-bold text-porcelain">
              Aloe
            </span>
          </div>

          <div className="mt-6 space-y-4">
            {managementIndicators.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-md border border-moss/10 bg-white/70 p-4"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="shrink-0 text-moss"
                  size={20}
                  strokeWidth={1.8}
                />
                <span className="text-sm font-semibold text-graphite">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
