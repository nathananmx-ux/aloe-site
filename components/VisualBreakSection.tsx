import Image from "next/image";
import { temporaryMedia } from "@/data/media";

export function VisualBreakSection() {
  return (
    <section className="bg-paper pb-16 md:pb-24" aria-label="Gestão adaptada a cada condomínio">
      <div className="section-shell">
        <div className="relative aspect-[16/8] overflow-hidden rounded-md sm:aspect-[16/6]">
          <Image
            src={temporaryMedia.commonArea.src}
            alt={temporaryMedia.commonArea.alt}
            fill
            loading="lazy"
            sizes="(max-width: 1150px) 100vw, 1120px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/30 to-transparent" aria-hidden="true" />
          <p className="absolute bottom-5 left-5 max-w-xl font-serif text-2xl leading-tight text-white sm:bottom-8 sm:left-8 sm:text-3xl md:text-4xl">
            Cada condomínio tem uma realidade diferente. A gestão precisa acompanhar.
          </p>
        </div>
      </div>
    </section>
  );
}
