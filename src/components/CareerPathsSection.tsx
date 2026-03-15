import { Link } from "react-router-dom";
import { 
  ArrowRight, TrendingUp, Briefcase, Code, 
  Users, Target, Award, BookOpen, Star
} from "lucide-react";

const CareerPathsSection = () => {
  const careerPaths = [
    {
      title: "Salesforce Consultant",
      icon: Briefcase,
      description: "Bridge business requirements with technical solutions. Lead discovery, design, and delivery.",
      skills: ["Business analysis", "Solution design", "Stakeholder management", "Process mapping"],
      certifications: ["Salesforce Consultant", "Business Analyst", "Sales Cloud"],
      salary: "$100k - $140k",
      demand: "High",
      color: "from-blue-500 to-cyan-500",
      bgLight: "bg-blue-50",
      textColor: "text-blue-600",
      link: "/careers/consultant"
    },
    {
      title: "Technical Architect",
      icon: Code,
      description: "Design complex, scalable solutions. Own technical strategy and governance.",
      skills: ["System architecture", "Integration design", "Security patterns", "Performance tuning"],
      certifications: ["Application Architect", "System Architect", "CTA Track"],
      salary: "$150k - $200k+",
      demand: "Very High",
      color: "from-purple-500 to-pink-500",
      bgLight: "bg-purple-50",
      textColor: "text-purple-600",
      link: "/careers/technical-architect"
    },
    {
      title: "Solution Architect",
      icon: Target,
      description: "Translate business needs into architectural vision. Guide implementation teams.",
      skills: ["Solution design", "Estimation & planning", "Technical leadership", "Pre-sales"],
      certifications: ["Application Architect", "Sales Cloud", "Service Cloud"],
      salary: "$140k - $180k",
      demand: "High",
      color: "from-emerald-500 to-teal-500",
      bgLight: "bg-emerald-50",
      textColor: "text-emerald-600",
      link: "/careers/solution-architect"
    },
    {
      title: "Salesforce Developer",
      icon: TrendingUp,
      description: "Build custom solutions, integrations, and applications on the platform.",
      skills: ["Apex", "LWC", "Integration", "DevOps"],
      certifications: ["Platform Developer I & II", "JavaScript Developer"],
      salary: "$90k - $130k",
      demand: "Very High",
      color: "from-orange-500 to-red-500",
      bgLight: "bg-orange-50",
      textColor: "text-orange-600",
      link: "/careers/developer"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      <div className="container-wide section-padding">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Users className="w-4 h-4" />
              <span>Mentorship & Career Growth</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Your path to becoming a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Salesforce leader</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Whether you're starting out or aiming for CTA, I guide professionals through every stage of their Salesforce career.
            </p>
          </div>
          
          <Link 
            to="/FreeResourcesMasterPage"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mt-4 lg:mt-0 group"
          >
            <span className="font-medium">Explore Architecture Resources </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Career Cards - FIXED: Now entire card is clickable */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careerPaths.map((path, index) => {
            const Icon = path.icon;
            
            return (
              <Link
                key={index}
                to={path.link}
                className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden block"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${path.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`inline-flex p-3 ${path.bgLight} rounded-xl mb-4`}>
                  <Icon className={`w-6 h-6 ${path.textColor}`} />
                </div>

                {/* Title & Demand */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{path.title}</h3>
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    {path.demand}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-4">{path.description}</p>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold uppercase text-gray-500 mb-2">Key Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {path.skills.map((skill, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certifications & Salary */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Award className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-500">{path.certifications.length}+ certs</span>
                  </div>
                  <span className="text-sm font-bold text-gray-900">{path.salary}</span>
                </div>

                {/* Link indicator - This is now just visual, not the only clickable area */}
                <div className={`inline-flex items-center gap-1 text-sm font-medium ${path.textColor} group-hover:gap-2 transition-all`}>
                  View career roadmap
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Success Stats - unchanged */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "50+", label: "Mentored to architect roles", icon: Star },
            { number: "200+", label: "Career coaching sessions", icon: Users },
            { number: "85%", label: "Promotion rate within 1 year", icon: TrendingUp },
            { number: "15+", label: "CTAs mentored", icon: Award }
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="text-center">
                <Icon className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Free Resources - unchanged */}
        <div className="mt-12 p-8 bg-white rounded-2xl border border-gray-200">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <BookOpen className="w-12 h-12 text-purple-600" />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free career resources</h3>
              <p className="text-gray-600">Download my Salesforce career guides, resume templates, and interview prep checklists.</p>
            </div>
            <Link 
              to="/FreeResourcesMasterPage"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl transition-colors"
            >
              Get free resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPathsSection;