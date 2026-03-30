import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/80 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="container-narrow">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-primary fill-primary" />
              <span className="text-lg font-bold text-primary-foreground">Hope Foundation</span>
            </div>
            <p className="text-sm leading-relaxed">
              Transforming lives through education, healthcare, and community empowerment since 2010.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["About", "Programs", "Donate", "Volunteer", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              {["Education for All", "Healthcare Access", "Women Empowerment", "Community Development"].map((p) => (
                <li key={p}>
                  <span className="hover:text-primary transition-colors cursor-pointer">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors text-xs font-medium"
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Hope Foundation. All rights reserved. Made with ❤️ for a better world.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
