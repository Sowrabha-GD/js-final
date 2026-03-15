import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Database, Calendar, ArrowLeft, ArrowRight,
  CheckCircle, AlertTriangle, TrendingUp, Clock,
  Gauge, HardDrive, Zap, Filter,
  Layers, Server, Cpu, BarChart,
  DollarSign, Activity, PieChart, Scale,
  Users,
  Award
} from "lucide-react";

const LargeDataVolumesCaseStudy = () => {
  const study = {
    title: "Taming 500M+ Records for Global Investment Bank",
    client: "Global Investment Bank",
    industry: "Financial Services",
    category: "Large Data Volumes (LDV)",
    year: "2024",
    duration: "10 months",
    role: "Lead Data Architect",
    team: "6 internal developers, 3 database administrators",
    
    executiveSummary: "A global investment bank with $500B in assets under management faced a critical crisis: their Salesforce org contained over 500 million transaction records spanning 15 years. Daily batch jobs were failing, critical queries were timing out, and users waited 3+ minutes for basic reports. The system was becoming unusable, and regulatory reporting deadlines were at risk.",
    
    technicalSummary: `**Environment at a glance:**
    • 500M+ total records across 20+ objects
    • 50M transaction records in Opportunity object alone
    • 300+ reports running daily
    • 25 batch jobs processing nightly
    • 15 years of historical data retention requirement
    • 3-minute average query time (peaking at 8 minutes)
    • 35% batch job failure rate`,
    
    challenge: `The bank faced a perfect storm of data volume challenges:

**Query Performance Crisis**:
- Standard SOQL queries consistently exceeded governor limits
- Reports timed out 40% of the time during peak hours
- Executive dashboards took 3-5 minutes to load
- Users abandoned the system, reverting to Excel

**Batch Processing Failures**:
- 35% of nightly batch jobs failed
- Failed jobs required manual intervention each morning
- Critical data not available for start-of-day reporting
- Compliance reporting deadlines repeatedly missed

**Storage & Cost**:
- 80% of data storage allocated to historical records
- External storage costs exceeding $350K annually
- Unable to archive due to regulatory requirements
- No clear data lifecycle management

**Technical Debt**:
- No indexing strategy for large objects
- Poor query selectivity across all reports
- Missing database optimization patterns
- No data archiving framework`,
    
    approach: [
      {
        phase: "Data Profiling & Analysis",
        description: "Analyzed 12 months of query logs, identified top 50 slowest queries, and profiled data distribution across all large objects.",
        duration: "4 weeks",
        deliverables: ["Query performance baseline", "Hotspot identification", "Data temperature analysis"]
      },
      {
        phase: "Architecture Design",
        description: "Designed tiered data architecture with hot, warm, and cold data zones.",
        duration: "6 weeks",
        deliverables: ["Data temperature model", "Big Objects strategy", "Index design", "Archiving framework"]
      },
      {
        phase: "Implementation",
        description: "Built and deployed Big Objects, skinny tables, and automated archiving processes.",
        duration: "6 months",
        deliverables: ["4 Big Objects created", "5 skinny tables deployed", "Automated archiving", "50+ reports optimized"]
      },
      {
        phase: "Validation & Optimization",
        description: "Performance tested all queries, tuned indexes, and validated batch jobs.",
        duration: "4 weeks",
        deliverables: ["Performance benchmarks", "Governor limit validation", "User acceptance testing"]
      }
    ],
    
    solution: `I designed and implemented a comprehensive LDV strategy:

**Tiered Data Architecture**:
- **Hot Data** (24 months): Remained in standard objects with optimized indexing
- **Warm Data** (2-7 years): Migrated to Big Objects with summary tables
- **Cold Data** (7-15 years): Archived to external storage with on-demand access

**Big Objects Implementation**:
- Created 4 Big Objects for historical transactions
- Implemented partitioning by date and account
- Designed async SOQL queries for reporting
- Maintained referential integrity with source records

**Skinny Tables**:
- Created 5 skinny tables for top query patterns
- Included only frequently accessed fields
- Added custom indexes on selective fields
- Reduced query I/O by 85%

**Query Optimization**:
- Refactored 50+ reports to use selective filters
- Added indexed fields to WHERE clauses
- Implemented query resource warnings
- Created query performance dashboards

**Automated Archiving**:
- Built nightly batch jobs to move data by age
- Implemented platform events for real-time sync
- Created external storage connector for cold data
- Maintained audit trail for compliance`,
    
    technologies: [
      "Big Objects",
      "Skinny Tables",
      "Platform Events",
      "Batch Apex",
      "External Objects",
      "Heroku Connect",
      "Einstein Analytics"
    ],
    
    architectureDiagram: [
      { layer: "Hot Data", storage: "Standard Objects", access: "< 1 second", retention: "0-2 years" },
      { layer: "Warm Data", storage: "Big Objects", access: "< 2 seconds", retention: "2-7 years" },
      { layer: "Cold Data", storage: "External (S3)", access: "On-demand", retention: "7-15 years" }
    ],
    
    results: [
      { metric: "Query Performance", before: "3-5 minutes", after: "< 2 seconds", improvement: "90x faster", icon: Gauge },
      { metric: "Batch Success Rate", before: "65%", after: "99.9%", improvement: "+35%", icon: CheckCircle },
      { metric: "Storage Costs", before: "$350K/year", after: "$150K/year", improvement: "-57%", icon: DollarSign },
      { metric: "Data Volume", before: "500M records", after: "120M active", improvement: "-76%", icon: Database },
      { metric: "User Satisfaction", before: "2.1/5", after: "4.7/5", improvement: "+124%", icon: Activity }
    ],
    
    codeExample: `// Before: Inefficient query causing timeouts
List<Transaction__c> transactions = [
  SELECT Id, Amount__c, Date__c, Account__c 
  FROM Transaction__c 
  WHERE Account__c IN :accountIds
  ORDER BY Date__c DESC
]; // 8 minute timeout

// After: Optimized with indexed fields and filtering
List<Transaction__c> transactions = [
  SELECT Id, Amount__c, Date__c, Account__c 
  FROM Transaction__c 
  WHERE Account__c IN :accountIds
  AND Date__c >= LAST_N_YEARS:2
  AND IsActive__c = true
  ORDER BY Date__c DESC
  LIMIT 10000
]; // 1.2 seconds`,
    
    roi: {
      savings: "$2.1M annually",
      payback: "6 months",
      benefits: [
        "Storage cost reduction: $200K/year",
        "Batch job maintenance eliminated: $350K/year",
        "User productivity recovered: $1.2M/year",
        "Compliance penalty avoidance: $350K/year"
      ]
    },
    
    testimonial: {
      quote: "Our Salesforce org was on life support. Queries were timing out, batches were failing, and users were ready to abandon the platform. Jeet's LDV expertise saved us. He didn't just fix the immediate problems—he built an architecture that will scale for the next decade.",
      author: "Managing Director, Enterprise Data",
      role: "Global Investment Bank",
      image: "MD"
    },
    
    relatedStudies: [
      { id: "integration-architecture", title: "Real-Time Integration for Manufacturing", category: "Integration" },
      { id: "apex-design-patterns", title: "Refactoring 50,000 Lines of Legacy Code", category: "Apex Patterns" }
    ]
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 400">
            <defs>
              <pattern id="dataflow" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="3" fill="white" />
                <line x1="20" y1="20" x2="40" y2="20" stroke="white" strokeWidth="1" strokeDasharray="2 2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dataflow)" />
          </svg>
        </div>

        <div className="container-wide py-16 relative z-10">
          <Link to="/LargeDataVolumesPage" className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          
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
                  <span className="text-sm text-blue-200">Query Time</span>
                  <span className="text-sm font-bold text-green-300">90x faster</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-200">Data Volume</span>
                  <span className="text-sm font-bold text-green-300">-76%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-200">Storage Cost</span>
                  <span className="text-sm font-bold text-green-300">-57%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-200">Batch Success</span>
                  <span className="text-sm font-bold text-green-300">99.9%</span>
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

      {/* Architecture Diagram */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Architecture</h2>
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
            <div className="grid grid-cols-3 gap-4">
              {study.architectureDiagram.map((layer, index) => (
                <div key={index} className="text-center">
                  <div className={`h-2 w-full rounded-t-lg mb-2 ${
                    index === 0 ? 'bg-red-500' : index === 1 ? 'bg-yellow-500' : 'bg-blue-500'
                  }`} />
                  <h3 className="font-bold text-gray-900">{layer.layer}</h3>
                  <p className="text-sm text-gray-600 mt-1">{layer.storage}</p>
                  <p className="text-xs text-gray-500 mt-1">Access: {layer.access}</p>
                  <p className="text-xs text-gray-500">Retention: {layer.retention}</p>
                </div>
              ))}
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

      {/* Code Example */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Code Example: Query Optimization</h2>
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto text-sm font-mono">
            {study.codeExample}
          </pre>
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
            Facing data volume challenges?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help you tame your largest datasets and restore performance.
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

export default LargeDataVolumesCaseStudy;