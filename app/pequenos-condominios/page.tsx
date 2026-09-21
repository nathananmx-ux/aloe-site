import type { Metadata } from "next";
import Image from "next/image";
import { Building2, Sparkles, Wrench } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { mediaMap } from "@/data/media";
import { plans } from "@/data/plans";

export const metadata: Metadata = {
  title: "Administração para pequenos condomínios | Aloe Condomínios",
  description: "Planos de administração para condomínios de até 16 unidades, com gestão financeira, documental e opções de limpeza e manutenção.",
  alternates: { canonical: "/pequenos-condominios" }
};

const essentials = ["Boletos individualizados e contas comuns", "Organização de CNPJ, conta e fundo de caixa", "Balancete e prestação de contas", "Apoio remoto em questões jurídicas e administrativas"] as const;
const serviceLayers = [
  { title: "Administração", text: "Base financeira, documental e administrativa.", icon: Building2 },
  { title: "Limpeza", text: "Frequência definida conforme o plano contratado.", icon: Sparkles },
  { title: "Manutenção", text: "Cuidados preventivos nas modalidades aplicáveis.", icon: Wrench }
] as const;

export default function SmallCondominiumsPage() {
  return (
    <><Header /><main className="bg-white">
      <section className="bg-paper"><div className="section-shell grid items-center gap-10 py-12 lg:min-h-[680px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:py-16">
        <div className="max-w-[40rem]"><p className="eyebrow">Até 16 unidades</p><h1 className="mt-4 font-serif text-4xl font-semibold leading-[0.98] text-ink sm:text-5xl md:text-6xl">Administração profissional para pequenos condomínios.</h1><p className="mt-6 max-w-[35rem] text-lg leading-8 text-graphite/75">Estrutura financeira, documental e operacional dimensionada para condomínios que precisam de organização sem perder proximidade.</p><div className="mt-8 flex flex-wrap gap-3"><ButtonLink href="/#contato">Solicitar proposta</ButtonLink><ButtonLink href="/planos" variant="secondary">Conhecer os planos</ButtonLink></div></div>
        <div className="relative min-h-[430px] overflow-hidden lg:min-h-[550px]"><Image src={mediaMap.smallCondominiumsPage.hero.src} alt={mediaMap.smallCondominiumsPage.hero.alt} fill priority sizes="(min-width: 1024px) 44vw, 100vw" className="object-cover" /></div>
      </div></section>

      <section className="py-16 md:py-24"><div className="section-shell grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="relative min-h-[400px] overflow-hidden lg:col-span-7 lg:min-h-[570px]"><Image src={mediaMap.smallCondominiumsPage.base.src} alt={mediaMap.smallCondominiumsPage.base.alt} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" /></div>
        <div className="lg:col-span-5"><p className="eyebrow">Estrutura essencial</p><h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">Uma base para operar com clareza.</h2><p className="mt-5 leading-7 text-graphite/75">Poucas unidades não significam poucas responsabilidades. A Aloe organiza o que sustenta a rotina e facilita as decisões do condomínio.</p><ul className="mt-7 border-t border-moss/20">{essentials.map((item, index) => <li key={item} className="flex gap-4 border-b border-moss/20 py-4 text-sm font-semibold leading-6 text-graphite/75"><span className="font-serif text-lg text-bronze">0{index + 1}</span>{item}</li>)}</ul></div>
      </div></section>

      <section className="bg-deep py-16 text-white md:py-24"><div className="section-shell grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div><p className="text-sm font-bold uppercase text-bronze">Conforme a modalidade</p><h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">Uma solução que acompanha a rotina prática.</h2><div className="mt-8 border-t border-white/20">{serviceLayers.map(({ title, text, icon: Icon }) => <div key={title} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-white/20 py-5"><Icon aria-hidden="true" className="mt-1 text-bronze" size={22} /><div><h3 className="font-serif text-2xl font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-white/70">{text}</p></div></div>)}</div></div>
        <div className="relative min-h-[430px] overflow-hidden lg:min-h-[570px]"><Image src={mediaMap.smallCondominiumsPage.services.src} alt={mediaMap.smallCondominiumsPage.services.alt} fill sizes="(min-width: 1024px) 54vw, 100vw" className="object-cover" /></div>
      </div></section>

      <section className="py-16 md:py-24"><div className="section-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div className="relative min-h-[380px] overflow-hidden lg:min-h-[540px]"><Image src={mediaMap.smallCondominiumsPage.conservation.src} alt={mediaMap.smallCondominiumsPage.conservation.alt} fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" /></div>
        <div className="self-center"><p className="eyebrow">Planos Aloe</p><h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">Cinco níveis, uma mesma base administrativa.</h2><p className="mt-5 leading-7 text-graphite/75">Basic, Silver, Gold, Platinum e Black evoluem da administração essencial para frequências de limpeza e cuidados preventivos.</p><div className="mt-8 grid grid-cols-2 border-t border-moss/20 sm:grid-cols-5">{plans.map((plan) => <div key={plan.name} className="border-b border-r border-moss/20 px-3 py-4 last:border-r-0"><span className="text-xs font-bold text-bronze">0{plan.level}</span><p className="mt-1 font-serif text-xl font-semibold text-ink">{plan.name}</p></div>)}</div><div className="mt-8"><ButtonLink href="/planos">Comparar todos os planos</ButtonLink></div></div>
      </div></section>

      <section className="bg-paper py-16 md:py-20"><div className="section-shell grid items-end gap-8 md:grid-cols-[1fr_auto]"><div><p className="eyebrow">Seu condomínio, sem improviso</p><h2 className="mt-3 max-w-3xl font-serif text-4xl font-semibold text-ink md:text-5xl">Vamos montar a combinação certa para a sua rotina.</h2></div><ButtonLink href="/#contato">Solicitar proposta</ButtonLink></div></section>
    </main><Footer /></>
  );
}
