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
  ShoppingCart, HeadphonesIcon, Calculator,
  Package, DollarSign, Percent, FileSpreadsheet,
  ShoppingBag, CreditCard as CreditCardIcon
} from "lucide-react";

const CPQTraining = () => {
  const [selectedTab, setSelectedTab] = useState<'live' | 'recorded'>('live');

  const courseHighlights = [
    {
      icon: Calculator,
      title: "40+ Hours Content",
      description: "20 hours live or 40+ hours self-paced CPQ mastery"
    },
    {
      icon: Users,
      title: "Live Mentorship",
      description: "Direct interaction with Jeet Singh"
    },
    {
      icon: Award,
      title: "CPQ Specialist Certified",
      description: "Complete CPQ Specialist certification prep"
    },
    {
      icon: Package,
      title: "Real-World Scenarios",
      description: "Complex pricing, bundles, and approvals"
    }
  ];

  const curriculum = [
    {
      week: "Week 1",
      title: "CPQ Fundamentals",
      topics: [
        "CPQ data model and architecture",
        "Products, price books, and price rules",
        "Product bundles and options",
        "Configuration attributes and rules"
      ],
      duration: "5 hours",
      icon: Package
    },
    {
      week: "Week 2",
      title: "Pricing & Discounting",
      topics: [
        "Price rules and price conditions",
        "Discount schedules and tiers",
        "Subscription pricing models",
        "Contract pricing and amendments"
      ],
      duration: "5 hours",
      icon: DollarSign
    },
    {
      week: "Week 3",
      title: "Quoting & Approvals",
      topics: [
        "Quote templates and documents",
        "Approval workflows and processes",
        "Guided selling and recommendations",
        "Quote-to-order conversion"
      ],
      duration: "5 hours",
      icon: FileSpreadsheet
    },
    {
      week: "Week 4",
      title: "Billing & Revenue",
      topics: [
        "Revenue Cloud integration",
        "Billing schedules and invoicing",
        "Revenue recognition",
        "CPQ Specialist certification prep"
      ],
      duration: "5 hours",
      icon: CreditCardIcon
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Job-Ready Skills",
      description: "Master complex CPQ implementations used by enterprise sales teams"
    },
    {
      icon: TrendingUp,
      title: "Career Acceleration",
      description: "High-demand CPQ specialists command premium salaries"
    },
    {
      icon: Globe,
      title: "Global Recognition",
      description: "CPQ skills sought after worldwide"
    },
    {
      icon: MessageCircle,
      title: "Lifetime Support",
      description: "Post-training doubt clearing and CPQ community access"
    }
  ];

  const whatYouWillLearn = [
    "Configure complex product bundles and options",
    "Implement advanced pricing rules and discount schedules",
    "Design approval workflows for quotes and contracts",
    "Build guided selling experiences for sales teams",
    "Integrate CPQ with Revenue Cloud for billing",
    "Create professional quote documents and proposals",
    "Master subscription and usage-based pricing",
    "Prepare for CPQ Specialist certification"
  ];

  const testimonials = [
    {
      name: "Vikram Mehta",
      role: "CPQ Consultant at Deloitte",
      image: "VM",
      quote: "Jeet's CPQ training transformed my career. I went from basic admin to leading complex CPQ implementations. The pricing rules module was incredibly detailed.",
      rating: 5,
      outcome: "CPQ Specialist Certified"
    },
    {
      name: "Ananya Reddy",
      role: "Revenue Cloud Architect",
      image: "AR",
      quote: "The Revenue Cloud integration section alone was worth the course. I now architect end-to-end quote-to-cash solutions for enterprise clients.",
      rating: 5,
      outcome: "45% salary increase"
    }
  ];

  const faqs = [
    {
      q: "Do I need Salesforce admin experience?",
      a: "Yes, basic Salesforce admin knowledge is recommended. We'll build on that foundation."
    },
    {
      q: "Which certification does this prepare for?",
      a: "The course fully covers the CPQ Specialist certification syllabus."
    },
    {
      q: "Is Revenue Cloud covered?",
      a: "Yes! Week 4 covers Revenue Cloud integration, billing schedules, and revenue recognition."
    },
    {
      q: "Will I learn subscription pricing?",
      a: "Absolutely. Week 2 covers subscription models, usage-based pricing, and amendments."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-800 via-green-700 to-teal-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="dollar" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <text x="15" y="25" fontSize="20" fill="white">$</text>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dollar)" />
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
                <Calculator className="w-4 h-4" />
                Salesforce CPQ & Revenue Cloud Training
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-200">Quote-to-Cash</span>
              </h1>
              
              <p className="text-xl text-emerald-100 mb-8">
                4-week live cohort or self-paced recorded training. Master complex CPQ implementations and prepare for CPQ Specialist certification.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {courseHighlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-emerald-300" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{item.title}</div>
                        <div className="text-xs text-emerald-200">{item.description}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Pricing Cards - Same structure with CPQ pricing */}
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
                  selectedTab === 'live' ? 'ring-2 ring-emerald-500' : ''
                }`}
                onClick={() => setSelectedTab('live')}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Live Cohort</h3>
                      <p className="text-sm text-gray-500">4 weeks • 20+ hours</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500 line-through">₹34,999</span>
                    <div className="text-3xl font-bold text-gray-900">₹14,900</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">Limited seats</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-2 py-1 rounded-full">Starts monthly</span>
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
                        "Real-world CPQ scenarios",
                        "Complex pricing exercises",
                        "Quote template design",
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
                      className="block w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-medium rounded-xl text-center transition-all"
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
                        "Downloadable CPX configuration files",
                        "Practice exercises & quizzes",
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
                        href="https://udemy.com/course/salesforce-cpq"
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
              { icon: Users, text: "200+ CPQ Professionals Trained" },
              { icon: Star, text: "4.9/5 Rating" },
              { icon: Award, text: "CPQ Specialist Prep" },
              { icon: Globe, text: "Lifetime Access" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-emerald-600" />
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
              What You'll <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Learn</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive curriculum designed to make you a CPQ expert
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
              Course <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Curriculum</span>
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
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm text-emerald-600 font-semibold">{week.duration}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{week.week}</h3>
                  <p className="text-sm text-gray-600 mb-3">{week.title}</p>
                  
                  <ul className="space-y-2">
                    {week.topics.map((topic, i) => (
                      <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5"></span>
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
              Why Learn <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">CPQ</span> with Jeet
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
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mb-4">
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
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
              CPQ <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">FAQ</span>
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
      <section className="bg-gradient-to-r from-emerald-800 to-teal-800 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Master Quote-to-Cash Today
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Join 200+ professionals who've mastered CPQ and transformed their careers
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/ContactTrainingPage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-900 hover:bg-emerald-50 font-medium rounded-full transition-all transform hover:scale-105"
              >
                Join Live Cohort (₹14,900)
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

export default CPQTraining;