import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Implantação condominial | Aloe Condomínios",
  description:
    "Implantação condominial com organização administrativa, financeira e operacional desde o primeiro dia."
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
        <section className="border-b border-moss/10 bg-paper py-20 md:py-24">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="eyebrow">Implantação</p>
              <h1 className="mt-3 font-serif text-5xl font-semibold leading-tight text-ink md:text-6xl">
                Implantação condominial com administração desde o primeiro dia.
              </h1>
            </div>
            <p className="text-lg leading-8 text-graphite/75">
              A Aloe acompanha condomínios em fase de implantação para organizar
              os primeiros passos administrativos, financeiros e operacionais
              desde a entrega das unidades.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-lg border border-moss/10 bg-white p-7 shadow-soft">
              <h2 className="font-serif text-3xl font-semibold text-ink">
                Estrutura para começar com clareza.
              </h2>
              <p className="mt-5 text-sm leading-7 text-graphite/72">
                A implantação é o momento em que o condomínio precisa estruturar
                sua rotina: dados cadastrais, CNPJ, organização financeira,
                boletos, conta bancária, comunicação com moradores, primeiros
                prestadores e alinhamento com síndico, conselho ou construtora.
              </p>
              <p className="mt-4 text-sm leading-7 text-graphite/72">
                A Aloe atua nesse processo para que o condomínio seja entregue
                com uma administração já estruturada, reduzindo improvisos e
                facilitando o início da operação.
              </p>
              <div className="mt-8">
                <ButtonLink href="/#contato">
                  Solicitar implantação com a Aloe
                </ButtonLink>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {steps.map((step) => (
                <div
                  key={step}
                  className="flex min-h-20 items-start gap-3 rounded-lg border border-moss/10 bg-white px-5 py-4"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-moss"
                    size={20}
                    strokeWidth={1.8}
                  />
                  <span className="text-sm font-semibold leading-6 text-graphite">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
