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
        <hr className="border-0 h-px bg-foreground/10 max-w-[700px] mx-auto" />
        <AboutSection />
        <hr className="border-0 h-px bg-foreground/10 max-w-[700px] mx-auto" />
        <LocationsSection />
        <hr className="border-0 h-px bg-foreground/10 max-w-[700px] mx-auto" />
        <ReviewsSection />
        <hr className="border-0 h-px bg-foreground/10 max-w-[700px] mx-auto" />
        <OfficesSection />
      </main>
      <SiteFooter />
    </>
  );
};

export default Index;
