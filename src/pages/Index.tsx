import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TreesSection from "@/components/TreesSection";
import OrnamentsSection from "@/components/OrnamentsSection";
import GardenSection from "@/components/GardenSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TreesSection />
        <OrnamentsSection />
        <GardenSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
