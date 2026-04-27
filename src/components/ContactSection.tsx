import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon. ✉️");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-padding bg-muted/50">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Reach Out</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Contact Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to partner with us? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-xl p-8 shadow-card border border-border space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Your Name" required maxLength={100} />
              <Input type="email" placeholder="Email Address" required maxLength={255} />
            </div>
            <Input placeholder="Subject" required maxLength={200} />
            <Textarea placeholder="Your Message..." required maxLength={1000} rows={5} />
            <Button variant="hero" className="w-full" size="lg">Send Message</Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-5">
              {[
                { icon: MapPin, title: "Address", text: "123 Hope Avenue, New Delhi, India 110001" },
                { icon: Phone, title: "Phone", text: "+91 98765 43210" },
                { icon: Mail, title: "Email", text: "info@hopefoundation.org" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg gradient-cta flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.title}</p>
                    <p className="text-muted-foreground text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl overflow-hidden shadow-card border border-border h-64 mt-4">
              <iframe
                title="Hope Foundation Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.48127180454!2d77.06889703955075!3d28.52728034389789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1710000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
