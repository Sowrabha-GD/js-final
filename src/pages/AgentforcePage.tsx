import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Bot, Sparkles, Brain, Zap, Globe, Shield,
  CheckCircle, ArrowRight, Award, Star,
  Users, MessageSquare, Workflow, Cpu,
  Rocket, Target, TrendingUp, Clock,
  BarChart, Cloud, Lock, Repeat,
  ShoppingBag,
  Heart,
  Factory,
  Eye
} from "lucide-react";

const AgentforcePage = () => {
  const agents = [
    {
      title: "Sales Development Agent",
      description: "Autonomous prospecting, qualification, and meeting booking that never sleeps.",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      capabilities: [
        "24/7 lead qualification and scoring",
        "Personalized outreach sequences",
        "Calendar integration for instant booking",
        "Follow-up automation"
      ],
      impact: "3x more qualified meetings"
    },
    {
      title: "Customer Service Agent",
      description: "Intelligent support agents that resolve complex issues and learn from every interaction.",
      icon: MessageSquare,
      color: "from-purple-500 to-pink-500",
      capabilities: [
        "Natural language understanding",
        "Context-aware responses",
        "Seamless handoff to humans",
        "Continuous learning from resolutions"
      ],
      impact: "70% reduction in response time"
    },
    {
      title: "Digital Onboarding Agent",
      description: "Personalized guidance through complex onboarding flows with proactive assistance.",
      icon: Rocket,
      color: "from-emerald-500 to-teal-500",
      capabilities: [
        "Step-by-step guided journeys",
        "Proactive help and tips",
        "Document collection assistance",
        "Progress tracking and reminders"
      ],
      impact: "50% faster time-to-value"
    },
    {
      title: "Marketing Agent",
      description: "Autonomous campaign optimization and personalized content delivery.",
      icon: Zap,
      color: "from-amber-500 to-orange-500",
      capabilities: [
        "Audience segmentation",
        "Personalized content recommendations",
        "Campaign performance optimization",
        "Real-time engagement tracking"
      ],
      impact: "45% higher engagement rates"
    },
    {
      title: "Commerce Agent",
      description: "Intelligent shopping assistants that guide customers to the perfect purchase.",
      icon: ShoppingBag,
      color: "from-red-500 to-rose-500",
      capabilities: [
        "Product recommendations",
        "Inventory checking",
        "Order status updates",
        "Cross-sell and upsell"
      ],
      impact: "35% increase in average order value"
    },
    {
      title: "Analytics Agent",
      description: "Autonomous data exploration and insight generation for business leaders.",
      icon: BarChart,
      color: "from-indigo-500 to-blue-500",
      capabilities: [
        "Natural language querying",
        "Trend detection and alerts",
        "Automated report generation",
        "Predictive insights"
      ],
      impact: "80% faster insight discovery"
    }
  ];

  const capabilities = [
    {
      area: "Autonomous Reasoning",
      description: "Agents that think, plan, and execute tasks independently",
      icon: Brain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      area: "Natural Language",
      description: "Human-like conversations across any channel",
      icon: MessageSquare,
      color: "from-purple-500 to-pink-500"
    },
    {
      area: "Orchestration",
      description: "Coordinate multiple agents for complex workflows",
      icon: Workflow,
      color: "from-emerald-500 to-teal-500"
    },
    {
      area: "Trust Layer",
      description: "Enterprise-grade security, compliance, and guardrails",
      icon: Shield,
      color: "from-amber-500 to-orange-500"
    }
  ];

  const useCases = [
    {
      industry: "Financial Services",
      description: "Agents that handle account inquiries, fraud alerts, and financial advice",
      icon: Shield,
      impact: "60% reduction in call volume"
    },
    {
      industry: "Healthcare",
      description: "Patient intake, appointment scheduling, and care coordination",
      icon: Heart,
      impact: "45% faster patient onboarding"
    },
    {
      industry: "Retail",
      description: "Personalized shopping assistants and order management",
      icon: ShoppingBag,
      impact: "35% increase in conversion"
    },
    {
      industry: "Manufacturing",
      description: "Supply chain monitoring and predictive maintenance alerts",
      icon: Factory,
      impact: "50% faster issue resolution"
    }
  ];

  const architecture = [
    {
      layer: "Agent Layer",
      components: ["Sales Agent", "Service Agent", "Marketing Agent", "Commerce Agent"],
      icon: Bot
    },
    {
      layer: "Orchestration Layer",
      components: ["Task Planning", "Agent Coordination", "Context Management"],
      icon: Workflow
    },
    {
      layer: "Integration Layer",
      components: ["Salesforce Data", "External Systems", "APIs", "Knowledge Base"],
      icon: Cloud
    },
    {
      layer: "Trust Layer",
      components: ["Security Controls", "Compliance Guardrails", "Audit Trail", "Human Handoff"],
      icon: Shield
    }
  ];

  const testimonials = [
    {
      quote: "The Agentforce implementation Jeet led transformed our customer service. We're handling 3x the volume with the same team, and CSAT is at an all-time high.",
      author: "Jennifer Chen",
      role: "VP of Customer Experience",
      company: "Global Financial Services",
      image: "JC"
    },
    {
      quote: "Our sales development agent books more qualified meetings than our entire SDR team. It's like having a 24/7 sales machine.",
      author: "Marcus Rodriguez",
      role: "Chief Revenue Officer",
      company: "TechScale",
      image: "MR"
    }
  ];

  return (
    <Layout>
      {/* Hero Section - AI Theme */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, -30, null],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container-wide py-20 md:py-28 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                <Bot className="w-4 h-4" />
                Agentforce & Agentic AI
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                The Future is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-pink-300">Agentic</span>
              </h1>
              
              <p className="text-xl text-purple-100 mb-8 max-w-2xl">
                I help forward-thinking companies leverage autonomous AI agents to transform customer experiences, automate operations, and unlock new levels of efficiency.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-900 hover:bg-purple-50 rounded-xl font-medium transition-all"
                >
                  Explore Agentforce solutions
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/AgentforceCaseStudyPage"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl font-medium transition-all border border-white/20"
                >
                  View AI case studies
                </Link>
              </div>

              <div className="flex gap-8 mt-8 pt-8 border-t border-white/20">
                <div>
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-sm text-purple-200">Agent Deployments</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">1M+</div>
                  <div className="text-sm text-purple-200">AI Interactions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">70%</div>
                  <div className="text-sm text-purple-200">Avg Efficiency Gain</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold tracking-wider text-purple-600 uppercase bg-purple-50 px-4 py-2 rounded-full">
              Core Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-6 mb-4">
              What Makes <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Agentic AI</span> Different
            </h2>
            <p className="text-gray-600 text-lg">
              Not just chatbots - autonomous agents that reason, act, and learn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${cap.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{cap.area}</h3>
                  <p className="text-sm text-gray-600">{cap.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Agent Types */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Meet Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Digital Workforce</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Specialized agents for every business function.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent, index) => {
              const Icon = agent.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${agent.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {agent.impact}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{agent.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{agent.description}</p>
                  
                  <ul className="space-y-2">
                    {agent.capabilities.map((cap, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Agentic Architecture</span> That Scales
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                I design multi-agent systems that coordinate seamlessly, maintain context, and operate within enterprise guardrails.
              </p>

              <div className="space-y-4">
                {architecture.map((layer, index) => {
                  const Icon = layer.icon;
                  
                  return (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1">{layer.layer}</h3>
                        <div className="flex flex-wrap gap-1">
                          {layer.components.map((comp, i) => (
                            <span key={i} className="text-xs bg-white px-2 py-1 rounded-md text-gray-600 border border-gray-200">
                              {comp}
                            </span>
                          ))}
                        </div>
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
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Trust Layer</h3>
              
              <p className="text-sm text-gray-600 mb-6">
                Every agent operates within enterprise-grade security and compliance boundaries.
              </p>

              <div className="space-y-4">
                {[
                  {
                    feature: "Guardrails",
                    description: "Predefined boundaries for agent actions",
                    icon: Shield
                  },
                  {
                    feature: "Audit Trail",
                    description: "Complete visibility into every agent decision",
                    icon: Eye
                  },
                  {
                    feature: "Human Handoff",
                    description: "Seamless transition for complex cases",
                    icon: Users
                  },
                  {
                    feature: "Compliance",
                    description: "HIPAA, GDPR, SOC2 ready",
                    icon: Lock
                  }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <Icon className="w-4 h-4 text-purple-600" />
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">{item.feature}</h4>
                        <p className="text-xs text-gray-500">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Agentforce</span> in Action
            </h2>
            <p className="text-gray-600 text-lg">
              Real-world applications across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <Icon className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{useCase.industry}</h3>
                  <p className="text-sm text-gray-600 mb-3">{useCase.description}</p>
                  <div className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {useCase.impact}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">ROI</span> of Agentic AI
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Based on real deployments across sales, service, and operations.
              </p>

              <div className="space-y-6">
                {[
                  {
                    metric: "Sales Productivity",
                    before: "10 calls/day",
                    after: "50+ qualified leads",
                    gain: "5x"
                  },
                  {
                    metric: "Service Capacity",
                    before: "50 cases/agent",
                    after: "200+ with agent",
                    gain: "4x"
                  },
                  {
                    metric: "Onboarding Time",
                    before: "2 weeks",
                    after: "2 days",
                    gain: "7x faster"
                  },
                  {
                    metric: "Customer Satisfaction",
                    before: "82% CSAT",
                    after: "94% CSAT",
                    gain: "+12pts"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="font-medium text-gray-900">{item.metric}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-500 line-through">{item.before}</span>
                      <ArrowRight className="w-3 h-3 text-gray-400" />
                      <span className="text-sm font-bold text-green-600">{item.after}</span>
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                        {item.gain}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">ROI Calculator</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Current headcount</span>
                    <span className="font-bold text-gray-900">20 agents</span>
                  </div>
                  <input type="range" min="0" max="100" value="20" className="w-full" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Average salary</span>
                    <span className="font-bold text-gray-900">$60,000</span>
                  </div>
                  <input type="range" min="0" max="100" value="60" className="w-full" />
                </div>
                
                <div className="pt-4 border-t border-purple-200">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-900">Annual savings with Agentforce</span>
                    <span className="text-2xl font-bold text-purple-600">$720,000</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Based on 40% efficiency gain and 24/7 operation
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Agentforce</span> Implementation Roadmap
            </h2>
            <p className="text-gray-600 text-lg">
              From pilot to enterprise-wide deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                phase: "Discovery",
                duration: "2-3 weeks",
                activities: [
                  "Identify high-impact use cases",
                  "Assess data readiness",
                  "Define success metrics",
                  "Design agent personas"
                ]
              },
              {
                phase: "Pilot",
                duration: "4-6 weeks",
                activities: [
                  "Build first agent",
                  "Train on your data",
                  "Test with limited users",
                  "Measure and refine"
                ]
              },
              {
                phase: "Scale",
                duration: "8-12 weeks",
                activities: [
                  "Deploy additional agents",
                  "Integrate with systems",
                  "Train broader team",
                  "Establish governance"
                ]
              },
              {
                phase: "Optimize",
                duration: "Ongoing",
                activities: [
                  "Monitor performance",
                  "Continuous learning",
                  "Add new capabilities",
                  "Expand to new areas"
                ]
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{phase.phase}</h3>
                <p className="text-xs text-purple-600 mb-3">{phase.duration}</p>
                <ul className="space-y-2">
                  {phase.activities.map((activity, i) => (
                    <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">AI Pioneers</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
              >
                <Star className="w-8 h-8 text-yellow-400 mb-4" />
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-purple-600">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Agentforce <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">FAQ</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Questions from leaders exploring Agentic AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "What's the difference between chatbots and Agentforce?",
                a: "Chatbots follow predefined scripts. Agentforce agents reason, plan, and execute tasks autonomously - they can handle complex, multi-step processes without human intervention."
              },
              {
                q: "How do agents learn about my business?",
                a: "Agents are trained on your data - knowledge articles, past cases, sales history, and business rules. They continuously learn from new interactions."
              },
              {
                q: "What about security and compliance?",
                a: "Agents operate within the same security model as Salesforce. I implement guardrails, audit trails, and human handoff protocols for sensitive scenarios."
              },
              {
                q: "How long does implementation take?",
                a: "Pilot agents can be live in 4-6 weeks. Enterprise-wide deployments typically take 3-6 months depending on complexity and use cases."
              },
              {
                q: "Can agents work with our existing systems?",
                a: "Yes - agents can integrate with any system through APIs. They can pull customer data, check inventory, update records, and trigger workflows."
              },
              {
                q: "What's the ROI timeline?",
                a: "Most clients see positive ROI within 3-6 months. The pilot phase alone typically delivers measurable efficiency gains."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
              >
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to build your digital workforce?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how Agentforce can transform your customer experiences and operations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-900 hover:bg-purple-50 font-medium rounded-full transition-all transform hover:scale-105"
              >
                Start your Agentforce journey
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full font-medium transition-all border border-white/20"
              >
                View AI case studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AgentforcePage;