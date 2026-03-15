import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Award, Briefcase, Clock, MapPin,
  CheckCircle, ArrowRight, Star, TrendingUp,
  Globe, Users, Building2, Phone,
  Mail, Calendar, Shield, Zap,
  Rocket, Target, Sparkles, Diamond,
  BarChart, Cloud, Server, Code
} from "lucide-react";

const DubaiSalesforceArchitect = () => {
  const expertiseAreas = [
    {
      title: "Digital Transformation",
      description: "Enterprise-wide Salesforce strategy aligned with UAE Vision 2031",
      icon: Rocket
    },
    {
      title: "Banking & FSI Solutions",
      description: "Specialized expertise for Dubai's leading financial institutions",
      icon: Building2
    },
    {
      title: "Integration Architecture",
      description: "Connect Salesforce with legacy systems and modern APIs",
      icon: Cloud
    },
    {
      title: "Large Data Volumes",
      description: "Handle millions of records with optimal performance",
      icon: Server
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "On-Demand Expertise",
      description: "No full-time salary commitment. Pay only for the architecture you need."
    },
    {
      icon: Award,
      title: "CTA Certified",
      description: "Top 1% of Salesforce architects globally. True enterprise expertise."
    },
    {
      icon: Globe,
      title: "Local Presence",
      description: "Based in Bangalore but fully available for Dubai/Abu Dhabi clients with regular on-site visits."
    },
    {
      icon: Shield,
      title: "Proven Track Record",
      description: "50+ enterprise clients including Fortune 500 companies in GCC region."
    }
  ];

  const services = [
    {
      title: "Solution Architecture",
      description: "End-to-end solution design for complex business requirements",
      price: "Project-based",
      deliverables: ["Solution blueprints", "Integration designs", "Data models", "Security architecture"]
    },
    {
      title: "Technical Advisory",
      description: "Strategic guidance for CTOs and technology leaders",
      price: "Retainer / Hourly",
      deliverables: ["Architecture reviews", "Technology roadmap", "Governance framework", "Team mentoring"]
    },
    {
      title: "Implementation Support",
      description: "Hands-on architecture for critical projects",
      price: "Fixed-price",
      deliverables: ["Code reviews", "Performance tuning", "Security audits", "Go-live support"]
    },
    {
      title: "Org Assessment",
      description: "Comprehensive health check of your Salesforce org",
      price: "Fixed-price",
      deliverables: ["Technical debt analysis", "Performance benchmarks", "Security assessment", "Recommendations report"]
    }
  ];

  const testimonials = [
    {
      quote: "Jeet architected our bank's entire customer onboarding platform. His understanding of both Salesforce and local regulatory requirements is exceptional.",
      author: "Ahmed Al Mansoori",
      role: "CTO",
      company: "Leading Dubai Bank",
      rating: 5,
      image: "AM"
    },
    {
      quote: "We needed an architect who could handle complex integration with our legacy systems. Jeet delivered a solution with 99.99% uptime.",
      author: "Fatima Al Hashimi",
      role: "VP of Technology",
      company: "Abu Dhabi Government Entity",
      rating: 5,
      image: "FH"
    }
  ];

  const recentProjects = [
    {
      client: "Major Dubai Bank",
      project: "Digital Onboarding Platform",
      impact: "Reduced onboarding time from 2 weeks to 24 hours"
    },
    {
      client: "Abu Dhabi Retail Group",
      project: "Multi-org Consolidation",
      impact: "Unified 5 regional orgs, saved $1.2M annually"
    },
    {
      client: "Dubai Healthcare Authority",
      project: "Patient Portal",
      impact: "HIPAA-compliant portal serving 500k+ patients"
    }
  ];

  const faqs = [
    {
      q: "Are you available for on-site meetings in Dubai?",
      a: "Yes. I'm available for regular on-site visits to Dubai and Abu Dhabi. I typically spend one week per month in the UAE meeting with clients."
    },
    {
      q: "What's your engagement model?",
      a: "Flexible - hourly consulting, fixed-price projects, or monthly retainers. I tailor the engagement to your specific needs."
    },
    {
      q: "Do you understand local regulations?",
      a: "Absolutely. I've worked extensively with Dubai Financial Services Authority (DFSA) and Abu Dhabi Global Market (ADGM) regulatory requirements."
    },
    {
      q: "How quickly can you start?",
      a: "Typically within 1-2 weeks. I prioritize UAE clients and can accommodate urgent timelines."
    }
  ];

  return (
    <Layout>
      {/* Hero Section - Dubai Skyline Theme */}
      <section className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-yellow-800 text-white overflow-hidden">
        {/* Abstract Dubai Skyline Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
            <g fill="white">
              <rect x="100" y="300" width="40" height="100" />
              <rect x="160" y="250" width="30" height="150" />
              <rect x="210" y="200" width="35" height="200" />
              <rect x="270" y="150" width="45" height="250" />
              <rect x="340" y="100" width="30" height="300" />
              <rect x="400" y="50" width="60" height="350" />
              <rect x="490" y="120" width="35" height="280" />
              <rect x="550" y="180" width="40" height="220" />
              <rect x="620" y="220" width="30" height="180" />
            </g>
          </svg>
        </div>

        {/* Floating Orbs - Burj Khalifa Inspiration */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl"></div>

        <div className="container-wide py-20 md:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-amber-300" />
                <span className="text-amber-200 font-medium">Serving Dubai • Abu Dhabi • UAE</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Salesforce Freelance Architect
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-200">
                  Dubai & Abu Dhabi
                </span>
              </h1>
              
              <p className="text-xl text-amber-100 mb-8">
                Enterprise-grade Salesforce architecture on your terms. No full-time commitment. 
                Just expert guidance for your most critical projects.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                
         <Link
            to="/ContactFreelancePage"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-amber-900 hover:bg-amber-50 rounded-xl font-medium transition-all shadow-lg"
          >
             <Calendar className="w-4 h-4" />
            Schedule a Free Consultation
          
          </Link>
                <a
                  href="tel:+97112345678"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl font-medium transition-all border border-white/20"
                >
                  <Phone className="w-4 h-4" />
                  Call for UAE Enquiries
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 border-2 border-white/20 flex items-center justify-center text-xs font-bold">
                      {['ADGM','DFSA','CTA','TCS'][i-1]}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-amber-200">Trusted by leading UAE enterprises</span>
              </div>
            </motion.div>

            {/* Right Column - Value Proposition Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <h2 className="text-2xl font-bold mb-6">Why Dubai & Abu Dhabi Clients Choose Me</h2>
              
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

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-xs text-amber-200">Enterprise Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-xs text-amber-200">Years Exp</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24h</div>
                  <div className="text-xs text-amber-200">Response Time</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Expertise for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">UAE Enterprises</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Deep experience with the unique requirements of Dubai and Abu Dhabi businesses
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
              Flexible Engagement <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">Models</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Choose how you want to work with me
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

      {/* Recent UAE Projects */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">UAE Projects</span>
              </h2>
              
              <div className="space-y-4">
                {recentProjects.map((project, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-gray-900">{project.client}</h3>
                      <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">Completed 2024</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{project.project}</p>
                    <p className="text-xs text-green-600 font-semibold">{project.impact}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border border-amber-100">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Globe className="w-4 h-4 text-amber-600" />
                  <span>Fully compliant with </span>
                  <span className="font-semibold">DFSA</span>
                  <span>and</span>
                  <span className="font-semibold">ADGM</span>
                  <span>regulations</span>
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
              <Diamond className="w-10 h-10 text-white/80 mb-4" />
              <p className="text-lg italic mb-6">
                "Jeet's understanding of both Salesforce and our local regulatory requirements is exceptional. He's been instrumental in our digital transformation."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold">
                  AM
                </div>
                <div>
                  <h4 className="font-bold">Ahmed Al Mansoori</h4>
                  <p className="text-sm text-amber-200">CTO, Leading Dubai Bank</p>
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
              What <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">UAE Clients</span> Say
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
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">Questions</span>
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
              Ready to discuss your Dubai project?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Let's schedule a free 30-minute consultation to explore how I can help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
            to="/ContactFreelancePage"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-amber-900 hover:bg-amber-50 rounded-xl font-medium transition-all shadow-lg"
          >
             <Calendar className="w-4 h-4" />
            Schedule a Free Consultation
          </Link>
          
              <Link
            to="/ContactFreelancePage"
              
            
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full font-medium transition-all border border-white/20"
              >
                <Mail className="w-4 h-4" />
                Email for UAE Enquiries
              </Link>
            </div>
            <p className="text-sm text-amber-200 mt-6">
              Typically respond within 2 hours during UAE business hours
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default DubaiSalesforceArchitect;