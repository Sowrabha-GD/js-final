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
  Heart, Coffee, Palette, ShoppingBag
} from "lucide-react";

const SalesforceContractArchitectMelbourne = () => {
  const expertiseAreas = [
    {
      title: "Banking & Finance",
      description: "Expertise for Melbourne's financial district including ANZ, NAB, and Bendigo Bank",
      icon: Landmark
    },
    {
      title: "Superannuation & Wealth",
      description: "Deep experience with Australian super funds and wealth management firms",
      icon: Heart
    },
    {
      title: "Retail & Consumer Goods",
      description: "Solutions for Melbourne's thriving retail and consumer goods sector",
      icon: ShoppingBag
    },
    {
      title: "Technology & Startups",
      description: "Scalable architectures for Melbourne's growing tech scene",
      icon: Cpu
    }
  ];

  const benefits = [
    {
      icon: MapPin,
      title: "Melbourne Presence",
      description: "Regular on-site presence in Melbourne. I spend one week per month in the CBD."
    },
    {
      icon: Award,
      title: "CTA Certified",
      description: "Top 1% of Salesforce architects globally. Enterprise expertise for Victorian clients."
    },
    {
      icon: DollarSign,
      title: "Competitive Melbourne Rates",
      description: "$170-250/hour or $1,350-2,100/day AUD. Premium expertise for the Victorian market."
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
      rate: "$1,500-2,100/day AUD",
      deliverables: ["Solution blueprints", "Integration designs", "Data models", "Security architecture"]
    },
    {
      title: "Technical Advisory",
      description: "Strategic guidance for CTOs and technology leaders",
      rate: "$1,400-1,900/day AUD",
      deliverables: ["Architecture reviews", "Technology roadmap", "Governance framework", "Team mentoring"]
    },
    {
      title: "Implementation Support",
      description: "Hands-on architecture for critical projects",
      rate: "$1,300-1,700/day AUD",
      deliverables: ["Code reviews", "Performance tuning", "Security audits", "Go-live support"]
    },
    {
      title: "Org Assessment",
      description: "Comprehensive health check of your Salesforce org",
      rate: "$16,000-23,000 AUD fixed",
      deliverables: ["Technical debt analysis", "Performance benchmarks", "Security assessment", "Recommendations report"]
    }
  ];

  const testimonials = [
    {
      quote: "Jeet architected our retail banking platform with deep understanding of both Salesforce and Australian financial regulations. His work has been exceptional.",
      author: "Emma Thompson",
      role: "CTO",
      company: "Melbourne Bank",
      rating: 5,
      image: "ET"
    },
    {
      quote: "We needed a contract architect who understood the Melbourne market. Jeet delivered a solution that our retail clients love.",
      author: "James Wilson",
      role: "Head of Digital",
      company: "Victorian Retail Group",
      rating: 5,
      image: "JW"
    }
  ];

  const recentProjects = [
    {
      client: "Melbourne Bank",
      project: "Digital Banking Platform",
      duration: "10 months",
      rate: "$1,900/day",
      impact: "APRA-compliant, 500k+ customers onboarded"
    },
    {
      client: "Victorian Super Fund",
      project: "Member Portal",
      duration: "8 months",
      rate: "$1,700/day",
      impact: "300k+ members, 100% regulatory compliance"
    },
    {
      client: "Melbourne Retail Group",
      project: "Omnichannel Experience",
      duration: "6 months",
      rate: "$1,600/day",
      impact: "40% increase in online sales"
    }
  ];

  const melbourneLocations = [
    "Melbourne CBD",
    "Docklands",
    "Southbank",
    "St Kilda Road",
    "Richmond",
    "South Yarra"
  ];

  const melbourneStats = [
    { label: "Financial services firms", value: "500+" },
    { label: "Tech workers", value: "100,000+" },
    { label: "Retail HQs", value: "30+", description: "major retailers" },
    { label: "Super fund HQs", value: "15+", description: "industry funds" }
  ];

  const regulators = [
    { name: "APRA", description: "Australian Prudential Regulation Authority" },
    { name: "ASIC", description: "Australian Securities and Investments Commission" },
    { name: "AUSTRAC", description: "Financial intelligence agency" },
    { name: "Privacy Act", description: "Australian Privacy Principles" },
    { name: "RG 97", description: "APRA's outsourcing standard" },
    { name: "CPS 231", description: "APRA's outsourcing standard" }
  ];

  const melbourneStrengths = [
    { sector: "Banking & Finance", companies: "ANZ, NAB, Bendigo Bank", icon: Landmark },
    { sector: "Superannuation", companies: "AustralianSuper, UniSuper, HESTA", icon: Heart },
    { sector: "Retail", companies: "Woolworths, Coles, Myer, David Jones", icon: ShoppingBag },
    { sector: "Tech", companies: "REA Group, Carsales, Seek", icon: Cpu }
  ];

  const faqs = [
    {
      q: "How often can you be on-site in Melbourne?",
      a: "I typically spend one week per month in Melbourne, with additional visits as needed. I'm happy to work hybrid with regular on-site days for key meetings in the CBD or Docklands."
    },
    {
      q: "What's your day rate for Melbourne contracts?",
      a: "My standard day rate ranges from $1,350-2,100 AUD depending on scope and duration. Hourly rates also available at $170-250 AUD/hour."
    },
    {
      q: "Do you have experience with superannuation funds?",
      a: "Yes. I've worked with several of Australia's largest industry funds headquartered in Melbourne. I understand the unique regulatory and business requirements of super funds."
    },
    {
      q: "Can you help with retail and consumer goods?",
      a: "Absolutely. Melbourne is Australia's retail capital. I've architected omnichannel solutions for major retailers."
    }
  ];

  return (
    <Layout>
      {/* Hero Section - Melbourne Cultural Theme */}
      <section className="relative bg-gradient-to-br from-purple-800 via-fuchsia-700 to-pink-800 text-white overflow-hidden">
        {/* Melbourne Skyline Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
            <g fill="white">
              {/* Melbourne landmarks */}
              {/* Eureka Tower */}
              <rect x="200" y="80" width="30" height="220" />
              <rect x="215" y="60" width="30" height="240" />
              
              {/* Rialto */}
              <rect x="300" y="120" width="25" height="180" />
              
              {/* Flinders Street Station (simplified) */}
              <rect x="400" y="200" width="80" height="20" />
              <circle cx="420" cy="190" r="10" />
              <circle cx="460" cy="190" r="10" />
              
              {/* Arts Centre spire */}
              <rect x="550" y="100" width="10" height="200" />
              <circle cx="555" cy="90" r="15" />
              
              {/* Federation Square (abstract) */}
              <rect x="600" y="180" width="20" height="20" />
              <rect x="630" y="150" width="20" height="50" />
              <rect x="660" y="170" width="20" height="30" />
              
              {/* Yarra River */}
              <path d="M50 300 Q200 280, 400 300 Q600 320, 750 300" stroke="white" fill="none" strokeWidth="2" />
            </g>
          </svg>
        </div>

        {/* Floating Orbs - Cultural vibe */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>

        <div className="container-wide py-20 md:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-fuchsia-300" />
                <span className="text-fuchsia-200 font-medium">Melbourne CBD • Docklands • Southbank • St Kilda Road</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Salesforce Contract Architect
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-200 to-pink-200">
                  Melbourne • Victoria
                </span>
              </h1>
              
              <p className="text-xl text-fuchsia-100 mb-8">
                Enterprise Salesforce architecture for Melbourne's financial, retail, and superannuation sectors. $170-250/hour or $1,350-2,100/day AUD.
                APRA-compliant. Retail-ready. Superannuation expertise.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                
                 
              <Link
            to="/ContactFreelancePage"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-white text-fuchsia-900 hover:bg-fuchsia-50 rounded-xl font-medium transition-all shadow-lg"
                >
                  <Calendar className="w-5 h-5" />
                  Discuss Your Melbourne Project
                </Link>
                <a
                  href="tel:+61391234567"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition-all shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  +61 3 9123 4567
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {['CTA','APRA','ASIC','MEL'].map((badge, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-500 to-pink-500 border-2 border-white/20 flex items-center justify-center text-xs font-bold">
                      {badge}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-fuchsia-200">Trusted by Melbourne's leading enterprises</span>
              </div>
            </motion.div>

            {/* Right Column - Melbourne Market Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <h2 className="text-2xl font-bold mb-4">Melbourne: Australia's Cultural Capital</h2>
              
              <p className="text-sm text-fuchsia-200 mb-6">
                Home to ANZ, NAB, AustralianSuper, and Australia's largest retailers. A hub for finance, superannuation, and retail.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {melbourneStats.map((stat, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-3">
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-fuchsia-200">{stat.label}</div>
                    {stat.description && (
                      <div className="text-xs text-fuchsia-300/70">{stat.description}</div>
                    )}
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Landmark className="w-4 h-4 text-fuchsia-400" />
                  <span>Docklands • Financial precinct</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Heart className="w-4 h-4 text-fuchsia-400" />
                  <span>Super fund headquarters</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ShoppingBag className="w-4 h-4 text-fuchsia-400" />
                  <span>Chapel Street • Retail hub</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex items-center gap-2">
                  <Coffee className="w-5 h-5 text-fuchsia-400" />
                  <p className="text-xs text-fuchsia-200">
                    From Docklands to Southbank - I help Melbourne's businesses scale.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Melbourne Locations */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="text-sm text-gray-500">Active across Melbourne:</span>
            {melbourneLocations.map((location, index) => (
              <div key={index} className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-fuchsia-600" />
                <span className="text-sm font-medium text-gray-700">{location}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Melbourne Strengths */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {melbourneStrengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-6 h-6 text-fuchsia-600 mx-auto mb-1" />
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
              Expertise for <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">Melbourne's Diverse Economy</span>
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
                  <Icon className="w-8 h-8 text-fuchsia-600 mb-3" />
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
                  <Icon className="w-8 h-8 text-fuchsia-600 mb-3" />
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
              Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">Melbourne Projects</span>
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
                  <span className="text-xs font-semibold bg-fuchsia-100 text-fuchsia-700 px-2 py-1 rounded-full">
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
              Contract <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">Services & Rates</span>
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
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-600 to-pink-600 flex items-center justify-center text-white font-bold">
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

      {/* Melbourne Market Insight */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                Understanding <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">Melbourne's Market</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Melbourne is Australia's second-largest economy with strengths in banking, superannuation, and retail. I've helped major Melbourne institutions navigate regulatory requirements while delivering exceptional customer experiences.
              </p>
              <ul className="space-y-3">
                {[
                  "ANZ and NAB headquarters",
                  "AustralianSuper, UniSuper, HESTA - major industry funds",
                  "Woolworths, Coles, Myer, David Jones - retail giants",
                  "REA Group, Carsales, Seek - tech leaders",
                  "Victoria's startup ecosystem"
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
              className="bg-gradient-to-br from-fuchsia-50 to-pink-50 rounded-2xl p-8 border border-fuchsia-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Retail & Consumer Goods Expertise</h3>
              <p className="text-sm text-gray-600 mb-4">
                Melbourne is Australia's retail capital. I've architected omnichannel solutions for major retailers, including:
              </p>
              <div className="space-y-3">
                {[
                  "Omnichannel commerce platforms",
                  "Customer 360 for retail",
                  "Loyalty program integration",
                  "Inventory management",
                  "POS integration",
                  "Personalized marketing"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-600 mt-2"></div>
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
              Melbourne <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">FAQ</span>
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
      <section className="bg-gradient-to-r from-fuchsia-800 to-pink-800 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to discuss your Melbourne project?
            </h2>
            <p className="text-xl text-fuchsia-100 mb-8 max-w-2xl mx-auto">
              Let's meet in the CBD or schedule a video call to discuss your architectural needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              
                
              <Link
            to="/ContactFreelancePage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-fuchsia-900 hover:bg-fuchsia-50 font-medium rounded-full transition-all transform hover:scale-105"
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
            <p className="text-sm text-fuchsia-200 mt-6">
              I'll respond within 2 hours - Melbourne time!
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SalesforceContractArchitectMelbourne;