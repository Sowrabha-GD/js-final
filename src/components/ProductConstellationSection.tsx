import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Cloud, HeadphonesIcon, Users2, Megaphone, 
  Calculator, Database, Shield, Code, GitBranch,
  Sparkles, Target, TrendingUp, Award, Star,
  ArrowRight, CheckCircle
} from "lucide-react";

const ProductConstellationSection = () => {
  const [activeProduct, setActiveProduct] = useState<string | null>(null);
  const [hoveredCluster, setHoveredCluster] = useState<string | null>(null);

  // Product Clusters
  const clusters = [
    {
      id: "sales",
      name: "Sales Cloud",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500",
      description: "Accelerate deals with AI-powered selling",
      products: [
        { name: "Lead Management", description: "Intelligent lead scoring & routing", level: "Expert" },
        { name: "Opportunity Management", description: "Pipeline acceleration & forecasting", level: "Expert" },
        { name: "Territory Planning", description: "Optimized sales territories", level: "Advanced" },
        { name: "Sales Engagement", description: "Personalized outreach at scale", level: "Advanced" },
      ],
      position: { x: 0, y: -180 }
    },
    {
      id: "service",
      name: "Service Cloud",
      icon: HeadphonesIcon,
      color: "from-purple-500 to-pink-500",
      description: "AI-powered customer service at scale",
      products: [
        { name: "Omni-Channel Routing", description: "Intelligent case distribution", level: "Expert" },
        { name: "Field Service", description: "Mobile workforce optimization", level: "Expert" },
        { name: "Knowledge Management", description: "AI-powered knowledge articles", level: "Advanced" },
        { name: "Service Analytics", description: "Real-time service insights", level: "Advanced" },
      ],
      position: { x: 160, y: -90 }
    },
    {
      id: "experience",
      name: "Experience Cloud",
      icon: Users2,
      color: "from-emerald-500 to-teal-500",
      description: "Connected digital experiences",
      products: [
        { name: "Customer Portals", description: "Self-service communities", level: "Expert" },
        { name: "Partner Relationship", description: "Extended partner networks", level: "Advanced" },
        { name: "Employee Apps", description: "Modern intranet solutions", level: "Advanced" },
        { name: "Digital Branding", description: "Consistent brand experiences", level: "Intermediate" },
      ],
      position: { x: 160, y: 90 }
    },
    {
      id: "marketing",
      name: "Marketing Cloud",
      icon: Megaphone,
      color: "from-amber-500 to-orange-500",
      description: "Personalized journeys across channels",
      products: [
        { name: "Journey Builder", description: "Cross-channel customer journeys", level: "Expert" },
        { name: "Email Studio", description: "Personalized email campaigns", level: "Advanced" },
        { name: "Mobile Studio", description: "SMS & push notifications", level: "Advanced" },
        { name: "Advertising Studio", description: "Paid media optimization", level: "Intermediate" },
      ],
      position: { x: 0, y: 180 }
    },
    {
      id: "cpq",
      name: "CPQ & Revenue",
      icon: Calculator,
      color: "from-red-500 to-rose-500",
      description: "Quote-to-cash automation",
      products: [
        { name: "Product Configuration", description: "Guided selling experiences", level: "Expert" },
        { name: "Pricing & Discounting", description: "Complex pricing rules", level: "Expert" },
        { name: "Contract Management", description: "Automated contract generation", level: "Advanced" },
        { name: "Billing Automation", description: "Subscription & usage billing", level: "Advanced" },
      ],
      position: { x: -160, y: 90 }
    },
    {
      id: "integration",
      name: "Integration Cloud",
      icon: GitBranch,
      color: "from-indigo-500 to-blue-500",
      description: "Seamless enterprise connectivity",
      products: [
        { name: "MuleSoft", description: "Any-to-any integration", level: "Expert" },
        { name: "Platform Events", description: "Real-time event processing", level: "Expert" },
        { name: "Composite APIs", description: "Orchestrated API calls", level: "Advanced" },
        { name: "Change Data Capture", description: "Real-time data sync", level: "Advanced" },
      ],
      position: { x: -160, y: -90 }
    }
  ];

  // Connection lines between clusters
  const connections = [
    { from: "sales", to: "service" },
    { from: "sales", to: "cpq" },
    { from: "service", to: "experience" },
    { from: "service", to: "integration" },
    { from: "marketing", to: "experience" },
    { from: "marketing", to: "integration" },
    { from: "cpq", to: "integration" },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 overflow-hidden">
      <div className="container-wide">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
            <Sparkles className="w-4 h-4" />
            Product Constellation
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Mastery Across the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Salesforce Universe</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Deep expertise across every cloud - from sales to service, marketing to revenue.
          </p>
        </div>

        {/* Constellation Visualization */}
        <div className="relative min-h-[600px] flex items-center justify-center mb-16">
          {/* Center Orb - Core Platform */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="relative cursor-pointer"
              onMouseEnter={() => setHoveredCluster("core")}
              onMouseLeave={() => setHoveredCluster(null)}
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-2xl">
                <Cloud className="w-12 h-12 text-white" />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-ping opacity-20"></div>
              
              {/* Label */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">
                <span className="font-bold">Salesforce Platform</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="productLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#C084FC" />
              </linearGradient>
            </defs>
            
            {connections.map((conn, idx) => {
              const fromCluster = clusters.find(c => c.id === conn.from);
              const toCluster = clusters.find(c => c.id === conn.to);
              
              if (!fromCluster || !toCluster) return null;
              
              const fromX = fromCluster.position.x + 50;
              const fromY = fromCluster.position.y + 50;
              const toX = toCluster.position.x + 50;
              const toY = toCluster.position.y + 50;
              
              return (
                <motion.line
                  key={idx}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.2 }}
                  transition={{ duration: 1.5, delay: idx * 0.1 }}
                  x1={`${fromX}%`}
                  y1={`${fromY}%`}
                  x2={`${toX}%`}
                  y2={`${toY}%`}
                  stroke="url(#productLineGradient)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
              );
            })}
          </svg>

          {/* Product Clusters */}
          {clusters.map((cluster) => {
            const Icon = cluster.icon;
            const x = cluster.position.x + 50;
            const y = cluster.position.y + 50;
            
            return (
              <motion.div
                key={cluster.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ left: `${x}%`, top: `${y}%` }}
                onMouseEnter={() => {
                  setActiveProduct(cluster.id);
                  setHoveredCluster(cluster.id);
                }}
                onMouseLeave={() => {
                  setActiveProduct(null);
                  setHoveredCluster(null);
                }}
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="relative cursor-pointer"
                >
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${cluster.color} flex items-center justify-center shadow-xl`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Glow on hover */}
                  {hoveredCluster === cluster.id && (
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1.3, opacity: 0.3 }}
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${cluster.color} blur-xl`}
                    />
                  )}
                  
                  {/* Cluster Name */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="text-xs font-medium text-gray-300">{cluster.name}</span>
                  </div>
                </motion.div>

                {/* Detailed Product Card */}
                {activeProduct === cluster.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-72 bg-gray-800 rounded-xl p-4 shadow-2xl border border-gray-700 z-30"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${cluster.color}`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="font-bold text-white">{cluster.name}</h4>
                    </div>
                    
                    <p className="text-sm text-gray-300 mb-3">{cluster.description}</p>
                    
                    <div className="space-y-2">
                      {cluster.products.map((product, i) => (
                        <div key={i} className="flex items-center justify-between p-2 bg-gray-700/50 rounded-lg">
                          <div>
                            <span className="text-xs font-medium text-white">{product.name}</span>
                            <p className="text-xs text-gray-400">{product.description}</p>
                          </div>
                          <span className={`text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r ${cluster.color} text-white`}>
                            {product.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Expertise Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { number: "6", label: "Core Clouds", description: "Deep expertise across major clouds" },
            { number: "24+", label: "Products", description: "Specialized product knowledge" },
            { number: "15+", label: "Certifications", description: "Industry-validated expertise" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10"
            >
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-sm font-medium text-blue-400 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="/expertise"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all"
          >
            Explore all products
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductConstellationSection;