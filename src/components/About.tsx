import { Button } from "../components/ui/button";
import { Trophy } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-kente-pattern opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-ats-purple via-ats-light-purple to-ats-kente-red rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-adinkra-pattern opacity-20"></div>
                
                {/* African-inspired decorative elements */}
                <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-ats-kente-yellow via-ats-kente-green to-ats-kente-red opacity-80"></div>
                <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-r from-ats-kente-red via-ats-kente-green to-ats-kente-yellow opacity-80"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Trophy className="h-12 w-12 text-ats-kente-yellow mb-3 mx-auto" />
                    <span className="text-white text-5xl font-bold">ATS</span>
                    <div className="mt-2 text-ats-kente-yellow">EST. 2018</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-ats-gold rounded-full opacity-20 blur-xl -z-10"></div>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-ats-kente-green rounded-full opacity-20 blur-xl -z-10"></div>
              
              {/* African pattern accent */}
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-32">
                <div className="h-full w-full flex flex-col gap-2">
                  <div className="h-3 w-full bg-ats-kente-yellow rounded-full"></div>
                  <div className="h-3 w-full bg-ats-kente-red rounded-full"></div>
                  <div className="h-3 w-full bg-ats-kente-green rounded-full"></div>
                  <div className="h-3 w-full bg-ats-purple rounded-full"></div>
                  <div className="h-3 w-full bg-ats-kente-yellow rounded-full"></div>
                  <div className="h-3 w-full bg-ats-kente-red rounded-full"></div>
                  <div className="h-3 w-full bg-ats-kente-green rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2">
                <div className="h-1 w-6 bg-ats-kente-yellow"></div>
                <span className="text-ats-kente-yellow font-medium uppercase text-sm tracking-wider">Our Story</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Alkebulan Tech Solutions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ats-kente-yellow via-ats-kente-green to-ats-kente-red mb-8"></div>
            
            <p className="text-gray-600 mb-6">
              Founded in 2018, Alkebulan Tech Solutions (ATS Inc) is a forward-thinking technology company 
              that combines African innovation with global technology standards to deliver exceptional solutions.
            </p>
            
            <p className="text-gray-600 mb-6">
              Our name "Alkebulan" - the ancient name for Africa - reflects our commitment to bring the rich heritage, 
              creativity, and untapped potential of African technology to the global market.
            </p>
            
            <p className="text-gray-600 mb-8">
              At ATS, we believe in the power of technology to transform businesses and communities. 
              Our diverse team of experts works collaboratively to provide innovative, sustainable, 
              and cost-effective solutions that address real-world challenges.
            </p>
            
            <Button className="bg-gradient-to-r from-ats-purple to-ats-kente-red text-white shadow-lg hover:shadow-xl transition-all">
              Learn More About Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;