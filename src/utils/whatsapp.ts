import { PRODUCT_CONFIG, productPackages } from "../data/product";
import type { CartItem } from "../context/CartContext";
import type { Language } from "../context/LanguageContext";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${PRODUCT_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const STRINGS = {
  ta: {
    greeting: "வணக்கம் மேயிலி, எனக்கு ராகி சாக்கோ மில்க்ஷேக் ஆர்டர் செய்ய வேண்டும்.",
    packageLabel: "பேக்கேஜ்",
    quantityLabel: "அளவு",
    priceLabel: "விலை",
    subtotalLabel: "Subtotal",
    shippingLabel: "Shipping",
    totalLabel: "Total",
    confirm: "தயவுசெய்து என் ஆர்டரை உறுதி செய்யவும்.",
  },
  en: {
    greeting: "Hello Mayili, I want to order Ragi Choco Milkshake.",
    packageLabel: "Package",
    quantityLabel: "Quantity",
    priceLabel: "Price",
    subtotalLabel: "Subtotal",
    shippingLabel: "Shipping",
    totalLabel: "Total",
    confirm: "Please confirm my order.",
  },
};

export function buildOrderMessage(
  items: CartItem[],
  subtotal: number,
  shipping: number,
  total: number,
  language: Language
): string {
  const s = STRINGS[language];
  const lines = [
    s.greeting,
    "",
    ...items.map((i) => {
      const pkg = productPackages.find((p) => p.id === i.packageId);
      const label = pkg ? pkg.label[language] : i.packageId;
      return `${s.packageLabel}: ${label}\n${s.quantityLabel}: ${i.quantity}\n${s.priceLabel}: ${PRODUCT_CONFIG.currency}${i.price * i.quantity}`;
    }),
    "",
    `${s.subtotalLabel}: ${PRODUCT_CONFIG.currency}${subtotal}`,
    `${s.shippingLabel}: ${PRODUCT_CONFIG.currency}${shipping}`,
    `${s.totalLabel}: ${PRODUCT_CONFIG.currency}${total}`,
    "",
    s.confirm,
  ];
  return lines.join("\n");
}
