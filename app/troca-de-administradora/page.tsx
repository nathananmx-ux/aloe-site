import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Troca de administradora de condomínios | Aloe Condomínios",
  description:
    "Conheça o processo de transição administrativa da Aloe: diagnóstico, documentos, contratos, finanças e acompanhamento das pendências.",
  alternates: { canonical: "/troca-de-administradora" }
};

const phases = [
  { title: "Entender", text: "Levantamos a situação administrativa, financeira e documental com o síndico e o conselho." },
  { title: "Planejar", text: "Definimos prioridades, responsáveis e informações necessárias para a passagem de gestão." },
  { title: "Conferir", text: "Organizamos a recepção de documentos, saldos, contratos, cadastros, acessos e pendências." },
  { title: "Iniciar", text: "Estruturamos a emissão de boletos, a comunicação e as primeiras rotinas da nova administração." },
  { title: "Acompanhar", text: "Pendências identificadas na transição seguem em acompanhamento com a equipe responsável." }
];

export default function TransitionPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="bg-deep py-16 text-white md:py-20">
          <div className="section-shell grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase text-bronze">Troca de administradora</p>
              <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">A transição precisa de método.</h1>
            </div>
            <p className="self-end text-lg leading-8 text-white/80">Mudar a administração não deveria significar perder informações. A Aloe planeja a passagem para organizar documentos, finanças, contratos e a continuidade das rotinas.</p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="section-shell grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="min-w-0">
              <h2 className="font-serif text-3xl font-semibold text-ink sm:text-4xl">Do diagnóstico ao acompanhamento.</h2>
              <p className="mt-5 leading-7 text-graphite/75">Cada condomínio tem um histórico próprio. O cronograma e as responsabilidades são alinhados durante a contratação.</p>
            </div>
            <ol className="min-w-0 border-t border-moss/20">
              {phases.map((phase, index) => (
                <li key={phase.title} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 border-b border-moss/20 py-5">
                  <span className="font-serif text-2xl text-bronze">0{index + 1}</span>
                  <div><h3 className="font-serif text-2xl font-semibold text-ink">{phase.title}</h3><p className="mt-2 leading-7 text-graphite/75">{phase.text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-paper py-16">
          <div className="section-shell">
            <h2 className="font-serif text-3xl font-semibold text-ink">Está avaliando uma mudança?</h2>
            <p className="mt-4 max-w-2xl leading-7 text-graphite/75">Uma conversa inicial ajuda a entender o momento do condomínio e o que precisa ser levantado antes da transição.</p>
            <div className="mt-6"><ButtonLink href="/#contato" dataEvent="click_solicitar_proposta">Solicitar uma análise</ButtonLink></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
