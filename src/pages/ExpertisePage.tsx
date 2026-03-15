import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductConstellationSection from "@/components/ProductConstellationSection";
import ValueRealizationSection from "@/components/ValueRealiztionSection";
import { 
  Award, Briefcase, Cloud, Code, Shield, 
  TrendingUp, Users, BookOpen, ArrowRight,
  CheckCircle, Star, Sparkles
} from "lucide-react";

const ExpertisePage = () => {
  // Expertise highlights
  const highlights = [
    {
      icon: Cloud,
      title: "Salesforce Certified",
      description: "CTA, Application Architect, System Architect",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Briefcase,
      title: "15+ Years Experience",
      description: "Fortune 500 to high-growth startups",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "Technical Depth",
      description: "LDV, Integration, Security, Apex Patterns",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Users,
      title: "50+ Enterprise Clients",
      description: "Across Financial Services, Auto, Healthcare",
      color: "from-amber-500 to-orange-500"
    }
  ];

  // Core competencies
  const competencies = [
    {
      category: "Salesforce Clouds",
      items: ["Sales Cloud", "Service Cloud", "Experience Cloud", "CPQ & Revenue", "Marketing Cloud"],
      color: "blue"
    },
    {
      category: "Industry Verticals",
      items: ["Financial Services", "Automotive", "Travel & Hospitality", "Healthcare"],
      color: "purple"
    },
    {
      category: "Technical Architecture",
      items: ["Large Data Volumes", "Integration Patterns", "Security & Governance", "Apex Design"],
      color: "emerald"
    },
    {
      category: "Solution Areas",
      items: ["Digital Onboarding", "Quote to Cash", "Service Transformation", "Customer Communities"],
      color: "amber"
    }
  ];

  // Certifications
  const certifications = [
    { name: "Certified Technical Architect (CTA)", level: "Expert", year: "2019" },
    { name: "Application Architect", level: "Expert", year: "2018" },
    { name: "System Architect", level: "Expert", year: "2017" },
    { name: "Sales Cloud Consultant", level: "Expert", year: "2015" },
    { name: "Service Cloud Consultant", level: "Expert", year: "2015" },
    { name: "CPQ Specialist", level: "Advanced", year: "2018" },
    { name: "Platform Developer II", level: "Advanced", year: "2016" },
    { name: "Marketing Cloud Consultant", level: "Advanced", year: "2020" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A1929] via-[#0F2744] to-[#1A3650] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container-wide py-20 md:py-28 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/20">
              <Award className="w-4 h-4" />
              Enterprise Salesforce Expertise
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Deep Expertise Across the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Entire Salesforce Ecosystem</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Not just certification - real-world, battle-tested experience helping enterprises transform their business with Salesforce.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#constellation"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg shadow-blue-600/25"
              >
                Explore expertise
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl font-medium transition-all border border-white/20"
              >
                Discuss your needs
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} bg-opacity-10 flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 text-transparent bg-clip-text bg-gradient-to-br ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Constellation Section */}
      <section id="constellation">
        <ProductConstellationSection />
      </section>

      {/* Value Realization Section */}
      <section>
        <ValueRealizationSection />
      </section>

      {/* Core Competencies Grid */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 px-4 py-2 rounded-full">
              Core Competencies
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-6 mb-4">
              Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Depth & Breadth</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Every area you need, mastered to the highest level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {competencies.map((comp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{comp.category}</h3>
                <div className="space-y-3">
                  {comp.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 text-${
                        comp.color === 'blue' ? 'blue' :
                        comp.color === 'purple' ? 'purple' :
                        comp.color === 'emerald' ? 'emerald' : 'amber'
                      }-500`} />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Showcase */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column */}
            <div className="flex-1">
              <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 px-4 py-2 rounded-full">
                Certifications
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-6 mb-4">
                Industry-Validated <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Excellence</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                15+ Salesforce certifications including the prestigious CTA - demonstrating mastery at every level.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      CTA
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-500">+10 more certifications</span>
              </div>
            </div>

            {/* Right Column - Cert List */}
            <div className="flex-1 bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-xs font-semibold text-blue-600 mb-1">{cert.year}</div>
                    <div className="text-sm font-medium text-gray-900">{cert.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{cert.level}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Sparkles className="w-12 h-12 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to put this expertise to work?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Let's discuss how we can transform your Salesforce investment into measurable business value.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-600/25"
              >
                Schedule a consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full font-medium transition-all border border-white/20"
              >
                View success stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ExpertisePage;