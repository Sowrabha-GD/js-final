import { Link } from "react-router-dom";
import { Briefcase, Code, Target, TrendingUp, ArrowRight, Users, Award, BookOpen } from "lucide-react";

const CareersPage = () => {
  const careerPaths = [
    {
      title: "Salesforce Consultant",
      icon: Briefcase,
      description: "Bridge business and technology. Lead discovery, design solutions, and guide clients through their Salesforce journey.",
      color: "blue",
      link: "/careers/consultant",
      salary: "$100k - $140k",
      demand: "High",
      skills: ["Business Analysis", "Solution Design", "Stakeholder Management"]
    },
    {
      title: "Technical Architect",
      icon: Code,
      description: "Design complex, scalable solutions. Own technical strategy, governance, and ensure enterprise best practices.",
      color: "purple",
      link: "/careers/technical-architect",
      salary: "$150k - $200k+",
      demand: "Very High",
      skills: ["System Architecture", "Integration Design", "Security Patterns"]
    },
    {
      title: "Solution Architect",
      icon: Target,
      description: "Translate business needs into architectural vision. Bridge strategy with technical execution.",
      color: "emerald",
      link: "/careers/solution-architect",
      salary: "$140k - $180k",
      demand: "High",
      skills: ["Solution Design", "Technical Leadership", "Pre-sales"]
    },
    {
      title: "Salesforce Developer",
      icon: TrendingUp,
      description: "Build custom solutions, integrations, and applications. Master Apex, LWC, and modern development.",
      color: "orange",
      link: "/careers/developer",
      salary: "$90k - $130k",
      demand: "Very High",
      skills: ["Apex", "LWC", "Integration", "DevOps"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, any> = {
      blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", gradient: "from-blue-600 to-blue-700" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", gradient: "from-purple-600 to-purple-700" },
      emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200", gradient: "from-emerald-600 to-emerald-700" },
      orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", gradient: "from-orange-600 to-orange-700" }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white pt-20 pb-16">
        <div className="container-wide text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Users className="w-4 h-4" />
            <span>Mentorship & Career Growth</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 max-w-3xl mx-auto">
            Your Salesforce Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Starts Here</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're starting out or aiming for CTA, follow these roadmaps to accelerate your journey.
          </p>
        </div>
      </section>

      {/* Career Cards Grid */}
      <section className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {careerPaths.map((path, index) => {
            const Icon = path.icon;
            const colors = getColorClasses(path.color);
            
            return (
              <Link
                key={index}
                to={path.link}
                className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 ${colors.bg} rounded-xl`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-2xl font-bold text-gray-900">{path.title}</h2>
                      <span className={`text-xs font-semibold ${
                        path.demand === "Very High" ? "text-green-600 bg-green-50" : "text-blue-600 bg-blue-50"
                      } px-2 py-1 rounded-full`}>
                        {path.demand}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{path.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-6">
                  {path.skills.map((skill, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-center">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">{path.salary}</span>
                  <span className={`inline-flex items-center gap-1 ${colors.text} group-hover:gap-2 transition-all`}>
                    View Roadmap
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Mentorship CTA */}
      <section className="container-wide pb-16">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-display font-bold mb-4">Not sure where to start?</h2>
              <p className="text-gray-300 text-lg max-w-xl">
                Book a 1:1 mentorship session with Jeet to get personalized guidance for your career path.
              </p>
            </div>
            <Link
              to="/mentorship"
              className="flex-shrink-0 px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 font-medium rounded-xl transition-colors inline-flex items-center gap-2 group"
            >
              Schedule mentorship call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;