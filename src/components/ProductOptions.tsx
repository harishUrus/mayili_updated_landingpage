import { useState } from "react";
import { Minus, Plus, Truck } from "lucide-react";
import { productPackages, PRODUCT_CONFIG } from "../data/product";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function ProductOptions() {
  const { addToCart } = useCart();
  const { language } = useLanguage();
  const t = translations[language].productOptions;
  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(productPackages.map((p) => [p.id, 1]))
  );
  const [justAdded, setJustAdded] = useState<string | null>(null);

  const updateQuantity = (id: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] ?? 1) + delta),
    }));
  };

  const handleAdd = (pkg: (typeof productPackages)[number]) => {
    addToCart(pkg, quantities[pkg.id] ?? 1);
    setJustAdded(pkg.id);
    setTimeout(() => setJustAdded(null), 1500);
  };

  return (
    <section id="order" className="bg-[var(--color-cream)] py-14 sm:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-sans font-extrabold text-2xl sm:text-3xl text-[var(--color-dark-choc)] mb-2">
          <span className="text-[var(--color-accent)] mr-2" aria-hidden="true">⟶</span>
          {t.heading}
          <span className="text-[var(--color-accent)] ml-2" aria-hidden="true">⟵</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8">
          {productPackages.map((pkg) => {
            const qty = quantities[pkg.id] ?? 1;
            const label = pkg.label[language];
            return (
              <div
                key={pkg.id}
                className="bg-white rounded-3xl p-4 sm:p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col items-center text-center border border-[var(--color-beige)]/30"
              >
                <p className="font-sans font-bold text-[var(--color-dark-choc)] text-base sm:text-lg">
                  {label}
                </p>
                <p className="font-sans font-extrabold text-2xl sm:text-3xl text-[var(--color-accent)] mt-1">
                  {PRODUCT_CONFIG.currency}
                  {pkg.price}
                </p>
                <p className="text-xs text-[var(--color-choc)]/70 font-sans mt-0.5">
                  + {PRODUCT_CONFIG.currency}
                  {PRODUCT_CONFIG.shipping} ({t.shipping})
                </p>

                <div className="flex items-center gap-3 mt-4 bg-[var(--color-bg)] rounded-full px-2 py-1.5">
                  <button
                    type="button"
                    onClick={() => updateQuantity(pkg.id, -1)}
                    disabled={qty <= 1}
                    aria-label={t.decrease(label)}
                    className="w-7 h-7 rounded-full bg-white shadow flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-transform focus-ring"
                  >
                    <Minus className="w-3.5 h-3.5 text-[var(--color-dark-choc)]" />
                  </button>
                  <span className="w-5 text-center font-sans font-bold text-[var(--color-dark-choc)]" aria-live="polite">
                    {qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(pkg.id, 1)}
                    aria-label={t.increase(label)}
                    className="w-7 h-7 rounded-full bg-white shadow flex items-center justify-center hover:scale-105 active:scale-95 transition-transform focus-ring"
                  >
                    <Plus className="w-3.5 h-3.5 text-[var(--color-dark-choc)]" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => handleAdd(pkg)}
                  className="mt-4 w-full py-2.5 rounded-full bg-[var(--color-dark-choc)] text-white text-sm font-sans font-bold hover:bg-[var(--color-choc)] active:scale-95 transition-all focus-ring"
                >
                  {justAdded === pkg.id ? t.added : t.addToCart}
                </button>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-2 mt-8 text-[var(--color-choc)] font-sans text-sm sm:text-base">
          <Truck className="w-5 h-5 text-[var(--color-green)]" strokeWidth={1.8} />
          <span>{t.deliveryNote}</span>
        </div>
      </div>
    </section>
  );
}
