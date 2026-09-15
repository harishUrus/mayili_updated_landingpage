import type { Language } from "../context/LanguageContext";

export const PRODUCT_CONFIG = {
  shipping: 50,
  currency: "₹",
  whatsappNumber: "917338896653",
  whatsappLink: "https://wa.link/j4ebtr",
  paymentNumber: "7539957752",
  phone: "+91 75399 57752",
  email: "digirodiv@gmail.com",
  brandName: "Mayili",
  productName: {
    ta: "ராகி சாக்கோ மில்க்ஷேக்",
    en: "Ragi Choco Milkshake",
  },
};

export interface ProductPackage {
  id: string;
  label: { ta: string; en: string };
  price: number;
}

export const productPackages: ProductPackage[] = [
  { id: "100g", label: { ta: "100 கிராம்", en: "100 grams" }, price: 130 },
  { id: "200g", label: { ta: "200 கிராம்", en: "200 grams" }, price: 260 },
  { id: "500g", label: { ta: "500 கிராம்", en: "500 grams" }, price: 650 },
  { id: "1kg", label: { ta: "1 கிலோ", en: "1 kg" }, price: 1300 },
];

export interface Ingredient {
  id: string;
  name: { ta: string; en: string };
  image: string;
}

export const ingredients: Ingredient[] = [
  { id: "ragi", name: { ta: "முளைக்கட்டிய ராகி", en: "Sprouted Ragi" }, image: "/images/ingredients/ragi.svg" },
  { id: "badam", name: { ta: "பாதாம்", en: "Almonds" }, image: "/images/ingredients/badam.svg" },
  { id: "pista", name: { ta: "பிஸ்தா", en: "Pistachios" }, image: "/images/ingredients/pista.svg" },
  { id: "cashew", name: { ta: "முந்திரி", en: "Cashews" }, image: "/images/ingredients/cashew.svg" },
  { id: "pumpkin", name: { ta: "பூசணி விதை", en: "Pumpkin Seeds" }, image: "/images/ingredients/pumpkin-seeds.svg" },
  { id: "sunflower", name: { ta: "வெள்ளரி விதை", en: "Sunflower Seeds" }, image: "/images/ingredients/oats.svg" },
  { id: "cocoa", name: { ta: "கோகோ பீன்", en: "Cocoa Beans" }, image: "/images/ingredients/cocoa.svg" },
  { id: "sugar", name: { ta: "நாட்டு சர்க்கரை", en: "Country Sugar" }, image: "/images/ingredients/country-sugar.svg" },
];

export function pickLang<T extends Record<Language, string>>(field: T, language: Language): string {
  return field[language];
}
