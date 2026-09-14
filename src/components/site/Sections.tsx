import { useState, useMemo } from "react";
import {
  Flame,
  Phone,
  ShieldCheck,
  Clock,
  Sparkles,
  UtensilsCrossed,
  Search,
  ArrowRight,
  Check,
  Star,
  Pizza,
  Sandwich,
  Salad,
  Layers,
  Drumstick,
  Soup,
  GlassWater,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { useLang } from "@/lib/i18n";
import {
  RESTAURANT,
  MENU_CATEGORIES,
  MENU_ITEMS,
} from "@/lib/restaurant";
import heroImg from "@/assets/hero.jpg";
import storyImg from "@/assets/story.jpg";

import dishBagutoCheese from "@/assets/dish-baguto-cheese.png";
import dishGratin from "@/assets/dish-gratin.png";
import dishTacos from "@/assets/dish-tacos.png";
import dishBurger from "@/assets/dish-burger.png";
import dishBagutoFrites from "@/assets/dish-baguto-frites.png";

import mealBaguto from "@/assets/meals/Baguto.png";
import mealBossBowl from "@/assets/meals/boss-bowl.png";
import mealBurgers from "@/assets/meals/burgers-sandwiches.png";
import mealCrepes from "@/assets/meals/crepes.jpg";
import mealJus from "@/assets/meals/jus.png";
import mealPanini from "@/assets/meals/Panini.png";
import mealPasta from "@/assets/meals/pasta.png";
import mealPasticcio from "@/assets/meals/pastichio.png";
import mealPizza from "@/assets/meals/pizza.png";
import mealPlats from "@/assets/meals/plats.png";
import mealSalade from "@/assets/meals/salade.png";
import mealTacos from "@/assets/meals/Tacos.png";

// Category meal images: All 12 categories now have their authentic meal photo!
const CATEGORY_IMAGES: Record<string, string> = {
  plats: mealPlats,
  pizza: mealPizza,
  tacos: mealTacos,
  pasta: mealPasta,
  baguto: mealBaguto,
  panini: mealPanini,
  gratin_posstichio: mealPasticcio,
  burger_sandwich: mealBurgers,
  boss_bowl: mealBossBowl,
  salades: mealSalade,
  jus: mealJus,
  desserts: mealCrepes,
};

const CATEGORY_ICONS: Record<string, any> = {
  plats: Drumstick,
  pizza: Pizza,
  tacos: Flame,
  pasta: Soup,
  baguto: Sandwich,
  panini: Sandwich,
  gratin_posstichio: Layers,
  burger_sandwich: UtensilsCrossed,
  boss_bowl: Soup,
  salades: Salad,
  jus: GlassWater,
  desserts: Sparkles,
};

const CATEGORY_BANNERS: Record<string, { title: string; desc: string }> = {
  plats: {
    title: "Plats & Brochettes Grillades",
    desc: "Plats préparés minute à la commande et servis avec accompagnements généreux : riz pilaf, légumes sautés et frites dorées.",
  },
  pizza: {
    title: "Pizzas & Calzones au Four",
    desc: "Pizzas artisanales et calzones cuites au four traditionnel sur pâte fraîche maison, disponibles en taille Moyenne (M) ou Grande (G).",
  },
  tacos: {
    title: "Tacos Classiques, Gratinés & XL",
    desc: "Tacos généreux roulés à la main, grillés à la plancha ou gratinés au four avec sauce fromagère onctueuse et frites dorées.",
  },
  pasta: {
    title: "Pasta al Dente",
    desc: "Au choix Penne, Spaghetti ou Tagliatelles, cuisinées avec sauces onctueuses maison, fromage fondant et viandes au choix.",
  },
  baguto: {
    title: "Baguto Toasté à la Plancha",
    desc: "Baguette croustillante garnie et toastée à la plancha. Option frites dorées : + 5 DH seulement.",
  },
  panini: {
    title: "Paninis Chauds & Toastés",
    desc: "Paninis croustillants grillés minute à la commande, garnis de viandes savoureuses et de fromage fondant.",
  },
  gratin_posstichio: {
    title: "Passtichio & Gratins",
    desc: "Passtichio servi sur lit de frites dorées sous un nappage de fromage fondant, et Gratins traditionnels au four au choix sur base Purée ou Pâtes.",
  },
  burger_sandwich: {
    title: "Burgers Gourmets, Sandwiches & Chika",
    desc: "Pain brioché artisanal pour nos burgers, sandwiches traditionnels et spécialités Chika toastées minute à la plancha.",
  },
  boss_bowl: {
    title: "Boss Bowl Gourmand",
    desc: "Au choix base Riz Pilaf ou Pâtes à la sauce champignon, garni de viandes généreuses, fromage fondant, sauce pesto et mayonnaise.",
  },
  salades: {
    title: "Salades Fraîches & Composées",
    desc: "Salades copieuses et équilibrées préparées avec des crudités fraîches du jour et assaisonnées à la commande.",
  },
  jus: {
    title: "Jus de Fruits Frais & Boissons",
    desc: "Jus 100% naturels pressés minute : agrumes vitaminés, panachés, avocat royal aux fruits secs et sodas bien frais.",
  },
  desserts: {
    title: "Desserts & Crêpes",
    desc: "Tiramisus onctueux faits maison (chocolat, oreo, caramel, fraise) et crêpes dorées minute au Nutella et fruits frais.",
  },
};

export function Hero() {
  const { t } = useLang();

  return (
    <section id="accueil" className="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-center items-center text-center">
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Restaurant Fristo Food à Inezgane Agadir"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover scale-105 brightness-[0.75] contrast-[1.05]"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/75" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.85)_100%)]" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-5 pt-32 pb-24 sm:pt-40 sm:pb-32 flex flex-col items-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-black/50 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.15)] mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[0.7rem] sm:text-xs font-medium uppercase tracking-[0.25em] text-amber-200">
              {t.heroBadge}
            </span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.12] tracking-tight text-amber-100 max-w-3xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            {t.heroTitle}
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-6 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-neutral-200/90 font-light">
            {t.heroDesc}
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-8 py-3.5 text-sm font-semibold tracking-wide text-neutral-950 shadow-[0_6px_25px_rgba(245,158,11,0.4)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(245,158,11,0.6)]"
            >
              <UtensilsCrossed className="h-4 w-4" />
              <span>{t.heroViewMenu}</span>
            </a>

            <a
              href="#reservation"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-400/40 bg-black/40 backdrop-blur-md px-7 py-3.5 text-sm font-medium tracking-wide text-amber-200 shadow-md transition-all duration-300 hover:bg-amber-400/10 hover:border-amber-300 hover:text-amber-100"
            >
              <span>{t.heroBook}</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={480}>
          <div className="mt-14 sm:mt-16 flex flex-wrap justify-center items-center gap-6 sm:gap-12 border-t border-amber-500/20 pt-6 text-xs text-amber-200/80">
            <div className="flex flex-col items-center">
              <span className="text-[0.65rem] uppercase tracking-wider text-neutral-400">{t.heroPriceRange}</span>
              <span className="font-display text-base font-semibold text-amber-300">{RESTAURANT.priceRange}</span>
            </div>
            <span className="text-amber-500/30 hidden sm:inline">|</span>
            <div className="flex flex-col items-center">
              <span className="text-[0.65rem] uppercase tracking-wider text-neutral-400">{t.heroRating}</span>
              <span className="flex items-center gap-1 font-display text-base font-semibold text-amber-300">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                {RESTAURANT.rating}/5
              </span>
            </div>
            <span className="text-amber-500/30 hidden sm:inline">|</span>
            <div className="flex flex-col items-center">
              <span className="text-[0.65rem] uppercase tracking-wider text-neutral-400">{t.heroHalal}</span>
              <span className="font-display text-base font-semibold text-amber-300">{t.heroHalalVal}</span>
            </div>
            <span className="text-amber-500/30 hidden sm:inline">|</span>
            <div className="flex flex-col items-center">
              <span className="text-[0.65rem] uppercase tracking-wider text-neutral-400">{t.heroService}</span>
              <span className="font-display text-base font-semibold text-amber-300">{t.heroServiceVal}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Story() {
  const { t } = useLang();

  return (
    <section id="histoire" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
        <Reveal className="lg:col-span-5">
          <figure className="relative">
            <div className="overflow-hidden rounded-xl shadow-2xl border border-border/60">
              <img
                src={storyImg}
                alt="Restaurant Fristo Food à Tarrast Inezgane"
                width={1200}
                height={1504}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <figcaption className="absolute -bottom-5 -right-3 rounded-md bg-primary px-5 py-3 font-display text-base font-semibold text-primary-foreground shadow-xl sm:block">
              {t.storyCaption}
            </figcaption>
          </figure>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">{t.storyBadge}</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-secondary sm:text-5xl">
              {t.storyTitle1}
              <br />
              {t.storyTitle2}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85">
              <p>{t.storyP1}</p>
              <p>{t.storyP2}</p>
              <p>{t.storyP3}</p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-border/80 bg-surface/80 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Flame className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg text-secondary">{t.storyFeature1Title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {t.storyFeature1Desc}
                </p>
              </div>

              <div className="rounded-lg border border-border/80 bg-surface/80 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg text-secondary">{t.storyFeature2Title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {t.storyFeature2Desc}
                </p>
              </div>

              <div className="rounded-lg border border-border/80 bg-surface/80 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg text-secondary">{t.storyFeature3Title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {t.storyFeature3Desc}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// Les Spécialités Phares: Exact order of images preserved, names updated to:
// 1. Tacos gratine
// 2. Passtichio
// 3. Tacos XL
// 4. Burger fristo
// 5. Baguto
const SIGNATURES = [
  {
    img: dishBagutoCheese,
    name: "Tacos gratine",
    price: "33 DH",
    tag: "Top Vente",
    desc: "Tacos généreux garni de viandes marinées et frites dorées, nappé de fromage gratiné au four.",
  },
  {
    img: dishGratin,
    name: "Passtichio",
    price: "28 DH",
    tag: "Spécialité Fristo",
    desc: "Lit de frites dorées, viandes savoureuses et généreux nappage de fromage fondant gratiné au four traditionnel.",
  },
  {
    img: dishTacos,
    name: "Tacos XL",
    price: "40 DH",
    tag: "Gourmet",
    desc: "Double galette géante garnie de viandes marinées à la plancha, frites croustillantes et sauce fromagère maison.",
  },
  {
    img: mealBurgers,
    name: "Burger fristo",
    price: "35 DH",
    tag: "Signature",
    desc: "Pain brioché artisanal, steak pur bœuf, filet de poulet, cheddar fondu, dinde fumée et œuf au plat avec frites dorées.",
  },
  {
    img: dishBagutoFrites,
    name: "Baguto",
    price: "30 DH",
    tag: "Classique",
    desc: "Baguette croustillante toastée à la plancha, garniture généreuse, fromage fondant et frites dorées.",
  },
];

export function Signature() {
  const { t } = useLang();

  return (
    <section className="border-y border-border/60 bg-surface/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="eyebrow">{t.sigBadge}</p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight text-secondary sm:text-5xl">
                {t.sigTitle}
              </h2>
            </div>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 font-medium text-sm text-primary transition-all hover:gap-3"
            >
              {t.sigSeeAll} ({MENU_ITEMS.length} plats) <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SIGNATURES.map((d, i) => (
            <Reveal key={d.name} delay={i * 120} as="article">
              <article className="group h-full flex flex-col justify-between overflow-hidden rounded-xl border border-border/70 bg-card/60 p-5 shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-2xl">
                <div>
                  <div className="relative overflow-hidden rounded-lg">
                    <span className="absolute top-3 left-3 z-10 rounded-full bg-primary/95 px-3 py-1 text-xs font-semibold text-primary-foreground shadow-md backdrop-blur-sm">
                      {d.tag}
                    </span>
                    <img
                      src={d.img}
                      alt={d.name + " chez Fristo Food Inezgane"}
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className="aspect-4/3 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold text-secondary">
                      {d.name}
                    </h3>
                    <span className="rounded-full bg-primary/15 px-3 py-1 font-display text-base font-bold text-primary">
                      {d.price}
                    </span>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-foreground/80">
                    {d.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60">
                  <a
                    href="#menu"
                    className="flex w-full items-center justify-center gap-2 rounded-md bg-primary/10 border border-primary/30 py-2.5 px-4 text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    <span>{t.sigViewInMenu}</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Menu() {
  const { t } = useLang();
  // Start on "plats"
  const [active, setActive] = useState<string>("plats");
  const [query, setQuery] = useState<string>("");

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchCategory = item.category === active;
      const q = query.trim().toLowerCase();
      const matchQuery =
        q === "" ||
        item.name.toLowerCase().includes(q) ||
        (item.description && item.description.toLowerCase().includes(q)) ||
        (item.ingredients && item.ingredients.toLowerCase().includes(q)) ||
        (item.subCategory && item.subCategory.toLowerCase().includes(q));
      return matchCategory && matchQuery;
    });
  }, [active, query]);

  const activeCategoryImg = CATEGORY_IMAGES[active];
  const activeCategoryBanner = CATEGORY_BANNERS[active];

  return (
    <section id="menu" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      {/* Section Header */}
      <Reveal>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <UtensilsCrossed className="h-3.5 w-3.5" />
              <span>{t.menuBadge}</span>
            </div>
            <h2 className="mt-3 font-display text-3xl leading-tight text-secondary sm:text-5xl">
              {t.menuTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-base text-foreground/85">
              {t.menuDesc}
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.menuSearchPlaceholder}
              className="w-full rounded-full border border-border bg-surface/90 py-3 pl-10 pr-10 text-xs text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-sm"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </Reveal>

      {/* ── BARS OF MEALS: Category selector bars with landscape meal images (width > height) ── */}
      <Reveal delay={120}>
        <div className="mt-10 -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div
            role="tablist"
            aria-label="Catégories du menu"
            className="flex w-max gap-3 pb-4"
          >
            {MENU_CATEGORIES.map((c) => {
              const isActive = active === c.id;
              const img = CATEGORY_IMAGES[c.id];
              const IconComp = CATEGORY_ICONS[c.id] || UtensilsCrossed;
              const count = MENU_ITEMS.filter((i) => i.category === c.id).length;

              return (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(c.id)}
                  className={`group relative flex items-center overflow-hidden rounded-2xl border transition-all duration-300 shrink-0 ${
                    isActive
                      ? "border-amber-400 bg-amber-400/15 shadow-[0_4px_24px_rgba(245,158,11,0.3)] ring-2 ring-amber-400 scale-[1.03]"
                      : "border-border/80 bg-card/70 hover:border-amber-400/50 hover:bg-card/95 hover:scale-[1.01]"
                  }`}
                >
                  {/* Category Image in landscape ratio (width > height) */}
                  {img ? (
                    <div className="relative h-14 w-20 sm:h-16 sm:w-24 shrink-0 overflow-hidden bg-black/40">
                      <img
                        src={img}
                        alt={c.label}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div
                        className={`absolute inset-0 transition-opacity ${
                          isActive ? "bg-amber-400/10" : "bg-black/10 group-hover:bg-transparent"
                        }`}
                      />
                    </div>
                  ) : (
                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center bg-primary/15 text-primary shrink-0 border-r border-border/40">
                      <IconComp className="h-6 w-6" />
                    </div>
                  )}

                  {/* Label & Count */}
                  <div className="px-4 py-2 text-left">
                    <p
                      className={`font-display text-sm sm:text-base font-bold whitespace-nowrap transition-colors ${
                        isActive ? "text-amber-200" : "text-secondary group-hover:text-foreground"
                      }`}
                    >
                      {c.label}
                    </p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span
                        className={`text-[0.7rem] font-medium ${
                          isActive ? "text-amber-300/80" : "text-muted-foreground"
                        }`}
                      >
                        {count} plats
                      </span>
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>

      {/* ── Active Category Showcase Card: Image aspect ratio inverted (width > height, aspect-[5/4] landscape) ── */}
      {activeCategoryBanner && (
        <Reveal delay={140}>
          <div className="mt-6 overflow-hidden rounded-2xl border border-amber-400/30 bg-gradient-to-r from-card via-surface/90 to-card shadow-2xl">
            <div className="grid md:grid-cols-12 gap-6 p-5 sm:p-7 items-center">
              {/* Image side: Landscape ratio (width is wider than height: aspect-[5/4]) */}
              <div className="md:col-span-6 lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[420px] sm:max-w-[480px] aspect-[5/4] overflow-hidden rounded-xl border border-amber-400/30 shadow-2xl bg-black/60 flex items-center justify-center group">
                  <img
                    src={activeCategoryImg}
                    alt={activeCategoryBanner.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-2.5 left-2.5 rounded-full bg-black/85 backdrop-blur-md px-3 py-1 text-[0.7rem] font-semibold text-amber-200 border border-amber-400/30 shadow-md">
                    Photo réelle Fristo
                  </span>
                </div>
              </div>

              {/* Text side: Clear & spacious, not obscuring the food */}
              <div className="md:col-span-6 lg:col-span-7 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/15 border border-amber-400/40 px-3.5 py-1 text-xs font-semibold text-amber-200 w-fit mb-3">
                  <Check className="h-3.5 w-3.5 text-amber-300" />
                  <span>Fait minute & Ingrédients Frais</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary">
                  {activeCategoryBanner.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-foreground/85 leading-relaxed">
                  {activeCategoryBanner.desc}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-2.5">
                  <span className="rounded-lg bg-surface/90 border border-border/80 px-3.5 py-1.5 text-xs font-medium text-foreground/90 flex items-center gap-2">
                    <Flame className="h-3.5 w-3.5 text-amber-400" />
                    Cuisiné à la commande
                  </span>
                  <span className="rounded-lg bg-surface/90 border border-border/80 px-3.5 py-1.5 text-xs font-medium text-foreground/90 flex items-center gap-2">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                    100% Viandes Halal
                  </span>
                  <span className="rounded-lg bg-surface/90 border border-border/80 px-3.5 py-1.5 text-xs font-medium text-foreground/90 flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                    Recette maison
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      )}

      {/* ── Derivative meal cards (All image-free, clean & organized) ── */}
      <Reveal delay={160}>
        {filteredItems.length === 0 ? (
          <div className="mt-12 rounded-xl border border-dashed border-border p-12 text-center">
            <p className="text-base text-muted-foreground">
              {t.menuNoResult} "{query}".
            </p>
            <button
              onClick={() => {
                setQuery("");
                setActive("plats");
              }}
              className="mt-4 rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
            >
              Afficher les plats
            </button>
          </div>
        ) : (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col justify-between rounded-xl border border-border/80 bg-card/60 p-5 shadow-sm transition-all duration-300 hover:border-amber-400/50 hover:bg-card/90 hover:shadow-lg"
              >
                <div>
                  {/* Title & Badge */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-lg font-bold text-secondary">
                          {item.name}
                        </h3>
                        {item.badge && (
                          <span className="rounded-full bg-primary/20 border border-primary/40 px-2.5 py-0.5 text-[0.68rem] font-bold text-primary">
                            {item.badge}
                          </span>
                        )}
                        {item.popular && !item.badge && (
                          <span className="rounded-full bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 text-[0.68rem] font-semibold text-amber-300">
                            ★ Populaire
                          </span>
                        )}
                      </div>
                      {item.subCategory && (
                        <p className="mt-0.5 text-[0.72rem] font-medium text-primary/80 uppercase tracking-wider">
                          {item.subCategory}
                        </p>
                      )}
                    </div>

                    {/* Price */}
                    {item.pizzaPrices ? (
                      <div className="flex flex-col items-end gap-1 shrink-0">
                        <div className="flex items-center gap-1.5">
                          <span className="rounded bg-background/80 px-2 py-0.5 text-[0.7rem] text-muted-foreground">
                            {t.menuMedium} :
                          </span>
                          <span className="rounded bg-surface px-2 py-0.5 font-display text-sm font-bold text-secondary">
                            {item.pizzaPrices.small} DH
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="rounded bg-background/80 px-2 py-0.5 text-[0.7rem] text-muted-foreground">
                            {t.menuLarge} :
                          </span>
                          <span className="rounded bg-primary/20 border border-primary/40 px-2 py-0.5 font-display text-sm font-bold text-primary">
                            {item.pizzaPrices.large} DH
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="shrink-0">
                        <span className="whitespace-nowrap rounded-md bg-primary/15 border border-primary/30 px-3 py-1 font-display text-base font-bold text-primary shadow-inner">
                          {item.price} DH
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Extra / Option (Frites) */}
                  {item.extra && (
                    <div className="mt-2 inline-flex items-center gap-1.5 rounded bg-surface/90 px-2.5 py-1 text-[0.72rem] font-medium text-amber-300 border border-border/60">
                      <span>🍟 {item.extra}</span>
                    </div>
                  )}

                  {/* Description */}
                  {item.description && (
                    <p className="mt-2.5 text-xs leading-relaxed text-foreground/80">
                      {item.description}
                    </p>
                  )}

                  {/* Ingredients detailed */}
                  {item.ingredients && (
                    <div className="mt-2 rounded-md bg-background/60 p-2.5 text-[0.72rem] text-muted-foreground border border-border/40">
                      <strong className="text-secondary font-medium">{t.menuComposition} : </strong>
                      <span>{item.ingredients}</span>
                    </div>
                  )}
                </div>

                {/* Bottom info */}
                <div className="mt-5 flex items-center justify-between border-t border-border/40 pt-3">
                  <span className="text-[0.7rem] text-muted-foreground flex items-center gap-1">
                    <Check className="h-3 w-3 text-emerald-400" />
                    {t.menuMadeMinute}
                  </span>
                  {item.pizzaPrices ? (
                    <div className="flex gap-2">
                      <span className="rounded bg-surface px-2 py-0.5 text-[0.7rem] font-bold text-secondary">
                        M: {item.pizzaPrices.small} DH
                      </span>
                      <span className="rounded bg-primary/20 border border-primary/40 px-2 py-0.5 text-[0.7rem] font-bold text-primary">
                        G: {item.pizzaPrices.large} DH
                      </span>
                    </div>
                  ) : (
                    <span className="text-xs font-semibold text-primary">
                      {item.price} DH
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </Reveal>

      {/* Direct phone and info box */}
      <Reveal delay={200}>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-primary/30 bg-primary/10 p-6 text-sm">
          <div>
            <h4 className="font-display text-base font-semibold text-secondary">
              {t.menuCallTitle}
            </h4>
            <p className="mt-1 text-xs text-foreground/80">
              {t.menuCallDesc}
            </p>
          </div>
          <a
            href={RESTAURANT.phoneHref}
            className="whitespace-nowrap rounded-md bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow transition-transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>{t.menuCallBtn} {RESTAURANT.phoneDisplay}</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export function Experience() {
  const { t } = useLang();

  const EXPERIENCE_ITEMS = [
    {
      icon: Flame,
      title: t.exp1Title,
      desc: t.exp1Desc,
    },
    {
      icon: ShieldCheck,
      title: t.exp2Title,
      desc: t.exp2Desc,
    },
    {
      icon: Clock,
      title: t.exp3Title,
      desc: t.exp3Desc,
    },
    {
      icon: UtensilsCrossed,
      title: t.exp4Title,
      desc: t.exp4Desc,
    },
  ];

  return (
    <section className="border-y border-border/60 bg-surface/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">{t.expSubtitle}</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-secondary sm:text-5xl">
              {t.expTitle}
            </h2>
            <p className="mt-4 text-sm text-foreground/80">
              {t.heroDesc}
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {EXPERIENCE_ITEMS.map((f, i) => {
            const IconComp = f.icon;
            return (
              <Reveal key={f.title} delay={i * 100}>
                <div className="relative h-full rounded-xl border border-border/70 bg-card/60 p-7 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-secondary">
                    {f.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-foreground/75">
                    {f.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
