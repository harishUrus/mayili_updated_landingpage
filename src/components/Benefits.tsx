import { Bone, Zap, Salad, HeartHandshake, Smile } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const ICONS = [Bone, Zap, Salad, HeartHandshake, Smile];

export default function Benefits() {
  const { language } = useLanguage();
  const t = translations[language].benefits;

  return (
    <section id="benefits" className="bg-[var(--color-dark-choc)] py-14 sm:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-sans font-extrabold text-2xl sm:text-3xl text-white mb-10">
          {t.heading}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-4">
          {t.items.map((lines, idx) => {
            const Icon = ICONS[idx];
            return (
              <div
                key={lines.join(" ")}
                className={`flex flex-col items-center text-center gap-3 px-2 relative ${
                  idx !== t.items.length - 1
                    ? "lg:after:content-[''] lg:after:absolute lg:after:right-[-16px] lg:after:top-3 lg:after:h-16 lg:after:w-px lg:after:bg-white/15"
                    : ""
                }`}
              >
                <span className="w-16 h-16 rounded-full bg-white/5 border border-[var(--color-accent)]/40 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-[var(--color-accent)]" strokeWidth={1.5} />
                </span>
                <p className="font-sans font-semibold text-sm sm:text-base text-white leading-snug">
                  {lines[0]}
                  <br />
                  {lines[1]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
