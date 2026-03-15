import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Calculator, TrendingUp, DollarSign, Clock,
  CheckCircle, ArrowRight, Award, Zap,
  Settings, Package, FileText, Repeat,
  Shield, BarChart, Gift, Rocket,
  Sparkles, Gauge, Target, PieChart,
  Star
} from "lucide-react";

const QuoteToCashPage = () => {
  const solutions = [
    {
      title: "Product Configuration",
      description: "Guide customers and sales teams through complex product selections with intuitive, rule-based configuration.",
      icon: Settings,
      theme: "precision",
      challenges: [
        "Sales reps struggle to configure complex products",
        "Customers can't visualize their choices",
        "Configuration errors lead to order mistakes",
        "Custom quotes take days, not minutes"
      ],
      outcomes: [
        "90% reduction in configuration errors",
        "Guided selling that upsells automatically",
        "Customers visualize their selections",
        "Quotes in minutes, not days"
      ]
    },
    {
      title: "Pricing & Discounting",
      description: "Implement sophisticated pricing models with automated discounts, approvals, and optimization.",
      icon: DollarSign,
      theme: "optimization",
      challenges: [
        "Inconsistent discounting across deals",
        "Leaving money on the table",
        "Manual approval bottlenecks",
        "Can't track discount effectiveness"
      ],
      outcomes: [
        "5-15% increase in average deal size",
        "Consistent, profitable discounting",
        "Automated approval workflows",
        "Real-time discount analytics"
      ]
    },
    {
      title: "Quoting & Proposals",
      description: "Generate professional, accurate quotes and proposals in seconds - not hours or days.",
      icon: FileText,
      theme: "acceleration",
      challenges: [
        "Quotes take hours to create",
        "Inconsistent proposal quality",
        "Manual data entry errors",
        "Slow quote-to-order conversion"
      ],
      outcomes: [
        "80% faster quote generation",
        "Professional, branded proposals",
        "Zero manual entry errors",
        "Instant quote-to-order conversion"
      ]
    },
    {
      title: "Contract Management",
      description: "Streamline contract creation, negotiation, and renewal with automated workflows and templates.",
      icon: FileText,
      theme: "streamlining",
      challenges: [
        "Contracts stuck in legal review",
        "Version control chaos",
        "Renewals missed or delayed",
        "Non-standard terms across deals"
      ],
      outcomes: [
        "50% faster contract cycles",
        "Automated renewal management",
        "Standardized, compliant terms",
        "Complete contract visibility"
      ]
    },
    {
      title: "Billing & Invoicing",
      description: "Automate complex billing scenarios - one-time, subscription, usage-based, and hybrid models.",
      icon: Calculator,
      theme: "automation",
      challenges: [
        "Billing errors and disputes",
        "Complex invoice calculations",
        "Delayed revenue recognition",
        "Customer payment friction"
      ],
      outcomes: [
        "100% billing accuracy",
        "Real-time invoice generation",
        "Accelerated revenue recognition",
        "Frictionless customer payments"
      ]
    },
    {
      title: "Revenue Intelligence",
      description: "Gain complete visibility into your revenue lifecycle - from quote to cash and beyond.",
      icon: TrendingUp,
      theme: "insight",
      challenges: [
        "No visibility into revenue pipeline",
        "Can't forecast accurately",
        "Revenue leakage undetected",
        "Manual reporting and analysis"
      ],
      outcomes: [
        "Real-time revenue dashboards",
        "95%+ forecast accuracy",
        "Detect and prevent leakage",
        "Data-driven revenue decisions"
      ]
    }
  ];

  const metrics = [
    { label: "Quote Generation Time", before: "hours", after: "minutes", improvement: "80% faster", icon: Clock },
    { label: "Configuration Errors", before: "8-10%", after: "<1%", improvement: "90% reduction", icon: Settings },
    { label: "Deal Size", before: "baseline", after: "+10-15%", improvement: "increase", icon: TrendingUp },
    { label: "Order-to-Cash Cycle", before: "7-10 days", after: "1-2 days", improvement: "70% faster", icon: Zap }
  ];

  const industries = [
    { name: "Manufacturing", icon: Package },
    { name: "Technology", icon: Settings },
    { name: "Telecom", icon: Repeat },
    { name: "Financial Services", icon: Shield },
    { name: "Healthcare", icon: Award },
    { name: "Media", icon: Gift }
  ];

  const pricingModels = [
    {
      model: "One-time",
      description: "Traditional product sales",
      icon: Gift,
      color: "from-blue-500 to-cyan-500"
    },
    {
      model: "Subscription",
      description: "Recurring revenue models",
      icon: Repeat,
      color: "from-purple-500 to-pink-500"
    },
    {
      model: "Usage-based",
      description: "Pay-as-you-go pricing",
      icon: Gauge,
      color: "from-emerald-500 to-teal-500"
    },
    {
      model: "Tiered",
      description: "Volume-based discounts",
      icon: BarChart,
      color: "from-amber-500 to-orange-500"
    },
    {
      model: "Bundled",
      description: "Package deals",
      icon: Package,
      color: "from-red-500 to-rose-500"
    },
    {
      model: "Hybrid",
      description: "Mixed pricing models",
      icon: Settings,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const roiMetrics = [
    {
      area: "Sales Efficiency",
      metric: "2.5x more quotes per rep",
      impact: "High",
      color: "from-blue-600 to-cyan-600"
    },
    {
      area: "Order Accuracy",
      metric: "99.5% error-free orders",
      impact: "Critical",
      color: "from-purple-600 to-pink-600"
    },
    {
      area: "Revenue Acceleration",
      metric: "30% faster cash flow",
      impact: "Significant",
      color: "from-emerald-600 to-teal-600"
    },
    {
      area: "Customer Satisfaction",
      metric: "45% fewer billing disputes",
      impact: "Transformational",
      color: "from-amber-600 to-orange-600"
    }
  ];

  const testimonials = [
    {
      quote: "Jeet transformed our entire quote-to-cash process. What used to take days now takes minutes. Our sales team loves it, and we've seen a 15% increase in average deal size.",
      author: "Robert Chen",
      role: "VP of Revenue Operations",
      company: "TechGrowth Solutions",
      image: "RC"
    },
    {
      quote: "The CPQ implementation Jeet led eliminated 90% of our configuration errors. Our order accuracy is now 99.5%, and billing disputes are down 45%.",
      author: "Michelle Foster",
      role: "Finance Director",
      company: "Global Manufacturing Co.",
      image: "MF"
    }
  ];

  return (
    <Layout>
      {/* Hero Section - Precision & Speed Theme */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" strokeDasharray="2 2" />
              </pattern>
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        {/* Speed Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/3 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20"
          />
          <motion.div 
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
            className="absolute top-2/3 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-20"
          />
        </div>

        <div className="container-wide py-20 md:py-28 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                <Calculator className="w-4 h-4" />
                Quote to Cash | CPQ & Revenue Cloud
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Accelerate Revenue from <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Quote to Cash</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 max-w-2xl">
                I help businesses transform complex quoting, contracting, and billing into a seamless, automated revenue engine. From configuration to cash - faster, more accurate, and more profitable.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-medium transition-all"
                >
                  Optimize your quote-to-cash
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl font-medium transition-all border border-white/20"
                >
                  View ROI case studies
                </Link>
              </div>

              <div className="flex gap-8 mt-8 pt-8 border-t border-white/20">
                <div>
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-blue-200">CPQ Implementations</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">80%</div>
                  <div className="text-sm text-blue-200">Faster Quoting</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">99.5%</div>
                  <div className="text-sm text-blue-200">Order Accuracy</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before/After Metrics */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 px-4 py-2 rounded-full">
              The Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-6 mb-4">
              From <span className="text-red-500 line-through decoration-4">Slow & Error-Prone</span> to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Fast & Accurate</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Real metrics from quote-to-cash transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{metric.label}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-red-50 rounded-lg">
                      <div className="text-xs text-red-600 uppercase font-semibold mb-1">Before</div>
                      <div className="text-xl font-bold text-red-700">{metric.before}</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-xs text-green-600 uppercase font-semibold mb-1">After</div>
                      <div className="text-xl font-bold text-green-700">{metric.after}</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <span className="inline-block bg-blue-100 text-blue-700 text-sm font-bold px-4 py-2 rounded-full">
                      {metric.improvement}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Every Step of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Revenue Journey</span>
            </h2>
            <p className="text-gray-600 text-lg">
              I optimize every stage - from first configuration to final cash.
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
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{solution.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{solution.description}</p>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-xs font-semibold uppercase text-gray-500 mb-2">Challenges I Solve</h4>
                      <ul className="space-y-1">
                        {solution.challenges.map((item, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase text-gray-500 mb-2">Outcomes</h4>
                      <ul className="space-y-1">
                        {solution.outcomes.map((item, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
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

      {/* Pricing Models */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Any Pricing Model, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Any Complexity</span>
            </h2>
            <p className="text-gray-600 text-lg">
              I implement the right pricing strategy for your business.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {pricingModels.map((model, index) => {
              const Icon = model.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 text-center border border-gray-200 hover:shadow-lg transition-all"
                >
                  <div className={`w-10 h-10 mx-auto bg-gradient-to-br ${model.color} rounded-lg flex items-center justify-center mb-2`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{model.model}</h3>
                  <p className="text-xs text-gray-500">{model.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote-to-Cash Flow */}
      <section className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">Quote-to-Cash</span> Flow
            </h2>
            <p className="text-blue-100 text-lg">
              Every step optimized for speed, accuracy, and revenue.
            </p>
          </div>

          <div className="relative">
            {/* Flow Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { step: "Configure", icon: Settings, desc: "Product selection" },
                { step: "Price", icon: DollarSign, desc: "Pricing & discounts" },
                { step: "Quote", icon: FileText, desc: "Proposal generation" },
                { step: "Contract", icon: FileText, desc: "Agreement & e-sign" },
                { step: "Order", icon: Package, desc: "Order processing" },
                { step: "Invoice", icon: Calculator, desc: "Billing & revenue" }
              ].map((item, index) => {
                const Icon = item.icon;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 z-10"
                  >
                    <div className="w-10 h-10 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-2">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-sm font-bold mb-1">{item.step}</h3>
                    <p className="text-xs text-blue-200">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Impact */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">ROI</span> of Quote-to-Cash Transformation
              </h2>
              
              <div className="space-y-4">
                {roiMetrics.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <h3 className="font-bold text-gray-900">{item.area}</h3>
                      <p className="text-sm text-gray-600">{item.metric}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${item.color} text-white`}>
                      {item.impact}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Revenue Acceleration Calculator</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Current quote-to-cash cycle</span>
                    <span className="font-bold text-gray-900">7-10 days</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-red-400 rounded-full"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">After optimization</span>
                    <span className="font-bold text-blue-600">1-2 days</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-1/5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-blue-200">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-900">Additional revenue captured</span>
                    <span className="text-2xl font-bold text-blue-600">$2.5M+</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    *Based on $50M annual revenue
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Industries I've <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Transformed</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Quote-to-cash optimization across diverse sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-medium text-gray-900">{industry.name}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Revenue Leaders</span>
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
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <Star className="w-8 h-8 text-yellow-400 mb-4" />
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-blue-600">{testimonial.company}</p>
                  </div>
                </div>
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
              Ready to accelerate your revenue?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how optimized quote-to-cash processes can drive faster growth and higher profitability.
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
                to="/case-studies"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full font-medium transition-all border border-white/20"
              >
                View CPQ case studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default QuoteToCashPage;