import Image from "next/image";
import { logo } from "@/data/home";

type BrandMarkProps = {
  compact?: boolean;
  light?: boolean;
};

export function BrandMark({ compact = false, light = false }: BrandMarkProps) {
  return (
    <span className="inline-flex items-center gap-3">
      <span className={`relative ${compact ? "h-10 w-10" : "h-14 w-14"}`}>
        <Image
          src={logo.src}
          alt={logo.alt}
          fill
          sizes={compact ? "40px" : "56px"}
          className="object-contain"
          priority={compact}
        />
      </span>
      <span>
        <span
          className={`block font-serif font-semibold leading-none ${
            compact ? "text-xl" : "text-3xl"
          } ${light ? "text-white" : "text-ink"}`}
        >
          Aloe Condomínios
        </span>
      </span>
    </span>
  );
}
