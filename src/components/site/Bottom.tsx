import { useState, type FormEvent } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Copy,
  Check,
  Calendar,
  Users,
  ChevronDown,
  Star,
} from "lucide-react";
import { Reveal } from "./Reveal";
import logoGold from "@/assets/fristo-logo-gold.png";
import { useLang } from "@/lib/i18n";
import {
  RESTAURANT,
  SCHEDULE,
  REVIEWS,
  FAQS,
  type ReviewItem,
} from "@/lib/restaurant";

function StarRating({ value = 5 }: { value?: number }) {
  return (
    <div className="flex items-center gap-1 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < value ? "fill-amber-400 text-amber-400" : "fill-border text-border"
          }`}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  const { t } = useLang();

  return (
    <section id="avis" className="border-y border-border/60 bg-surface/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">{t.reviewsBadge}</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-secondary sm:text-5xl">
              {t.reviewsTitle}
            </h2>
            <p className="mt-4 text-sm text-foreground/80 leading-relaxed">
              {t.reviewsDesc}
            </p>

            <div className="mt-8 rounded-xl border border-border/80 bg-card/70 p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <span className="font-display text-5xl font-bold text-primary">
                  {RESTAURANT.rating.toFixed(1)}
                </span>
                <div>
                  <StarRating value={5} />
                  <p className="mt-1 text-xs font-medium text-foreground/80">
                    {t.reviewsBasedOn}
                  </p>
                </div>
              </div>
            </div>

            <a
              href={RESTAURANT.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
            >
              <span>{t.reviewsGoogleLink}</span>
              <span aria-hidden>→</span>
            </a>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
            {REVIEWS.map((r: ReviewItem, i: number) => (
              <Reveal key={r.name} delay={i * 110}>
                <blockquote className="flex h-full flex-col justify-between rounded-xl border border-border/70 bg-card/60 p-6 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <StarRating value={r.rating} />
                      <span className="text-[0.72rem] text-muted-foreground">{r.date}</span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-foreground/85">
                      « {r.comment} »
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between">
                    <div>
                      <footer className="font-display text-base font-semibold text-secondary">
                        {r.name}
                      </footer>
                      <span className="text-[0.72rem] text-muted-foreground">{r.city}</span>
                    </div>
                    {r.favoriteDish && (
                      <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[0.68rem] font-semibold text-primary">
                        {r.favoriteDish}
                      </span>
                    )}
                  </div>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const FIELD =
  "w-full rounded-md border border-input bg-background/90 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-1 focus:ring-primary";

export function Reservation() {
  const { t } = useLang();
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    personnes: "2",
    date: "",
    heure: "20:00",
    service: "sur_place",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="reservation" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
        <Reveal className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-surface/70 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Calendar className="h-3.5 w-3.5" />
            <span>{t.resBadge}</span>
          </div>
          <h2 className="mt-4 font-display text-3xl leading-tight text-secondary sm:text-5xl">
            {t.resTitle}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/85">
            {t.resDesc}
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3 rounded-lg border border-border/80 bg-surface/60 p-4">
              <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-secondary">{t.resPhoneTitle}</h4>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {t.resPhoneDesc}
                </p>
                <a
                  href={RESTAURANT.phoneHref}
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  {t.resPhoneBtn} {RESTAURANT.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <div className="rounded-2xl border border-border/80 bg-card/70 p-6 sm:p-9 shadow-xl backdrop-blur-sm">
            {submitted ? (
              <div className="py-8 text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-secondary">
                  {t.resSuccessTitle}
                </h3>
                <p className="mt-3 text-sm text-foreground/80 max-w-md mx-auto leading-relaxed">
                  {t.resSuccessDesc}
                </p>

                <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="rounded-md border border-border px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    {t.resEditBtn}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
                <label className="sm:col-span-1">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t.resNameLabel}
                  </span>
                  <input
                    required
                    name="nom"
                    value={formData.nom}
                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    autoComplete="name"
                    className={FIELD}
                    placeholder={t.resNamePlaceholder}
                  />
                </label>

                <label className="sm:col-span-1">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t.resPhoneLabel}
                  </span>
                  <input
                    required
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                    autoComplete="tel"
                    className={FIELD}
                    placeholder={t.resPhonePlaceholder}
                  />
                </label>

                <label className="sm:col-span-1">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t.resFormulaLabel}
                  </span>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className={FIELD}
                  >
                    <option value="sur_place">{t.resDineIn}</option>
                    <option value="a_emporter">{t.resTakeaway}</option>
                  </select>
                </label>

                <label className="sm:col-span-1">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t.resGuestsLabel}
                  </span>
                  <div className="relative">
                    <input
                      required
                      type="number"
                      min={1}
                      max={30}
                      value={formData.personnes}
                      onChange={(e) => setFormData({ ...formData, personnes: e.target.value })}
                      name="personnes"
                      className={FIELD}
                    />
                    <Users className="absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                  </div>
                </label>

                <label className="sm:col-span-1">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t.resDateLabel}
                  </span>
                  <input
                    required
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={FIELD}
                  />
                </label>

                <label className="sm:col-span-1">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t.resTimeLabel}
                  </span>
                  <input
                    required
                    type="time"
                    name="heure"
                    value={formData.heure}
                    onChange={(e) => setFormData({ ...formData, heure: e.target.value })}
                    className={FIELD}
                  />
                </label>

                <label className="sm:col-span-2">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t.resNotesLabel}
                  </span>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={FIELD}
                    placeholder={t.resNotesPlaceholder}
                  />
                </label>

                <div className="sm:col-span-2 mt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_var(--color-primary)]"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>{t.resSubmitBtn}</span>
                  </button>
                  <p className="text-xs text-muted-foreground text-center sm:text-right">
                    {t.resHint}
                  </p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FAQ() {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-border/60 bg-surface/30 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow">{t.faqBadge}</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-secondary sm:text-4xl">
              {t.faqTitle}
            </h2>
            <p className="mt-3 text-sm text-foreground/80">
              {t.faqDesc}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.question} delay={i * 60}>
                <div className="rounded-xl border border-border/80 bg-card/60 transition-all overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-surface/50"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-semibold text-secondary">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-border/40 px-5 pb-5 pt-3 animate-in fade-in duration-200">
                      <p className="text-sm leading-relaxed text-foreground/80">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Location() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);

  function copyAddress() {
    navigator.clipboard.writeText(RESTAURANT.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <section id="contact" className="border-t border-border/60 bg-surface/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">{t.locBadge}</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-secondary sm:text-5xl">
              {t.locTitle}
            </h2>
            <p className="mt-4 text-sm text-foreground/80 leading-relaxed">
              {t.locDesc}
            </p>

            <address className="mt-6 rounded-xl border border-border/80 bg-card/60 p-5 not-italic text-sm text-foreground/85 shadow-sm space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-medium">{RESTAURANT.address}</p>
                  <p className="text-xs text-muted-foreground">{RESTAURANT.district}, Agadir — Maroc</p>
                </div>
                <button
                  type="button"
                  onClick={copyAddress}
                  className="flex items-center gap-1 rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                  title="Copier l'adresse"
                >
                  {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                  <span>{copied ? t.locCopied : t.locCopy}</span>
                </button>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-border/40">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a
                  href={RESTAURANT.phoneHref}
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  {RESTAURANT.phoneDisplay}
                </a>
              </div>
            </address>

            <h3 className="mt-8 flex items-center gap-2 font-display text-lg font-semibold text-secondary">
              <Clock className="h-4 w-4 text-primary" />
              <span>{t.locHoursTitle}</span>
            </h3>

            <ul className="mt-3 divide-y divide-border/60 rounded-xl border border-border/80 bg-card/60 px-5 shadow-sm">
              {SCHEDULE.map((s) => (
                <li key={s.day} className="flex items-center justify-between py-2.5 text-xs">
                  <span className="font-medium text-foreground/90">{s.day}</span>
                  <span className="font-semibold text-primary">{s.hours}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={RESTAURANT.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-md bg-primary px-5 py-3 text-center text-xs font-semibold text-primary-foreground shadow transition-transform hover:-translate-y-0.5"
              >
                {t.locMapsBtn}
              </a>
              <a
                href={RESTAURANT.phoneHref}
                className="flex-1 rounded-md border border-primary/60 px-5 py-3 text-center text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {t.locCallBtn}
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <div className="h-[380px] overflow-hidden rounded-2xl border border-border/80 shadow-xl sm:h-full sm:min-h-[560px]">
              <iframe
                title="Carte : Fristo Food, Inezgane"
                src="https://www.google.com/maps?q=Fristo%20Food%2C%20Av.%20Ermal1%2C%20Inezgane%2080000&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0 contrast-[1.05]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useLang();

  const FOOTER_NAV = [
    { href: "#accueil", label: t.navHome },
    { href: "#menu", label: t.navMenu },
    { href: "#reservation", label: t.navReservation },
    { href: "#contact", label: t.navContact },
  ];

  return (
    <footer className="border-t border-border/60 bg-background py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="mb-3">
            <img
              src={logoGold}
              alt="Fristo Food"
              className="h-9 sm:h-11 w-auto object-contain drop-shadow-[0_2px_8px_rgba(245,158,11,0.3)]"
            />
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {t.footerDesc}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={RESTAURANT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-4 py-1.5 text-xs text-foreground/80 transition-colors hover:border-primary hover:text-primary"
            >
              Instagram
            </a>
            <a
              href={RESTAURANT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-4 py-1.5 text-xs text-foreground/80 transition-colors hover:border-primary hover:text-primary"
            >
              Facebook
            </a>
          </div>
        </div>

        <nav aria-label="Navigation du pied de page">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {t.footerNavTitle}
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {FOOTER_NAV.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-foreground/75 transition-colors hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {t.footerContactTitle}
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm text-foreground/75">
            <li>{RESTAURANT.address}</li>
            <li>Tarrast, Inezgane 80000</li>
            <li>
              <a href={RESTAURANT.phoneHref} className="text-primary font-medium hover:underline">
                {RESTAURANT.phoneDisplay}
              </a>
            </li>
            <li className="text-muted-foreground">{RESTAURANT.openingHoursDisplay}</li>
            <li className="text-muted-foreground">{t.footerPriceRange} : {RESTAURANT.priceRange}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-border/60 px-5 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Fristo Food. {t.footerRights}</p>
        <p className="flex gap-6">
          <a href="#contact" className="hover:text-primary">
            {t.footerLegal}
          </a>
          <a href="#contact" className="hover:text-primary">
            {t.footerPrivacy}
          </a>
          <a href="#accueil" className="hover:text-primary">
            {t.footerTop}
          </a>
        </p>
      </div>
    </footer>
  );
}
