import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Car, Calendar, ArrowLeft, ArrowRight,
  CheckCircle, AlertTriangle, TrendingUp, Clock,
  Users, Award, Wrench, Gauge,
  MapPin, Navigation, Battery, Zap,
  DollarSign
} from "lucide-react";

const AutomotiveCaseStudy = () => {
  const study = {
    title: "Connected Vehicle Platform for Global Automotive Manufacturer",
    client: "Global Automotive Manufacturer",
    industry: "Automotive",
    category: "Connected Vehicles & Dealer Experience",
    year: "2024",
    duration: "18 months",
    role: "Lead Integration Architect",
    team: "15 internal developers, 5 integration specialists",
    
    executiveSummary: "A top-5 global automotive manufacturer needed to transform their disconnected dealer network and build a connected vehicle platform. With 2,000+ dealers across 30 countries, they faced inconsistent customer experiences, fragmented vehicle data, and missed opportunities for post-sale engagement.",
    
    challenge: `The manufacturer faced critical challenges across their ecosystem:

**Dealer Network**:
- 2,000+ dealers operating on 8 different CRM systems
- No visibility into dealer performance or customer interactions
- Inconsistent sales and service experiences across regions
- Manual inventory reporting causing stock imbalances

**Connected Vehicle**:
- No ability to communicate with vehicles after sale
- Missed opportunities for proactive service
- No data on vehicle performance or driver behavior
- Unable to offer connected services to customers

**Customer Experience**:
- Fragmented view across sales, service, and ownership
- Customers repeated information at every touchpoint
- No personalized offers based on vehicle data
- Low loyalty program engagement`,
    
    approach: [
      {
        phase: "Dealer Assessment",
        description: "Audited dealer systems across 30 countries, identifying integration points and data quality issues.",
        duration: "8 weeks"
      },
      {
        phase: "Connected Vehicle Architecture",
        description: "Designed event-driven platform processing 10M+ vehicle telemetry events daily.",
        duration: "12 weeks"
      },
      {
        phase: "Dealer Rollout",
        description: "Phased deployment to 500 dealers in year 1, with complete rollout in 18 months.",
        duration: "12 months"
      },
      {
        phase: "Connected Services Launch",
        description: "Launched mobile app, predictive maintenance, and loyalty programs.",
        duration: "6 months"
      }
    ],
    
    solution: `I architected a unified connected vehicle and dealer platform:

**Dealer Network Transformation**:
- Standardized dealer CRM on a single platform
- Real-time inventory visibility across all dealers
- Unified customer view across sales and service
- Automated lead distribution and tracking
- Dealer performance dashboards

**Connected Vehicle Platform**:
- Real-time telemetry ingestion from 1M+ vehicles
- Predictive maintenance alerts based on vehicle data
- Over-the-air update management
- Usage-based insurance data sharing
- Emergency services integration

**Customer Experience**:
- Single mobile app for all vehicle interactions
- Personalized service reminders
- Loyalty program integration
- In-car commerce capabilities
- EV charging station locator and payment`,
    
    technologies: [
      "Salesforce Automotive Cloud",
      "MuleSoft",
      "Platform Events",
      "Heroku",
      "IoT Integration",
      "Einstein Analytics"
    ],
    
    results: [
      { metric: "Dealer Productivity", before: "Baseline", after: "+35%", improvement: "35% increase", icon: TrendingUp },
      { metric: "Service Revenue", before: "$500M/year", after: "$725M/year", improvement: "+45%", icon: DollarSign },
      { metric: "Customer Retention", before: "58%", after: "76%", improvement: "+18%", icon: Users },
      { metric: "Connected Vehicle Users", before: "0", after: "850,000", improvement: "850k active", icon: Car },
      { metric: "Dealer Satisfaction", before: "3.2/5", after: "4.6/5", improvement: "+44%", icon: Award }
    ],
    
    roi: {
      savings: "$45M annually",
      payback: "14 months",
      benefits: [
        "Increased service revenue by $225M/year",
        "Reduced dealer support costs by $8M/year",
        "Improved inventory turnover reducing carrying costs by $12M",
        "New connected services revenue of $5M/year"
      ]
    },
    
    testimonial: {
      quote: "Jeet's vision for connected vehicles transformed our business model. We're no longer just selling cars—we're building ongoing relationships with drivers. The dealer platform alone paid for itself in 14 months.",
      author: "Chief Digital Officer",
      role: "Global Automotive Manufacturer",
      image: "CDO"
    },
    
    relatedStudies: [
      { id: "integration-architecture", title: "Real-Time Integration for Manufacturing", category: "Integration" },
      { id: "manufacturing", title: "Industry 4.0 for Industrial Manufacturer", category: "Manufacturing" }
    ]
  };

  return (
    <Layout>
      {/* Hero Section - same structure with automotive colors */}
      <section className="relative bg-gradient-to-br from-emerald-800 via-green-700 to-teal-800 text-white overflow-hidden">
        {/* ... similar hero structure with automotive icons ... */}
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

      {/* Follow same section structure as previous case studies */}
      {/* ... */}
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
      <section className="bg-gradient-to-r from-emerald-800 to-teal-800 text-white py-16">
        <div className="container-wide text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Ready to transform your automotive business?
          </h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help you connect vehicles, dealers, and customers.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-900 hover:bg-emerald-50 font-medium rounded-full transition-all transform hover:scale-105"
          >
            Schedule a Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AutomotiveCaseStudy;