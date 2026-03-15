import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Car, Truck, Wrench, MapPin, Users, 
  Settings, Battery, Gauge, Zap, Key,
  CheckCircle, ArrowRight, Award, Star,
  Sparkles, Globe, TrendingUp, Clock,
  Smartphone, Navigation, Shield, Repeat
} from "lucide-react";

const AutomotivePage = () => {
  const verticals = [
    {
      name: "Vehicle Manufacturing",
      icon: Car,
      description: "Connect design, production, and quality management for Industry 4.0 transformation.",
      challenges: ["Supply chain visibility", "Quality control", "Production tracking", "Supplier collaboration"],
      solutions: ["Manufacturing Cloud", "Quality management", "Production scheduling", "Supplier portals"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Dealership Management",
      icon: Wrench,
      description: "Transform sales, service, and customer relationships across dealer networks.",
      challenges: ["Lead management", "Vehicle inventory", "Service scheduling", "Customer loyalty"],
      solutions: ["Sales Cloud", "Service Cloud", "Inventory management", "Loyalty programs"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      name: "Connected Vehicles",
      icon: Smartphone,
      description: "Deliver personalized in-car experiences and connected services.",
      challenges: ["Vehicle data integration", "Real-time alerts", "Remote services", "OTA updates"],
      solutions: ["Connected Customer", "IoT integration", "Mobile apps", "Predictive analytics"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "After-Sales & Service",
      icon: Settings,
      description: "Optimize maintenance, repairs, and parts management for customer retention.",
      challenges: ["Service history", "Parts inventory", "Warranty management", "Recall management"],
      solutions: ["Field Service", "Parts management", "Warranty tracking", "Recall automation"],
      color: "from-amber-500 to-orange-500"
    },
    {
      name: "Fleet Management",
      icon: Truck,
      description: "Manage commercial fleets with real-time tracking and predictive maintenance.",
      challenges: ["Vehicle tracking", "Driver management", "Fuel efficiency", "Maintenance scheduling"],
      solutions: ["Fleet management", "Telematics integration", "Driver portals", "Predictive maintenance"],
      color: "from-red-500 to-rose-500"
    },
    {
      name: "Mobility Services",
      icon: Navigation,
      description: "Enable car-sharing, ride-hailing, and subscription models.",
      challenges: ["Booking platform", "Billing automation", "User verification", "Fleet utilization"],
      solutions: ["Mobility Cloud", "Subscription billing", "Mobile apps", "Real-time availability"],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const useCases = [
    {
      title: "Omnichannel Sales",
      description: "Seamless buying experience from online configurator to dealership delivery",
      impact: "35% faster sales cycle",
      icon: TrendingUp
    },
    {
      title: "Predictive Service",
      description: "AI-powered service reminders and proactive maintenance alerts",
      impact: "50% reduction in breakdowns",
      icon: Gauge
    },
    {
      title: "Connected Customer",
      description: "Unified profile across vehicle ownership, service, and loyalty",
      impact: "40% higher retention",
      icon: Users
    },
    {
      title: "Parts Optimization",
      description: "Smart inventory management across dealership network",
      impact: "25% lower inventory costs",
      icon: Battery
    }
  ];

  const solutions = [
    {
      category: "Dealer Experience",
      items: [
        { name: "Lead-to-Sale Automation", description: "Convert online leads to showroom visits" },
        { name: "Vehicle Inventory Management", description: "Real-time inventory across locations" },
        { name: "Test Drive Scheduling", description: "Online booking with vehicle availability" },
        { name: "Trade-in Valuation", description: "Instant, accurate trade-in estimates" }
      ]
    },
    {
      category: "Customer Experience",
      items: [
        { name: "Service Appointment Center", description: "24/7 online service booking" },
        { name: "Vehicle Health Dashboard", description: "Remote diagnostics and alerts" },
        { name: "Loyalty Programs", description: "Points, rewards, and exclusive offers" },
        { name: "Mobile App Integration", description: "Control and monitor from smartphone" }
      ]
    },
    {
      category: "Connected Vehicle",
      items: [
        { name: "Real-Time Telematics", description: "Live vehicle data and location" },
        { name: "Predictive Maintenance", description: "AI-driven service recommendations" },
        { name: "Over-the-Air Updates", description: "Remote software updates" },
        { name: "Emergency Services", description: "Automatic crash notification" }
      ]
    },
    {
      category: "Dealer Operations",
      items: [
        { name: "Service Bay Management", description: "Optimize technician scheduling" },
        { name: "Parts Inventory", description: "Smart reordering and allocation" },
        { name: "Warranty Processing", description: "Automated claims and tracking" },
        { name: "Recall Management", description: "Proactive owner notifications" }
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Jeet transformed our dealer network with a unified Salesforce platform. We now have complete visibility into our sales pipeline and customer service history across 200+ dealerships.",
      author: "Maria Rodriguez",
      role: "VP of Digital Transformation",
      company: "Global Auto Group",
      image: "MR"
    },
    {
      quote: "The connected vehicle platform Jeet architected has revolutionized how we interact with customers. Predictive service alerts have reduced breakdowns by 50%.",
      author: "David Chen",
      role: "Chief Technology Officer",
      company: "Electric Motors Inc.",
      image: "DC"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-800 text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-teal-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container-wide py-20 md:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                <Car className="w-4 h-4" />
                Automotive Industry
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Drive the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-200">Connected Mobility</span>
              </h1>
              
              <p className="text-xl text-emerald-100 mb-8">
                Transform manufacturing, dealerships, and customer experiences with Salesforce automotive solutions.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-900 hover:bg-emerald-50 rounded-xl font-medium transition-all"
                >
                  Schedule consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/AutomotiveCaseStudyPage"
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
                <Award className="w-5 h-5 text-emerald-400" />
                Automotive Cloud Expertise
              </h3>
              <div className="space-y-4">
                {[
                  "Dealer Management Systems",
                  "Connected Vehicle Platform",
                  "Manufacturing Cloud Integration",
                  "Field Service Optimization",
                  "Customer Experience Transformation"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold">8+</div>
                  <div className="text-xs text-emerald-200">Automotive Brands</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-xs text-emerald-200">Dealerships</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">5M+</div>
                  <div className="text-xs text-emerald-200">Connected Vehicles</div>
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
            <span className="text-sm font-semibold tracking-wider text-emerald-600 uppercase bg-emerald-50 px-4 py-2 rounded-full">
              Industry Verticals
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-6 mb-4">
              Complete Automotive <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Ecosystem Coverage</span>
            </h2>
            <p className="text-gray-600 text-lg">
              From manufacturing to mobility services - deep expertise across every segment.
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
                          <span key={i} className="text-xs bg-emerald-50 text-emerald-600 px-2 py-1 rounded-md">{s}</span>
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
              Transformative <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Use Cases</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Real solutions delivering measurable impact across the automotive value chain.
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
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{useCase.description}</p>
                  <div className="inline-block bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {useCase.impact}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Solutions</span>
            </h2>
            <p className="text-gray-600 text-lg">
              End-to-end capabilities for the entire automotive ecosystem.
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
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">{solution.category}</h3>
                <div className="grid grid-cols-1 gap-4">
                  {solution.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
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

      {/* Connected Vehicle Platform */}
      <section className="bg-gradient-to-br from-emerald-900 to-teal-900 text-white py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                <Globe className="w-4 h-4" />
                Connected Vehicle Platform
              </span>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-200">Connected Mobility</span>
              </h2>
              
              <p className="text-lg text-emerald-100 mb-8">
                Transform your vehicles into connected platforms that deliver continuous value to customers long after the sale.
              </p>

              <div className="space-y-4">
                {[
                  "Real-time vehicle telematics and diagnostics",
                  "Predictive maintenance alerts",
                  "In-car personalized experiences",
                  "Over-the-air update management",
                  "EV charging integration",
                  "Usage-based insurance data"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-emerald-400 flex-shrink-0" />
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
              <h3 className="text-xl font-bold mb-6">Connected Vehicle Architecture</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <Car className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Vehicle Edge</h4>
                    <p className="text-sm text-emerald-200">In-vehicle sensors, telematics, and control units</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Connectivity Layer</h4>
                    <p className="text-sm text-emerald-200">5G, V2X, and secure cloud communication</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Salesforce Platform</h4>
                    <p className="text-sm text-emerald-200">Customer 360, analytics, and automation</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Customer Experience</h4>
                    <p className="text-sm text-emerald-200">Mobile apps, portals, and in-vehicle interfaces</p>
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
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Automotive Leaders</span>
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-emerald-600">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to transform your automotive business?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you connect every part of your automotive ecosystem - from manufacturing to connected vehicles.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-900 hover:bg-emerald-50 font-medium rounded-full transition-all transform hover:scale-105"
              >
                Schedule a consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/AutomotiveCaseStudyPage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full font-medium transition-all border border-white/20"
              >
                View automotive case studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AutomotivePage;