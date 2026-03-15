import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  GitBranch, Network, Database, Cloud,
  Shield, Zap, ArrowRight, RefreshCw,
  CheckCircle, AlertTriangle, Cpu,
  Server, Lock, Globe, Code,
  Box, Layers, Repeat, FileText,
  Users, Building2, Target, TrendingUp
} from "lucide-react";

const ArchitectureComplexityVisualizer = () => {
  const [viewMode, setViewMode] = useState<'chaos' | 'clarity'>('clarity');
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const expertiseAreas = [
    {
      area: "Integration Architecture",
      description: "Connect 50+ enterprise systems with reliable, scalable patterns",
      icon: Network,
      color: "from-blue-500 to-cyan-500",
      patterns: ["MuleSoft", "Platform Events", "Composite APIs", "Change Data Capture"],
      challenge: "12 different ERPs, CRMs, and legacy systems with no standard integration pattern",
      solution: "Event-driven architecture with 99.99% uptime, handling 10M+ daily messages"
    },
    {
      area: "Data Architecture",
      description: "Tame massive datasets with intelligent partitioning and indexing",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      patterns: ["Big Objects", "Skinny Tables", "Data Archiving", "Sharding"],
      challenge: "500M+ records causing 3-minute query timeouts and daily batch failures",
      solution: "Tiered data architecture: queries now under 2 seconds, 70% storage reduction"
    },
    {
      area: "Security Architecture",
      description: "Enterprise-grade security with zero compromises",
      icon: Shield,
      color: "from-emerald-500 to-teal-500",
      patterns: ["Shield Platform", "Field Encryption", "MFA", "Audit Trail"],
      challenge: "HIPAA compliance with 15+ PHI exposure risks identified",
      solution: "Complete security overhaul: 100% compliant, zero breaches in 3 years"
    },
    {
      area: "Integration Patterns",
      description: "Real-time, batch, and event-driven integration strategies",
      icon: GitBranch,
      color: "from-amber-500 to-orange-500",
      patterns: ["Real-time APIs", "Batch Processing", "Event-Driven", "CDC"],
      challenge: "Systems couldn't talk to each other - data silos everywhere",
      solution: "Unified integration layer connecting all systems with consistent patterns"
    }
  ];

  const chaosNodes = [
    { id: 1, type: "erp", label: "SAP", x: 15, y: 20, icon: Server },
    { id: 2, type: "crm", label: "Salesforce", x: 80, y: 15, icon: Cloud },
    { id: 3, type: "db", label: "Oracle", x: 25, y: 65, icon: Database },
    { id: 4, type: "legacy", label: "Mainframe", x: 70, y: 75, icon: Cpu },
    { id: 5, type: "api", label: "REST APIs", x: 45, y: 30, icon: Globe },
    { id: 6, type: "queue", label: "Message Queue", x: 55, y: 55, icon: RefreshCw },
    { id: 7, type: "auth", label: "Auth Service", x: 30, y: 45, icon: Lock },
    { id: 8, type: "dw", label: "Data Warehouse", x: 65, y: 40, icon: Database },
    { id: 9, type: "file", label: "File Server", x: 40, y: 70, icon: FileText },
    { id: 10, type: "cache", label: "Redis Cache", x: 20, y: 80, icon: Zap },
  ];

  const chaosConnections = [
    [1, 2], [1, 3], [2, 4], [2, 5], [3, 6], [4, 7], [5, 8], [6, 9], [7, 10], [8, 3],
    [2, 7], [3, 8], [4, 5], [5, 9], [6, 2], [7, 4], [8, 1], [9, 3], [10, 5], [1, 8],
    [3, 4], [5, 7], [6, 8], [9, 2], [10, 1]
  ];

  const clarityNodes = [
    { id: 1, type: "gateway", label: "API Gateway", x: 50, y: 20, icon: Globe, layer: "edge" },
    { id: 2, type: "auth", label: "Auth Layer", x: 20, y: 35, icon: Lock, layer: "security" },
    { id: 3, type: "event", label: "Event Bus", x: 50, y: 35, icon: Repeat, layer: "integration" },
    { id: 4, type: "transform", label: "Transform", x: 80, y: 35, icon: Code, layer: "integration" },
    { id: 5, type: "salesforce", label: "Salesforce", x: 20, y: 60, icon: Cloud, layer: "core" },
    { id: 6, type: "erp", label: "ERP", x: 40, y: 60, icon: Server, layer: "core" },
    { id: 7, type: "dw", label: "Data Warehouse", x: 60, y: 60, icon: Database, layer: "core" },
    { id: 8, type: "legacy", label: "Legacy Systems", x: 80, y: 60, icon: Cpu, layer: "core" },
    { id: 9, type: "monitor", label: "Monitoring", x: 35, y: 80, icon: TrendingUp, layer: "ops" },
    { id: 10, type: "audit", label: "Audit Trail", x: 65, y: 80, icon: FileText, layer: "ops" },
  ];

  const clarityConnections = [
    [1, 2], [1, 3], [1, 4],
    [2, 5], [2, 6], [3, 7], [4, 8],
    [5, 9], [6, 9], [7, 10], [8, 10],
    [9, 5], [9, 6], [10, 7], [10, 8]
  ];

  const layers = [
    { name: "Edge Layer", y: 20, color: "from-blue-500/20 to-cyan-500/20" },
    { name: "Security & Integration", y: 35, color: "from-purple-500/20 to-pink-500/20" },
    { name: "Core Systems", y: 60, color: "from-emerald-500/20 to-teal-500/20" },
    { name: "Operations & Monitoring", y: 80, color: "from-amber-500/20 to-orange-500/20" }
  ];

  const metrics = [
    {
      label: "Integration Points",
      before: "50+ point-to-point",
      after: "3 layers, 10 connectors",
      improvement: "70% reduction"
    },
    {
      label: "System Downtime",
      before: "12 hrs/month",
      after: "< 5 mins/month",
      improvement: "99.99% uptime"
    },
    {
      label: "Data Latency",
      before: "hours to days",
      after: "sub-second",
      improvement: "1000x faster"
    },
    {
      label: "Security Incidents",
      before: "15+ critical risks",
      after: "zero",
      improvement: "100% secure"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-white/20">
              <Cpu className="w-4 h-4" />
              Architecture Complexity Visualizer
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              From <span className="text-red-400">Chaos</span> to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Clarity</span>
            </h2>
            <p className="text-gray-300 text-lg">
              See how I transform tangled enterprise architectures into elegant, scalable systems.
              Toggle between views to witness the transformation.
            </p>
          </motion.div>

          {/* Toggle Switch */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-6 mt-8"
          >
            <button
              onClick={() => setViewMode('chaos')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                viewMode === 'chaos'
                  ? 'bg-red-500/20 text-red-400 border-2 border-red-500/50'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              <span className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Chaos Mode
              </span>
            </button>
            <button
              onClick={() => setViewMode('clarity')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                viewMode === 'clarity'
                  ? 'bg-green-500/20 text-green-400 border-2 border-green-500/50'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Clarity Mode
              </span>
            </button>
          </motion.div>
        </div>

        {/* Visualization Area */}
        <div className="relative h-[600px] mb-16 bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
          {/* Layer Indicators (Clarity Mode) */}
          <AnimatePresence mode="wait">
            {viewMode === 'clarity' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0"
              >
                {layers.map((layer, i) => (
                  <div
                    key={i}
                    className={`absolute left-0 right-0 h-16 bg-gradient-to-r ${layer.color} pointer-events-none`}
                    style={{ top: layer.y - 8 }}
                  >
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xs text-white/40">
                      {layer.name}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <AnimatePresence mode="wait">
              {(viewMode === 'chaos' ? chaosConnections : clarityConnections).map((conn, idx) => {
                const nodes = viewMode === 'chaos' ? chaosNodes : clarityNodes;
                const fromNode = nodes.find(n => n.id === conn[0]);
                const toNode = nodes.find(n => n.id === conn[1]);
                
                if (!fromNode || !toNode) return null;

                return (
                  <motion.line
                    key={`${viewMode}-${idx}`}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: viewMode === 'chaos' ? 0.2 : 0.4 }}
                    exit={{ pathLength: 0, opacity: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.01 }}
                    x1={`${fromNode.x}%`}
                    y1={`${fromNode.y}%`}
                    x2={`${toNode.x}%`}
                    y2={`${toNode.y}%`}
                    stroke={viewMode === 'chaos' ? "#ef4444" : "#10b981"}
                    strokeWidth={viewMode === 'chaos' ? "1" : "2"}
                    strokeDasharray={viewMode === 'chaos' ? "4 4" : "none"}
                  />
                );
              })}
            </AnimatePresence>
          </svg>

          {/* Nodes */}
          <AnimatePresence mode="wait">
            {(viewMode === 'chaos' ? chaosNodes : clarityNodes).map((node, idx) => {
              const Icon = node.icon;
              
              return (
                <motion.div
                  key={`${viewMode}-${node.id}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.02 }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <motion.div
                    animate={{
                      scale: activeNode === node.id ? 1.2 : 1,
                      boxShadow: activeNode === node.id ? '0 0 20px rgba(139, 92, 246, 0.5)' : 'none'
                    }}
                    className={`w-12 h-12 rounded-xl ${
                      viewMode === 'chaos'
                        ? 'bg-red-500/20 border-2 border-red-500/50'
                        : 'bg-gradient-to-br from-blue-500 to-purple-500'
                    } flex items-center justify-center shadow-lg`}
                  >
                    <Icon className={`w-6 h-6 ${
                      viewMode === 'chaos' ? 'text-red-400' : 'text-white'
                    }`} />
                  </motion.div>
                  
                  {/* Node Label */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap">
                    <span className={`text-xs px-2 py-1 rounded ${
                      viewMode === 'chaos'
                        ? 'bg-red-500/20 text-red-400'
                        : 'bg-white/10 text-white'
                    }`}>
                      {node.label}
                    </span>
                  </div>

                  {/* Tooltip */}
                  {activeNode === node.id && viewMode === 'clarity' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-gray-800 rounded-lg p-3 shadow-xl border border-gray-700 z-20"
                    >
                      <p className="text-xs text-gray-300">
                        <span className="font-bold text-purple-400">{node.label}</span>
                        <br />
                        Layer: {node.layer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Mode Label */}
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
            <span className={`text-sm font-semibold ${
              viewMode === 'chaos' ? 'text-red-400' : 'text-green-400'
            }`}>
              {viewMode === 'chaos' ? '⚡ Chaos Mode' : '✨ Clarity Mode'}
            </span>
          </div>
        </div>

        {/* Metrics Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
            >
              <h3 className="text-sm font-medium text-gray-400 mb-2">{metric.label}</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-red-400 line-through">{metric.before}</span>
                <ArrowRight className="w-3 h-3 text-gray-600" />
                <span className="text-sm font-bold text-green-400">{metric.after}</span>
              </div>
              <div className="text-xs text-purple-400">{metric.improvement}</div>
            </motion.div>
          ))}
        </div>

        {/* Expertise Grid */}
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
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{area.area}</h3>
                <p className="text-sm text-gray-400 mb-4">{area.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="text-xs">
                    <span className="text-red-400 block mb-1">Challenge:</span>
                    <span className="text-gray-300">{area.challenge}</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-green-400 block mb-1">Solution:</span>
                    <span className="text-gray-300">{area.solution}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {area.patterns.map((pattern, i) => (
                    <span key={i} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                      {pattern}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded-full transition-all transform hover:scale-105 shadow-lg shadow-purple-600/25"
          >
            Let's bring clarity to your architecture
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureComplexityVisualizer;