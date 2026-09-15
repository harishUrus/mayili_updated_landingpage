import { useEffect, useMemo } from "react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { PRODUCT_CONFIG } from "../data/product";
import { TRACKING_CONFIG } from "../data/tracking";
import { buildWhatsAppUrl } from "../utils/whatsapp";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    orderId: params.get("order_id") ?? "",
    paymentId: params.get("payment_id") ?? "",
    amount: Number(params.get("amount") ?? 0),
    currency: params.get("currency") ?? "INR",
  };
}

export default function ThankYou() {
  const { language } = useLanguage();
  const t = translations[language].thankYou;
  const { orderId, paymentId, amount, currency } = useMemo(getQueryParams, []);

  useEffect(() => {
    if (!orderId || !paymentId) return;

    // Meta (Facebook) Pixel — fires only if you've added the base Pixel
    // snippet to index.html and set TRACKING_CONFIG.metaPixelId.
    if (TRACKING_CONFIG.metaPixelId && window.fbq) {
      window.fbq("track", "Purchase", {
        value: amount,
        currency,
        content_name: PRODUCT_CONFIG.productName.en,
        transaction_id: orderId,
      });
    }

    // Google Ads conversion tracking — fires only if you've added the
    // gtag.js base snippet to index.html and set both IDs below.
    if (TRACKING_CONFIG.googleAdsConversionId && TRACKING_CONFIG.googleAdsConversionLabel && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: `${TRACKING_CONFIG.googleAdsConversionId}/${TRACKING_CONFIG.googleAdsConversionLabel}`,
        value: amount,
        currency,
        transaction_id: orderId,
      });
    }

    // GA4 purchase event — fires only if gtag.js is present and configured.
    if (TRACKING_CONFIG.ga4MeasurementId && window.gtag) {
      window.gtag("event", "purchase", {
        transaction_id: orderId,
        value: amount,
        currency,
        items: [{ item_name: PRODUCT_CONFIG.productName.en, price: amount, quantity: 1 }],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleWhatsAppConfirm = () => {
    const message = [
      `${PRODUCT_CONFIG.brandName}: Payment confirmed.`,
      "",
      `${t.orderIdLabel}: ${orderId}`,
      `${t.paymentIdLabel}: ${paymentId}`,
      `${t.amountLabel}: ${PRODUCT_CONFIG.currency}${amount}`,
    ].join("\n");
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-lg p-8 text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
          <CheckCircle2 className="w-9 h-9 text-green-600" />
        </div>

        <h1 className="font-sans font-extrabold text-2xl text-[var(--color-dark-choc)] mb-2">
          {t.heading}
        </h1>
        <p className="text-[var(--color-choc)]/80 font-sans mb-6">{t.subheading}</p>

        {orderId && (
          <div className="bg-[var(--color-bg)] rounded-2xl p-4 text-left space-y-1.5 mb-6 font-sans text-sm">
            <div className="flex justify-between">
              <span className="text-[var(--color-choc)]/70">{t.orderIdLabel}</span>
              <span className="font-semibold text-[var(--color-dark-choc)]">{orderId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--color-choc)]/70">{t.paymentIdLabel}</span>
              <span className="font-semibold text-[var(--color-dark-choc)]">{paymentId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--color-choc)]/70">{t.amountLabel}</span>
              <span className="font-bold text-[var(--color-accent)]">
                {PRODUCT_CONFIG.currency}
                {amount}
              </span>
            </div>
          </div>
        )}

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
