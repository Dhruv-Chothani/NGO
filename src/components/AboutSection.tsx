import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Target, Eye, BookOpen } from "lucide-react";

const stats = [
  { value: 10000, suffix: "+", label: "Lives Impacted" },
  { value: 500, suffix: "+", label: "Volunteers" },
  { value: 50, suffix: "+", label: "Projects" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Who We Are</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">About Hope Foundation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Founded in 2010, Hope Foundation is a non-profit organization dedicated to creating
            lasting change in underprivileged communities across the nation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To empower underprivileged communities through sustainable education, accessible healthcare, and economic opportunities that foster self-reliance.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              text: "A world where every individual has equal access to education, healthcare, and the opportunity to live with dignity and hope.",
            },
            {
              icon: BookOpen,
              title: "Our Story",
              text: "What began as a small initiative to teach 20 children has grown into a movement touching thousands of lives across multiple states.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-elevated transition-shadow duration-300 border border-border"
            >
              <div className="w-12 h-12 rounded-lg gradient-cta flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-center"
            >
              <CountUp target={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
