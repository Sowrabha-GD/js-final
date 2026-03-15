import { Link } from "react-router-dom";
import { Award, Star, Users, Globe, ChevronRight } from "lucide-react";

const AuthorityLogosSection = () => {
  return (
    <section className="bg-white">
      <div className="container-wide section-padding">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 px-4 py-2 rounded-full">
            Trusted Authority
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-6 mb-4">
            Featured in leading publications
          </h2>
          <p className="text-gray-600 text-lg">
            Recognized as a thought leader in Salesforce architecture and enterprise solutions
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-16">
          {[
            { name: "Forbes", color: "text-gray-800" },
            { name: "TechCrunch", color: "text-gray-800" },
            { name: "VentureBeat", color: "text-gray-800" },
            { name: "CIO Review", color: "text-gray-800" }
          ].map((logo, i) => (
            <div key={i} className="opacity-60 hover:opacity-100 transition-opacity duration-300">
              <span className={`text-2xl font-bold ${logo.color}`}>{logo.name}</span>
            </div>
          ))}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Users, value: "10K+", label: "Students Trained", color: "blue" },
            { icon: Award, value: "15+", label: "Years Experience", color: "emerald" },
            { icon: Globe, value: "50+", label: "Enterprise Clients", color: "purple" }
          ].map((stat, i) => {
            const Icon = stat.icon;
            const colorClasses = {
              blue: "from-blue-500 to-blue-600 text-blue-50 bg-blue-500",
              emerald: "from-emerald-500 to-emerald-600 text-emerald-50 bg-emerald-500",
              purple: "from-purple-500 to-purple-600 text-purple-50 bg-purple-500"
            };
            
            return (
              <div key={i} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colorClasses[stat.color]} opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700`}></div>
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${colorClasses[stat.color]} bg-opacity-10 mb-4`}>
                    <Icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AuthorityLogosSection;