import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import GlowingBlobs from "@/components/GlowingBlobs";
import CustomCursor from "@/components/CustomCursor";
import ParticlesBackground from "@/components/ParticlesBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
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
          <CustomCursor />
          <GlowingBlobs />
          <ParticlesBackground />
          <Navbar />
          <HeroSection />
          <SvgWave />
          <AboutSection />
          <SvgWave flip />
          <SkillsSection />
          <SvgWave />
          <ProjectsSection />
          <SvgWave flip />
          <ContactSection />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
