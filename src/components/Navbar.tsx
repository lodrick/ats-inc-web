
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-xl font-bold text-ats-purple">
                <span className="text-ats-gold">ATS</span> Inc
              </span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-ats-purple transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-ats-purple transition-colors">About Us</a>
            <a href="#solutions" className="text-gray-700 hover:text-ats-purple transition-colors">Solutions</a>
            <a href="#contact" className="text-gray-700 hover:text-ats-purple transition-colors">Contact</a>
            <Button className="purple-gradient text-white hover:opacity-90">
              Get Started
            </Button>
          </nav>
          
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} size="icon">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-ats-purple transition-colors">Services</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-ats-purple transition-colors">About Us</a>
            <a href="#solutions" className="block px-3 py-2 text-gray-700 hover:text-ats-purple transition-colors">Solutions</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-ats-purple transition-colors">Contact</a>
            <Button className="purple-gradient text-white hover:opacity-90 w-full mt-2">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;