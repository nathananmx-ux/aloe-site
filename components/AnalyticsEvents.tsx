"use client";

import { useEffect } from "react";

type DataLayerWindow = Window & { dataLayer?: Array<Record<string, unknown>> };

const pushEvent = (event: string, details: Record<string, unknown> = {}) => {
  const target = window as DataLayerWindow;
  target.dataLayer ??= [];
  target.dataLayer.push({ event, ...details });
};

export function AnalyticsEvents() {
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const attribution = Object.fromEntries(
      ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]
        .map((key) => [key, query.get(key)])
        .filter((entry): entry is [string, string] => Boolean(entry[1]))
    );
    if (Object.keys(attribution).length) sessionStorage.setItem("aloe_attribution", JSON.stringify(attribution));

    const saved = sessionStorage.getItem("aloe_attribution");
    let savedAttribution: Record<string, string> = attribution;
    if (saved) {
      try { savedAttribution = JSON.parse(saved); } catch { sessionStorage.removeItem("aloe_attribution"); }
    }
    const context = { landing_page: sessionStorage.getItem("aloe_landing_page") || window.location.pathname, ...savedAttribution };
    sessionStorage.setItem("aloe_landing_page", context.landing_page);

    const onClick = (event: MouseEvent) => {
      const element = (event.target as Element | null)?.closest<HTMLElement>("a, button");
      if (!element) return;
      const href = element instanceof HTMLAnchorElement ? element.href : "";
      let eventName = element.dataset.event;
      if (!eventName && href.includes("wa.me")) eventName = "click_whatsapp";
      if (!eventName && href.includes("/area-do-cliente")) eventName = "click_area_cliente";
      if (eventName) pushEvent(eventName, { ...context, link_url: href || undefined });
    };

    const watched = [
      { selector: "#contato", event: "view_form_proposta" },
      { selector: "#planos", event: "view_planos" }
    ];
    const seen = new Set<string>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const item = watched.find(({ selector }) => entry.target.matches(selector));
        if (entry.isIntersecting && item && !seen.has(item.event)) {
          seen.add(item.event);
          pushEvent(item.event, context);
        }
      });
    }, { threshold: 0.25 });
    watched.forEach(({ selector }) => { const element = document.querySelector(selector); if (element) observer.observe(element); });
    document.addEventListener("click", onClick);
    return () => { observer.disconnect(); document.removeEventListener("click", onClick); };
  }, []);

  return null;
}
