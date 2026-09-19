import Image from "next/image";
import { temporaryMedia } from "@/data/media";

const areas = [
  { number: "01", title: "Financeiro", text: "Boletos, pagamentos, controle de despesas e prestação de contas." },
  { number: "02", title: "Administrativo", text: "Cadastros, documentos, contratos e histórico do condomínio." },
  { number: "03", title: "Assembleias", text: "Editais, pautas, listas de presença, atas e acompanhamento das decisões." },
  { number: "04", title: "Cobrança", text: "Acompanhamento de inadimplência e apoio às medidas cabíveis." },
  { number: "05", title: "Operação", text: "Fornecedores, orçamentos, manutenção e serviços contratados." },
  { number: "06", title: "Comunicação", text: "Interlocução com síndico, conselho e moradores." }
];

export function ServicesSection() {
  return (
    <section id="administracao" className="bg-paper py-16 md:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div>
          <p className="eyebrow">O que a Aloe organiza</p>
          <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
            A rotina inteira precisa conversar.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-graphite/75">
            Financeiro, documentos, decisões e operação acompanhados como partes da mesma gestão.
          </p>
          <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-md bg-mist">
            <Image
              src={temporaryMedia.administration.src}
              alt={temporaryMedia.administration.alt}
              fill
              sizes="(max-width: 1023px) 100vw, 44vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent px-6 pb-5 pt-16 text-sm font-semibold text-white">
              Informação organizada para decisões mais claras.
            </div>
          </div>
        </div>
        <div className="grid self-center sm:grid-cols-2">
          {areas.map((area) => (
            <div key={area.number} className="grid grid-cols-[36px_1fr] gap-3 border-b border-moss/15 py-6 sm:odd:pr-6 sm:even:pl-6">
              <span className="pt-1 text-xs font-bold text-bronze">{area.number}</span>
              <div>
                <h3 className="font-serif text-xl text-ink md:text-2xl">{area.title}</h3>
                <p className="mt-2 text-sm leading-6 text-graphite/68">{area.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
