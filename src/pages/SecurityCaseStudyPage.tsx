import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Shield, Calendar, ArrowLeft, ArrowRight,
  CheckCircle, AlertTriangle, TrendingUp, Clock,
  Lock, Key, Eye, FileText,
  Users, Award, Ban, Fingerprint,
  Server, Database, Cloud, Wifi
} from "lucide-react";

const SecurityCaseStudy = () => {
  const study = {
    title: "Enterprise Security Framework for Financial Services",
    client: "Global Financial Services Firm",
    industry: "Financial Services",
    category: "Security & Compliance",
    year: "2024",
    duration: "12 months",
    role: "Lead Security Architect",
    team: "6 security specialists, 4 compliance officers",
    
    executiveSummary: "A global financial services firm faced a critical security crisis: a pre-audit assessment revealed 25+ security vulnerabilities, including potential data exposure risks that could result in $50M+ in regulatory fines. They needed a comprehensive security transformation.",
    
    technicalSummary: `**Security posture at a glance:**
    • 25+ critical vulnerabilities identified
    • 15+ PHI exposure risks in healthcare subsidiary
    • 8 systems with no encryption at rest
    • 40% of users without MFA
    • 0 audit trail for sensitive data access
    • 12 compliance frameworks to satisfy
    • $50M+ potential regulatory fines`,
    
    challenge: `The firm faced a security crisis:

**Data Exposure Risks**:
- Sensitive customer data accessible to unauthorized users
- No field-level security for PII and PHI
- Guest user access misconfigured in communities
- External sharing enabled for sensitive records

**Compliance Gaps**:
- HIPAA violations in healthcare subsidiary
- GDPR non-compliance for EU customer data
- SOC2 audit with 8 major findings
- No audit trail for data access

**Access Control Issues**:
- 40% of users without MFA
- Stale user accounts from terminated employees
- Over-privileged service accounts
- No privileged access monitoring

**Security Monitoring**:
- No real-time threat detection
- Manual log review (weekly)
- No incident response plan
- Security team overwhelmed`,
    
    approach: [
      {
        phase: "Security Assessment",
        description: "Comprehensive audit of users, permissions, data, and configurations.",
        duration: "6 weeks",
        deliverables: ["Risk register", "Vulnerability report", "Remediation roadmap"]
      },
      {
        phase: "Shield Implementation",
        description: "Deployed Platform Encryption, Field Audit Trail, and Event Monitoring.",
        duration: "3 months",
        deliverables: ["Encryption implemented", "Audit trail active", "Monitoring live"]
      },
      {
        phase: "Access Control Overhaul",
        description: "Implemented MFA, cleaned up permissions, and established governance.",
        duration: "4 months",
        deliverables: ["MFA enforced", "Permissions cleaned", "Governance framework"]
      },
      {
        phase: "Compliance Validation",
        description: "Validated controls, passed audits, and established ongoing monitoring.",
        duration: "3 months",
        deliverables: ["Audit passed", "Monitoring dashboard", "Security playbook"]
      }
    ],
    
    solution: `I implemented a defense-in-depth security architecture:

**Shield Platform**:
- **Platform Encryption**: Encrypted all PII/PHI fields at rest
- **Field Audit Trail**: Tracked all data access for 10 years
- **Event Monitoring**: Real-time monitoring of suspicious activity

**Access Control**:
- Enforced MFA for all users (internal and external)
- Implemented least privilege across all profiles
- Cleaned up stale users and permissions
- Established privileged access management

**Data Security**:
- Field-level security for all sensitive fields
- Encryption in transit for all integrations
- Data classification framework
- Secure guest user access

**Monitoring & Response**:
- Real-time security dashboard
- Automated threat detection
- Incident response playbook
- Quarterly security reviews`,
    
    technologies: [
      "Shield Platform Encryption",
      "Field Audit Trail",
      "Event Monitoring",
      "MFA",
      "SSO",
      "IP Whitelisting",
      "Session Management"
    ],
    
    results: [
      { metric: "Critical Vulnerabilities", before: "25+", after: "0", improvement: "100%", icon: Shield },
      { metric: "MFA Adoption", before: "60%", after: "100%", improvement: "+40%", icon: Fingerprint },
      { metric: "Audit Findings", before: "8", after: "0", improvement: "Clean audit", icon: CheckCircle },
      { metric: "Data Exposure Risk", before: "Critical", after: "None", improvement: "Eliminated", icon: Lock },
      { metric: "Security Incidents", before: "12/year", after: "0/year", improvement: "Zero", icon: Ban }
    ],
    
    roi: {
      savings: "$12M in avoided fines",
      payback: "4 months",
      benefits: [
        "Avoided $50M in potential fines",
        "Reduced audit costs: $1.2M/year",
        "Lower insurance premiums: $800K/year",
        "Customer trust retained (priceless)"
      ]
    },
    
    testimonial: {
      quote: "Jeet saved us from what could have been a catastrophic security breach. His comprehensive assessment identified risks we didn't even know existed. The security framework he built not only protected our customers' data but gave our board complete confidence in our Salesforce platform.",
      author: "Chief Information Security Officer",
      role: "Global Financial Services Firm",
      image: "CISO"
    },
    
    relatedStudies: [
      { id: "healthcare", title: "HIPAA Compliance for Healthcare Provider", category: "Healthcare" },
      { id: "large-data-volumes", title: "Taming 500M+ Records for Global Bank", category: "Large Data Volumes" }
    ]
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-800 via-rose-700 to-orange-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 400">
            <defs>
              <pattern id="shield-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M20 5 L35 15 L35 30 L20 40 L5 30 L5 15 L20 5" stroke="white" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#shield-pattern)" />
          </svg>
        </div>

        <div className="container-wide py-16 relative z-10">
          <Link to="/SecurityPage" className="inline-flex items-center gap-2 text-rose-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-rose-500/20 text-rose-200 px-3 py-1 rounded-full text-sm border border-rose-500/30">
                  {study.category}
                </span>
                <span className="text-rose-200 text-sm">{study.year}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{study.title}</h1>
              <p className="text-xl text-rose-100 mb-6">{study.client}</p>
              <div className="flex flex-wrap gap-4 text-rose-200">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {study.duration}</span>
                <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {study.team}</span>
                <span className="flex items-center gap-1"><Award className="w-4 h-4" /> {study.role}</span>
              </div>
            </div>
            
            {/* Key Stats Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-3">Key Results</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-rose-200">Critical Vulnerabilities</span>
                  <span className="text-sm font-bold text-green-300">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-rose-200">MFA Adoption</span>
                  <span className="text-sm font-bold text-green-300">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-rose-200">Audit Findings</span>
                  <span className="text-sm font-bold text-green-300">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-rose-200">Security Incidents</span>
                  <span className="text-sm font-bold text-green-300">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of sections follow same pattern */}
      {/* ... */}
      {/* Executive Summary */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{study.executiveSummary}</p>
        </div>
      </section>

      {/* Technical Summary */}
      <section className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="container-wide max-w-4xl">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Technical Environment</h2>
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto text-sm font-mono whitespace-pre-wrap">
            {study.technicalSummary}
          </pre>
        </div>
      </section>

      {/* Challenge */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Challenge</h2>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div className="prose prose-lg">
                <p className="text-gray-800 whitespace-pre-line">{study.challenge}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Approach */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {study.approach.map((phase, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{phase.phase}</h3>
                  <span className="text-sm text-blue-600 font-medium">{phase.duration}</span>
                </div>
                <p className="text-gray-600 mb-3">{phase.description}</p>
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Deliverables:</span>
                  <ul className="mt-2 space-y-1">
                    {phase.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Solution</h2>
          <div className="bg-blue-50 rounded-xl p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-800 whitespace-pre-line">{study.solution}</p>
            </div>
            
            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {study.technologies.map((tech, i) => (
                  <span key={i} className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Results */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Results</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {study.results.map((result, i) => {
              const Icon = result.icon;
              return (
                <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-5 h-5 text-blue-600" />
                    <h4 className="font-medium text-gray-900">{result.metric}</h4>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500 line-through">{result.before}</span>
                    <ArrowRight className="w-3 h-3 text-gray-400" />
                    <span className="text-lg font-bold text-green-600">{result.after}</span>
                  </div>
                  <div className="text-xs text-green-600 font-semibold">{result.improvement}</div>
                </div>
              );
            })}
          </div>

          {/* ROI Card */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">ROI Analysis</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">{study.roi.savings}</div>
                <div className="text-sm text-gray-600">Annual savings achieved</div>
                <div className="text-sm text-gray-500 mt-1">Payback period: {study.roi.payback}</div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Key Benefits</h4>
                <ul className="space-y-1">
                  {study.roi.benefits.map((benefit, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide max-w-4xl">
          <div className="bg-gray-50 rounded-2xl p-8 italic border-l-8 border-blue-500">
            <svg className="w-10 h-10 text-blue-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl text-gray-800 mb-6">{study.testimonial.quote}</p>
            <div>
              <p className="font-bold text-gray-900">{study.testimonial.author}</p>
              <p className="text-sm text-gray-600">{study.testimonial.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-red-800 to-orange-800 text-white py-16">
        <div className="container-wide text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Is your Salesforce org secure?
          </h2>
          <p className="text-rose-100 mb-8 max-w-2xl mx-auto">
            Let's find out before attackers do. Schedule a comprehensive security assessment.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-900 hover:bg-red-50 font-medium rounded-full transition-all transform hover:scale-105"
          >
            Schedule a Security Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default SecurityCaseStudy;