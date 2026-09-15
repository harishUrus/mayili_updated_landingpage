import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function OrderSteps() {
  const { language } = useLanguage();
  const t = translations[language].orderSteps;

  return (
    <section className="bg-[var(--color-dark-choc)] py-14 sm:py-18">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-sans font-extrabold text-2xl sm:text-3xl text-white mb-10">
          {t.heading}
        </h2>

        <ol className="space-y-5">
          {t.steps.map((step, idx) => (
            <li key={step} className="flex items-center gap-4 bg-white/5 rounded-2xl p-4">
              <span className="w-9 h-9 shrink-0 rounded-full bg-[var(--color-accent)] text-white font-sans font-bold flex items-center justify-center">
                {idx + 1}
              </span>
              <p className="text-white/95 font-sans text-sm sm:text-base leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
