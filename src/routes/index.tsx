import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero, Story, Signature, Menu, Experience } from "@/components/site/Sections";
import { Reviews, Reservation, FAQ, Location, Footer } from "@/components/site/Bottom";
import { QuickContactBar } from "@/components/site/QuickContactBar";
import { LanguageProvider } from "@/lib/i18n";

const TITLE = "Fristo Food — Snack marocain & Fast-food gourmet à Inezgane, Agadir";
const DESCRIPTION =
  "Fristo Food à Tarrast, Inezgane (Agadir) : sandwichs, burgers smash, tacos savoureux et frites préparés minute à la commande, de 12 à 70 DH. Sur place et à emporter.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "restaurant" },
      { property: "og:locale", content: "fr_MA" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Fristo Food",
          servesCuisine: ["Marocaine", "Fast-food", "Snack gourmet"],
          priceRange: "25 DH - 50 DH",
          telephone: "+212528834240",
          address: {
            "@type": "PostalAddress",
            streetAddress: "9F34+W2V, Av. Ermal1",
            addressLocality: "Inezgane",
            postalCode: "80000",
            addressRegion: "Souss-Massa",
            addressCountry: "MA",
          },
          hasMap: "https://maps.app.goo.gl/BNBKcsRw7bm9Req98",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.0",
            reviewCount: "30",
          },
          sameAs: [
            "https://www.instagram.com/fristo_food",
            "https://www.facebook.com/p/Fristo-Food-100088397295539/",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Signature />
        <Menu />
        <Experience />
                <Reviews />
        <Reservation />
        <FAQ />
        <Location />
      </main>
      <Footer />
      <QuickContactBar />
    </LanguageProvider>
  );
}

