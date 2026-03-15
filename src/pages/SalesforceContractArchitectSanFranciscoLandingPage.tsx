import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Award, Briefcase, Clock, MapPin,
  CheckCircle, ArrowRight, Star, TrendingUp,
  Globe, Users, Building2, Phone,
  Mail, Calendar, Shield, Zap,
  Rocket, Target, Sparkles, Cpu,
  BarChart, Cloud, Server, Code,
  DollarSign, LineChart, Wifi, HardDrive,
  Smartphone, Database, Github
} from "lucide-react";

const SalesforceContractArchitectSanFrancisco = () => {
  const expertiseAreas = [
    {
      title: "Technology & SaaS",
      description: "Scalable architectures for San Francisco's world-leading tech companies and startups",
      icon: Cpu
    },
    {
      title: "Cloud Architecture",
      description: "Multi-cloud strategies integrating Salesforce with AWS, GCP, and Azure",
      icon: Cloud
    },
    {
      title: "Startup Scaling",
      description: "From Series A to IPO - architectures that grow with you",
      icon: Rocket
    },
    {
      title: "Enterprise Integration",
      description: "Connect Salesforce with modern APIs and legacy systems",
      icon: Database
    }
  ];

  const benefits = [
    {
      icon: MapPin,
      title: "San Francisco Presence",
      description: "Regular on-site presence in SF. I spend one week per month in the Bay Area."
    },
    {
      icon: Award,
      title: "CTA Certified",
      description: "Top 1% of Salesforce architects globally. Enterprise expertise you can trust."
    },
    {
      icon: DollarSign,
      title: "Competitive SF Rates",
      description: "$160-275/hour or $1,300-2,200/day. Premium expertise for the Bay Area market."
    },
    {
      icon: Wifi,
      title: "Flexible Engagement",
      description: "Hybrid working model - remote with regular on-site visits as needed."
    }
  ];

  const services = [
    {
      title: "Solution Architecture",
      description: "End-to-end solution design for complex enterprise requirements",
      rate: "$1,600-2,200/day",
      deliverables: ["Solution blueprints", "Integration designs", "Data models", "Security architecture"]
    },
    {
      title: "Technical Advisory",
      description: "Strategic guidance for CTOs and technology leaders",
      rate: "$1,400-2,000/day",
      deliverables: ["Architecture reviews", "Technology roadmap", "Governance framework", "Team mentoring"]
    },
    {
      title: "Implementation Support",
      description: "Hands-on architecture for critical projects",
      rate: "$1,300-1,800/day",
      deliverables: ["Code reviews", "Performance tuning", "Security audits", "Go-live support"]
    },
    {
      title: "Org Assessment",
      description: "Comprehensive health check of your Salesforce org",
      rate: "$18,000-28,000 fixed",
      deliverables: ["Technical debt analysis", "Performance benchmarks", "Security assessment", "Recommendations report"]
    }
  ];

  const testimonials = [
    {
      quote: "Jeet architected our B2B SaaS platform during our hyper-growth phase. His work scaled beautifully from 10K to 1M users.",
      author: "Michael Chen",
      role: "CTO",
      company: "San Francisco Unicorn",
      rating: 5,
      image: "MC"
    },
    {
      quote: "We needed a contract architect who understood both Salesforce and modern tech stacks. Jeet delivered a solution that integrated perfectly with our microservices.",
      author: "Jessica Lee",
      role: "VP of Engineering",
      company: "Bay Area Tech Scale-up",
      rating: 5,
      image: "JL"
    }
  ];

  const recentProjects = [
    {
      client: "SF SaaS Unicorn",
      project: "Multi-org Architecture",
      duration: "12 months",
      rate: "$2,000/day",
      impact: "Scalable architecture for 300% YoY growth"
    },
    {
      client: "Bay Area FinTech",
      project: "Platform Modernization",
      duration: "8 months",
      rate: "$1,800/day",
      impact: "Migrated legacy system to Salesforce with zero downtime"
    },
    {
      client: "SF Tech Startup",
      project: "MVP to Series B Architecture",
      duration: "18 months",
      rate: "$1,500/day",
      impact: "Supported growth from 10 to 500 employees"
    }
  ];

  const sfLocations = [
    "Financial District",
    "SoMa (South of Market)",
    "Mission Bay",
    "Downtown",
    "Presidio",
    "East Bay (Remote)"
  ];

  const sfStats = [
    { label: "Tech companies", value: "5,000+" },
    { label: "Unicorns", value: "50+", description: "in Bay Area" },
    { label: "Tech workers", value: "400,000+" },
    { label: "VC funding", value: "$50B+", description: "annual" }
  ];

  const techHubs = [
    { name: "SoMa", description: "Startup hub" },
    { name: "Mission Bay", description: "Biotech & Tech" },
    { name: "FiDi", description: "Enterprise" },
    { name: "East Bay", description: "Remote-first" }
  ];

  const complianceFrameworks = [
    { name: "SOC2", description: "Security & compliance" },
    { name: "GDPR", description: "Data protection" },
    { name: "CCPA", description: "California privacy" },
    { name: "HIPAA", description: "Healthcare (if needed)" },
    { name: "PCI DSS", description: "Payment security" },
    { name: "ISO 27001", description: "Info security" }
  ];

  const faqs = [
    {
      q: "How often can you be on-site in San Francisco?",
      a: "I typically spend one week per month in SF, with additional visits as needed. I'm happy to work hybrid with regular on-site days for key meetings in SoMa or FiDi."
    },
    {
      q: "What's your day rate for San Francisco contracts?",
      a: "My standard day rate ranges from $1,300-2,200 depending on scope and duration. Hourly rates also available at $160-275/hour."
    },
    {
      q: "Do you work with startups as well as enterprises?",
      a: "Absolutely. I love working with SF's incredible startup ecosystem. I offer flexible engagements tailored to early-stage companies."
    },
    {
      q: "Do you understand modern tech stacks?",
      a: "Yes. I work seamlessly with engineering teams using microservices, cloud platforms, and modern DevOps practices."
    }
  ];

  return (
    <Layout>
      {/* Hero Section - San Francisco Tech Theme */}
      <section className="relative bg-gradient-to-br from-orange-800 via-orange-600 to-yellow-600 text-white overflow-hidden">
        {/* Golden Gate Bridge Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
            <g stroke="white" strokeWidth="3" fill="none">
              {/* Golden Gate Bridge cables */}
              <path d="M100 300 L200 150 L300 300" />
              <path d="M150 300 L250 150 L350 300" />
              <path d="M200 300 L300 150 L400 300" />
              <path d="M250 300 L350 150 L450 300" />
              <path d="M300 300 L400 150 L500 300" />
              <path d="M350 300 L450 150 L550 300" />
              
              {/* Bridge towers */}
              <rect x="220" y="100" width="20" height="200" fill="white" />
              <rect x="420" y="100" width="20" height="200" fill="white" />
              
              {/* City skyline */}
              <rect x="500" y="150" width="20" height="150" fill="white" />
              <rect x="550" y="120" width="20" height="180" fill="white" />
              <rect x="600" y="100" width="25" height="200" fill="white" />
              
              {/* Tech symbols */}
              <circle cx="100" cy="100" r="10" fill="white" />
              <circle cx="130" cy="70" r="10" fill="white" />
              <circle cx="160" cy="130" r="10" fill="white" />
            </g>
          </svg>
        </div>

        {/* Floating Orbs - Tech glow */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl"></div>

        <div className="container-wide py-20 md:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-orange-200" />
                <span className="text-orange-100 font-medium">SoMa • FiDi • Mission Bay • San Francisco</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Salesforce Contract Architect
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-yellow-200">
                  San Francisco • Bay Area
                </span>
              </h1>
              
              <p className="text-xl text-orange-100 mb-8">
                Enterprise Salesforce architecture for tech companies and startups. $160-275/hour or $1,300-2,200/day.
                From Series A to IPO - scalable architectures that grow with you.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                
              <Link
            to="/ContactFreelancePage"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-white text-orange-900 hover:bg-orange-50 rounded-xl font-medium transition-all shadow-lg"
                >
                  <Calendar className="w-5 h-5" />
                  Discuss Your SF Project
                </Link>
                <a
                  href="tel:+14155551234"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition-all shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  +1 (415) 555-1234
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {['CTA','SOC2','IPO','SF'].map((badge, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 border-2 border-white/20 flex items-center justify-center text-xs font-bold">
                      {badge}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-orange-200">Trusted by San Francisco's leading tech companies</span>
              </div>
            </motion.div>

            {/* Right Column - SF Tech Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <h2 className="text-2xl font-bold mb-4">San Francisco: The Tech Capital</h2>
              
              <p className="text-sm text-orange-200 mb-6">
                Home to 5,000+ tech companies, 50+ unicorns, and $50B+ in annual VC funding.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {sfStats.map((stat, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-3">
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-orange-200">{stat.label}</div>
                    {stat.description && (
                      <div className="text-xs text-orange-300/70">{stat.description}</div>
                    )}
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-orange-200">Tech Hubs:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {techHubs.map((hub, index) => (
                    <div key={index} className="bg-white/5 rounded-lg px-3 py-2">
                      <div className="text-sm font-medium text-white">{hub.name}</div>
                      <div className="text-xs text-orange-300">{hub.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-orange-400" />
                  <p className="text-xs text-orange-200">
                    From startup to IPO - I help San Francisco's tech companies scale.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SF Locations */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="text-sm text-gray-500">Active across the Bay Area:</span>
            {sfLocations.map((location, index) => (
              <div key={index} className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium text-gray-700">{location}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-sm text-gray-500">Compliance expertise:</span>
            {complianceFrameworks.map((frame, index) => (
              <div key={index} className="bg-gray-100 rounded-full px-4 py-2">
                <span className="text-sm font-medium text-gray-700">{frame.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Expertise for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">San Francisco Tech</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all"
                >
                  <Icon className="w-8 h-8 text-orange-600 mb-3" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{area.title}</h3>
                  <p className="text-sm text-gray-600">{area.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                >
                  <Icon className="w-8 h-8 text-orange-600 mb-3" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">Bay Area Projects</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900">{project.client}</h3>
                  <span className="text-xs font-semibold bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                    {project.rate}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{project.project}</p>
                <p className="text-xs text-gray-500 mb-2">Duration: {project.duration}</p>
                <p className="text-xs text-green-600 font-semibold">{project.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services with Rates */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Contract <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">Services & Rates</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                  <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    {service.rate}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-600 to-yellow-600 flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-xs text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Contract <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">FAQ</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-800 to-yellow-800 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to scale your San Francisco project?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Let's meet in SoMa or schedule a video call to discuss your architectural needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              
              
              <Link
            to="/ContactFreelancePage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-900 hover:bg-orange-50 font-medium rounded-full transition-all transform hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Call
              </Link>
              <Link
                to="/ContactFreelancePage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full font-medium transition-all border border-white/20"
              >
                <Mail className="w-5 h-5" />
                Send Enquiry
              </Link>
            </div>
            <p className="text-sm text-orange-200 mt-6">
              I'll respond within 2 hours - SF tech time!
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SalesforceContractArchitectSanFrancisco;