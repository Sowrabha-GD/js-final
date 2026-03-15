import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Cloud, Database, Shield, Code, GitBranch, 
  Users, Building2, Car, Plane, Heart,
  CheckCircle, Star, Sparkles, ArrowRight,
  Briefcase, Target, TrendingUp, Award
} from "lucide-react";

const ExpertiseUniverseSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const [activeDimension, setActiveDimension] = useState<string | null>(null);

  // Expertise Dimensions
  const dimensions = [
    {
      id: "clouds",
      title: "Salesforce Clouds",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      description: "Deep expertise across the entire Salesforce product family",
      items: [
        { name: "Sales Cloud", level: "Expert", description: "Sales process optimization, forecasting, territory management", icon: TrendingUp },
        { name: "Service Cloud", level: "Expert", description: "Omni-channel support, field service, knowledge management", icon: Users },
        { name: "Experience Cloud", level: "Advanced", description: "Customer/partner portals, digital communities", icon: Users },
        { name: "CPQ & Revenue Cloud", level: "Expert", description: "Quote-to-cash, product configuration, pricing", icon: Database },
        { name: "Marketing Cloud", level: "Advanced", description: "Journey mapping, personalization, analytics", icon: Target },
      ]
    },
    {
      id: "industries",
      title: "Industry Verticals",
      icon: Building2,
      color: "from-purple-500 to-pink-500",
      description: "Specialized knowledge in regulated and complex industries",
      items: [
        { name: "Financial Services", level: "Expert", description: "FSC, wealth management, compliance, secure portals", icon: Building2 },
        { name: "Automotive", level: "Expert", description: "Dealer networks, connected vehicles, loyalty programs", icon: Car },
        { name: "Travel & Hospitality", level: "Advanced", description: "Guest 360, loyalty integration, seamless booking", icon: Plane },
        { name: "Healthcare", level: "Advanced", description: "HIPAA compliance, patient portals, care coordination", icon: Heart },
      ]
    },
    {
      id: "technical",
      title: "Technical Architecture",
      icon: Code,
      color: "from-emerald-500 to-teal-500",
      description: "Deep technical capabilities for complex enterprise challenges",
      items: [
        { name: "Large Data Volumes", level: "Expert", description: "LDV strategies, indexing, partitioning, Big Objects", icon: Database },
        { name: "Integration Patterns", level: "Expert", description: "MuleSoft, platform events, composite APIs, CDC", icon: GitBranch },
        { name: "Security & Governance", level: "Expert", description: "Shield, encryption, field audit trail, MFA", icon: Shield },
        { name: "Apex Design Patterns", level: "Expert", description: "Domain/selector patterns, trigger frameworks", icon: Code },
      ]
    },
    {
      id: "solutions",
      title: "Solution Areas",
      icon: Briefcase,
      color: "from-amber-500 to-orange-500",
      description: "End-to-end business solutions that drive transformation",
      items: [
        { name: "Digital Onboarding", level: "Expert", description: "Seamless customer/employee onboarding journeys", icon: Users },
        { name: "Quote to Cash", level: "Expert", description: "End-to-end revenue lifecycle automation", icon: TrendingUp },
        { name: "Service Transformation", level: "Expert", description: "AI-powered service, field service optimization", icon: Users },
        { name: "Customer Communities", level: "Advanced", description: "Self-service portals, partner collaboration", icon: Users },
      ]
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24 overflow-hidden" ref={containerRef}>
      <div className="container-wide">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 px-4 py-2 rounded-full">
            Expertise Universe
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-6 mb-4">
            Depth Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Every Dimension</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Not just breadth - true depth across clouds, industries, and technical domains.
          </p>
        </div>

        {/* Central Line - Now connecting expertise areas */}
        <div className="relative">
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"
            style={{ 
              scaleY: scrollYProgress,
              transformOrigin: "top"
            }}
          />

          {/* Expertise Dimensions */}
          <div className="space-y-24">
            {dimensions.map((dimension, index) => {
              const Icon = dimension.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={dimension.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all"
                    >
                      {/* Dimension Header */}
                      <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${dimension.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}>
                        <Icon className="w-4 h-4" />
                        {dimension.title}
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 mb-6">
                        {dimension.description}
                      </p>

                      {/* Expertise Items */}
                      <div className="space-y-4">
                        {dimension.items.map((item, i) => {
                          const ItemIcon = item.icon;
                          return (
                            <motion.div 
                              key={i}
                              whileHover={{ x: isEven ? -5 : 5 }}
                              className={`flex items-start gap-3 p-3 bg-gray-50 rounded-xl ${
                                isEven ? "flex-row-reverse" : ""
                              }`}
                            >
                              <div className={`flex-shrink-0 w-8 h-8 bg-gradient-to-r ${dimension.color} bg-opacity-10 rounded-lg flex items-center justify-center`}>
                                <ItemIcon className={`w-4 h-4 text-transparent bg-clip-text bg-gradient-to-r ${dimension.color}`} />
                              </div>
                              <div className={`flex-1 ${isEven ? "text-right" : "text-left"}`}>
                                <div className="flex items-center gap-2 mb-1 justify-between">
                                  <span className="font-semibold text-gray-900">{item.name}</span>
                                  <span className={`text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r ${dimension.color} text-white`}>
                                    {item.level}
                                  </span>
                                </div>
                                <p className="text-sm text-gray-500">{item.description}</p>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  </div>

                  {/* Dimension Node */}
                  <div className="relative">
                    <motion.div 
                      whileHover={{ scale: 1.2 }}
                      onMouseEnter={() => setActiveDimension(dimension.id)}
                      onMouseLeave={() => setActiveDimension(null)}
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${dimension.color} flex items-center justify-center shadow-xl z-10 relative cursor-pointer`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    
                    {/* Glow Effect */}
                    {activeDimension === dimension.id && (
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1.5, opacity: 0.3 }}
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${dimension.color} blur-xl`}
                      />
                    )}
                    
                    {/* Level indicator */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-medium text-gray-500">
                      {dimension.items.length} areas
                    </div>
                  </div>

                  {/* Empty Space for Alignment */}
                  <div className="flex-1"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Expertise Depth Meter */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 text-white"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <Award className="w-6 h-6 text-yellow-400" />
                Certified Depth
              </h3>
              <p className="text-gray-300">
                15+ Salesforce certifications including CTA, Application Architect, 
                System Architect, and multiple cloud consultants.
              </p>
            </div>
            
            <div className="flex gap-4">
              {["CTA", "App Arch", "Sys Arch", "Sales", "Service"].map((cert, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-1">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-xs text-gray-400">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { number: "15+", label: "Clouds & Products", icon: Cloud },
            { number: "4", label: "Industry Verticals", icon: Building2 },
            { number: "8", label: "Technical Domains", icon: Code },
            { number: "15+", label: "Certifications", icon: Award }
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all"
              >
                <Icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a 
            href="/expertise"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all"
          >
            Explore full expertise
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseUniverseSection;