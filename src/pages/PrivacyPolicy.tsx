import PolicyLayout from "../components/PolicyLayout";
import { LEGAL_CONFIG } from "../data/legal";

export default function PrivacyPolicy() {
  return (
    <PolicyLayout title="Privacy Policy">
      <p>
        {LEGAL_CONFIG.legalEntityName} ("we", "us", "our") operates this website. This Privacy Policy
        explains how we collect, use, and protect your information when you visit our site or place an
        order with us.
      </p>

      <h2 className="font-bold text-[var(--color-dark-choc)] text-lg pt-2">Information We Collect</h2>
      <p>
        When you place an order or contact us via WhatsApp or our payment gateway, we may collect your
        name, phone number, delivery address, and payment confirmation details. We do not store your
        card, UPI, or other payment credentials — all payments are processed securely by our payment
        partner, Razorpay.
      </p>

      <h2 className="font-bold text-[var(--color-dark-choc)] text-lg pt-2">How We Use Your Information</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>To process and deliver your order</li>
        <li>To communicate order updates via WhatsApp, phone, or email</li>
        <li>To respond to customer support queries</li>
      </ul>

      <h2 className="font-bold text-[var(--color-dark-choc)] text-lg pt-2">Data Sharing</h2>
      <p>
        We do not sell or rent your personal information to third parties. Information is shared only
        with service providers necessary to fulfil your order, such as our payment gateway (Razorpay)
        and delivery partners.
      </p>

      <h2 className="font-bold text-[var(--color-dark-choc)] text-lg pt-2">Data Security</h2>
      <p>
        Payment transactions are encrypted and processed by Razorpay, a PCI-DSS compliant payment
        gateway. We take reasonable measures to protect the personal information you share with us.
      </p>

      <h2 className="font-bold text-[var(--color-dark-choc)] text-lg pt-2">Contact Us</h2>
      <p>
        For any privacy-related questions, contact us at{" "}
        <a href={`mailto:${LEGAL_CONFIG.supportEmail}`} className="text-[var(--color-accent)] font-semibold">
          {LEGAL_CONFIG.supportEmail}
        </a>{" "}
        or {LEGAL_CONFIG.supportPhone}.
      </p>
    </PolicyLayout>
  );
}
