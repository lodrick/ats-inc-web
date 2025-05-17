
import { Button } from "../components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden bg-adinkra-pattern">
      <div className="absolute inset-0 bg-gradient-to-br from-ats-purple/10 to-ats-gold/5 pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in relative z-10">
            <div className="absolute -left-12 -top-12 w-32 h-32 bg-ats-gold/20 rounded-full blur-2xl"></div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-10 bg-ats-kente-yellow"></div>
              <span className="text-ats-kente-yellow font-medium">Innovation from Africa</span>
              <div className="h-1 w-10 bg-ats-kente-yellow"></div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-ats-purple">African</span> Innovation,{" "}
              <span className="text-ats-gold">Global</span> Technology Solutions
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Alkebulan Tech Solutions provides cutting-edge technology services and solutions 
              that bridge traditional excellence with modern innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-ats-purple to-ats-kente-red text-white px-6 py-6 text-lg transition-transform hover:scale-105 duration-300 shadow-lg">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-ats-gold text-ats-purple px-6 py-6 text-lg border-2 hover:bg-ats-gold/10 transition-all">
                Contact Us
              </Button>
            </div>
          </div>
          
          <div className="animate-fade-in animate-delayed relative z-10">
            <div className="relative">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-ats-kente-green to-ats-teal rounded-full blur-xl opacity-40"></div>
              <div className="absolute -left-8 -bottom-10 w-28 h-28 bg-ats-terracotta rounded-full blur-lg opacity-30"></div>
              
              <svg 
                viewBox="0 0 200 200" 
                className="w-full h-auto relative z-10"
                style={{ filter: "drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))" }}
              >
                <defs>
                  <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#5B21B6" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </linearGradient>
                </defs>
                <path 
                  fill="url(#logo-gradient)" 
                  d="M40.8,-56.1C54,-44.7,66.5,-33.3,71.7,-18.3C76.9,-3.4,74.8,15.1,67.2,31.1C59.6,47.1,46.3,60.6,30.9,68.4C15.4,76.1,-2.3,78.1,-19.3,74.1C-36.3,70.1,-52.8,60.1,-63.8,45.3C-74.8,30.6,-80.3,11.3,-78.1,-7.5C-75.9,-26.3,-65.9,-44.5,-51.5,-56.1C-37.2,-67.7,-18.6,-72.6,-1.8,-70.3C15,-68,27.5,-67.6,40.8,-56.1Z" 
                  transform="translate(100 100)" 
                />
              </svg>
              
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-white text-center relative">
                  <div className="text-5xl font-bold">ATS</div>
                  <div className="text-xl">Tech Solutions</div>
                  <div className="absolute -top-16 right-0">
                    <Star className="text-ats-kente-yellow h-8 w-8" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8 gap-4">
              <div className="h-3 w-3 rounded-full bg-ats-kente-red"></div>
              <div className="h-3 w-3 rounded-full bg-ats-kente-yellow"></div>
              <div className="h-3 w-3 rounded-full bg-ats-kente-green"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;