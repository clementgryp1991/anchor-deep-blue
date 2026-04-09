import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyAncSection from "@/components/WhyAncSection";
import GlobalPresenceSection from "@/components/GlobalPresenceSection";
import SupplyChainSection from "@/components/SupplyChainSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyAncSection />
      <GlobalPresenceSection />
      <SupplyChainSection />
      <ProductsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
