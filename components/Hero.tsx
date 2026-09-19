import Image from "next/image";
import { ButtonLink } from "./ButtonLink";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-ink text-white">
      <Image
        src="/images/aloe-diretoria-hero.jpg"
        alt="Diretor da Aloe em ambiente de trabalho"
        fill
        priority
        sizes="100vw"
        className="hero-main-image object-cover"
      />
      <div className="hero-main-overlay absolute inset-0" aria-hidden="true" />
      <div className="section-shell relative flex min-h-[580px] items-center py-14 md:min-h-[min(680px,74svh)] md:py-20">
        <div className="max-w-[710px]">
          <p className="mb-5 text-sm font-bold uppercase text-[#d9b383]">
            Aloe Administradora de Condomínios
          </p>
          <h1 className="max-w-[680px] font-serif text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Administração condominial organizada, próxima e transparente.
          </h1>
          <p className="mt-6 max-w-[610px] text-base leading-7 text-white/90 md:text-lg md:leading-8">
            Gestão financeira, administrativa e operacional com gerente dedicado,
            processos claros e tecnologia para simplificar a rotina do seu condomínio.
          </p>
          <p className="mt-5 text-sm font-semibold text-white/80">
            Atendimento no ABCDM e Grande São Paulo.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/#contato" dataEvent="click_solicitar_proposta">Solicitar uma proposta</ButtonLink>
            <ButtonLink href="/#metodo" variant="secondary">
              Conhecer como trabalhamos
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
