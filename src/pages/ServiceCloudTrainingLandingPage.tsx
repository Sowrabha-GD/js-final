import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Award, Users, Clock, BookOpen,
  CheckCircle, ArrowRight, Star, Zap,
  Calendar, Video, CreditCard, Gift,
  Sparkles, Target, TrendingUp, Globe,
  MessageCircle, Laptop, Coffee, Download,
  PlayCircle, FileText, BarChart, Shield,
  ShoppingCart, HeadphonesIcon, Headset,
  Phone, Mail, MessageSquare, HelpCircle,
  ThumbsUp, Smile, Clock as ClockIcon
} from "lucide-react";

const ServiceCloudTraining = () => {
  const [selectedTab, setSelectedTab] = useState<'live' | 'recorded'>('live');

  const courseHighlights = [
    {
      icon: Headset,
      title: "40+ Hours Content",
      description: "20 hours live or 40+ hours self-paced service mastery"
    },
    {
      icon: Users,
      title: "Live Mentorship",
      description: "Direct interaction with Jeet Singh"
    },
    {
      icon: Award,
      title: "Service Cloud Certified",
      description: "Complete Service Cloud Consultant prep"
    },
    {
      icon: MessageCircle,
      title: "Omnichannel Focus",
      description: "Master phone, email, chat, and social service"
    }
  ];

  const curriculum = [
    {
      week: "Week 1",
      title: "Service Cloud Fundamentals",
      topics: [
        "Service Cloud data model",
        "Case management and entitlement",
        "Omnichannel setup and routing",
        "Service console customization"
      ],
      duration: "5 hours",
      icon: HelpCircle
    },
    {
      week: "Week 2",
      title: "Knowledge & Self-Service",
      topics: [
        "Knowledge base setup and management",
        "Articles and data categories",
        "Customer portals and communities",
        "Chatbots and automated responses"
      ],
      duration: "5 hours",
      icon: MessageSquare
    },
    {
      week: "Week 3",
      title: "Field Service & Mobile",
      topics: [
        "Field service mobile app",
        "Work orders and service resources",
        "Scheduling and optimization",
        "Inventory and parts management"
      ],
      duration: "5 hours",
      icon: Phone
    },
    {
      week: "Week 4",
      title: "Service Analytics & AI",
      topics: [
        "Service dashboards and reports",
        "Einstein case classification",
        "Service forecasting",
        "Service Cloud Consultant certification prep"
      ],
      duration: "5 hours",
      icon: BarChart
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Job-Ready Skills",
      description: "Master customer service processes used by leading enterprises"
    },
    {
      icon: TrendingUp,
      title: "Career Acceleration",
      description: "High demand for Service Cloud Consultants"
    },
    {
      icon: Globe,
      title: "Global Recognition",
      description: "Service Cloud skills recognized worldwide"
    },
    {
      icon: MessageCircle,
      title: "Lifetime Support",
      description: "Post-training doubt clearing and community access"
    }
  ];

  const whatYouWillLearn = [
    "Configure case management and entitlements",
    "Implement omnichannel routing and service console",
    "Set up knowledge base and self-service portals",
    "Master field service and mobile workforce management",
    "Design service dashboards and reports",
    "Implement chatbots and automated responses",
    "Configure entitlement and milestone tracking",
    "Prepare for Service Cloud Consultant certification"
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Service Cloud Consultant at Accenture",
      image: "PS",
      quote: "Jeet's Service Cloud training transformed my career. The omnichannel and field service modules were incredibly detailed and practical.",
      rating: 5,
      outcome: "Service Cloud Consultant Certified"
    },
    {
      name: "Vikram Singh",
      role: "Customer Service Director",
      image: "VS",
      quote: "We implemented everything we learned and saw CSAT scores improve by 40% within 6 months. The ROI was immediate.",
      rating: 5,
      outcome: "CSAT +40%"
    }
  ];

  const faqs = [
    {
      q: "Do I need admin experience?",
      a: "Basic Salesforce admin knowledge is helpful but not mandatory. We cover fundamentals first."
    },
    {
      q: "Which certification does this prepare for?",
      a: "The course fully covers the Service Cloud Consultant certification syllabus."
    },
    {
      q: "Is field service covered?",
      a: "Yes! Week 3 is dedicated to field service, including mobile app, scheduling, and inventory management."
    },
    {
      q: "Will I learn knowledge management?",
      a: "Absolutely. Week 2 covers knowledge base setup, article management, and self-service portals."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-800 via-cyan-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="service" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="5" stroke="white" strokeWidth="2" fill="none" />
                <circle cx="20" cy="20" r="10" stroke="white" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#service)" />
          </svg>
        </div>

        <div className="container-wide py-16 md:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                <Headset className="w-4 h-4" />
                Service Cloud Training
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Deliver <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-cyan-200">Exceptional Service</span>
              </h1>
              
              <p className="text-xl text-teal-100 mb-8">
                4-week live cohort or self-paced recorded training. Master Service Cloud and prepare for Service Cloud Consultant certification.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {courseHighlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-teal-300" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{item.title}</div>
                        <div className="text-xs text-teal-200">{item.description}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Pricing Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Live Cohort Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`bg-white rounded-2xl p-6 shadow-xl cursor-pointer transition-all ${
                  selectedTab === 'live' ? 'ring-2 ring-teal-500' : ''
                }`}
                onClick={() => setSelectedTab('live')}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Live Cohort</h3>
                      <p className="text-sm text-gray-500">4 weeks • 20+ hours</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500 line-through">₹27,999</span>
                    <div className="text-3xl font-bold text-gray-900">₹11,900</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">Limited seats</span>
                  <span className="bg-teal-100 text-teal-700 text-xs font-semibold px-2 py-1 rounded-full">Starts monthly</span>
                </div>

                {selectedTab === 'live' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4"
                  >
                    <ul className="space-y-2 mb-4">
                      {[
                        "Live sessions with Jeet",
                        "Real-world service scenarios",
                        "Omnichannel workshops",
                        "Field service exercises",
                        "Lifetime access to recordings",
                        "Certificate of completion"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/ContactTrainingPage"
                      className="block w-full px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-medium rounded-xl text-center transition-all"
                    >
                      Enroll in Live Cohort →
                    </Link>
                  </motion.div>
                )}
              </motion.div>

              {/* Recorded Course Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`bg-white rounded-2xl p-6 shadow-xl cursor-pointer transition-all ${
                  selectedTab === 'recorded' ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setSelectedTab('recorded')}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                      <Video className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Recorded Course</h3>
                      <p className="text-sm text-gray-500">Self-paced • Lifetime access</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500 line-through">₹5,499</span>
                    <div className="text-3xl font-bold text-gray-900">₹1,399</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-2 py-1 rounded-full">Launch offer</span>
                  <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">Also on Udemy</span>
                </div>

                {selectedTab === 'recorded' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4"
                  >
                    <ul className="space-y-2 mb-4">
                      {[
                        "40+ hours of on-demand video",
                        "Downloadable resources",
                        "Service scenarios and exercises",
                        "Lifetime access",
                        "Certificate of completion",
                        "Watch anywhere, anytime"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="grid grid-cols-2 gap-3">
                      <Link
                        to="/ContactTrainingPage"
                        className="px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium rounded-xl text-center transition-all"
                      >
                        Buy Directly
                      </Link>
                      <a
                        href="https://udemy.com/course/salesforce-service-cloud"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl text-center transition-all flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Udemy
                      </a>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { icon: Users, text: "350+ Service Professionals Trained" },
              { icon: Star, text: "4.9/5 Rating" },
              { icon: Award, text: "Service Cloud Consultant Prep" },
              { icon: Globe, text: "Lifetime Access" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-teal-600" />
                  <span className="text-sm text-gray-600">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              What You'll <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Learn</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive curriculum designed to make you a Service Cloud expert
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatYouWillLearn.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Course <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Curriculum</span>
            </h2>
            <p className="text-gray-600 text-lg">
              4 weeks • 20+ hours of live training • 40+ hours recorded
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculum.map((week, index) => {
              const Icon = week.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm text-teal-600 font-semibold">{week.duration}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{week.week}</h3>
                  <p className="text-sm text-gray-600 mb-3">{week.title}</p>
                  
                  <ul className="space-y-2">
                    {week.topics.map((topic, i) => (
                      <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-teal-400 mt-1.5"></span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Why Learn <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Service Cloud</span> with Jeet
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.image}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-3 italic">"{testimonial.quote}"</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-green-600">{testimonial.outcome}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Service Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">FAQ</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
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

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-teal-800 to-cyan-800 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Start Your Service Cloud Journey Today
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Join 350+ professionals who've mastered Service Cloud and transformed their careers
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/ContactTrainingPage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-900 hover:bg-teal-50 font-medium rounded-full transition-all transform hover:scale-105"
              >
                Join Live Cohort (₹11,900)
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/ContactTrainingPage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full font-medium transition-all border border-white/20"
              >
                Buy Recorded Course (₹1,399)
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceCloudTraining;