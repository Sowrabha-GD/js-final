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
  ShoppingCart, HeadphonesIcon, Code,
  Cpu, GitBranch, Database, Cloud,
  Webhook, Repeat, RefreshCw, Lock
} from "lucide-react";

const ServiceIntegrationTraining = () => {
  const [selectedTab, setSelectedTab] = useState<'live' | 'recorded'>('live');

  const courseHighlights = [
    {
      icon: Code,
      title: "40+ Hours Content",
      description: "20 hours live or 40+ hours self-paced integration mastery"
    },
    {
      icon: Users,
      title: "Live Mentorship",
      description: "Direct interaction with Jeet Singh"
    },
    {
      icon: Award,
      title: "Integration Architect",
      description: "Complete integration certification prep"
    },
    {
      icon: Cloud,
      title: "Multi-Cloud Focus",
      description: "Connect Salesforce with AWS, Azure, GCP"
    }
  ];

  const curriculum = [
    {
      week: "Week 1",
      title: "Integration Fundamentals",
      topics: [
        "Integration patterns and architectures",
        "REST and SOAP APIs",
        "Authentication and security",
        "Bulk API and streaming API"
      ],
      duration: "5 hours",
      icon: Cloud
    },
    {
      week: "Week 2",
      title: "Real-Time Integration",
      topics: [
        "Platform events and change data capture",
        "Pub/sub architecture",
        "Webhooks and callouts",
        "Middleware overview (MuleSoft, Boomi)"
      ],
      duration: "5 hours",
      icon: Zap
    },
    {
      week: "Week 3",
      title: "Batch & ETL Integration",
      topics: [
        "Bulk API best practices",
        "ETL tools and patterns",
        "Data migration strategies",
        "Error handling and monitoring"
      ],
      duration: "5 hours",
      icon: Database
    },
    {
      week: "Week 4",
      title: "Advanced Integration",
      topics: [
        "Event-driven architectures",
        "Integration testing and monitoring",
        "Security and compliance",
        "Integration Architect certification prep"
      ],
      duration: "5 hours",
      icon: Shield
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Job-Ready Skills",
      description: "Master integration patterns used by enterprise architects"
    },
    {
      icon: TrendingUp,
      title: "Career Acceleration",
      description: "High demand for Integration Architects"
    },
    {
      icon: Globe,
      title: "Global Recognition",
      description: "Integration skills recognized worldwide"
    },
    {
      icon: MessageCircle,
      title: "Lifetime Support",
      description: "Post-training doubt clearing and community access"
    }
  ];

  const whatYouWillLearn = [
    "Design REST and SOAP API integrations",
    "Implement platform events and change data capture",
    "Master Bulk API for large data volumes",
    "Build event-driven architectures",
    "Integrate with MuleSoft and other middleware",
    "Implement secure authentication patterns",
    "Design error handling and monitoring",
    "Prepare for Integration Architect certification"
  ];

  const testimonials = [
    {
      name: "Rahul Verma",
      role: "Integration Architect at Deloitte",
      image: "RV",
      quote: "Jeet's integration training was comprehensive and practical. The event-driven architecture module transformed how I design systems.",
      rating: 5,
      outcome: "Integration Architect Certified"
    },
    {
      name: "Anjali Nair",
      role: "Technical Lead at TCS",
      image: "AN",
      quote: "The hands-on exercises and real-world scenarios prepared me for complex enterprise integration challenges.",
      rating: 5,
      outcome: "Lead complex integration projects"
    }
  ];

  const faqs = [
    {
      q: "Do I need Apex experience?",
      a: "Yes, basic Apex knowledge is recommended as we build custom integration components."
    },
    {
      q: "Which certification does this prepare for?",
      a: "The course covers Integration Architect certification and also benefits those pursuing Application/System Architect."
    },
    {
      q: "Is MuleSoft covered?",
      a: "We cover MuleSoft and other middleware at a conceptual level, focusing on patterns rather than tool-specific details."
    },
    {
      q: "Will I learn event-driven architecture?",
      a: "Absolutely. Week 4 focuses on event-driven patterns, including platform events and change data capture."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-800 via-pink-600 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="integration" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <line x1="0" y1="20" x2="40" y2="20" stroke="white" strokeWidth="1" />
                <line x1="20" y1="0" x2="20" y2="40" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#integration)" />
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
                <GitBranch className="w-4 h-4" />
                Service Integration Training
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Connect <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200">Everything</span>
              </h1>
              
              <p className="text-xl text-purple-100 mb-8">
                4-week live cohort or self-paced recorded training. Master enterprise integration patterns and prepare for Integration Architect certification.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {courseHighlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-purple-300" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{item.title}</div>
                        <div className="text-xs text-purple-200">{item.description}</div>
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
                  selectedTab === 'live' ? 'ring-2 ring-purple-500' : ''
                }`}
                onClick={() => setSelectedTab('live')}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Live Cohort</h3>
                      <p className="text-sm text-gray-500">4 weeks • 20+ hours</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500 line-through">₹32,999</span>
                    <div className="text-3xl font-bold text-gray-900">₹13,900</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">Limited seats</span>
                  <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-2 py-1 rounded-full">Starts monthly</span>
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
                        "Real-world integration scenarios",
                        "API design workshops",
                        "Event-driven architecture labs",
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
                      className="block w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium rounded-xl text-center transition-all"
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
                    <span className="text-sm text-gray-500 line-through">₹6,999</span>
                    <div className="text-3xl font-bold text-gray-900">₹1,799</div>
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
                        "Downloadable code and resources",
                        "Integration patterns and examples",
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
                        href="https://udemy.com/course/salesforce-integration"
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
              { icon: Users, text: "250+ Integration Specialists Trained" },
              { icon: Star, text: "4.8/5 Rating" },
              { icon: Award, text: "Integration Architect Prep" },
              { icon: Globe, text: "Lifetime Access" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-purple-600" />
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
              What You'll <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Learn</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive curriculum designed to make you an Integration expert
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
              Course <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Curriculum</span>
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
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm text-purple-600 font-semibold">{week.duration}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{week.week}</h3>
                  <p className="text-sm text-gray-600 mb-3">{week.title}</p>
                  
                  <ul className="space-y-2">
                    {week.topics.map((topic, i) => (
                      <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-purple-400 mt-1.5"></span>
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
              Why Learn <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Integration</span> with Jeet
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
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-lg">
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
              Integration <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">FAQ</span>
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
      <section className="bg-gradient-to-r from-purple-800 to-pink-800 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Start Your Integration Journey Today
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join 250+ integration specialists who've mastered enterprise integration patterns
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/ContactTrainingPage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-900 hover:bg-purple-50 font-medium rounded-full transition-all transform hover:scale-105"
              >
                Join Live Cohort (₹13,900)
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/ContactTrainingPage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full font-medium transition-all border border-white/20"
              >
                Buy Recorded Course (₹1,799)
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceIntegrationTraining;