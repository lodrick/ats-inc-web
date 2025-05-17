
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Solutions from "../components/Solutions";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <div className="absolute inset-0 bg-adinkra-pattern opacity-5 pointer-events-none"></div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Solutions />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
