import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Shield, Zap, Globe, Smartphone, Lock, ArrowRight, Check, Wifi, Loader2 } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/vpn")({
  head: () => ({
    meta: [
      { title: "Baikal VPN — Безлимит и скорость" },
      { name: "description", content: "Baikal VPN: до 5 устройств, обход блокировок, защита в публичных Wi-Fi. 189 ₽ / месяц. Подключение за минуту в Telegram." },
      { property: "og:title", content: "Baikal VPN — Безлимит и скорость" },
      { property: "og:description", content: "До 5 устройств. Обход блокировок. Защита в публичных Wi-Fi." },
    ],
  }),
  component: VpnPage,
});

const TG_LINK = "https://t.me/baikal_vpn_kbot";

function VpnPage() {
  const { t } = useI18n();
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)", opacity: 0.06 }} />
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-12 grid gap-12 md:grid-cols-2 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
              <Shield className="w-3.5 h-3.5" /> {t("vpn.badge")}
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-foreground mb-5">
              {t("vpn.title1")}<br/>
              <span style={{ background: "var(--gradient-hero)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{t("vpn.title2")}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-6">
              {t("vpn.subtitle")}
            </p>
            <div className="inline-flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-black text-foreground">189 ₽</span>
              <span className="text-muted-foreground">{t("vpn.perMonth")}</span>
            </div>
            <div>
              <a
                href={TG_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-95 transition"
                style={{ boxShadow: "var(--shadow-glow)" }}
              >
                {t("vpn.cta")} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <VpnConnectPhone />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Feature icon={<Zap />} title={t("vpn.fSpeedT")} text={t("vpn.fSpeedX")} />
        <Feature icon={<Globe />} title={t("vpn.fBypassT")} text={t("vpn.fBypassX")} />
        <Feature icon={<Smartphone />} title={t("vpn.fDevT")} text={t("vpn.fDevX")} />
        <Feature icon={<Lock />} title={t("vpn.fEncT")} text={t("vpn.fEncX")} />
        <Feature icon={<Shield />} title={t("vpn.fLogT")} text={t("vpn.fLogX")} />
        <Feature icon={<ArrowRight />} title={t("vpn.fQuickT")} text={t("vpn.fQuickX")} />
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="rounded-3xl p-10 sm:p-14 text-center text-primary-foreground" style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-3">{t("vpn.finalT")}</h2>
          <p className="opacity-90 mb-7 max-w-xl mx-auto">{t("vpn.finalD")}</p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-sm opacity-95">
            {[t("vpn.finalP1"), t("vpn.finalP2"), t("vpn.finalP3")].map((x) => (
              <li key={x} className="inline-flex items-center gap-1.5"><Check className="w-4 h-4" /> {x}</li>
            ))}
          </ul>
          <a
            href={TG_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-card text-foreground font-medium hover:bg-background transition"
          >
            {t("vpn.finalCta")} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 [&>svg]:w-5 [&>svg]:h-5">
        {icon}
      </div>
      <h3 className="font-semibold text-foreground mb-1.5">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
}

type State = "idle" | "connecting" | "connected";

function VpnConnectPhone() {
  const { t } = useI18n();
  const [state, setState] = useState<State>("idle");

  useEffect(() => {
    if (state !== "connecting") return;
    const tt = window.setTimeout(() => setState("connected"), 1600);
    return () => window.clearTimeout(tt);
  }, [state]);

  const toggle = () => {
    if (state === "idle") setState("connecting");
    else if (state === "connected") setState("idle");
  };

  const accent = "var(--gradient-hero)";

  return (
    <div className="relative w-[260px] sm:w-[300px] animate-[float_6s_ease-in-out_infinite]">
      <div className="relative rounded-[2.6rem] p-[6px] bg-gradient-to-b from-slate-800 to-black"
        style={{ filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.45))" }}>
        <div className="rounded-[2.3rem] bg-white overflow-hidden relative" style={{ aspectRatio: "9 / 19.5" }}>
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-black rounded-full z-20" />

          <div className="flex justify-between items-center px-6 pt-3 pb-1 text-[10px] font-semibold text-slate-900">
            <span>9:41</span><span>100%</span>
          </div>
          <div className="px-5 pt-6 pb-3 text-center">
            <div className="text-[10px] font-semibold tracking-widest text-slate-500 uppercase">{t("phone.vpnBrand")}</div>
            <div className="text-[16px] font-extrabold text-slate-900 mt-0.5">
              {state === "idle" && t("phone.vpnNot")}
              {state === "connecting" && t("phone.vpnConnecting")}
              {state === "connected" && t("phone.vpnProtected")}
            </div>
          </div>

          <div className="flex flex-col items-center px-6 pt-2">
            <div
              className="relative w-40 h-40 rounded-full flex items-center justify-center transition-all"
              style={{
                background: state === "connected" ? accent : "linear-gradient(135deg,#cbd5e1,#94a3b8)",
                boxShadow: state === "connected" ? "0 0 50px rgba(59,130,246,0.6)" : "none",
              }}
            >
              <div className="absolute inset-2 rounded-full bg-white/15 backdrop-blur-sm" />
              {state === "connecting" ? (
                <Loader2 className="w-16 h-16 text-white relative z-10 animate-spin" strokeWidth={2.2} />
              ) : state === "connected" ? (
                <Lock className="w-16 h-16 text-white relative z-10" strokeWidth={2.5} />
              ) : (
                <Wifi className="w-16 h-16 text-white relative z-10" strokeWidth={2.5} />
              )}
            </div>

            <div className="mt-5 text-center">
              <div className="text-[10px] text-slate-500">{t("phone.vpnServer")}</div>
              <div className="text-[13px] font-semibold text-slate-900">🇩🇪 Frankfurt · 38 ms</div>
            </div>

            <button
              onClick={toggle}
              disabled={state === "connecting"}
              className="mt-5 w-full py-2.5 rounded-full text-[12px] font-semibold text-white transition disabled:opacity-70"
              style={{ background: state === "connected" ? "#0f172a" : "var(--gradient-hero)" }}
            >
              {state === "idle" && t("phone.vpnConnect")}
              {state === "connecting" && t("phone.vpnConnectingBtn")}
              {state === "connected" && t("phone.vpnDisconnect")}
            </button>
            <div className="text-[9.5px] text-slate-400 mt-2 text-center">{t("phone.vpnHint")}</div>
          </div>

          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-1 bg-black/80 rounded-full" />
        </div>
      </div>
    </div>
  );
}
