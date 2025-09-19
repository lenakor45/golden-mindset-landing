import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramSection from "@/components/ProgramSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import BenefitsSection from "@/components/BenefitsSection";
import SpeakersSection from "@/components/SpeakersSection";
import PricingSection from "@/components/PricingSection";
import FinalSection from "@/components/FinalSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <TargetAudienceSection />
      <BenefitsSection />
      <SpeakersSection />
      <PricingSection />
      <FinalSection />
    </main>
  );
};

export default Index;
