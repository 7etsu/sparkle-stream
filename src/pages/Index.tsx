import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import TeamSection from "@/components/TeamSection";
import ReviewsSection from "@/components/ReviewsSection";
import InsuranceSection from "@/components/InsuranceSection";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => (
  <div className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <AboutSection />
    <SpecialtiesSection />
    <TeamSection />
    <ReviewsSection />
    <InsuranceSection />
    <ContactSection />
    <MapSection />
    <Footer />
    <WhatsAppFloat />
  </div>
);

export default Index;
