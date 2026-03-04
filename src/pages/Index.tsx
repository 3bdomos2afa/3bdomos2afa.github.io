import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import GlowingBlobs from "@/components/GlowingBlobs";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SvgWave from "@/components/SvgWave";

const Index = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen bg-background overflow-x-hidden">
          <GlowingBlobs />
          <Navbar />
          <HeroSection />
          <SvgWave />
          <AboutSection />
          <SvgWave flip />
          <ProjectsSection />
          <SvgWave />
          <ContactSection />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
