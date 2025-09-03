import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Car, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "nav-blur shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("home")}
            whileHover={{ scale: 1.05 }}
            data-testid="logo"
          >
            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Car className="text-secondary text-2xl mr-3" />
            </motion.div>
            <span className="font-bold text-lg text-primary">SKPMD School</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {[
              { label: "Home", id: "home" },
              { label: "Services", id: "services" },
              { label: "About", id: "about" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-secondary transition-colors font-medium"
                whileHover={{ y: -2 }}
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              asChild
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              data-testid="nav-call-button"
            >
              <a href="tel:9822502053">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-button"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-background border-t border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            data-testid="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { label: "Home", id: "home" },
                { label: "Services", id: "services" },
                { label: "About", id: "about" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-secondary transition-colors w-full text-left"
                  data-testid={`mobile-nav-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button
                  asChild
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  data-testid="mobile-call-button"
                >
                  <a href="tel:9822502053">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now - 9822502053
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
