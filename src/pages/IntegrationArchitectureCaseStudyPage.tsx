import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Network, Calendar, ArrowLeft, ArrowRight,
  CheckCircle, AlertTriangle, TrendingUp, Clock,
  GitBranch, Cloud, Database, Zap,
  Shield, RefreshCw, Globe, Server,
  Layers, Webhook, Repeat, Cpu,
  Users,
  Award
} from "lucide-react";

const IntegrationArchitectureCaseStudy = () => {
  const study = {
    title: "Real-Time Integration Platform for Global Manufacturer",
    client: "Global Manufacturing Conglomerate",
    industry: "Manufacturing",
    category: "Integration Architecture",
    year: "2024",
    duration: "14 months",
    role: "Lead Integration Architect",
    team: "10 integration specialists, 5 internal developers",
    
    executiveSummary: "A global manufacturer with operations in 30 countries needed to connect Salesforce with 12 legacy systems including SAP, Oracle, and custom ERPs. Existing point-to-point integrations were failing, data was inconsistent, and real-time visibility was impossible.",
    
    technicalSummary: `**Integration landscape at a glance:**
    • 12 source systems to integrate
    • 50+ million API calls per day
    • 8 different data formats (XML, JSON, EDI)
    • 4 geographic regions with data residency requirements
    • 99.99% uptime requirement
    • < 2 second latency requirement for critical flows
    • 15+ integration patterns required`,
    
    challenge: `The manufacturer faced an integration crisis:

**Point-to-Point Spaghetti**:
- 50+ custom integrations built over 15 years
- No standard patterns or governance
- Any change required 3-6 months of effort
- Integration failures caused production outages

**Data Inconsistency**:
- Customer data different across 8 systems
- No single source of truth for orders
- Inventory not synchronized in real-time
- Reporting required manual consolidation

**Performance Issues**:
- API timeouts during peak loads
- Batch windows exceeding available time
- Real-time updates taking minutes
- No monitoring or alerting

**Security Concerns**:
- Hardcoded credentials in integrations
- No encryption for sensitive data
- No audit trail for data access
- Compliance violations pending`,
    
    approach: [
      {
        phase: "Integration Assessment",
        description: "Mapped all existing integrations, data flows, and failure points.",
        duration: "8 weeks",
        deliverables: ["Integration inventory", "Data flow diagrams", "Failure analysis"]
      },
      {
        phase: "Target Architecture",
        description: "Designed event-driven architecture with MuleSoft as central hub.",
        duration: "6 weeks",
        deliverables: ["Architecture blueprint", "API specifications", "Security framework"]
      },
      {
        phase: "Phased Migration",
        description: "Migrated integrations in 4 waves, starting with customer data.",
        duration: "10 months",
        deliverables: ["12 systems migrated", "APIs deployed", "Monitoring implemented"]
      },
      {
        phase: "Governance",
        description: "Established API governance, security standards, and monitoring.",
        duration: "4 weeks",
        deliverables: ["Integration standards", "Security policies", "SLA framework"]
      }
    ],
    
    solution: `I designed and implemented a modern integration platform:

**Central Integration Hub**:
- MuleSoft as central integration layer
- API-led connectivity with reusable APIs
- Experience, Process, and System API layers
- Real-time and batch processing

**Integration Patterns**:
- Real-time APIs for customer and order data
- Platform Events for asynchronous updates
- Batch processing for legacy systems
- Change Data Capture for real-time sync

**Event-Driven Architecture**:
- Platform Events for real-time notifications
- Pub/sub model for system decoupling
- Reliable message delivery with retries
- Dead-letter queues for failed messages

**Security & Governance**:
- OAuth 2.0 for all API authentication
- Encryption in transit and at rest
- Comprehensive audit logging
- Rate limiting and throttling
- API versioning strategy`,
    
    architectureDiagram: [
      { layer: "Experience API", description: "Salesforce, Mobile Apps, Portals" },
      { layer: "Process API", description: "Orchestration, Business Logic" },
      { layer: "System API", description: "SAP, Oracle, Legacy Systems" }
    ],
    
    technologies: [
      "MuleSoft",
      "Platform Events",
      "Change Data Capture",
      "Composite APIs",
      "Batch Apex",
      "Heroku",
      "OAuth 2.0"
    ],
    
    results: [
      { metric: "Integration Points", before: "50+ point-to-point", after: "36 reusable APIs", improvement: "70% reduction", icon: GitBranch },
      { metric: "Integration Failures", before: "25/month", after: "< 1/month", improvement: "96% reduction", icon: AlertTriangle },
      { metric: "New Integration Time", before: "3-6 months", after: "2-4 weeks", improvement: "80% faster", icon: Clock },
      { metric: "Data Latency", before: "minutes-hours", after: "< 2 seconds", improvement: "Real-time", icon: Zap },
      { metric: "System Uptime", before: "98.5%", after: "99.99%", improvement: "5x improvement", icon: Shield }
    ],
    
    roi: {
      savings: "$3.8M annually",
      payback: "8 months",
      benefits: [
        "Reduced integration maintenance: $1.2M/year",
        "Faster time-to-market: $1.5M/year",
        "Eliminated data errors: $800K/year",
        "Reduced licensing costs: $300K/year"
      ]
    },
    
    testimonial: {
      quote: "Jeet transformed our integration landscape from chaos to clarity. We now have real-time visibility across all our systems, and our developers can build new integrations in weeks instead of months. The platform he built will scale with us for the next decade.",
      author: "Chief Information Officer",
      role: "Global Manufacturing Conglomerate",
      image: "CIO"
    },
    
    relatedStudies: [
      { id: "large-data-volumes", title: "Taming 500M+ Records for Global Bank", category: "Large Data Volumes" },
      { id: "manufacturing", title: "Industry 4.0 Transformation", category: "Manufacturing" }
    ]
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-800 via-fuchsia-700 to-pink-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 400">
            <defs>
              <pattern id="network-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="white" />
                <circle cx="50" cy="10" r="2" fill="white" />
                <circle cx="30" cy="40" r="2" fill="white" />
                <line x1="10" y1="10" x2="50" y2="10" stroke="white" strokeWidth="1" />
                <line x1="10" y1="10" x2="30" y2="40" stroke="white" strokeWidth="1" />
                <line x1="50" y1="10" x2="30" y2="40" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network-pattern)" />
          </svg>
        </div>

        <div className="container-wide py-16 relative z-10">
          <Link to="/IntegrationArchitecturePage" className="inline-flex items-center gap-2 text-fuchsia-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-fuchsia-500/20 text-fuchsia-200 px-3 py-1 rounded-full text-sm border border-fuchsia-500/30">
                  {study.category}
                </span>
                <span className="text-fuchsia-200 text-sm">{study.year}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{study.title}</h1>
              <p className="text-xl text-fuchsia-100 mb-6">{study.client}</p>
              <div className="flex flex-wrap gap-4 text-fuchsia-200">
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
                  <span className="text-sm text-fuchsia-200">Integration Failures</span>
                  <span className="text-sm font-bold text-green-300">-96%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-fuchsia-200">Time to Integrate</span>
                  <span className="text-sm font-bold text-green-300">80% faster</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-fuchsia-200">Data Latency</span>
                  <span className="text-sm font-bold text-green-300"> 2sec</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-fuchsia-200">System Uptime</span>
                  <span className="text-sm font-bold text-green-300">99.99%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of sections follow same pattern as previous case studies */}
      {/* Executive Summary, Challenge, Approach, Solution, Results, ROI, Testimonial, Related, CTA */}
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
      <section className="bg-gradient-to-r from-purple-800 to-pink-800 text-white py-16">
        <div className="container-wide text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Ready to integrate your enterprise?
          </h2>
          <p className="text-fuchsia-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help you build a reliable, scalable integration platform.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-900 hover:bg-purple-50 font-medium rounded-full transition-all transform hover:scale-105"
          >
            Schedule a Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default IntegrationArchitectureCaseStudy;