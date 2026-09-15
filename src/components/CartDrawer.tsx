import { useState } from "react";
import { X, Trash2, Loader2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import { PRODUCT_CONFIG, productPackages } from "../data/product";
import { buildOrderMessage, buildWhatsAppUrl } from "../utils/whatsapp";
import { createRazorpayOrder, openRazorpayCheckout, verifyRazorpayPayment } from "../utils/razorpay";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

type PaymentState = "idle" | "processing" | "failed";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeFromCart, subtotal, shipping, total } = useCart();
  const { language } = useLanguage();
  const t = translations[language].cart;
  const [paymentState, setPaymentState] = useState<PaymentState>("idle");

  const handleWhatsAppOrder = () => {
    const url = buildWhatsAppUrl(buildOrderMessage(items, subtotal, shipping, total, language));
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handlePayNow = async () => {
    setPaymentState("processing");
    try {
      const order = await createRazorpayOrder(items);
      openRazorpayCheckout({
        order,
        productName: PRODUCT_CONFIG.productName[language],
        onSuccess: async (response) => {
          const verified = await verifyRazorpayPayment(response);
          if (verified) {
            const params = new URLSearchParams({
              order_id: response.razorpay_order_id,
              payment_id: response.razorpay_payment_id,
              amount: String(total),
              currency: "INR",
            });
            window.location.href = `/thank-you?${params.toString()}`;
          } else {
            setPaymentState("failed");
          }
        },
        onDismiss: () => setPaymentState("idle"),
      });
    } catch {
      setPaymentState("failed");
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={t.title}
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-[var(--color-cream)] z-50 shadow-2xl transition-transform duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--color-beige)]/50">
          <h2 className="font-sans font-bold text-lg text-[var(--color-dark-choc)]">{t.title}</h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label={t.close}
            className="p-2 rounded-full hover:bg-[var(--color-bg)] focus-ring"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="text-center text-[var(--color-choc)]/70 font-sans mt-10">{t.empty}</p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => {
                const pkg = productPackages.find((p) => p.id === item.packageId);
                const label = pkg ? pkg.label[language] : item.packageId;
                return (
                  <li
                    key={item.packageId}
                    className="flex items-center justify-between bg-white rounded-2xl p-3 shadow-sm"
                  >
                    <div>
                      <p className="font-semibold text-[var(--color-dark-choc)]">{t.productName}</p>
                      <p className="text-sm text-[var(--color-choc)]/80">
                        {label} · {t.qty}: {item.quantity}
                      </p>
                      <p className="text-sm font-bold text-[var(--color-accent)]">
                        {PRODUCT_CONFIG.currency}
                        {item.price * item.quantity}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.packageId)}
                      aria-label={t.remove(label)}
                      disabled={paymentState !== "idle"}
                      className="p-2 rounded-full hover:bg-red-50 text-red-500 focus-ring disabled:opacity-30"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[var(--color-beige)]/50 px-5 py-4 space-y-2 bg-white">
            <div className="flex justify-between text-sm font-sans text-[var(--color-choc)]">
              <span>{t.subtotal}</span>
              <span>
                {PRODUCT_CONFIG.currency}
                {subtotal}
              </span>
            </div>
            <div className="flex justify-between text-sm font-sans text-[var(--color-choc)]">
              <span>{t.shipping}</span>
              <span>
                {PRODUCT_CONFIG.currency}
                {shipping}
              </span>
            </div>
            <div className="flex justify-between text-base font-sans font-bold text-[var(--color-dark-choc)] pt-2 border-t border-[var(--color-bg)]">
              <span>{t.total}</span>
              <span>
                {PRODUCT_CONFIG.currency}
                {total}
              </span>
            </div>

            <div className="pt-2 space-y-2.5">
              {paymentState === "failed" && (
                <p className="text-sm font-sans font-semibold text-red-600 text-center">{t.paymentFailed}</p>
              )}
              <button
                type="button"
                onClick={handlePayNow}
                disabled={paymentState === "processing"}
                className="w-full py-3 rounded-full bg-[var(--color-accent)] text-white font-sans font-bold hover:scale-[1.02] active:scale-95 transition-transform shadow-md focus-ring disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {paymentState === "processing" && <Loader2 className="w-4 h-4 animate-spin" />}
                {paymentState === "processing" ? t.processingPayment : t.payNow}
              </button>

              <div className="flex items-center gap-2 text-xs text-[var(--color-choc)]/50 font-sans">
                <div className="flex-1 h-px bg-[var(--color-bg)]" />
                {t.orDivider}
                <div className="flex-1 h-px bg-[var(--color-bg)]" />
              </div>

              <button
                type="button"
                onClick={handleWhatsAppOrder}
                disabled={paymentState === "processing"}
                className="w-full py-3 rounded-full bg-[#25D366] text-white font-sans font-bold hover:scale-[1.02] active:scale-95 transition-transform shadow-md focus-ring disabled:opacity-50"
              >
                {t.proceed}
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
