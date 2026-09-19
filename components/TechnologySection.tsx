import { ArrowUpRight } from "lucide-react";

export function TechnologySection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="section-shell grid gap-10 border-b border-moss/15 pb-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="eyebrow">Tecnologia na rotina</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">Informação acessível. Gestão com pessoas responsáveis.</h2>
        </div>
        <div className="self-end">
          <p className="text-lg leading-8 text-graphite/80">A tecnologia apoia o acesso a boletos e informações. Por trás da rotina estão um gerente responsável, o time de backoffice e processos de acompanhamento para o síndico e o conselho.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <p className="border-t border-moss/25 pt-4 text-sm leading-6 text-graphite/75"><strong className="block text-base text-ink">Área do Cliente</strong> Acesso orientado aos canais disponíveis para boletos e atendimento.</p>
            <p className="border-t border-moss/25 pt-4 text-sm leading-6 text-graphite/75"><strong className="block text-base text-ink">Atendimento humano</strong> Acompanhamento das demandas e comunicação com a equipe responsável.</p>
          </div>
          <a href="/area-do-cliente" className="focus-ring mt-8 inline-flex items-center gap-2 font-semibold text-moss underline-offset-4 hover:underline">Acessar a área do cliente <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
