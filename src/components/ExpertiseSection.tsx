import { Link } from "react-router-dom";
import { 
  Database, Cloud, Shield, Code, GitBranch, Users, 
  ArrowRight, CheckCircle, Star 
} from "lucide-react";

const ExpertiseAuthoritySection = () => {
  const expertiseAreas = [
    {
      icon: Database,
      title: "Salesforce Architecture",
      description: "Enterprise-scale system design, data modeling, and integration patterns",
      competencies: ["Multi-tenant Strategy", "Data Architecture", "Integration Patterns", "Governance"],
      level: "Expert",
      color: "blue",
      link: "/SalesforceArchitecturePage"
    },
    {
      icon: Cloud,
      title: "Cloud Strategy",
      description: "Multi-cloud implementations and digital transformation leadership",
      competencies: ["Migration Strategy", "Hybrid Cloud", "Microservices", "API Design"],
      level: "Expert",
      color: "emerald",
      link: "/CloudStrategyPage"

    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise security frameworks and regulatory compliance",
      competencies: ["Shield Platform", "GDPR/CCPA", "Field Audit Trail", "Encryption"],
      level: "Advanced",
      color: "purple",
      link: "/SecurityCompliancePage"
    },
    {
      icon: Code,
      title: "Development Excellence",
      description: "Clean code, design patterns, and engineering best practices",
      competencies: ["Apex Design Patterns", "LWC Architecture", "Testing Strategy", "CI/CD"],
      level: "Expert",
      color: "amber",
      link: "/DevelopmentExcellencePage"
    }
  ];

  const colorMap = {
    blue: {
      bg: "from-blue-50 to-blue-100/50",
      border: "border-blue-200",
      iconBg: "from-blue-500 to-blue-600",
      badge: "bg-blue-100 text-blue-700",
      dot: "bg-blue-500"
    },
    emerald: {
      bg: "from-emerald-50 to-emerald-100/50",
      border: "border-emerald-200",
      iconBg: "from-emerald-500 to-emerald-600",
      badge: "bg-emerald-100 text-emerald-700",
      dot: "bg-emerald-500"
    },
    purple: {
      bg: "from-purple-50 to-purple-100/50",
      border: "border-purple-200",
      iconBg: "from-purple-500 to-purple-600",
      badge: "bg-purple-100 text-purple-700",
      dot: "bg-purple-500"
    },
    amber: {
      bg: "from-amber-50 to-amber-100/50",
      border: "border-amber-200",
      iconBg: "from-amber-500 to-amber-600",
      badge: "bg-amber-100 text-amber-700",
      dot: "bg-amber-500"
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      <div className="container-wide section-padding">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">
              <Star className="w-4 h-4 fill-blue-600" />
              <span>Areas of Expertise</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Deep technical authority across the Salesforce ecosystem
            </h2>
            <p className="text-gray-600 text-lg">
              Recognized as a leading voice in enterprise architecture with proven experience in complex implementations.
            </p>
          </div>
          
          <Link 
            to="/expertise" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mt-4 lg:mt-0 group"
          >
            <span className="font-medium">View all expertise</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            const colors = colorMap[area.color as keyof typeof colorMap];
            
            return (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br p-8 border transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                style={{
                  background: `linear-gradient(135deg, ${colors.bg.split(' ')[0].replace('from-', '')} 0%, ${colors.bg.split(' ')[1].replace('to-', '')} 100%)`,
                  borderColor: colors.border
                }}
              >
                {/* Decorative elements */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${colors.iconBg} opacity-5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-700`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 bg-gradient-to-br ${colors.iconBg} rounded-xl shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colors.badge}`}>
                      {area.level}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{area.description}</p>

                  {/* Competencies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {area.competencies.map((comp, i) => (
                      <span key={i} className="text-xs text-gray-600 bg-white/80 px-2 py-1 rounded-md border border-gray-200">
                        {comp}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                    <Link 
                    to={area.link}
                    className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors group/link"
                  >
                    Learn more

                    <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform"/>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseAuthoritySection;