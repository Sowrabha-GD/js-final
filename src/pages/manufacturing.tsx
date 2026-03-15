import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Factory, Package, Truck, Settings,
  Users, Activity, BarChart, Clock,
  CheckCircle, ArrowRight, Award, Wrench,
  Cpu, Shield, Box, RotateCw,
  TrendingUp, Zap, Globe, Database,
  Star
} from "lucide-react";

const ManufacturingPage = () => {
  const verticals = [
    {
      name: "Discrete Manufacturing",
      icon: Package,
      description: "Optimize production of distinct items - from automobiles to electronics.",
      challenges: ["Production scheduling", "Quality control", "Inventory management", "Supply chain visibility"],
      solutions: ["Manufacturing Cloud", "Production scheduling", "Quality management", "Inventory optimization"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Process Manufacturing",
      icon: Settings,
      description: "Manage continuous production processes for chemicals, food, and pharmaceuticals.",
      challenges: ["Batch tracking", "Recipe management", "Compliance", "Yield optimization"],
      solutions: ["Process automation", "Batch traceability", "Compliance tracking", "Yield analytics"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Industrial Machinery",
      icon: Cpu,
      description: "Connect heavy equipment and machinery for predictive maintenance.",
      challenges: ["Equipment monitoring", "Maintenance scheduling", "Field service", "Parts management"],
      solutions: ["IoT integration", "Predictive maintenance", "Field service", "Parts inventory"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      name: "Supply Chain",
      icon: Truck,
      description: "End-to-end visibility from raw materials to finished goods.",
      challenges: ["Supplier collaboration", "Logistics tracking", "Demand forecasting", "Risk management"],
      solutions: ["Supplier portals", "Real-time tracking", "Demand planning", "Risk analytics"],
      color: "from-amber-500 to-orange-500"
    },
    {
      name: "Contract Manufacturing",
      icon: Box,
      description: "Coordinate with external partners and contract manufacturers.",
      challenges: ["Partner collaboration", "Quality agreements", "Production tracking", "Cost management"],
      solutions: ["Partner portals", "Quality management", "Production monitoring", "Cost analytics"],
      color: "from-red-500 to-rose-500"
    },
    {
      name: "Aftermarket Services",
      icon: Wrench,
      description: "Drive revenue through parts, service, and customer support.",
      challenges: ["Parts sales", "Service scheduling", "Warranty management", "Customer retention"],
      solutions: ["Parts e-commerce", "Field service", "Warranty tracking", "Loyalty programs"],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const useCases = [
    {
      title: "Production Optimization",
      description: "AI-driven scheduling and real-time production monitoring",
      impact: "30% increase in OEE",
      icon: TrendingUp
    },
    {
      title: "Predictive Maintenance",
      description: "IoT-enabled equipment monitoring and proactive service",
      impact: "45% reduction in downtime",
      icon: Zap
    },
    {
      title: "Supply Chain Visibility",
      description: "End-to-end tracking from supplier to customer",
      impact: "50% faster problem resolution",
      icon: Globe
    },
    {
      title: "Quality Management",
      description: "Real-time quality monitoring and defect prevention",
      impact: "60% fewer defects",
      icon: Shield
    }
  ];

  const solutions = [
    {
      category: "Manufacturing Operations",
      items: [
        { name: "Production Scheduling", description: "Optimize production runs and resource allocation" },
        { name: "Shop Floor Integration", description: "Real-time machine data and OEE tracking" },
        { name: "Quality Management", description: "Defect tracking and root cause analysis" },
        { name: "Inventory Management", description: "Raw material and WIP tracking" }
      ]
    },
    {
      category: "Supply Chain",
      items: [
        { name: "Supplier Collaboration", description: "Portal for orders, forecasts, and quality" },
        { name: "Logistics Tracking", description: "Real-time shipment visibility" },
        { name: "Demand Forecasting", description: "AI-powered demand planning" },
        { name: "Risk Management", description: "Supply chain risk monitoring" }
      ]
    },
    {
      category: "Field Service",
      items: [
        { name: "Service Scheduling", description: "Optimized technician dispatch" },
        { name: "Mobile Workforce", description: "Field technician mobile app" },
        { name: "Parts Management", description: "Inventory at service locations" },
        { name: "Warranty Management", description: "Automated warranty claims" }
      ]
    },
    {
      category: "Analytics & Insights",
      items: [
        { name: "Production Analytics", description: "Real-time dashboards and KPIs" },
        { name: "Quality Analytics", description: "Defect trending and prediction" },
        { name: "Supply Chain Analytics", description: "Supplier performance tracking" },
        { name: "IoT Analytics", description: "Machine data insights" }
      ]
    }
  ];

  const industry4Features = [
    {
      title: "Connected Factory",
      description: "Real-time machine monitoring and IoT integration",
      icon: Cpu
    },
    {
      title: "Digital Twin",
      description: "Virtual replica of production processes",
      icon: RotateCw
    },
    {
      title: "AI & Machine Learning",
      description: "Predictive analytics and process optimization",
      icon: Activity
    },
    {
      title: "Edge Computing",
      description: "Real-time processing at the source",
      icon: Database
    }
  ];

  const testimonials = [
    {
      quote: "Jeet's manufacturing expertise transformed our operations. We now have real-time visibility into production across 12 facilities, and OEE has improved by 30%.",
      author: "Thomas Mueller",
      role: "VP of Manufacturing",
      company: "Industrial Products Group",
      image: "TM"
    },
    {
      quote: "The predictive maintenance platform Jeet architected has reduced our unplanned downtime by 45%. We're now moving from reactive to truly proactive maintenance.",
      author: "Jennifer Walsh",
      role: "Chief Operations Officer",
      company: "Precision Manufacturing",
      image: "JW"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-orange-800 text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container-wide py-20 md:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                <Factory className="w-4 h-4" />
                Manufacturing Industry
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Transform Your Factory for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-orange-200">Industry 4.0</span>
              </h1>
              
              <p className="text-xl text-amber-100 mb-8">
                Connect operations, optimize production, and drive efficiency with Salesforce manufacturing solutions.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-amber-900 hover:bg-amber-50 rounded-xl font-medium transition-all"
                >
                  Schedule consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/ManufacturingCaseStudyPage"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl font-medium transition-all border border-white/20"
                >
                  View case studies
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                Manufacturing Cloud Expertise
              </h3>
              <div className="space-y-4">
                {[
                  "Production Scheduling & Optimization",
                  "IoT Integration & Predictive Maintenance",
                  "Supply Chain Visibility",
                  "Quality Management Systems",
                  "Field Service & Aftermarket"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold">7+</div>
                  <div className="text-xs text-amber-200">Manufacturing Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">12+</div>
                  <div className="text-xs text-amber-200">Production Facilities</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">30%</div>
                  <div className="text-xs text-amber-200">Avg OEE Improvement</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Verticals Grid */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold tracking-wider text-amber-600 uppercase bg-amber-50 px-4 py-2 rounded-full">
              Manufacturing Verticals
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-6 mb-4">
              Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Manufacturing Coverage</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Deep expertise across every segment of modern manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verticals.map((vertical, index) => {
              const Icon = vertical.icon;
              
              return (
                <motion.div
                  key={vertical.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${vertical.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{vertical.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{vertical.description}</p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-xs font-semibold uppercase text-gray-500 mb-2">Challenges</h4>
                      <div className="flex flex-wrap gap-1">
                        {vertical.challenges.map((c, i) => (
                          <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">{c}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase text-gray-500 mb-2">Solutions</h4>
                      <div className="flex flex-wrap gap-1">
                        {vertical.solutions.map((s, i) => (
                          <span key={i} className="text-xs bg-amber-50 text-amber-600 px-2 py-1 rounded-md">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Transformative <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Use Cases</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Real solutions delivering measurable improvements in manufacturing operations.
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
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{useCase.description}</p>
                  <div className="inline-block bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {useCase.impact}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry 4.0 */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">4.0</span> Capabilities
            </h2>
            <p className="text-gray-600 text-lg">
              Future-ready manufacturing with connected technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry4Features.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 text-center"
                >
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
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
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Manufacturing Solutions</span>
            </h2>
            <p className="text-gray-600 text-lg">
              End-to-end capabilities for modern manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">{solution.category}</h3>
                <div className="grid grid-cols-1 gap-4">
                  {solution.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connected Factory */}
      <section className="bg-gradient-to-br from-amber-900 to-orange-900 text-white py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                <Cpu className="w-4 h-4" />
                Connected Factory
              </span>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Real-Time Visibility Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-orange-200">Your Entire Operation</span>
              </h2>
              
              <p className="text-lg text-amber-100 mb-8">
                Connect machines, systems, and people for complete visibility and control.
              </p>

              <div className="space-y-4">
                {[
                  "Real-time machine monitoring and OEE tracking",
                  "IoT sensor integration and alerts",
                  "Production scheduling and optimization",
                  "Quality management and defect tracking",
                  "Supply chain visibility from supplier to customer",
                  "Predictive maintenance and asset management"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold mb-6">Connected Factory Results</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Overall Equipment Effectiveness</span>
                    <span className="font-bold text-amber-300">+30%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Unplanned Downtime</span>
                    <span className="font-bold text-amber-300">-45%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Quality Defects</span>
                    <span className="font-bold text-amber-300">-60%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Manufacturing Leaders</span>
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-amber-600">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-900 to-orange-900 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to transform your manufacturing operations?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you build the connected factory of the future.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-900 hover:bg-amber-50 font-medium rounded-full transition-all transform hover:scale-105"
              >
                Schedule a consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/ManufacturingCaseStudyPage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full font-medium transition-all border border-white/20"
              >
                View manufacturing case studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ManufacturingPage;