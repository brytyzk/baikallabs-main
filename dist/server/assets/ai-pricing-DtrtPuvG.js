import { J as jsxRuntimeExports } from "./server-BrW-spyj.js";
import { u as useI18n } from "./router-cWw2dBF4.js";
import { Z as Zap } from "./zap-C-YNkz9s.js";
import { A as ArrowRight } from "./arrow-right-JQqRhRCL.js";
import { B as Bot } from "./bot-Br5_cEWC.js";
import { C as Check } from "./check-Doa8PGRz.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./types-DGfzljZx.js";
const TG_LINK = "https://t.me/baikal_ai_bot";
function AiPricingPage() {
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10", style: {
      background: "var(--gradient-hero)",
      opacity: 0.06
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6 pt-20 pb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3.5 h-3.5" }),
          " ",
          t("ai.badge")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4", children: t("aiPricing.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl mx-auto", children: t("aiPricing.subtitle") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PricingCard, { name: t("aiPricing.starter"), price: t("aiPricing.starterPrice"), desc: t("aiPricing.starterDesc"), features: [t("aiPricing.starterF1"), t("aiPricing.starterF2"), t("aiPricing.starterF3")] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PricingCard, { name: t("aiPricing.pro"), price: t("aiPricing.proPrice"), desc: t("aiPricing.proDesc"), features: [t("aiPricing.proF1"), t("aiPricing.proF2"), t("aiPricing.proF3"), t("aiPricing.proF4")], highlight: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PricingCard, { name: t("aiPricing.ultra"), price: t("aiPricing.ultraPrice"), desc: t("aiPricing.ultraDesc"), features: [t("aiPricing.ultraF1"), t("aiPricing.ultraF2"), t("aiPricing.ultraF3")] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: TG_LINK, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-95 transition", style: {
        boxShadow: "var(--shadow-glow)"
      }, children: [
        t("ai.cta"),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] }) })
    ] })
  ] });
}
function PricingCard({
  name,
  price,
  desc,
  features,
  highlight = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-3xl border p-8 flex flex-col ${highlight ? "border-primary/40 bg-card" : "border-border bg-card"}`, children: [
    highlight && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium w-fit mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-3 h-3" }),
      " Popular"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground", children: name }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-3xl font-extrabold text-foreground", children: price }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: desc }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2 flex-1", children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-primary shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f })
    ] }, f)) })
  ] });
}
export {
  AiPricingPage as component
};
