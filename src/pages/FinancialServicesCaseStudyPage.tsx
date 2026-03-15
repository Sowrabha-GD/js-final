import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Building2, Calendar, ArrowLeft, ArrowRight,
  CheckCircle, AlertTriangle, TrendingUp, Clock,
  DollarSign, Users, Shield, Award,
  BarChart, Target, Zap, Download
} from "lucide-react";

const FinancialServicesCaseStudy = () => {
  const study = {
    title: "Digital Transformation for Regional Investment Bank",
    client: "Regional Investment Bank",
    industry: "Financial Services",
    category: "Banking & Wealth Management",
    year: "2024",
    duration: "14 months",
    role: "Lead Technical Architect",
    team: "12 internal developers, 3 architects",
    
    executiveSummary: "A mid-sized investment bank with $50B in assets under management needed to modernize their client onboarding and wealth management platforms. Legacy systems caused 2-week onboarding times, fragmented client data across 8 systems, and manual compliance reporting that consumed 20 hours per week per compliance officer.",
    
    challenge: `The bank faced several critical challenges:

• **Client onboarding** took 10-14 days, causing prospect frustration and lost deals
• **Client data** was scattered across 8 different systems with no single view
• **Compliance reporting** was manual, taking 20+ hours per week per officer
• **Regulatory requirements** from FINRA and SEC were becoming more stringent
• **Advisor productivity** was declining due to time spent on administrative tasks

The existing Salesforce implementation had grown organically over 8 years with no architectural oversight, resulting in technical debt, performance issues, and compliance risks.`,
    
    approach: [
      {
        phase: "Discovery & Assessment",
        description: "Conducted 30+ stakeholder interviews, analyzed 2 years of audit findings, and mapped 50+ business processes.",
        duration: "4 weeks"
      },
      {
        phase: "Target Architecture Design",
        description: "Designed a unified client 360 data model with Financial Services Cloud, integrated onboarding portal, and automated compliance framework.",
        duration: "6 weeks"
      },
      {
        phase: "Incremental Delivery",
        description: "Delivered in 4 phases: Client Portal → Advisor Dashboard → Compliance Automation → Wealth Management Platform",
        duration: "10 months"
      },
      {
        phase: "Governance & Knowledge Transfer",
        description: "Established architecture review board, trained 12 internal developers, and documented 100+ design decisions.",
        duration: "2 months"
      }
    ],
    
    solution: `I architected a modern, compliant platform using Financial Services Cloud:

**Client 360**: Unified client data from 8 systems into a single view, including banking relationships, investment portfolios, and communication history.

**Digital Onboarding Portal**: Reduced onboarding from 14 days to 24 hours with e-signatures, automated document collection, and real-time status tracking.

**Compliance Automation**: Built automated workflows for FINRA/SEC reporting, reducing manual effort by 90% and eliminating audit findings.

**Advisor Dashboard**: Provided real-time portfolio performance, client insights, and next-best-action recommendations.`,
    
    technologies: [
      "Financial Services Cloud",
      "Experience Cloud",
      "MuleSoft",
      "Platform Events",
      "Einstein Analytics",
      "DocuSign"
    ],
    
    results: [
      { metric: "Client Onboarding Time", before: "10-14 days", after: "24 hours", improvement: "90% faster", icon: Clock },
      { metric: "Compliance Reporting", before: "20 hrs/week", after: "2 hrs/week", improvement: "90% reduction", icon: Shield },
      { metric: "Advisor Productivity", before: "Baseline", after: "+35%", improvement: "35% increase", icon: TrendingUp },
      { metric: "Assets Under Management", before: "$50B", after: "$65B", improvement: "30% growth", icon: DollarSign },
      { metric: "Client Satisfaction", before: "3.2/5", after: "4.8/5", improvement: "+50%", icon: Award }
    ],
    
    roi: {
      savings: "$2.8M annually",
      payback: "8 months",
      benefits: [
        "Reduced compliance staffing costs by $450K/year",
        "Increased advisor capacity equivalent to 15 new hires",
        "Reduced IT maintenance costs by $600K/year",
        "Increased assets under management by $15B"
      ]
    },
    
    testimonial: {
      quote: "Jeet didn't just deliver a technical solution—he transformed how we do business. Our advisors now spend time with clients instead of chasing data. The compliance automation alone saved us from three potential audit findings this year.",
      author: "Chief Information Officer",
      role: "Regional Investment Bank",
      image: "CIO"
    },
    
    relatedStudies: [
      { id: "healthcare", title: "HIPAA Compliance for Healthcare Provider", category: "Healthcare" },
      { id: "large-data-volumes", title: "Taming 500M+ Records for Global Bank", category: "Large Data Volumes" }
    ]
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 400">
            <defs>
              <pattern id="finance" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <text x="5" y="20" fontSize="12" fill="white">$</text>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#finance)" />
          </svg>
        </div>

        <div className="container-wide py-16 relative z-10">
          
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                  {study.category}
                </span>
                <span className="text-blue-200 text-sm">{study.year}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{study.title}</h1>
              <p className="text-xl text-blue-100 mb-6">{study.client}</p>
              <div className="flex flex-wrap gap-4 text-blue-200">
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
                  <span className="text-sm text-blue-200">Onboarding Time</span>
                  <span className="text-sm font-bold text-green-300">90% faster</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-200">Compliance Effort</span>
                  <span className="text-sm font-bold text-green-300">-90%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-200">Advisor Productivity</span>
                  <span className="text-sm font-bold text-green-300">+35%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-200">AUM Growth</span>
                  <span className="text-sm font-bold text-green-300">+30%</span>
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
                  <span className="text-sm text-blue-600 font-medium">{phase.duration}</span>
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
      <section className="bg-gradient-to-r from-blue-800 to-indigo-800 text-white py-16">
        <div className="container-wide text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Ready to achieve similar results?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help you transform your financial services organization.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 hover:bg-blue-50 font-medium rounded-full transition-all transform hover:scale-105"
          >
            Schedule a Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default FinancialServicesCaseStudy;