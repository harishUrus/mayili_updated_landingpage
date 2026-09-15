import { Phone } from "lucide-react";
import { PRODUCT_CONFIG } from "../data/product";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const PAYMENT_METHODS = [
  { name: "Google Pay", bg: "#ffffff", color: "#4285F4" },
  { name: "PhonePe", bg: "#5f259f", color: "#ffffff" },
  { name: "Paytm", bg: "#00baf2", color: "#002e6e" },
];

export default function PaymentSection() {
  const { language } = useLanguage();
  const t = translations[language].payment;

  const handleWhatsApp = () => {
    window.open(PRODUCT_CONFIG.whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-[var(--color-cream)] py-14 sm:py-18">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-md p-6 sm:p-8 text-center">
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-[var(--color-dark-choc)] mb-6">
            {t.heading}
          </h2>

          <div className="flex justify-center gap-3 flex-wrap mb-6">
            {PAYMENT_METHODS.map((m) => (
              <span
                key={m.name}
                className="px-4 py-2 rounded-xl text-sm font-sans font-bold shadow-sm border border-black/5"
                style={{ background: m.bg, color: m.color }}
              >
                {m.name}
              </span>
            ))}
          </div>

          {PRODUCT_CONFIG.paymentNumber && (
            <div className="inline-flex items-center gap-2 bg-[var(--color-bg)] rounded-full px-5 py-3 mb-5">
              <Phone className="w-5 h-5 text-[var(--color-green)]" strokeWidth={1.8} />
              <span className="font-sans font-bold text-lg tracking-wide text-[var(--color-dark-choc)]">
                {PRODUCT_CONFIG.paymentNumber}
              </span>
            </div>
          )}

          <p className="text-sm sm:text-base text-[var(--color-choc)] leading-relaxed max-w-md mx-auto">
            {t.instructions1}
            <br />
            {t.instructions2}
          </p>

          <button
            type="button"
            onClick={handleWhatsApp}
            className="mt-6 inline-flex items-center gap-2 bg-[#25D366] text-white font-sans font-bold px-6 py-3 rounded-full shadow-md hover:scale-105 active:scale-95 transition-transform focus-ring"
          >
            {t.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
