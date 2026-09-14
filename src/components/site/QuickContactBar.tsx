import { Phone, Calendar, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT } from '@/lib/restaurant';
import { useLang } from '@/lib/i18n';

export function QuickContactBar() {
  const { t } = useLang();

  return (
    <aside
      aria-label="Actions rapides"
      className="fixed bottom-4 left-1/2 z-40 flex w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 items-center justify-between gap-2 rounded-full border border-primary/30 bg-background/95 p-2 shadow-2xl backdrop-blur-xl transition-all duration-300 sm:bottom-6 sm:max-w-lg"
    >
      <a
        href={RESTAURANT.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border/80 bg-surface/80 py-2.5 px-3 text-xs font-medium text-foreground transition-all hover:border-primary hover:text-primary sm:text-sm"
      >
        <Phone className="h-4 w-4 text-primary" />
        <span>{t.quickCall}</span>
      </a>

      <a
        href="#menu"
        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border/80 bg-surface/80 py-2.5 px-3 text-xs font-medium text-foreground transition-all hover:border-primary hover:text-primary sm:text-sm"
      >
        <UtensilsCrossed className="h-4 w-4 text-primary" />
        <span>{t.quickMenu}</span>
      </a>

      <a
        href="#reservation"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary py-2.5 px-3 text-xs font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_8px_20px_-6px_var(--color-primary)] sm:text-sm"
      >
        <Calendar className="h-4 w-4" />
        <span>{t.quickReserve}</span>
      </a>
    </aside>
  );
}
