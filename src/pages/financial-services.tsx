import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Building2, Shield, DollarSign, TrendingUp, 
  Landmark, CreditCard, Home, LineChart,
  CheckCircle, ArrowRight, Award, Users,
  Sparkles, Lock, Zap, Globe
} from "lucide-react";

const FinancialServicesPage = () => {
  const verticals = [
    {
      name: "Banking",
      icon: Landmark,
      description: "Transform retail and commercial banking with personalized digital experiences.",
      challenges: ["Digital onboarding", "Cross-selling", "Regulatory compliance", "Fraud prevention"],
      solutions: ["FSC Banking", "Einstein Analytics", "Compliance automation", "Secure messaging"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Insurance",
      icon: Shield,
      description: "Modernize policy management, claims processing, and agent collaboration.",
      challenges: ["Policy administration", "Claims automation", "Agent portals", "Risk assessment"],
      solutions: ["FSC Insurance", "Claims management", "Agent communities", "AI underwriting"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Wealth Management",
      icon: TrendingUp,
      description: "Deliver personalized investment advice and client portals.",
      challenges: ["Client 360", "Portfolio reporting", "Advisor collaboration", "Regulatory compliance"],
      solutions: ["FSC Wealth", "Client portals", "Advisor dashboards", "Compliance tracking"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      name: "Mortgage & Lending",
      icon: Home,
      description: "Streamline mortgage origination, processing, and servicing.",
      challenges: ["Application processing", "Document management", "Underwriting", "Closing coordination"],
      solutions: ["Lending cloud", "Digital applications", "Document automation", "Borrower portals"],
      color: "from-amber-500 to-orange-500"
    },
    {
      name: "Credit Cards",
      icon: CreditCard,
      description: "Drive card acquisition, usage, and loyalty with personalized offers.",
      challenges: ["Acquisition", "Usage optimization", "Fraud detection", "Rewards management"],
      solutions: ["Marketing cloud", "Einstein AI", "Fraud monitoring", "Loyalty programs"],
      color: "from-red-500 to-rose-500"
    },
    {
      name: "Asset Management",
      icon: LineChart,
      description: "Connect investment teams with institutional clients and advisors.",
      challenges: ["Investor reporting", "Fund administration", "Compliance", "Client portals"],
      solutions: ["FSC Asset Mgmt", "Investor portals", "Performance reporting", "Regulatory reporting"],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const useCases = [
    {
      title: "Digital Onboarding",
      description: "Reduce account opening time from days to minutes",
      impact: "80% faster onboarding",
      icon: Zap
    },
    {
      title: "Customer 360",
      description: "Unified view across banking, investments, and insurance",
      impact: "25% cross-sell increase",
      icon: Users
    },
    {
      title: "Regulatory Compliance",
      description: "Automated compliance monitoring and reporting",
      impact: "100% audit readiness",
      icon: Lock
    },
    {
      title: "AI-Powered Insights",
      description: "Personalized product recommendations and next-best actions",
      impact: "35% engagement lift",
      icon: Sparkles
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container-wide py-20 md:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                <Building2 className="w-4 h-4" />
                Financial Services
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Transform Financial Services with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">Salesforce</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8">
                Help banks, insurers, and wealth managers deliver personalized, compliant, and connected experiences.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 hover:bg-blue-50 rounded-xl font-medium transition-all"
                >
                  Schedule consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/FinancialServicesCaseStudyPage"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl font-medium transition-all border border-white/20"
                >
                  View case studies
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold mb-4">Financial Services Cloud Expertise</h3>
              <div className="space-y-4">
                {[
                  "FSC Implementation & Optimization",
                  "Wealth Management Solutions",
                  "Insurance Policy Administration",
                  "Banking Digital Transformation",
                  "Regulatory Compliance Automation"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Verticals Grid */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Specialized Expertise Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Financial Verticals</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Deep domain knowledge in every segment of financial services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verticals.map((vertical, index) => {
              const Icon = vertical.icon;
              
              return (
                <motion.div
                  key={vertical.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${vertical.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{vertical.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{vertical.description}</p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-xs font-semibold uppercase text-gray-500 mb-2">Challenges</h4>
                      <div className="flex flex-wrap gap-1">
                        {vertical.challenges.map((c, i) => (
                          <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">{c}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase text-gray-500 mb-2">Solutions</h4>
                      <div className="flex flex-wrap gap-1">
                        {vertical.solutions.map((s, i) => (
                          <span key={i} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-md">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Transformative <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Use Cases</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Real solutions delivering measurable impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{useCase.description}</p>
                  <div className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {useCase.impact}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Enterprise-Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Security & Compliance</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Financial services demand the highest levels of security and regulatory compliance. I bring deep expertise in implementing Salesforce with enterprise-grade controls.
              </p>

              <div className="space-y-4">
                {[
                  "HIPAA & GDPR Compliance",
                  "SOC 1 & SOC 2 Controls",
                  "Field-Level Encryption",
                  "Audit Trail Implementation",
                  "Multi-Factor Authentication",
                  "Data Residency & Sovereignty"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Regulatory Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {["FINRA", "SEC", "FCA", "MAS", "BaFin", "AMF"].map((reg, i) => (
                  <div key={i} className="bg-white rounded-lg p-3 text-center shadow-sm">
                    <span className="font-semibold text-gray-900">{reg}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-900 text-white py-20">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to transform your financial institution?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you navigate regulatory complexity while delivering exceptional customer experiences.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 hover:bg-blue-50 font-medium rounded-full transition-all transform hover:scale-105"
          >
            Schedule a consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default FinancialServicesPage;