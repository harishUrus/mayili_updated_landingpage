import { MessageCircle } from "lucide-react";
import { PRODUCT_CONFIG } from "../data/product";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function WhatsAppButton() {
  const { language } = useLanguage();
  const t = translations[language].whatsapp;

  const handleClick = () => {
    window.open(PRODUCT_CONFIG.whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 group">
      <button
        type="button"
        onClick={handleClick}
        aria-label={t.ariaLabel}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_6px_20px_rgba(37,211,102,0.5)] hover:scale-108 active:scale-95 transition-transform duration-200 focus-ring"
      >
        <MessageCircle className="w-7 h-7 text-white" fill="white" strokeWidth={0} />
      </button>
      <span
        role="tooltip"
        className="hidden sm:block absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[var(--color-deep-brown)] text-white text-xs font-sans font-medium px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg"
      >
        {t.tooltip}
      </span>
    </div>
  );
}
