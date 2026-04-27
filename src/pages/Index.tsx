import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import DonationSection from "@/components/DonationSection";
import VolunteerSection from "@/components/VolunteerSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import NewsletterSection from "@/components/NewsletterSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const LoadingScreen = () => (
  <motion.div
    className="fixed inset-0 z-[100] gradient-cta flex items-center justify-center"
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="text-center"
    >
      <Heart className="w-16 h-16 text-primary-foreground mx-auto mb-4 animate-pulse-soft" />
      <p className="text-primary-foreground text-xl font-semibold">Hope Foundation</p>
    </motion.div>
  </motion.div>
);

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <Navbar /> 
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <DonationSection />
        <VolunteerSection />
        <GallerySection />
        <NewsletterSection />
        <ContactSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
};

export default Index;
