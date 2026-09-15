import { useEffect, useState } from "react";
import { Menu, X, ShoppingCart, Languages } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;

  const navLinks = [
    { label: t.home, href: "#home" },
    { label: t.product, href: "#product" },
    { label: t.benefits, href: "#benefits" },
    { label: t.reviews, href: "#reviews" },
    { label: t.order, href: "#order" },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[var(--color-beige)]/40 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5" aria-label="முதன்மை வழிசெலுத்தல்">
        <a href="#home" className="flex items-center gap-2.5 shrink-0 focus-ring rounded">
          <img
            src="/images/logo.png"
            alt="Mayili - Taste of Tradition"
            className="h-11 w-11 sm:h-12 sm:w-12 rounded-full object-cover shadow-sm ring-1 ring-[var(--color-beige)]/60"
          />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-sans font-extrabold text-lg text-[var(--color-dark-choc)]">Mayili</span>
            <span className="font-sans font-medium text-[10px] tracking-wide text-[var(--color-green)]">
              TASTE OF TRADITION
            </span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8 font-sans text-sm font-semibold text-[var(--color-dark-choc)]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-[var(--color-accent)] transition-colors focus-ring rounded px-1"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={t.langSwitchLabel}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full border border-[var(--color-beige)] hover:bg-[var(--color-bg)] transition-colors focus-ring font-sans text-xs sm:text-sm font-bold text-[var(--color-dark-choc)]"
          >
            <Languages className="w-4 h-4 text-[var(--color-green)]" strokeWidth={1.8} />
            <span className={language === "ta" ? "text-[var(--color-accent)]" : ""}>தமிழ்</span>
            <span className="text-[var(--color-beige)]">|</span>
            <span className={language === "en" ? "text-[var(--color-accent)]" : ""}>EN</span>
          </button>

          <button
            type="button"
            onClick={openCart}
            aria-label={t.cartLabel(itemCount)}
            className="relative p-2 rounded-full hover:bg-[var(--color-bg)] transition-colors focus-ring"
          >
            <ShoppingCart className="w-6 h-6 text-[var(--color-dark-choc)]" strokeWidth={1.8} />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[var(--color-accent)] text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                {itemCount}
              </span>
            )}
          </button>

          <button
            type="button"
            className="lg:hidden p-2 rounded-full hover:bg-[var(--color-bg)] transition-colors focus-ring"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? t.closeMenu : t.openMenu}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-[var(--color-dark-choc)]" />
            ) : (
              <Menu className="w-6 h-6 text-[var(--color-dark-choc)]" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out bg-white border-t border-[var(--color-beige)]/40 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-4 py-2 font-sans font-semibold text-[var(--color-dark-choc)]">
          {navLinks.map((link) => (
            <li key={link.href} className="border-b border-[var(--color-bg)] last:border-0">
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 focus-ring rounded"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
