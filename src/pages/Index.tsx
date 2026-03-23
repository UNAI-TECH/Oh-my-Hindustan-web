import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import FeaturesSection from "@/components/FeaturesSection";
import DetailedFeatures from "@/components/DetailedFeatures";
import SolutionsSection from "@/components/SolutionsSection";
import StatsSection from "@/components/StatsSection";
import PricingSection from "@/components/PricingSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <FeaturesSection />
      <DetailedFeatures />
      <SolutionsSection />
      <StatsSection />
      <PricingSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
