import { S as reactExports, J as jsxRuntimeExports } from "./server-BrW-spyj.js";
import { c as createLucideIcon, u as useI18n, a as useNavigate, L as Link, G as Globe } from "./router-cWw2dBF4.js";
import { S as Sparkles, M as Menu } from "./sparkles-BlKmcepf.js";
import { B as Bot } from "./bot-Br5_cEWC.js";
import { S as Shield } from "./shield-DE0QxS9M.js";
import { Z as Zap } from "./zap-C-YNkz9s.js";
import { A as ArrowRight } from "./arrow-right-JQqRhRCL.js";
import { L as Lock, W as Wifi } from "./wifi-DUuI6tdB.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./types-DGfzljZx.js";
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const CircleQuestionMark = createLucideIcon("circle-question-mark", __iconNode);
const VPN_BOT = "https://t.me/baikal_vpn_kbot";
const AI_BOT = "https://t.me/baikal_ai_bot";
const THEMES = {
  default: {
    bg: "transparent",
    accent: "var(--gradient-hero)",
    label: "BaikalLabs",
    emoji: "✨"
  },
  cyber: {
    bg: "radial-gradient(circle at 20% 20%, #ff00aa33, transparent 60%), radial-gradient(circle at 80% 70%, #00f0ff33, transparent 60%), #0a0014",
    accent: "linear-gradient(135deg,#ff00aa,#00f0ff)",
    label: "Cyberpunk mode",
    emoji: "🌆"
  },
  space: {
    bg: "radial-gradient(circle at 30% 30%, #6a00ff44, transparent 60%), radial-gradient(circle at 70% 60%, #00d4ff33, transparent 60%), #050018",
    accent: "linear-gradient(135deg,#7c3aed,#06b6d4)",
    label: "Космос",
    emoji: "🚀"
  },
  baikal: {
    bg: "linear-gradient(135deg, #062847 0%, #0e4a6e 50%, #1e7a8c 100%)",
    accent: "linear-gradient(135deg,#22d3ee,#3b82f6)",
    label: "Байкал",
    emoji: "🌊"
  },
  neon: {
    bg: "radial-gradient(circle at 50% 30%, #00ff8855, transparent 60%), #001a14",
    accent: "linear-gradient(135deg,#00ff88,#00d4ff)",
    label: "Neon flow",
    emoji: "⚡"
  },
  sunset: {
    bg: "linear-gradient(135deg,#ff6b35,#f7a440 50%,#e94e77)",
    accent: "linear-gradient(135deg,#fff,#fde047)",
    label: "Закат",
    emoji: "🌅"
  }
};
function Home() {
  const {
    t
  } = useI18n();
  const [theme, setTheme] = reactExports.useState("default");
  const navigate = useNavigate();
  const cfg = THEMES[theme];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative transition-colors duration-700", style: {
    background: theme === "default" ? void 0 : cfg.bg,
    color: theme === "default" ? void 0 : "#fff"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 -z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -left-24 w-[480px] h-[480px] rounded-full blur-3xl opacity-40", style: {
          background: cfg.accent
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/3 -right-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-30", style: {
          background: cfg.accent
        } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 pt-16 pb-12 sm:pt-24 sm:pb-20 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/80 backdrop-blur border border-border text-primary text-xs font-medium mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5" }),
          " ",
          cfg.label
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-5 leading-none", children: [
          "Baikal",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            background: cfg.accent,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent"
          }, children: "Labs" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `text-xl sm:text-2xl md:text-3xl font-semibold max-w-3xl mx-auto mb-3 ${theme === "default" ? "text-foreground" : "text-white"}`, children: [
          t("home.tagline1"),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            background: cfg.accent,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent"
          }, children: t("home.tagline2") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-base sm:text-lg max-w-2xl mx-auto mb-8 ${theme === "default" ? "text-muted-foreground" : "text-white/80"}`, children: t("home.subtitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: AI_BOT, target: "_blank", rel: "noreferrer", className: "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold hover:opacity-95 transition", style: {
            background: cfg.accent,
            boxShadow: "var(--shadow-glow)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-4 h-4" }),
            " ",
            t("home.ctaAi")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: VPN_BOT, target: "_blank", rel: "noreferrer", className: "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-card border border-border text-foreground font-semibold hover:bg-secondary transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4" }),
            " ",
            t("home.ctaVpn")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-10 sm:gap-6 items-start justify-items-center max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: () => navigate({
              to: "/vpn"
            }), className: "cursor-pointer transition-transform hover:-translate-y-1", role: "link", "aria-label": t("home.vpnPhoneSub"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(VpnPhone, { accent: cfg.accent }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/vpn", className: theme === "default" ? "text-foreground text-center" : "text-white text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: t("home.vpnPhoneTitle") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-sm ${theme === "default" ? "text-muted-foreground" : "text-white/70"}`, children: t("home.vpnPhoneSub") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: () => navigate({
              to: "/ai-bot"
            }), className: "cursor-pointer transition-transform hover:-translate-y-1", role: "link", "aria-label": t("home.aiPhoneSub"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(AiPhone, { accent: cfg.accent }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/ai-bot", className: theme === "default" ? "text-foreground text-center" : "text-white text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: t("home.aiPhoneTitle") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-sm ${theme === "default" ? "text-muted-foreground" : "text-white/70"}`, children: t("home.aiPhoneSub") })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-6xl mx-auto px-6 py-20 grid gap-6 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { href: VPN_BOT, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-6 h-6" }), title: "Baikal VPN", tagline: t("home.pVpnTagline"), points: [t("home.pVpnP1"), t("home.pVpnP2"), t("home.pVpnP3")], cta: t("home.pVpnCta"), accent: cfg.accent }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { href: AI_BOT, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-6 h-6" }), title: "Baikal AI", tagline: t("home.pAiTagline"), points: [t("home.pAiP1"), t("home.pAiP2"), t("home.pAiP3")], cta: t("home.pAiCta"), accent: cfg.accent })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-6xl mx-auto px-6 pb-20 grid gap-6 sm:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5" }), value: "<50 ms", label: t("home.statPing") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-5 h-5" }), value: "20+", label: t("home.statServers") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5" }), value: "10+", label: t("home.statModels") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-6xl mx-auto px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/help", className: "group rounded-3xl border border-border bg-card p-8 hover:border-primary/40 transition flex items-start gap-5 max-w-xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center text-primary-foreground", style: {
        background: "var(--gradient-hero)"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { className: "w-6 h-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground mb-1", children: t("home.helpTitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: t("home.helpDesc") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-primary font-medium text-sm mt-3", children: [
          t("home.helpOpen"),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
        ] })
      ] })
    ] }) })
  ] });
}
function ProductCard({
  href,
  icon,
  title,
  tagline,
  points,
  cta,
  accent
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href, target: "_blank", rel: "noreferrer", className: "group relative overflow-hidden rounded-3xl border border-border bg-card p-8 hover:border-primary/40 transition-all hover:-translate-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity", style: {
      background: accent
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-white", style: {
        background: accent
      }, children: icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-foreground mb-1.5", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-5", children: tagline }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 mb-6", children: points.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-sm text-foreground flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary" }),
        " ",
        p
      ] }, p)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-primary font-medium text-sm", children: [
        cta,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
      ] })
    ] })
  ] });
}
function Stat({
  icon,
  value,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary mb-3", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-semibold text-foreground", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: label })
  ] });
}
function PhoneShell({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-[260px] sm:w-[280px] animate-[float_6s_ease-in-out_infinite]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-[2.6rem] p-[6px] bg-gradient-to-b from-slate-800 to-black", style: {
    filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.45))"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[2.3rem] bg-white overflow-hidden relative", style: {
    aspectRatio: "9 / 19.5"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-black rounded-full z-20" }),
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-1 bg-black/80 rounded-full" })
  ] }) }) });
}
function VpnPhone({
  accent
}) {
  const {
    t
  } = useI18n();
  const [connected, setConnected] = reactExports.useState(true);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PhoneShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center px-6 pt-3 pb-1 text-[10px] font-semibold text-slate-900", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "9:41" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "100%" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 pt-6 pb-3 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold tracking-widest text-slate-500 uppercase", children: t("phone.vpnBrand") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[16px] font-extrabold text-slate-900 mt-0.5", children: t("phone.vpnProtected") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center px-6 pt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-36 h-36 rounded-full flex items-center justify-center transition-all", style: {
        background: connected ? accent : "linear-gradient(135deg,#cbd5e1,#94a3b8)",
        boxShadow: connected ? "0 0 40px rgba(59,130,246,0.55)" : "none"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-2 rounded-full bg-white/15 backdrop-blur-sm" }),
        connected ? /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-14 h-14 text-white relative z-10", strokeWidth: 2.5 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "w-14 h-14 text-white relative z-10", strokeWidth: 2.5 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-500", children: t("phone.vpnServer") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] font-semibold text-slate-900", children: "🇩🇪 Frankfurt · 38 ms" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
        e.stopPropagation();
        setConnected((v) => !v);
      }, className: "mt-4 w-full py-2 rounded-full text-[11px] font-semibold text-white transition", style: {
        background: connected ? "#0f172a" : accent
      }, children: connected ? t("phone.vpnDisconnect") : t("phone.vpnConnect") })
    ] })
  ] });
}
function AiPhone({
  accent
}) {
  const {
    t
  } = useI18n();
  const navigate = useNavigate();
  const menuItems = ["home.aiMenu1", "home.aiMenu2", "home.aiMenu3", "home.aiMenu4", "home.aiMenu5"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full", children: [
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-emerald-500 leading-tight", children: t("phone.aiOnline") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-4 h-4 text-slate-500 shrink-0" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 px-4 py-5 bg-gradient-to-b from-sky-50 to-white flex flex-col gap-2.5 overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-medium text-slate-500 text-center mb-1", children: t("home.aiMenuTitle") }),
      menuItems.map((key) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
        e.stopPropagation();
        navigate({
          to: "/ai-bot"
        });
      }, className: "w-full text-left rounded-xl bg-white border border-slate-200 px-3 py-2.5 text-[11px] font-medium text-slate-800 shadow-sm hover:border-primary/40 hover:bg-slate-50 transition active:scale-[0.98]", children: t(key) }, key))
    ] })
  ] }) });
}
export {
  Home as component
};
