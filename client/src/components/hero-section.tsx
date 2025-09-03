import { motion } from "framer-motion";
import { Phone, GraduationCap, ShipWheel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingElements } from "./animations/floating-elements";

export function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="hero-bg min-h-screen flex items-center pt-16 relative overflow-hidden"
      data-testid="hero-section"
    >
      <FloatingElements />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="marathi-text text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-4 leading-tight"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                data-testid="hero-title"
              >
                श्री संत कृपा प्रसाद मोटर ड्रायव्हिंग स्कूल
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-primary-foreground/90 font-semibold mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                सावदा
              </motion.p>
              
              <motion.div
                className="glass-effect inline-block px-4 py-2 rounded-full mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
              >
                <p className="text-primary-foreground font-semibold">
                  Established in 2009 | 15+ Years of Excellence
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl">
                Learn driving from experienced professionals. All types of vehicle licenses, insurance, and RTO services under one roof.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="floating-btn bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-bold"
                    data-testid="hero-call-button"
                  >
                    <a href="tel:9822502053">
                      <Phone className="mr-3 h-5 w-5" />
                      Call Now - 9822502053
                    </a>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={scrollToServices}
                    variant="outline"
                    size="lg"
                    className="bg-primary-foreground/20 text-primary-foreground px-8 py-4 text-lg font-bold hover:bg-primary-foreground/30 border-2 border-primary-foreground/30"
                    data-testid="hero-services-button"
                  >
                    <GraduationCap className="mr-3 h-5 w-5" />
                    View Services
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="mt-8 text-center lg:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <p className="text-primary-foreground/80 font-medium">
                Owner: <span className="text-accent font-bold">Ulhas Nemade</span>
              </p>
            </motion.div>
          </div>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
                  alt="Professional driving instructor teaching student in car"
                  className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
                  data-testid="hero-image"
                />
                
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground px-6 py-3 rounded-xl shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5, type: "spring" }}
                >
                  <div className="text-2xl font-bold">2000+</div>
                  <div className="text-sm">Happy Students</div>
                </motion.div>
              </motion.div>

              {/* Animated ShipWheel Wheel */}
              <motion.div
                className="absolute top-4 right-4 text-accent/80"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <ShipWheel size={40} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Floating Call Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-40 lg:hidden"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        data-testid="floating-call-button"
      >
        <Button
          asChild
          size="icon"
          className="floating-btn bg-secondary hover:bg-secondary/90 text-secondary-foreground w-16 h-16 rounded-full shadow-2xl"
        >
          <a href="tel:9822502053">
            <Phone className="h-6 w-6" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
