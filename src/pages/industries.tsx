import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

import { 
  Building2, Car, Heart, Plane, GraduationCap, Factory,
  ArrowRight, Award, Users, TrendingUp, CheckCircle,
  Sparkles, Shield, Globe, Zap
} from "lucide-react";
import { link } from "fs";
const IndustriesPage = () => {
  const industries = [
    {
      id: "financial-services",
      name: "Financial Services",
      icon: Building2,
      description: "Transform banking, wealth management, and insurance with compliant, scalable solutions.",
      color: "from-blue-500 to-cyan-500",
      bgLight: "bg-blue-50",
      textColor: "text-blue-600",
      stats: "15+ financial clients",
      challenges: ["Regulatory compliance", "Data security", "Customer 360", "Digital onboarding"],
      solutions: ["FSC implementation", "Wealth management", "Compliance automation", "Secure portals"],
      image: "/images/industries/financial.jpg",
       link: "/industries/financial-services"
    },
    {
      id: "automotive",
      name: "Automotive",
      icon: Car,
      description: "Connect manufacturers, dealers, and customers for seamless vehicle experiences.",
      color: "from-emerald-500 to-teal-500",
      bgLight: "bg-emerald-50",
      textColor: "text-emerald-600",
      stats: "8 automotive brands",
      challenges: ["Dealer network mgmt", "Vehicle personalization", "Service scheduling", "Loyalty programs"],
      solutions: ["Dealer portals", "Connected customer", "Service cloud", "Marketing automation"],
      image: "/images/industries/automotive.jpg",
      link: "/industries/automotive"
    },
    {
      id: "healthcare",
      name: "Healthcare",
      icon: Heart,
      description: "Secure, compliant patient engagement and provider coordination solutions.",
      color: "from-rose-500 to-red-500",
      bgLight: "bg-rose-50",
      textColor: "text-rose-600",
      stats: "10+ healthcare orgs",
      challenges: ["HIPAA compliance", "Patient engagement", "Provider networks", "Care coordination"],
      solutions: ["Health cloud", "Patient portals", "Secure messaging", "Care plans"],
      image: "/images/industries/healthcare.jpg",
      link: "/industries/healthcare"
  
    },
    {
      id: "travel-hospitality",
      name: "Travel & Hospitality",
      icon: Plane,
      description: "Create memorable guest experiences from booking to check-out with personalized service.",
      color: "from-purple-500 to-pink-500",
      bgLight: "bg-purple-50",
      textColor: "text-purple-600",
      stats: "12+ hospitality clients",
      challenges: ["Guest 360", "Loyalty integration", "Multi-channel service", "Real-time offers"],
      solutions: ["Guest communities", "Loyalty cloud", "Service cloud", "Marketing cloud"],
      image: "/images/industries/travel.jpg",
      link: "/industries/travel-hospitality"
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      icon: Factory,
      description: "Connect operations, supply chain, and customer service for Industry 4.0 transformation.",
      color: "from-amber-500 to-orange-500",
      bgLight: "bg-amber-50",
      textColor: "text-amber-600",
      stats: "7+ manufacturing clients",
      challenges: ["Supply chain visibility", "Field service", "Quality management", "Partner collaboration"],
      solutions: ["Manufacturing cloud", "Field service", "Supply chain", "Partner portals"],
      image: "/images/industries/manufacturing.jpg",
      link: "/industries/manufacturing"
    },
    {
      id: "education",
      name: "Education",
      icon: GraduationCap,
      description: "Transform student engagement, recruitment, and alumni relations with connected experiences.",
      color: "from-indigo-500 to-blue-500",
      bgLight: "bg-indigo-50",
      textColor: "text-indigo-600",
      stats: "5+ education institutions",
      challenges: ["Student recruitment", "Alumni engagement", "Course management", "Donor relations"],
      solutions: ["Education cloud", "Student portals", "Marketing cloud", "Loyalty programs"],
      image: "/images/industries/education.jpg",
       link: "/industries/education"
    }
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
              <Building2 className="w-4 h-4" />
              Industry Expertise
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Deep Domain Expertise Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">6 Key Industries</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              I help companies in regulated and complex industries transform their customer experiences with Salesforce.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Industry</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Each industry has unique challenges. I bring specialized solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              
              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none z-0`} />
                  
                  {/* Header */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 bg-gradient-to-br ${industry.color} rounded-xl shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className={`text-xs font-semibold ${industry.textColor} bg-white px-3 py-1 rounded-full shadow-sm`}>
                        {industry.stats}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{industry.description}</p>

                    {/* Challenges & Solutions Preview */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div>
                        <h4 className="text-xs font-semibold uppercase text-gray-500 mb-2">Challenges</h4>
                        <ul className="space-y-1">
                          {industry.challenges.slice(0, 2).map((item, i) => (
                            <li key={i} className="text-xs text-gray-600 flex items-center gap-1">
                              <span className={`w-1 h-1 rounded-full bg-gradient-to-r ${industry.color}`}></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase text-gray-500 mb-2">Solutions</h4>
                        
                  <ul className="space-y-2 mb-6">

                    {industry.solutions.map((item,i)=>(
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">

                        <CheckCircle className={`w-4 h-4 ${industry.textColor} flex-shrink-0 mt-0.5`} />

                        <span>{item}</span>

                      </li>
                    ))}

                  </ul>
                      </div>
                    </div>

                    {/* CTA */}
                        <Link 
                    to={industry.link}
                    className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors group/link"
                  >
                    Learn more

                    <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform"/>
                  </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Impact Stats */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Industry Projects", icon: Building2  },
              { number: "6", label: "Industry Verticals", icon: Building2 },
              { number: "100%", label: "Compliance Success", icon: Shield },
              { number: "15+", label: "Years Experience", icon: Award }
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            Ready to transform your industry?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how my industry expertise can help you overcome challenges and seize opportunities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all"
          >
            Schedule a consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default IndustriesPage;