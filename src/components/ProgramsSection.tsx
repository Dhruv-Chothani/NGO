import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import programEducation from "@/assets/program-education.jpg";
import programHealthcare from "@/assets/program-healthcare.jpg";
import programWomen from "@/assets/program-women.jpg";
import programCommunity from "@/assets/program-community.jpg";

const programs = [
  {
    image: programEducation,
    title: "Education for All",
    desc: "Providing quality education to underprivileged children through scholarships, school infrastructure, and teacher training programs.",
  },
  {
    image: programHealthcare,
    title: "Healthcare Access",
    desc: "Mobile health clinics, free health camps, and awareness programs ensuring healthcare reaches every doorstep.",
  },
  {
    image: programWomen,
    title: "Women Empowerment",
    desc: "Skill development, microfinance support, and leadership training to help women become self-reliant and confident.",
  },
  {
    image: programCommunity,
    title: "Community Development",
    desc: "Clean water projects, sanitation drives, and infrastructure development to build stronger, healthier communities.",
  },
];

const ProgramsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programs" className="section-padding bg-muted/50">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Our Programs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We run impactful programs that address the root causes of inequality and create pathways to a better future.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={768}
                  height={512}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
                <Button variant="link" className="px-0 text-primary font-semibold">
                  Learn More →
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
