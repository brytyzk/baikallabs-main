import { a5 as useRouter, S as reactExports, G as isRedirect, T as TSS_SERVER_FUNCTION, w as getServerFnById, i as createServerFn, J as jsxRuntimeExports } from "./server-BrW-spyj.js";
import { c as createLucideIcon, u as useI18n, L as Link, S as Send } from "./router-cWw2dBF4.js";
import { o as objectType, s as stringType } from "./types-DGfzljZx.js";
import { B as Bot } from "./bot-Br5_cEWC.js";
import { A as ArrowRight } from "./arrow-right-JQqRhRCL.js";
import { S as Sparkles, M as Menu } from "./sparkles-BlKmcepf.js";
import { L as LoaderCircle } from "./loader-circle-92gzzzcb.js";
import { C as Check } from "./check-Doa8PGRz.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function useServerFn(serverFn) {
  const router = useRouter();
  return reactExports.useCallback(async (...args) => {
    try {
      const res = await serverFn(...args);
      if (isRedirect(res)) throw res;
      return res;
    } catch (err) {
      if (isRedirect(err)) {
        err.options._fromLocation = router.stores.location.get();
        return router.navigate(router.resolveRedirect(err).options);
      }
      throw err;
    }
  }, [router, serverFn]);
}
const __iconNode$4 = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
];
const CreditCard = createLucideIcon("credit-card", __iconNode$4);
const __iconNode$3 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
];
const Image = createLucideIcon("image", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
];
const MessageSquare = createLucideIcon("message-square", __iconNode$2);
const __iconNode$1 = [["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z", key: "otkl63" }]];
const Mountain = createLucideIcon("mountain", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
      key: "ul74o6"
    }
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M5 6v4", key: "ilb8ba" }],
  ["path", { d: "M19 14v4", key: "blhpug" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M7 8H3", key: "zfb6yr" }],
  ["path", { d: "M21 16h-4", key: "1cnmox" }],
  ["path", { d: "M11 3H9", key: "1obp7u" }]
];
const WandSparkles = createLucideIcon("wand-sparkles", __iconNode);
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const generateImage = createServerFn({
  method: "POST"
}).inputValidator((input) => objectType({
  prompt: stringType().min(1).max(2e3)
}).parse(input)).handler(createSsrRpc("d14c03a65f7c855fb8a2bd675c99851c1445338e64703529f9f13543c700e7c9"));
const TG_LINK = "https://t.me/baikal_ai_bot";
function AiBotPage() {
  const {
    t
  } = useI18n();
  const genFn = useServerFn(generateImage);
  const [prompt, setPrompt] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [images, setImages] = reactExports.useState([]);
  const [error, setError] = reactExports.useState(null);
  const [fieldError, setFieldError] = reactExports.useState(false);
  const onGenerate = async () => {
    const p = prompt.trim();
    if (!p) {
      setFieldError(true);
      setError(t("ai.genErrEmpty"));
      return;
    }
    setFieldError(false);
    setLoading(true);
    setError(null);
    try {
      const res = await genFn({
        data: {
          prompt: p
        }
      });
      if (res.error) setError(res.error);
      else setImages((prev) => [res.image, ...prev]);
    } catch {
      setError(t("ai.genErr"));
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10", style: {
        background: "var(--gradient-hero)",
        opacity: 0.06
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 pt-20 pb-12 grid gap-12 md:grid-cols-2 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-3.5 h-3.5" }),
            " ",
            t("ai.badge")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl sm:text-6xl font-extrabold tracking-tight text-foreground mb-5", children: [
            t("ai.title1"),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              background: "var(--gradient-hero)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent"
            }, children: t("ai.title2") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mb-8", children: t("ai.subtitle") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: TG_LINK, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-95 transition", style: {
            boxShadow: "var(--shadow-glow)"
          }, children: [
            t("ai.cta"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AiDemoPhone, {}) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-3xl mx-auto px-6 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8 sm:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5" }),
          " ",
          t("ai.genBadge")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-semibold text-foreground mb-3", children: t("ai.genTitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-7 max-w-xl mx-auto", children: t("ai.genDesc") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: prompt, onChange: (e) => {
        setPrompt(e.target.value);
        if (fieldError) setFieldError(false);
      }, disabled: loading, rows: 3, placeholder: t("ai.genPlaceholder"), className: `w-full rounded-2xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none ${fieldError ? "border-destructive ring-2 ring-destructive/30" : "border-border"}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onGenerate, disabled: loading, className: "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-95 transition disabled:opacity-60 disabled:cursor-not-allowed", style: {
        boxShadow: "var(--shadow-glow)"
      }, children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
        " ",
        t("ai.genWorking")
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: t("ai.genBtn") }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-6", children: [
        loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[280px] rounded-2xl border border-dashed border-border bg-muted/30 flex flex-col items-center justify-center overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 animate-spin text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-3", children: t("ai.genWorking") })
        ] }),
        !loading && images.length === 0 && !error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[280px] rounded-2xl border border-dashed border-border bg-muted/30 flex items-center justify-center overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground p-12 text-center", children: t("ai.genEmpty") }) }),
        !loading && error && images.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[280px] rounded-2xl border border-dashed border-border bg-muted/30 flex items-center justify-center overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive p-12 text-center", children: error }) }),
        !loading && images.map((img, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: `${t("ai.genBadge")} ${idx + 1}`, className: "w-full h-auto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-primary", children: t("ai.promoText") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/ai-pricing", className: "text-sm font-medium text-primary underline-offset-4 hover:underline transition", children: t("ai.promoLink") })
          ] })
        ] }, idx))
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-6xl mx-auto px-6 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModelCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, {}), name: t("ai.mChat"), desc: t("ai.mChatD") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModelCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Image, {}), name: t("ai.mMid"), desc: t("ai.mMidD") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModelCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(WandSparkles, {}), name: t("ai.mFlux"), desc: t("ai.mFluxD") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModelCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, {}), name: t("ai.mOther"), desc: t("ai.mOtherD") })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-5xl mx-auto px-6 py-12 grid gap-6 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-foreground mb-3", children: t("ai.cardIT") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-5", children: t("ai.cardID") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm text-foreground", children: [t("ai.cardIP1"), t("ai.cardIP2"), t("ai.cardIP3")].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-primary" }),
          " ",
          x
        ] }, x)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-foreground mb-3", children: t("ai.cardPT") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-5", children: t("ai.cardPD") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm text-foreground", children: [t("ai.cardPP1"), t("ai.cardPP2"), t("ai.cardPP3")].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-primary" }),
          " ",
          x
        ] }, x)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-4xl mx-auto px-6 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl p-10 sm:p-14 text-center text-primary-foreground", style: {
      background: "var(--gradient-hero)",
      boxShadow: "var(--shadow-glow)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-semibold mb-3", children: t("ai.finalT") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "opacity-90 mb-7 max-w-xl mx-auto", children: t("ai.finalD") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: TG_LINK, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-card text-foreground font-medium hover:bg-background transition", children: [
        t("ai.finalCta"),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] })
    ] }) })
  ] });
}
function ModelCard({
  icon,
  name,
  desc
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 [&>svg]:w-5 [&>svg]:h-5", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground", children: name }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: desc })
  ] });
}
function AiDemoPhone() {
  const {
    t
  } = useI18n();
  const DEMO_PROMPTS = [{
    label: t("ai.demoP1L"),
    user: t("ai.demoP1U"),
    reply: {
      from: "bot",
      text: t("ai.demoP1R"),
      image: true
    }
  }, {
    label: t("ai.demoP2L"),
    user: t("ai.demoP2U"),
    reply: {
      from: "bot",
      text: t("ai.demoP2R")
    }
  }, {
    label: t("ai.demoP3L"),
    user: t("ai.demoP3U"),
    reply: {
      from: "bot",
      text: t("ai.demoP3R")
    }
  }];
  const [msgs, setMsgs] = reactExports.useState([{
    from: "bot",
    text: t("ai.demoGreeting")
  }]);
  const [typing, setTyping] = reactExports.useState(false);
  const runPrompt = (p) => {
    if (typing) return;
    setMsgs((m) => [...m, {
      from: "user",
      text: p.user
    }]);
    setTyping(true);
    window.setTimeout(() => {
      setMsgs((m) => [...m, p.reply]);
      setTyping(false);
    }, 900);
  };
  const reset = () => setMsgs([{
    from: "bot",
    text: t("phone.aiCleared")
  }]);
  const accent = "var(--gradient-hero)";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-[260px] sm:w-[280px] animate-[float_6s_ease-in-out_infinite]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-[2.6rem] p-[6px] bg-gradient-to-b from-slate-800 to-black", style: {
      filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.45))"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[2.3rem] bg-white overflow-hidden relative", style: {
      aspectRatio: "9 / 19.5"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-black rounded-full z-20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center px-6 pt-3 pb-1 text-[10px] font-semibold text-slate-900", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "9:41" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "100%" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 pt-4 pb-2 border-b border-slate-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0", style: {
          background: accent
        }, children: "B" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-[12px] text-slate-900 leading-tight", children: "Baikal AI" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-emerald-500 leading-tight", children: typing ? t("phone.aiTyping") : t("phone.aiOnline") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-4 h-4 text-slate-500 shrink-0" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-2.5 py-3 space-y-2 bg-gradient-to-b from-sky-50 to-white overflow-y-auto", style: {
        height: "70%"
      }, children: [
        msgs.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex ${m.from === "user" ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-[82%] rounded-2xl px-3 py-1.5 text-[10.5px] leading-snug whitespace-pre-line ${m.from === "user" ? "rounded-tr-md text-white" : "rounded-tl-md bg-white border border-slate-200 text-slate-800 shadow-sm"}`, style: m.from === "user" ? {
          background: accent
        } : void 0, children: [
          m.image && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-40 aspect-[4/3] rounded-lg overflow-hidden mb-1.5", style: {
            background: "linear-gradient(135deg,#f97316,#db2777 60%,#1e3a8a)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mountain, { className: "absolute bottom-1 left-2 w-10 h-10 text-white/85", strokeWidth: 1.5 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3 w-6 h-6 rounded-full bg-yellow-200/90 blur-[1px]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "absolute top-1.5 right-1.5 w-3 h-3 text-white/80" })
          ] }),
          m.text
        ] }) }, i)),
        typing && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl rounded-tl-md bg-white border border-slate-200 px-3 py-2 shadow-sm flex gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:120ms]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:240ms]" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-2.5 py-2 flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-7 rounded-full bg-slate-100 px-3 text-[10.5px] text-slate-400 flex items-center", children: t("phone.aiMsg") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full flex items-center justify-center text-white shrink-0", style: {
          background: accent
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-3 h-3" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-1 bg-black/80 rounded-full z-10" })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 w-full sm:w-auto sm:max-w-[240px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-primary font-medium", children: t("ai.demoTry") }),
      DEMO_PROMPTS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => runPrompt(p), disabled: typing, className: "text-left rounded-2xl border border-border bg-card px-4 py-3 hover:border-primary/50 hover:bg-secondary transition disabled:opacity-60 disabled:cursor-not-allowed", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-semibold text-foreground flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-primary" }),
        " ",
        p.label
      ] }) }, p.label)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: reset, className: "text-xs text-muted-foreground hover:text-foreground transition text-left px-1", children: t("ai.demoClear") })
    ] })
  ] });
}
export {
  AiBotPage as component
};
