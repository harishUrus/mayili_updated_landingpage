import { ingredients } from "../data/product";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function IngredientStrip() {
  const { language } = useLanguage();
  const t = translations[language].ingredients;

  return (
    <section className="bg-[var(--color-cream)] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-sans font-extrabold text-2xl sm:text-3xl text-[var(--color-dark-choc)] mb-8">
          <span className="text-[var(--color-accent)] mr-2" aria-hidden="true">
            ⟶
          </span>
          {t.heading}
          <span className="text-[var(--color-accent)] ml-2" aria-hidden="true">
            ⟵
          </span>
        </h2>

        <ul className="flex sm:justify-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar px-2 pb-2 snap-x snap-mandatory">
          {ingredients.map((ing) => (
            <li
              key={ing.id}
              className="flex flex-col items-center gap-2.5 shrink-0 snap-start w-20 sm:w-24"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-md ring-1 ring-[var(--color-beige)]/50 overflow-hidden p-1">
                <img
                  src={ing.image}
                  alt={ing.name[language]}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="text-xs sm:text-sm font-sans font-semibold text-[var(--color-dark-choc)] text-center leading-tight">
                {ing.name[language]}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
