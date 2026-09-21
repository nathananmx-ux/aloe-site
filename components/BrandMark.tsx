import Image from "next/image";
type BrandMarkProps = {
  compact?: boolean;
  light?: boolean;
};

export function BrandMark({ compact = false, light = false }: BrandMarkProps) {
  return (
    <span className="inline-flex items-center gap-2 sm:gap-3">
      <span className={`relative shrink-0 ${compact ? "h-8 w-8 sm:h-10 sm:w-10" : "h-12 w-12 sm:h-14 sm:w-14"}`}>
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
      </span>
      <span>
        <span
          className={`block font-serif font-semibold leading-none ${
            compact ? "whitespace-nowrap text-lg sm:text-xl" : "whitespace-nowrap text-2xl sm:text-3xl"
          } ${light ? "text-white" : "text-ink"}`}
        >
          Aloe Condomínios
        </span>
      </span>
    </span>
  );
}
