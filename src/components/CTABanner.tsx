import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-muted/50" ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        className="container-narrow text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Ready to Change a Life Today?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Whether you donate, volunteer, or spread the word — every action counts.
          Together, we can build a brighter future.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="lg" className="text-base px-8" asChild>
            <a href="#donate">Donate Now</a>
          </Button>
          <Button variant="outline" size="lg" className="text-base px-8" asChild>
            <a href="#volunteer">Join as Volunteer</a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTABanner;
