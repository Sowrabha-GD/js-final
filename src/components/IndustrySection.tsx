import { Link } from "react-router-dom";
import { 
  Building2, Car, Plane, Heart, ArrowRight, 
  Briefcase, TrendingUp, Users, Shield 
} from "lucide-react";

const IndustryVerticalsSection = () => {
  const industries = [
    {
      name: "Financial Services",
      icon: Building2,
      description: "Transform banking, wealth management, and insurance with compliant, scalable Salesforce solutions.",
      challenges: ["Regulatory compliance", "Data security", "Customer 360 view", "Digital onboarding"],
      solutions: ["FSC implementation", "Wealth management", "Compliance automation", "Secure portals"],
      color: "from-blue-600 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-600",
      link: "/industries/financial-services",
      stats: "15+ financial clients"
    },
    {
      name: "Automotive",
      icon: Car,
      description: "Connect manufacturers, dealers, and customers for seamless vehicle sales and service experiences.",
      challenges: ["Dealer network mgmt", "Vehicle personalization", "Service scheduling", "Loyalty programs"],
      solutions: ["Dealer portals", "Connected customer", "Service cloud", "Marketing automation"],
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200",
      textColor: "text-emerald-600",
      link: "/industries/automotive",
      stats: "8 automotive brands"
    },
    {
      name: "Travel & Hospitality",
      icon: Plane,
      description: "Create memorable guest experiences from booking to check-out with personalized service.",
      challenges: ["Guest 360", "Loyalty integration", "Multi-channel service", "Real-time offers"],
      solutions: ["Guest communities", "Loyalty cloud", "Service cloud", "Marketing cloud"],
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-600",
      link: "/industries/travel-hospitality",
      stats: "12+ hospitality clients"
    },
    {
      name: "Healthcare & Life Sciences",
      icon: Heart,
      description: "Secure, compliant patient engagement and provider coordination solutions.",
      challenges: ["HIPAA compliance", "Patient engagement", "Provider networks", "Care coordination"],
      solutions: ["Health cloud", "Patient portals", "Secure messaging", "Care plans"],
      color: "from-rose-600 to-red-600",
      bgColor: "from-rose-50 to-red-50",
      borderColor: "border-rose-200",
      textColor: "text-rose-600",
      link: "/industries/healthcare",
      stats: "10+ healthcare orgs"
    }
  ];

  return (
    <section className="bg-white">
      <div className="container-wide section-padding">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 px-4 py-2 rounded-full">
            Industry Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-6 mb-4">
            Deep domain expertise across <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">key industries</span>
          </h2>
          <p className="text-gray-600 text-lg">
            I help companies in regulated and complex industries transform their customer experiences with Salesforce.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            
            return (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br p-8 border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                style={{
                  background: `linear-gradient(135deg, ${industry.bgColor.split(' ')[0].replace('from-', '')} 0%, ${industry.bgColor.split(' ')[1].replace('to-', '')} 100%)`,
                  borderColor: industry.borderColor
                }}
              >
                {/* Decorative Elements */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${industry.color} opacity-5 rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-700`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 bg-gradient-to-br ${industry.color} rounded-2xl shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <span className={`text-sm font-semibold ${industry.textColor} bg-white px-3 py-1 rounded-full shadow-sm`}>
                      {industry.stats}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                  <p className="text-gray-600 mb-6">{industry.description}</p>

                  {/* Challenges & Solutions Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Challenges</h4>
                      <ul className="space-y-1">
                        {industry.challenges.map((item, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                            <span className={`w-1 h-1 rounded-full bg-gradient-to-r ${industry.color}`}></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Solutions</h4>
                      <ul className="space-y-1">
                        {industry.solutions.map((item, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                            <span className={`w-1 h-1 rounded-full bg-gradient-to-r ${industry.color}`}></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link 
                    to={industry.link}
                    className={`inline-flex items-center gap-2 text-sm font-semibold ${industry.textColor} hover:gap-3 transition-all`}
                  >
                    Learn how we transform {industry.name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link 
            to="/industries"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl transition-all group"
          >
            Explore all industries
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustryVerticalsSection;