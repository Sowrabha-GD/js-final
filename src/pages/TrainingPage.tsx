import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Award, Users, Clock, BookOpen,
  ArrowRight, Star, TrendingUp,
  Globe, Calendar, Video, Code,
  ShoppingCart, HeadphonesIcon, Calculator,
  Briefcase, Target, Zap, Shield,
  Sparkles, GraduationCap, BadgeCheck,
  Filter, Grid, List, ChevronDown,
  CheckCircle
} from "lucide-react";

const TrainingPage = () => {
  const trainingPrograms = [
    {
      id: "salesforce-admin-training",
      title: "Salesforce Admin Training",
      description: "Master Salesforce administration from fundamentals to advanced configuration. Perfect for beginners and professionals seeking certification.",
      icon: Shield,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      duration: "4 weeks",
      hours: "20+ hours",
      cohortPrice: "₹9,900",
      recordedPrice: "₹999",
      cohortOriginalPrice: "₹24,999",
      recordedOriginalPrice: "₹3,999",
      students: "500+",
      rating: 4.8,
      level: "Beginner to Intermediate",
      format: "Live Cohort & Recorded",
      nextCohort: "Starts May 15",
      topics: ["User Management", "Security", "Automation", "Reports"],
      featured: true
    },
    {
      id: "apex-development-training",
      title: "Apex Development Training",
      description: "Write efficient, governor-limit compliant Apex code. Master triggers, batch processing, and enterprise design patterns.",
      icon: Code,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      duration: "4 weeks",
      hours: "20+ hours",
      cohortPrice: "₹12,900",
      recordedPrice: "₹1,499",
      cohortOriginalPrice: "₹29,999",
      recordedOriginalPrice: "₹5,999",
      students: "300+",
      rating: 4.9,
      level: "Intermediate",
      format: "Live Cohort & Recorded",
      nextCohort: "Starts June 1",
      topics: ["Apex", "Triggers", "Batch", "Integration"],
      featured: true
    },
    {
      id: "lwc-development-training",
      title: "LWC Development Training",
      description: "Build modern, responsive Lightning Web Components. Master JavaScript, component architecture, and performance optimization.",
      icon: Sparkles,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600",
      duration: "4 weeks",
      hours: "20+ hours",
      cohortPrice: "₹12,900",
      recordedPrice: "₹1,499",
      cohortOriginalPrice: "₹29,999",
      recordedOriginalPrice: "₹5,999",
      students: "250+",
      rating: 4.8,
      level: "Intermediate",
      format: "Live Cohort & Recorded",
      nextCohort: "Starts June 15",
      topics: ["JavaScript", "LWC", "Components", "Jest"],
      featured: true
    },
    {
      id: "salesforce-cpq-training",
      title: "Salesforce CPQ & Revenue Cloud",
      description: "Master complex product configuration, pricing, and quoting. Learn to implement end-to-end quote-to-cash solutions.",
      icon: Calculator,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      duration: "4 weeks",
      hours: "20+ hours",
      cohortPrice: "₹14,900",
      recordedPrice: "₹1,799",
      cohortOriginalPrice: "₹34,999",
      recordedOriginalPrice: "₹6,999",
      students: "200+",
      rating: 4.9,
      level: "Advanced",
      format: "Live Cohort & Recorded",
      nextCohort: "Starts July 1",
      topics: ["Products", "Pricing", "Quotes", "Billing"],
      featured: true
    },
    {
      id: "sales-cloud-training",
      title: "Sales Cloud Training",
      description: "Optimize sales processes, forecasting, and territory management. Learn to drive revenue with Sales Cloud best practices.",
      icon: TrendingUp,
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      duration: "4 weeks",
      hours: "20+ hours",
      cohortPrice: "₹11,900",
      recordedPrice: "₹1,399",
      cohortOriginalPrice: "₹27,999",
      recordedOriginalPrice: "₹5,499",
      students: "400+",
      rating: 4.8,
      level: "Intermediate",
      format: "Live Cohort & Recorded",
      nextCohort: "Starts May 20",
      topics: ["Leads", "Opportunities", "Forecasting", "Territories"],
      featured: false
    },
    {
      id: "service-cloud-training",
      title: "Service Cloud Training",
      description: "Deliver exceptional customer service with omnichannel support, field service, and knowledge management.",
      icon: HeadphonesIcon,
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
      duration: "4 weeks",
      hours: "20+ hours",
      cohortPrice: "₹11,900",
      recordedPrice: "₹1,399",
      cohortOriginalPrice: "₹27,999",
      recordedOriginalPrice: "₹5,499",
      students: "350+",
      rating: 4.9,
      level: "Intermediate",
      format: "Live Cohort & Recorded",
      nextCohort: "Starts June 10",
      topics: ["Cases", "Omnichannel", "Field Service", "Knowledge"],
      featured: false
    },
    {
      id: "service-integration-training",
      title: "Service Integration Training",
      description: "Master enterprise integration patterns. Learn to connect Salesforce with external systems using APIs, events, and middleware.",
      icon: Globe,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      duration: "4 weeks",
      hours: "20+ hours",
      cohortPrice: "₹13,900",
      recordedPrice: "₹1,799",
      cohortOriginalPrice: "₹32,999",
      recordedOriginalPrice: "₹6,999",
      students: "250+",
      rating: 4.8,
      level: "Advanced",
      format: "Live Cohort & Recorded",
      nextCohort: "Starts July 15",
      topics: ["APIs", "Events", "Middleware", "Security"],
      featured: false
    }
  ];

  const categories = [
    { name: "All Programs", count: trainingPrograms.length },
    { name: "Administration", count: 1 },
    { name: "Development", count: 2 },
    { name: "CPQ & Revenue", count: 1 },
    { name: "Sales Cloud", count: 1 },
    { name: "Service Cloud", count: 2 }
  ];

  const levels = [
    { name: "Beginner", color: "bg-green-100 text-green-700" },
    { name: "Intermediate", color: "bg-blue-100 text-blue-700" },
    { name: "Advanced", color: "bg-purple-100 text-purple-700" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="training" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <GraduationCap className="w-8 h-8 text-white opacity-20" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#training)" />
          </svg>
        </div>

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              Training Programs
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Master Salesforce with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Jeet Singh</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Choose from live cohort or self-paced training programs designed to make you job-ready. 
              All programs include lifetime access and post-training support.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">7</div>
              <div className="text-sm text-gray-400">Training Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">2,200+</div>
              <div className="text-sm text-gray-400">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">4.8★</div>
              <div className="text-sm text-gray-400">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm text-gray-400">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white py-8 border-b border-gray-200 sticky top-16 z-30">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category, idx) => (
                <button
                  key={idx}
                  className={`px-4 py-2 text-sm rounded-full transition-colors ${
                    idx === 0 
                      ? 'bg-gray-900 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* View Toggle and Sort */}
            <div className="flex items-center gap-3 lg:ml-auto">
              <div className="flex items-center gap-1 border border-gray-200 rounded-lg p-1">
                <button className="p-2 bg-gray-900 text-white rounded-md">
                  <Grid className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-md">
                  <List className="w-4 h-4" />
                </button>
              </div>
              <div className="relative">
                <select className="appearance-none pl-4 pr-10 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Sort by: Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <Award className="w-6 h-6 text-yellow-500" />
            Featured Programs
          </h2>

          <div className="grid lg:grid-cols-3 gap-6">
            {trainingPrograms.filter(p => p.featured).map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all overflow-hidden"
                >
                  {/* Popular Badge */}
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>

                  {/* Header */}
                  <div className={`p-6 bg-gradient-to-br ${program.color} bg-opacity-5 border-b border-gray-100`}>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{program.description}</p>
                  </div>

                  {/* Details */}
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        {program.duration}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Video className="w-3 h-3" />
                        {program.hours}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Users className="w-3 h-3" />
                        {program.students}
                      </span>
                      <span className="flex items-center gap-1 text-xs">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-gray-700">{program.rating}</span>
                      </span>
                    </div>

                    {/* Level Badge */}
                    <div className="mb-4">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        program.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                        program.level === 'Intermediate' ? 'bg-blue-100 text-blue-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {program.level}
                      </span>
                    </div>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {program.topics.map((topic, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {topic}
                        </span>
                      ))}
                    </div>

                    {/* Pricing */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Live Cohort</span>
                        <div>
                          <span className="text-xs text-gray-400 line-through mr-2">{program.cohortOriginalPrice}</span>
                          <span className="font-bold text-gray-900">{program.cohortPrice}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Recorded</span>
                        <div>
                          <span className="text-xs text-gray-400 line-through mr-2">{program.recordedOriginalPrice}</span>
                          <span className="font-bold text-gray-900">{program.recordedPrice}</span>
                        </div>
                      </div>
                    </div>

                    {/* Next Cohort */}
                    <div className="bg-blue-50 rounded-lg p-3 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-blue-600" />
                        <span className="text-blue-700">{program.nextCohort}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      to={`/training/${program.id}`}
                      className="block w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium rounded-xl text-center transition-all"
                    >
                      View Program Details
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Programs Grid */}
      <section className="bg-gray-50 py-16">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Training Programs</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all overflow-hidden"
                >
                  <div className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${program.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{program.title}</h3>
                        <p className="text-xs text-gray-500 line-clamp-1">{program.description}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        program.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                        program.level === 'Intermediate' ? 'bg-blue-100 text-blue-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {program.level}
                      </span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                        {program.duration}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium text-gray-700">{program.rating}</span>
                      </div>
                      <span className="text-xs text-gray-500">{program.students} students</span>
                    </div>

                    <div className="border-t border-gray-100 pt-3">
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                        <span>Live Cohort</span>
                        <span className="font-bold text-gray-900">{program.cohortPrice}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <span>Recorded</span>
                        <span className="font-bold text-gray-900">{program.recordedPrice}</span>
                      </div>

                      <Link
                        to={`/training/${program.id}`}
                        className="block w-full px-3 py-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg text-center transition-all"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Train with Jeet Singh</h2>
            <p className="text-gray-600">15+ years of enterprise experience, packaged into actionable training programs</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "CTA Certified", description: "Learn from a Salesforce Certified Technical Architect" },
              { icon: Users, title: "2,200+ Students", description: "Trusted by professionals worldwide" },
              { icon: Clock, title: "Lifetime Access", description: "Access course materials forever" },
              { icon: HeadphonesIcon, title: "Post-Training Support", description: "Lifetime doubt clearing in community" }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cohort vs Recorded Comparison */}
      <section className="bg-gray-50 py-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Live Cohort */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Live Cohort</h3>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "Live interactive sessions with Jeet",
                  "Weekly Q&A and doubt clearing",
                  "Peer learning and networking",
                  "Real-time project feedback",
                  "Lifetime access to recordings",
                  "Certificate of completion"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500">Starting at <span className="font-bold text-gray-900">₹9,900</span></p>
            </div>

            {/* Recorded */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Self-Paced Recorded</h3>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "40+ hours of on-demand video",
                  "Downloadable resources & code",
                  "Practice exercises & quizzes",
                  "Lifetime access",
                  "Certificate of completion",
                  "Watch anywhere, anytime"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500">Starting at <span className="font-bold text-gray-900">₹999</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container-wide text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Not sure which program is right for you?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a free 15-minute consultation to discuss your goals and get personalized recommendations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact/training"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 font-medium rounded-full transition-all"
            >
              Get Personalized Advice
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/FreeResourcesMasterPage"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full font-medium transition-all border border-white/20"
            >
              Download Free Resources
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TrainingPage;