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
  Euro, Cpu, Wifi, Car
} from "lucide-react";

const SalesforceTechnicalArchitectMunich = () => {
  const expertiseAreas = [
    {
      title: "Automotive & Manufacturing",
      description: "Specialized expertise for Munich's world-leading automotive and industrial sectors",
      icon: Car
    },
    {
      title: "Industry 4.0",
      description: "Smart factory integration and IoT solutions for manufacturing excellence",
      icon: Factory
    },
    {
      title: "Technical Architecture",
      description: "Scalable, high-performance architectures for Bavaria's enterprise leaders",
      icon: Cpu
    },
    {
      title: "Integration Architecture",
      description: "Connect Salesforce with SAP and other German enterprise systems",
      icon: Cloud
    }
  ];

  const benefits = [
    {
      icon: MapPin,
      title: "Munich-Based Presence",
      description: "Regular on-site presence in Munich. I spend one week per month in Bavaria's capital."
    },
    {
      icon: Award,
      title: "CTA Certified",
      description: "Top 1% of Salesforce architects globally. Enterprise expertise for Munich's leading companies."
    },
    {
      icon: Euro,
      title: "Competitive Bavarian Rates",
      description: "€1,000-1,400/day. Premium expertise for Germany's strongest economy."
    },
    {
      icon: Car,
      title: "Automotive Focus",
      description: "Deep experience with BMW, Audi, and the broader automotive ecosystem."
    }
  ];

  const services = [
    {
      title: "Technical Architecture",
      description: "End-to-end technical design for complex Munich enterprise requirements",
      rate: "€1,100-1,400/day",
      deliverables: ["System architecture", "Integration designs", "Data models", "Security architecture"]
    },
    {
      title: "Solution Architecture",
      description: "Solution design aligned with German manufacturing needs",
      rate: "€1,000-1,300/day",
      deliverables: ["Solution blueprints", "Technical specifications", "Platform governance", "Best practices"]
    },
    {
      title: "Industry 4.0 Advisory",
      description: "Smart factory and IoT integration expertise",
      rate: "€1,200-1,500/day",
      deliverables: ["IoT architecture", "Real-time analytics", "Edge computing", "Predictive maintenance"]
    },
    {
      title: "Org Assessment",
      description: "Comprehensive health check of your Salesforce org",
      rate: "€10,000-15,000 fixed",
      deliverables: ["Technical debt analysis", "Performance benchmarks", "Security assessment", "Recommendations report"]
    }
  ];

  const testimonials = [
    {
      quote: "Jeet architected our connected vehicle platform with deep understanding of both Salesforce and automotive manufacturing. His work has been flawless.",
      author: "Dr. Klaus Wagner",
      role: "Chief Architect",
      company: "Munich Automotive Group",
      rating: 5,
      image: "KW"
    },
    {
      quote: "We needed a technical architect who understood Industry 4.0 and could integrate with our SAP systems. Jeet delivered a solution that exceeded expectations.",
      author: "Friedrich Müller",
      role: "CTO",
      company: "Bavarian Manufacturing",
      rating: 5,
      image: "FM"
    }
  ];

  const recentProjects = [
    {
      client: "Munich Automotive Tier 1",
      project: "Connected Vehicle Platform",
      duration: "12 months",
      impact: "Real-time data from 1M+ vehicles"
    },
    {
      client: "Bavarian Industrial Group",
      project: "Industry 4.0 Integration",
      duration: "8 months",
      impact: "35% OEE improvement across 12 plants"
    },
    {
      client: "Munich FinTech",
      project: "Scalable Banking Architecture",
      duration: "6 months",
      impact: "Supported 400% user growth"
    }
  ];

  const munichLocations = [
    "Munich City Center",
    "Schwabing",
    "Sendling",
    "Garching (High-Tech Campus)",
    "Ottobrunn",
    "Unterföhring (Media Hub)"
  ];

  const industryStats = [
    { label: "Automotive R&D", value: "€20B+", description: "Annual investment" },
    { label: "Tech Companies", value: "3,000+" },
    { label: "DAX Companies", value: "8", description: " headquartered in Munich" },
    { label: "Patent Applications", value: "4,500+", description: " annually" }
  ];

  const faqs = [
    {
      q: "Do you speak German?",
      a: "Yes, I have professional working proficiency in German and can conduct technical discussions in German. Complex conversations can also be handled in English."
    },
    {
      q: "How often can you be on-site in Munich?",
      a: "I typically spend one week per month in Munich, with additional visits as needed. I'm happy to work hybrid with regular on-site days for key meetings."
    },
    {
      q: "What's your day rate for Munich contracts?",
      a: "My standard day rate ranges from €1,000-1,400 depending on scope and duration. Industry 4.0 and specialized automotive work may be at the higher end."
    },
    {
      q: "Do you have experience with SAP integration?",
      a: "Absolutely. Munich's enterprise landscape is SAP-dominated. I've led numerous SAP-Salesforce integration projects for automotive and manufacturing clients."
    }
  ];

  return (
    <Layout>
      {/* Hero Section - Munich High-Tech Theme */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        {/* Munich Skyline Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
            <g fill="white">
              {/* Frauenkirche domes */}
              <circle cx="250" cy="250" r="20" />
              <circle cx="290" cy="250" r="20" />
              <rect x="260" y="200" width="20" height="60" />
              
              {/* Modern high-rises - Highlight Towers etc */}
              <rect x="400" y="120" width="25" height="180" />
              <rect x="450" y="100" width="25" height="200" />
              <rect x="500" y="140" width="25" height="160" />
              
              {/* BMW Headquarters (four-cylinder) */}
              <rect x="600" y="150" width="30" height="150" />
              <rect x="630" y="130" width="30" height="170" />
              <rect x="660" y="110" width="30" height="190" />
              <rect x="690" y="90" width="30" height="210" />
              
              {/* Olympic Tower */}
              <rect x="100" y="180" width="15" height="120" />
              <circle cx="107.5" cy="170" r="15" />
              
              {/* Tech symbols */}
              <circle cx="550" cy="50" r="10" />
              <circle cx="580" cy="70" r="10" />
              <circle cx="610" cy="90" r="10" />
            </g>
          </svg>
        </div>

        {/* Floating Orbs - Bavarian high-tech vibe */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="container-wide py-20 md:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-blue-300" />
                <span className="text-blue-200 font-medium">Munich • Schwabing • Garching • Bavaria</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Salesforce Technical Architect
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                  Freelance • Munich
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8">
                Enterprise technical architecture for Munich's automotive, manufacturing, and tech leaders. €1,000-1,400/day.
                Industry 4.0 expertise. SAP integration. CTA-certified.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
              
              <Link
            to="/ContactFreelancePage"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 hover:bg-blue-50 rounded-xl font-medium transition-all shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  Discuss Your Munich Project
                </Link>
                <a
                  href="tel:+498912345678"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl font-medium transition-all border border-white/20"
                >
                  <Phone className="w-4 h-4" />
                  +49 89 12345678
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {['CTA','BMW','SAP','I4.0'].map((badge, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-white/20 flex items-center justify-center text-xs font-bold">
                      {badge}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-blue-200">Trusted by Bavaria's industry leaders</span>
              </div>
            </motion.div>

            {/* Right Column - Industry 4.0 Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <h2 className="text-2xl font-bold mb-4">Munich: Europe's Tech & Auto Capital</h2>
              
              <p className="text-sm text-blue-200 mb-6">
                Home to BMW, Siemens, Allianz, and thousands of tech companies. Europe's strongest economy.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {industryStats.map((stat, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-3">
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-blue-200">{stat.label}</div>
                    {stat.description && (
                      <div className="text-xs text-blue-300/70">{stat.description}</div>
                    )}
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                  <span className="text-sm">Industry 4.0 readiness</span>
                  <span className="font-bold text-green-400">Global leader</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                  <span className="text-sm">R&D investment</span>
                  <span className="font-bold text-green-400">#1 in Europe</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                  <span className="text-sm">Patent density</span>
                  <span className="font-bold text-green-400">Highest in DE</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex items-center gap-2">
                  <Car className="w-5 h-5 text-blue-400" />
                  <p className="text-xs text-blue-200">
                    From automotive to Industry 4.0 - I help Munich's leaders build the future.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Munich Locations */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="text-sm text-gray-500">Active across Munich:</span>
            {munichLocations.map((location, index) => (
              <div key={index} className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
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
              Technical Expertise for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Bavarian Industry</span>
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
              Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Munich Projects</span>
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
              Freelance <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services & Rates</span>
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
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
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
              Freelance <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">FAQ</span>
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
      <section className="bg-gradient-to-r from-blue-800 to-purple-800 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to build Munich's next success story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project over a coffee in Schwabing or a video call.
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
              I'll respond within 2 hours - Bavarian efficiency!
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SalesforceTechnicalArchitectMunich;