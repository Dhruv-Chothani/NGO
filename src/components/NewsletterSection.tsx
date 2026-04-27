import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const NewsletterSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("You're subscribed! Welcome to our community. 💌");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="gradient-cta rounded-2xl p-8 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Stay Connected with Our Mission
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Subscribe to our newsletter for stories of impact, volunteer opportunities, and updates from the field.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              required
              maxLength={255}
              className="bg-primary-foreground/15 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 flex-1"
            />
            <Button variant="secondary" size="lg" className="font-semibold">
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
