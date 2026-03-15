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
  Sun, Coffee, Umbrella, Ship
} from "lucide-react";

const SalesforceFreelanceArchitectSydney = () => {
  const expertiseAreas = [
    {
      title: "Banking & Financial Services",
      description: "Specialized expertise for Sydney's banking sector including Westpac, CBA, and Macquarie",
      icon: Landmark
    },
    {
      title: "Insurance & Superannuation",
      description: "Deep experience with Australian insurance and superannuation funds",
      icon: Shield
    },
    {
      title: "Technology & Startups",
      description: "Scalable architectures for Sydney's thriving tech scene",
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
      title: "Sydney Presence",
      description: "Regular on-site presence in Sydney. I spend one week per month in the CBD."
    },
    {
      icon: Award,
      title: "CTA Certified",
      description: "Top 1% of Salesforce architects globally. Enterprise expertise for Australian clients."
    },
    {
      icon: DollarSign,
      title: "Competitive Sydney Rates",
      description: "$180-260/hour or $1,400-2,200/day AUD. Premium expertise for the Australian market."
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
      rate: "$1,600-2,200/day AUD",
      deliverables: ["Solution blueprints", "Integration designs", "Data models", "Security architecture"]
    },
    {
      title: "Technical Advisory",
      description: "Strategic guidance for CTOs and technology leaders",
      rate: "$1,500-2,000/day AUD",
      deliverables: ["Architecture reviews", "Technology roadmap", "Governance framework", "Team mentoring"]
    },
    {
      title: "Implementation Support",
      description: "Hands-on architecture for critical projects",
      rate: "$1,400-1,800/day AUD",
      deliverables: ["Code reviews", "Performance tuning", "Security audits", "Go-live support"]
    },
    {
      title: "Org Assessment",
      description: "Comprehensive health check of your Salesforce org",
      rate: "$18,000-25,000 AUD fixed",
      deliverables: ["Technical debt analysis", "Performance benchmarks", "Security assessment", "Recommendations report"]
    }
  ];

  const testimonials = [
    {
      quote: "Jeet architected our banking platform with deep understanding of both Salesforce and Australian financial regulations. His work has been exceptional.",
      author: "David Chen",
      role: "CTO",
      company: "Sydney Investment Bank",
      rating: 5,
      image: "DC"
    },
    {
      quote: "We needed a freelance architect who understood the Australian market. Jeet delivered ahead of schedule and under budget.",
      author: "Sarah Williams",
      role: "Head of Digital",
      company: "Australian Insurance Group",
      rating: 5,
      image: "SW"
    }
  ];

  const recentProjects = [
    {
      client: "Sydney Investment Bank",
      project: "Wealth Management Platform",
      duration: "10 months",
      rate: "$2,000/day",
      impact: "APRA-compliant, 200+ advisors onboarded"
    },
    {
      client: "Australian Super Fund",
      project: "Member Portal",
      duration: "8 months",
      rate: "$1,800/day",
      impact: "500k+ members migrated, 100% compliant"
    },
    {
      client: "Sydney Tech Startup",
      project: "Scalable Architecture",
      duration: "6 months",
      rate: "$1,600/day",
      impact: "Supported 400% user growth"
    }
  ];

  const sydneyLocations = [
    "Sydney CBD",
    "Barangaroo",
    "North Sydney",
    "Macquarie Park",
    "Parramatta",
    "Chatswood"
  ];

  const sydneyStats = [
    { label: "Financial services HQs", value: "40+" },
    { label: "Tech workers", value: "120,000+" },
    { label: "Startups", value: "2,000+" },
    { label: "AUM in super funds", value: "$3.5T+", description: "Australia wide" }
  ];

  const regulators = [
    { name: "APRA", description: "Australian Prudential Regulation Authority" },
    { name: "ASIC", description: "Australian Securities and Investments Commission" },
    { name: "AUSTRAC", description: "Financial intelligence agency" },
    { name: "Privacy Act", description: "Australian Privacy Principles" },
    { name: "RG 97", description: "APRA's outsourcing standard" },
    { name: "CPS 231", description: "APRA's outsourcing standard" }
  ];

  const faqs = [
    {
      q: "How often can you be on-site in Sydney?",
      a: "I typically spend one week per month in Sydney, with additional visits as needed. I'm happy to work hybrid with regular on-site days for key meetings in the CBD or Barangaroo."
    },
    {
      q: "What's your day rate for Sydney contracts?",
      a: "My standard day rate ranges from $1,400-2,200 AUD depending on scope and duration. Hourly rates also available at $180-260 AUD/hour."
    },
    {
      q: "Do you understand Australian regulations?",
      a: "Absolutely. I have extensive experience with APRA, ASIC, and AUSTRAC requirements for Australian banks, insurers, and superannuation funds."
    },
    {
      q: "How quickly can you start?",
      a: "Typically within 1-2 weeks. I prioritize Australian clients and can accommodate urgent timelines."
    }
  ];

  return (
    <Layout>
      {/* Hero Section - Sydney Harbour Theme */}
      <section className="relative bg-gradient-to-br from-blue-800 via-cyan-700 to-teal-800 text-white overflow-hidden">
        {/* Sydney Harbour Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
            <g stroke="white" strokeWidth="2" fill="none">
              {/* Sydney Opera House sails */}
              <path d="M200 250 L220 150 L240 250" fill="white" stroke="white" />
              <path d="M240 250 L260 150 L280 250" fill="white" stroke="white" />
              <path d="M280 250 L300 150 L320 250" fill="white" stroke="white" />
              
              {/* Harbour Bridge */}
              <path d="M400 200 L450 180 L500 200 L550 180 L600 200" stroke="white" fill="none" strokeWidth="3" />
              <line x1="400" y1="200" x2="600" y2="200" stroke="white" strokeWidth="2" />
              
              {/* CBD skyline */}
              <rect x="500" y="120" width="20" height="80" fill="white" />
              <rect x="530" y="100" width="20" height="100" fill="white" />
              <rect x="560" y="80" width="20" height="120" fill="white" />
              <rect x="590" y="110" width="20" height="90" fill="white" />
              
              {/* Waves */}
              <path d="M50 300 Q100 280, 150 300 Q200 320, 250 300 Q300 280, 350 300" stroke="white" fill="none" />
            </g>
          </svg>
        </div>

        {/* Floating Orbs - Harbour lights */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>

        <div className="container-wide py-20 md:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-cyan-300" />
                <span className="text-cyan-200 font-medium">Sydney CBD • Barangaroo • North Sydney • Parramatta</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Salesforce Freelance Architect
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-teal-200">
                  Sydney • Australia
                </span>
              </h1>
              
              <p className="text-xl text-cyan-100 mb-8">
                Enterprise Salesforce architecture for Australian financial services and tech. $180-260/hour or $1,400-2,200/day AUD.
                APRA-compliant. ASIC-ready. Superannuation expertise.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
               
              <Link
            to="/ContactFreelancePage"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-white text-cyan-900 hover:bg-cyan-50 rounded-xl font-medium transition-all shadow-lg"
                >
                  <Calendar className="w-5 h-5" />
                  Discuss Your Sydney Project
                </Link>
                <a
                  href="tel:+61291234567"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition-all shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  +61 2 9123 4567
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {['CTA','APRA','ASIC','SYD'].map((badge, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 border-2 border-white/20 flex items-center justify-center text-xs font-bold">
                      {badge}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-cyan-200">Trusted by Sydney's leading enterprises</span>
              </div>
            </motion.div>

            {/* Right Column - Sydney Market Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <h2 className="text-2xl font-bold mb-4">Sydney: Financial Capital of Australia</h2>
              
              <p className="text-sm text-cyan-200 mb-6">
                Home to 40+ financial services HQs, including CBA, Westpac, and Macquarie. $3.5T+ in superannuation assets nationally.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {sydneyStats.map((stat, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-3">
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-cyan-200">{stat.label}</div>
                    {stat.description && (
                      <div className="text-xs text-cyan-300/70">{stat.description}</div>
                    )}
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Landmark className="w-4 h-4 text-cyan-400" />
                  <span>Barangaroo • New financial precinct</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Ship className="w-4 h-4 text-cyan-400" />
                  <span>Circular Quay • CBD core</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Coffee className="w-4 h-4 text-cyan-400" />
                  <span>North Sydney • Growing tech hub</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex items-center gap-2">
                  <Umbrella className="w-5 h-5 text-cyan-400" />
                  <p className="text-xs text-cyan-200">
                    From Barangaroo to Macquarie Park - I help Sydney's businesses scale.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sydney Locations */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="text-sm text-gray-500">Active across Sydney:</span>
            {sydneyLocations.map((location, index) => (
              <div key={index} className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-600" />
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
              Expertise for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">Australian Enterprises</span>
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
                  <Icon className="w-8 h-8 text-cyan-600 mb-3" />
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
                  <Icon className="w-8 h-8 text-cyan-600 mb-3" />
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
              Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">Sydney Projects</span>
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
                  <span className="text-xs font-semibold bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full">
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
              Freelance <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">Services & Rates</span>
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
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-600 to-teal-600 flex items-center justify-center text-white font-bold">
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

      {/* Australian Market Insight */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                Understanding the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">Australian Market</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Australia's financial services and superannuation sectors have unique regulatory requirements. I've helped major Australian institutions navigate APRA, ASIC, and AUSTRAC compliance while delivering world-class Salesforce solutions.
              </p>
              <ul className="space-y-3">
                {[
                  "APRA Prudential Standards (CPS 231, SPS 231)",
                  "ASIC Regulatory Guides (RG 97, RG 209)",
                  "Superannuation Industry (Supervisory) Act",
                  "Privacy Act and Australian Privacy Principles",
                  "Anti-Money Laundering and Counter-Terrorism Financing Act"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 border border-cyan-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Superannuation Expertise</h3>
              <p className="text-sm text-gray-600 mb-4">
                Australia's $3.5 trillion superannuation sector requires specialized knowledge. I've architected solutions for industry funds, retail funds, and self-managed super funds.
              </p>
              <div className="space-y-3">
                {[
                  "Member 360 for super funds",
                  "Compliance reporting for APRA",
                  "Contribution and rollover processing",
                  "Retirement income solutions",
                  "Insurance integration within super"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-2"></div>
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Australian <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">FAQ</span>
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
      <section className="bg-gradient-to-r from-cyan-800 to-teal-800 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to discuss your Sydney project?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let's meet in Barangaroo or schedule a video call to discuss your architectural needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/ContactFreelancePage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-900 hover:bg-cyan-50 font-medium rounded-full transition-all transform hover:scale-105"
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
            <p className="text-sm text-cyan-200 mt-6">
              I'll respond within 2 hours - Sydney time!
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SalesforceFreelanceArchitectSydney;