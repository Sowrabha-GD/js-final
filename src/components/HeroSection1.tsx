import { Link } from "react-router-dom";
import { ArrowRight, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-[#0A1929] text-white">
      <div className="container-wide py-20 md:py-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Salesforce Certified Technical Architect
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            Jeet Singh
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Enterprise Salesforce Architect
          </h2>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl">
            Helping Fortune 500 companies and startups build scalable, well-architected 
            Salesforce solutions. 15+ years of experience across Sales Cloud, Service Cloud, 
            CPQ, and enterprise integrations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/advisory"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-medium transition-colors"
            >
              Work with me
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-medium transition-colors"
            >
              Read insights
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
            <div>
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-sm text-gray-400">Years</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-gray-400">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">CTA</div>
              <div className="text-sm text-gray-400">Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;