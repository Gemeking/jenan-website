import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import HealthAwareness from "@/components/home/HealthAwareness";
import TeamSection from "@/components/home/TeamSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyUsSection />
      <FacilitiesSection />
      <HealthAwareness />
      <TeamSection />
      <CTASection />
    </>
  );
}
