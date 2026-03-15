import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Award, Briefcase, Clock, MapPin,
  CheckCircle, ArrowRight, Star, TrendingUp,
  Globe, Users, Building2, Phone,
  Mail, Calendar, Shield, Zap,
  Rocket, Target, Sparkles, Code,
  Cpu, GitBranch, Box, Layers,
  FileText, Terminal, Braces, Workflow,
  Repeat, RefreshCw, Database
} from "lucide-react";

const DevelopmentExcellence = () => {
  const expertiseAreas = [
    {
      title: "Apex Design Patterns",
      description: "Domain, Selector, Service, and Trigger patterns for maintainable code",
      icon: Braces,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Lightning Web Components",
      description: "Modern, responsive UI components with best practices",
      icon: Code,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Testing Strategy",
      description: "Comprehensive unit, integration, and E2E testing",
      icon: CheckCircle,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "DevOps & CI/CD",
      description: "Automated deployments, version control, and release management",
      icon: GitBranch,
      color: "from-amber-500 to-orange-500"
    }
  ];

  const designPatterns = [
    {
      name: "Domain Layer",
      description: "Encapsulate business logic in reusable domain classes",
      benefit: "Business logic in one place, easy to test"
    },
    {
      name: "Selector Layer",
      description: "Centralize SOQL queries with consistent filtering",
      benefit: "No SOQL in business logic, query optimization"
    },
    {
      name: "Service Layer",
      description: "Orchestrate complex operations",
      benefit: "Clear entry points, transaction management"
    },
    {
      name: "Trigger Handler",
      description: "Framework for organized trigger logic",
      benefit: "One trigger per object, clear execution order"
    }
  ];

  const bestPractices = [
    {
      area: "Governor Limits",
      practices: ["Bulkification", "Query optimization", "Collections usage"]
    },
    {
      area: "Security",
      practices: ["CRUD/FLS checks", "SOQL injection prevention", "Secure sharing"]
    },
    {
      area: "Performance",
      practices: ["Caching strategies", "Async processing", "Selective queries"]
    },
    {
      area: "Maintainability",
      practices: ["Code documentation", "Consistent naming", "Modular design"]
    }
  ];

  const caseStudies = [
    {
      client: "Fast-Growing SaaS Company",
      challenge: "Spaghetti code with 2,000-line triggers and no test coverage",
      solution: "Refactored to Domain/Selector/Service pattern",
      results: [
        "Test coverage from 30% to 92%",
        "Deployment time reduced by 70%",
        "New features delivered 2x faster"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-800 via-green-700 to-teal-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="code" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <text x="5" y="20" fontSize="12" fill="white">{'<>'}</text>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#code)" />
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
                <Code className="w-4 h-4" />
                Development Excellence
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Clean, Maintainable, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-200">Scalable Code</span>
              </h1>
              
              <p className="text-xl text-emerald-100 mb-8">
                I transform spaghetti code into clean, testable architectures. Using proven design patterns, I help development teams ship faster with fewer bugs.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-900 hover:bg-emerald-50 rounded-xl font-medium transition-all"
              >
                Discuss Your Codebase
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Patterns */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Essential <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Design Patterns</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {designPatterns.map((pattern, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{pattern.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{pattern.description}</p>
                <p className="text-xs text-green-600 font-medium">{pattern.benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8">
            {bestPractices.map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{practice.area}</h3>
                <ul className="space-y-2">
                  {practice.practices.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-800 to-teal-800 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to elevate your code quality?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Let's review your codebase and build a roadmap to development excellence.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-900 hover:bg-emerald-50 font-medium rounded-full transition-all transform hover:scale-105"
            >
              Schedule a Code Review
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default DevelopmentExcellence;