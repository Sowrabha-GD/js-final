import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Cloud, Building2, Code, Briefcase, 
  Database, Shield, Users, Car, Plane, Heart,
  Award, Star
} from "lucide-react";

const ExpertiseConstellationSection = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const expertiseNodes = [
    {
      id: "sales-cloud",
      name: "Sales Cloud",
      category: "clouds",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      description: "Sales process optimization, forecasting, territory planning",
      level: "Expert",
      radius: 120,
      angle: 0
    },
    {
      id: "service-cloud",
      name: "Service Cloud",
      category: "clouds",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      description: "Omni-channel support, field service, knowledge management",
      level: "Expert",
      radius: 120,
      angle: 45
    },
    {
      id: "cpq",
      name: "CPQ & Revenue",
      category: "clouds",
      icon: Database,
      color: "from-blue-500 to-cyan-500",
      description: "Quote-to-cash, product configuration, pricing",
      level: "Expert",
      radius: 120,
      angle: 90
    },
    {
      id: "fsc",
      name: "Financial Services",
      category: "industries",
      icon: Building2,
      color: "from-purple-500 to-pink-500",
      description: "FSC, wealth management, compliance",
      level: "Expert",
      radius: 200,
      angle: 15
    },
    {
      id: "auto",
      name: "Automotive",
      category: "industries",
      icon: Car,
      color: "from-purple-500 to-pink-500",
      description: "Dealer networks, connected vehicles",
      level: "Expert",
      radius: 200,
      angle: 75
    },
    {
      id: "travel",
      name: "Travel & Hospitality",
      category: "industries",
      icon: Plane,
      color: "from-purple-500 to-pink-500",
      description: "Guest 360, loyalty integration",
      level: "Advanced",
      radius: 200,
      angle: 135
    },
    {
      id: "healthcare",
      name: "Healthcare",
      category: "industries",
      icon: Heart,
      color: "from-purple-500 to-pink-500",
      description: "HIPAA compliance, patient portals",
      level: "Advanced",
      radius: 200,
      angle: 195
    },
    {
      id: "ldv",
      name: "Large Data Volumes",
      category: "technical",
      icon: Database,
      color: "from-emerald-500 to-teal-500",
      description: "LDV strategies, indexing, partitioning",
      level: "Expert",
      radius: 280,
      angle: 30
    },
    {
      id: "integration",
      name: "Integration",
      category: "technical",
      icon: Code,
      color: "from-emerald-500 to-teal-500",
      description: "MuleSoft, platform events, composite APIs",
      level: "Expert",
      radius: 280,
      angle: 110
    },
    {
      id: "security",
      name: "Security & Governance",
      category: "technical",
      icon: Shield,
      color: "from-emerald-500 to-teal-500",
      description: "Shield, encryption, field audit trail",
      level: "Expert",
      radius: 280,
      angle: 190
    },
    {
      id: "onboarding",
      name: "Digital Onboarding",
      category: "solutions",
      icon: Users,
      color: "from-amber-500 to-orange-500",
      description: "Seamless customer/employee journeys",
      level: "Expert",
      radius: 350,
      angle: 60
    },
    {
      id: "q2c",
      name: "Quote to Cash",
      category: "solutions",
      icon: Briefcase,
      color: "from-amber-500 to-orange-500",
      description: "End-to-end revenue lifecycle",
      level: "Expert",
      radius: 350,
      angle: 140
    },
    {
      id: "service-transformation",
      name: "Service Transformation",
      category: "solutions",
      icon: Users,
      color: "from-amber-500 to-orange-500",
      description: "AI-powered service, field service",
      level: "Expert",
      radius: 350,
      angle: 220
    },
    {
      id: "communities",
      name: "Customer Communities",
      category: "solutions",
      icon: Users,
      color: "from-amber-500 to-orange-500",
      description: "Self-service portals, collaboration",
      level: "Advanced",
      radius: 350,
      angle: 300
    }
  ];

  const categories = [
    { id: "clouds", name: "Salesforce Clouds", color: "from-blue-500 to-cyan-500", icon: Cloud },
    { id: "industries", name: "Industry Verticals", color: "from-purple-500 to-pink-500", icon: Building2 },
    { id: "technical", name: "Technical Architecture", color: "from-emerald-500 to-teal-500", icon: Code },
    { id: "solutions", name: "Solution Areas", color: "from-amber-500 to-orange-500", icon: Briefcase },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24 overflow-hidden">
      <div className="container-wide">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
            <Star className="w-4 h-4" />
            Expertise Constellation
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            A Universe of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Deep Expertise</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Each node represents a specialized capability - hover to explore the depth.
          </p>
        </div>

        {/* Constellation Visualization */}
        <div className="relative min-h-[700px] flex items-center justify-center mb-16">
          {/* Center Node - You */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="relative cursor-pointer"
              onMouseEnter={() => setActiveNode("center")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl">
                <span className="text-2xl font-bold">JS</span>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-ping opacity-30"></div>
            </motion.div>
          </motion.div>

          {/* Category Rings */}
          {categories.map((cat, catIndex) => (
            <div
              key={cat.id}
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div 
                className="rounded-full border border-dashed"
                style={{ 
                  width: `${(catIndex + 1) * 180}px`, 
                  height: `${(catIndex + 1) * 180}px`,
                  borderColor: cat.color.includes('blue') ? '#60A5FA' : 
                              cat.color.includes('purple') ? '#C084FC' :
                              cat.color.includes('emerald') ? '#34D399' : '#FBBF24'
                }}
              ></div>
            </div>
          ))}

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="constellationGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#C084FC" />
              </linearGradient>
            </defs>
            
            {expertiseNodes.map((node) => {
              const angleRad = (node.angle * Math.PI) / 180;
              const x = Math.cos(angleRad) * node.radius + 50;
              const y = Math.sin(angleRad) * node.radius + 50;
              
              return (
                <motion.line
                  key={node.id}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.2 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  x1="50%"
                  y1="50%"
                  x2={`${x}%`}
                  y2={`${y}%`}
                  stroke="url(#constellationGradient)"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
              );
            })}
          </svg>

          {/* Expertise Nodes */}
          {expertiseNodes.map((node) => {
            const angleRad = (node.angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * node.radius + 50;
            const y = Math.sin(angleRad) * node.radius + 50;
            const Icon = node.icon;
            
            return (
              <motion.div
                key={node.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ left: `${x}%`, top: `${y}%` }}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
              >
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  className="relative cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${node.color} flex items-center justify-center shadow-xl`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  
                  {/* Glow on hover */}
                  {activeNode === node.id && (
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1.3, opacity: 0.4 }}
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${node.color} blur-md`}
                    />
                  )}
                </motion.div>

                {/* Tooltip */}
                {activeNode === node.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-gray-800 rounded-lg p-3 shadow-xl border border-gray-700 z-30"
                  >
                    <h4 className="font-bold text-white text-sm">{node.name}</h4>
                    <p className="text-xs text-gray-300 mt-1">{node.description}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${node.color} text-white`}>
                        {node.level}
                      </span>
                      <span className="text-xs text-gray-400">{node.category}</span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Category Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.id} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${cat.color}`}></div>
                <Icon className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-300">{cat.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseConstellationSection;