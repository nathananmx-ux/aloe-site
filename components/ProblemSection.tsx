import {
  CalendarCheck,
  CircleDollarSign,
  ClipboardCheck,
  FileText,
  MessageSquareText,
  WalletCards,
  Wrench
} from "lucide-react";
import { painPoints } from "@/data/home";

const painIcons = [
  FileText,
  MessageSquareText,
  CalendarCheck,
  CircleDollarSign,
  WalletCards,
  Wrench
];

export function ProblemSection() {
  return (
    <section id="gestao" className="bg-paper py-20 md:py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Gestão com método</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Seu condomínio não precisa depender de improviso.
          </h2>
          <p className="mt-6 text-lg leading-8 text-graphite/75">
            Uma boa administração reduz ruído, organiza prioridades e dá mais
            segurança para síndicos, conselho e moradores. Quando a rotina não
            está estruturada, tarefas simples viram urgências e decisões
            importantes acabam sendo tomadas sem clareza.
          </p>
          <div className="mt-8 overflow-hidden rounded-lg border border-moss/10 bg-porcelain shadow-[0_12px_35px_rgba(25,33,29,0.06)]">
            <div className="problem-visual-photo min-h-[220px]" />
            <div className="grid gap-3 p-5 sm:grid-cols-2">
              {[
                { label: "Prestação de contas", icon: FileText },
                { label: "Boletos e caixa", icon: WalletCards }
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-md border border-moss/10 bg-white px-4 py-3"
                  >
                    <Icon aria-hidden="true" className="text-moss" size={19} />
                    <span className="text-xs font-bold text-graphite/75">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid content-start gap-3 sm:grid-cols-2">
          {painPoints.map((point, index) => {
            const Icon = painIcons[index] ?? ClipboardCheck;

            return (
              <article
                key={point}
                className="flex min-h-[104px] items-center gap-4 rounded-lg border border-moss/10 bg-porcelain p-4 shadow-[0_12px_35px_rgba(25,33,29,0.06)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-bronze/10 text-clay">
                  <Icon aria-hidden="true" size={22} strokeWidth={1.7} />
                </span>
                <h3 className="text-sm font-semibold leading-5 text-ink">
                  {point}
                </h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
