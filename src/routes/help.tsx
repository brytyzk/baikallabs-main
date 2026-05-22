import { createFileRoute } from "@tanstack/react-router";
import { Shield, Bot, Download, Key, MessageCircle, ChevronDown, BookOpen } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Помощь и FAQ — BaikalLabs" },
      { name: "description", content: "Как подключить Байкал VPN и начать пользоваться AI-ботом. Ответы на частые вопросы." },
      { property: "og:title", content: "Помощь и FAQ — BaikalLabs" },
      { property: "og:description", content: "Инструкции, гайды и ответы на частые вопросы." },
    ],
  }),
  component: HelpPage,
});

const CONTACT_EMAIL = "baikallabs.info@gmail.com";

function HelpPage() {
  const { t } = useI18n();
  const FAQ = [
    { q: t("help.faqQ1"), a: t("help.faqA1") },
    { q: t("help.faqQ2"), a: t("help.faqA2") },
    { q: t("help.faqQ3"), a: t("help.faqA3") },
    { q: t("help.faqQ4"), a: t("help.faqA4") },
    { q: t("help.faqQ5"), a: t("help.faqA5") },
    { q: t("help.faqQ6"), a: t("help.faqA6") },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 sm:py-16">
      <div className="mb-10">
        <div className="text-xs uppercase tracking-widest text-primary font-medium mb-2">{t("help.badge")}</div>
        <h1 className="text-4xl sm:text-5xl font-semibold text-foreground">{t("help.title")}</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl">{t("help.intro")}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 mb-12">
        <QuickStart
          icon={<Shield className="w-5 h-5" />}
          title={t("help.qsVpnT")}
          steps={[
            { icon: <MessageCircle className="w-4 h-4" />, text: t("help.qsVpnS1") },
            { icon: <Download className="w-4 h-4" />, text: t("help.qsVpnS2") },
            { icon: <Key className="w-4 h-4" />, text: t("help.qsVpnS3") },
            { icon: <Shield className="w-4 h-4" />, text: t("help.qsVpnS4") },
          ]}
        />
        <QuickStart
          icon={<Bot className="w-5 h-5" />}
          title={t("help.qsAiT")}
          steps={[
            { icon: <MessageCircle className="w-4 h-4" />, text: t("help.qsAiS1") },
            { icon: <BookOpen className="w-4 h-4" />, text: t("help.qsAiS2") },
            { icon: <Key className="w-4 h-4" />, text: t("help.qsAiS3") },
            { icon: <Bot className="w-4 h-4" />, text: t("help.qsAiS4") },
          ]}
        />
      </div>

      <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-5">{t("help.faqT")}</h2>
      <div className="rounded-3xl border border-border bg-card divide-y divide-border overflow-hidden">
        {FAQ.map((item, i) => (
          <FaqItem key={i} q={item.q} a={item.a} />
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-border bg-card p-8 text-center">
        <h3 className="text-xl font-semibold text-foreground mb-2">{t("help.nfT")}</h3>
        <p className="text-muted-foreground mb-5">{t("help.nfD")}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-95 transition"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            ✉ {t("help.nfCta")}
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-border text-foreground hover:bg-secondary transition"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </div>
  );
}

function QuickStart({
  icon, title, steps,
}: { icon: React.ReactNode; title: string; steps: { icon: React.ReactNode; text: string }[] }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-7">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
      <ol className="space-y-3">
        {steps.map((s, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-7 h-7 shrink-0 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center">
              {i + 1}
            </div>
            <div className="text-sm text-foreground flex items-center gap-2 pt-1">
              <span className="text-primary">{s.icon}</span> {s.text}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOpen((o) => !o)}
      className="w-full text-left p-5 sm:p-6 hover:bg-secondary/40 transition"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-medium text-foreground">{q}</span>
        <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </div>
      {open && <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{a}</p>}
    </button>
  );
}
