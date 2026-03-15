import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Network, Zap, Globe, Lock,
  CheckCircle, ArrowRight, Award, AlertTriangle,
  RefreshCw, Server, Database, Cloud,
  Code, GitMerge, Repeat, Webhook,
  Clock, Shield, BarChart, Layers
} from "lucide-react";

const IntegrationArchitecturePage = () => {
  const patterns = [
    {
      name: "Real-time API Integration",
      description: "Synchronous calls for immediate data sync - when up-to-the-second matters.",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      useCases: [
        "Customer authentication",
        "Payment processing",
        "Inventory availability"
      ],
      considerations: [
        "Performance impact",
        "Error handling",
        "Security & auth"
      ]
    },
    {
      name: "Batch Integration",
      description: "Scheduled bulk data transfers for high-volume, non-critical data.",
      icon: RefreshCw,
      color: "from-purple-500 to-pink-500",
      useCases: [
        "Daily financial reconciliation",
        "Overnight data warehouse sync",
        "Periodic catalog updates"
      ],
      considerations: [
        "Timing & windows",
        "Error recovery",
        "Data volume limits"
      ]
    },
    {
      name: "Event-Driven Integration",
      description: "Platform Events and Change Data Capture for reactive integration.",
      icon: Repeat,
      color: "from-emerald-500 to-teal-500",
      useCases: [
        "Real-time notifications",
        "External system triggers",
        "Audit logging"
      ],
      considerations: [
        "Event volume",
        "Subscriber reliability",
        "Ordering guarantees"
      ]
    },
    {
      name: "Middleware (MuleSoft)",
      description: "Enterprise service bus for complex orchestration and transformation.",
      icon: Network,
      color: "from-amber-500 to-orange-500",
      useCases: [
        "Complex system of record sync",
        "Data transformation",
        "Protocol conversion"
      ],
      considerations: [
        "Cost & licensing",
        "Skill requirements",
        "Operational overhead"
      ]
    }
  ];

  const challenges = [
    {
      title: "Data Consistency",
      description: "Keeping data in sync across multiple systems without conflicts.",
      icon: Database,
      severity: "High"
    },
    {
      title: "Error Handling",
      description: "Failed messages, retries, and dead-letter queues need robust design.",
      icon: AlertTriangle,
      severity: "Critical"
    },
    {
      title: "Security",
      description: "Authentication, encryption, and data privacy across networks.",
      icon: Lock,
      severity: "Critical"
    },
    {
      title: "Performance",
      description: "APIs that timeout, batch windows that overrun, events that backlog.",
      icon: Clock,
      severity: "High"
    }
  ];

  const caseStudy = {
    client: "Global Logistics Provider",
    challenge: "Legacy ERP integration causing 2-hour delays in shipment tracking updates",
    solution: "Event-driven architecture with Platform Events + MuleSoft transformation layer",
    results: [
      "Real-time tracking updates (from 2 hours to 2 seconds)",
      "99.99% uptime for integration",
      "Scalable to 10M+ events/day",
      "Zero data loss in 2 years"
    ]
  };

  const bestPractices = [
    "Idempotent design - handle duplicate messages safely",
    "Circuit breakers - prevent cascading failures",
    "Dead-letter queues - never lose a failed message",
    "Monitoring & alerting - know before users do",
    "Versioning - evolve APIs without breaking clients",
    "Bulkification - handle scale gracefully"
  ];

  return (
    <Layout>
      {/* Hero Section - Connection Theme */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800 text-white overflow-hidden">
        {/* Network Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="network" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="3" fill="white" />
                <circle cx="70" cy="10" r="3" fill="white" />
                <circle cx="40" cy="40" r="3" fill="white" />
                <circle cx="10" cy="70" r="3" fill="white" />
                <circle cx="70" cy="70" r="3" fill="white" />
                <line x1="10" y1="10" x2="70" y2="10" stroke="white" strokeWidth="1" />
                <line x1="10" y1="10" x2="40" y2="40" stroke="white" strokeWidth="1" />
                <line x1="70" y1="10" x2="40" y2="40" stroke="white" strokeWidth="1" />
                <line x1="10" y1="70" x2="40" y2="40" stroke="white" strokeWidth="1" />
                <line x1="70" y1="70" x2="40" y2="40" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network)" />
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
                <Network className="w-4 h-4" />
                Integration Architecture
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Connecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">Salesforce to Everything</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 max-w-2xl">
                I design integration architectures that are reliable, scalable, and maintainable. From real-time APIs to event-driven patterns - I connect Salesforce to your enterprise ecosystem without creating technical debt.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 hover:bg-blue-50 rounded-xl font-medium transition-all"
                >
                  Discuss your integration needs
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/IntegrationArchitectureCaseStudyPage"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl font-medium transition-all border border-white/20"
                >
                  View integration case studies
                </Link>
              </div>

              <div className="flex gap-8 mt-8 pt-8 border-t border-white/20">
                <div>
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-sm text-blue-200">Integration Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">50M+</div>
                  <div className="text-sm text-blue-200">Daily API Calls</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">99.99%</div>
                  <div className="text-sm text-blue-200">Uptime</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Patterns */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 px-4 py-2 rounded-full">
              Integration Patterns
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-6 mb-4">
              The Right Pattern for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Every Use Case</span>
            </h2>
            <p className="text-gray-600 text-lg">
              I don't force-fit solutions. I match patterns to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {patterns.map((pattern, index) => {
              const Icon = pattern.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${pattern.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{pattern.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{pattern.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 mb-1">Use Cases</h4>
                      <ul className="space-y-1">
                        {pattern.useCases.map((item, i) => (
                          <li key={i} className="text-xs text-gray-600 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 mb-1">Considerations</h4>
                      <ul className="space-y-1">
                        {pattern.considerations.map((item, i) => (
                          <li key={i} className="text-xs text-gray-600 flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3 text-amber-500" />
                            {item}
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

      {/* Integration Challenges */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Hard Parts</span> of Integration
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Anyone can connect two systems. The hard part is making it reliable, scalable, and maintainable for years.
              </p>

              <div className="space-y-4">
                {challenges.map((challenge, index) => {
                  const Icon = challenge.icon;
                  
                  return (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-bold text-gray-900">{challenge.title}</h3>
                          <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                            challenge.severity === 'Critical' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                          }`}>
                            {challenge.severity}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{challenge.description}</p>
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
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-World Impact</h3>
              
              <div className="mb-6 p-4 bg-white rounded-lg border border-blue-100">
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

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-3">My Integration Principles</h4>
                <ul className="space-y-2">
                  {bestPractices.map((practice, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {practice}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Integration Toolkit</span>
            </h2>
            <p className="text-gray-600 text-lg">
              I'm platform-agnostic. I choose the right tool for your needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "MuleSoft", icon: Network },
              { name: "Platform Events", icon: Repeat },
              { name: "Composite APIs", icon: Code },
              { name: "Change Data Capture", icon: Database },
              { name: "Heroku Connect", icon: Cloud },
              { name: "Custom REST/SOAP", icon: Globe },
              { name: "Middleware", icon: Layers },
              { name: "Webhooks", icon: Webhook }
            ].map((tool, index) => {
              const Icon = tool.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-md transition-all"
                >
                  <Icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-700">{tool.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture Decision Framework */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Decision Framework</span>
            </h2>
            <p className="text-gray-600 text-lg">
              How I choose the right integration pattern.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                factor: "Latency Requirements",
                options: "Real-time vs. Batch",
                decision: "Real-time for UX, Batch for volume"
              },
              {
                factor: "Data Volume",
                options: "Single records vs. Bulk",
                decision: "API for single, Batch for bulk"
              },
              {
                factor: "Complexity",
                options: "Simple sync vs. Transformation",
                decision: "Direct for simple, Middleware for complex"
              },
              {
                factor: "Reliability",
                options: "At-least-once vs. Exactly-once",
                decision: "Event-driven with idempotency"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-5 shadow-md border border-gray-100"
              >
                <h3 className="font-bold text-gray-900 mb-1">{item.factor}</h3>
                <p className="text-xs text-gray-500 mb-2">{item.options}</p>
                <p className="text-sm text-blue-600">{item.decision}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Integration <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">FAQ</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Questions I hear from architects and CTOs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "Should I use middleware or direct API calls?",
                a: "It depends on complexity, volume, and your team's skills. I help you evaluate tradeoffs and choose what's right for your specific situation."
              },
              {
                q: "How do you handle failed messages?",
                a: "Every integration I design includes dead-letter queues, retry logic with exponential backoff, and monitoring alerts for failures."
              },
              {
                q: "What about Salesforce API limits?",
                a: "I design with limits in mind - bulkification, caching, and careful API call management to stay well within limits even at scale."
              },
              {
                q: "Can you integrate with legacy systems?",
                a: "Yes - I've connected Salesforce to mainframes, on-prem databases, and legacy ERPs using middleware, custom connectors, and adapters."
              },
              {
                q: "How do you ensure data consistency?",
                a: "Idempotent design, transaction management, and reconciliation processes ensure source and target stay in sync."
              },
              {
                q: "What about security?",
                a: "OAuth, JWT, IP whitelisting, encryption in transit and at rest - I implement enterprise-grade security on every integration."
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
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to connect your enterprise?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's design an integration architecture that scales with your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 hover:bg-blue-50 font-medium rounded-full transition-all transform hover:scale-105"
              >
                Start the conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/IntegrationArchitectureCaseStudyPage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full font-medium transition-all border border-white/20"
              >
                View integration case studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default IntegrationArchitecturePage;