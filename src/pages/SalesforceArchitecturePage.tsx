import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Award, Briefcase, Clock, MapPin,
  CheckCircle, ArrowRight, Star, TrendingUp,
  Globe, Users, Building2, Phone,
  Mail, Calendar, Shield, Zap,
  Rocket, Target, Sparkles, Database,
  BarChart, Cloud, Server, Code,
  Layers, Cpu, GitBranch, Box,
  Network, Workflow, PieChart, HardDrive,
  ShoppingBag
} from "lucide-react";

const SalesforceArchitecture = () => {
  const expertiseAreas = [
    {
      title: "Enterprise Solution Design",
      description: "End-to-end architecture for complex enterprise requirements",
      icon: Layers,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multi-Cloud Integration",
      description: "Seamless integration across Sales, Service, Marketing, and Experience Clouds",
      icon: Cloud,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Data Architecture",
      description: "Optimized data models for performance and scalability",
      icon: Database,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "System Integration",
      description: "Connect Salesforce with ERP, CRM, and legacy systems",
      icon: GitBranch,
      color: "from-amber-500 to-orange-500"
    }
  ];

  const caseStudies = [
    {
      client: "Global Financial Services Firm",
      challenge: "Legacy system unable to handle 10M+ daily transactions",
      solution: "Designed event-driven architecture with platform events and CDC",
      results: [
        "99.99% uptime achieved",
        "3x increase in transaction volume",
        "Real-time processing under 2 seconds"
      ],
      icon: BarChart
    },
    {
      client: "Fortune 500 Retailer",
      challenge: "Disconnected systems causing poor customer experience",
      solution: "Multi-cloud architecture unifying Sales, Service, and Commerce",
      results: [
        "Unified customer 360 view",
        "40% increase in cross-sell",
        "25% faster order processing"
      ],
      icon: ShoppingBag
    },
    {
      client: "Healthcare Technology Provider",
      challenge: "HIPAA compliance while scaling to 500k+ patients",
      solution: "Secure, compliant architecture with field-level encryption",
      results: [
        "100% HIPAA compliant",
        "Zero security incidents",
        "Scaled to 1M+ patients"
      ],
      icon: Shield
    }
  ];

  const architecturalPrinciples = [
    {
      principle: "Separation of Concerns",
      description: "Clear boundaries between presentation, business logic, and data layers"
    },
    {
      principle: "Scalability by Design",
      description: "Architectures that handle growth without refactoring"
    },
    {
      principle: "Security First",
      description: "Security built into every layer, not added as an afterthought"
    },
    {
      principle: "Maintainability",
      description: "Clean, documented, and testable code that teams can maintain"
    }
  ];

  const certifications = [
    "Certified Technical Architect (CTA)",
    "Application Architect",
    "System Architect",
    "Sales Cloud Consultant",
    "Service Cloud Consultant",
    "Experience Cloud Consultant"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 400">
            <defs>
              <pattern id="architecture" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect x="10" y="10" width="20" height="20" stroke="white" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#architecture)" />
          </svg>
        </div>

        <div className="container-wide py-20 md:py-28 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                <Layers className="w-4 h-4" />
                Salesforce Architecture
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Enterprise-Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Salesforce Architecture</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8">
                I design scalable, secure, and maintainable Salesforce architectures that grow with your business. From startups to Fortune 500 enterprises, I've architected solutions that stand the test of time.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 hover:bg-blue-50 rounded-xl font-medium transition-all"
                >
                  Discuss Your Architecture
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl font-medium transition-all border border-white/20"
                >
                  View Case Studies
                </Link>
              </div>

              <div className="flex gap-8 mt-8 pt-8 border-t border-white/20">
                <div>
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm text-blue-200">Enterprise Architectures</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-blue-200">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">CTA</div>
                  <div className="text-sm text-blue-200">Certified</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Architecture Expertise</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Deep technical knowledge across every layer of the Salesforce platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{area.title}</h3>
                  <p className="text-sm text-gray-600">{area.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architectural Principles */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Architectural Principles</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Every architecture I design follows these core principles to ensure long-term success.
              </p>

              <div className="space-y-6">
                {architecturalPrinciples.map((principle, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{principle.principle}</h3>
                      <p className="text-gray-600">{principle.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 bg-white rounded-lg">
                    <Award className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Architecture Success</span>
            </h2>
            <p className="text-gray-600 text-lg">
              How I've helped enterprises solve complex architectural challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">{study.client}</h3>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-xs font-semibold text-red-600 uppercase mb-1">Challenge</h4>
                      <p className="text-sm text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-green-600 uppercase mb-1">Solution</h4>
                      <p className="text-sm text-gray-600">{study.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-0.5" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Architecture Approach</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                phase: "Discovery",
                description: "I deeply understand your business goals, technical constraints, and user needs",
                activities: ["Stakeholder interviews", "System audit", "Requirements analysis"]
              },
              {
                phase: "Design",
                description: "I create a future-state architecture that balances innovation with pragmatism",
                activities: ["Solution blueprint", "Data modeling", "Integration design"]
              },
              {
                phase: "Implementation",
                description: "I guide your team through build, ensuring architectural integrity",
                activities: ["Code reviews", "Performance testing", "Governance"]
              },
              {
                phase: "Evolution",
                description: "I help you continuously improve and scale your architecture",
                activities: ["Ongoing advisory", "Tech debt management", "Innovation roadmap"]
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.phase}</h3>
                <p className="text-sm text-gray-600 mb-4">{phase.description}</p>
                <ul className="space-y-1">
                  {phase.activities.map((activity, i) => (
                    <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500 mt-0.5" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-800 to-purple-800 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to architect your Salesforce future?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your architectural challenges and how I can help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 hover:bg-blue-50 font-medium rounded-full transition-all transform hover:scale-105"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SalesforceArchitecture;