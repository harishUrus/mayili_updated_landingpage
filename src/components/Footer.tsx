import { Phone, Mail, MessageCircle, AtSign, Share2 } from "lucide-react";
import { PRODUCT_CONFIG } from "../data/product";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.product, href: "#product" },
    { label: t.nav.benefits, href: "#benefits" },
    { label: t.nav.reviews, href: "#reviews" },
    { label: t.nav.order, href: "#order" },
  ];

  return (
    <footer className="bg-[var(--color-deep-brown)] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-10 text-center sm:text-left">
        <div className="flex flex-col items-center sm:items-start gap-3">
          <img
            src="/images/logo.png"
            alt="Mayili - Taste of Tradition"
            className="h-14 w-14 rounded-full object-cover shadow-md ring-2 ring-white/20"
          />
          <p className="text-white/70 text-sm font-sans">{t.footer.tagline}</p>
        </div>

        <nav aria-label={t.footer.navHeading}>
          <h3 className="font-sans font-bold mb-3 text-[var(--color-accent)]">{t.footer.navHeading}</h3>
          <ul className="space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-white/80 hover:text-white text-sm font-sans focus-ring rounded">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-sans font-bold mb-3 text-[var(--color-accent)]">{t.footer.contactHeading}</h3>
          <ul className="space-y-2 text-sm font-sans text-white/80">
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <Phone className="w-4 h-4" /> <span>{PRODUCT_CONFIG.phone}</span>
            </li>
            <li>
              <a
                href={PRODUCT_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start gap-2 hover:text-white focus-ring rounded"
              >
                <MessageCircle className="w-4 h-4" /> <span>{t.footer.whatsapp}</span>
              </a>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <Mail className="w-4 h-4" /> <span>{PRODUCT_CONFIG.email}</span>
            </li>
          </ul>
          <div className="flex items-center justify-center sm:justify-start gap-3 mt-4">
            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center" aria-label="Instagram">
              <AtSign className="w-4 h-4" />
            </span>
            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center" aria-label="Social">
              <Share2 className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-10 px-4 text-xs font-sans">
        <a href="/privacy-policy" className="text-white/60 hover:text-white focus-ring rounded">
          Privacy Policy
        </a>
        <a href="/terms-and-conditions" className="text-white/60 hover:text-white focus-ring rounded">
          Terms &amp; Conditions
        </a>
        <a href="/refund-policy" className="text-white/60 hover:text-white focus-ring rounded">
          Refund Policy
        </a>
        <a href="/shipping-policy" className="text-white/60 hover:text-white focus-ring rounded">
          Shipping Policy
        </a>
        <a href="/contact-us" className="text-white/60 hover:text-white focus-ring rounded">
          Contact Us
        </a>
      </div>

      <p className="text-center text-white/50 text-xs font-sans mt-4">{t.footer.copyright}</p>
    </footer>
  );
}
