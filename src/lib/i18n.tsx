import { createContext, useContext, useState, type ReactNode } from 'react';

export type Lang = 'fr' | 'en';

export const translations = {
  fr: {
    dir: 'ltr' as const,
    // Nav
    navHome: 'Accueil',
    navMenu: 'Menu',
    navReservation: 'Réservation',
    navContact: 'Contact',
    navReserve: 'Réserver une table',
    navOpen: 'Ouvert aujourd\'hui',
    navCall: 'Appeler',

    // Hero
    heroBadge: 'Restaurant Snack & Fast-Food Gourmet',
    heroCity: 'Inezgane · Agadir',
    heroTitle: 'Découvrez la cuisine gourmande au cœur d\'Inezgane',
    heroDesc: 'Plats chauds, brochettes au feu, pizzas au four, tacos croustillants et jus frais pressés minute. Une expérience généreuse et raffinée.',
    heroViewMenu: 'Voir le menu',
    heroBook: 'Réserver une table',
    heroPriceRange: 'Fourchette prix',
    heroRating: 'Note Google',
    heroHalal: 'Viandes',
    heroHalalVal: '100% Halal & Frais',
    heroService: 'Service',
    heroServiceVal: 'Sur place & Emporter',

    // Story
    storyBadge: 'Notre histoire & Savoir-Faire',
    storyTitle1: 'La passion du goût généreux,',
    storyTitle2: 'au cœur de Tarrast',
    storyCaption: 'Fait minute à la plancha & au four',
    storyP1: 'Installé sur l\'avenue Ermal1 à Tarrast (Inezgane), Fristo Food est devenu l\'adresse incontournable des amateurs de bonne street-food généreuse et soignée.',
    storyP2: 'De nos célèbres Bagutos garnis à la commande à nos Pizzas cuites au four, en passant par nos Tacos Gratinés et nos Posstichio fondants sur lit de frites, chaque plat est préparé avec des ingrédients frais, rigoureusement sélectionnés auprès des meilleurs producteurs et bouchers locaux.',
    storyP3: 'Une équipe accueillante, un service rapide et des portions copieuses pour tous les goûts et tous les budgets : c\'est notre promesse quotidienne envers nos clients fidèles.',
    storyFeature1Title: 'Préparé Minute',
    storyFeature1Desc: 'Plats préparés et cuits à l\'instant précis de votre commande.',
    storyFeature2Title: 'Viandes 100% Halal',
    storyFeature2Desc: 'Kefta pur bœuf, émincé de poulet et dinde fraîche garantis chaque matin.',
    storyFeature3Title: 'Gratiné & Croustillant',
    storyFeature3Desc: 'Pizzas au four dorées, tacos gratinés et sauces maison savoureuses.',

    // Signatures
    sigBadge: 'Les Spécialités Phares',
    sigTitle: 'Nos incontournables les plus commandés',
    sigSeeAll: 'Voir toute la carte',
    sigViewInMenu: 'Voir dans le menu',

    // Menu
    menuBadge: 'La Carte Officielle',
    menuTitle: 'Notre Menu & Tarifs',
    menuDesc: 'Plats chauds, grillades, pizzas au four, tacos, pasta et jus frais. Prix en Dirhams (DH).',
    menuSearchPlaceholder: 'Rechercher un plat ou ingrédient (ex: kefta, fruits de mer, pesto)...',
    menuAllCats: 'Tout le menu',
    menuNoResult: 'Aucun plat ne correspond à',
    menuShowAll: 'Afficher tout le menu',
    menuMadeMinute: 'Fait minute',
    menuComposition: 'Composition',
    menuMedium: 'Moyenne',
    menuLarge: 'Grande',
    menuPhotoReal: 'Photo réelle Fristo',
    menuCallTitle: 'Commande par téléphone pour retrait rapide sans attente ?',
    menuCallDesc: 'Appelez-nous 15 minutes avant votre arrivée à Tarrast, nous lançons votre cuisson en direct.',
    menuCallBtn: 'Appeler le',

    // Category banner descriptions
    catPlatsBanner: 'Nos Plats & Brochettes sont préparés minute à la commande et servis avec accompagnements généreux (riz pilaf, légumes sautés, frites dorées ou pains spéciaux crème champignon).',
    catPizzaBanner: 'Nos pizzas sont cuites au four traditionnel sur pâte fraîche maison et disponibles en deux tailles : Moyenne ou Grande.',
    catPastaBanner: 'Spécialité Pasta : au choix Penne ou Spaghetti sur chaque recette, cuisinées avec sauces onctueuses et fromage fondant.',
    catBagutoBanner: 'Spécialité Baguto : Baguette croustillante toastée à la plancha. Option Frites : + 5 DH seulement.',
    catTacosBanner: 'Tacos généreux roulés à la main et toastés à la plancha ou gratinés au four avec sauce fromagère onctueuse.',
    catPaniniBanner: 'Paninis croustillants grillés minute garnis de viandes savoureuses et de fromage fondu.',
    catGratinBanner: 'Gratins cuits au four traditionnel et Posstichio gourmands sur lit de frites dorées nappés de fromage fondu.',
    catSaladeBanner: 'Salades fraîches, équilibrées et copieuses préparées avec des crudités croquantes du jour.',
    catJusBanner: 'Jus de fruits frais pressés minute et panachés vitaminés 100% naturels.',

    // Experience
    expTitle: 'Pourquoi choisir Fristo Food à Tarrast ?',
    expSubtitle: 'Notre engagement pour une qualité irréprochable au quotidien.',
    exp1Title: '100% Préparé Minute',
    exp1Desc: 'Pizzas cuites au four, bagutos et paninis grillés à la plancha dès votre commande.',
    exp2Title: 'Ingrédients Frais & Halal',
    exp2Desc: 'Sélection stricte des viandes pur bœuf, poulet mariné et légumes frais du marché.',
    exp3Title: 'Service 7j/7 : 12h00 – 02h00',
    exp3Desc: 'Ouvert en continu de 12h00 à 02h00 pour déjeuner, dîner et nocturnes à Tarrast.',
    exp4Title: 'Accueil Chaleureux',
    exp4Desc: 'Une équipe passionnée, un service rapide et un cadre convivial pour tous.',

    // Reviews
    reviewsBadge: 'Avis Clients Vérifiés',
    reviewsTitle: 'Ce qu\'en disent nos habitués',
    reviewsDesc: 'La fidélité de nos clients d\'Inezgane et d\'Agadir est notre plus belle fierté. Découvrez leurs retours après leur passage chez Fristo Food.',
    reviewsBasedOn: 'Basé sur 30 avis Google certifiés',
    reviewsGoogleLink: 'Laisser ou voir tous les avis sur Google Maps',

    // Reservation
    resBadge: 'Table & Commande à l\'avance',
    resTitle: 'Réservez votre table ou pré-commandez',
    resDesc: 'Pour un déjeuner d\'affaires, un repas de famille ou une soirée entre amis, envoyez-nous votre créneau. Nous vous confirmons votre table ou préparons vos plats pour l\'heure convenue.',
    resPhoneTitle: 'Réponse immédiate au téléphone',
    resPhoneDesc: 'Besoin d\'une table dans les 30 minutes ? Appelez directement le restaurant.',
    resPhoneBtn: 'Appeler le',
    resSuccessTitle: 'Demande bien enregistrée !',
    resSuccessDesc: 'Merci. Nous vous confirmons votre réservation très rapidement.',
    resEditBtn: 'Modifier ma demande',
    resNameLabel: 'Votre nom complet *',
    resNamePlaceholder: 'Ex: Youssef El Mansouri',
    resPhoneLabel: 'Numéro de téléphone *',
    resPhonePlaceholder: '06 12 34 56 78',
    resFormulaLabel: 'Formule souhaitée',
    resDineIn: 'Repas sur place',
    resTakeaway: 'À emporter / Pré-commande',
    resGuestsLabel: 'Nombre de personnes *',
    resDateLabel: 'Date souhaitée *',
    resTimeLabel: 'Heure estimée *',
    resNotesLabel: 'Précisions / Choix des plats (facultatif)',
    resNotesPlaceholder: 'Ex: 2 sandwichs spéciaux, 1 burger gourmet, table en terrasse...',
    resSubmitBtn: 'Envoyer la demande',
    resHint: 'Confirmation rapide par appel ou SMS.',

    // FAQ
    faqBadge: 'Questions Fréquentes',
    faqTitle: 'Tout ce que vous devez savoir avant de venir',
    faqDesc: 'Des réponses claires sur nos viandes, nos horaires, la livraison et les réservations.',

    // Location
    locBadge: 'Localisation & Horaires',
    locTitle: 'Fristo Food à Tarrast',
    locDesc: 'Situé sur l\'avenue Ermal1 à Tarrast, facilement accessible depuis Agadir, Dcheira et Aït Melloul.',
    locCopy: 'Copier',
    locCopied: 'Copié',
    locHoursTitle: 'Horaires de service',
    locMapsBtn: 'Ouvrir dans Google Maps',
    locCallBtn: 'Appeler pour commander',

    // Footer
    footerDesc: 'Snack marocain & fast-food gourmet à Tarrast, Inezgane. Sandwichs artisanaux, burgers, pizzas au four, tacos et frites croustillantes préparés minute à la commande.',
    footerNavTitle: 'Navigation Rapide',
    footerContactTitle: 'Coordonnées & Horaires',
    footerPriceRange: 'Fourchette',
    footerRights: 'Tous droits réservés.',
    footerLegal: 'Mentions légales',
    footerPrivacy: 'Confidentialité',
    footerTop: 'Haut de page ↑',

    // QuickContactBar
    quickCall: 'Appeler',
    quickMenu: 'Le Menu',
    quickReserve: 'Réserver',
  },
  en: {
    dir: 'ltr' as const,
    // Nav
    navHome: 'Home',
    navMenu: 'Menu',
    navReservation: 'Reservation',
    navContact: 'Contact',
    navReserve: 'Book a table',
    navOpen: 'Open today',
    navCall: 'Call us',

    // Hero
    heroBadge: 'Gourmet Snack & Fast-Food Restaurant',
    heroCity: 'Inezgane · Agadir',
    heroTitle: 'Discover gourmet cuisine in the heart of Inezgane',
    heroDesc: 'Hot platters, grilled skewers, wood-fired pizzas, crispy tacos, and freshly squeezed juices. A generous and refined culinary experience.',
    heroViewMenu: 'View the menu',
    heroBook: 'Book a table',
    heroPriceRange: 'Price range',
    heroRating: 'Google rating',
    heroHalal: 'Meat',
    heroHalalVal: '100% Halal & Fresh',
    heroService: 'Service',
    heroServiceVal: 'Dine-in & Takeaway',

    // Story
    storyBadge: 'Our Story & Expertise',
    storyTitle1: 'A passion for generous taste,',
    storyTitle2: 'in the heart of Tarrast',
    storyCaption: 'Made fresh on the griddle & in the oven',
    storyP1: 'Located on Avenue Ermal1 in Tarrast (Inezgane), Fristo Food has become the go-to spot for lovers of generous, high-quality street food.',
    storyP2: 'From our famous Bagutos made to order to our oven-baked Pizzas, crispy Gratiné Tacos, and rich Posstichio served on golden fries, every plate is prepared with fresh ingredients carefully selected from the finest local producers.',
    storyP3: 'A welcoming team, fast service, and generous portions for all tastes and budgets: that is our daily promise to our loyal guests.',
    storyFeature1Title: 'Prepared Fresh',
    storyFeature1Desc: 'Dishes prepared and cooked the exact moment you place your order.',
    storyFeature2Title: '100% Halal Meats',
    storyFeature2Desc: 'Pure beef kefta, tender chicken and fresh turkey guaranteed every single morning.',
    storyFeature3Title: 'Gratiné & Crispy',
    storyFeature3Desc: 'Golden wood-fired pizzas, cheesy gratiné tacos, and delicious homemade sauces.',

    // Signatures
    sigBadge: 'Signature Specialties',
    sigTitle: 'Our most ordered dishes',
    sigSeeAll: 'View full menu',
    sigViewInMenu: 'View in menu',

    // Menu
    menuBadge: 'Official Menu',
    menuTitle: 'Our Menu & Prices',
    menuDesc: 'Hot dishes, grills, wood-fired pizzas, tacos, pasta and fresh juices. Prices in Moroccan Dirhams (DH).',
    menuSearchPlaceholder: 'Search a dish or ingredient (e.g. kefta, seafood, pesto)...',
    menuAllCats: 'Full menu',
    menuNoResult: 'No dish matches',
    menuShowAll: 'Show full menu',
    menuMadeMinute: 'Made fresh',
    menuComposition: 'Ingredients',
    menuMedium: 'Medium',
    menuLarge: 'Large',
    menuPhotoReal: 'Actual Fristo photo',
    menuCallTitle: 'Order by phone for quick pickup?',
    menuCallDesc: 'Call us 15 minutes before your arrival in Tarrast, and we start cooking live for you.',
    menuCallBtn: 'Call',

    // Category banner descriptions
    catPlatsBanner: 'Our Dishes & Skewers are prepared to order and served with generous sides (pilaf rice, sautéed vegetables, golden fries, or signature mushroom-cream breads).',
    catPizzaBanner: 'Our pizzas are baked in traditional ovens with fresh dough and available in two sizes: Medium or Large.',
    catPastaBanner: 'Pasta Specialty: your choice of Penne or Spaghetti on every recipe, cooked with creamy sauces and melted cheese.',
    catBagutoBanner: 'Baguto Specialty: Crispy baguette toasted on the griddle. French Fries Option: only + 5 DH.',
    catTacosBanner: 'Generous tacos hand-rolled and toasted on the griddle or oven-baked with rich cheese sauce.',
    catPaniniBanner: 'Crispy toasted paninis filled with tender meats and melted cheese.',
    catGratinBanner: 'Traditional oven-baked Gratins and delicious Posstichio served on golden fries topped with melted cheese.',
    catSaladeBanner: 'Fresh, balanced, and generous salads made with crisp vegetables of the day.',
    catJusBanner: 'Freshly squeezed fruit juices and vitamin-packed 100% natural smoothies.',

    // Experience
    expTitle: 'Why choose Fristo Food in Tarrast?',
    expSubtitle: 'Our commitment to top-tier quality and warm hospitality every day.',
    exp1Title: '100% Prepared to Order',
    exp1Desc: 'Oven-baked pizzas, grilled bagutos, and paninis cooked right when you order.',
    exp2Title: 'Fresh & Halal Ingredients',
    exp2Desc: 'Strict selection of pure beef, marinated chicken, and fresh market vegetables.',
    exp3Title: 'Service 7 days/week: 12:00 PM – 2:00 AM',
    exp3Desc: 'Open continuously from 12:00 PM to 2:00 AM for lunch, dinner, and late-night cravings in Tarrast.',
    exp4Title: 'Warm Hospitality',
    exp4Desc: 'A passionate team, fast service, and a friendly atmosphere for all.',

    // Reviews
    reviewsBadge: 'Verified Customer Reviews',
    reviewsTitle: 'What our guests say',
    reviewsDesc: 'The loyalty of our guests from Inezgane and Agadir is our greatest pride. Discover their feedback after dining at Fristo Food.',
    reviewsBasedOn: 'Based on 30 verified Google reviews',
    reviewsGoogleLink: 'Leave or view all reviews on Google Maps',

    // Reservation
    resBadge: 'Table & Advance Orders',
    resTitle: 'Reserve your table or pre-order',
    resDesc: 'For business lunches, family gatherings, or evenings with friends, send us your preferred time. We will confirm your table and prepare your dishes for the scheduled hour.',
    resPhoneTitle: 'Immediate response by phone',
    resPhoneDesc: 'Need a table within 30 minutes? Call the restaurant directly.',
    resPhoneBtn: 'Call',
    resSuccessTitle: 'Request successfully received!',
    resSuccessDesc: 'Thank you. We will confirm your reservation very shortly.',
    resEditBtn: 'Edit my request',
    resNameLabel: 'Your full name *',
    resNamePlaceholder: 'e.g. Youssef El Mansouri',
    resPhoneLabel: 'Phone number *',
    resPhonePlaceholder: '06 12 34 56 78',
    resFormulaLabel: 'Service type',
    resDineIn: 'Dine-in meal',
    resTakeaway: 'Takeaway / Pre-order',
    resGuestsLabel: 'Number of guests *',
    resDateLabel: 'Preferred date *',
    resTimeLabel: 'Estimated time *',
    resNotesLabel: 'Notes / Dish selections (optional)',
    resNotesPlaceholder: 'e.g. 2 special sandwiches, 1 gourmet burger, terrace table...',
    resSubmitBtn: 'Submit reservation',
    resHint: 'Fast confirmation via phone call or SMS.',

    // FAQ
    faqBadge: 'Frequently Asked Questions',
    faqTitle: 'Everything you need to know before visiting',
    faqDesc: 'Clear answers about our halal meats, opening hours, takeaway, and reservations.',

    // Location
    locBadge: 'Location & Hours',
    locTitle: 'Fristo Food in Tarrast',
    locDesc: 'Located on Avenue Ermal1 in Tarrast, easily accessible from Agadir, Dcheira, and Aït Melloul.',
    locCopy: 'Copy',
    locCopied: 'Copied',
    locHoursTitle: 'Service Hours',
    locMapsBtn: 'Open in Google Maps',
    locCallBtn: 'Call to order',

    // Footer
    footerDesc: 'Moroccan snack & gourmet fast food in Tarrast, Inezgane. Artisan sandwiches, burgers, pizzas, tacos and crispy fries prepared fresh to order.',
    footerNavTitle: 'Quick Links',
    footerContactTitle: 'Contact & Hours',
    footerPriceRange: 'Price Range',
    footerRights: 'All rights reserved.',
    footerLegal: 'Legal Notice',
    footerPrivacy: 'Privacy Policy',
    footerTop: 'Back to top ↑',

    // QuickContactBar
    quickCall: 'Call',
    quickMenu: 'Menu',
    quickReserve: 'Book',
  },
};

export type T = typeof translations['fr'];

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: T;
}

const LanguageContext = createContext<LangCtx>({
  lang: 'fr',
  setLang: () => {},
  t: translations.fr,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr');
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      <div dir={translations[lang].dir}>{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
