import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Bot, Calendar, ArrowLeft, ArrowRight,
  CheckCircle, AlertTriangle, TrendingUp, Clock,
  Users, Award, Zap, MessageSquare,
  Brain, Sparkles, Workflow, Globe,
  Shield, Cpu, Database, Cloud,
  Rocket, Target, HeadphonesIcon, ShoppingBag
} from "lucide-react";

const AgentforceCaseStudy = () => {
  const study = {
    title: "AI-Powered Customer Service with Agentforce",
    client: "Global E-Commerce & Telecommunications Provider",
    industry: "E-Commerce & Telecommunications",
    category: "Agentforce & Agentic AI",
    year: "2024",
    duration: "6 months",
    role: "Lead AI Architect",
    team: "8 AI specialists, 12 business stakeholders",
    
    executiveSummary: "A global e-commerce and telecommunications provider with 15 million customers was struggling with skyrocketing support volumes. Their contact center received 500,000+ inquiries monthly, with 65% being repetitive questions that could be automated. Customer wait times averaged 8 minutes, and CSAT scores were declining. They needed an intelligent solution that could handle complex customer interactions without human intervention.",
    
    technicalSummary: `**Support operation at a glance:**
    • 500,000+ monthly customer inquiries
    • 65% repetitive questions (order status, returns, billing)
    • 8-minute average wait time
    • 1,200+ support agents across 3 contact centers
    • 35% first-contact resolution rate
    • 3.2/5 CSAT score
    • $24M annual support operation cost`,
    
    challenge: `The company faced critical customer service challenges:

**Volume & Scalability**:
- Support volumes growing 25% year over year
- Hiring couldn't keep pace with demand
- Peak seasons caused 45-minute wait times
- Agents overwhelmed and burning out
- 35% turnover rate in contact centers

**Customer Experience**:
- 8-minute average wait time (peaking at 45 minutes)
- Customers repeating themselves across channels
- No 24/7 support capability
- Inconsistent answers across agents
- 3.2/5 CSAT score declining quarterly

**Operational Cost**:
- $24M annual support operation cost
- $18 per contact average handle cost
- Training new agents took 6 weeks
- High overtime costs during peaks
- No self-service for complex issues

**Channel Fragmentation**:
- Phone, email, chat, and social disconnected
- No conversation history across channels
- Customers restart conversations each time
- No AI or automation capabilities`,
    
    approach: [
      {
        phase: "Use Case Identification",
        description: "Analyzed 6 months of support tickets to identify top automation opportunities.",
        duration: "4 weeks",
        deliverables: ["Top 20 use cases identified", "ROI analysis", "Implementation roadmap"]
      },
      {
        phase: "Agent Design & Training",
        description: "Designed and trained 5 specialized agents for different support functions.",
        duration: "8 weeks",
        deliverables: ["Agent personas defined", "Training data prepared", "Knowledge base structured"]
      },
      {
        phase: "Integration & Testing",
        description: "Integrated agents with CRM, order management, and knowledge systems.",
        duration: "6 weeks",
        deliverables: ["API integrations", "Escalation workflows", "Testing completed"]
      },
      {
        phase: "Pilot & Rollout",
        description: "Launched pilot with 20% of customers, then expanded to full customer base.",
        duration: "8 weeks",
        deliverables: ["Pilot results", "Full deployment", "Agent monitoring dashboard"]
      }
    ],
    
    solution: `I designed and implemented a multi-agent AI system using Agentforce:

**Specialized Agent Team**:

1. **Order Status Agent**:
   - Real-time order tracking and updates
   - Proactive delay notifications
   - Delivery date changes and rescheduling
   - Return initiation and tracking

2. **Billing & Payments Agent**:
   - Bill explanation and breakdown
   - Payment processing and scheduling
   - Dispute resolution and refunds
   - Subscription plan changes

3. **Technical Support Agent**:
   - Troubleshooting common issues
   - Device configuration assistance
   - Network problem diagnosis
   - Appointment scheduling for field visits

4. **Product Information Agent**:
   - Product specifications and comparisons
   - Availability and inventory checks
   - Recommendations based on needs
   - Promotion and discount application

5. **Account Management Agent**:
   - Plan upgrades and downgrades
   - Add-on service activation
   - Account information updates
   - Security and authentication

**Agent Orchestration**:
- Intelligent routing to the right specialist agent
- Context preservation across agent handoffs
- Seamless escalation to human agents when needed
- Unified conversation history across all interactions

**Human-in-the-Loop**:
- Complex issues escalated to human agents with full context
- Agents can take over conversations seamlessly
- Supervisory dashboard for monitoring AI performance
- Continuous learning from agent corrections`,
    
    technologies: [
      "Agentforce",
      "Einstein AI",
      "Service Cloud",
      "MuleSoft",
      "Knowledge Base",
      "Omni-Channel Routing",
      "Einstein Bots"
    ],
    
    architectureDiagram: [
      { layer: "Customer Channels", description: "Web, Mobile, SMS, Social, Voice" },
      { layer: "Agent Orchestration", description: "Intent recognition, routing, context" },
      { layer: "Specialized Agents", description: "Order, Billing, Tech Support, Product, Account" },
      { layer: "Enterprise Systems", description: "CRM, Order Management, Billing, Inventory" }
    ],
    
    results: [
      { metric: "Automated Resolutions", before: "0%", after: "72%", improvement: "72% automation", icon: Zap },
      { metric: "Average Wait Time", before: "8 minutes", after: "< 30 seconds", improvement: "94% faster", icon: Clock },
      { metric: "CSAT Score", before: "3.2/5", after: "4.7/5", improvement: "+47%", icon: Award },
      { metric: "Support Cost", before: "$24M/year", after: "$8.5M/year", improvement: "65% reduction", icon: TrendingUp },
      { metric: "24/7 Coverage", before: "No", after: "Yes", improvement: "Always available", icon: Globe }
    ],
    
    detailedResults: [
      {
        category: "Volume Handled",
        metrics: [
          { name: "Total Monthly Inquiries", before: "500,000", after: "580,000" },
          { name: "Handled by AI", before: "0", after: "417,600" },
          { name: "Handled by Humans", before: "500,000", after: "162,400" },
          { name: "Automation Rate", before: "0%", after: "72%" }
        ]
      },
      {
        category: "Response Times",
        metrics: [
          { name: "Average Wait Time", before: "8 min", after: "28 sec" },
          { name: "Peak Wait Time", before: "45 min", after: "2 min" },
          { name: "First Response Time", before: "4 min", after: "< 5 sec" },
          { name: "Resolution Time", before: "15 min", after: "3 min" }
        ]
      },
      {
        category: "Quality Metrics",
        metrics: [
          { name: "CSAT Score", before: "3.2/5", after: "4.7/5" },
          { name: "First Contact Resolution", before: "35%", after: "78%" },
          { name: "Agent Satisfaction", before: "2.8/5", after: "4.5/5" },
          { name: "Escalation Rate", before: "N/A", after: "12%" }
        ]
      }
    ],
    
    roi: {
      savings: "$15.5M annually",
      payback: "4 months",
      benefits: [
        "Support cost reduction: $15.5M/year",
        "Agent productivity increase: 3.5x more cases handled",
        "Reduced hiring needs: 400 fewer agents needed",
        "Revenue retention: $8M in prevented churn"
      ]
    },
    
    testimonial: {
      quote: "Jeet's Agentforce implementation transformed our customer service overnight. We're now handling 72% of inquiries completely automatically, with better CSAT scores than our human agents. The ROI was evident in the first month. This isn't just automation—it's a complete reimagining of how we serve customers.",
      author: "Chief Customer Officer",
      role: "Global E-Commerce & Telecommunications Provider",
      image: "CCO"
    },
    
    beforeAfter: [
      {
        scenario: "Order Status Inquiry",
        before: "Customer waits 8 minutes, agent checks 3 systems, 12-minute call",
        after: "Agent instantly provides status, can proactively notify of delays"
      },
      {
        scenario: "Billing Dispute",
        before: "Transferred between billing and support, 20+ minutes, frustration",
        after: "Agent accesses full billing history, resolves in 2 minutes"
      },
      {
        scenario: "Technical Issue",
        before: "Basic troubleshooting, long holds, often required callback",
        after: "AI-guided diagnostics, instant solutions, seamless escalation"
      }
    ],
    
    relatedStudies: [
      { id: "service-cloud", title: "Omnichannel Service for Telecom Provider", category: "Service Cloud" },
      { id: "integration-architecture", title: "Real-Time Integration Platform", category: "Integration" }
    ]
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
        {/* Animated AI Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 400">
            <defs>
              <pattern id="ai-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="white" />
                <circle cx="30" cy="30" r="2" fill="white" />
                <circle cx="50" cy="10" r="2" fill="white" />
                <circle cx="10" cy="50" r="2" fill="white" />
                <circle cx="50" cy="50" r="2" fill="white" />
                <line x1="10" y1="10" x2="30" y2="30" stroke="white" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="30" y1="30" x2="50" y2="10" stroke="white" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="10" y1="50" x2="30" y2="30" stroke="white" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="30" y1="30" x2="50" y2="50" stroke="white" strokeWidth="1" strokeDasharray="2 2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ai-pattern)" />
          </svg>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
              }}
              animate={{
                y: [null, "-30px", null],
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

        <div className="container-wide py-16 relative z-10">
          <Link to="/AgentforcePage" className="inline-flex items-center gap-2 text-purple-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Agentforce
          </Link>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                  {study.category}
                </span>
                <span className="text-purple-200 text-sm">{study.year}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{study.title}</h1>
              <p className="text-xl text-purple-100 mb-6">{study.client}</p>
              <div className="flex flex-wrap gap-4 text-purple-200">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {study.duration}</span>
                <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {study.team}</span>
                <span className="flex items-center gap-1"><Award className="w-4 h-4" /> {study.role}</span>
              </div>
            </div>
            
            {/* Key Stats Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-3">Key Results</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-purple-200">Automation Rate</span>
                  <span className="text-sm font-bold text-green-300">72%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-purple-200">Wait Time</span>
                  <span className="text-sm font-bold text-green-300"> 30 sec</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-purple-200">CSAT Score</span>
                  <span className="text-sm font-bold text-green-300">4.7/5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-purple-200">Cost Savings</span>
                  <span className="text-sm font-bold text-green-300">$15.5M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{study.executiveSummary}</p>
        </div>
      </section>

      {/* Technical Summary */}
      <section className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="container-wide max-w-4xl">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Support Operation at a Glance</h2>
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto text-sm font-mono whitespace-pre-wrap">
            {study.technicalSummary}
          </pre>
        </div>
      </section>

      {/* Challenge */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Challenge</h2>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div className="prose prose-lg">
                <p className="text-gray-800 whitespace-pre-line">{study.challenge}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Agentforce Architecture</h2>
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {study.architectureDiagram.map((layer, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${
                    index === 0 ? 'bg-green-500' : 
                    index === 1 ? 'bg-blue-500' : 
                    index === 2 ? 'bg-purple-500' : 'bg-orange-500'
                  }`} />
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{layer.layer}</h3>
                  <p className="text-xs text-gray-500">{layer.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Agents */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Agent Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Order Status Agent", icon: ShoppingBag, color: "from-blue-500 to-cyan-500", tasks: ["Order tracking", "Returns", "Delivery updates"] },
              { name: "Billing Agent", icon: Database, color: "from-purple-500 to-pink-500", tasks: ["Bill explanation", "Payments", "Disputes"] },
              { name: "Tech Support Agent", icon: Cpu, color: "from-emerald-500 to-teal-500", tasks: ["Troubleshooting", "Diagnostics", "Appointments"] },
              { name: "Product Info Agent", icon: Target, color: "from-amber-500 to-orange-500", tasks: ["Specifications", "Comparisons", "Promotions"] },
              { name: "Account Agent", icon: Users, color: "from-red-500 to-rose-500", tasks: ["Plan changes", "Updates", "Security"] }
            ].map((agent, idx) => {
              const Icon = agent.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-200">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${agent.color} flex items-center justify-center mb-3`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{agent.name}</h3>
                  <ul className="space-y-1">
                    {agent.tasks.map((task, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                        <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Approach</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {study.approach.map((phase, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{phase.phase}</h3>
                  <span className="text-sm text-purple-600 font-medium">{phase.duration}</span>
                </div>
                <p className="text-gray-600 mb-3">{phase.description}</p>
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Deliverables:</span>
                  <ul className="mt-2 space-y-1">
                    {phase.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Scenarios */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Experience Transformation</h2>
          <div className="space-y-4">
            {study.beforeAfter.map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-3">{item.scenario}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 rounded-lg p-3">
                    <span className="text-xs font-semibold text-red-600 uppercase">Before</span>
                    <p className="text-sm text-gray-700 mt-1">{item.before}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <span className="text-xs font-semibold text-green-600 uppercase">After</span>
                    <p className="text-sm text-gray-700 mt-1">{item.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Results */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Results</h2>
          
          {study.detailedResults.map((section, idx) => (
            <div key={idx} className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{section.category}</h3>
              <div className="bg-gray-50 rounded-xl p-5">
                {section.metrics.map((metric, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0">
                    <span className="text-sm text-gray-600">{metric.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-500 line-through">{metric.before}</span>
                      <ArrowRight className="w-3 h-3 text-gray-400" />
                      <span className="text-sm font-bold text-green-600">{metric.after}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Results Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {study.results.map((result, i) => {
              const Icon = result.icon;
              return (
                <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-5 h-5 text-purple-600" />
                    <h4 className="font-medium text-gray-900">{result.metric}</h4>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500 line-through">{result.before}</span>
                    <ArrowRight className="w-3 h-3 text-gray-400" />
                    <span className="text-lg font-bold text-green-600">{result.after}</span>
                  </div>
                  <div className="text-xs text-green-600 font-semibold">{result.improvement}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROI Card */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide max-w-4xl">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">ROI Analysis</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">{study.roi.savings}</div>
                <div className="text-sm text-gray-600 mb-2">Annual cost savings achieved</div>
                <div className="text-sm text-gray-500">Payback period: {study.roi.payback}</div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
                <ul className="space-y-2">
                  {study.roi.benefits.map((benefit, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide max-w-4xl">
          <div className="bg-gray-50 rounded-2xl p-8 italic border-l-8 border-purple-500">
            <svg className="w-10 h-10 text-purple-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl text-gray-800 mb-6">{study.testimonial.quote}</p>
            <div>
              <p className="font-bold text-gray-900">{study.testimonial.author}</p>
              <p className="text-sm text-gray-600">{study.testimonial.role}</p>
            </div>
          </div>
        </div>
      </section>

      

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-800 to-pink-800 text-white py-16">
        <div className="container-wide text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Ready to build your AI workforce?
          </h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how Agentforce can transform your customer service and operations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-900 hover:bg-purple-50 font-medium rounded-full transition-all transform hover:scale-105"
          >
            Schedule a Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AgentforceCaseStudy;