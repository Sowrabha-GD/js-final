import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Plane, Calendar, ArrowLeft, ArrowRight,
  CheckCircle, AlertTriangle, TrendingUp, Clock,
  Users, Award, MapPin, Star,
  Heart, Coffee, Umbrella, Hotel
} from "lucide-react";

const TravelHospitalityCaseStudy = () => {
  const study = {
    title: "Guest 360 Platform for Luxury Hotel Chain",
    client: "Luxury Hotel Chain",
    industry: "Travel & Hospitality",
    category: "Guest Experience & Loyalty",
    year: "2024",
    duration: "12 months",
    role: "Lead Solution Architect",
    team: "10 internal developers, 4 integration specialists",
    
    executiveSummary: "A luxury hotel chain with 50+ properties worldwide needed to unify guest experiences across brands and properties. With 8 different property management systems and fragmented guest data, they were unable to deliver personalized experiences or track guest lifetime value effectively.",
    
    challenge: `The hotel chain faced critical challenges:

**Guest Data Fragmentation**:
- Guest profiles scattered across 8 different PMS systems
- No single view of guest preferences or history
- Unable to recognize VIP guests across properties
- Missed personalization opportunities

**Loyalty Program**:
- Low member engagement (only 25% active)
- Complex points earning and redemption
- No integration with property systems
- Manual member communications

**Operational Inefficiency**:
- Staff spending 30% of time on data entry
- Inconsistent service standards across properties
- No visibility into guest satisfaction trends
- Manual reporting and analytics`,
    
    approach: [
      {
        phase: "Guest Data Audit",
        description: "Analyzed guest data across 8 PMS systems, identifying 2.5M duplicate records and data quality issues.",
        duration: "6 weeks"
      },
      {
        phase: "Guest 360 Design",
        description: "Designed unified guest data model with preferences, history, and predictive insights.",
        duration: "8 weeks"
      },
      {
        phase: "PMS Integration",
        description: "Integrated all 8 property management systems with real-time sync.",
        duration: "6 months"
      },
      {
        phase: "Loyalty Transformation",
        description: "Launched new loyalty program with personalized offers and mobile app.",
        duration: "4 months"
      }
    ],
    
    solution: `I architected a unified Guest 360 platform:

**Guest Data Unification**:
- Master Data Management consolidating 8 systems
- Real-time guest profile synchronization
- Preference tracking (room type, dining, activities)
- Stay history and spending patterns
- Social media and feedback integration

**Personalization Engine**:
- AI-powered guest preference learning
- Pre-arrival room assignment based on history
- Personalized in-room amenities
- Dining recommendations based on past orders
- Special occasion recognition

**Loyalty Transformation**:
- Unified points across all properties
- Mobile app with digital key and check-in
- Personalized offers based on stay patterns
- Partner integration (airlines, experiences)
- Real-time points earning and redemption`,
    
    technologies: [
      "Salesforce Hospitality Cloud",
      "MuleSoft",
      "Einstein AI",
      "Experience Cloud",
      "Mobile Publisher",
      "Tableau"
    ],
    
    results: [
      { metric: "Guest Recognition", before: "25%", after: "95%", improvement: "3.8x", icon: Users },
      { metric: "Repeat Bookings", before: "32%", after: "58%", improvement: "+26%", icon: TrendingUp },
      { metric: "Loyalty Engagement", before: "25%", after: "67%", improvement: "+42%", icon: Award },
      { metric: "Guest Satisfaction", before: "3.8/5", after: "4.7/5", improvement: "+24%", icon: Star },
      { metric: "Staff Efficiency", before: "30% admin", after: "12% admin", improvement: "-60%", icon: Clock }
    ],
    
    roi: {
      savings: "$12M annually",
      payback: "9 months",
      benefits: [
        "Increased repeat bookings generating $8M additional revenue",
        "Reduced staff admin costs by $2.5M/year",
        "Higher loyalty engagement increasing spend by $1.5M",
        "Improved operational efficiency saving $2M"
      ]
    },
    
    testimonial: {
      quote: "Jeet delivered what every luxury hotel dreams of—recognizing every guest, every time, across every property. Our VIP guests now receive personalized service without having to repeat their preferences. The ROI was evident in the first year.",
      author: "Chief Experience Officer",
      role: "Luxury Hotel Chain",
      image: "CXO"
    },
    
    relatedStudies: [
      { id: "integration-architecture", title: "Real-Time Integration for Manufacturing", category: "Integration" },
      { id: "large-data-volumes", title: "Taming 500M+ Records for Global Bank", category: "Large Data Volumes" }
    ]
  };

  return (
    <Layout>
      {/* Hero Section - same structure with travel colors */}
      <section className="relative bg-gradient-to-br from-purple-800 via-fuchsia-700 to-pink-800 text-white overflow-hidden">
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
      <section className="bg-gradient-to-r from-purple-800 to-pink-800 text-white py-16">
        <div className="container-wide text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Ready to transform your hospitality experience?
          </h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help you deliver unforgettable guest experiences.
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

export default TravelHospitalityCaseStudy;