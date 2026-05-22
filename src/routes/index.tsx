import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  Shield, Bot, ArrowRight, Sparkles, Zap, Globe, HelpCircle,
  Menu, Wifi, Lock,
} from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const VPN_BOT = "https://t.me/baikal_vpn_kbot";
const AI_BOT = "https://t.me/baikal_ai_bot";

type Theme = "default" | "cyber" | "space" | "baikal" | "neon" | "sunset";

const THEMES: Record<Theme, { bg: string; accent: string; label: string; emoji: string }> = {
  default: { bg: "transparent", accent: "var(--gradient-hero)", label: "BaikalLabs", emoji: "✨" },
  cyber:   { bg: "radial-gradient(circle at 20% 20%, #ff00aa33, transparent 60%), radial-gradient(circle at 80% 70%, #00f0ff33, transparent 60%), #0a0014", accent: "linear-gradient(135deg,#ff00aa,#00f0ff)", label: "Cyberpunk mode", emoji: "🌆" },
  space:   { bg: "radial-gradient(circle at 30% 30%, #6a00ff44, transparent 60%), radial-gradient(circle at 70% 60%, #00d4ff33, transparent 60%), #050018", accent: "linear-gradient(135deg,#7c3aed,#06b6d4)", label: "Космос", emoji: "🚀" },
  baikal:  { bg: "linear-gradient(135deg, #062847 0%, #0e4a6e 50%, #1e7a8c 100%)", accent: "linear-gradient(135deg,#22d3ee,#3b82f6)", label: "Байкал", emoji: "🌊" },
  neon:    { bg: "radial-gradient(circle at 50% 30%, #00ff8855, transparent 60%), #001a14", accent: "linear-gradient(135deg,#00ff88,#00d4ff)", label: "Neon flow", emoji: "⚡" },
  sunset:  { bg: "linear-gradient(135deg,#ff6b35,#f7a440 50%,#e94e77)", accent: "linear-gradient(135deg,#fff,#fde047)", label: "Закат", emoji: "🌅" },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BaikalLabs — VPN и AI-бот в одном Telegram" },
      { name: "description", content: "BaikalLabs: чистый интернет и мощный ИИ. VPN-сервис и универсальный AI-бот — всё в одном Telegram." },
      { property: "og:title", content: "BaikalLabs — VPN и AI-бот" },
      { property: "og:description", content: "Чистый интернет. Мощный ИИ. В одном месте." },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useI18n();
  const [theme, setTheme] = useState<Theme>("default");
  const navigate = useNavigate();

  const cfg = THEMES[theme];

  return (
    <div className="relative transition-colors duration-700" style={{ background: theme === "default" ? undefined : cfg.bg, color: theme === "default" ? undefined : "#fff" }}>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-24 w-[480px] h-[480px] rounded-full blur-3xl opacity-40" style={{ background: cfg.accent }} />
          <div className="absolute top-1/3 -right-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-30" style={{ background: cfg.accent }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-16 pb-12 sm:pt-24 sm:pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/80 backdrop-blur border border-border text-primary text-xs font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" /> {cfg.label}
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-5 leading-none">
            Baikal<span style={{ background: cfg.accent, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Labs</span>
          </h1>
          <p className={`text-xl sm:text-2xl md:text-3xl font-semibold max-w-3xl mx-auto mb-3 ${theme === "default" ? "text-foreground" : "text-white"}`}>
            {t("home.tagline1")} <span style={{ background: cfg.accent, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{t("home.tagline2")}</span>
          </p>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto mb-8 ${theme === "default" ? "text-muted-foreground" : "text-white/80"}`}>
            {t("home.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
            <a href={AI_BOT} target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold hover:opacity-95 transition"
              style={{ background: cfg.accent, boxShadow: "var(--shadow-glow)" }}>
              <Bot className="w-4 h-4" /> {t("home.ctaAi")}
            </a>
            <a href={VPN_BOT} target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-card border border-border text-foreground font-semibold hover:bg-secondary transition">
              <Shield className="w-4 h-4" /> {t("home.ctaVpn")}
            </a>
          </div>

          {/* TWO PHONES */}
          <div className="grid sm:grid-cols-2 gap-10 sm:gap-6 items-start justify-items-center max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-4">
              <div
                onClick={() => navigate({ to: "/vpn" })}
                className="cursor-pointer transition-transform hover:-translate-y-1"
                role="link"
                aria-label={t("home.vpnPhoneSub")}
              >
                <VpnPhone accent={cfg.accent} />
              </div>
              <Link to="/vpn" className={theme === "default" ? "text-foreground text-center" : "text-white text-center"}>
                <div className="font-bold">{t("home.vpnPhoneTitle")}</div>
                <div className={`text-sm ${theme === "default" ? "text-muted-foreground" : "text-white/70"}`}>{t("home.vpnPhoneSub")}</div>
              </Link>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div
                onClick={() => navigate({ to: "/ai-bot" })}
                className="cursor-pointer transition-transform hover:-translate-y-1"
                role="link"
                aria-label={t("home.aiPhoneSub")}
              >
                <AiPhone accent={cfg.accent} />
              </div>
              <Link to="/ai-bot" className={theme === "default" ? "text-foreground text-center" : "text-white text-center"}>
                <div className="font-bold">{t("home.aiPhoneTitle")}</div>
                <div className={`text-sm ${theme === "default" ? "text-muted-foreground" : "text-white/70"}`}>{t("home.aiPhoneSub")}</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid gap-6 md:grid-cols-2">
        <ProductCard href={VPN_BOT} icon={<Shield className="w-6 h-6" />} title="Baikal VPN" tagline={t("home.pVpnTagline")} points={[t("home.pVpnP1"), t("home.pVpnP2"), t("home.pVpnP3")]} cta={t("home.pVpnCta")} accent={cfg.accent} />
        <ProductCard href={AI_BOT} icon={<Bot className="w-6 h-6" />} title="Baikal AI" tagline={t("home.pAiTagline")} points={[t("home.pAiP1"), t("home.pAiP2"), t("home.pAiP3")]} cta={t("home.pAiCta")} accent={cfg.accent} />
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid gap-6 sm:grid-cols-3">
        <Stat icon={<Zap className="w-5 h-5" />} value="<50 ms" label={t("home.statPing")} />
        <Stat icon={<Globe className="w-5 h-5" />} value="20+" label={t("home.statServers")} />
        <Stat icon={<Sparkles className="w-5 h-5" />} value="10+" label={t("home.statModels")} />
      </section>

      {/* COMMUNITY CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <Link to="/help" className="group rounded-3xl border border-border bg-card p-8 hover:border-primary/40 transition flex items-start gap-5 max-w-xl mx-auto">
          <div className="w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
            <HelpCircle className="w-6 h-6" />
          </div>
          <div className="min-w-0">
            <h3 className="text-xl font-semibold text-foreground mb-1">{t("home.helpTitle")}</h3>
            <p className="text-muted-foreground text-sm">{t("home.helpDesc")}</p>
            <span className="inline-flex items-center gap-1.5 text-primary font-medium text-sm mt-3">
              {t("home.helpOpen")} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </Link>
      </section>
    </div>
  );
}

function ProductCard({ href, icon, title, tagline, points, cta, accent }: { href: string; icon: React.ReactNode; title: string; tagline: string; points: string[]; cta: string; accent: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer"
      className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 hover:border-primary/40 transition-all hover:-translate-y-1">
      <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity" style={{ background: accent }} />
      <div className="relative">
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-white" style={{ background: accent }}>{icon}</div>
        <h3 className="text-2xl font-bold text-foreground mb-1.5">{title}</h3>
        <p className="text-muted-foreground mb-5">{tagline}</p>
        <ul className="space-y-1.5 mb-6">
          {points.map((p) => (
            <li key={p} className="text-sm text-foreground flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {p}
            </li>
          ))}
        </ul>
        <span className="inline-flex items-center gap-1.5 text-primary font-medium text-sm">
          {cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </a>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 text-center">
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary mb-3">{icon}</div>
      <div className="text-3xl font-semibold text-foreground">{value}</div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

/* ---------- Phone shells ---------- */

function PhoneShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[260px] sm:w-[280px] animate-[float_6s_ease-in-out_infinite]">
      <div className="relative rounded-[2.6rem] p-[6px] bg-gradient-to-b from-slate-800 to-black"
        style={{ filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.45))" }}>
        <div className="rounded-[2.3rem] bg-white overflow-hidden relative" style={{ aspectRatio: "9 / 19.5" }}>
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-black rounded-full z-20" />
          {children}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-1 bg-black/80 rounded-full" />
        </div>
      </div>
    </div>
  );
}

function VpnPhone({ accent }: { accent: string }) {
  const { t } = useI18n();
  const [connected, setConnected] = useState(true);
  return (
    <PhoneShell>
      <div className="flex justify-between items-center px-6 pt-3 pb-1 text-[10px] font-semibold text-slate-900">
        <span>9:41</span><span>100%</span>
      </div>
      <div className="px-5 pt-6 pb-3 text-center">
        <div className="text-[10px] font-semibold tracking-widest text-slate-500 uppercase">{t("phone.vpnBrand")}</div>
        <div className="text-[16px] font-extrabold text-slate-900 mt-0.5">{t("phone.vpnProtected")}</div>
      </div>

      <div className="flex flex-col items-center px-6 pt-2">
        <div
          className="relative w-36 h-36 rounded-full flex items-center justify-center transition-all"
          style={{ background: connected ? accent : "linear-gradient(135deg,#cbd5e1,#94a3b8)", boxShadow: connected ? "0 0 40px rgba(59,130,246,0.55)" : "none" }}
        >
          <div className="absolute inset-2 rounded-full bg-white/15 backdrop-blur-sm" />
          {connected ? <Lock className="w-14 h-14 text-white relative z-10" strokeWidth={2.5} /> : <Wifi className="w-14 h-14 text-white relative z-10" strokeWidth={2.5} />}
        </div>

        <div className="mt-4 text-center">
          <div className="text-[10px] text-slate-500">{t("phone.vpnServer")}</div>
          <div className="text-[12px] font-semibold text-slate-900">🇩🇪 Frankfurt · 38 ms</div>
        </div>

        <button onClick={(e) => { e.stopPropagation(); setConnected((v) => !v); }}
          className="mt-4 w-full py-2 rounded-full text-[11px] font-semibold text-white transition"
          style={{ background: connected ? "#0f172a" : accent }}>
          {connected ? t("phone.vpnDisconnect") : t("phone.vpnConnect")}
        </button>
      </div>
    </PhoneShell>
  );
}

function AiPhone({ accent }: { accent: string }) {
  const { t } = useI18n();
  const navigate = useNavigate();

  const menuItems = [
    "home.aiMenu1",
    "home.aiMenu2",
    "home.aiMenu3",
    "home.aiMenu4",
    "home.aiMenu5",
  ] as const;

  return (
    <PhoneShell>
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center px-6 pt-3 pb-1 text-[10px] font-semibold text-slate-900">
          <span>9:41</span><span>100%</span>
        </div>
        <div className="flex items-center gap-2 px-3 pt-4 pb-2 border-b border-slate-200">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0" style={{ background: accent }}>B</div>
          <div className="min-w-0 flex-1">
            <div className="font-semibold text-[12px] text-slate-900 leading-tight">Baikal AI</div>
            <div className="text-[9px] text-emerald-500 leading-tight">{t("phone.aiOnline")}</div>
          </div>
          <Menu className="w-4 h-4 text-slate-500 shrink-0" />
        </div>

        <div className="flex-1 px-4 py-5 bg-gradient-to-b from-sky-50 to-white flex flex-col gap-2.5 overflow-y-auto">
          <div className="text-[10px] font-medium text-slate-500 text-center mb-1">{t("home.aiMenuTitle")}</div>
          {menuItems.map((key) => (
            <button
              key={key}
              onClick={(e) => { e.stopPropagation(); navigate({ to: "/ai-bot" }); }}
              className="w-full text-left rounded-xl bg-white border border-slate-200 px-3 py-2.5 text-[11px] font-medium text-slate-800 shadow-sm hover:border-primary/40 hover:bg-slate-50 transition active:scale-[0.98]"
            >
              {t(key)}
            </button>
          ))}
        </div>
      </div>
    </PhoneShell>
  );
}
