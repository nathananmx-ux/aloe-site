import Image from "next/image";
type BrandMarkProps = {
  compact?: boolean;
  light?: boolean;
};

export function BrandMark({ compact = false, light = false }: BrandMarkProps) {
  return (
    <span className="inline-flex items-center gap-2 sm:gap-3">
      <span className={`relative shrink-0 ${compact ? "h-8 w-8 sm:h-10 sm:w-10" : "h-12 w-12 sm:h-14 sm:w-14"}`}>
        {light ? (
          <Image
            src="/logo-aloe-dark.png"
            alt="Logo Aloe Condomínios"
            fill
            sizes={compact ? "(max-width: 639px) 32px, 40px" : "56px"}
            className="object-contain"
            priority={compact}
          />
        ) : (
          <>
            <Image
              src="/logo-aloe-symbol.png"
              alt="Logo Aloe Condomínios"
              fill
              sizes={compact ? "(max-width: 639px) 32px, 40px" : "56px"}
              className="theme-logo-light object-contain"
              priority={compact}
            />
            <Image
              src="/logo-aloe-dark.png"
              alt=""
              fill
              sizes={compact ? "(max-width: 639px) 32px, 40px" : "56px"}
              className="theme-logo-dark object-contain"
              aria-hidden="true"
              priority={compact}
            />
          </>
        )}
      </span>
      <span>
        <span
          className={`block whitespace-nowrap font-serif font-normal uppercase leading-none tracking-[0.01em] ${
            compact ? "text-[1.35rem] sm:text-[1.75rem]" : "text-[1.8rem] sm:text-[2.25rem]"
          } ${light ? "text-white" : "text-ink"}`}
        >
          Aloe Condomínios
        </span>
      </span>
    </span>
  );
}
