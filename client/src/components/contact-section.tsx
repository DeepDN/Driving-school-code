import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, User, MapPin, Clock, Send, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await apiRequest("POST", "/api/contact", formData);
      const result = await response.json();
      
      toast({
        title: "Message Sent!",
        description: result.message,
      });

      setFormData({ name: "", phone: "", service: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-muted" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4" data-testid="contact-title">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your driving journey? Get in touch with us today for enrollment and inquiries.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-background shadow-lg" data-testid="contact-info-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>

                <div className="space-y-6">
                  <motion.div
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    data-testid="contact-phone"
                  >
                    <div className="bg-secondary/10 p-3 rounded-lg mr-4">
                      <Phone className="text-secondary text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Phone</h4>
                      <a
                        href="tel:9822502053"
                        className="text-secondary font-bold text-lg hover:underline"
                      >
                        9822502053
                      </a>
                      <p className="text-sm text-muted-foreground">Call anytime for inquiries</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    data-testid="contact-owner"
                  >
                    <div className="bg-secondary/10 p-3 rounded-lg mr-4">
                      <User className="text-secondary text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Owner</h4>
                      <p className="text-foreground font-medium">Ulhas Nemade</p>
                      <p className="text-sm text-muted-foreground">Experienced driving instructor</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    data-testid="contact-address"
                  >
                    <div className="bg-secondary/10 p-3 rounded-lg mr-4">
                      <MapPin className="text-secondary text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Address</h4>
                      <p className="text-foreground">Shop no. 3, Sarode Complex</p>
                      <p className="text-foreground">In front of Savda Bus Stand</p>
                      <p className="text-foreground">Tal. Raver, Dist. Jalgaon</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    data-testid="contact-hours"
                  >
                    <div className="bg-secondary/10 p-3 rounded-lg mr-4">
                      <Clock className="text-secondary text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Working Hours</h4>
                      <p className="text-foreground">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p className="text-foreground">Sunday: 9:00 AM - 2:00 PM</p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-4 text-lg font-bold"
                      data-testid="contact-call-enrollment"
                    >
                      <a href="tel:9822502053">
                        <Phone className="mr-3 h-5 w-5" />
                        Call Now for Enrollment
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-background shadow-lg" data-testid="contact-form-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Send Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full"
                      data-testid="form-name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Enter your phone number"
                      className="w-full"
                      data-testid="form-phone"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-sm font-medium text-foreground mb-2">
                      Service Interested In
                    </Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => handleInputChange("service", value)}
                      data-testid="form-service"
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="driving-license">Driving License</SelectItem>
                        <SelectItem value="car-training">Car Driving Training</SelectItem>
                        <SelectItem value="vehicle-insurance">Vehicle Insurance</SelectItem>
                        <SelectItem value="ownership-transfer">Ownership Transfer</SelectItem>
                        <SelectItem value="rto-services">RTO Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your requirements"
                      className="w-full"
                      data-testid="form-message"
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 text-lg font-bold"
                      data-testid="form-submit"
                    >
                      <Send className="mr-3 h-5 w-5" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Google Maps */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-background shadow-lg" data-testid="maps-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary text-center mb-6">Find Us Here</h3>
              <div className="aspect-video w-full bg-muted rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <MapPin className="h-16 w-16 text-secondary mb-4 mx-auto" />
                  </motion.div>
                  <p className="text-lg font-semibold text-primary">Interactive Map Location</p>
                  <p className="text-muted-foreground">Shop no. 3, Sarode Complex, Savda Bus Stand</p>
                  <p className="text-muted-foreground">Tal. Raver, Dist. Jalgaon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
