import { useRef } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Star } from "lucide-react";
import { testimonials } from "../data/testimonials";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function Testimonials() {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const { language } = useLanguage();
  const t = translations[language].testimonials;

  const scroll = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth ?? 320;
    el.scrollBy({ left: dir * (cardWidth + 20), behavior: "smooth" });
  };

  return (
    <section id="reviews" className="bg-[var(--color-bg)] py-14 sm:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-sans font-extrabold text-2xl sm:text-3xl text-[var(--color-dark-choc)] mb-8">
          <span className="text-[var(--color-accent)] mr-2" aria-hidden="true">—</span>
          {t.heading}
          <span className="text-[var(--color-accent)] ml-2" aria-hidden="true">—</span>
        </h2>

        <div className="relative">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label={t.prev}
            className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center hover:scale-105 active:scale-95 transition-transform focus-ring"
          >
            <ChevronLeft className="w-5 h-5 text-[var(--color-dark-choc)]" />
          </button>

          <ul
            ref={scrollerRef}
            className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-1 pb-2"
          >
            {testimonials.map((testimonial) => (
              <li
                key={testimonial.name.en}
                className="bg-white rounded-3xl p-6 shadow-sm shrink-0 w-[85%] sm:w-[340px] snap-center flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className="w-9 h-9 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                    <MessageCircle className="w-4.5 h-4.5 text-[#25D366]" strokeWidth={2} />
                  </span>
                  <div className="flex gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                    ))}
                  </div>
                </div>
                <p className="text-sm sm:text-base text-[var(--color-choc)] leading-relaxed flex-1">
                  {testimonial.review[language]}
                </p>
                <p className="font-sans font-bold text-sm text-[var(--color-dark-choc)]">
                  – {testimonial.name[language]}, {testimonial.location[language]}
                </p>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label={t.next}
            className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center hover:scale-105 active:scale-95 transition-transform focus-ring"
          >
            <ChevronRight className="w-5 h-5 text-[var(--color-dark-choc)]" />
          </button>
        </div>
      </div>
    </section>
  );
}
