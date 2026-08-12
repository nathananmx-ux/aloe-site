import type { Metadata } from "next";
import { ArrowRight, BookOpenText } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Blog Aloe | Conteúdos sobre administração condominial",
  description:
    "Conteúdos práticos da Aloe sobre administração condominial, finanças, pequenos condomínios, boletos, assembleias e síndico profissional."
};

const articles = [
  {
    category: "Gestão condominial",
    title: "Como organizar a administração de um pequeno condomínio",
    summary:
      "Pontos essenciais para estruturar documentos, finanças, comunicação e rotina administrativa sem criar burocracia excessiva."
  },
  {
    category: "Síndico profissional",
    title: "Síndico profissional: quando vale a pena contratar?",
    summary:
      "Entenda quando o apoio profissional ajuda o condomínio a ganhar previsibilidade, método e suporte nas decisões da rotina."
  },
  {
    category: "Financeiro",
    title: "Boleto individualizado: como isso melhora a rotina do condomínio",
    summary:
      "Como a emissão organizada de boletos facilita pagamentos, acompanhamento financeiro e prestação de contas."
  },
  {
    category: "Inadimplência",
    title: "Como reduzir a inadimplência em condomínios pequenos",
    summary:
      "Práticas de acompanhamento, comunicação e organização financeira para diminuir atrasos sem perder a relação com moradores."
  },
  {
    category: "Regularização",
    title: "CNPJ do condomínio: por que regularizar e como funciona",
    summary:
      "Um panorama simples sobre a importância da regularização para contas, contratos, obrigações e segurança administrativa."
  },
  {
    category: "Assembleia",
    title: "Assembleia de condomínio: cuidados para evitar conflitos",
    summary:
      "Como preparar pauta, documentos e comunicação para assembleias mais objetivas, claras e produtivas."
  }
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="bg-porcelain">
        <section className="border-b border-moss/10 bg-paper py-20 md:py-24">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="eyebrow">Conteúdo Aloe</p>
              <h1 className="mt-3 font-serif text-5xl font-semibold leading-tight text-ink md:text-6xl">
                Blog Aloe
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite/75">
                Conteúdos práticos sobre administração condominial, pequenos
                condomínios, finanças, manutenção e rotina do síndico.
              </p>
            </div>

            <div className="rounded-lg border border-moss/10 bg-white p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-moss/10 text-moss">
                  <BookOpenText aria-hidden="true" size={24} strokeWidth={1.7} />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-ink">
                    Orientação para decisões melhores
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-graphite/70">
                    A página começa estática, mas já nasce preparada para virar
                    uma biblioteca de artigos da Aloe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="section-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                id={article.title.toLowerCase().replaceAll(" ", "-")}
                key={article.title}
                className="flex min-h-[300px] flex-col rounded-lg border border-moss/10 bg-white p-6 shadow-[0_12px_35px_rgba(25,33,29,0.05)]"
              >
                <span className="w-fit rounded-md bg-bronze/10 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.08em] text-bronze">
                  {article.category}
                </span>
                <h2 className="mt-5 font-serif text-2xl font-semibold leading-tight text-ink">
                  {article.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-graphite/70">
                  {article.summary}
                </p>
                <a
                  href={`/blog#${article.title.toLowerCase().replaceAll(" ", "-")}`}
                  className="focus-ring mt-auto inline-flex items-center gap-2 rounded-md pt-6 text-sm font-bold text-moss hover:text-bronze"
                >
                  <span>Ler artigo</span>
                  <ArrowRight aria-hidden="true" size={17} strokeWidth={1.8} />
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
