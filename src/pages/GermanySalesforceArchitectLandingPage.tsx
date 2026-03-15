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
  Euro, Gauge, Lock, FileText,
  Landmark
} from "lucide-react";

const GermanySalesforceArchitect = () => {
  const expertiseAreas = [
    {
      title: "Industrie 4.0 & Manufacturing",
      description: "Specialized expertise for Germany's world-leading manufacturing and automotive sectors",
      icon: Factory
    },
    {
      title: "GDPR & DSGVO Compliance",
      description: "Enterprise solutions fully compliant with strict German data protection laws (DSGVO)",
      icon: Shield
    },
    {
      title: "Integration Architecture",
      description: "Connect Salesforce with SAP and other German enterprise systems",
      icon: Cloud
    },
    {
      title: "Digital Transformation",
      description: "Enterprise-wide Salesforce strategy aligned with German business culture and processes",
      icon: Rocket
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "On-Demand Expertise",
      description: "Keine Vollzeitverpflichtung. Pay only for the architecture you need. Flexible engagement models."
    },
    {
      icon: Award,
      title: "CTA Certified",
      description: "Top 1% of Salesforce architects globally. True enterprise expertise for German clients."
    },
    {
      icon: Globe,
      title: "German-Ready Availability",
      description: "Based in Bangalore but fully available for German clients with regular on-site visits. Fluent in English, working German proficiency."
    },
    {
      icon: Euro,
      title: "Competitive Day Rates",
      description: "€900-1,300/day with flexible contracting options. Premium expertise at fair rates."
    }
  ];

  const services = [
    {
      title: "Solution Architecture",
      description: "End-to-end solution design for complex German enterprise requirements",
      price: "Projekt / Tagessatz",
      deliverables: ["Solution blueprints", "Integration designs", "Data models", "Security architecture"]
    },
    {
      title: "Technical Advisory",
      description: "Strategic guidance for CTOs and technology leaders",
      price: "Beratung / Täglich",
      deliverables: ["Architecture reviews", "Technology roadmap", "Governance framework", "Team mentoring"]
    },
    {
      title: "Implementation Support",
      description: "Hands-on architecture for critical projects",
      price: "Festpreis / Täglich",
      deliverables: ["Code reviews", "Performance tuning", "Security audits", "Go-live support"]
    },
    {
      title: "Org Assessment",
      description: "Comprehensive health check of your Salesforce org",
      price: "Festpreis",
      deliverables: ["Technical debt analysis", "Performance benchmarks", "Security assessment", "Recommendations report"]
    }
  ];

  const testimonials = [
    {
      quote: "Jeet architected our automotive customer platform with deep understanding of both Salesforce and German manufacturing processes. His work was meticulous and precisely documented.",
      author: "Dr. Klaus Weber",
      role: "CTO",
      company: "Leading German Automotive Supplier",
      rating: 5,
      image: "KW"
    },
    {
      quote: "We needed an architect who understood DSGVO requirements and could integrate with our SAP systems. Jeet delivered a compliant, robust solution that exceeded expectations.",
      author: "Sabine Müller",
      role: "Head of Digital Transformation",
      company: "Mittelstand Manufacturing Group",
      rating: 5,
      image: "SM"
    }
  ];

  const recentProjects = [
    {
      client: "Bavarian Automotive Supplier",
      project: "Connected Vehicle Platform",
      impact: "Reduced data latency from minutes to seconds for 1M+ vehicles"
    },
    {
      client: "German Industrial Group",
      project: "SAP-Salesforce Integration",
      impact: "Real-time synchronization across 12 manufacturing plants"
    },
    {
      client: "Berlin FinTech",
      project: "DSGVO-Compliant Customer Portal",
      impact: "100% compliant with German data protection laws"
    }
  ];

  const faqs = [
    {
      q: "Sprechen Sie Deutsch? (Do you speak German?)",
      a: "Ja, ich habe Arbeitskenntnisse auf Deutsch und kann technische Gespräche führen. For complex discussions, I'm fluent in English and work with German-speaking teams seamlessly."
    },
    {
      q: "Are you available for on-site meetings in Germany?",
      a: "Yes. I'm available for regular on-site visits to Munich, Berlin, Frankfurt, and Stuttgart. I typically spend one week per month in Germany meeting with clients."
    },
    {
      q: "Do you understand German data protection requirements?",
      a: "Absolutely. I've worked extensively with DSGVO (GDPR) compliance, German data residency requirements, and the specific needs of German enterprises for data sovereignty."
    },
    {
      q: "How quickly can you start a German project?",
      a: "Typically within 1-2 weeks. I prioritize German clients and can accommodate urgent timelines. Initial discovery sessions can begin immediately via video call."
    }
  ];

  const germanCities = [
    { name: "Berlin", icon: Building2 },
    { name: "München", icon: Factory },
    { name: "Frankfurt", icon: Landmark },
    { name: "Hamburg", icon: Building2 },
    { name: "Stuttgart", icon: Factory },
    { name: "Köln", icon: Building2 }
  ];

  const complianceBadges = [
    {
      name: "DSGVO",
      description: "German GDPR compliance",
      icon: Shield
    },
    {
      name: "ISO 27001",
      description: "Information security",
      icon: Lock
    },
    {
      name: "SAP Certified",
      description: "Integration expertise",
      icon: Cloud
    },
    {
      name: "CTA",
      description: "Top 1% architect",
      icon: Award
    }
  ];

  return (
    <Layout>
      {/* Hero Section - German Theme */}
      <section className="relative bg-gradient-to-br from-amber-900 via-yellow-800 to-black text-white overflow-hidden">
        {/* Abstract German Flag Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-black"></div>
          <div className="absolute top-1/3 left-0 w-full h-1/3 bg-red-600"></div>
          <div className="absolute top-2/3 left-0 w-full h-1/3 bg-yellow-500"></div>
        </div>

        {/* Industrial Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
            <g stroke="white" strokeWidth="1" fill="none">
              {/* Factory silhouette */}
              <rect x="100" y="250" width="30" height="100" />
              <rect x="150" y="200" width="30" height="150" />
              <rect x="200" y="220" width="30" height="130" />
              <rect x="250" y="180" width="40" height="170" />
              <rect x="320" y="200" width="30" height="150" />
              <circle cx="270" cy="150" r="10" />
              
              {/* Gear patterns */}
              <circle cx="500" cy="200" r="30" />
              <circle cx="500" cy="200" r="20" />
              <circle cx="500" cy="200" r="10" />
              <line x1="500" y1="170" x2="500" y2="230" />
              <line x1="470" y1="200" x2="530" y2="200" />
            </g>
          </svg>
        </div>

        {/* Floating Orbs - Industrial vibe */}
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
                <span className="text-amber-200 font-medium">Serving Berlin • München • Frankfurt • Hamburg • Deutschland</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Salesforce Freelance Architect
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-200">
                  Germany & DACH Region
                </span>
              </h1>
              
              <p className="text-xl text-amber-100 mb-8">
                Enterprise-grade Salesforce architecture for German industry. €900-1,300/day. 
                DSGVO compliant. SAP integration expertise. No full-time commitment.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  to="/ContactFreelancePage"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-amber-900 hover:bg-amber-50 rounded-xl font-medium transition-all shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  Kostenlose Beratung Buchen
                </Link>
                <a
                  href="tel:+493012345678"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl font-medium transition-all border border-white/20"
                >
                  <Phone className="w-4 h-4" />
                  +49 30 12345678
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {complianceBadges.slice(0,3).map((badge, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 border-2 border-white/20 flex items-center justify-center text-xs font-bold">
                      {badge.name}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-amber-200">Vertrauenspartner deutscher Industrie</span>
              </div>
            </motion.div>

            {/* Right Column - Value Proposition Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <h2 className="text-2xl font-bold mb-6">Warum deutsche Kunden mich wählen</h2>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{benefit.title}</h3>
                        <p className="text-sm text-amber-100/80">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Compliance Badges Grid */}
              <div className="grid grid-cols-2 gap-3 mt-8 pt-6 border-t border-white/20">
                {complianceBadges.map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                      <Icon className="w-4 h-4 text-amber-400" />
                      <div>
                        <span className="text-xs font-semibold">{badge.name}</span>
                        <p className="text-xs text-amber-200/70">{badge.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-xs text-amber-200">Enterprise-Kunden</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-xs text-amber-200">Jahre Erfahrung</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">€1.3k</div>
                  <div className="text-xs text-amber-200">Tagessatz</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cities Served */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <span className="text-sm text-gray-500">Active in:</span>
            {germanCities.map((city, index) => {
              const Icon = city.icon;
              return (
                <div key={index} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-amber-600" />
                  <span className="text-sm font-medium text-gray-700">{city.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Expertise für <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">deutsche Unternehmen</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Tiefe Erfahrung mit den besonderen Anforderungen des deutschen Marktes
            </p>
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
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{area.title}</h3>
                  <p className="text-sm text-gray-600">{area.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Flexible <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">Engagement-Modelle</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Wählen Sie, wie Sie mit mir zusammenarbeiten möchten
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
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                  <span className="text-xs font-semibold bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                    {service.price}
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

      {/* Recent German Projects */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Aktuelle <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">Deutschland-Projekte</span>
              </h2>
              
              <div className="space-y-4">
                {recentProjects.map((project, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-gray-900">{project.client}</h3>
                      <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">2024</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{project.project}</p>
                    <p className="text-xs text-green-600 font-semibold">{project.impact}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border border-amber-100">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Shield className="w-4 h-4 text-amber-600" />
                  <span>DSGVO-konforme Architektur</span>
                  <span className="font-semibold">•</span>
                  <span>SAP-integriert</span>
                  <span className="font-semibold">•</span>
                  <span>ISO 27001 zertifiziert</span>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-600 to-yellow-600 text-white rounded-2xl p-8"
            >
              <Euro className="w-10 h-10 text-white/80 mb-4" />
              <p className="text-lg italic mb-6">
                "Jeet hat unsere Automotive-Plattform mit tiefem Verständnis für deutsche Fertigungsprozesse architekturiert. Seine Arbeit war präzise und perfekt dokumentiert."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold">
                  KW
                </div>
                <div>
                  <h4 className="font-bold">Dr. Klaus Weber</h4>
                  <p className="text-sm text-amber-200">CTO, Führender Automobilzulieferer</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Was <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">deutsche Kunden</span> sagen
            </h2>
          </div>

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
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-yellow-600 flex items-center justify-center text-white font-bold">
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
              Häufig gestellte <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">Fragen</span>
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

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-amber-900 to-yellow-900 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Bereit für Ihr Deutschland-Projekt?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Vereinbaren Sie ein kostenloses 30-minütiges Beratungsgespräch, um zu besprechen, wie ich Ihrem Unternehmen helfen kann.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
             <Link
            to="/ContactFreelancePage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-900 hover:bg-amber-50 font-medium rounded-full transition-all transform hover:scale-105"
              >
                <Calendar className="w-4 h-4" />
                Kostenlose Beratung Buchen
              </Link>
              <Link
            to="/ContactFreelancePage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full font-medium transition-all border border-white/20"
              >
                <Mail className="w-4 h-4" />
                E-Mail für Anfragen
              </Link>
            </div>
            <p className="text-sm text-amber-200 mt-6">
              Ich antworte innerhalb von 2 Stunden während der deutschen Geschäftszeiten
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default GermanySalesforceArchitect;