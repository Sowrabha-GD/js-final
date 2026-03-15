import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

import { 
  Layout as LayoutIcon,
  Award, Users, Clock, BookOpen,
  CheckCircle, ArrowRight, Star, Zap,
  Calendar, Video, CreditCard, Gift,
  Sparkles, Target, TrendingUp, Globe,
  MessageCircle, Laptop, Coffee, Download,
  PlayCircle, FileText, BarChart, Shield,
  ShoppingCart, HeadphonesIcon, Code,
  Cpu, GitBranch, Smartphone,
  Palette, Box, Layers, Eye
} from "lucide-react";

const LWCTraining = () => {
  const [selectedTab, setSelectedTab] = useState<'live' | 'recorded'>('live');

  const courseHighlights = [
    {
      icon: LayoutIcon,
      title: "40+ Hours Content",
      description: "20 hours live or 40+ hours self-paced LWC mastery"
    },
    {
      icon: Users,
      title: "Live Mentorship",
      description: "Direct interaction with Jeet Singh"
    },
    {
      icon: Award,
      title: "JavaScript Developer Certified",
      description: "Complete JS and LWC certification prep"
    },
    {
      icon: Smartphone,
      title: "Responsive Components",
      description: "Build modern, mobile-ready UIs"
    }
  ];

  const curriculum = [
    {
      week: "Week 1",
      title: "JavaScript & LWC Fundamentals",
      topics: [
        "Modern JavaScript (ES6+) essentials",
        "LWC architecture and lifecycle",
        "Components, events, and reactivity",
        "Data binding and templating"
      ],
      duration: "5 hours",
      icon: Code
    },
    {
      week: "Week 2",
      title: "Advanced Components",
      topics: [
        "Composition and inheritance",
        "Custom events and pub-sub patterns",
        "Working with Apex in LWC",
        "Third-party libraries integration"
      ],
      duration: "5 hours",
      icon: Box
    },
    {
      week: "Week 3",
      title: "UI/UX & Styling",
      topics: [
        "SLDS and custom styling",
        "Responsive design patterns",
        "Accessibility (a11y) best practices",
        "Animation and transitions"
      ],
      duration: "5 hours",
      icon: Palette
    },
    {
      week: "Week 4",
      title: "Performance & Testing",
      topics: [
        "LWC performance optimization",
        "Jest testing for LWC",
        "Debugging techniques",
        "JavaScript Developer certification prep"
      ],
      duration: "5 hours",
      icon: Eye
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Job-Ready Skills",
      description: "Build modern, responsive UIs used by enterprise applications"
    },
    {
      icon: TrendingUp,
      title: "Career Acceleration",
      description: "High demand for LWC developers with premium salaries"
    },
    {
      icon: Globe,
      title: "Global Recognition",
      description: "LWC skills recognized worldwide"
    },
    {
      icon: MessageCircle,
      title: "Lifetime Support",
      description: "Post-training doubt clearing and developer community access"
    }
  ];

  const whatYouWillLearn = [
    "Master modern JavaScript (ES6+) for Salesforce development",
    "Build reusable Lightning Web Components",
    "Implement complex component communication patterns",
    "Integrate LWC with Apex and third-party APIs",
    "Create responsive, mobile-friendly UIs with SLDS",
    "Write Jest tests for LWC components",
    "Optimize LWC performance for enterprise apps",
    "Prepare for JavaScript Developer I certification"
  ];

  const testimonials = [
    {
      name: "Amit Kumar",
      role: "UI Developer at Accenture",
      image: "AK",
      quote: "Jeet's LWC training took me from zero to building complex components in 8 weeks. The Jest testing module was a game-changer for my career.",
      rating: 5,
      outcome: "JavaScript Developer Certified"
    },
    {
      name: "Neha Singh",
      role: "Frontend Developer at Cognizant",
      image: "NS",
      quote: "The responsive design and accessibility training set this course apart. My components now work beautifully on all devices.",
      rating: 5,
      outcome: "40% salary hike"
    }
  ];

  const faqs = [
    {
      q: "Do I need JavaScript experience?",
      a: "Basic JavaScript knowledge is helpful. We cover modern ES6+ from fundamentals to advanced concepts."
    },
    {
      q: "Which certification does this prepare for?",
      a: "The course fully covers the JavaScript Developer I certification syllabus."
    },
    {
      q: "Will I learn to integrate with Apex?",
      a: "Yes! Week 2 covers Apex integration, including wire adapters, imperative calls, and best practices."
    },
    {
      q: "Is mobile development covered?",
      a: "Absolutely. Week 3 focuses on responsive design and mobile-first development patterns."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-800 via-rose-600 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect x="10" y="10" width="20" height="20" fill="white" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
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
                <LayoutIcon className="w-4 h-4" />
                Lightning Web Components Training
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Build Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-red-200">Salesforce UIs</span>
              </h1>
              
              <p className="text-xl text-pink-100 mb-8">
                4-week live cohort or self-paced recorded training. Master Lightning Web Components and prepare for JavaScript Developer certification.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {courseHighlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-pink-300" children={""} />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{item.title}</div>
                        <div className="text-xs text-pink-200">{item.description}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Pricing Cards - Same structure as Apex page */}
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
                  selectedTab === 'live' ? 'ring-2 ring-pink-500' : ''
                }`}
                onClick={() => setSelectedTab('live')}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-red-600 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Live Cohort</h3>
                      <p className="text-sm text-gray-500">4 weeks • 20+ hours</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500 line-through">₹29,999</span>
                    <div className="text-3xl font-bold text-gray-900">₹12,900</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">Limited seats</span>
                  <span className="bg-pink-100 text-pink-700 text-xs font-semibold px-2 py-1 rounded-full">Starts monthly</span>
                </div>

                {selectedTab === 'live' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4"
                  >
                    <ul className="space-y-2 mb-4">
                      {[
                        "Live coding sessions with Jeet",
                        "Weekly code reviews",
                        "Real-time Q&A and debugging",
                        "Peer programming sessions",
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
                      className="block w-full px-6 py-3 bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-500 hover:to-red-500 text-white font-medium rounded-xl text-center transition-all"
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
                    <span className="text-sm text-gray-500 line-through">₹5,999</span>
                    <div className="text-3xl font-bold text-gray-900">₹1,499</div>
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
                        "Coding exercises & quizzes",
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
                        href="https://udemy.com/course/salesforce-lwc"
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


      {/* Rest of the sections follow the same pattern as Apex page */}
      {/* Trust Badges, What You'll Learn, Curriculum, Benefits, Testimonials, FAQ, Final CTA */}
      {/* ... (truncated for brevity, but would include all sections with LWC-specific content) */}
    {/* Trust Badges */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { icon: Users, text: "300+ Developers Trained" },
              { icon: Star, text: "4.8/5 Rating" },
              { icon: Award, text: "PD1/PD2 Prep" },
              { icon: Globe, text: "Lifetime Access" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-indigo-600" />
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
              What You'll <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Learn</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive curriculum designed to make you a production-ready Apex developer
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
              Course <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Curriculum</span>
            </h2>
            <p className="text-gray-600 text-lg">
              4 weeks • 20+ hours of live coding • 40+ hours recorded
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
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm text-indigo-600 font-semibold">{week.duration}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{week.week}</h3>
                  <p className="text-sm text-gray-600 mb-3">{week.title}</p>
                  
                  <ul className="space-y-2">
                    {week.topics.map((topic, i) => (
                      <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-indigo-400 mt-1.5"></span>
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
              Why Learn with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Jeet Singh</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Benefits that go beyond the code
            </p>
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
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
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
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Success Stories</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Real results from real developers
            </p>
          </div>

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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
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
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Questions</span>
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
      <section className="bg-gradient-to-r from-indigo-800 to-purple-800 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Start Your LWC Journey Today
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join 300+ developers who've mastered LWC and advanced their careers
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/ContactTrainingPage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-900 hover:bg-indigo-50 font-medium rounded-full transition-all transform hover:scale-105"
              >
                Join Live Cohort (₹12,900)
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/ContactTrainingPage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full font-medium transition-all border border-white/20"
              >
                Buy Recorded Course (₹1,499)
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default LWCTraining;