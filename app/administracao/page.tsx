import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { mediaMap } from "@/data/media";

export const metadata: Metadata = {
  title: "Administração condominial | Aloe Condomínios",
  description:
    "Gestão financeira, documental e operacional para condomínios com acompanhamento próximo e processos claros.",
  alternates: { canonical: "/administracao" }
};

const moments = [
  {
    number: "01",
    eyebrow: "Financeiro e documentação",
    title: "Contas organizadas para decisões mais seguras.",
    text: "Acompanhamos boletos, pagamentos, fundo de caixa, balancetes e documentos para que síndico e conselho encontrem as informações de que precisam.",
    items: ["Rotina financeira acompanhada", "Documentos e contratos organizados", "Prestação de contas clara"],
    image: mediaMap.administration.financial
  },
  {
    number: "02",
    eyebrow: "Assembleias e decisões",
    title: "Cada decisão precisa de contexto e registro.",
    text: "A Aloe apoia pautas, editais, atas e encaminhamentos para transformar deliberações em uma rotina administrativa executável.",
    items: ["Preparação de pautas", "Apoio documental", "Acompanhamento das deliberações"],
    image: mediaMap.administration.assemblies
  },
  {
    number: "03",
    eyebrow: "Operação e fornecedores",
    title: "O planejamento aparece na conservação do condomínio.",
    text: "Demandas, orçamentos e fornecedores são acompanhados com visão do conjunto, preservando a continuidade da operação e a qualidade das áreas comuns.",
    items: ["Organização de demandas", "Apoio em orçamentos", "Acompanhamento de serviços"],
    image: mediaMap.administration.operations
  }
] as const;

export default function AdministrationPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="bg-paper">
          <div className="section-shell grid items-center gap-10 py-12 lg:min-h-[660px] lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-16">
            <div className="max-w-[38rem]">
              <p className="eyebrow">Administração condominial</p>
              <h1 className="mt-4 font-serif text-4xl font-semibold leading-[0.98] text-ink sm:text-5xl md:text-6xl">
                Gestão organizada para o condomínio funcionar por inteiro.
              </h1>
              <p className="mt-6 max-w-[34rem] text-lg leading-8 text-graphite/75">
                Financeiro, documentos, decisões e operação conectados por uma equipe que acompanha a rotina de perto.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/#contato" dataEvent="click_solicitar_proposta">Solicitar proposta</ButtonLink>
                <ButtonLink href="/pequenos-condominios" variant="secondary">Pequenos condomínios</ButtonLink>
              </div>
            </div>
            <div className="relative min-h-[390px] overflow-hidden md:min-h-[520px]">
              <Image src={mediaMap.administration.hero.src} alt={mediaMap.administration.hero.alt} fill priority sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="section-shell">
            <p className="eyebrow">Uma administração, três frentes conectadas</p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
              Clareza nos bastidores. Continuidade na rotina.
            </h2>
          </div>
          <div className="section-shell mt-14 space-y-16 md:space-y-24">
            {moments.map((moment, index) => (
              <article key={moment.number} className="grid items-center gap-9 lg:grid-cols-12 lg:gap-14">
                <div className={`relative min-h-[360px] overflow-hidden lg:col-span-7 lg:min-h-[530px] ${index % 2 ? "lg:order-2" : ""}`}>
                  <Image src={moment.image.src} alt={moment.image.alt} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
                </div>
                <div className={`lg:col-span-5 ${index % 2 ? "lg:order-1" : ""}`}>
                  <div className="flex items-baseline gap-4 border-b border-moss/20 pb-5">
                    <span className="font-serif text-3xl text-bronze">{moment.number}</span>
                    <p className="eyebrow">{moment.eyebrow}</p>
                  </div>
                  <h3 className="mt-6 font-serif text-3xl font-semibold leading-tight text-ink md:text-4xl">{moment.title}</h3>
                  <p className="mt-5 leading-7 text-graphite/75">{moment.text}</p>
                  <ul className="mt-7 border-t border-moss/15">
                    {moment.items.map((item) => <li key={item} className="border-b border-moss/15 py-3 text-sm font-semibold text-graphite/75">{item}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-moss py-16 text-white md:py-20">
          <div className="section-shell grid items-end gap-8 md:grid-cols-[1fr_auto]">
            <div><p className="text-sm font-bold uppercase text-bronze">Próximo passo</p><h2 className="mt-3 max-w-3xl font-serif text-4xl font-semibold md:text-5xl">Uma proposta construída a partir da realidade do condomínio.</h2></div>
            <ButtonLink href="/#contato" variant="secondary" dataEvent="click_solicitar_proposta">Conversar com a Aloe</ButtonLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
