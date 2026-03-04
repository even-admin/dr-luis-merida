import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import LocationsSection from "@/components/LocationsSection";
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
        <AboutSection />
        <SpecialtiesSection />
        <LocationsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
};

export default Index;
