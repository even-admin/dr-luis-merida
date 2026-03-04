import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import AboutSection from "@/components/AboutSection";
import LocationsSection from "@/components/LocationsSection";
import ReviewsSection from "@/components/ReviewsSection";
import OfficesSection from "@/components/OfficesSection";
import SiteFooter from "@/components/SiteFooter";
import StructuredData from "@/components/StructuredData";

const Index = () => {
  return (
    <>
      <StructuredData />
      <SiteHeader />
      <main>
        <HeroSection />
        <SpecialtiesSection />
        <AboutSection />
        <LocationsSection />
        <ReviewsSection />
        <OfficesSection />
      </main>
      <SiteFooter />
    </>
  );
};

export default Index;
