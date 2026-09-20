import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { mediaMap } from "@/data/media";

export const metadata: Metadata = {
  title: "Implantação condominial | Aloe Condomínios",
  description:
    "Implantação condominial com organização administrativa, financeira e operacional desde o primeiro dia.",
  alternates: { canonical: "/implantacao" }
};

const audiences = [
  "Condomínios recém-entregues",
  "Condomínios ainda sem estrutura administrativa",
  "Transição de construtora"
] as const;

const structuredItems = [
  "CNPJ",
  "Conta bancária",
  "Cadastros",
  "Boletos",
  "Fornecedores",
  "Documentação",
  "Comunicação",
  "Rotina financeira"
] as const;

const startingSteps = ["Reunião", "Documentação", "Implantação", "Comunicação", "Operação"] as const;

export default function ImplantacaoPage() {
  return (
    <>
      <Header />
      <main className="bg-porcelain">
        <section className="relative isolate overflow-hidden border-b border-moss/10 bg-paper">
          <div className="absolute inset-x-0 top-0 -z-10 h-64 md:inset-0 md:h-full">
            <Image
              src={mediaMap.implantation.hero.src}
              alt={mediaMap.implantation.hero.alt}
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
          <div className="section-shell">
            <div className="grid gap-12 border-b border-moss/20 pb-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="eyebrow">Para quem é</p>
                <h2 className="mt-4 font-serif text-3xl font-semibold text-ink md:text-4xl">
                  Estrutura para começar com clareza.
                </h2>
                <ul className="mt-7 border-t border-moss/20">
                  {audiences.map((item, index) => (
                    <li key={item} className="flex gap-4 border-b border-moss/20 py-4 text-sm font-semibold text-graphite/80">
                      <span className="font-serif text-lg text-bronze">0{index + 1}</span>{item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="eyebrow">O que é estruturado</p>
                <div className="mt-7 grid border-t border-moss/20 sm:grid-cols-2">
                  {structuredItems.map((item, index) => (
                    <div key={item} className="flex gap-4 border-b border-moss/20 py-4 sm:odd:pr-6 sm:even:border-l sm:even:pl-6">
                      <span className="font-serif text-lg text-bronze">{String(index + 1).padStart(2, "0")}</span>
                      <span className="text-sm font-semibold text-graphite/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-14">
              <p className="eyebrow">Como começa</p>
              <ol className="mt-7 grid border-y border-moss/20 sm:grid-cols-5">
                {startingSteps.map((step, index) => (
                  <li key={step} className="border-b border-moss/20 px-4 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
                    <span className="font-serif text-xl text-bronze">{String(index + 1).padStart(2, "0")}</span>
                    <p className="mt-2 text-sm font-semibold text-ink">{step}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-8">
                <ButtonLink href="/#contato" dataEvent="click_solicitar_proposta">
                  Solicitar implantação com a Aloe
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
