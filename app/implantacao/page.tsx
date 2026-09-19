import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Implantação condominial | Aloe Condomínios",
  description:
    "Implantação condominial com organização administrativa, financeira e operacional desde o primeiro dia.",
  alternates: { canonical: "/implantacao" }
};

const steps = [
  "Reunião inicial de implantação",
  "Levantamento de documentos",
  "Definição dos primeiros itens administrativos",
  "Organização de CNPJ e conta bancária",
  "Estruturação de boletos e cobranças",
  "Apoio na comunicação com moradores",
  "Alinhamento com construtora, síndico e conselho",
  "Planejamento da rotina operacional"
];

export default function ImplantacaoPage() {
  return (
    <>
      <Header />
      <main className="bg-porcelain">
        <section className="relative isolate overflow-hidden border-b border-moss/10 bg-paper">
          <div className="absolute inset-x-0 top-0 -z-10 h-64 md:inset-0 md:h-full">
            <Image
              src="/images/implantacao-condominio.png"
              alt="Imagem ilustrativa da entrada de um condomínio recém-entregue"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[72%_center] md:object-center"
            />
          </div>
          <div className="section-shell relative pb-12 pt-[19rem] md:py-24">
            <div className="max-w-[34rem]">
              <p className="eyebrow">Implantação</p>
              <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl md:text-6xl">
                Implantação condominial
              </h1>
              <p className="mt-6 text-xl font-semibold leading-8 text-ink">
                Administração organizada desde o primeiro dia.
              </p>
              <p className="mt-4 max-w-[31rem] text-base leading-7 text-graphite/80">
                A Aloe acompanha condomínios em fase de implantação para
                organizar os primeiros passos administrativos, financeiros e
                operacionais desde a entrega das unidades.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-ink">
                Estrutura para começar com clareza.
              </h2>
              <p className="mt-5 leading-7 text-graphite/75">
                A implantação é o momento em que o condomínio precisa estruturar
                sua rotina: dados cadastrais, CNPJ, organização financeira,
                boletos, conta bancária, comunicação com moradores, primeiros
                prestadores e alinhamento com síndico, conselho ou construtora.
              </p>
              <p className="mt-4 leading-7 text-graphite/75">
                A Aloe atua nesse processo para que o condomínio seja entregue
                com uma administração já estruturada, reduzindo improvisos e
                facilitando o início da operação.
              </p>
              <div className="mt-8">
                <ButtonLink href="/#contato" dataEvent="click_solicitar_proposta">
                  Solicitar implantação com a Aloe
                </ButtonLink>
              </div>
            </div>

            <ol className="grid border-t border-moss/20 sm:grid-cols-2">
              {steps.map((step, index) => (
                <li
                  key={step}
                  className="grid min-w-0 grid-cols-[2.25rem_minmax(0,1fr)] gap-3 border-b border-moss/20 py-5 sm:odd:pr-5 sm:even:border-l sm:even:pl-5"
                >
                  <span className="font-serif text-xl text-bronze">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-sm font-semibold leading-6 text-graphite">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
