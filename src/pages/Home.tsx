import Hero from "../components/Hero";
import IngredientStrip from "../components/IngredientStrip";
import Benefits from "../components/Benefits";
import HowToUse from "../components/HowToUse";
import ProductOptions from "../components/ProductOptions";
import Testimonials from "../components/Testimonials";
import OrderSteps from "../components/OrderSteps";
import PaymentSection from "../components/PaymentSection";
import TrustBar from "../components/TrustBar";
import FinalCTA from "../components/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <IngredientStrip />
      <Benefits />
      <HowToUse />
      <ProductOptions />
      <Testimonials />
      <OrderSteps />
      <PaymentSection />
      <TrustBar />
      <FinalCTA />
    </main>
  );
}
