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
  PoundSterling, Banknote, FileText,
  Gauge, Activity
} from "lucide-react";

const SalesforceContractArchitectLondon = () => {
  const expertiseAreas = [
    {
      title: "Financial Services Architecture",
      description: "Specialized expertise for London's banking, insurance, and fintech sectors",
      icon: Landmark
    },
    {
      title: "IR35 & Compliance",
      description: "Deep understanding of UK contract regulations. Flexible Inside/Outside IR35 options.",
      icon: Shield
    },
    {
      title: "Enterprise Integration",
      description: "Connect Salesforce with legacy systems, trading platforms, and modern APIs",
      icon: Cloud
    },
    {
      title: "Digital Transformation",
      description: "End-to-end Salesforce strategy for London's leading enterprises",
      icon: Rocket
    }
  ];

  const contractOptions = [
    {
      type: "Outside IR35",
      description: "For genuine business-to-business engagements through your Ltd company",
      icon: CheckCircle,
      rate: "£900-1,200/day"
    },
    {
      type: "Inside IR35",
      description: "Available via umbrella companies if preferred by your organization",
      icon: Shield,
      rate: "£800-1,000/day"
    },
    {
      type: "Fixed-Price Project",
      description: "Defined scope, timeline, and deliverables for specific initiatives",
      icon: Target,
      rate: "Project-based"
    },
    {
      type: "Retainer",
      description: "Monthly block of days for ongoing architectural guidance",
      icon: Calendar,
      rate: "From £8,000/month"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Immediate Availability",
      description: "Can start within 1-2 weeks. Hybrid working with regular on-site visits to London."
    },
    {
      icon: Award,
      title: "CTA Certified",
      description: "Top 1% of Salesforce architects globally. True enterprise expertise for UK clients."
    },
    {
      icon: Banknote,
      title: "Competitive Day Rates",
      description: "£800-1,200/day with flexible contracting options to suit your budget."
    },
    {
      icon: FileText,
      title: "IR35 Clarity",
      description: "Clear guidance on contract status. No ambiguity, no surprises."
    }
  ];

  const services = [
    {
      title: "Solution Architecture",
      description: "End-to-end solution design for complex London enterprise requirements",
      rate: "£900-1,100/day",
      deliverables: ["Solution blueprints", "Integration designs", "Data models", "Security architecture"]
    },
    {
      title: "Technical Advisory",
      description: "Strategic guidance for CTOs and technology leaders",
      rate: "£1,000-1,200/day",
      deliverables: ["Architecture reviews", "Technology roadmap", "Governance framework", "Team mentoring"]
    },
    {
      title: "Implementation Support",
      description: "Hands-on architecture for critical projects",
      rate: "£850-1,050/day",
      deliverables: ["Code reviews", "Performance tuning", "Security audits", "Go-live support"]
    },
    {
      title: "Org Assessment",
      description: "Comprehensive health check of your Salesforce org",
      rate: "£8,000-12,000 fixed",
      deliverables: ["Technical debt analysis", "Performance benchmarks", "Security assessment", "Recommendations report"]
    }
  ];

  const testimonials = [
    {
      quote: "Jeet has been our go-to contract architect for two major financial services implementations. His understanding of both Salesforce and UK regulations is exceptional. He's reliable, professional, and delivers on time.",
      author: "Jonathan Reeves",
      role: "CTO",
      company: "London Investment Bank",
      rating: 5,
      image: "JR"
    },
    {
      quote: "The IR35 clarity Jeet provided made engagement simple. He worked seamlessly with our team, mostly remotely with monthly on-site visits. A true enterprise architect.",
      author: "Sarah Williamson",
      role: "Head of Digital Transformation",
      company: "UK Retail Group",
      rating: 5,
      image: "SW"
    }
  ];

  const recentContracts = [
    {
      client: "Canary Wharf Investment Bank",
      project: "Wealth Management Platform",
      duration: "6 months",
      rate: "Outside IR35",
      impact: "Reduced client onboarding from 2 weeks to 48 hours"
    },
    {
      client: "London FinTech Scale-up",
      project: "Multi-org Consolidation",
      duration: "4 months",
      rate: "Fixed-price",
      impact: "Unified 3 orgs, saved £500k annually"
    },
    {
      client: "City Insurance Group",
      project: "Claims Processing System",
      duration: "8 months",
      rate: "Inside IR35",
      impact: "Automated 80% of claims, reduced processing time by 70%"
    }
  ];

  const faqs = [
    {
      q: "What's your availability for London contracts?",
      a: "I'm typically available to start within 1-2 weeks. I prioritize London clients and can accommodate urgent requirements. I'm happy to work hybrid with regular on-site visits."
    },
    {
      q: "Do you work Inside or Outside IR35?",
      a: "Both. I have experience with Inside IR35 engagements through umbrella companies, and Outside IR35 through my Ltd company. I'll work with you to choose the best option."
    },
    {
      q: "Can you work remotely or do you need to be on-site?",
      a: "I'm flexible. I typically work remotely with monthly on-site visits to London for key meetings and workshops. I'm happy to adjust based on your preferences."
    },
    {
      q: "What's your day rate for London contracts?",
      a: "My standard day rate ranges from £800-1,200 depending on scope, duration, and IR35 status. Fixed-price projects and retainers also available."
    }
  ];

  const londonBoroughs = [
    "City of London", "Canary Wharf", "West End", "Shoreditch", "South Bank", "Kings Cross"
  ];

  return (
    <Layout>
      {/* Hero Section - London Financial District Theme */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Abstract London Skyline Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
            <g fill="white">
              {/* The Shard */}
              <polygon points="200,80 215,80 230,280 185,280" />
              {/* Gherkin */}
              <rect x="300" y="120" width="25" height="180" rx="12" />
              <circle cx="312.5" cy="110" r="12" fill="white" />
              {/* Walkie Talkie */}
              <rect x="400" y="100" width="35" height="200" />
              {/* Cheese Grater */}
              <rect x="500" y="140" width="20" height="160" />
              <rect x="520" y="120" width="20" height="180" />
              {/* Canary Wharf */}
              <rect x="600" y="60" width="30" height="240" />
              <rect x="650" y="80" width="30" height="220" />
            </g>
          </svg>
        </div>

        {/* Floating Orbs - Thames Reflection Effect */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>

        <div className="container-wide py-20 md:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-blue-300" />
                <span className="text-blue-200 font-medium">City of London • Canary Wharf • West End</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Salesforce Contract Architect
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">
                  London & UK
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8">
                Enterprise-grade Salesforce architecture on contract. £800-1,200/day. 
                IR35 flexible. Immediate availability for London's leading financial institutions and enterprises.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
               <Link
            to="/ContactFreelancePage"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 hover:bg-blue-50 rounded-xl font-medium transition-all shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  Discuss Your Contract Role
                </Link>
                <a
                  href="tel:+442071234567"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl font-medium transition-all border border-white/20"
                >
                  <Phone className="w-4 h-4" />
                  +44 20 7123 4567
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {['CTA','FCA','IR35','GDPR'].map((badge, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 border-2 border-white/20 flex items-center justify-center text-xs font-bold">
                      {badge}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-blue-200">Trusted by London's leading enterprises</span>
              </div>
            </motion.div>

            {/* Right Column - Contract Options Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <h2 className="text-2xl font-bold mb-6">Contract Options</h2>
              
              <div className="space-y-4 mb-6">
                {contractOptions.map((option, index) => {
                  const Icon = option.icon;
                  return (
                    <div key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl">
                      <Icon className="w-5 h-5 text-green-400 mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-white">{option.type}</h3>
                          <span className="text-sm font-bold text-green-400">{option.rate}</span>
                        </div>
                        <p className="text-xs text-blue-200">{option.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-green-500/20 rounded-lg p-4 border border-green-500/30">
                <div className="flex items-center gap-2 text-sm">
                  <Activity className="w-4 h-4 text-green-400" />
                  <span className="text-green-300">Currently available for London contracts</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Boroughs Served */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="text-sm text-gray-500">Active in:</span>
            {londonBoroughs.map((borough, index) => (
              <div key={index} className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">{borough}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16">
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
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200"
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

      {/* Recent Contracts */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">London Contracts</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Recent engagements with London-based enterprises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentContracts.map((contract, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900">{contract.client}</h3>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {contract.rate}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{contract.project}</p>
                <p className="text-xs text-gray-500 mb-2">Duration: {contract.duration}</p>
                <p className="text-xs text-green-600 font-semibold">{contract.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services with Rates */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Contract <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Services & Rates</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Clear, transparent pricing for London contracts
            </p>
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
                      <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
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
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
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
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">
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
      <section className="bg-white py-16">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Contract <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">FAQ</span>
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
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Need a Contract Architect in London?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and find the right engagement model for your project.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
            to="/ContactFreelancePage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 hover:bg-blue-50 font-medium rounded-full transition-all transform hover:scale-105"
              >
                <Calendar className="w-4 h-4" />
                Schedule a Call
              </Link>
              <Link
            to="/ContactFreelancePage"
              
            
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full font-medium transition-all border border-white/20"
              >
                <Mail className="w-4 h-4" />
                Send Enquiry
              </Link>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              Typically respond within 2 hours during London business hours
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SalesforceContractArchitectLondon;