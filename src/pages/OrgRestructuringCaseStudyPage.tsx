import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  GitBranch, Calendar, ArrowLeft, ArrowRight,
  CheckCircle, AlertTriangle, TrendingUp, Clock,
  Layers, Split, Merge, Copy,
  Users, Award, Database, FileText,
  Server, Cloud, Shield, RefreshCw
} from "lucide-react";

const OrgRestructuringCaseStudy = () => {
  const study = {
    title: "Multi-Org Consolidation After 3 Major Acquisitions",
    client: "Global Retail Group",
    industry: "Retail",
    category: "Org Restructuring",
    year: "2023",
    duration: "18 months",
    role: "Lead Migration Architect",
    team: "12 internal developers, 5 integration specialists",
    
    executiveSummary: "A global retail group had acquired 3 companies in 2 years, resulting in 5 disconnected Salesforce orgs serving 2,000+ users. They had no enterprise-wide reporting, duplicate customer records, and were paying $2M+ in redundant license costs.",
    
    technicalSummary: `**Org landscape at a glance:**
    • 5 Salesforce orgs (2 Enterprise, 3 Professional)
    • 2,500+ total users across orgs
    • 8 different sales processes
    • 12 integration points to maintain
    • $2.2M annual license cost
    • 45% duplicate customer records
    • 6-month reporting cycle`,
    
    challenge: `The retail group faced critical challenges:

**Operational Inefficiency**:
- Users had to log into multiple orgs
- No visibility across business units
- 8 different sales processes to maintain
- 12 integration points to manage
- 6 months to get enterprise reports

**Data Quality Issues**:
- 45% duplicate customer records
- Inconsistent product catalogs
- No single view of customer
- Data silos preventing analytics

**Cost Inefficiency**:
- $2.2M in redundant license costs
- 5x the maintenance effort
- Duplicate integrations and customizations
- Scaling costs with each acquisition

**User Experience**:
- Sales reps hated switching orgs
- Support agents couldn't see customer history
- Reporting required manual consolidation
- Compliance reporting impossible`,
    
    approach: [
      {
        phase: "Discovery & Assessment",
        description: "Assessed all 5 orgs, mapped data models, processes, and integrations.",
        duration: "3 months",
        deliverables: ["Org assessment report", "Data mapping", "Migration strategy"]
      },
      {
        phase: "Target Architecture",
        description: "Designed target org structure, data model, and migration approach.",
        duration: "2 months",
        deliverables: ["Target architecture", "Data model", "Governance framework"]
      },
      {
        phase: "Phased Migration",
        description: "Migrated in 3 waves: Customers → Products → Transactions",
        duration: "10 months",
        deliverables: ["Data migrated", "Integrations re-pointed", "Users trained"]
      },
      {
        phase: "Optimization",
        description: "Retired old orgs, optimized performance, and established governance.",
        duration: "3 months",
        deliverables: ["Orgs decommissioned", "Performance tuned", "Governance active"]
      }
    ],
    
    solution: `I designed and executed a comprehensive consolidation strategy:

**Migration Strategy**:
- **Wave 1**: Customer data (deduplication, 360 view)
- **Wave 2**: Product catalog (unified taxonomy)
- **Wave 3**: Transactions and history
- **Wave 4**: Integrations and reporting

**Data Deduplication**:
- Master Data Management for customers
- Match and merge 500,000+ duplicate records
- Golden record creation with survivorship
- Historical transaction preservation

**Process Unification**:
- Standardized sales process across all BUs
- Unified product catalog with local variations
- Common reporting framework
- Consistent security model

**User Migration**:
- Phased user onboarding by business unit
- Comprehensive training program
- Hypercare support during transition
- Success metrics tracking`,
    
    technologies: [
      "Salesforce to Salesforce",
      "Data Loader",
      "MuleSoft",
      "Duplicate Management",
      "Mass Action Scheduler",
      "Heroku Connect"
    ],
    
    results: [
      { metric: "License Costs", before: "$2.2M/year", after: "$950K/year", improvement: "-57%", icon: TrendingUp },
      { metric: "Duplicate Records", before: "45%", after: "< 2%", improvement: "-43%", icon: Database },
      { metric: "Integration Points", before: "12", after: "4", improvement: "-67%", icon: GitBranch },
      { metric: "User Productivity", before: "Baseline", after: "+35%", improvement: "35% gain", icon: Users },
      { metric: "Reporting Time", before: "6 months", after: "Real-time", improvement: "95% faster", icon: Clock }
    ],
    
    roi: {
      savings: "$2.5M annually",
      payback: "9 months",
      benefits: [
        "License cost reduction: $1.25M/year",
        "Maintenance cost reduction: $800K/year",
        "Integration cost reduction: $450K/year",
        "Increased sales productivity: $1M+"
      ]
    },
    
    testimonial: {
      quote: "Jeet took what seemed like an impossible task—consolidating 5 orgs after 3 acquisitions—and delivered with precision. His phased approach kept our business running while he worked magic in the background. The unified org has transformed how we operate.",
      author: "Chief Operating Officer",
      role: "Global Retail Group",
      image: "COO"
    },
    
    relatedStudies: [
      { id: "integration-architecture", title: "Real-Time Integration for Manufacturing", category: "Integration" },
      { id: "large-data-volumes", title: "Taming 500M+ Records for Global Bank", category: "Large Data Volumes" }
    ]
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-800 via-orange-700 to-yellow-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 400">
            <defs>
              <pattern id="merge-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="5" fill="white" />
                <circle cx="40" cy="20" r="5" fill="white" />
                <circle cx="30" cy="40" r="5" fill="white" />
                <line x1="20" y1="20" x2="30" y2="40" stroke="white" strokeWidth="1" />
                <line x1="40" y1="20" x2="30" y2="40" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#merge-pattern)" />
          </svg>
        </div>

        <div className="container-wide py-16 relative z-10">
          <Link to="/OrgRestructuringPage" className="inline-flex items-center gap-2 text-amber-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-amber-500/20 text-amber-200 px-3 py-1 rounded-full text-sm border border-amber-500/30">
                  {study.category}
                </span>
                <span className="text-amber-200 text-sm">{study.year}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{study.title}</h1>
              <p className="text-xl text-amber-100 mb-6">{study.client}</p>
              <div className="flex flex-wrap gap-4 text-amber-200">
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
                  <span className="text-sm text-amber-200">License Costs</span>
                  <span className="text-sm font-bold text-green-300">-57%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-amber-200">Duplicate Records</span>
                  <span className="text-sm font-bold text-green-300"> 2 min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-amber-200">Integration Points</span>
                  <span className="text-sm font-bold text-green-300">-67%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-amber-200">User Productivity</span>
                  <span className="text-sm font-bold text-green-300">+35%</span>
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
      <section className="bg-gradient-to-r from-amber-800 to-orange-800 text-white py-16">
        <div className="container-wide text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Dealing with multiple orgs?
          </h2>
          <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help you consolidate and simplify your Salesforce landscape.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-900 hover:bg-amber-50 font-medium rounded-full transition-all transform hover:scale-105"
          >
            Schedule a Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default OrgRestructuringCaseStudy;