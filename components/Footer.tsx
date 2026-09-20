import { contact, footerNavItems } from "@/data/home";
import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="bg-porcelain py-12">
      <div className="section-shell grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <BrandMark />
          <p className="mt-5 max-w-md text-sm leading-7 text-graphite/70">
            Administração condominial com clareza financeira, suporte
            operacional e acompanhamento próximo para condomínios que querem uma
            gestão mais organizada.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold text-ink">Links rápidos</h2>
          <nav className="mt-4 flex flex-col gap-3" aria-label="Links do rodapé">
            {footerNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring rounded-md text-sm font-semibold text-graphite/70 hover:text-moss"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-bold text-ink">Contato</h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-graphite/70">
            <p>
              <a
                className="focus-ring rounded-md hover:text-moss"
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: {contact.whatsappLabel}
              </a>
            </p>
            <p>
              <a
                className="focus-ring rounded-md hover:text-moss"
                href={`mailto:${contact.email}`}
              >
                E-mail: {contact.email}
              </a>
            </p>
            <p>Cidade: {contact.city}</p>
            <p>Região de atendimento: {contact.serviceRegion}</p>
          </div>
        </div>
      </div>

      <div className="section-shell mt-10 border-t border-moss/10 pt-6 text-xs leading-6 text-graphite/60">
        <p>
          © {new Date().getFullYear()} Aloe Condomínios. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
