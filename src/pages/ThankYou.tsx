import { useEffect, useMemo } from "react";
import { CheckCircle2, PackageSearch } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { PRODUCT_CONFIG } from "../data/product";
import { TRACKING_CONFIG } from "../data/tracking";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import { readCompletedOrder, formatOrderForWhatsApp } from "../utils/order";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ThankYou() {
  const { language } = useLanguage();
  const t = translations[language].thankYou;
  const order = useMemo(readCompletedOrder, []);

  useEffect(() => {
    if (!order) return;

    // Meta (Facebook) Pixel — fires only if you've added the base Pixel
    // snippet to index.html and set TRACKING_CONFIG.metaPixelId.
    if (TRACKING_CONFIG.metaPixelId && window.fbq) {
      window.fbq("track", "Purchase", {
        value: order.total,
        currency: "INR",
        content_name: PRODUCT_CONFIG.productName.en,
        transaction_id: order.orderId,
      });
    }

    // Google Ads conversion tracking — fires only if you've added the
    // gtag.js base snippet to index.html and set both IDs below.
    if (TRACKING_CONFIG.googleAdsConversionId && TRACKING_CONFIG.googleAdsConversionLabel && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: `${TRACKING_CONFIG.googleAdsConversionId}/${TRACKING_CONFIG.googleAdsConversionLabel}`,
        value: order.total,
        currency: "INR",
        transaction_id: order.orderId,
      });
    }

    // GA4 purchase event — fires only if gtag.js is present and configured.
    if (TRACKING_CONFIG.ga4MeasurementId && window.gtag) {
      window.gtag("event", "purchase", {
        transaction_id: order.orderId,
        value: order.total,
        currency: "INR",
        items: order.items.map((item) => ({
          item_name: item.label.en,
          price: item.price,
          quantity: item.quantity,
        })),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!order) {
    return (
      <main className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center px-4 py-16">
        <div className="max-w-sm w-full bg-white rounded-3xl shadow-lg p-8 text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-[var(--color-bg)] flex items-center justify-center mb-5">
            <PackageSearch className="w-8 h-8 text-[var(--color-choc)]/60" />
          </div>
          <h1 className="font-sans font-extrabold text-xl text-[var(--color-dark-choc)] mb-2">
            Order information not found.
          </h1>
          <p className="text-[var(--color-choc)]/70 font-sans text-sm mb-6">
            We couldn't find a recent order for this session.
          </p>
          <a
            href="/"
            className="inline-block w-full py-3 rounded-full bg-[var(--color-accent)] text-white font-sans font-bold hover:scale-[1.02] active:scale-95 transition-transform shadow-md focus-ring"
          >
            Return to Store
          </a>
        </div>
      </main>
    );
  }

  const handleWhatsAppConfirm = () => {
    const message = formatOrderForWhatsApp(order, PRODUCT_CONFIG.currency, language);
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-lg p-6 sm:p-8 text-center animate-fade-up">
        <img
          src="/images/logo.png"
          alt="Mayili"
          className="w-14 h-14 rounded-full object-cover mx-auto mb-4 shadow-sm"
        />

        <div className="mx-auto w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5 animate-pop">
          <CheckCircle2 className="w-9 h-9 text-green-600" />
        </div>

        <h1 className="font-sans font-extrabold text-2xl text-[var(--color-dark-choc)] mb-2">
          {t.heading}
        </h1>
        {order.customer.name && (
          <p className="font-sans font-semibold text-[var(--color-accent)] mb-1">
            {t.thankYouName(order.customer.name)}
          </p>
        )}
        <p className="text-[var(--color-choc)]/80 font-sans mb-1">{t.subheading}</p>
        <p className="text-[var(--color-choc)]/60 font-sans text-sm mb-6">{t.detailsBelow}</p>

        <div className="bg-[var(--color-bg)] rounded-2xl p-4 text-left mb-4 font-sans">
          <p className="text-xs font-bold tracking-wide text-[var(--color-choc)]/60 uppercase mb-3">
            {t.orderConfirmed}
          </p>

          <ul className="space-y-2 mb-3">
            {order.items.map((item) => (
              <li key={item.packageId} className="flex justify-between text-sm">
                <span className="text-[var(--color-dark-choc)]">
                  {PRODUCT_CONFIG.productName[language]} · {item.label[language]} × {item.quantity}
                </span>
                <span className="font-semibold text-[var(--color-dark-choc)] shrink-0 ml-3">
                  {PRODUCT_CONFIG.currency}
                  {item.price * item.quantity}
                </span>
              </li>
            ))}
          </ul>

          <div className="border-t border-[var(--color-beige)]/60 pt-2 space-y-1.5 text-sm">
            <div className="flex justify-between text-[var(--color-choc)]/80">
              <span>{t.productTotal}</span>
              <span>
                {PRODUCT_CONFIG.currency}
                {order.subtotal}
              </span>
            </div>
            <div className="flex justify-between text-[var(--color-choc)]/80">
              <span>{t.shippingLabel}</span>
              <span>
                {PRODUCT_CONFIG.currency}
                {order.shipping}
              </span>
            </div>
            <div className="flex justify-between font-bold text-base text-[var(--color-dark-choc)] pt-1.5 border-t border-[var(--color-beige)]/60">
              <span>{t.totalPaid}</span>
              <span>
                {PRODUCT_CONFIG.currency}
                {order.total}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[var(--color-bg)] rounded-2xl p-4 text-left mb-4 font-sans text-sm space-y-1.5">
          <p className="text-xs font-bold tracking-wide text-[var(--color-choc)]/60 uppercase mb-2">
            {t.customerDetails}
          </p>
          <div className="flex justify-between">
            <span className="text-[var(--color-choc)]/70">{t.customerName}</span>
            <span className="font-semibold text-[var(--color-dark-choc)] text-right ml-3">
              {order.customer.name}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[var(--color-choc)]/70">{t.customerPhone}</span>
            <span className="font-semibold text-[var(--color-dark-choc)] text-right ml-3">
              {order.customer.phone}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[var(--color-choc)]/70">{t.customerEmail}</span>
            <span className="font-semibold text-[var(--color-dark-choc)] break-all text-right ml-3">
              {order.customer.email}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[var(--color-choc)]/70">{t.customerAddress}</span>
            <span className="font-semibold text-[var(--color-dark-choc)] text-right ml-3">
              {order.customer.address}, {order.customer.city} - {order.customer.pincode}
            </span>
          </div>
        </div>

        <div className="bg-[var(--color-bg)] rounded-2xl p-4 text-left mb-6 font-sans text-sm space-y-1.5">
          <div className="flex justify-between">
            <span className="text-[var(--color-choc)]/70">{t.paymentIdLabel}</span>
            <span className="font-semibold text-[var(--color-dark-choc)] break-all text-right ml-3">
              {order.paymentId}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[var(--color-choc)]/70">{t.orderIdLabel}</span>
            <span className="font-semibold text-[var(--color-dark-choc)] break-all text-right ml-3">
              {order.orderId}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[var(--color-choc)]/70">{t.paymentStatusLabel}</span>
            <span className="font-semibold text-green-600">{t.paid}</span>
          </div>
        </div>

        <p className="text-xs text-[var(--color-choc)]/60 font-sans mb-6 leading-relaxed">
          {t.deliveryNote}
        </p>

        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={handleWhatsAppConfirm}
            className="w-full py-3 rounded-full bg-[#25D366] text-white font-sans font-bold hover:scale-[1.02] active:scale-95 transition-transform shadow-md focus-ring"
          >
            {t.confirmOnWhatsApp}
          </button>
          <a
            href="/"
            className="w-full py-3 rounded-full border border-[var(--color-beige)] text-[var(--color-dark-choc)] font-sans font-semibold hover:bg-[var(--color-bg)] transition-colors focus-ring"
          >
            {t.backHome}
          </a>
        </div>
      </div>
    </main>
  );
}
