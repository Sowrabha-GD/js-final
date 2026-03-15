import { Link } from "react-router-dom";
import { ArrowRight, Award } from "lucide-react";
import heroImage from "../assets/hero-photo.png";

const HeroSection = () => {
  return (
    <section className="relative bg-[#0A1929] text-white min-h-screen flex items-center">
      <div className="container-wide py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text */}
          <div>
            <span className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Salesforce Certified Technical Architect
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4">
              Jeet Singh
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-blue-400 mb-6">
              Enterprise Salesforce Architect
            </h2>

            <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              15+ years helping Fortune 500 companies and startups build scalable, 
              well-architected Salesforce solutions across Sales Cloud, Service Cloud, 
              CPQ, and enterprise integrations.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
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

            <div className="flex gap-8 pt-6 border-t border-white/10">
              <div>
                <div className="text-2xl font-bold text-blue-400">15+</div>
                <div className="text-sm text-gray-400">Years</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">50+</div>
                <div className="text-sm text-gray-400">Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink-400">CTA</div>
                <div className="text-sm text-gray-400">Certified</div>
              </div>
            </div>
          </div>

          {/* Right Column - Full Image */}
          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={heroImage} 
              alt="Jeet Singh"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929]/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;