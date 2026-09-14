import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import d1 from "@/assets/dish-1.jpg";
import d2 from "@/assets/dish-2.jpg";
import d3 from "@/assets/dish-3.jpg";

const IMAGES = [
  { src: g1, alt: "Salle du restaurant Fristo Food à Inezgane", tall: false },
  { src: g2, alt: "Cornet de frites croustillantes maison", tall: true },
  { src: d1, alt: "Sandwich au poulet grillé et crudités", tall: false },
  { src: g4, alt: "Brochettes grillées sur la plancha", tall: true },
  { src: d2, alt: "Burger au fromage fondu servi avec des frites", tall: false },
  { src: g3, alt: "Thé à la menthe marocain servi avec un burger", tall: false },
  { src: d3, alt: "Tacos garni coupé en deux", tall: true },
  { src: g5, alt: "Façade éclairée du restaurant le soir", tall: false },
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => ((i ?? 0) + 1) % IMAGES.length);
      if (e.key === "ArrowLeft")
        setOpen((i) => ((i ?? 0) - 1 + IMAGES.length) % IMAGES.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section id="galerie" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <p className="eyebrow">Galerie</p>
        <h2 className="mt-5 font-display text-3xl leading-tight text-secondary sm:text-5xl">
          En images
        </h2>
      </Reveal>

      <div className="mt-14 columns-2 gap-4 sm:gap-6 lg:columns-3">
        {IMAGES.map((im, i) => (
          <Reveal key={im.alt} delay={(i % 3) * 90} className="mb-4 break-inside-avoid sm:mb-6">
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group block w-full overflow-hidden rounded-sm"
              aria-label={`Agrandir : ${im.alt}`}
            >
              <img
                src={im.src}
                alt={im.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105 ${
                  im.tall ? "aspect-4/5" : "aspect-4/3"
                }`}
              />
            </button>
          </Reveal>
        ))}
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image en plein écran"
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm animate-in fade-in duration-300"
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Fermer"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-sm border border-border text-foreground"
          >
            ✕
          </button>
          <img
            src={IMAGES[open]!.src}
            alt={IMAGES[open]!.alt}
            className="max-h-[85vh] max-w-full rounded-sm object-contain"
          />
          <p className="absolute bottom-6 left-0 right-0 text-center text-sm text-muted-foreground">
            {IMAGES[open]!.alt}
          </p>
        </div>
      )}
    </section>
  );
}
