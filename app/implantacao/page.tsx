import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { mediaMap } from "@/data/media";

export const metadata: Metadata = {
  title: "Implantação condominial | Aloe Condomínios",
  description: "Implantação condominial com organização administrativa, financeira e operacional desde o primeiro dia.",
  alternates: { canonical: "/implantacao" }
};

const audiences = ["Condomínios recém-entregues", "Condomínios ainda sem estrutura administrativa", "Transição de construtora"] as const;
const structuredItems = ["CNPJ", "Conta bancária", "Cadastros", "Boletos", "Fornecedores", "Documentação", "Comunicação", "Rotina financeira"] as const;
const startingSteps = ["Reunião", "Documentação", "Estruturação", "Comunicação", "Operação"] as const;

export default function ImplantacaoPage() {
  return (
    <><Header /><main className="bg-white">
      <section className="relative isolate min-h-[690px] overflow-hidden bg-ink">
        <Image src={mediaMap.implantation.hero.src} alt={mediaMap.implantation.hero.alt} fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/15" />
        <div className="section-shell relative flex min-h-[690px] items-end py-14 md:items-center md:py-20"><div className="max-w-[39rem] text-white"><p className="text-sm font-bold uppercase text-bronze">Implantação</p><h1 className="mt-4 font-serif text-4xl font-semibold leading-[0.98] sm:text-5xl md:text-6xl">Implantação condominial desde o primeiro dia.</h1><p className="mt-6 max-w-[34rem] text-lg leading-8 text-white/78">A Aloe estrutura os primeiros passos administrativos, financeiros e operacionais a partir da entrega das unidades.</p><div className="mt-8"><ButtonLink href="/#contato">Solicitar implantação</ButtonLink></div></div></div>
      </section>

      <section className="py-16 md:py-24"><div className="section-shell grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5"><p className="eyebrow">Para quem é</p><h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">Do prédio entregue ao condomínio funcionando.</h2><p className="mt-5 leading-7 text-graphite/75">A implantação cria a base de operação antes que a rotina se transforme em improviso.</p><ul className="mt-7 border-t border-moss/20">{audiences.map((item, index) => <li key={item} className="flex gap-4 border-b border-moss/20 py-4 text-sm font-semibold text-graphite/75"><span className="font-serif text-lg text-bronze">0{index + 1}</span>{item}</li>)}</ul></div>
        <div className="relative min-h-[430px] overflow-hidden lg:col-span-7 lg:min-h-[570px]"><Image src={mediaMap.implantation.structure.src} alt={mediaMap.implantation.structure.alt} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" /></div>
      </div></section>

      <section className="bg-paper py-16 md:py-24"><div className="section-shell grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div className="relative min-h-[430px] overflow-hidden lg:min-h-[600px]"><Image src={mediaMap.implantation.process.src} alt={mediaMap.implantation.process.alt} fill sizes="(min-width: 1024px) 54vw, 100vw" className="object-cover" /></div>
        <div><p className="eyebrow">O que é estruturado</p><h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">A base documental e operacional começa conectada.</h2><div className="mt-7 grid grid-cols-2 border-t border-moss/20">{structuredItems.map((item, index) => <div key={item} className="flex gap-3 border-b border-moss/20 py-4 pr-3 odd:border-r odd:mr-3"><span className="font-serif text-lg text-bronze">{String(index + 1).padStart(2, "0")}</span><span className="text-sm font-semibold text-graphite/75">{item}</span></div>)}</div></div>
      </div></section>

      <section className="py-16 md:py-24"><div className="section-shell"><div className="max-w-3xl"><p className="eyebrow">Como começa</p><h2 className="mt-4 font-serif text-4xl font-semibold text-ink md:text-5xl">Uma sequência clara até a operação.</h2></div><ol className="mt-10 grid border-y border-moss/20 sm:grid-cols-5">{startingSteps.map((step, index) => <li key={step} className="border-b border-moss/20 px-4 py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"><span className="font-serif text-2xl text-bronze">{String(index + 1).padStart(2, "0")}</span><p className="mt-2 text-sm font-semibold text-ink">{step}</p></li>)}</ol><div className="mt-9"><ButtonLink href="/#contato">Solicitar implantação com a Aloe</ButtonLink></div></div></section>
    </main><Footer /></>
  );
}
