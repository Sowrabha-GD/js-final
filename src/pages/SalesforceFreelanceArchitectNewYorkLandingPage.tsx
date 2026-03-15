import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Award, Briefcase, Clock, MapPin,
  CheckCircle, ArrowRight, Star, TrendingUp,
  Globe, Users, Building2, Phone,
  Mail, Calendar, Shield, Zap,
  Rocket, Target, Sparkles, Landmark,
  BarChart, Cloud, Server, Code,
  DollarSign, LineChart, Cpu, Wifi,
  BarChart3, TrendingUp as TrendUp
} from "lucide-react";

const SalesforceFreelanceArchitectNewYork = () => {
  const expertiseAreas = [
    {
      title: "Financial Services",
      description: "Specialized expertise for Wall Street banks, hedge funds, and investment firms",
      icon: Landmark
    },
    {
      title: "Media & Publishing",
      description: "Salesforce architecture for NYC's world-leading media and publishing houses",
      icon: Globe
    },
    {
      title: "Technology & Startups",
      description: "Scalable architectures for Silicon Alley's thriving tech scene",
      icon: Cpu
    },
    {
      title: "Enterprise Integration",
      description: "Connect Salesforce with legacy systems and modern APIs",
      icon: Cloud
    }
  ];

  const benefits = [
    {
      icon: MapPin,
      title: "New York Presence",
      description: "Regular on-site presence in NYC. I spend one week per month in the city."
    },
    {
      icon: Award,
      title: "CTA Certified",
      description: "Top 1% of Salesforce architects globally. Enterprise expertise you can trust."
    },
    {
      icon: DollarSign,
      title: "Competitive NYC Rates",
      description: "$150-250/hour or $1,200-2,000/day. Premium expertise for the New York market."
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
      rate: "$1,500-2,000/day",
      deliverables: ["Solution blueprints", "Integration designs", "Data models", "Security architecture"]
    },
    {
      title: "Technical Advisory",
      description: "Strategic guidance for CTOs and technology leaders",
      rate: "$1,300-1,800/day",
      deliverables: ["Architecture reviews", "Technology roadmap", "Governance framework", "Team mentoring"]
    },
    {
      title: "Implementation Support",
      description: "Hands-on architecture for critical projects",
      rate: "$1,200-1,600/day",
      deliverables: ["Code reviews", "Performance tuning", "Security audits", "Go-live support"]
    },
    {
      title: "Org Assessment",
      description: "Comprehensive health check of your Salesforce org",
      rate: "$15,000-25,000 fixed",
      deliverables: ["Technical debt analysis", "Performance benchmarks", "Security assessment", "Recommendations report"]
    }
  ];

  const testimonials = [
    {
      quote: "Jeet architected our wealth management platform with deep understanding of both Salesforce and Wall Street regulations. His work has been flawless.",
      author: "David Miller",
      role: "CTO",
      company: "New York Investment Bank",
      rating: 5,
      image: "DM"
    },
    {
      quote: "We needed a freelance architect who understood the pace of New York tech. Jeet delivered ahead of schedule and under budget.",
      author: "Sarah Chen",
      role: "VP of Engineering",
      company: "NYC Tech Scale-up",
      rating: 5,
      image: "SC"
    }
  ];

  const recentProjects = [
    {
      client: "Wall Street Investment Bank",
      project: "Client Portal Architecture",
      duration: "8 months",
      rate: "$1,800/day",
      impact: "SEC-compliant, 500+ institutional clients onboarded"
    },
    {
      client: "NYC Media Group",
      project: "Digital Transformation",
      duration: "6 months",
      rate: "$1,600/day",
      impact: "Unified 5 media brands on single Salesforce org"
    },
    {
      client: "Silicon Alley Startup",
      project: "Scalable Architecture",
      duration: "4 months",
      rate: "$1,400/day",
      impact: "Architecture supporting 500% user growth"
    }
  ];

  const nycLocations = [
    "Wall Street",
    "Midtown Manhattan",
    "Silicon Alley (Flatiron)",
    "Hudson Yards",
    "Downtown Brooklyn",
    "Long Island City"
  ];

  const nycStats = [
    { label: "Fortune 500 HQs", value: "50+" },
    { label: "Tech workers", value: "300,000+" },
    { label: "Financial firms", value: "10,000+" },
    { label: "Media companies", value: "7,000+", description: "in NYC metro" }
  ];

  const regulators = [
    { name: "SEC", description: "Securities and Exchange Commission" },
    { name: "FINRA", description: "Financial Industry Regulatory Authority" },
    { name: "GDPR", description: "Data Protection (for global firms)" },
    { name: "CCPA", description: "California Consumer Privacy Act" },
    { name: "SOX", description: "Sarbanes-Oxley Act" },
    { name: "GLBA", description: "Gramm-Leach-Bliley Act" }
  ];

  const faqs = [
    {
      q: "How often can you be on-site in New York?",
      a: "I typically spend one week per month in NYC, with additional visits as needed. I'm happy to work hybrid with regular on-site days for key meetings in Manhattan."
    },
    {
      q: "What's your day rate for New York contracts?",
      a: "My standard day rate ranges from $1,200-2,000 depending on scope and duration. Hourly rates also available at $150-250/hour."
    },
    {
      q: "Do you work with startups as well as enterprises?",
      a: "Absolutely. I love working with NYC's thriving startup scene. I offer flexible engagements tailored to earlier-stage companies."
    },
    {
      q: "How quickly can you start?",
      a: "Typically within 1-2 weeks. I prioritize New York clients and can accommodate urgent timelines."
    }
  ];

  return (
    <Layout>
      {/* Hero Section - New York Skyline Theme */}
      <section className="relative bg-gradient-to-br from-slate-800 via-blue-800 to-slate-900 text-white overflow-hidden">
        {/* NYC Skyline Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
            <g fill="white">
              {/* Empire State Building */}
              <rect x="200" y="80" width="25" height="220" />
              <rect x="225" y="100" width="25" height="200" />
              
              {/* Chrysler Building */}
              <rect x="300" y="60" width="20" height="240" />
              <polygon points="310,40 320,60 300,60" fill="white" />
              
              {/* One World Trade Center */}
              <rect x="400" y="40" width="30" height="260" />
              <polygon points="415,30 430,40 400,40" fill="white" />
              
              {/* Brooklyn Bridge */}
              <path d="M500 280 L550 200 L600 280" stroke="white" strokeWidth="3" fill="none" />
              
              {/* Modern towers */}
              <rect x="600" y="80" width="25" height="220" />
              <rect x="650" y="60" width="25" height="240" />
              
              {/* Statue of Liberty (simplified) */}
              <circle cx="100" cy="250" r="15" fill="white" />
              <rect x="95" y="210" width="10" height="40" fill="white" />
            </g>
          </svg>
        </div>

        {/* Floating Orbs - City lights effect */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl"></div>

        <div className="container-wide py-20 md:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-blue-300" />
                <span className="text-blue-200 font-medium">Wall Street • Midtown • Silicon Alley • NYC</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Salesforce Freelance Architect
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-amber-200">
                  New York City
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8">
                Enterprise Salesforce architecture on your terms. $150-250/hour or $1,200-2,000/day.
                Flexible engagements for Wall Street, media, and tech. CTA-certified.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  to="/ContactFreelancePage"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-white text-blue-900 hover:bg-blue-50 rounded-xl font-medium transition-all shadow-lg"
                >
                  <Calendar className="w-5 h-5" />
                  Discuss Your NYC Project
                </Link>
                <a
                  href="tel:+12125551234"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition-all shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  +1 (212) 555-1234
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {['CTA','SEC','FINRA','NYC'].map((badge, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-amber-500 border-2 border-white/20 flex items-center justify-center text-xs font-bold">
                      {badge}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-blue-200">Trusted by New York's leading enterprises</span>
              </div>
            </motion.div>

            {/* Right Column - NYC Market Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <h2 className="text-2xl font-bold mb-4">New York: The Capital of Capital</h2>
              
              <p className="text-sm text-blue-200 mb-6">
                Global headquarters for finance, media, and technology. Home to 50+ Fortune 500 companies.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {nycStats.map((stat, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-3">
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-blue-200">{stat.label}</div>
                    {stat.description && (
                      <div className="text-xs text-blue-300/70">{stat.description}</div>
                    )}
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Landmark className="w-4 h-4 text-blue-400" />
                  <span>Wall Street • Financial District</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <TrendUp className="w-4 h-4 text-blue-400" />
                  <span>Silicon Alley • Flatiron District</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span>Media • Publishing • Advertising</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-blue-400" />
                  <p className="text-xs text-blue-200">
                    From Wall Street to Silicon Alley - I help New York's businesses scale.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NYC Locations */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="text-sm text-gray-500">Active across NYC:</span>
            {nycLocations.map((location, index) => (
              <div key={index} className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">{location}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-sm text-gray-500">Regulatory expertise:</span>
            {regulators.map((reg, index) => (
              <div key={index} className="bg-gray-100 rounded-full px-4 py-2">
                <span className="text-sm font-medium text-gray-700">{reg.name}</span>
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
              Expertise for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-600">New York's Diverse Economy</span>
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
                  <Icon className="w-8 h-8 text-blue-600 mb-3" />
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
                  <Icon className="w-8 h-8 text-blue-600 mb-3" />
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
              Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-600">NYC Projects</span>
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
                  <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
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
              Freelance <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-600">Services & Rates</span>
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
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-amber-600 flex items-center justify-center text-white font-bold">
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
              Freelance <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-600">FAQ</span>
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
      <section className="bg-gradient-to-r from-blue-800 to-amber-800 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to discuss your New York project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's meet in Manhattan or schedule a video call to discuss your architectural needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/ContactFreelancePage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 hover:bg-blue-50 font-medium rounded-full transition-all transform hover:scale-105"
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
            <p className="text-sm text-blue-200 mt-6">
              I'll respond within 2 hours - New York minute!
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SalesforceFreelanceArchitectNewYork;