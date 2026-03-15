import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  TrendingUp, Users, Target, DollarSign,
  CheckCircle, ArrowRight, Award, Star,
  Zap, BarChart, Clock, Globe,
  Briefcase, PieChart, Settings, Shield,
  Rocket, Sparkles, Gift, Repeat
} from "lucide-react";

const SalesSolutionsPage = () => {
  const solutions = [
    {
      title: "Sales Process Optimization",
      description: "Streamline your entire sales cycle from lead to close with efficient, automated processes.",
      icon: TrendingUp,
      challenges: [
        "Fragmented sales data across systems",
        "Inconsistent sales processes",
        "Poor visibility into pipeline",
        "Manual data entry wasting time"
      ],
      outcomes: [
        "30% faster sales cycles",
        "25% increase in win rates",
        "Complete pipeline visibility",
        "Automated data capture"
      ]
    },
    {
      title: "Territory & Quota Planning",
      description: "Design balanced territories and quotas that maximize coverage and motivate reps.",
      icon: Target,
      challenges: [
        "Uneven territory distribution",
        "Unfair quota allocations",
        "Rep turnover in difficult areas",
        "Missed revenue opportunities"
      ],
      outcomes: [
        "Balanced rep workloads",
        "Fair, achievable quotas",
        "Optimal market coverage",
        "Higher rep retention"
      ]
    },
    {
      title: "Forecasting & Analytics",
      description: "Predict revenue accurately with AI-powered forecasting and real-time insights.",
      icon: BarChart,
      challenges: [
        "Inaccurate forecasts",
        "Gut-feel predictions",
        "Late-stage surprises",
        "No visibility into trends"
      ],
      outcomes: [
        "90% forecast accuracy",
        "Early risk identification",
        "Data-driven decisions",
        "Real-time pipeline health"
      ]
    },
    {
      title: "Sales Enablement",
      description: "Equip your sales team with the content, tools, and training they need to win.",
      icon: Rocket,
      challenges: [
        "Reps can't find content",
        "Inconsistent messaging",
        "Long ramp time for new hires",
        "Best practices not shared"
      ],
      outcomes: [
        "Faster rep productivity",
        "Consistent messaging",
        "Content usage tracking",
        "Shared winning strategies"
      ]
    },
    {
      title: "Channel Sales Management",
      description: "Extend your reach through partners, distributors, and resellers.",
      icon: Repeat,
      challenges: [
        "Partner underperformance",
        "Channel conflict",
        "Limited visibility into partner pipeline",
        "Ineffective partner communication"
      ],
      outcomes: [
        "30% partner revenue growth",
        "Reduced channel conflict",
        "Complete partner visibility",
        "Streamlined collaboration"
      ]
    },
    {
      title: "Quoting & Proposal Management",
      description: "Create accurate, professional quotes and proposals in minutes, not days.",
      icon: Gift,
      challenges: [
        "Manual quote creation",
        "Pricing errors",
        "Slow approval cycles",
        "Inconsistent proposal quality"
      ],
      outcomes: [
        "80% faster quoting",
        "Zero pricing errors",
        "Automated approvals",
        "Professional, branded proposals"
      ]
    }
  ];

  const industries = [
    { name: "Financial Services", icon: Briefcase },
    { name: "Technology", icon: Zap },
    { name: "Manufacturing", icon: Settings },
    { name: "Healthcare", icon: Shield }
  ];

  const testimonials = [
    {
      quote: "Jeet transformed our entire sales operation. We now have complete visibility into our pipeline, and our forecast accuracy has improved from 60% to 95%.",
      author: "Sarah Chen",
      role: "VP of Sales",
      company: "TechGrowth Inc.",
      image: "SC"
    },
    {
      quote: "The territory planning Jeet implemented eliminated our long-standing coverage issues. Rep morale is up, and we've seen a 35% increase in productivity.",
      author: "Michael Rodriguez",
      role: "Sales Operations Director",
      company: "Global Solutions",
      image: "MR"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container-wide py-20 md:py-28 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                <TrendingUp className="w-4 h-4" />
                Sales Solutions
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Transform Your Sales Organization into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">Revenue Engine</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 max-w-2xl">
                I help sales leaders optimize processes, empower reps, and predict revenue with confidence. 
                From startups to enterprises, I've transformed sales operations across industries.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 hover:bg-blue-50 rounded-xl font-medium transition-all"
                >
                  Discuss your sales challenges
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl font-medium transition-all border border-white/20"
                >
                  View success stories
                </Link>
              </div>

              <div className="flex gap-8 mt-8 pt-8 border-t border-white/20">
                <div>
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-blue-200">Sales Transformations</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm text-blue-200">Forecast Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">35%</div>
                  <div className="text-sm text-blue-200">Avg Productivity Gain</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 px-4 py-2 rounded-full">
              What I Deliver
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-6 mb-4">
              Sales Solutions That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Drive Results</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Not just software implementation — true sales transformation that moves metrics.
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
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{solution.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{solution.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
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

      {/* Industries I Serve */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Experience</span>
            </h2>
            <p className="text-gray-600 text-lg">
              I've helped sales organizations across industries transform their operations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 text-center shadow-md border border-gray-100"
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

      {/* My Approach */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Approach</span> to Sales Transformation
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Diagnose</h3>
                    <p className="text-gray-600">I start by understanding your current sales process, pain points, and opportunities. I talk to reps, managers, and leadership to get the full picture.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Design</h3>
                    <p className="text-gray-600">I design a solution tailored to your business model, team structure, and goals — not a one-size-fits-all template.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Deliver</h3>
                    <p className="text-gray-600">I implement with precision, train your team, and ensure adoption. I don't leave until you're seeing results.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Optimize</h3>
                    <p className="text-gray-600">I help you continuously improve with analytics, insights, and ongoing refinement.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real Results from Sales Transformations</h3>
              <div className="space-y-4">
                {[
                  { label: "Sales cycle reduction", value: "30-40%" },
                  { label: "Win rate improvement", value: "20-25%" },
                  { label: "Forecast accuracy", value: "85-95%" },
                  { label: "Rep productivity gain", value: "25-35%" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-700">{item.label}</span>
                    <span className="font-bold text-blue-600">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Sales Leaders</span>
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">
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
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to transform your sales organization?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your sales challenges and how I can help you build a revenue engine.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 hover:bg-blue-50 font-medium rounded-full transition-all transform hover:scale-105"
              >
                Schedule a consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full font-medium transition-all border border-white/20"
              >
                View case studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SalesSolutionsPage;