import { J as jsxRuntimeExports, S as reactExports } from "./server-BrW-spyj.js";
import { c as createLucideIcon, u as useI18n, G as Globe } from "./router-cWw2dBF4.js";
import { S as Shield } from "./shield-DE0QxS9M.js";
import { A as ArrowRight } from "./arrow-right-JQqRhRCL.js";
import { Z as Zap } from "./zap-C-YNkz9s.js";
import { L as Lock, W as Wifi } from "./wifi-DUuI6tdB.js";
import { C as Check } from "./check-Doa8PGRz.js";
import { L as LoaderCircle } from "./loader-circle-92gzzzcb.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./types-DGfzljZx.js";
const __iconNode = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
];
const Smartphone = createLucideIcon("smartphone", __iconNode);
const TG_LINK = "https://t.me/baikal_vpn_kbot";
function VpnPage() {
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10", style: {
        background: "var(--gradient-hero)",
        opacity: 0.06
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 pt-20 pb-12 grid gap-12 md:grid-cols-2 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-3.5 h-3.5" }),
            " ",
            t("vpn.badge")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl sm:text-6xl font-extrabold tracking-tight text-foreground mb-5", children: [
            t("vpn.title1"),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              background: "var(--gradient-hero)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent"
            }, children: t("vpn.title2") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mb-6", children: t("vpn.subtitle") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-baseline gap-2 mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl font-black text-foreground", children: "189 ₽" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: t("vpn.perMonth") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: TG_LINK, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-95 transition", style: {
            boxShadow: "var(--shadow-glow)"
          }, children: [
            t("vpn.cta"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(VpnConnectPhone, {}) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-6xl mx-auto px-6 py-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Feature, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, {}), title: t("vpn.fSpeedT"), text: t("vpn.fSpeedX") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Feature, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, {}), title: t("vpn.fBypassT"), text: t("vpn.fBypassX") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Feature, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, {}), title: t("vpn.fDevT"), text: t("vpn.fDevX") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Feature, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, {}), title: t("vpn.fEncT"), text: t("vpn.fEncX") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Feature, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, {}), title: t("vpn.fLogT"), text: t("vpn.fLogX") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Feature, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, {}), title: t("vpn.fQuickT"), text: t("vpn.fQuickX") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-4xl mx-auto px-6 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl p-10 sm:p-14 text-center text-primary-foreground", style: {
      background: "var(--gradient-hero)",
      boxShadow: "var(--shadow-glow)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-semibold mb-3", children: t("vpn.finalT") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "opacity-90 mb-7 max-w-xl mx-auto", children: t("vpn.finalD") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-sm opacity-95", children: [t("vpn.finalP1"), t("vpn.finalP2"), t("vpn.finalP3")].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "inline-flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4" }),
        " ",
        x
      ] }, x)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: TG_LINK, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-card text-foreground font-medium hover:bg-background transition", children: [
        t("vpn.finalCta"),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] })
    ] }) })
  ] });
}
function Feature({
  icon,
  title,
  text
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 [&>svg]:w-5 [&>svg]:h-5", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-1.5", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: text })
  ] });
}
function VpnConnectPhone() {
  const {
    t
  } = useI18n();
  const [state, setState] = reactExports.useState("idle");
  reactExports.useEffect(() => {
    if (state !== "connecting") return;
    const tt = window.setTimeout(() => setState("connected"), 1600);
    return () => window.clearTimeout(tt);
  }, [state]);
  const toggle = () => {
    if (state === "idle") setState("connecting");
    else if (state === "connected") setState("idle");
  };
  const accent = "var(--gradient-hero)";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-[260px] sm:w-[300px] animate-[float_6s_ease-in-out_infinite]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-[2.6rem] p-[6px] bg-gradient-to-b from-slate-800 to-black", style: {
    filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.45))"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[2.3rem] bg-white overflow-hidden relative", style: {
    aspectRatio: "9 / 19.5"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-black rounded-full z-20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center px-6 pt-3 pb-1 text-[10px] font-semibold text-slate-900", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "9:41" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "100%" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 pt-6 pb-3 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold tracking-widest text-slate-500 uppercase", children: t("phone.vpnBrand") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[16px] font-extrabold text-slate-900 mt-0.5", children: [
        state === "idle" && t("phone.vpnNot"),
        state === "connecting" && t("phone.vpnConnecting"),
        state === "connected" && t("phone.vpnProtected")
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center px-6 pt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-40 h-40 rounded-full flex items-center justify-center transition-all", style: {
        background: state === "connected" ? accent : "linear-gradient(135deg,#cbd5e1,#94a3b8)",
        boxShadow: state === "connected" ? "0 0 50px rgba(59,130,246,0.6)" : "none"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-2 rounded-full bg-white/15 backdrop-blur-sm" }),
        state === "connecting" ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-16 h-16 text-white relative z-10 animate-spin", strokeWidth: 2.2 }) : state === "connected" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-16 h-16 text-white relative z-10", strokeWidth: 2.5 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "w-16 h-16 text-white relative z-10", strokeWidth: 2.5 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-500", children: t("phone.vpnServer") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold text-slate-900", children: "🇩🇪 Frankfurt · 38 ms" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: toggle, disabled: state === "connecting", className: "mt-5 w-full py-2.5 rounded-full text-[12px] font-semibold text-white transition disabled:opacity-70", style: {
        background: state === "connected" ? "#0f172a" : "var(--gradient-hero)"
      }, children: [
        state === "idle" && t("phone.vpnConnect"),
        state === "connecting" && t("phone.vpnConnectingBtn"),
        state === "connected" && t("phone.vpnDisconnect")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9.5px] text-slate-400 mt-2 text-center", children: t("phone.vpnHint") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-1 bg-black/80 rounded-full" })
  ] }) }) });
}
export {
  VpnPage as component
};
