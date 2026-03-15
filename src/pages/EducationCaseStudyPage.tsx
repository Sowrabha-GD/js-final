import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  GraduationCap, Calendar, ArrowLeft, ArrowRight,
  CheckCircle, AlertTriangle, TrendingUp, Clock,
  Users, Award, BookOpen, School,
  Heart, Target, Globe, MessageCircle
} from "lucide-react";

const EducationCaseStudy = () => {
  const study = {
    title: "Student Success Hub for Large Public University",
    client: "Large Public University",
    industry: "Education",
    category: "Student Success & Retention",
    year: "2024",
    duration: "14 months",
    role: "Lead Solution Architect",
    team: "8 internal developers, 5 student success advisors",
    
    executiveSummary: "A large public university with 40,000+ students needed to improve retention rates and student outcomes. With fragmented student data across 12 different systems, advisors couldn't identify at-risk students early, and students had no single view of their academic journey.",
    
    challenge: `The university faced critical challenges:

**Student Data Fragmentation**:
- Student data scattered across SIS, LMS, advising, and financial systems
- No 360-degree view of student progress
- Manual data gathering consuming 40% of advisor time
- Inability to identify at-risk students early

**Retention Crisis**:
- 22% freshman dropout rate
- 35% graduation rate within 4 years
- Disproportionate impact on first-generation students
- No proactive intervention capabilities

**Student Experience**:
- Students navigate 6+ different portals
- No visibility into degree progress
- Difficult to find academic resources
- Limited engagement with advisors`,
    
    approach: [
      {
        phase: "Data Integration",
        description: "Integrated 12 source systems into unified Student 360 data model.",
        duration: "3 months"
      },
      {
        phase: "Predictive Model Development",
        description: "Built ML models predicting student success with 85% accuracy.",
        duration: "4 months"
      },
      {
        phase: "Advisor Dashboard",
        description: "Created proactive intervention workflows and alerts.",
        duration: "3 months"
      },
      {
        phase: "Student Portal Launch",
        description: "Deployed unified student portal with personalized success plans.",
        duration: "4 months"
      }
    ],
    
    solution: `I architected a comprehensive Student Success Hub:

**Student 360**:
- Unified view across admissions, academics, financial aid, and advising
- Real-time progress tracking toward degree
- Early alert indicators (grades, attendance, engagement)
- Communication history with all touchpoints

**Predictive Analytics**:
- ML models identifying at-risk students with 85% accuracy
- Automated alerts to advisors 8 weeks before issues become critical
- Personalized intervention recommendations
- Success plan tracking and outcomes measurement

**Student Portal**:
- Single dashboard for all student needs
- Degree audit and course planning
- Financial aid status and documents
- Advisor appointment scheduling
- Peer mentoring connections
- Career services integration`,
    
    technologies: [
      "Education Cloud",
      "Einstein Analytics",
      "MuleSoft",
      "Experience Cloud",
      "Tableau",
      "Heroku"
    ],
    
    results: [
      { metric: "Freshman Retention", before: "78%", after: "89%", improvement: "+11%", icon: TrendingUp },
      { metric: "4-Year Graduation", before: "35%", after: "48%", improvement: "+13%", icon: Award },
      { metric: "Advisor Efficiency", before: "40% admin", after: "15% admin", improvement: "+25% capacity", icon: Clock },
      { metric: "Student Satisfaction", before: "3.1/5", after: "4.4/5", improvement: "+42%", icon: Heart },
      { metric: "Early Intervention", before: "Reactive", after: "8 weeks early", improvement: "Proactive", icon: Target }
    ],
    
    roi: {
      savings: "$18M annually",
      payback: "10 months",
      benefits: [
        "Increased tuition revenue from retention: $12M/year",
        "Reduced recruitment costs: $3M/year",
        "Improved alumni giving: $2M/year",
        "Grant funding for innovation: $1M"
      ]
    },
    
    testimonial: {
      quote: "Jeet's Student Success Hub transformed how we support our students. We're now identifying at-risk students months before we could before, and the personalized success plans have made a dramatic difference. Most importantly, we're changing lives by helping more students graduate.",
      author: "Vice Provost for Student Success",
      role: "Large Public University",
      image: "Provost"
    },
    
    relatedStudies: [
      { id: "large-data-volumes", title: "Taming 500M+ Records for Global Bank", category: "Large Data Volumes" },
      { id: "apex-design-patterns", title: "Refactoring 50,000 Lines of Legacy Code", category: "Apex Patterns" }
    ]
  };

  return (
    <Layout>
      {/* Hero Section - same structure with education colors */}
      <section className="relative bg-gradient-to-br from-indigo-800 via-blue-700 to-cyan-800 text-white overflow-hidden">
       
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
      <section className="bg-gradient-to-r from-indigo-800 to-blue-800 text-white py-16">
        <div className="container-wide text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Ready to transform student success at your institution?
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help you improve retention and graduate more students.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-900 hover:bg-indigo-50 font-medium rounded-full transition-all transform hover:scale-105"
          >
            Schedule a Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default EducationCaseStudy;