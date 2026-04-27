import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Globe, Users, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";

const benefits = [
  { icon: Heart, title: "Make an Impact", desc: "Directly contribute to changing lives" },
  { icon: Globe, title: "Gain Experience", desc: "Develop valuable real-world skills" },
  { icon: Users, title: "Build Community", desc: "Connect with like-minded changemakers" },
  { icon: Award, title: "Get Certified", desc: "Receive volunteer certificates and recognition" },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Education Volunteer",
    text: "Volunteering with Hope Foundation has been the most rewarding experience. Seeing children's eyes light up when they learn is priceless.",
  },
  {
    name: "Rahul Mehta",
    role: "Healthcare Camp Organizer",
    text: "The foundation's commitment to healthcare access is truly inspiring. I've seen firsthand how our health camps transform communities.",
  },
  {
    name: "Anita Desai",
    role: "Women Empowerment Lead",
    text: "Working with women in rural areas taught me the true meaning of resilience. These women are incredible, and I'm honored to support them.",
  },
];

const VolunteerSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for volunteering! We'll be in touch soon. 🌟");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="volunteer" className="section-padding bg-muted/50">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Join Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Become a Volunteer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your time and skills can create lasting change. Join our community of passionate volunteers.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-card rounded-xl p-6 text-center shadow-soft border border-border"
            >
              <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center mx-auto mb-3">
                <b.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">{b.title}</h3>
              <p className="text-muted-foreground text-xs">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-xl p-8 shadow-card border border-border space-y-4"
          >
            <h3 className="text-xl font-semibold text-foreground mb-2">Sign Up to Volunteer</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Full Name" required maxLength={100} />
              <Input type="email" placeholder="Email" required maxLength={255} />
            </div>
            <Input placeholder="Phone Number" required maxLength={15} />
            <Textarea placeholder="Why do you want to volunteer? Tell us about your skills..." required maxLength={500} rows={4} />
            <Button variant="hero" className="w-full" size="lg">Submit Application</Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">What Our Volunteers Say</h3>
            <div className="bg-card rounded-xl p-8 shadow-card border border-border relative">
              <p className="text-muted-foreground italic leading-relaxed mb-6">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonials[currentTestimonial].name}</p>
                <p className="text-sm text-primary">{testimonials[currentTestimonial].role}</p>
              </div>

              <div className="flex gap-2 mt-6">
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
