import { Leaf, ShieldCheck, Ban, Candy } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const ICONS = [Leaf, ShieldCheck, Ban, Candy];

export default function TrustBar() {
  const { language } = useLanguage();
  const t = translations[language].trustBar;

  return (
    <section className="bg-[var(--color-cream)] py-10 sm:py-12 border-t border-[var(--color-beige)]/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {t.items.map((lines, idx) => {
          const Icon = ICONS[idx];
          return (
            <div key={lines.join(" ")} className="flex flex-col items-center text-center gap-2">
              <Icon className="w-7 h-7 text-[var(--color-green)]" strokeWidth={1.6} />
              <p className="text-xs sm:text-sm font-sans font-semibold text-[var(--color-dark-choc)] leading-tight">
                {lines[0]}
                <br />
                {lines[1]}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
