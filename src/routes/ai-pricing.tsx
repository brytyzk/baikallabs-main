import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/i18n/I18nProvider";
import { Bot, Check, ArrowRight, Zap } from "lucide-react";

export const Route = createFileRoute("/ai-pricing")({
  head: () => ({
    meta: [
      { title: "Baikal AI — Тарифы" },
      { name: "description", content: "Тарифы и пакеты запросов для Baikal AI бота." },
    ],
  }),
  component: AiPricingPage,
});

const TG_LINK = "https://t.me/baikal_ai_bot";

function AiPricingPage() {
  const { t } = useI18n();

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)", opacity:  0.06 }} />
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-20">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
            <Zap className="w-3.5 h-3.5" /> {t("ai.badge")}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            {t("aiPricing.title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {t("aiPricing.subtitle")}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <PricingCard
            name={t("aiPricing.starter")}
            price={t("aiPricing.starterPrice")}
            desc={t("aiPricing.starterDesc")}
            features={[t("aiPricing.starterF1"), t("aiPricing.starterF2"), t("aiPricing.starterF3")]}
          />
          <PricingCard
            name={t("aiPricing.pro")}
            price={t("aiPricing.proPrice")}
            desc={t("aiPricing.proDesc")}
            features={[t("aiPricing.proF1"), t("aiPricing.proF2"), t("aiPricing.proF3"), t("aiPricing.proF4")]}
            highlight
          />
          <PricingCard
            name={t("aiPricing.ultra")}
            price={t("aiPricing.ultraPrice")}
            desc={t("aiPricing.ultraDesc")}
            features={[t("aiPricing.ultraF1"), t("aiPricing.ultraF2"), t("aiPricing.ultraF3")]}
          />
        </div>

        <div className="mt-12 text-center">
          <a
            href={TG_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-95 transition"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            {t("ai.cta")} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

function PricingCard({
  name,
  price,
  desc,
  features,
  highlight = false,
}: {
  name: string;
  price: string;
  desc: string;
  features: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl border p-8 flex flex-col ${
        highlight
          ? "border-primary/40 bg-card"
          : "border-border bg-card"
      }`}
    >
      {highlight && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium w-fit mb-4">
          <Bot className="w-3 h-3" /> Popular
        </div>
      )}
      <h3 className="text-xl font-semibold text-foreground">{name}</h3>
      <div className="mt-2 text-3xl font-extrabold text-foreground">{price}</div>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
      <ul className="mt-5 space-y-2 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-foreground">
            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
