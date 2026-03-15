import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Shield, Lock, AlertTriangle, Eye,
  CheckCircle, ArrowRight, Award, Key,
  FileText, Users, Server, Globe,
  RefreshCw, Fingerprint, Scan, Bell,
  Clipboard, Clock, Ban, Zap
} from "lucide-react";

const SecurityPage = () => {
  const threatVectors = [
    {
      name: "Data Exposure",
      description: "Sensitive data visible to unauthorized users through misconfigured sharing.",
      risk: "High",
      examples: [
        "Field-level security misconfigurations",
        "Overly permissive sharing rules",
        "Guest user access vulnerabilities"
      ]
    },
    {
      name: "Injection Attacks",
      description: "SOQL injection through unvalidated input fields.",
      risk: "Critical",
      examples: [
        "Custom controllers with dynamic SOQL",
        "Unsanitized parameters in Apex",
        "Formula fields with external input"
      ]
    },
    {
      name: "Authentication Weaknesses",
      description: "Weak password policies, no MFA, session fixation risks.",
      risk: "High",
      examples: [
        "No MFA for internal users",
        "Long session timeouts",
        "Weak password complexity"
      ]
    },
    {
      name: "Integration Security",
      description: "APIs without proper authentication or encryption.",
      risk: "Critical",
      examples: [
        "Hardcoded credentials in integrations",
        "HTTP instead of HTTPS",
        "No IP whitelisting"
      ]
    }
  ];

  const controls = [
    {
      category: "Shield Platform",
      icon: Shield,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Platform Encryption",
        "Field Audit Trail",
        "Event Monitoring"
      ]
    },
    {
      category: "Identity & Access",
      icon: Fingerprint,
      color: "from-purple-500 to-pink-500",
      features: [
        "Multi-Factor Authentication",
        "Single Sign-On",
        "Session Management"
      ]
    },
    {
      category: "Data Security",
      icon: Lock,
      color: "from-emerald-500 to-teal-500",
      features: [
        "Field-Level Security",
        "Encryption at Rest",
        "Data Classification"
      ]
    },
    {
      category: "Monitoring",
      icon: Scan,
      color: "from-amber-500 to-orange-500",
      features: [
        "Real-Time Monitoring",
        "Security Center",
        "Threat Detection"
      ]
    }
  ];

  const compliance = [
    { name: "SOC 1 & 2", icon: FileText, description: "Enterprise security controls" },
    { name: "GDPR", icon: Globe, description: "Data privacy compliance" },
    { name: "CCPA", icon: Users, description: "Consumer privacy rights" },
    { name: "HIPAA", icon: Shield, description: "Healthcare data protection" },
    { name: "PCI DSS", icon: Lock, description: "Payment card security" },
    { name: "ISO 27001", icon: Award, description: "Information security standard" }
  ];

  const caseStudy = {
    client: "Healthcare Technology Company",
    challenge: "HIPAA audit revealed multiple PHI exposure risks across Salesforce org",
    approach: "Comprehensive security assessment + Shield implementation + governance framework",
    results: [
      "100% HIPAA compliance achieved",
      "Field Audit Trail implemented for all PHI",
      "Real-time monitoring and alerting",
      "Zero security incidents in 18 months"
    ]
  };

  return (
    <Layout>
      {/* Hero Section - Security Theme */}
      <section className="relative bg-gradient-to-br from-slate-900 via-gray-800 to-zinc-900 text-white overflow-hidden">
        {/* Security Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="shield" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 10 L50 20 L50 40 L30 50 L10 40 L10 20 L30 10" fill="none" stroke="white" strokeWidth="1" />
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
                Security & Vulnerabilities
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-orange-300">Hardening</span> Your Salesforce Org
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                I help enterprises identify and remediate security vulnerabilities before they become breaches. From HIPAA compliance to SOC2 audits - I make Salesforce enterprise-secure.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-medium transition-all"
                >
                  Schedule a security audit
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/SecurityCaseStudyPage"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl font-medium transition-all border border-white/20"
                >
                  View security case studies
                </Link>
              </div>

              <div className="flex gap-8 mt-8 pt-8 border-t border-white/20">
                <div>
                  <div className="text-2xl font-bold">30+</div>
                  <div className="text-sm text-gray-300">Security Assessments</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm text-gray-300">Compliance Success</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">Zero</div>
                  <div className="text-sm text-gray-300">Breaches</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold tracking-wider text-red-600 uppercase bg-red-50 px-4 py-2 rounded-full">
              Threat Landscape
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-6 mb-4">
              Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Vulnerabilities</span> Hide
            </h2>
            <p className="text-gray-600 text-lg">
              Based on real security assessments I've conducted.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {threatVectors.map((threat, index) => {
              const Icon = threat.name === 'Data Exposure' ? Eye : 
                          threat.name === 'Injection Attacks' ? Zap :
                          threat.name === 'Authentication Weaknesses' ? Key : Globe;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-lg font-bold text-gray-900">{threat.name}</h3>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                          threat.risk === 'Critical' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                        }`}>
                          {threat.risk}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{threat.description}</p>
                      <ul className="space-y-1">
                        {threat.examples.map((example, i) => (
                          <li key={i} className="text-xs text-gray-500 flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3 text-red-500" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Controls */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Enterprise-Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Security Controls</span>
            </h2>
            <p className="text-gray-600 text-lg">
              I implement defense-in-depth across your Salesforce org.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {controls.map((control, index) => {
              const Icon = control.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${control.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{control.category}</h3>
                  <ul className="space-y-2">
                    {control.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Compliance</span> Ready
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                I help you meet regulatory requirements and pass audits with confidence.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {compliance.map((item, index) => {
                  const Icon = item.icon;
                  
                  return (
                    <div key={index} className="bg-gray-50 rounded-xl p-4 text-center">
                      <Icon className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                      <h3 className="text-sm font-bold text-gray-900">{item.name}</h3>
                      <p className="text-xs text-gray-500">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-World Impact</h3>
              
              <div className="mb-6 p-4 bg-white rounded-lg border border-red-100">
                <p className="text-sm text-gray-600 mb-2 font-semibold">CASE STUDY</p>
                <h4 className="font-bold text-gray-900 mb-2">{caseStudy.client}</h4>
                <p className="text-sm text-gray-600 mb-3 italic">"{caseStudy.challenge}"</p>
                <p className="text-sm text-gray-700 mb-3"><span className="font-semibold">Approach:</span> {caseStudy.approach}</p>
                <ul className="space-y-1">
                  {caseStudy.results.map((result, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Critical Findings", before: "15+", after: "0" },
                  { label: "Audit Duration", before: "weeks", after: "days" },
                  { label: "MFA Coverage", before: "20%", after: "100%" },
                  { label: "Encryption", before: "Partial", after: "Full" }
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">{item.label}</div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-red-600 line-through">{item.before}</span>
                      <ArrowRight className="w-3 h-3 text-gray-400" />
                      <span className="text-sm font-bold text-green-600">{item.after}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Assessment */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Security Assessment</span> Process
            </h2>
            <p className="text-gray-600 text-lg">
              I don't just scan - I think like an attacker.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                phase: "Reconnaissance",
                activities: [
                  "User permission review",
                  "Sharing rules analysis",
                  "External access points"
                ]
              },
              {
                phase: "Vulnerability Scan",
                activities: [
                  "Field-level security audit",
                  "Apex security review",
                  "API endpoint analysis"
                ]
              },
              {
                phase: "Penetration Testing",
                activities: [
                  "SOQL injection attempts",
                  "Privilege escalation tests",
                  "Session hijacking attempts"
                ]
              },
              {
                phase: "Remediation",
                activities: [
                  "Risk prioritization",
                  "Control implementation",
                  "Validation testing"
                ]
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{phase.phase}</h3>
                <ul className="space-y-2">
                  {phase.activities.map((activity, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">FAQ</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Questions from security-conscious clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "Is Salesforce inherently secure?",
                a: "The platform is secure by design, but configuration determines your org's actual security posture. I've seen misconfigurations expose sensitive data even in well-run orgs."
              },
              {
                q: "How often should we do security assessments?",
                a: "At least annually, and after major changes. I recommend continuous monitoring with quarterly reviews for regulated industries."
              },
              {
                q: "What's the most common vulnerability you find?",
                a: "Over-permissive field-level security and sharing rules. Well-intentioned admins grant too much access 'just in case'."
              },
              {
                q: "Do we need Shield Platform Encryption?",
                a: "If you handle sensitive data (PII, PHI, payment info), yes. I help you implement it strategically - you don't need to encrypt everything."
              },
              {
                q: "How do you handle third-party integrations?",
                a: "I review authentication methods, encryption in transit, and data storage practices. Every integration is a potential attack vector."
              },
              {
                q: "What about MFA for all users?",
                a: "Essential. I implement MFA strategies that balance security with usability, including SSO integration and exception handling."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-red-900 to-orange-900 text-white py-20">
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
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-900 hover:bg-red-50 font-medium rounded-full transition-all transform hover:scale-105"
              >
                Request security audit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/SecurityCaseStudyPage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full font-medium transition-all border border-white/20"
              >
                View security case studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SecurityPage;