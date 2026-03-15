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
  Sun, Droplets, TreePine, Warehouse
} from "lucide-react";

const SalesforceTechnicalArchitectBrisbane = () => {
  const expertiseAreas = [
    {
      title: "Mining & Resources",
      description: "Specialized expertise for Queensland's mining and resources sector",
      icon: Warehouse
    },
    {
      title: "Government & Public Sector",
      description: "Experience with Queensland Government and local councils",
      icon: Landmark
    },
    {
      title: "Banking & Insurance",
      description: "Solutions for Brisbane's growing financial services sector",
      icon: Shield
    },
    {
      title: "Technology & Startups",
      description: "Scalable architectures for Brisbane's emerging tech scene",
      icon: Cpu
    }
  ];

  const benefits = [
    {
      icon: MapPin,
      title: "Brisbane Presence",
      description: "Regular on-site presence in Brisbane. I spend one week per month in the CBD."
    },
    {
      icon: Award,
      title: "CTA Certified",
      description: "Top 1% of Salesforce architects globally. Enterprise expertise for Queensland clients."
    },
    {
      icon: DollarSign,
      title: "Competitive Brisbane Rates",
      description: "$160-240/hour or $1,300-2,000/day AUD. Premium expertise for the Queensland market."
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
      rate: "$1,400-2,000/day AUD",
      deliverables: ["Solution blueprints", "Integration designs", "Data models", "Security architecture"]
    },
    {
      title: "Technical Advisory",
      description: "Strategic guidance for CTOs and technology leaders",
      rate: "$1,300-1,800/day AUD",
      deliverables: ["Architecture reviews", "Technology roadmap", "Governance framework", "Team mentoring"]
    },
    {
      title: "Implementation Support",
      description: "Hands-on architecture for critical projects",
      rate: "$1,200-1,600/day AUD",
      deliverables: ["Code reviews", "Performance tuning", "Security audits", "Go-live support"]
    },
    {
      title: "Org Assessment",
      description: "Comprehensive health check of your Salesforce org",
      rate: "$15,000-22,000 AUD fixed",
      deliverables: ["Technical debt analysis", "Performance benchmarks", "Security assessment", "Recommendations report"]
    }
  ];

  const testimonials = [
    {
      quote: "Jeet architected our resources management platform with deep understanding of both Salesforce and Queensland's mining sector. His work has been exceptional.",
      author: "Michael Thompson",
      role: "CTO",
      company: "Queensland Mining Group",
      rating: 5,
      image: "MT"
    },
    {
      quote: "We needed a technical architect who understood government requirements. Jeet delivered a solution that met all our compliance needs.",
      author: "Jennifer Lee",
      role: "Digital Director",
      company: "Queensland Government Agency",
      rating: 5,
      image: "JL"
    }
  ];

  const recentProjects = [
    {
      client: "Queensland Mining Corp",
      project: "Operations Platform",
      duration: "12 months",
      rate: "$1,800/day",
      impact: "Real-time data from 50+ mine sites"
    },
    {
      client: "Brisbane City Council",
      project: "Citizen Portal",
      duration: "8 months",
      rate: "$1,600/day",
      impact: "500k+ citizens served"
    },
    {
      client: "Brisbane FinTech",
      project: "Banking Platform",
      duration: "6 months",
      rate: "$1,500/day",
      impact: "APRA-compliant, launched in 6 months"
    }
  ];

  const brisbaneLocations = [
    "Brisbane CBD",
    "Fortitude Valley",
    "South Bank",
    "Milton",
    "Newstead",
    "Teneriffe"
  ];

  const brisbaneStats = [
    { label: "Mining HQs", value: "40+", description: "ASX-listed miners" },
    { label: "Government agencies", value: "20+" },
    { label: "Tech workers", value: "50,000+" },
    { label: "Startups", value: "1,000+" }
  ];

  const regulators = [
    { name: "APRA", description: "Australian Prudential Regulation Authority" },
    { name: "ASIC", description: "Australian Securities and Investments Commission" },
    { name: "Queensland Govt", description: "State Government requirements" },
    { name: "Privacy Act", description: "Australian Privacy Principles" },
    { name: "WHS", description: "Workplace Health & Safety" },
    { name: "Environmental", description: "Environmental regulations" }
  ];

  const queenslandStrengths = [
    { sector: "Mining & Resources", companies: "BHP, Rio Tinto, Glencore", icon: Warehouse },
    { sector: "Government", companies: "Queensland Govt, Brisbane City Council", icon: Landmark },
    { sector: "Banking", companies: "BOQ, Suncorp", icon: Shield },
    { sector: "Tech", companies: "TechnologyOne, Go1", icon: Cpu }
  ];

  const faqs = [
    {
      q: "How often can you be on-site in Brisbane?",
      a: "I typically spend one week per month in Brisbane, with additional visits as needed. I'm happy to work hybrid with regular on-site days for key meetings in the CBD or Fortitude Valley."
    },
    {
      q: "What's your day rate for Brisbane contracts?",
      a: "My standard day rate ranges from $1,300-2,000 AUD depending on scope and duration. Hourly rates also available at $160-240 AUD/hour."
    },
    {
      q: "Do you have experience with the mining sector?",
      a: "Yes. I've worked with several of Queensland's largest mining companies. I understand the unique operational and compliance requirements of the resources sector."
    },
    {
      q: "Can you help with government projects?",
      a: "Absolutely. I have experience with Queensland Government agencies and understand public sector procurement, compliance, and delivery requirements."
    }
  ];

  return (
    <Layout>
      {/* Hero Section - Brisbane River City Theme */}
      <section className="relative bg-gradient-to-br from-emerald-800 via-green-700 to-teal-800 text-white overflow-hidden">
        {/* Brisbane Skyline Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
            <g fill="white">
              {/* Story Bridge */}
              <path d="M200 250 Q300 180, 400 250" stroke="white" strokeWidth="3" fill="none" />
              <line x1="200" y1="250" x2="400" y2="250" stroke="white" strokeWidth="2" />
              
              {/* CBD towers */}
              <rect x="450" y="150" width="20" height="100" fill="white" />
              <rect x="480" y="130" width="20" height="120" fill="white" />
              <rect x="510" y="110" width="20" height="140" fill="white" />
              <rect x="540" y="140" width="20" height="110" fill="white" />
              
              {/* Kangaroo Point Cliffs (abstract) */}
              <rect x="100" y="200" width="40" height="50" fill="white" />
              <rect x="120" y="180" width="40" height="70" fill="white" />
              
              {/* Brisbane River */}
              <path d="M50 300 Q150 280, 300 300 Q450 320, 600 300" stroke="white" fill="none" strokeWidth="2" />
              
              {/* Trees - representing subtropical climate */}
              <circle cx="50" cy="150" r="15" fill="white" />
              <rect x="45" y="160" width="10" height="30" fill="white" />
              <circle cx="700" cy="200" r="20" fill="white" />
              <rect x="695" y="210" width="10" height="40" fill="white" />
            </g>
          </svg>
        </div>

        {/* Floating Orbs - Subtropical vibe */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl"></div>

        <div className="container-wide py-20 md:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-emerald-300" />
                <span className="text-emerald-200 font-medium">Brisbane CBD • Fortitude Valley • South Bank • Milton</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Salesforce Technical Architect
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-200">
                  Brisbane • Queensland
                </span>
              </h1>
              
              <p className="text-xl text-emerald-100 mb-8">
                Enterprise Salesforce architecture for Queensland's mining, government, and financial sectors. $160-240/hour or $1,300-2,000/day AUD.
                Mining-ready. Government-compliant. Financial services expertise.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                
              <Link
            to="/ContactFreelancePage"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-white text-emerald-900 hover:bg-emerald-50 rounded-xl font-medium transition-all shadow-lg"
                >
                  <Calendar className="w-5 h-5" />
                  Discuss Your Brisbane Project
                </Link>
                <a
                  href="tel:+61791234567"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition-all shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  +61 7 9123 4567
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {['CTA','APRA','QLD','BNE'].map((badge, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 border-2 border-white/20 flex items-center justify-center text-xs font-bold">
                      {badge}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-emerald-200">Trusted by Queensland's leading enterprises</span>
              </div>
            </motion.div>

            {/* Right Column - Brisbane Market Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <h2 className="text-2xl font-bold mb-4">Brisbane: River City</h2>
              
              <p className="text-sm text-emerald-200 mb-6">
                Capital of Queensland, hub for mining, government, and emerging tech. Home to 40+ mining HQs and BOQ, Suncorp.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {brisbaneStats.map((stat, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-3">
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-emerald-200">{stat.label}</div>
                    {stat.description && (
                      <div className="text-xs text-emerald-300/70">{stat.description}</div>
                    )}
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Warehouse className="w-4 h-4 text-emerald-400" />
                  <span>Mining HQs • Resources sector</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Landmark className="w-4 h-4 text-emerald-400" />
                  <span>Government • State & Local</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Droplets className="w-4 h-4 text-emerald-400" />
                  <span>River City • Lifestyle hub</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex items-center gap-2">
                  <Sun className="w-5 h-5 text-emerald-400" />
                  <p className="text-xs text-emerald-200">
                    From the CBD to Fortitude Valley - I help Brisbane's businesses scale.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brisbane Locations */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="text-sm text-gray-500">Active across Brisbane:</span>
            {brisbaneLocations.map((location, index) => (
              <div key={index} className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-medium text-gray-700">{location}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Queensland Strengths */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {queenslandStrengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
                  <div className="text-sm font-medium text-gray-900">{strength.sector}</div>
                  <div className="text-xs text-gray-500">{strength.companies}</div>
                </div>
              );
            })}
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
              Expertise for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Queensland's Economy</span>
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
                  <Icon className="w-8 h-8 text-emerald-600 mb-3" />
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
                  <Icon className="w-8 h-8 text-emerald-600 mb-3" />
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
              Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Brisbane Projects</span>
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
                  <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
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
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Services & Rates</span>
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
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white font-bold">
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

      {/* Queensland Market Insight */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                Understanding <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Queensland's Market</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Queensland's economy is driven by mining, resources, government, and a growing tech sector. I've helped major Queensland organizations navigate their unique operational and compliance requirements.
              </p>
              <ul className="space-y-3">
                {[
                  "40+ ASX-listed mining companies",
                  "Queensland Government and local councils",
                  "BOQ, Suncorp - financial services",
                  "Emerging tech hub in Brisbane",
                  "Resources sector supply chain"
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
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mining & Resources Expertise</h3>
              <p className="text-sm text-gray-600 mb-4">
                Queensland's mining sector has unique requirements. I've architected solutions for major miners, including:
              </p>
              <div className="space-y-3">
                {[
                  "Operations platform with real-time data from 50+ mine sites",
                  "Supply chain visibility and optimization",
                  "Workforce management and safety compliance",
                  "Environmental reporting and compliance",
                  "Asset management and predictive maintenance",
                  "Contractor and supplier portals"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2"></div>
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
              Brisbane <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">FAQ</span>
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
      <section className="bg-gradient-to-r from-emerald-800 to-teal-800 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to discuss your Brisbane project?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Let's meet in the CBD or schedule a video call to discuss your architectural needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/ContactFreelancePage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-900 hover:bg-emerald-50 font-medium rounded-full transition-all transform hover:scale-105"
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
            <p className="text-sm text-emerald-200 mt-6">
              I'll respond within 2 hours - Brisbane time!
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SalesforceTechnicalArchitectBrisbane;