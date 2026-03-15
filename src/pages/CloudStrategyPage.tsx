import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Award, Briefcase, Clock, MapPin,
  CheckCircle, ArrowRight, Star, TrendingUp,
  Globe, Users, Building2, Phone,
  Mail, Calendar, Shield, Zap,
  Rocket, Target, Sparkles, Cloud,
  Layers, GitBranch, Cpu, Database,
  BarChart, PieChart, Workflow, Compass
} from "lucide-react";

const CloudStrategy = () => {
  const expertiseAreas = [
    {
      title: "Multi-Cloud Strategy",
      description: "Optimize your use of Sales, Service, Marketing, and Experience Clouds",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end roadmap for enterprise digital evolution",
      icon: Rocket,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Org Consolidation",
      description: "Rationalize multiple orgs into efficient, unified platforms",
      icon: Layers,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Technology Roadmap",
      description: "Strategic planning for future-proof Salesforce investments",
      icon: Compass,
      color: "from-amber-500 to-orange-500"
    }
  ];

  const strategyPhases = [
    {
      phase: "Assessment",
      description: "Evaluate current state, identify gaps and opportunities",
      deliverables: ["Current state analysis", "Maturity assessment", "Quick win identification"]
    },
    {
      phase: "Strategy",
      description: "Define target architecture and transformation roadmap",
      deliverables: ["Target state blueprint", "Migration roadmap", "Investment prioritization"]
    },
    {
      phase: "Execution",
      description: "Guide implementation while maintaining strategic alignment",
      deliverables: ["Governance framework", "Implementation oversight", "Risk management"]
    },
    {
      phase: "Evolution",
      description: "Continuous improvement and innovation planning",
      deliverables: ["Innovation roadmap", "Emerging tech assessment", "Ongoing advisory"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-800 via-blue-700 to-cyan-700 text-white overflow-hidden">
        <div className="container-wide py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Cloud className="w-4 h-4" />
              Cloud Strategy
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">Cloud Transformation</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8">
              I help enterprises define and execute cloud strategies that maximize ROI, minimize risk, and position you for future growth.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 hover:bg-blue-50 rounded-xl font-medium transition-all"
            >
              Define Your Cloud Strategy
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
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

      {/* Strategy Phases */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Strategic Framework</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategyPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.phase}</h3>
                <p className="text-sm text-gray-600 mb-4">{phase.description}</p>
                <ul className="space-y-1">
                  {phase.deliverables.map((item, i) => (
                    <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-800 to-cyan-800 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to define your cloud strategy?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's build a roadmap for your Salesforce future.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 hover:bg-blue-50 font-medium rounded-full transition-all transform hover:scale-105"
            >
              Start the Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CloudStrategy;