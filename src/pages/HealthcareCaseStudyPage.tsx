import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Heart, Calendar, ArrowLeft, ArrowRight,
  CheckCircle, AlertTriangle, TrendingUp, Clock,
  Users, Shield, Award, Activity,
  FileText, Lock, Ambulance, Stethoscope
} from "lucide-react";

const HealthcareCaseStudy = () => {
  const study = {
    title: "HIPAA-Compliant Patient Portal for Regional Healthcare Network",
    client: "Regional Healthcare Network",
    industry: "Healthcare",
    category: "Patient Engagement & Compliance",
    year: "2024",
    duration: "10 months",
    role: "Lead Security Architect",
    team: "8 internal developers, 2 compliance officers",
    
    executiveSummary: "A regional healthcare network serving 500,000+ patients needed to modernize their patient engagement platform while ensuring strict HIPAA compliance. The existing system was fragmented across 3 different portals, had inconsistent patient data, and faced potential compliance violations from outdated security controls.",
    
    challenge: `The healthcare network faced critical challenges:

• **HIPAA Compliance Risk**: A pre-audit assessment revealed 15+ potential PHI exposure risks across their systems
• **Fragmented Patient Experience**: Patients had to use different portals for appointments, medical records, and billing
• **Provider Coordination**: Care teams lacked a unified view of patient history across different facilities
• **Manual Processes**: Appointment scheduling and prescription refills required phone calls, creating administrative burden
• **Security Concerns**: Legacy systems lacked modern encryption, audit trails, and access controls

The network's Salesforce implementation had grown organically across 3 different hospitals with no centralized security governance, creating significant compliance vulnerabilities.`,
    
    approach: [
      {
        phase: "Security Assessment",
        description: "Conducted comprehensive HIPAA gap analysis across all systems, identifying 15 critical vulnerabilities and 23 medium-risk issues.",
        duration: "4 weeks"
      },
      {
        phase: "Compliance Architecture",
        description: "Designed a security-first architecture with Shield Platform Encryption, field-level audit trails, and strict access controls.",
        duration: "6 weeks"
      },
      {
        phase: "Unified Portal Development",
        description: "Built a single patient portal integrating appointments, medical records, billing, and secure messaging.",
        duration: "6 months"
      },
      {
        phase: "Provider Rollout",
        description: "Deployed to 500+ providers across 12 facilities with comprehensive training and change management.",
        duration: "2 months"
      }
    ],
    
    solution: `I architected a HIPAA-compliant patient engagement platform using Health Cloud:

**Security Foundation**:
- Implemented Shield Platform Encryption for all PHI fields
- Deployed Field Audit Trail to track all data access for 10 years
- Enforced MFA for all provider and patient access
- Created strict role-based access controls following least privilege principle

**Unified Patient Portal**:
- Single sign-on across all patient services
- Secure appointment scheduling and reminders
- Online prescription refill requests
- Secure messaging with providers
- Access to lab results and medical records
- Integrated billing and payment

**Provider Experience**:
- 360-degree patient view across all facilities
- Care team collaboration tools
- Clinical workflows and task management
- Real-time alerts for critical patient events`,
    
    technologies: [
      "Health Cloud",
      "Shield Platform Encryption",
      "Field Audit Trail",
      "Experience Cloud",
      "MuleSoft",
      "Einstein Analytics"
    ],
    
    results: [
      { metric: "Patient Portal Adoption", before: "35%", after: "78%", improvement: "+43%", icon: Users },
      { metric: "Security Incidents", before: "12/year", after: "0", improvement: "100% reduction", icon: Shield },
      { metric: "HIPAA Compliance", before: "At risk", after: "100% compliant", improvement: "Passed audit", icon: CheckCircle },
      { metric: "Appointment No-Shows", before: "18%", after: "7%", improvement: "-61%", icon: Clock },
      { metric: "Patient Satisfaction", before: "3.1/5", after: "4.7/5", improvement: "+52%", icon: Award }
    ],
    
    roi: {
      savings: "$1.8M annually",
      payback: "6 months",
      benefits: [
        "Reduced administrative staff costs by $650K/year",
        "Avoided $2.5M in potential HIPAA fines",
        "Increased patient retention by 25%",
        "Reduced no-shows saving $450K in lost revenue"
      ]
    },
    
    testimonial: {
      quote: "Jeet's security-first approach gave us confidence that we could innovate without compromising patient privacy. The unified portal has transformed how our patients engage with us, and we passed our subsequent HIPAA audit with zero findings—a first in our organization's history.",
      author: "Chief Information Security Officer",
      role: "Regional Healthcare Network",
      image: "CISO"
    },
    
    relatedStudies: [
      { id: "security", title: "Enterprise Security Framework for Financial Services", category: "Security" },
      { id: "large-data-volumes", title: "Taming 500M+ Records for Global Bank", category: "Large Data Volumes" }
    ]
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-800 via-red-700 to-pink-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 400">
            <defs>
              <pattern id="healthcare" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <Heart className="w-6 h-6 text-white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#healthcare)" />
          </svg>
        </div>

        <div className="container-wide py-16 relative z-10">
         
          
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
                  <span className="text-sm text-rose-200">Patient Adoption</span>
                  <span className="text-sm font-bold text-green-300">+43%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-rose-200">Security Incidents</span>
                  <span className="text-sm font-bold text-green-300">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-rose-200">HIPAA Compliance</span>
                  <span className="text-sm font-bold text-green-300">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-rose-200">Patient Satisfaction</span>
                  <span className="text-sm font-bold text-green-300">4.7★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{study.executiveSummary}</p>
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
                  <span className="text-sm text-rose-600 font-medium">{phase.duration}</span>
                </div>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Solution</h2>
          <div className="bg-rose-50 rounded-xl p-8">
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
                    <Icon className="w-5 h-5 text-rose-600" />
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
          <div className="bg-gray-50 rounded-2xl p-8 italic border-l-8 border-rose-500">
            <svg className="w-10 h-10 text-rose-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
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
      <section className="bg-gradient-to-r from-rose-800 to-red-800 text-white py-16">
        <div className="container-wide text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Ready to transform your healthcare organization?
          </h2>
          <p className="text-rose-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help you deliver secure, compliant patient experiences.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-rose-900 hover:bg-rose-50 font-medium rounded-full transition-all transform hover:scale-105"
          >
            Schedule a Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default HealthcareCaseStudy;