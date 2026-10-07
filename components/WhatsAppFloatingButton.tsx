import Image from "next/image";
import { contact } from "@/data/home";

export function WhatsAppFloatingButton() {
  return (
    <div className="group fixed bottom-4 right-4 z-40 flex items-center md:bottom-6 md:right-6">
      <span className="pointer-events-none mr-3 hidden whitespace-nowrap rounded-sm border border-line bg-porcelain px-3 py-2 text-xs font-semibold text-ink opacity-0 shadow-soft transition duration-200 group-hover:opacity-100 group-focus-within:opacity-100 md:block">
        Fale com a Aloe
      </span>
      <a
        href={contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        data-event="click_whatsapp_floating"
        aria-label="Fale com a Aloe pelo WhatsApp"
        className="focus-ring inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-brandSolid text-white shadow-[0_12px_32px_rgba(7,20,17,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-brandHover motion-reduce:transform-none"
      >
        <Image
          src="/whatsapp-logo-white.png"
          alt=""
          width={32}
          height={32}
          className="h-8 w-8 object-contain"
          aria-hidden="true"
        />
      </a>
    </div>
  );
}
