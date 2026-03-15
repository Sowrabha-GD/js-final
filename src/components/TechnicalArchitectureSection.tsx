import { Link } from "react-router-dom";
import { 
  Database, GitBranch, Shield, Code, 
  RefreshCw, BarChart, ArrowRight, AlertTriangle,
  Cpu, Network, Lock, FileCode,
  CheckCircle  // ← ADD THIS MISSING IMPORT
} from "lucide-react";


const TechnicalArchitectureSection = () => {
  const architectureAreas = [
    {
      title: "Large Data Volumes",
      icon: Database,
      description: "Strategies for handling millions of records with optimal performance.",
      challenges: ["Skewed data", "Indexing strategies", "Batch processing", "Archiving"],
      solutions: ["Big Objects", "Skinny tables", "Custom indexes", "Data partitioning"],
      color: "from-blue-600 to-indigo-600",
      level: "Advanced",
      link: "/LargeDataVolumesPage"
    },
    {
      title: "Org Restructuring",
      icon: RefreshCw,
      description: "Reconsolidation, splitting, and migration strategies for complex orgs.",
      challenges: ["Org mergers", "Data migration", "Business continuity", "User adoption"],
      solutions: ["Org strategy", "Migration tools", "Phased approach", "Governance"],
      color: "from-emerald-600 to-teal-600",
      level: "Expert",
      link: "/OrgRestructuringPage"
    },
    {
      title: "Integration Architecture",
      icon: Network,
      description: "Connect Salesforce with enterprise systems securely and reliably.",
      challenges: ["Real-time sync", "Legacy systems", "API management", "Error handling"],
      solutions: ["MuleSoft", "Platform events", "Composite APIs", "Change data capture"],
      color: "from-purple-600 to-pink-600",
      level: "Advanced",
      link: "/IntegrationArchitecturePage"
    },
    {
      title: "Security & Vulnerabilities",
      icon: Shield,
      description: "Enterprise-grade security, compliance, and vulnerability management.",
      challenges: ["Shield implementation", "Field-level security", "Audit trails", "Pen testing"],
      solutions: ["Encryption", "MFA strategies", "Event monitoring", "Security review"],
      color: "from-red-600 to-rose-600",
      level: "Critical",
      link: "/SecurityPage"
    },
    {
      title: "Apex Design Patterns",
      icon: FileCode,
      description: "Clean, maintainable, and scalable Apex code architecture.",
      challenges: ["Governor limits", "Test coverage", "Code reuse", "Maintainability"],
      solutions: ["Domain patterns", "Selector layer", "Service layer", "Trigger frameworks"],
      color: "from-amber-600 to-orange-600",
      level: "Expert",
      link: "/ApexDesignPatternsPage"
    }
  ];

  return (
    <section className="bg-white">
      <div className="container-wide section-padding">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Cpu className="w-4 h-4" />
            <span>Technical Architecture</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Deep technical expertise for <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">complex challenges</span>
          </h2>
          <p className="text-gray-600 text-lg">
            When standard approaches aren't enough, I bring battle-tested architectural patterns for enterprise scale.
          </p>
        </div>

        {/* Architecture Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {architectureAreas.map((area, index) => {
            const Icon = area.icon;
            
            return (
              <Link
                key={index}
                to={area.link}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white p-6 border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-br ${area.color} rounded-xl shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-white border ${
                    area.level === 'Critical' ? 'text-red-600 border-red-200' :
                    area.level === 'Expert' ? 'text-purple-600 border-purple-200' :
                    'text-blue-600 border-blue-200'
                  }`}>
                    {area.level}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{area.description}</p>

                {/* Challenges & Solutions */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <h4 className="text-xs font-semibold uppercase text-gray-500 mb-2">Challenges</h4>
                    <ul className="space-y-1">
                      {area.challenges.slice(0, 2).map((item, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-center gap-1">
                          <AlertTriangle className={`w-3 h-3 ${
                            area.color.includes('red') ? 'text-red-500' :
                            area.color.includes('purple') ? 'text-purple-500' :
                            'text-blue-500'
                          }`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase text-gray-500 mb-2">Solutions</h4>
                    <ul className="space-y-1">
                      {area.solutions.slice(0, 2).map((item, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-center gap-1">
                          <CheckCircle className={`w-3 h-3 ${
                            area.color.includes('red') ? 'text-red-500' :
                            area.color.includes('purple') ? 'text-purple-500' :
                            'text-blue-500'
                          }`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Link */}
                <div className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                  Read architecture guide
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Complexity Meter */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
                  <div className={`h-full w-${index % 3 === 0 ? '3/4' : index % 3 === 1 ? 'full' : '1/2'} bg-gradient-to-r ${area.color} opacity-50`}></div>
                </div>
              </Link>
            );
          })}

          {/* Special Assessment Card */}
          <div className="lg:col-span-3 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/api/placeholder/1200/200')] opacity-10"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-red-400" />
                  Need an architectural review?
                </h3>
                <p className="text-gray-300 max-w-2xl">
                  I help CTOs and architecture teams assess their Salesforce org, identify risks, and create a roadmap for technical excellence.
                </p>
              </div>
              <Link 
                to="/ArchitectureChecklistFormPage"
                className="flex-shrink-0 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-medium rounded-xl transition-colors inline-flex items-center gap-2 group"
              >
                Request architecture review
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalArchitectureSection;