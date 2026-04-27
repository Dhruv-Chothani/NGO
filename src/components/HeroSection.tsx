import { motion } from "framer-motion";
import { GraduationCap, HeartPulse, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const floatingCards = [
  { icon: GraduationCap, title: "Education Programs", desc: "Empowering through learning" },
  { icon: HeartPulse, title: "Healthcare Support", desc: "Accessible care for all" },
  { icon: Users, title: "Women Empowerment", desc: "Building confidence & skills" },
  { icon: Building2, title: "Community Development", desc: "Stronger together" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt="Children learning together in a community"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 gradient-hero-overlay" />

      <div className="relative z-10 container-narrow w-full px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6"
          >
            🌱 Making a difference since 2010
          </motion.span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Together We Can{" "}
            <span className="text-hope-gold">Make a Difference</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-xl mb-8 leading-relaxed">
            Transforming lives through education, healthcare, and community
            empowerment. Every act of kindness creates a ripple of hope.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" className="text-base px-8" asChild>
              <a href="#donate">Donate Now</a>
            </Button>
            <Button variant="heroOutline" size="lg" className="text-base px-8" asChild>
              <a href="#volunteer">Become a Volunteer</a>
            </Button>
          </div>
        </motion.div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {floatingCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
              className="glass-card rounded-xl p-5 hover:scale-105 transition-transform duration-300 cursor-default"
            >
              <card.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground text-sm">{card.title}</h3>
              <p className="text-muted-foreground text-xs mt-1">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
