import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Bot, ArrowRight, MessageSquare, Image as ImageIcon, Wand2, CreditCard, Check, Sparkles, Loader2, Menu, Send, Mountain } from "lucide-react";
import { generateImage } from "@/lib/image-gen.functions";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/ai-bot")({
  head: () => ({
    meta: [
      { title: "Baikal AI — Творчество без границ" },
      { name: "description", content: "ChatGPT, Midjourney, Flux, Kling в одном Telegram-боте." },
    ],
  }),
  component: AiBotPage,
});

const TG_LINK = "https://t.me/baikal_ai_bot";

type DemoMsg = { from: "user" | "bot"; text: string; image?: boolean };

function AiBotPage() {
  const { t } = useI18n();
  const genFn = useServerFn(generateImage);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [fieldError, setFieldError] = useState(false);

  const onGenerate = async () => {
    const p = prompt.trim();
    if (!p) { setFieldError(true); setError(t("ai.genErrEmpty")); return; }
    setFieldError(false); setLoading(true); setError(null);
    try {
      const res = await genFn({ data: { prompt: p } });
      if (res.error) setError(res.error);
      else setImages((prev) => [res.image, ...prev]);
    } catch {
      setError(t("ai.genErr"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)", opacity: 0.06 }} />
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-12 grid gap-12 md:grid-cols-2 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
              <Bot className="w-3.5 h-3.5" /> {t("ai.badge")}
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-foreground mb-5">
              {t("ai.title1")}<br/>
              <span style={{ background: "var(--gradient-hero)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{t("ai.title2")}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">{t("ai.subtitle")}</p>
            <a href={TG_LINK} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-95 transition"
              style={{ boxShadow: "var(--shadow-glow)" }}>
              {t("ai.cta")} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="flex justify-center">
            <AiDemoPhone />
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5" /> {t("ai.genBadge")}
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-3">{t("ai.genTitle")}</h2>
            <p className="text-muted-foreground mb-7 max-w-xl mx-auto">{t("ai.genDesc")}</p>
          </div>

          <textarea
            value={prompt}
            onChange={(e) => { setPrompt(e.target.value); if (fieldError) setFieldError(false); }}
            disabled={loading}
            rows={3}
            placeholder={t("ai.genPlaceholder")}
            className={`w-full rounded-2xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none ${
              fieldError ? "border-destructive ring-2 ring-destructive/30" : "border-border"
            }`}
          />

          <div className="mt-5 flex justify-center">
            <button onClick={onGenerate} disabled={loading}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-95 transition disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ boxShadow: "var(--shadow-glow)" }}>
              {loading ? (<><Loader2 className="w-4 h-4 animate-spin" /> {t("ai.genWorking")}</>) : (<>{t("ai.genBtn")}</>)}
            </button>
          </div>

          <div className="mt-8 space-y-6">
            {loading && (
              <div className="min-h-[280px] rounded-2xl border border-dashed border-border bg-muted/30 flex flex-col items-center justify-center overflow-hidden">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
                <p className="text-sm text-muted-foreground mt-3">{t("ai.genWorking")}</p>
              </div>
            )}
            {!loading && images.length ===  0 && !error && (
              <div className="min-h-[280px] rounded-2xl border border-dashed border-border bg-muted/30 flex items-center justify-center overflow-hidden">
                <p className="text-sm text-muted-foreground p-12 text-center">{t("ai.genEmpty")}</p>
              </div>
            )}
            {!loading && error && images.length === 0 && (
              <div className="min-h-[280px] rounded-2xl border border-dashed border-border bg-muted/30 flex items-center justify-center overflow-hidden">
                <p className="text-sm text-destructive p-12 text-center">{error}</p>
              </div>
            )}
            {!loading && images.map((img, idx) => (
              <div key={idx} className="rounded-2xl border border-border bg-card overflow-hidden">
                <img src={img} alt={`${t("ai.genBadge")} ${idx + 1}`} className="w-full h-auto" />
                <div className="px-5 py-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2">
                  <span className="text-sm font-bold text-primary">{t("ai.promoText")}</span>
                  <Link
                    to="/ai-pricing"
                    className="text-sm font-medium text-primary underline-offset-4 hover:underline transition"
                  >
                    {t("ai.promoLink")}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <ModelCard icon={<MessageSquare />} name={t("ai.mChat")} desc={t("ai.mChatD")} />
          <ModelCard icon={<ImageIcon />} name={t("ai.mMid")} desc={t("ai.mMidD")} />
          <ModelCard icon={<Wand2 />} name={t("ai.mFlux")} desc={t("ai.mFluxD")} />
          <ModelCard icon={<Bot />} name={t("ai.mOther")} desc={t("ai.mOtherD")} />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-8">
          <h3 className="text-2xl font-semibold text-foreground mb-3">{t("ai.cardIT")}</h3>
          <p className="text-muted-foreground mb-5">{t("ai.cardID")}</p>
          <ul className="space-y-2 text-sm text-foreground">
            {[t("ai.cardIP1"), t("ai.cardIP2"), t("ai.cardIP3")].map((x) => (
              <li key={x} className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> {x}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
            <CreditCard className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-semibold text-foreground mb-3">{t("ai.cardPT")}</h3>
          <p className="text-muted-foreground mb-5">{t("ai.cardPD")}</p>
          <ul className="space-y-2 text-sm text-foreground">
            {[t("ai.cardPP1"), t("ai.cardPP2"), t("ai.cardPP3")].map((x) => (
              <li key={x} className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> {x}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="rounded-3xl p-10 sm:p-14 text-center text-primary-foreground" style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-3">{t("ai.finalT")}</h2>
          <p className="opacity-90 mb-7 max-w-xl mx-auto">{t("ai.finalD")}</p>
          <a href={TG_LINK} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-card text-foreground font-medium hover:bg-background transition">
            {t("ai.finalCta")} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}

function ModelCard({ icon, name, desc }: { icon: React.ReactNode; name: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 [&>svg]:w-5 [&>svg]:h-5">
        {icon}
      </div>
      <h4 className="font-semibold text-foreground">{name}</h4>
      <p className="text-sm text-muted-foreground mt-1">{desc}</p>
    </div>
  );
}

function AiDemoPhone() {
  const { t } = useI18n();
  const DEMO_PROMPTS = [
    { label: t("ai.demoP1L"), user: t("ai.demoP1U"), reply: { from: "bot" as const, text: t("ai.demoP1R"), image: true } },
    { label: t("ai.demoP2L"), user: t("ai.demoP2U"), reply: { from: "bot" as const, text: t("ai.demoP2R") } },
    { label: t("ai.demoP3L"), user: t("ai.demoP3U"), reply: { from: "bot" as const, text: t("ai.demoP3R") } },
  ];

  const [msgs, setMsgs] = useState<DemoMsg[]>([{ from: "bot", text: t("ai.demoGreeting") }]);
  const [typing, setTyping] = useState(false);

  const runPrompt = (p: typeof DEMO_PROMPTS[number]) => {
    if (typing) return;
    setMsgs((m) => [...m, { from: "user", text: p.user }]);
    setTyping(true);
    window.setTimeout(() => {
      setMsgs((m) => [...m, p.reply]);
      setTyping(false);
    }, 900);
  };

  const reset = () => setMsgs([{ from: "bot", text: t("phone.aiCleared") }]);

  const accent = "var(--gradient-hero)";

  return (
    <div className="flex flex-col sm:flex-row items-center gap-6">
      <div className="relative w-[260px] sm:w-[280px] animate-[float_6s_ease-in-out_infinite]">
        <div className="relative rounded-[2.6rem] p-[6px] bg-gradient-to-b from-slate-800 to-black" style={{ filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.45))" }}>
          <div className="rounded-[2.3rem] bg-white overflow-hidden relative" style={{ aspectRatio: "9 / 19.5" }}>
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-black rounded-full z-20" />

            <div className="flex justify-between items-center px-6 pt-3 pb-1 text-[10px] font-semibold text-slate-900">
              <span>9:41</span><span>100%</span>
            </div>
            <div className="flex items-center gap-2 px-3 pt-4 pb-2 border-b border-slate-200">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0" style={{ background: accent }}>B</div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold text-[12px] text-slate-900 leading-tight">Baikal AI</div>
                <div className="text-[9px] text-emerald-500 leading-tight">{typing ? t("phone.aiTyping") : t("phone.aiOnline")}</div>
              </div>
              <Menu className="w-4 h-4 text-slate-500 shrink-0" />
            </div>

            <div className="px-2.5 py-3 space-y-2 bg-gradient-to-b from-sky-50 to-white overflow-y-auto" style={{ height: "70%" }}>
              {msgs.map((m, i) => (
                <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[82%] rounded-2xl px-3 py-1.5 text-[10.5px] leading-snug whitespace-pre-line ${
                      m.from === "user" ? "rounded-tr-md text-white" : "rounded-tl-md bg-white border border-slate-200 text-slate-800 shadow-sm"
                    }`}
                    style={m.from === "user" ? { background: accent } : undefined}
                  >
                    {m.image && (
                      <div className="relative w-40 aspect-[4/3] rounded-lg overflow-hidden mb-1.5" style={{ background: "linear-gradient(135deg,#f97316,#db2777 60%,#1e3a8a)" }}>
                        <Mountain className="absolute bottom-1 left-2 w-10 h-10 text-white/85" strokeWidth={1.5} />
                        <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-yellow-200/90 blur-[1px]" />
                        <ImageIcon className="absolute top-1.5 right-1.5 w-3 h-3 text-white/80" />
                      </div>
                    )}
                    {m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-tl-md bg-white border border-slate-200 px-3 py-2 shadow-sm flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:120ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:240ms]" />
                  </div>
                </div>
              )}
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-2.5 py-2 flex items-center gap-1.5">
              <div className="flex-1 h-7 rounded-full bg-slate-100 px-3 text-[10.5px] text-slate-400 flex items-center">{t("phone.aiMsg")}</div>
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white shrink-0" style={{ background: accent }}>
                <Send className="w-3 h-3" />
              </div>
            </div>

            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-1 bg-black/80 rounded-full z-10" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full sm:w-auto sm:max-w-[240px]">
        <div className="text-xs uppercase tracking-widest text-primary font-medium">{t("ai.demoTry")}</div>
        {DEMO_PROMPTS.map((p) => (
          <button key={p.label} onClick={() => runPrompt(p)} disabled={typing}
            className="text-left rounded-2xl border border-border bg-card px-4 py-3 hover:border-primary/50 hover:bg-secondary transition disabled:opacity-60 disabled:cursor-not-allowed">
            <div className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-primary" /> {p.label}
            </div>
          </button>
        ))}
        <button onClick={reset} className="text-xs text-muted-foreground hover:text-foreground transition text-left px-1">
          {t("ai.demoClear")}
        </button>
      </div>
    </div>
  );
}
