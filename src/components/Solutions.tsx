
import { Badge } from "../components/ui/badge";

const solutions = [
  {
    title: "Enterprise Digital Transformation",
    description: "Comprehensive digital strategies and implementation to modernize legacy systems and processes.",
    industries: ["Healthcare", "Finance", "Manufacturing"],
    image: "bg-gradient-to-br from-blue-500 to-purple-600"
  },
  {
    title: "Data Analytics & Business Intelligence",
    description: "Advanced analytics solutions that transform raw data into actionable insights for informed decision-making.",
    industries: ["Retail", "Finance", "Government"],
    image: "bg-gradient-to-br from-green-500 to-teal-600"
  },
  {
    title: "Smart Infrastructure Solutions",
    description: "IoT-enabled infrastructure management systems for smarter, more efficient operations and resource utilization.",
    industries: ["Energy", "Transportation", "Cities"],
    image: "bg-gradient-to-br from-amber-500 to-orange-600"
  }
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 pattern-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solutions</h2>
          <div className="w-24 h-1 bg-ats-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Innovative technology solutions designed to address specific industry challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`h-32 ${solution.image} flex items-center justify-center`}>
                <span className="text-white text-xl font-bold px-4 text-center">
                  {solution.title}
                </span>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  {solution.description}
                </p>
                <div className="mb-2 text-sm font-medium text-gray-500">Industries:</div>
                <div className="flex flex-wrap gap-2">
                  {solution.industries.map((industry, i) => (
                    <Badge key={i} variant="secondary">
                      {industry}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;