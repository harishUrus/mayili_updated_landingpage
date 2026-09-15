import { Leaf, Ban, Candy, ShieldCheck, Users } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  const trustItems = [
    { icon: Leaf, label: t.trust.natural },
    { icon: Ban, label: t.trust.noMaida },
    { icon: Candy, label: t.trust.noSugar },
    { icon: ShieldCheck, label: t.trust.richNutrients },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20 grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <h1
            className="font-sans font-extrabold text-[var(--color-dark-choc)] leading-tight text-4xl sm:text-5xl lg:text-6xl animate-fade-up"
            style={{ animationDelay: "0ms" }}
          >
            {t.brandLine1}
            <br />
            {t.brandLine2}
            <br />
            {t.brandLine3}
          </h1>

          <div
            className="inline-block mt-5 px-4 py-2 rounded-full bg-[var(--color-choc)] text-white text-sm sm:text-base font-semibold animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            {t.badge}
          </div>

          <p
            className="mt-5 text-base sm:text-lg text-[var(--color-choc)]/90 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-up"
            style={{ animationDelay: "220ms" }}
          >
            {t.description}
            <br />
            {t.descriptionLine2}
          </p>

          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-7 max-w-md mx-auto lg:mx-0 animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            {trustItems.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1.5 text-center">
                <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <item.icon className="w-5 h-5 text-[var(--color-green)]" strokeWidth={1.8} />
                </span>
                <span className="text-xs font-sans font-medium text-[var(--color-dark-choc)] leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div
            className="mt-7 inline-flex items-center gap-3 bg-[var(--color-dark-choc)] text-white rounded-2xl px-5 py-3.5 shadow-lg animate-fade-up"
            style={{ animationDelay: "420ms" }}
          >
            <Users className="w-8 h-8 text-[var(--color-accent)] shrink-0" strokeWidth={1.6} />
            <span className="font-sans font-bold text-sm sm:text-base text-left">{t.ageBadge}</span>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative flex justify-center items-center animate-pop">
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[var(--color-beige)]/40 blur-2xl" />
          <img
            src="/images/product-photo.jpg"
            alt={t.productAlt}
            className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-[2rem] shadow-2xl animate-float"
          />
        </div>
      </div>

      <svg
        className="block w-full text-[var(--color-cream)]"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="currentColor" d="M0 30 Q360 60 720 30 T1440 30 V60 H0 Z" />
      </svg>
    </section>
  );
}
