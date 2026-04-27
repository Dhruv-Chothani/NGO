import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Lock, CreditCard } from "lucide-react";
import { toast } from "sonner";

const presetAmounts = [500, 1000, 5000];

const DonationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const raised = 847000;
  const goal = 1000000;
  const progress = (raised / goal) * 100;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your generous donation! 🙏");
    setName("");
    setEmail("");
    setAmount("");
  };

  return (
    <section id="donate" className="section-padding bg-background">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Support Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Make a Donation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your contribution helps us provide education, healthcare, and hope to thousands of families.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-card rounded-xl p-8 shadow-card border border-border">
              <div className="mb-8">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-foreground font-medium">₹{raised.toLocaleString()} raised</span>
                  <span className="text-muted-foreground">Goal: ₹{goal.toLocaleString()}</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${progress}%` } : {}}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full gradient-cta rounded-full"
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  maxLength={100}
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  maxLength={255}
                />

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Select Amount</label>
                  <div className="flex gap-3 mb-3">
                    {presetAmounts.map((a) => (
                      <button
                        key={a}
                        type="button"
                        onClick={() => setAmount(String(a))}
                        className={`flex-1 py-2.5 rounded-lg text-sm font-semibold border transition-all ${
                          amount === String(a)
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-muted text-foreground border-border hover:border-primary"
                        }`}
                      >
                        ₹{a.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <Input
                    type="number"
                    placeholder="Custom Amount (₹)"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    min={1}
                    required
                  />
                </div>

                <Button variant="hero" className="w-full" size="lg">
                  Donate ₹{amount || "0"}
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground">Your Impact Matters</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every rupee you donate goes directly toward improving the lives of those who need it most.
              We maintain complete transparency in how funds are utilized.
            </p>

            <div className="space-y-4">
              {[
                { amount: "₹500", impact: "Provides school supplies for one child for a year" },
                { amount: "₹1,000", impact: "Funds a health checkup camp for 10 families" },
                { amount: "₹5,000", impact: "Sponsors a woman's skill training program" },
              ].map((item) => (
                <div key={item.amount} className="flex items-start gap-3 bg-muted/50 rounded-lg p-4">
                  <span className="text-primary font-bold text-lg">{item.amount}</span>
                  <p className="text-foreground text-sm">{item.impact}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 pt-4">
              {[
                { icon: Shield, label: "Secure" },
                { icon: Lock, label: "Encrypted" },
                { icon: CreditCard, label: "Trusted" },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-muted-foreground">
                  <badge.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
