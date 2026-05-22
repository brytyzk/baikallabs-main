import { useState } from "react";
import { Mail, Send, MessageCircle } from "lucide-react";
import { z } from "zod";
import { useI18n } from "@/i18n/I18nProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const CONTACT_EMAIL = "baikallabs.info@gmail.com";

export function Footer() {
  const { t } = useI18n();
  const schema = z.object({
    name: z.string().trim().min(2, t("footer.errMin2")).max(100),
    email: z.string().trim().email(t("footer.errEmail")).max(255),
    message: z.string().trim().min(5, t("footer.errMin5")).max(1000),
  });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = schema.safeParse(form);
    if (!res.success) {
      setError(res.error.issues[0]?.message ?? t("footer.errGeneric"));
      setStatus("error");
      return;
    }
    const subject = encodeURIComponent(`${t("footer.mailSubject")} ${res.data.name}`);
    const body = encodeURIComponent(`${res.data.message}\n\n— ${res.data.name} (${res.data.email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("ok");
    setForm({ name: "", email: "", message: "" });
    setError("");
  };

  return (
    <footer id="contact" className="border-t border-border bg-card mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-foreground mb-3">{t("footer.contact")}</h2>
          <p className="text-muted-foreground mb-6 max-w-md">{t("footer.contactDesc")}</p>
          <div className="space-y-3">
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4" /> ✉ {CONTACT_EMAIL}
            </a>
            <a href="https://t.me/baikal_vpn_kbot" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
              <Send className="w-4 h-4" /> @baikal_vpn_kbot
            </a>
            <a href="https://t.me/baikal_ai_bot" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
              <MessageCircle className="w-4 h-4" /> @baikal_ai_bot
            </a>
          </div>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder={t("footer.name")}
            maxLength={100}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            required
          />
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            type="email"
            placeholder={t("footer.email")}
            maxLength={255}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            required
          />
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder={t("footer.message")}
            rows={4}
            maxLength={1000}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
            required
          />
          {status === "error" && <p className="text-sm text-destructive">{error}</p>}
          {status === "ok" && <p className="text-sm" style={{ color: "var(--success)" }}>{t("footer.success")}</p>}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-95 transition-opacity"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            {t("footer.send")}
          </button>
        </form>
      </div>
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col-reverse sm:flex-row items-center gap-3 sm:gap-4 justify-between text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} {t("footer.copyright")}</div>
          <div className="sm:ml-auto">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
