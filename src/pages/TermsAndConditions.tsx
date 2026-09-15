import PolicyLayout from "../components/PolicyLayout";
import { LEGAL_CONFIG } from "../data/legal";

export default function TermsAndConditions() {
  return (
    <PolicyLayout title="Terms & Conditions">
      <p>
        Welcome to {LEGAL_CONFIG.legalEntityName}. By accessing this website and placing an order, you
        agree to the following terms and conditions.
      </p>

      <h2 className="font-bold text-[var(--color-dark-choc)] text-lg pt-2">Products</h2>
      <p>
        We sell Ragi Choco Milkshake powder in the pack sizes listed on our website (100g, 200g, 500g,
        1kg). Prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless
        stated otherwise. Shipping charges are shown separately at checkout.
      </p>

      <h2 className="font-bold text-[var(--color-dark-choc)] text-lg pt-2">Orders & Payment</h2>
      <p>
        Orders can be placed via our website's checkout (powered by Razorpay) or by confirming an order
        through WhatsApp after manual payment. An order is confirmed only after successful payment or
        payment confirmation is received.
      </p>

      <h2 className="font-bold text-[var(--color-dark-choc)] text-lg pt-2">Delivery</h2>
      <p>
        We currently deliver across Tamil Nadu. Estimated delivery timelines will be shared with you
        after order confirmation via WhatsApp.
      </p>

      <h2 className="font-bold text-[var(--color-dark-choc)] text-lg pt-2">Limitation of Liability</h2>
      <p>
        Our product is a food supplement and is not intended to diagnose, treat, cure, or prevent any
        disease. Please consult a healthcare professional before use if you have any medical conditions
        or allergies.
      </p>

      <h2 className="font-bold text-[var(--color-dark-choc)] text-lg pt-2">Changes to Terms</h2>
      <p>We may update these terms from time to time. Continued use of our website implies acceptance of the updated terms.</p>

      <h2 className="font-bold text-[var(--color-dark-choc)] text-lg pt-2">Contact Us</h2>
      <p>
        For any questions about these terms, contact us at{" "}
        <a href={`mailto:${LEGAL_CONFIG.supportEmail}`} className="text-[var(--color-accent)] font-semibold">
          {LEGAL_CONFIG.supportEmail}
        </a>{" "}
        or {LEGAL_CONFIG.supportPhone}.
      </p>
    </PolicyLayout>
  );
}
