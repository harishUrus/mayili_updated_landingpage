import { MessageCircle } from "lucide-react";
import { PRODUCT_CONFIG } from "../data/product";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function FinalCTA() {
  const { language } = useLanguage();
  const t = translations[language].finalCta;

  const handleWhatsApp = () => {
    window.open(PRODUCT_CONFIG.whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative bg-[var(--color-deep-brown)] py-16 sm:py-20 overflow-hidden">
      <img
        src="/images/ingredients/cocoa.svg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="hidden sm:block absolute -left-8 -top-8 w-32 h-32 opacity-20"
      />
      <img
        src="/images/ingredients/badam.svg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="hidden sm:block absolute -right-6 -bottom-6 w-36 h-36 opacity-20"
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-white leading-tight">
          {t.heading}
        </h2>
        <p className="mt-3 text-[var(--color-beige)] font-sans font-semibold text-lg sm:text-xl">
          {t.subheading}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#order"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[var(--color-accent)] text-white font-sans font-bold shadow-lg hover:scale-105 active:scale-95 transition-transform focus-ring"
          >
            {t.primaryCta}
          </a>
          <button
            type="button"
            onClick={handleWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] text-white font-sans font-bold shadow-lg hover:scale-105 active:scale-95 transition-transform focus-ring"
          >
            <MessageCircle className="w-5 h-5" fill="white" strokeWidth={0} />
            {t.secondaryCta}
          </button>
        </div>
      </div>
    </section>
  );
}
