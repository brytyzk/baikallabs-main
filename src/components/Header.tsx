import { Link } from "@tanstack/react-router";
import { Waves } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export function Header() {
  const { t } = useI18n();
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-hero)" }}>
            <Waves className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-lg sm:text-xl font-extrabold tracking-tight text-foreground">
            Baikal<span className="text-primary">Labs</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2 text-sm">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="px-2.5 sm:px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors data-[status=active]:text-foreground data-[status=active]:bg-secondary"
          >
            {t("nav.home")}
          </Link>
          <Link
            to="/vpn"
            className="px-2.5 sm:px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors data-[status=active]:text-foreground data-[status=active]:bg-secondary"
          >
            {t("nav.vpn")}
          </Link>
          <Link
            to="/ai-bot"
            className="px-2.5 sm:px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors data-[status=active]:text-foreground data-[status=active]:bg-secondary"
          >
            {t("nav.ai")}
          </Link>
          <Link
            to="/help"
            className="px-2.5 sm:px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors data-[status=active]:text-foreground data-[status=active]:bg-secondary"
          >
            {t("nav.help")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
