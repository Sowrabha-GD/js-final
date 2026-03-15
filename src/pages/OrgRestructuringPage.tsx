import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  GitBranch, Share2, Copy, Trash2,
  CheckCircle, ArrowRight, Award, AlertTriangle,
  Map, Layers, Move, Split,
  Merge, RefreshCw, Users, Building2,
  FileText, Clock, Shield, TrendingUp,
  Zap
} from "lucide-react";

const OrgRestructuringPage = () => {
  const scenarios = [
    {
      title: "M&A Integration",
      description: "Two companies become one - but their Salesforce orgs are completely different.",
      icon: Merge,
      complexity: "High",
      examples: [
        "Acquired company with 500+ users",
        "Different sales processes and territories",
        "Duplicate customer records across orgs",
        "Conflicting picklist values"
      ]
    },
    {
      title: "Divestiture / Spin-off",
      description: "A business unit needs its own org with its own data and processes.",
      icon: Split,
      complexity: "High",
      examples: [
        "Carving out a product line",
        "IP separation requirements",
        "Data partitioning by geography",
        "Independent go-to-market"
      ]
    },
    {
      title: "Org Consolidation",
      description: "Multiple orgs have grown organically - now you need a single source of truth.",
      icon: Merge,
      complexity: "Very High",
      examples: [
        "Sales and Service in different orgs",
        "Regional orgs grown independently",
        "Data synchronization nightmares",
        "Global reporting impossible"
      ]
    },
    {
      title: "Technical Debt Cleanup",
      description: "Years of customization have created an unmaintainable mess.",
      icon: RefreshCw,
      complexity: "Medium",
      examples: [
        "500+ unused fields",
        "Duplicate automation",
        "Technical governance lost",
        "Slow deployments"
      ]
    }
  ];

  const strategies = [
    {
      name: "Big Bang Migration",
      description: "Move everything at once over a weekend or holiday period.",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      pros: ["Single cutover", "No sync complexity", "Clean break"],
      cons: ["High risk", "Long downtime", "Intensive planning"],
      bestFor: "Small orgs, simple data models"
    },
    {
      name: "Phased Migration",
      description: "Move users, data, and processes in controlled waves.",
      icon: Layers,
      color: "from-purple-500 to-pink-500",
      pros: ["Lower risk", "Learn as you go", "Business continuity"],
      cons: ["Longer timeline", "Sync complexity", "Dual maintenance"],
      bestFor: "Enterprise orgs, complex processes"
    },
    {
      name: "Parallel Run",
      description: "Both systems run simultaneously with bidirectional sync.",
      icon: GitBranch,
      color: "from-emerald-500 to-teal-500",
      pros: ["Zero downtime", "Rollback capability", "User confidence"],
      cons: ["Most complex", "Sync challenges", "Data conflict risk"],
      bestFor: "Mission-critical, 24/7 operations"
    }
  ];

  const challenges = [
    {
      area: "Data Mapping",
      description: "Fields, picklists, and records never match perfectly between orgs.",
      icon: Map,
      impact: "Incomplete data, reporting errors"
    },
    {
      area: "User Adoption",
      description: "Users resist change, especially if the new system feels foreign.",
      icon: Users,
      impact: "Lost productivity, shadow IT"
    },
    {
      area: "Business Continuity",
      description: "You can't just shut down sales while you migrate.",
      icon: Clock,
      impact: "Revenue impact, customer frustration"
    },
    {
      area: "Data Quality",
      description: "Duplicate records, inconsistent formats, missing required fields.",
      icon: AlertTriangle,
      impact: "Bad decisions, compliance risks"
    }
  ];

  const caseStudy = {
    client: "Global Manufacturing Conglomerate",
    challenge: "3 regional orgs + 2 acquired companies = reporting nightmare, redundant processes, $2M in duplicate license costs",
    approach: "18-month phased consolidation with parallel run for critical systems",
    results: [
      "Single global org with 5,000+ users",
      "$1.8M annual license savings",
      "Unified global reporting",
      "Standardized processes worldwide"
    ]
  };

  return (
    <Layout>
      {/* Hero Section - Transformation Theme */}
      <section className="relative bg-gradient-to-br from-amber-900 via-orange-800 to-red-800 text-white overflow-hidden">
        {/* Transformation Graphics */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="split" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <line x1="0" y1="30" x2="60" y2="30" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="30" y1="0" x2="30" y2="60" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="15" cy="15" r="3" fill="white" />
                <circle cx="45" cy="45" r="3" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#split)" />
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
                <GitBranch className="w-4 h-4" />
                Org Restructuring & Reconsolidation
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                From Chaos to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-red-200">Single Source of Truth</span>
              </h1>
              
              <p className="text-xl text-amber-100 mb-8 max-w-2xl">
                I've led dozens of org consolidations, splits, and migrations. Whether you're merging companies, spinning off divisions, or cleaning up technical debt - I have a battle-tested approach.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-amber-900 hover:bg-amber-50 rounded-xl font-medium transition-all"
                >
                  Discuss your org strategy
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/OrgRestructuringCaseStudyPage"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl font-medium transition-all border border-white/20"
                >
                  View migration case studies
                </Link>
              </div>

              <div className="flex gap-8 mt-8 pt-8 border-t border-white/20">
                <div>
                  <div className="text-2xl font-bold">20+</div>
                  <div className="text-sm text-amber-200">Org Migrations</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">5K+</div>
                  <div className="text-sm text-amber-200">Users Migrated</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm text-amber-200">Data Integrity</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Restructuring Scenarios */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold tracking-wider text-amber-600 uppercase bg-amber-50 px-4 py-2 rounded-full">
              Common Scenarios
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-6 mb-4">
              When <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">Org Restructuring</span> Becomes Critical
            </h2>
            <p className="text-gray-600 text-lg">
              I've guided companies through every situation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scenarios.map((scenario, index) => {
              const Icon = scenario.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-lg font-bold text-gray-900">{scenario.title}</h3>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                          scenario.complexity === 'Very High' ? 'bg-red-100 text-red-700' :
                          scenario.complexity === 'High' ? 'bg-orange-100 text-orange-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {scenario.complexity}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{scenario.description}</p>
                      <ul className="space-y-1">
                        {scenario.examples.map((example, i) => (
                          <li key={i} className="text-xs text-gray-500 flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-amber-400"></span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Migration Strategies */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">Migration Strategies</span> That Minimize Risk
            </h2>
            <p className="text-gray-600 text-lg">
              There's no one-size-fits-all. I help you choose the right approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strategies.map((strategy, index) => {
              const Icon = strategy.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${strategy.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{strategy.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{strategy.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div>
                      <h4 className="text-xs font-semibold text-green-600 mb-1">Pros</h4>
                      <ul className="space-y-1">
                        {strategy.pros.map((item, i) => (
                          <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                            <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-red-600 mb-1">Cons</h4>
                      <ul className="space-y-1">
                        {strategy.cons.map((item, i) => (
                          <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                            <AlertTriangle className="w-3 h-3 text-red-500 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-500 italic">Best for: {strategy.bestFor}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Critical Challenges */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">Hidden Challenges</span> Most Consultants Miss
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Org restructuring isn't just about moving data. Here's what I watch for that others overlook.
              </p>

              <div className="space-y-4">
                {challenges.map((challenge, index) => {
                  const Icon = challenge.icon;
                  
                  return (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{challenge.area}</h3>
                        <p className="text-sm text-gray-600 mb-1">{challenge.description}</p>
                        <p className="text-xs text-red-600">Impact: {challenge.impact}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50 to-red-50 rounded-2xl p-8 border border-amber-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-World Impact</h3>
              
              <div className="mb-6 p-4 bg-white rounded-lg border border-amber-100">
                <p className="text-sm text-gray-600 mb-2 font-semibold">CASE STUDY</p>
                <h4 className="font-bold text-gray-900 mb-2">{caseStudy.client}</h4>
                <p className="text-sm text-gray-600 mb-3 italic">"{caseStudy.challenge}"</p>
                <p className="text-sm text-gray-700 mb-3"><span className="font-semibold">Approach:</span> {caseStudy.approach}</p>
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
                {[
                  { label: "Migration Success Rate", value: "100%", icon: CheckCircle },
                  { label: "User Adoption", value: "95%", icon: Users },
                  { label: "Data Integrity", value: "99.9%", icon: Shield },
                  { label: "ROI Achieved", value: "3-5x", icon: TrendingUp }
                ].map((metric, i) => {
                  const Icon = metric.icon;
                  return (
                    <div key={i} className="bg-white rounded-lg p-3 text-center">
                      <Icon className="w-4 h-4 text-amber-600 mx-auto mb-1" />
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

      {/* Migration Roadmap */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">Migration Roadmap</span>
            </h2>
            <p className="text-gray-600 text-lg">
              A proven 5-phase approach to org restructuring.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 via-red-500 to-orange-500 hidden md:block"></div>
            
            <div className="space-y-8">
              {[
                {
                  phase: "Discovery & Assessment",
                  duration: "2-4 weeks",
                  activities: [
                    "Inventory all metadata, fields, and automation",
                    "Map data relationships and dependencies",
                    "Identify process differences between orgs",
                    "Assess data quality and duplication"
                  ],
                  deliverable: "Migration strategy document"
                },
                {
                  phase: "Target Architecture Design",
                  duration: "3-6 weeks",
                  activities: [
                    "Design target org data model",
                    "Map fields and picklists",
                    "Design data cleansing approach",
                    "Plan for automation consolidation"
                  ],
                  deliverable: "Target architecture blueprint"
                },
                {
                  phase: "Data Cleansing & Preparation",
                  duration: "4-8 weeks",
                  activities: [
                    "Deduplicate records",
                    "Standardize data formats",
                    "Backfill missing required fields",
                    "Archive obsolete data"
                  ],
                  deliverable: "Clean, migration-ready data"
                },
                {
                  phase: "Migration Execution",
                  duration: "4-12 weeks",
                  activities: [
                    "Execute migration in waves",
                    "Validate data integrity",
                    "Train users on new org",
                    "Provide hypercare support"
                  ],
                  deliverable: "Successful migration"
                },
                {
                  phase: "Optimization & Governance",
                  duration: "Ongoing",
                  activities: [
                    "Monitor adoption and performance",
                    "Retire old systems",
                    "Establish governance processes",
                    "Continuous improvement"
                  ],
                  deliverable: "Sustainable future state"
                }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row gap-6 pl-12 md:pl-0"
                >
                  <div className="md:w-1/4">
                    <div className="bg-gradient-to-br from-amber-600 to-red-600 text-white rounded-xl p-4 text-center">
                      <div className="text-lg font-bold">Phase {index + 1}</div>
                      <div className="text-sm">{phase.phase}</div>
                      <div className="text-xs mt-1 opacity-80">{phase.duration}</div>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4 bg-white rounded-xl p-6 shadow-md border border-gray-100">
                    <ul className="space-y-2 mb-3">
                      {phase.activities.map((activity, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-amber-600 font-semibold">Deliverable: {phase.deliverable}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Org Restructuring <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">FAQ</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Questions from clients facing complex org scenarios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "How long does a typical org consolidation take?",
                a: "For enterprise orgs, 6-18 months depending on complexity. I've done small consolidations in 3 months and multi-org mergers spanning 2+ years. I'll give you a realistic timeline upfront."
              },
              {
                q: "Can we run both orgs during migration?",
                a: "Yes - I often design parallel run strategies for business continuity. It adds complexity but eliminates downtime risk."
              },
              {
                q: "What happens to our custom code and integrations?",
                a: "Every custom component is assessed, mapped, and either migrated, refactored, or replaced. Integrations are re-pointed in a carefully orchestrated sequence."
              },
              {
                q: "How do you handle user adoption resistance?",
                a: "Change management is built into every migration I lead. I involve users early, communicate constantly, and provide hands-on training before go-live."
              },
              {
                q: "What's the biggest risk in org migration?",
                a: "Data integrity. If you lose or corrupt data during migration, you lose trust. I design validation at every step to ensure zero data loss."
              },
              {
                q: "Can we clean up technical debt during migration?",
                a: "Absolutely - migration is the perfect time to retire unused fields, consolidate automation, and establish governance. I always include cleanup in the plan."
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
      <section className="bg-gradient-to-r from-amber-900 to-red-900 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Is your org structure holding you back?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your org strategy and build a roadmap to a cleaner, more efficient future.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-900 hover:bg-amber-50 font-medium rounded-full transition-all transform hover:scale-105"
              >
                Schedule an org assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/OrgRestructuringCaseStudyPage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full font-medium transition-all border border-white/20"
              >
                View migration case studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default OrgRestructuringPage;