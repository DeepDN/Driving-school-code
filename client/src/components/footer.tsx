import { motion } from "framer-motion";
import { Phone, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "About Us", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="marathi-text text-xl font-bold mb-4" data-testid="footer-title">
              श्री संत कृपा प्रसाद मोटर ड्रायव्हिंग स्कूल
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted partner for all driving education and RTO services in Savda since 2009.
            </p>
            <div className="flex space-x-4">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  asChild
                  size="icon"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full"
                  data-testid="footer-phone"
                >
                  <a href="tel:9822502053">
                    <Phone className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  asChild
                  size="icon"
                  variant="outline"
                  className="bg-primary-foreground/20 hover:bg-primary-foreground/30 border-primary-foreground/30 text-primary-foreground rounded-full"
                  data-testid="footer-facebook"
                >
                  <a href="#" aria-label="Facebook">
                    <Facebook className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  asChild
                  size="icon"
                  variant="outline"
                  className="bg-primary-foreground/20 hover:bg-primary-foreground/30 border-primary-foreground/30 text-primary-foreground rounded-full"
                  data-testid="footer-instagram"
                >
                  <a href="#" aria-label="Instagram">
                    <Instagram className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors text-left"
                  whileHover={{ x: 5 }}
                  data-testid={`footer-link-${link.id}`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>
                <strong>Owner:</strong> Ulhas Nemade
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:9822502053" className="text-accent hover:underline">
                  9822502053
                </a>
              </p>
              <p>
                <strong>Address:</strong> Shop no. 3, Sarode Complex, Savda Bus Stand, Tal. Raver, Dist. Jalgaon
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-primary-foreground/20 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-primary-foreground/60" data-testid="footer-copyright">
            © 2024 श्री संत कृपा प्रसाद मोटर ड्रायव्हिंग स्कूल. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 mt-2" data-testid="footer-developer">
            Developed by <span className="text-accent font-semibold">Deepak Nemade</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
