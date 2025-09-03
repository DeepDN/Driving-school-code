import { motion } from "framer-motion";
import { 
  CreditCard, 
  Car, 
  RefreshCw, 
  Shield, 
  FileText, 
  Settings,
  CheckCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: CreditCard,
    title: "Vehicle Driving Licenses",
    description: "All types of driving licenses - 2Wheeler, 4Wheeler, Commercial Vehicle licenses with complete documentation support.",
    features: ["Two Wheeler License", "Four Wheeler License", "Commercial Vehicle License"],
  },
  {
    icon: Car,
    title: "Car Driving Training",
    description: "Professional driving lessons with experienced instructors. Learn at your own pace with modern training vehicles.",
    features: ["Beginner to Advanced", "Practical Road Training", "Theory Classes"],
  },
  {
    icon: RefreshCw,
    title: "Ownership Transfer",
    description: "Quick and hassle-free vehicle ownership transfer services with complete legal documentation.",
    features: ["RC Transfer", "NOC Processing", "Complete Documentation"],
  },
  {
    icon: Shield,
    title: "Vehicle Insurance",
    description: "All types of vehicle insurance from top insurance companies with best rates and quick claim processing.",
    features: ["Third Party Insurance", "Comprehensive Insurance", "Claim Assistance"],
  },
  {
    icon: FileText,
    title: "RTO Services",
    description: "Complete RTO related services including registration, permits, and other vehicle documentation.",
    features: ["Vehicle Registration", "Permit Services", "PUC Certificate"],
  },
  {
    icon: Settings,
    title: "Complete RTO Solutions",
    description: "One-stop solution for all your RTO needs with expert guidance and fast processing.",
    features: ["Expert Consultation", "Fast Processing", "Complete Support"],
  },
];

const insuranceCompanies = [
  "ICICI Lombard", "Bajaj Allianz", "HDFC ERGO", "TATA AIG", "New India",
  "Oriental", "United India", "National", "Royal Sundaram", "Reliance",
  "Future Generali", "Kotak", "Shriram", "Digit", "Bharti AXA",
  "Cholamandalam", "SBI General", "Go Digit", "Acko", "IFFCO Tokio", "Magma HDI"
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted relative overflow-hidden" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4" data-testid="services-title">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive driving education and RTO services to get you on the road safely and legally
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              data-testid={`service-card-${index}`}
            >
              <Card className="service-card h-full bg-background shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <motion.div
                    className="text-secondary text-4xl mb-4"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <service.icon />
                  </motion.div>
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Insurance Companies Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-background shadow-lg" data-testid="insurance-companies-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary text-center mb-8">
                Insurance Partners
              </h3>
              <p className="text-center text-muted-foreground mb-8">
                We work with all major insurance companies to provide you the best coverage at competitive rates
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {insuranceCompanies.map((company, index) => (
                  <motion.div
                    key={index}
                    className="p-4 border border-border rounded-lg hover:border-secondary transition-colors text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    data-testid={`insurance-company-${index}`}
                  >
                    <div className="text-primary font-semibold text-sm">{company}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
