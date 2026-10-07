import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Blog Aloe | Gestão e rotina condominial",
  description:
    "Conteúdos da Aloe Condomínios sobre administração, implantação e organização da rotina condominial.",
  alternates: { canonical: "/blog" }
};

const articles = [
  {
    number: "01",
    category: "Gestão",
    title: "Como organizar a administração de um pequeno condomínio",
    text: "Uma visão prática sobre documentos, contas, responsabilidades e rotinas que ajudam a manter a gestão organizada."
  },
  {
    number: "02",
    category: "Síndico profissional",
    title: "Síndico profissional: quando vale a pena contratar?",
    text: "Os contextos em que uma atuação profissional pode trazer mais continuidade, mediação e clareza para o condomínio."
  },
  {
    number: "03",
    category: "Financeiro",
    title: "Boleto individualizado: como isso melhora a rotina do condomínio",
    text: "Como a individualização contribui para a organização da arrecadação e para o acompanhamento financeiro."
  },
  {
    number: "04",
    category: "Cobrança",
    title: "Como reduzir a inadimplência em condomínios pequenos",
    text: "Medidas de organização, comunicação e acompanhamento que ajudam a cuidar da saúde financeira condominial."
  },
  {
    number: "05",
    category: "Regularização",
    title: "CNPJ do condomínio: por que regularizar e como funciona",
    text: "O papel do CNPJ na estrutura administrativa e os principais passos para manter a documentação regular."
  },
  {
    number: "06",
    category: "Convivência",
    title: "Assembleia de condomínio: cuidados para evitar conflitos",
    text: "Preparação, comunicação e registro como bases para reuniões mais objetivas e decisões melhor compreendidas."
  }
] as const;

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="bg-porcelain">
        <section className="border-b border-moss/15 bg-paper py-20 md:py-28">
          <div className="section-shell">
            <p className="eyebrow">Conteúdo Aloe</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-[0.98] text-ink sm:text-5xl md:text-6xl">
              Blog Aloe
            </h1>
            <p className="mt-7 max-w-[54rem] border-t border-moss/20 pt-6 text-base leading-8 text-graphite/75 md:text-lg">
              Conteúdos criados para ajudar síndicos, conselhos e moradores a
              entender melhor a rotina condominial, com orientações práticas
              sobre gestão, finanças, regularização e convivência.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="section-shell">
            <div className="max-w-3xl">
              <p className="eyebrow">Artigos</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-ink sm:text-4xl">
                Orientações para a rotina condominial.
              </h2>
            </div>

            <div className="mt-10 grid gap-px overflow-hidden border border-moss/20 bg-moss/20 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <article
                  key={article.number}
                  className="flex min-h-[300px] flex-col bg-porcelain p-7 md:p-8"
                >
                  <div className="flex items-baseline justify-between gap-4 border-b border-moss/15 pb-5">
                    <p className="text-xs font-bold uppercase text-moss">
                      {article.category}
                    </p>
                    <span className="font-serif text-xl text-bronze">
                      {article.number}
                    </span>
                  </div>
                  <h3 className="mt-7 font-serif text-2xl font-semibold leading-tight text-ink md:text-[1.7rem]">
                    {article.title}
                  </h3>
                  <p className="mt-auto pt-7 text-sm leading-7 text-graphite/75">
                    {article.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
