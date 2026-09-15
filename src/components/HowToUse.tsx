import { Spade, GlassWater, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const ICONS = [Spade, GlassWater, Sparkles];

export default function HowToUse() {
  const { language } = useLanguage();
  const t = translations[language].howTo;

  return (
    <section id="product" className="bg-[var(--color-bg)] py-14 sm:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center order-2 lg:order-1">
          <img
            src="/images/milkshake.svg"
            alt={t.glassAlt}
            loading="lazy"
            className="w-56 sm:w-72 lg:w-80 drop-shadow-2xl"
          />
        </div>

        <div className="order-1 lg:order-2 text-center lg:text-left">
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-[var(--color-dark-choc)] mb-6">
            {t.heading}
          </h2>

          <ol className="space-y-4 max-w-md mx-auto lg:mx-0">
            {t.steps.map((step, idx) => {
              const Icon = ICONS[idx];
              return (
                <li
                  key={idx}
                  className="flex items-start gap-4 bg-white rounded-2xl p-4 shadow-sm text-left"
                >
                  <span className="w-10 h-10 shrink-0 rounded-full bg-[var(--color-bg)] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[var(--color-green)]" strokeWidth={1.8} />
                  </span>
                  <p className="text-sm sm:text-base text-[var(--color-choc)] leading-relaxed pt-1.5">
                    {step}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
