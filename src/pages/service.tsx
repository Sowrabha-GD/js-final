import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  HeadphonesIcon, Users, Clock, MessageCircle,
  CheckCircle, ArrowRight, Award, Star,
  Zap, BarChart, Settings, Globe,
  Briefcase, Heart, Repeat, Shield,
  Rocket, Sparkles, Phone, Mail,
  BookOpen
} from "lucide-react";

const ServiceSolutionsPage = () => {
  const solutions = [
    {
      title: "Omni-Channel Customer Service",
      description: "Deliver seamless support across phone, email, chat, social, and messaging - all in one place.",
      icon: HeadphonesIcon,
      challenges: [
        "Customers repeat themselves across channels",
        "Agents juggle multiple disconnected tools",
        "Long response and resolution times",
        "Inconsistent service quality"
      ],
      outcomes: [
        "30% faster response times",
        "Unified customer conversation history",
        "Agents work from single interface",
        "Consistent service across channels"
      ]
    },
    {
      title: "Field Service Optimization",
      description: "Transform your field operations with intelligent scheduling, mobile tools, and real-time visibility.",
      icon: Settings,
      challenges: [
        "Inefficient dispatcher scheduling",
        "Technicians lack customer history",
        "Travel time and costs too high",
        "Parts not available when needed"
      ],
      outcomes: [
        "25% more service calls per day",
        "20% reduction in travel time",
        "First-time fix rate >90%",
        "Real-time visibility into field ops"
      ]
    },
    {
      title: "Customer Self-Service Portals",
      description: "Empower customers to find answers, track cases, and resolve issues on their own terms.",
      icon: Globe,
      challenges: [
        "Support team overwhelmed with basic questions",
        "Customers want 24/7 access",
        "Knowledge base is outdated",
        "No visibility into case status"
      ],
      outcomes: [
        "40% reduction in support tickets",
        "24/7 customer access",
        "Current, searchable knowledge base",
        "Customers track own cases"
      ]
    },
    {
      title: "AI-Powered Service",
      description: "Leverage AI to automate responses, suggest solutions, and help agents work smarter.",
      icon: Zap,
      challenges: [
        "Agents spend time searching for answers",
        "Slow responses to common questions",
        "Inconsistent answers",
        "Missed opportunities to delight"
      ],
      outcomes: [
        "50% faster agent response",
        "Automated answers to common queries",
        "Consistent, accurate responses",
        "AI-suggested next best actions"
      ]
    },
    {
      title: "Customer 360 for Service",
      description: "Give agents complete context - products, history, preferences - in one view.",
      icon: Users,
      challenges: [
        "Agents lack full customer context",
        "No visibility into previous interactions",
        "Missed cross-sell opportunities",
        "Frustrated customers repeat information"
      ],
      outcomes: [
        "Complete customer view",
        "Personalized service interactions",
        "Relevant cross-sell recommendations",
        "Higher customer satisfaction"
      ]
    },
    {
      title: "Service Analytics & Insights",
      description: "Measure what matters with real-time dashboards, trends, and actionable insights.",
      icon: BarChart,
      challenges: [
        "No visibility into team performance",
        "Can't identify root causes",
        "Reactive, not proactive",
        "Unable to measure CSAT trends"
      ],
      outcomes: [
        "Real-time performance dashboards",
        "Identify trends before they become problems",
        "Proactive service improvements",
        "Track and improve CSAT"
      ]
    }
  ];

  const industries = [
    { name: "Financial Services", icon: Briefcase },
    { name: "Technology", icon: Zap },
    { name: "Manufacturing", icon: Settings },
    { name: "Healthcare", icon: Heart },
    { name: "Retail", icon: Repeat },
    { name: "Travel & Hospitality", icon: Globe }
  ];

  const metrics = [
    { label: "CSAT Improvement", value: "+35%", color: "from-green-500 to-emerald-500" },
    { label: "Response Time Reduction", value: "-40%", color: "from-blue-500 to-cyan-500" },
    { label: "First Contact Resolution", value: "+45%", color: "from-purple-500 to-pink-500" },
    { label: "Agent Productivity", value: "+30%", color: "from-amber-500 to-orange-500" }
  ];

  const testimonials = [
    {
      quote: "Jeet transformed our customer service operation from chaos to clarity. We now handle 40% more cases with the same team, and CSAT is at an all-time high.",
      author: "Jessica Martinez",
      role: "VP of Customer Experience",
      company: "ServiceFirst",
      image: "JM"
    },
    {
      quote: "The field service optimization Jeet implemented has been a game-changer. Our technicians complete 25% more calls per day, and first-time fix rates are over 90%.",
      author: "David Chen",
      role: "Field Operations Director",
      company: "National Services",
      image: "DC"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container-wide py-20 md:py-28 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                <HeadphonesIcon className="w-4 h-4" />
                Service Solutions
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Transform Customer Service from <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200">Cost Center to Competitive Advantage</span>
              </h1>
              
              <p className="text-xl text-purple-100 mb-8 max-w-2xl">
                I help service leaders deliver exceptional experiences that drive loyalty, reduce costs, and empower teams. From contact centers to field service, I've transformed service operations across industries.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-900 hover:bg-purple-50 rounded-xl font-medium transition-all"
                >
                  Discuss your service challenges
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
                  <div className="text-2xl font-bold">20+</div>
                  <div className="text-sm text-purple-200">Service Transformations</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">1M+</div>
                  <div className="text-sm text-purple-200">Cases Managed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">35%</div>
                  <div className="text-sm text-purple-200">Avg CSAT Increase</div>
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
            <span className="text-sm font-semibold tracking-wider text-purple-600 uppercase bg-purple-50 px-4 py-2 rounded-full">
              What I Deliver
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-6 mb-4">
              Service Solutions That <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Drive Loyalty</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Not just software implementation — true service transformation that delights customers and empowers teams.
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
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
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

      {/* Metrics Dashboard */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Measurable <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Impact</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Real results from service transformations across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100"
              >
                <div className={`text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries I Serve */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Experience</span>
            </h2>
            <p className="text-gray-600 text-lg">
              I've helped service organizations across industries transform their operations.
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
                  className="bg-white rounded-2xl p-6 text-center shadow-md border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-medium text-gray-900 text-sm">{industry.name}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Approach</span> to Service Transformation
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Listen & Diagnose</h3>
                    <p className="text-gray-600">I start by understanding your customers' pain points and your team's challenges. I observe calls, review cases, and talk to agents and leaders.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Design the Experience</h3>
                    <p className="text-gray-600">I design service processes that delight customers and empower agents — balancing automation with human touch.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Implement & Enable</h3>
                    <p className="text-gray-600">I implement with care for user adoption, training your team and ensuring they're confident and capable.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Measure & Improve</h3>
                    <p className="text-gray-600">I help you track what matters and continuously improve based on data and customer feedback.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Service Transformation Dividend</h3>
              <div className="space-y-4">
                {[
                  { metric: "CSAT Improvement", value: "30-40%", icon: Star },
                  { metric: "Cost per Case Reduction", value: "20-30%", icon: Clock },
                  { metric: "First Contact Resolution", value: "+40-50%", icon: CheckCircle },
                  { metric: "Agent Retention", value: "+25%", icon: Users }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <Icon className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700 flex-1">{item.metric}</span>
                      <span className="font-bold text-purple-600">{item.value}</span>
                    </div>
                  );
                })}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                *Based on actual results from client engagements
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Capabilities</span>
            </h2>
            <p className="text-gray-600 text-lg">
              What I bring to every service transformation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Omni-Channel Routing", icon: MessageCircle },
              { name: "Knowledge Management", icon: BookOpen },
              { name: "Field Service", icon: Settings },
              { name: "AI Chatbots", icon: Zap },
              { name: "Customer Portals", icon: Globe },
              { name: "Service Analytics", icon: BarChart },
              { name: "SLA Management", icon: Clock },
              { name: "Mobile Service", icon: Phone }
            ].map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-4 text-center"
                >
                  <Icon className="w-5 h-5 text-purple-600 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-700">{capability.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Service Leaders</span>
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

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to transform your customer service?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your service challenges and how I can help you turn customer support into a competitive advantage.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-900 hover:bg-purple-50 font-medium rounded-full transition-all transform hover:scale-105"
              >
                Schedule a consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full font-medium transition-all border border-white/20"
              >
                View service case studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceSolutionsPage;