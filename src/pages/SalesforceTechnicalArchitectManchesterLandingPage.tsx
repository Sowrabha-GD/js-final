import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Award, Briefcase, Clock, MapPin,
  CheckCircle, ArrowRight, Star, TrendingUp,
  Globe, Users, Building2, Phone,
  Mail, Calendar, Shield, Zap,
  Rocket, Target, Sparkles, Factory,
  BarChart, Cloud, Server, Code,
  PoundSterling, Gauge, Cpu, Wifi
} from "lucide-react";

const SalesforceTechnicalArchitectManchester = () => {
  const expertiseAreas = [
    {
      title: "Northern Powerhouse",
      description: "Specialized expertise for Manchester's growing tech, finance, and manufacturing sectors",
      icon: Factory
    },
    {
      title: "Technical Architecture",
      description: "Scalable, performant solutions for high-growth Manchester enterprises",
      icon: Cpu
    },
    {
      title: "Integration Architecture",
      description: "Connect Salesforce with legacy systems, ERPs, and modern APIs",
      icon: Cloud
    },
    {
      title: "Digital Transformation",
      description: "End-to-end Salesforce strategy for Northern enterprises",
      icon: Rocket
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Manchester-Based Availability",
      description: "Regular on-site presence in Manchester. I spend one week per month in the North West."
    },
    {
      icon: Award,
      title: "CTA Certified",
      description: "Top 1% of Salesforce architects globally. Enterprise expertise for Manchester's growing businesses."
    },
    {
      icon: PoundSterling,
      title: "Competitive Northern Rates",
      description: "£700-1,000/day. Premium expertise at rates that make sense for Northern budgets."
    },
    {
      icon: Wifi,
      title: "Flexible Working",
      description: "Hybrid model - remote with regular Manchester on-site days as needed."
    }
  ];

  const services = [
    {
      title: "Technical Architecture",
      description: "End-to-end technical design for complex Manchester enterprise requirements",
      rate: "£800-1,000/day",
      deliverables: ["System architecture", "Integration designs", "Data models", "Security architecture"]
    },
    {
      title: "Solution Architecture",
      description: "Solution design aligned with Northern business needs",
      rate: "£750-950/day",
      deliverables: ["Solution blueprints", "Technical specifications", "Platform governance", "Best practices"]
    },
    {
      title: "Implementation Support",
      description: "Hands-on architecture for critical projects",
      rate: "£700-900/day",
      deliverables: ["Code reviews", "Performance tuning", "Security audits", "Go-live support"]
    },
    {
      title: "Org Assessment",
      description: "Comprehensive health check of your Salesforce org",
      rate: "£6,000-10,000 fixed",
      deliverables: ["Technical debt analysis", "Performance benchmarks", "Security assessment", "Recommendations report"]
    }
  ];

  const testimonials = [
    {
      quote: "Jeet has been instrumental in scaling our Salesforce architecture as we've grown from startup to scale-up. His technical depth and Manchester availability made him the perfect choice.",
      author: "David Mitchell",
      role: "CTO",
      company: "Manchester Tech Scale-up",
      rating: 5,
      image: "DM"
    },
    {
      quote: "We needed a technical architect who understood both Salesforce and manufacturing. Jeet delivered a solution that integrated perfectly with our legacy systems.",
      author: "Sarah Thompson",
      role: "Head of Digital",
      company: "Northern Manufacturing Group",
      rating: 5,
      image: "ST"
    }
  ];

  const recentProjects = [
    {
      client: "Manchester FinTech",
      project: "Scalable Architecture Design",
      duration: "4 months",
      impact: "Supported 300% user growth with zero downtime"
    },
    {
      client: "Northern Retail Chain",
      project: "Multi-system Integration",
      duration: "6 months",
      impact: "Connected Salesforce with 8 legacy systems"
    },
    {
      client: "MediaCityUK Digital Agency",
      project: "Platform Optimization",
      duration: "3 months",
      impact: "40% performance improvement"
    }
  ];

  const manchesterLocations = [
    "Manchester City Centre",
    "MediaCityUK, Salford",
    "Trafford Park",
    "Spinningfields",
    "Northern Quarter",
    "Oxford Road Corridor"
  ];

  const faqs = [
    {
      q: "How often can you be on-site in Manchester?",
      a: "I typically spend one week per month in Manchester/North West, with additional visits as needed. I'm happy to work hybrid with regular on-site days for key meetings."
    },
    {
      q: "What's your day rate for Manchester contracts?",
      a: "My standard day rate ranges from £700-1,000 depending on scope and duration. I offer competitive rates for Northern-based businesses."
    },
    {
      q: "Do you work with startups as well as enterprises?",
      a: "Absolutely. I love working with Manchester's thriving startup and scale-up community. I offer flexible engagements tailored to earlier-stage companies."
    },
    {
      q: "Can you work with our existing team remotely?",
      a: "Yes. I'm experienced in remote collaboration and can integrate seamlessly with your existing team, whether they're in Manchester or distributed."
    }
  ];

  return (
    <Layout>
      {/* Hero Section - Manchester Industrial-Meets-Digital Theme */}
      <section className="relative bg-gradient-to-br from-amber-800 via-orange-700 to-red-700 text-white overflow-hidden">
        {/* Industrial Pattern - Manchester's heritage */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
            <g stroke="white" strokeWidth="2" fill="none">
              {/* Factory chimneys - industrial heritage */}
              <rect x="100" y="250" width="20" height="100" fill="white" />
              <rect x="150" y="200" width="20" height="150" fill="white" />
              <rect x="200" y="220" width="20" height="130" fill="white" />
              <rect x="250" y="180" width="30" height="170" fill="white" />
              <rect x="320" y="200" width="20" height="150" fill="white" />
              
              {/* Modern tech elements - digital future */}
              <circle cx="500" cy="200" r="30" stroke="white" />
              <circle cx="500" cy="200" r="20" stroke="white" />
              <circle cx="500" cy="200" r="10" stroke="white" />
              <line x1="500" y1="170" x2="500" y2="230" stroke="white" />
              <line x1="470" y1="200" x2="530" y2="200" stroke="white" />
              
              {/* Bee - Manchester symbol */}
              <path d="M600 200 L605 190 L615 190 L620 200 L615 210 L605 210 L600 200" fill="white" />
              <circle cx="605" cy="195" r="2" fill="white" />
              <circle cx="615" cy="195" r="2" fill="white" />
            </g>
          </svg>
        </div>

        {/* Floating Orbs - Northern grit meets innovation */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-red-500/20 rounded-full blur-3xl"></div>

        <div className="container-wide py-20 md:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-amber-300" />
                <span className="text-amber-200 font-medium">Manchester • MediaCityUK • Salford • North West</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Salesforce Technical Architect
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-red-200">
                  Freelance • Manchester
                </span>
              </h1>
              
              <p className="text-xl text-amber-100 mb-8">
                Enterprise-grade technical architecture for Manchester's growing digital economy. £700-1,000/day. 
                Flexible engagements for startups, scale-ups, and established enterprises across the North West.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                
              <Link
            to="/ContactFreelancePage"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-amber-900 hover:bg-amber-50 rounded-xl font-medium transition-all shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  Discuss Your Manchester Project
                </Link>
                <a
                  href="tel:+441612345678"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl font-medium transition-all border border-white/20"
                >
                  <Phone className="w-4 h-4" />
                  +44 161 234 5678
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {['CTA','MCR','UK','GDPR'].map((badge, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-red-500 border-2 border-white/20 flex items-center justify-center text-xs font-bold">
                      {badge}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-amber-200">Supporting the Northern Powerhouse</span>
              </div>
            </motion.div>

            {/* Right Column - Value Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <h2 className="text-2xl font-bold mb-6">Why Manchester?</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-sm">Tech sector growth</span>
                  <span className="font-bold text-amber-300">+67% since 2020</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-sm">Digital businesses</span>
                  <span className="font-bold text-amber-300">10,000+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-sm">MediaCityUK companies</span>
                  <span className="font-bold text-amber-300">250+</span>
                </div>
              </div>

              <div className="bg-amber-500/20 rounded-lg p-4 border border-amber-500/30">
                <div className="flex items-center gap-2">
                  <Factory className="w-5 h-5 text-amber-400" />
                  <p className="text-sm text-amber-200">
                    From industrial revolution to digital revolution - I help Manchester businesses build for the future.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manchester Locations */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="text-sm text-gray-500">Active across Greater Manchester:</span>
            {manchesterLocations.map((location, index) => (
              <div key={index} className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-medium text-gray-700">{location}</span>
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
              Technical Expertise for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">Northern Enterprises</span>
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
                  <Icon className="w-8 h-8 text-amber-600 mb-3" />
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
                  <Icon className="w-8 h-8 text-amber-600 mb-3" />
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
              Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">Manchester Projects</span>
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
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200"
              >
                <h3 className="font-bold text-gray-900 mb-1">{project.client}</h3>
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
              Freelance <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">Services & Rates</span>
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
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-red-600 flex items-center justify-center text-white font-bold">
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
              Freelance <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">FAQ</span>
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
      <section className="bg-gradient-to-r from-amber-800 to-red-800 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Need a Technical Architect in Manchester?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project over a coffee in the Northern Quarter or a video call.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              
                
              <Link
            to="/ContactFreelancePage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-900 hover:bg-amber-50 font-medium rounded-full transition-all transform hover:scale-105"
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
            <p className="text-sm text-amber-200 mt-6">
              Typically respond within 2 hours - proper Northern efficiency!
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SalesforceTechnicalArchitectManchester;