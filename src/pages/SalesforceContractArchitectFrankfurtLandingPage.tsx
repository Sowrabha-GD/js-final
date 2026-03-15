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
  Euro, Banknote, LineChart, PieChart,
  Scale, Gavel
} from "lucide-react";

const SalesforceContractArchitectFrankfurt = () => {
  const expertiseAreas = [
    {
      title: "Banking & Finance",
      description: "Specialized expertise for Frankfurt's banking giants, including Deutsche Bank, Commerzbank, and DZ Bank",
      icon: Landmark
    },
    {
      title: "European Central Bank",
      description: "Experience with ECB regulatory requirements and financial infrastructure",
      icon: Scale
    },
    {
      title: "Regulatory Compliance",
      description: "Deep understanding of BaFin, MiFID II, PSD2, and German banking regulations",
      icon: Gavel
    },
    {
      title: "Capital Markets",
      description: "Salesforce architecture for investment banking, trading, and asset management",
      icon: LineChart
    }
  ];

  const benefits = [
    {
      icon: MapPin,
      title: "Frankfurt-Based Presence",
      description: "Regular on-site presence in Frankfurt. I spend one week per month in Germany's financial capital."
    },
    {
      icon: Award,
      title: "CTA Certified",
      description: "Top 1% of Salesforce architects globally. Enterprise expertise for Frankfurt's financial institutions."
    },
    {
      icon: Euro,
      title: "Premium Financial Rates",
      description: "€1,100-1,500/day. Premium rates for Frankfurt's demanding banking sector."
    },
    {
      icon: Banknote,
      title: "Financial Services Focus",
      description: "Deep experience with investment banking, wealth management, and regulatory compliance."
    }
  ];

  const services = [
    {
      title: "Banking Architecture",
      description: "End-to-end architecture for retail, corporate, and investment banking",
      rate: "€1,200-1,500/day",
      deliverables: ["Core banking integration", "Regulatory reporting", "Customer 360", "Compliance frameworks"]
    },
    {
      title: "Regulatory Compliance",
      description: "BaFin, MiFID II, and PSD2 compliant architectures",
      rate: "€1,300-1,600/day",
      deliverables: ["Compliance assessments", "Audit frameworks", "Regulatory reporting", "Data governance"]
    },
    {
      title: "Capital Markets",
      description: "Architecture for trading, investment banking, and asset management",
      rate: "€1,300-1,600/day",
      deliverables: ["Trading platforms", "Investment reporting", "Portfolio management", "Risk systems"]
    },
    {
      title: "Org Assessment",
      description: "Comprehensive health check of your Salesforce org",
      rate: "€12,000-18,000 fixed",
      deliverables: ["Technical debt analysis", "Performance benchmarks", "Security assessment", "Compliance audit"]
    }
  ];

  const testimonials = [
    {
      quote: "Jeet architected our investment banking client portal with deep understanding of both Salesforce and BaFin regulations. His compliance-first approach gave us confidence from day one.",
      author: "Dr. Stefan Weber",
      role: "Head of Digital Banking",
      company: "Frankfurt Investment Bank",
      rating: 5,
      image: "SW"
    },
    {
      quote: "We needed a contract architect who understood the complexities of European financial regulations. Jeet delivered a solution that satisfied both our business needs and the regulators.",
      author: "Martina Schmidt",
      role: "Chief Compliance Officer",
      company: "European Financial Services Group",
      rating: 5,
      image: "MS"
    }
  ];

  const recentProjects = [
    {
      client: "Frankfurt Investment Bank",
      project: "Institutional Client Portal",
      duration: "10 months",
      rate: "€1,400/day",
      impact: "BaFin-compliant, 200+ institutional clients onboarded"
    },
    {
      client: "European Asset Manager",
      project: "Wealth Management Platform",
      duration: "8 months",
      rate: "€1,300/day",
      impact: "€50B AUM migrated, MiFID II compliant reporting"
    },
    {
      client: "Frankfurt FinTech",
      project: "PSD2-Compliant Open Banking Platform",
      duration: "6 months",
      rate: "€1,200/day",
      impact: "Successfully passed BaFin audit with zero findings"
    }
  ];

  const frankfurtLocations = [
    "Bankenviertel (Banking District)",
    "Europaviertel",
    "MesseTurm",
    "Westend",
    "Sachsenhausen",
    "Eschborn (Banking Hub)"
  ];

  const bankingStats = [
    { label: "Banks headquartered", value: "150+" },
    { label: "International banks", value: "200+" },
    { label: "Banking employees", value: "75,000+" },
    { label: "Assets under management", value: "€2T+", description: "in Frankfurt alone" }
  ];

  const regulators = [
    { name: "BaFin", description: "German Federal Financial Supervisory Authority" },
    { name: "ECB", description: "European Central Bank" },
    { name: "MiFID II", description: "Markets in Financial Instruments Directive" },
    { name: "PSD2", description: "Payment Services Directive" },
    { name: "GDPR", description: "Data Protection Regulation" },
    { name: "CRR/CRD IV", description: "Capital Requirements Regulation" }
  ];

  const faqs = [
    {
      q: "Do you have experience with BaFin regulations?",
      a: "Yes. I've worked extensively with BaFin requirements for multiple Frankfurt-based banks and financial institutions. I understand the rigorous standards expected by German regulators."
    },
    {
      q: "How often can you be on-site in Frankfurt?",
      a: "I typically spend one week per month in Frankfurt, with additional visits as needed. I'm happy to work hybrid with regular on-site days for key meetings in the banking district."
    },
    {
      q: "What's your day rate for Frankfurt banking contracts?",
      a: "My standard day rate ranges from €1,100-1,500 for financial services work. Premium rates for complex regulatory and capital markets projects are at the higher end."
    },
    {
      q: "Can you work with our compliance team?",
      a: "Absolutely. I have extensive experience collaborating with compliance, legal, and risk teams to ensure all regulatory requirements are met from the architecture phase."
    }
  ];

  return (
    <Layout>
      {/* Hero Section - Frankfurt Financial District Theme */}
      <section className="relative bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 text-white overflow-hidden">
        {/* Frankfurt Skyline Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
            <g fill="white">
              {/* Commerzbank Tower */}
              <rect x="200" y="80" width="25" height="220" />
              <rect x="225" y="100" width="25" height="200" />
              
              {/* Deutsche Bank Twin Towers */}
              <rect x="300" y="100" width="20" height="200" />
              <rect x="340" y="100" width="20" height="200" />
              
              {/* Main Tower */}
              <rect x="400" y="60" width="25" height="240" />
              <rect x="425" y="80" width="25" height="220" />
              
              {/* ECB (Europäische Zentralbank) */}
              <rect x="500" y="150" width="40" height="150" />
              <circle cx="520" cy="130" r="15" />
              
              {/* Messeturm */}
              <rect x="600" y="40" width="30" height="260" />
              <rect x="630" y="60" width="30" height="240" />
              
              {/* Euro symbol */}
              <text x="100" y="200" fontSize="60" fill="white" fontWeight="bold">€</text>
            </g>
          </svg>
        </div>

        {/* Floating Orbs - Financial district glow */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-slate-500/20 rounded-full blur-3xl"></div>

        <div className="container-wide py-20 md:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-blue-300" />
                <span className="text-blue-200 font-medium">Bankenviertel • Westend • Eschborn • Frankfurt am Main</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Salesforce Contract Architect
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-slate-200">
                  Frankfurt • Banking & Finance
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8">
                Enterprise Salesforce architecture for Frankfurt's banking and financial sector. €1,100-1,500/day.
                BaFin-compliant. ECB-ready. MiFID II expertise. Contract roles for Germany's financial capital.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
               
              <Link
            to="/ContactFreelancePage"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 hover:bg-blue-50 rounded-xl font-medium transition-all shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  Discuss Your Frankfurt Project
                </Link>
                <a
                  href="tel:+496912345678"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl font-medium transition-all border border-white/20"
                >
                  <Phone className="w-4 h-4" />
                  +49 69 12345678
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {['CTA','BaFin','ECB','MiFID'].map((badge, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-slate-500 border-2 border-white/20 flex items-center justify-center text-xs font-bold">
                      {badge}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-blue-200">Trusted by Frankfurt's leading banks</span>
              </div>
            </motion.div>

            {/* Right Column - Banking District Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <h2 className="text-2xl font-bold mb-4">Frankfurt: Mainhatten</h2>
              
              <p className="text-sm text-blue-200 mb-6">
                Germany's financial capital. Home to the European Central Bank, Deutsche Bank, Commerzbank, and over 350 banks.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {bankingStats.map((stat, index) => (
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
                  <span>European Central Bank headquarters</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Banknote className="w-4 h-4 text-blue-400" />
                  <span>€2 trillion+ assets under management</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Scale className="w-4 h-4 text-blue-400" />
                  <span>BaFin regulated since day one</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex items-center gap-2">
                  <Euro className="w-5 h-5 text-blue-400" />
                  <p className="text-xs text-blue-200">
                    From Mainhatten to the world - I help Frankfurt's banks build global financial platforms.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Frankfurt Locations */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="text-sm text-gray-500">Active across Frankfurt:</span>
            {frankfurtLocations.map((location, index) => (
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
              Financial Services Expertise for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-600">Frankfurt's Banks</span>
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
              Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-600">Frankfurt Banking Projects</span>
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
              Contract <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-600">Services & Rates</span>
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
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-slate-600 flex items-center justify-center text-white font-bold">
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
              Banking & Contract <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-600">FAQ</span>
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
      <section className="bg-gradient-to-r from-blue-800 to-slate-800 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to discuss your Frankfurt banking project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's meet in the Bankenviertel or schedule a video call to discuss your regulatory and architectural needs.
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
              I'll respond within 2 hours - Frankfurt efficiency!
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SalesforceContractArchitectFrankfurt;