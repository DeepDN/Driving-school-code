import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/ui/counter";

export function AboutSection() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300",
      alt: "Student learning to drive in modern car with instructor",
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300",
      alt: "Driving lesson in progress with professional instructor",
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300",
      alt: "Professional instructor teaching road safety to students",
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300",
      alt: "RTO office services and vehicle documentation process",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" data-testid="about-title">
              About Our Driving School
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              With over 15 years of experience in driver education and RTO services, श्री संत कृपा प्रसाद मोटर ड्रायव्हिंग स्कूल has been the trusted choice for driving education in Savda and surrounding areas.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Under the guidance of <strong>Ulhas Nemade</strong>, we have successfully trained over 2000+ students and helped countless individuals with their RTO and insurance needs. Our commitment to safety, professionalism, and customer satisfaction sets us apart.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                data-testid="counter-students"
              >
                <Counter target={2000} suffix="+" className="text-3xl md:text-4xl" />
                <div className="text-muted-foreground font-medium">Happy Students</div>
              </motion.div>
              
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                data-testid="counter-experience"
              >
                <Counter target={15} suffix="+" className="text-3xl md:text-4xl" />
                <div className="text-muted-foreground font-medium">Years Experience</div>
              </motion.div>
              
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                data-testid="counter-success"
              >
                <Counter target={100} suffix="%" className="text-3xl md:text-4xl" />
                <div className="text-muted-foreground font-medium">Success Rate</div>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-bold"
                data-testid="about-call-button"
              >
                <a href="tel:9822502053">
                  <Phone className="mr-3 h-5 w-5" />
                  Start Your Journey Today
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                className={index % 2 === 1 ? "mt-6" : ""}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                data-testid={`about-image-${index}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-48 object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
