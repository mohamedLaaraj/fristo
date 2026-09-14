import { useState, useEffect } from "react";
import { Globe } from "lucide-react";
import logoGold from "@/assets/fristo-logo-gold.png";
import faviconGold from "@/assets/fristo-favicon-gold.png";
import { useLang, type Lang } from "@/lib/i18n";

const NAV_ITEMS = [
  { href: "#accueil", labelKey: "navHome" as const },
  { href: "#menu", labelKey: "navMenu" as const },
  { href: "#reservation", labelKey: "navReservation" as const },
  { href: "#contact", labelKey: "navContact" as const },
];

const LANGS: { code: Lang; label: string }[] = [
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleLangSelect = (code: Lang) => {
    setLang(code);
    setIsLangOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 transition-all duration-300">
      <nav
        aria-label="Navigation principale"
        className={`mx-auto max-w-7xl flex items-center justify-between rounded-2xl border px-3 sm:px-6 py-2.5 sm:py-3 transition-all duration-500 ${
          scrolled
            ? "border-amber-500/30 bg-black/85 backdrop-blur-xl shadow-[0_12px_36px_-10px_rgba(0,0,0,0.8)]"
            : "border-amber-500/20 bg-black/55 backdrop-blur-md"
        }`}
      >
        {/* Brand Logo: Small icon logoPs on mobile/phone view, full fristoHoleLogo on tablet/desktop */}
        <a href="#accueil" className="group flex items-center gap-2.5 sm:gap-3 transition-opacity hover:opacity-90">
          {/* Mobile phone logo (logoPs favicon emblem) */}
          <img
            src={faviconGold}
            alt="Fristo Food Emblem"
            className="block sm:hidden h-8 w-8 object-contain drop-shadow-[0_2px_8px_rgba(254,243,199,0.35)] transition-transform duration-300 group-hover:scale-105"
          />
          {/* Tablet & Desktop logo (fristoHoleLogo full) */}
          <img
            src={logoGold}
            alt="Fristo Food Restaurant Fast-Food & Pizzeria"
            className="hidden sm:block h-8 sm:h-9 lg:h-10 w-auto object-contain drop-shadow-[0_2px_10px_rgba(254,243,199,0.35)] transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Center navigation links */}
        <ul className="hidden items-center gap-6 lg:gap-8 md:flex">
          {NAV_ITEMS.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-xs lg:text-sm font-medium transition-colors hover:text-amber-200 ${
                  i === 0
                    ? "text-amber-200 underline underline-offset-8 decoration-amber-300/80 decoration-2 font-semibold"
                    : "text-neutral-200/85"
                }`}
              >
                {t[l.labelKey]}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions: Language toggle (FR/EN) & Golden Book Table CTA */}
        <div className="flex items-center gap-2 sm:gap-3.5">
          {/* Language pill selector (FR / EN) */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-black/60 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-200 transition-all hover:border-amber-400 hover:text-amber-100 shadow-sm"
              aria-label="Change language"
            >
              <Globe className="h-3.5 w-3.5 text-amber-300" />
              <span>{lang}</span>
              <span className="text-[0.6rem] text-amber-300/70">▾</span>
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-28 rounded-xl border border-amber-500/30 bg-black/95 p-1.5 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-150">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => handleLangSelect(l.code)}
                    className={`w-full text-left rounded-lg px-3 py-2 text-xs transition-colors ${
                      lang === l.code
                        ? "bg-amber-500/25 text-amber-200 font-bold"
                        : "text-neutral-200 hover:bg-amber-500/10 hover:text-amber-200"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Glowing Golden "Book a table" CTA */}
          <a
            href="#reservation"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-5 lg:px-6 py-2.5 text-xs lg:text-sm font-semibold tracking-wide text-neutral-950 shadow-[0_4px_20px_rgba(245,158,11,0.4)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_6px_28px_rgba(245,158,11,0.6)]"
          >
            {t.navReserve}
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1 rounded-lg border border-amber-500/30 bg-black/60 text-amber-200 md:hidden"
          >
            <span
              className={`block h-0.5 w-4 bg-amber-300 transition-transform duration-300 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-4 bg-amber-300 transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-4 bg-amber-300 transition-transform duration-300 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-amber-500/30 bg-black/95 shadow-2xl backdrop-blur-2xl transition-all duration-300 md:hidden ${
          open ? "max-h-[80vh] opacity-100 p-5" : "pointer-events-none max-h-0 opacity-0 p-0 border-transparent"
        }`}
      >
        <ul className="flex flex-col space-y-1">
          {NAV_ITEMS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 font-display text-base text-neutral-100 transition-colors hover:text-amber-300"
              >
                {t[l.labelKey]}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-4 pt-4 border-t border-amber-500/20">
          <a
            href="#reservation"
            onClick={() => setOpen(false)}
            className="block w-full rounded-full bg-gradient-to-r from-amber-400 to-amber-600 py-3 text-center text-sm font-semibold text-neutral-950 shadow-md"
          >
            {t.navReserve}
          </a>
        </div>
      </div>
    </header>
  );
}
