"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle({ mobile = false }: { mobile?: boolean }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    setTheme(current);
    setReady(true);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("aloe-theme", next);
    setTheme(next);
  };

  const label = theme === "dark" ? "Usar modo claro" : "Usar modo escuro";
  const Icon = theme === "dark" ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={`focus-ring inline-flex min-h-11 items-center text-moss transition hover:text-bronze ${
        mobile ? "w-full gap-3 rounded-sm px-2 text-sm font-semibold" : "w-11 justify-center rounded-full"
      } ${ready ? "opacity-100" : "opacity-0"}`}
    >
      <Icon size={19} aria-hidden="true" />
      {mobile ? <span>{label}</span> : null}
    </button>
  );
}
