import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { temporaryMedia } from "@/data/media";

const steps = ["Análise", "Recebimento", "Organização", "Implantação"];

export function TransitionSection() {
  return (
    <section className="bg-moss py-20 text-white md:py-24">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-ink">
          <Image
            src={temporaryMedia.administration.src}
            alt={temporaryMedia.administration.alt}
            fill
            loading="lazy"
            sizes="(max-width: 1023px) 100vw, 45vw"
            className="object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" aria-hidden="true" />
          <p className="absolute bottom-5 left-5 text-sm font-semibold text-white/85">Documentos, cadastros e rotinas com uma sequência definida.</p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase text-[#ddb98c]">Troca de administradora</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Pensando em trocar de administradora?
          </h2>
          <p className="mt-6 max-w-xl leading-7 text-white/75">
            A Aloe conduz a transição de documentos, cadastros, financeiro, fornecedores e rotinas para que a mudança seja organizada.
          </p>
          <ol className="mt-8 grid gap-2 sm:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step} className="flex items-center gap-2 border-t border-white/20 pt-4 text-xs font-bold uppercase text-white/85">
                <span className="text-[#ddb98c]">0{index + 1}</span>
                <span>{step}</span>
                {index < steps.length - 1 ? <ArrowRight size={14} className="ml-auto hidden text-white/35 sm:block" aria-hidden="true" /> : null}
              </li>
            ))}
          </ol>
          <a href="/troca-de-administradora" className="focus-ring mt-8 inline-flex items-center gap-2 border-b border-[#ddb98c] pb-2 font-semibold text-white hover:text-[#ddb98c]">
            Entender a transição <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
