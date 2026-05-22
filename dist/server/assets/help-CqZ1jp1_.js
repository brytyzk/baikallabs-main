import { J as jsxRuntimeExports, S as reactExports } from "./server-BrW-spyj.js";
import { c as createLucideIcon, u as useI18n, M as MessageCircle } from "./router-cWw2dBF4.js";
import { S as Shield } from "./shield-DE0QxS9M.js";
import { B as Bot } from "./bot-Br5_cEWC.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./types-DGfzljZx.js";
const __iconNode$3 = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
];
const BookOpen = createLucideIcon("book-open", __iconNode$3);
const __iconNode$2 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode$1);
const __iconNode = [
  ["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4", key: "g0fldk" }],
  ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
  ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }]
];
const Key = createLucideIcon("key", __iconNode);
const CONTACT_EMAIL = "baikallabs.info@gmail.com";
function HelpPage() {
  const {
    t
  } = useI18n();
  const FAQ = [{
    q: t("help.faqQ1"),
    a: t("help.faqA1")
  }, {
    q: t("help.faqQ2"),
    a: t("help.faqA2")
  }, {
    q: t("help.faqQ3"),
    a: t("help.faqA3")
  }, {
    q: t("help.faqQ4"),
    a: t("help.faqA4")
  }, {
    q: t("help.faqQ5"),
    a: t("help.faqA5")
  }, {
    q: t("help.faqQ6"),
    a: t("help.faqA6")
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6 py-12 sm:py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-primary font-medium mb-2", children: t("help.badge") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl sm:text-5xl font-semibold text-foreground", children: t("help.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3 max-w-2xl", children: t("help.intro") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(QuickStart, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-5 h-5" }), title: t("help.qsVpnT"), steps: [{
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
        text: t("help.qsVpnS1")
      }, {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
        text: t("help.qsVpnS2")
      }, {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Key, { className: "w-4 h-4" }),
        text: t("help.qsVpnS3")
      }, {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4" }),
        text: t("help.qsVpnS4")
      }] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(QuickStart, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-5 h-5" }), title: t("help.qsAiT"), steps: [{
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
        text: t("help.qsAiS1")
      }, {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4" }),
        text: t("help.qsAiS2")
      }, {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Key, { className: "w-4 h-4" }),
        text: t("help.qsAiS3")
      }, {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-4 h-4" }),
        text: t("help.qsAiS4")
      }] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-semibold text-foreground mb-5", children: t("help.faqT") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl border border-border bg-card divide-y divide-border overflow-hidden", children: FAQ.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FaqItem, { q: item.q, a: item.a }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 rounded-3xl border border-border bg-card p-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground mb-2", children: t("help.nfT") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-5", children: t("help.nfD") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${CONTACT_EMAIL}`, className: "inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-95 transition", style: {
          boxShadow: "var(--shadow-glow)"
        }, children: [
          "✉ ",
          t("help.nfCta")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${CONTACT_EMAIL}`, className: "inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-border text-foreground hover:bg-secondary transition", children: CONTACT_EMAIL })
      ] })
    ] })
  ] });
}
function QuickStart({
  icon,
  title,
  steps
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-2xl flex items-center justify-center text-primary-foreground", style: {
        background: "var(--gradient-hero)"
      }, children: icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-3", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 shrink-0 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center", children: i + 1 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-foreground flex items-center gap-2 pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: s.icon }),
        " ",
        s.text
      ] })
    ] }, i)) })
  ] });
}
function FaqItem({
  q,
  a
}) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setOpen((o) => !o), className: "w-full text-left p-5 sm:p-6 hover:bg-secondary/40 transition", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: q }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `w-4 h-4 text-muted-foreground shrink-0 transition-transform ${open ? "rotate-180" : ""}` })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-3 leading-relaxed", children: a })
  ] });
}
export {
  HelpPage as component
};
