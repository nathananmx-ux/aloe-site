import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Blog Aloe | Gestão e rotina condominial",
  description:
    "Conteúdos da Aloe Condomínios sobre administração, implantação e organização da rotina condominial.",
  alternates: { canonical: "/blog" }
};

const guides = [
  {
    number: "01",
    category: "Administração",
    title: "O que uma administração condominial precisa organizar?",
    text: "Entenda como financeiro, documentos, assembleias, fornecedores e comunicação se conectam na rotina do condomínio.",
    href: "/administracao"
  },
  {
    number: "02",
    category: "Implantação",
    title: "Do prédio entregue ao condomínio funcionando.",
    text: "Conheça as etapas que estruturam CNPJ, conta bancária, cadastros, boletos, fornecedores e comunicação desde o início.",
    href: "/implantacao"
  },
  {
    number: "03",
    category: "Pequenos condomínios",
    title: "Gestão profissional também cabe em estruturas menores.",
    text: "Veja como administração, limpeza e manutenção podem ser dimensionadas para condomínios de até 16 unidades.",
    href: "/pequenos-condominios"
  }
] as const;

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="bg-porcelain">
        <section className="border-b border-moss/15 bg-paper py-20 md:py-28">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
            <div>
              <p className="eyebrow">Blog Aloe</p>
              <h1 className="mt-4 max-w-[46rem] font-serif text-4xl font-semibold leading-[0.98] text-ink sm:text-5xl md:text-6xl">
                Informação para uma gestão condominial mais clara.
              </h1>
            </div>
            <p className="max-w-[31rem] border-t border-moss/20 pt-5 text-base leading-8 text-graphite/75">
              Orientações sobre administração, implantação e organização da
              rotina para apoiar decisões mais seguras no condomínio.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="section-shell">
            <div className="max-w-3xl">
              <p className="eyebrow">Guias Aloe</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-ink sm:text-4xl">
                Comece pelos temas essenciais.
              </h2>
            </div>

            <div className="mt-10 border-t border-moss/20">
              {guides.map((guide) => (
                <article
                  key={guide.number}
                  className="grid gap-5 border-b border-moss/20 py-8 md:grid-cols-[5rem_0.35fr_0.65fr_auto] md:items-start md:gap-8"
                >
                  <span className="font-serif text-2xl text-bronze">
                    {guide.number}
                  </span>
                  <p className="text-xs font-bold uppercase text-moss">
                    {guide.category}
                  </p>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold leading-tight text-ink md:text-3xl">
                      {guide.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-graphite/75">
                      {guide.text}
                    </p>
                  </div>
                  <a
                    href={guide.href}
                    className="focus-ring inline-flex items-center gap-2 self-start border-b border-moss pb-1 text-sm font-semibold text-moss hover:text-bronze"
                    aria-label={`Ler sobre ${guide.category}`}
                  >
                    Ler
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
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
