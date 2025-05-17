
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Code, Database, Globe, Shield, Users } from "lucide-react";

const services = [
  {
    icon: <Code className="h-8 w-8 text-ats-purple" />,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to solve your unique business challenges and optimize operations."
  },
  {
    icon: <Globe className="h-8 w-8 text-ats-purple" />,
    title: "Web & Mobile Applications",
    description: "Engaging, responsive web and mobile applications built with the latest technologies for maximum impact."
  },
  {
    icon: <Database className="h-8 w-8 text-ats-purple" />,
    title: "Cloud Infrastructure",
    description: "Scalable, secure cloud solutions that modernize your IT infrastructure and reduce operational costs."
  },
  {
    icon: <Shield className="h-8 w-8 text-ats-purple" />,
    title: "Cybersecurity Services",
    description: "Comprehensive security solutions to protect your digital assets and ensure business continuity."
  },
  {
    icon: <Users className="h-8 w-8 text-ats-purple" />,
    title: "IT Consulting",
    description: "Strategic technology guidance to align your IT investments with your business goals and objectives."
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-ats-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to meet your business needs and drive innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;