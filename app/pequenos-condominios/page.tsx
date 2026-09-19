import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Administração para pequenos condomínios | Aloe Condomínios",
  description:
    "Planos de administração para condomínios de até 16 unidades, com gestão financeira, documental e opções de limpeza e manutenção.",
  alternates: { canonical: "/pequenos-condominios" }
};

const essentials = [
  "Boletos individualizados e contas comuns",
  "Organização de CNPJ, conta e fundo de caixa",
  "Balancete e prestação de contas",
  "Apoio remoto em questões jurídicas e administrativas"
];

export default function SmallCondominiumsPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="bg-paper py-16 md:py-20">
          <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="eyebrow">Até 16 unidades</p>
              <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl md:text-6xl">
                Administração profissional para pequenos condomínios.
              </h1>
            </div>
            <p className="self-end text-lg leading-8 text-graphite/75">
              Mesmo com poucos apartamentos, a gestão exige contas em dia,
              documentos organizados e decisões acompanhadas. A Aloe estrutura
              essa rotina com atendimento e processos claros.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <h2 className="font-serif text-4xl font-semibold text-ink">Uma base para operar com clareza.</h2>
              <p className="mt-5 leading-7 text-graphite/75">A composição pode evoluir com limpeza mensal e manutenção programada, conforme a modalidade contratada.</p>
            </div>
            <ul className="border-t border-moss/20">
              {essentials.map((item, index) => (
                <li key={item} className="flex gap-5 border-b border-moss/20 py-5 text-graphite/80">
                  <span className="font-serif text-xl text-bronze">0{index + 1}</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-moss py-16 text-white">
          <div className="section-shell grid gap-6 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-4xl font-semibold">Regularização desde o início.</h2>
              <p className="mt-4 leading-7 text-white/75">Para pequenos condomínios, a proposta prevê o custeio da abertura do CNPJ pela Aloe. A situação documental e as condições contratuais são avaliadas em cada proposta.</p>
            </div>
            <div className="self-end lg:text-right"><ButtonLink href="/planos">Comparar planos</ButtonLink></div>
          </div>
        </section>

        <section className="section-shell py-16">
          <h2 className="font-serif text-3xl font-semibold text-ink">Vamos entender o seu condomínio?</h2>
          <p className="mt-4 max-w-2xl leading-7 text-graphite/75">Conte quantas unidades há, onde fica o condomínio e quais serviços são necessários.</p>
          <div className="mt-6"><ButtonLink href="/#contato" dataEvent="click_solicitar_proposta">Solicitar proposta</ButtonLink></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
