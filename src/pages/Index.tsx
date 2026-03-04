import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import AboutSection from "@/components/AboutSection";
import LocationsSection from "@/components/LocationsSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
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
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
};

export default Index;
