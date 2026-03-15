import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Award, Briefcase, Clock, MapPin,
  CheckCircle, ArrowRight, Star, TrendingUp,
  Globe, Users, Building2, Phone,
  Mail, Calendar, Shield, Zap,
  Rocket, Target, Sparkles, Lock,
  Eye, Key, Fingerprint, FileText,
  AlertTriangle, Ban, Server, Cloud,
  HardDrive, Wifi, Smartphone
} from "lucide-react";

const SecurityCompliance = () => {
  const expertiseAreas = [
    {
      title: "Shield Platform",
      description: "Platform Encryption, Field Audit Trail, and Event Monitoring",
      icon: Shield,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Identity & Access",
      description: "MFA, SSO, and sophisticated permission models",
      icon: Fingerprint,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Data Protection",
      description: "Field-level security, encryption, and data classification",
      icon: Lock,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Compliance Frameworks",
      description: "HIPAA, GDPR, SOC2, FINRA, and more",
      icon: FileText,
      color: "from-amber-500 to-orange-500"
    }
  ];

  const complianceFrameworks = [
    { name: "HIPAA", description: "Healthcare data protection", level: "Expert" },
    { name: "GDPR", description: "European data privacy", level: "Expert" },
    { name: "SOC 2", description: "Enterprise security controls", level: "Expert" },
    { name: "FINRA", description: "Financial industry compliance", level: "Advanced" },
    { name: "CCPA", description: "California privacy rights", level: "Advanced" },
    { name: "ISO 27001", description: "Information security standard", level: "Expert" },
    { name: "PCI DSS", description: "Payment card security", level: "Advanced" },
    { name: "FedRAMP", description: "US government security", level: "Advanced" }
  ];

  const threatVectors = [
    {
      threat: "Data Exposure",
      risk: "High",
      mitigation: "Field-level encryption, strict sharing rules, regular audits"
    },
    {
      threat: "Injection Attacks",
      risk: "Critical",
      mitigation: "Parameterized queries, input validation, secure coding practices"
    },
    {
      threat: "Authentication Weaknesses",
      risk: "High",
      mitigation: "MFA enforcement, session management, SSO integration"
    },
    {
      threat: "Privilege Escalation",
      risk: "Critical",
      mitigation: "Principle of least privilege, regular permission reviews"
    }
  ];

  const caseStudies = [
    {
      client: "Healthcare Technology Company",
      challenge: "HIPAA audit revealed multiple PHI exposure risks",
      solution: "Implemented Shield Platform Encryption and Field Audit Trail",
      results: [
        "100% HIPAA compliance achieved",
        "Zero security incidents in 2 years",
        "Passed subsequent audits with no findings"
      ],
      icon: Shield
    },
    {
      client: "Global Financial Services Firm",
      challenge: "Required FINRA-compliant audit trail for all data access",
      solution: "Event Monitoring and custom audit framework",
      results: [
        "Complete visibility into all data access",
        "Automated compliance reporting",
        "Reduced audit preparation time by 80%"
      ],
      icon: Eye
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-rose-800 to-orange-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 400">
            <defs>
              <pattern id="shield" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M20 5 L35 15 L35 30 L20 40 L5 30 L5 15 L20 5" stroke="white" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#shield)" />
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
                <Shield className="w-4 h-4" />
                Security & Compliance
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-200 to-orange-200">Hardening</span> Your Salesforce Org
              </h1>
              
              <p className="text-xl text-red-100 mb-8">
                I help enterprises identify and remediate security vulnerabilities before they become breaches. From HIPAA to SOC2 - I make Salesforce enterprise-secure.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-red-900 hover:bg-red-50 rounded-xl font-medium transition-all"
                >
                  Schedule a Security Audit
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex gap-8 mt-8 pt-8 border-t border-white/20">
                <div>
                  <div className="text-2xl font-bold">30+</div>
                  <div className="text-sm text-red-200">Security Assessments</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm text-red-200">Compliance Success</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">Zero</div>
                  <div className="text-sm text-red-200">Breaches</div>
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
              Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Expertise</span>
            </h2>
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

      {/* Threat Vectors */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Threat Vectors</span> I Protect Against
              </h2>

              <div className="space-y-4">
                {threatVectors.map((threat, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-gray-900">{threat.threat}</h3>
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                        threat.risk === 'Critical' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {threat.risk}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{threat.mitigation}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance Ready</h3>
              <div className="grid grid-cols-2 gap-3">
                {complianceFrameworks.map((framework, index) => (
                  <div key={index} className="bg-white rounded-lg p-3">
                    <div className="font-semibold text-gray-900">{framework.name}</div>
                    <div className="text-xs text-gray-500 mb-1">{framework.description}</div>
                    <span className="text-xs font-medium text-green-600">{framework.level}</span>
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
              Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Success Stories</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">{study.client}</h3>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <p className="text-sm text-gray-600"><span className="font-semibold">Challenge:</span> {study.challenge}</p>
                    <p className="text-sm text-gray-600"><span className="font-semibold">Solution:</span> {study.solution}</p>
                  </div>

                  <ul className="space-y-2">
                    {study.results.map((result, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-red-800 to-orange-800 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Is your Salesforce org secure?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Let's find out before attackers do. Schedule a comprehensive security assessment.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-900 hover:bg-red-50 font-medium rounded-full transition-all transform hover:scale-105"
            >
              Request Security Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SecurityCompliance;