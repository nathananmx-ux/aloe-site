"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const INTRO_STORAGE_KEY = "aloe-brand-intro-shown-v6";

export function BrandIntro() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const alreadyShown = window.sessionStorage.getItem(INTRO_STORAGE_KEY);

    if (alreadyShown || prefersReducedMotion) {
      return;
    }

    window.sessionStorage.setItem(INTRO_STORAGE_KEY, "true");
    setVisible(true);

    const fadeTimer = window.setTimeout(() => setLeaving(true), 1000);
    const removeTimer = window.setTimeout(() => setVisible(false), 1200);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={`brandIntro ${leaving ? "brandIntroLeaving" : ""}`}
    >
      <div className="brandIntroLogoWrap">
        <span className="brandIntroLogoBacklight" />
        <Image
          src="/logo-aloe-symbol.png"
          alt=""
          fill
          sizes="(max-width: 767px) 168px, 260px"
          className="brandIntroLogo"
          priority
        />
        <span className="brandIntroLogoSweep" />
      </div>
    </div>
  );
}
