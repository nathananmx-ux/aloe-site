import { contact } from "@/data/home";
import { ButtonLink } from "./ButtonLink";

export function FinalCTA() {
  return (
    <section id="contato" className="bg-ink py-20 text-porcelain md:py-24">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1fr_auto]">
        <div className="max-w-3xl">
          <p className="text-base font-extrabold text-bronze">Conversa inicial</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
            Quer entender se a Aloe é a administradora certa para o seu
            condomínio?
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/75">
            Solicite uma conversa inicial e entenda como a Aloe pode ajudar seu
            condomínio a ter mais controle, transparência e tranquilidade na
            rotina administrativa.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <ButtonLink href="#contato">Solicitar proposta</ButtonLink>
          <ButtonLink href={contact.whatsappHref} variant="secondary" whatsapp>
            Falar pelo WhatsApp
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
