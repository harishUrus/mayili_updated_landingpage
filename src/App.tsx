import type React from "react";
import { CartProvider } from "./context/CartContext";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import ThankYou from "./pages/ThankYou";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import ContactUs from "./pages/ContactUs";

const STANDALONE_PAGES: Record<string, React.ComponentType> = {
  "/thank-you": ThankYou,
  "/privacy-policy": PrivacyPolicy,
  "/terms-and-conditions": TermsAndConditions,
  "/refund-policy": RefundPolicy,
  "/shipping-policy": ShippingPolicy,
  "/contact-us": ContactUs,
};

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const StandalonePage = STANDALONE_PAGES[path];

  if (StandalonePage) {
    return (
      <LanguageProvider>
        <StandalonePage />
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <CartProvider>
        <Navbar />
        <Home />
        <Footer />
        <CartDrawer />
        <WhatsAppButton />
      </CartProvider>
    </LanguageProvider>
  );
}
