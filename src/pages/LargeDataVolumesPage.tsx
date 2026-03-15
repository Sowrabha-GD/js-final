import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Database, Gauge, Zap, AlertTriangle,
  CheckCircle, ArrowRight, Award, Shield,
  BarChart, Clock, Server, Cpu,
  Filter, Layers, RefreshCw, TrendingUp,
  Scale, HardDrive, Activity, PieChart,
  Settings
} from "lucide-react";

const LargeDataVolumesPage = () => {
  const challenges = [
    {
      title: "Query Timeouts & Performance Degradation",
      description: "As data grows, simple queries start timing out. Users wait minutes for reports that used to load in seconds.",
      impact: "Productivity loss, frustrated users, abandoned workflows",
      icon: Clock,
      severity: "Critical"
    },
    {
      title: "Governor Limit Breaches",
      description: "CPU time, query rows, heap size - large volumes push every limit in the platform.",
      impact: "Failed operations, unreliable processes, user errors",
      icon: AlertTriangle,
      severity: "High"
    },
    {
      title: "Skewed Data & Poor Indexing",
      description: "Data distribution issues cause some records to be virtually inaccessible.",
      impact: "Incomplete reporting, data silos, compliance risks",
      icon: Scale,
      severity: "High"
    },
    {
      title: "Storage Cost Explosion",
      description: "External data storage costs spiral out of control as data grows.",
      impact: "Budget overruns, difficult decisions about data retention",
      icon: HardDrive,
      severity: "Medium"
    }
  ];

  const solutions = [
    {
      title: "Big Objects Implementation",
      description: "I design and implement Big Object strategies for historical data that needs to be accessible but not actively updated.",
      technical: "Big Objects, Async SOQL, Partitioning",
      icon: Database,
      color: "from-blue-500 to-cyan-500",
      outcomes: [
        "Access to billions of records",
        "No impact on core performance",
        "Cost-effective storage"
      ]
    },
    {
      title: "Skinny Tables & Custom Indexing",
      description: "I create optimized data structures that bypass Salesforce's native limitations for specific query patterns.",
      technical: "Skinny Tables, Custom Indexes, External Objects",
      icon: Filter,
      color: "from-purple-500 to-pink-500",
      outcomes: [
        "10-100x faster queries",
        "Reduced CPU time",
        "Predictable performance"
      ]
    },
    {
      title: "Data Archiving Strategy",
      description: "I design comprehensive archiving strategies that balance accessibility, performance, and cost.",
      technical: "Platform Events, Heroku Connect, External Storage",
      icon: Layers,
      color: "from-emerald-500 to-teal-500",
      outcomes: [
        "Reduced data volume by 60-80%",
        "Compliant data retention",
        "On-demand historical access"
      ]
    },
    {
      title: "Query Optimization",
      description: "I refactor inefficient queries, add selective filters, and restructure data access patterns.",
      technical: "SOQL Optimization, Selective Queries, De-normalization",
      icon: Zap,
      color: "from-amber-500 to-orange-500",
      outcomes: [
        "Query times from minutes to seconds",
        "Reduced governor limit usage",
        "Happy, productive users"
      ]
    }
  ];

  const caseStudy = {
    client: "Global Financial Services Firm",
    challenge: "500M+ transaction records causing daily query timeouts and batch failures",
    solution: "Big Objects implementation + query optimization + archiving strategy",
    results: [
      "Query time: 3 minutes → 2 seconds",
      "Data volume reduced by 70%",
      "Zero governor limit breaches",
      "$200K annual storage cost savings"
    ]
  };

  const metrics = [
    { label: "Query Performance Improvement", value: "10-100x", icon: Gauge },
    { label: "Data Volume Reduction", value: "60-80%", icon: Database },
    { label: "Storage Cost Savings", value: "40-60%", icon: TrendingUp },
    { label: "Client LDV Projects", value: "15+", icon: Award }
  ];

  const architecture = [
    {
      component: "Hot Data",
      description: "Active records in standard objects",
      storage: "Salesforce Core",
      access: "Real-time"
    },
    {
      component: "Warm Data",
      description: "Recent historical data",
      storage: "Big Objects",
      access: "< 2 seconds"
    },
    {
      component: "Cold Data",
      description: "Archived historical data",
      storage: "External (S3/Heroku)",
      access: "On-demand"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900 text-white overflow-hidden">
        {/* Data Flow Animation */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dataflow" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="white" />
                <circle cx="50" cy="10" r="2" fill="white" />
                <circle cx="30" cy="40" r="2" fill="white" />
                <line x1="10" y1="10" x2="50" y2="10" stroke="white" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="10" y1="10" x2="30" y2="40" stroke="white" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="50" y1="10" x2="30" y2="40" stroke="white" strokeWidth="1" strokeDasharray="2 2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dataflow)" />
          </svg>
        </div>

        <div className="container-wide py-20 md:py-28 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                <Database className="w-4 h-4" />
                Large Data Volumes (LDV)
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Taming <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-cyan-200">Billion-Record</span> Datasets
              </h1>
              
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl">
                I help enterprises overcome Salesforce's native limitations to handle massive data volumes without sacrificing performance. When standard approaches fail, I bring battle-tested LDV strategies.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-900 hover:bg-indigo-50 rounded-xl font-medium transition-all"
                >
                  Tackle your LDV challenges
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/LargeDataVolumesCaseStudyPage"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl font-medium transition-all border border-white/20"
                >
                  View LDV case studies
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The LDV Problem */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 px-4 py-2 rounded-full">
              The Challenge
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-6 mb-4">
              When <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">Data Volume</span> Becomes a Crisis
            </h2>
            <p className="text-gray-600 text-lg">
              I've seen orgs crippled by data growth. Here are the real problems I solve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{challenge.title}</h3>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                          challenge.severity === 'Critical' ? 'bg-red-100 text-red-700' :
                          challenge.severity === 'High' ? 'bg-orange-100 text-orange-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {challenge.severity}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{challenge.description}</p>
                      <p className="text-sm text-gray-500 italic">Impact: {challenge.impact}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* My Solutions */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">LDV Arsenal</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Battle-tested strategies I've used to tame massive datasets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                      <p className="text-sm text-gray-500 font-mono bg-gray-50 px-3 py-1 rounded-full inline-block">
                        {solution.technical}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  
                  <ul className="space-y-2">
                    {solution.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Data Architecture Pyramid */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">Data Temperature</span> Architecture
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Not all data needs the same accessibility. I design tiered storage strategies that balance performance, cost, and compliance.
              </p>

              <div className="space-y-4">
                {architecture.map((layer, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className={`w-2 h-12 rounded-full ${
                      index === 0 ? 'bg-red-500' : index === 1 ? 'bg-yellow-500' : 'bg-blue-500'
                    }`} />
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-bold text-gray-900">{layer.component}</h3>
                        <span className="text-sm text-gray-500">{layer.storage}</span>
                      </div>
                      <p className="text-sm text-gray-600">{layer.description}</p>
                      <p className="text-xs text-gray-400 mt-1">Access: {layer.access}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-2xl p-8 border border-indigo-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-World Impact</h3>
              
              <div className="mb-6 p-4 bg-white rounded-lg border border-indigo-100">
                <p className="text-sm text-gray-600 mb-2 font-semibold">CASE STUDY</p>
                <h4 className="font-bold text-gray-900 mb-2">{caseStudy.client}</h4>
                <p className="text-sm text-gray-600 mb-3 italic">"{caseStudy.challenge}"</p>
                <p className="text-sm text-gray-700 mb-3"><span className="font-semibold">Solution:</span> {caseStudy.solution}</p>
                <ul className="space-y-1">
                  {caseStudy.results.map((result, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {metrics.map((metric, i) => {
                  const Icon = metric.icon;
                  return (
                    <div key={i} className="bg-white rounded-lg p-3 text-center">
                      <Icon className="w-4 h-4 text-indigo-600 mx-auto mb-1" />
                      <div className="text-lg font-bold text-gray-900">{metric.value}</div>
                      <div className="text-xs text-gray-500">{metric.label}</div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">LDV Methodology</span>
            </h2>
            <p className="text-gray-600 text-lg">
              A systematic approach to diagnosing and solving data volume issues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                phase: "Diagnose",
                description: "I analyze query performance, governor limit usage, and data distribution patterns.",
                icon: Activity,
                deliverables: ["Query performance baseline", "Hotspot identification", "Limit utilization report"]
              },
              {
                phase: "Design",
                description: "I architect a tiered data strategy tailored to your access patterns.",
                icon: Layers,
                deliverables: ["Data temperature model", "Archiving strategy", "Index design"]
              },
              {
                phase: "Implement",
                description: "I build and deploy solutions with minimal disruption to users.",
                icon: Settings,
                deliverables: ["Big Objects", "Skinny tables", "Archive jobs"]
              },
              {
                phase: "Validate",
                description: "I measure results and tune for optimal performance.",
                icon: Gauge,
                deliverables: ["Performance benchmarks", "User validation", "Ongoing monitoring"]
              }
            ].map((phase, index) => {
              const Icon = phase.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.phase}</h3>
                  <p className="text-sm text-gray-600 mb-3">{phase.description}</p>
                  <ul className="space-y-1">
                    {phase.deliverables.map((item, i) => (
                      <li key={i} className="text-xs text-gray-500 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-indigo-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              LDV <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">FAQ</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Questions I hear from clients facing data volume challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "At what data volume do I need to worry?",
                a: "It's not about absolute volume but query patterns. I've seen issues at 5M records and success at 500M. I help you understand your specific risk profile."
              },
              {
                q: "Can Big Objects replace standard objects?",
                a: "No - Big Objects have different query semantics. I help you identify which data belongs where in your architecture."
              },
              {
                q: "How much can archiving improve performance?",
                a: "Typically 60-80% reduction in active data volume, which translates to 10-100x query performance improvements."
              },
              {
                q: "What's the cost of doing nothing?",
                a: "Beyond frustrated users, you risk failed batches, inaccurate reports, and eventually, platform instability. I've seen companies hit hard limits that stopped business processes."
              }
            ].map((faq, index) => (
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

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-900 to-cyan-900 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Is data volume slowing you down?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Let's diagnose your LDV challenges and design a strategy that scales.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-900 hover:bg-indigo-50 font-medium rounded-full transition-all transform hover:scale-105"
              >
                Schedule an LDV audit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/LargeDataVolumesCaseStudyPage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full font-medium transition-all border border-white/20"
              >
                View LDV case studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default LargeDataVolumesPage;