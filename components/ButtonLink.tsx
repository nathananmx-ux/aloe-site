import { ArrowRight, MessageCircle } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  whatsapp?: boolean;
  target?: string;
  rel?: string;
  dataEvent?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  whatsapp = false,
  target,
  rel,
  dataEvent
}: ButtonLinkProps) {
  const base =
    "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition";
  const variants = {
    primary:
      "bg-moss text-porcelain shadow-soft hover:bg-ink hover:text-porcelain",
    secondary:
      "border border-moss/20 bg-porcelain/90 text-moss hover:border-moss/40 hover:bg-white",
    ghost: "text-moss hover:bg-moss/5"
  };
  const Icon = whatsapp ? MessageCircle : ArrowRight;

  return (
    <a href={href} target={target} rel={rel} data-event={dataEvent} className={`${base} ${variants[variant]}`}>
      <span>{children}</span>
      <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
    </a>
  );
}
