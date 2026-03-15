import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Megaphone, Users, Target, BarChart,
  CheckCircle, ArrowRight, Award, Star,
  Zap, Mail, MessageCircle, Globe,
  ShoppingBag, Heart, Repeat, Sparkles,
  TrendingUp, Clock, Camera, Music,
  Phone, Smartphone, Watch, Activity
} from "lucide-react";

const MarketingCloudPage = () => {
  const solutions = [
    {
      title: "Customer Journey Orchestration",
      description: "Design and deliver personalized journeys across every touchpoint - email, mobile, social, web, and more.",
      icon: Activity,
      theme: "journey",
      challenges: [
        "Marketing messages feel disconnected and random",
        "Customers get irrelevant offers",
        "No visibility into cross-channel behavior",
        "Missed opportunities to engage at the right moment"
      ],
      outcomes: [
        "3x higher engagement rates",
        "Seamless cross-channel experiences",
        "Real-time journey optimization",
        "Customers feel understood"
      ]
    },
    {
      title: "Email Marketing Transformation",
      description: "Move beyond batch-and-blast to personalized, triggered, and AI-optimized email programs.",
      icon: Mail,
      theme: "email",
      challenges: [
        "Low open and click-through rates",
        "Manual list management",
        "No personalization at scale",
        "Emails go to spam folders"
      ],
      outcomes: [
        "45% higher open rates",
        "60% increase in click-throughs",
        "AI-optimized send times",
        "Deliverability >98%"
      ]
    },
    {
      title: "Mobile Marketing",
      description: "Engage customers on the devices they never leave - with SMS, push notifications, and mobile apps.",
      icon: Smartphone,
      theme: "mobile",
      challenges: [
        "Low mobile engagement",
        "SMS feels intrusive, not helpful",
        "No mobile analytics",
        "App uninstalls after first use"
      ],
      outcomes: [
        "80% SMS open rates",
        "3x push notification engagement",
        "Mobile-first experiences",
        "Higher app retention"
      ]
    },
    {
      title: "Social Media Marketing",
      description: "Orchestrate social campaigns that drive engagement, loyalty, and revenue across every platform.",
      icon: MessageCircle,
      theme: "social",
      challenges: [
        "Inconsistent brand voice across platforms",
        "Hard to measure social ROI",
        "Manual posting and monitoring",
        "Missed engagement opportunities"
      ],
      outcomes: [
        "Unified social presence",
        "Clear social ROI measurement",
        "Automated publishing",
        "Real-time engagement"
      ]
    },
    {
      title: "Advertising & Paid Media",
      description: "Connect paid media with customer data for精准 targeting and measurable ROI.",
      icon: Target,
      theme: "ads",
      challenges: [
        "Ad spend waste on wrong audiences",
        "Can't connect ads to sales",
        "Retargeting feels creepy, not helpful",
        "No cross-channel attribution"
      ],
      outcomes: [
        "30% lower customer acquisition cost",
        "Connected ad-to-sale attribution",
        "Intelligent audience targeting",
        "Personalized ad experiences"
      ]
    },
    {
      title: "Marketing Analytics & Attribution",
      description: "Understand what's working, what's not, and where to invest for maximum ROI.",
      icon: BarChart,
      theme: "analytics",
      challenges: [
        "No visibility into campaign performance",
        "Can't attribute revenue to channels",
        "Data silos across tools",
        "Decisions based on gut, not data"
      ],
      outcomes: [
        "Complete marketing attribution",
        "Real-time performance dashboards",
        "Data-driven budget allocation",
        "Clear ROI on every channel"
      ]
    }
  ];

  const channels = [
    { name: "Email", icon: Mail, engagement: "45% open rate lift", color: "from-blue-500 to-cyan-500" },
    { name: "SMS", icon: MessageCircle, engagement: "80% open rate", color: "from-purple-500 to-pink-500" },
    { name: "Push Notifications", icon: Smartphone, engagement: "3x engagement", color: "from-emerald-500 to-teal-500" },
    { name: "Social Media", icon: Globe, engagement: "Unified presence", color: "from-amber-500 to-orange-500" },
    { name: "Web Personalization", icon: Activity, engagement: "2x conversion", color: "from-red-500 to-rose-500" },
    { name: "Display Ads", icon: Target, engagement: "30% lower CAC", color: "from-indigo-500 to-blue-500" }
  ];

  const journeyStages = [
    {
      stage: "Awareness",
      description: "Introduce your brand to new audiences",
      channels: ["Social", "Display Ads", "Content"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      stage: "Consideration",
      description: "Nurture prospects with relevant content",
      channels: ["Email", "Retargeting", "Web"],
      color: "from-purple-500 to-pink-500"
    },
    {
      stage: "Conversion",
      description: "Drive action with compelling offers",
      channels: ["Email", "SMS", "Personalization"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      stage: "Loyalty",
      description: "Delight customers and drive repeat business",
      channels: ["Email", "Mobile", "Loyalty"],
      color: "from-amber-500 to-orange-500"
    },
    {
      stage: "Advocacy",
      description: "Turn customers into brand advocates",
      channels: ["Social", "Referral", "Community"],
      color: "from-red-500 to-rose-500"
    }
  ];

  const metrics = [
    { label: "Email Open Rate Lift", value: "+45%", icon: Mail },
    { label: "Customer Acquisition Cost", value: "-30%", icon: Target },
    { label: "Marketing ROI", value: "+60%", icon: TrendingUp },
    { label: "Customer Lifetime Value", value: "+35%", icon: Heart }
  ];

  const testimonials = [
    {
      quote: "Jeet transformed our marketing from guesswork to science. We now understand exactly which channels drive revenue, and our campaigns are truly personalized. Marketing ROI is up 60%.",
      author: "Sophia Williams",
      role: "Chief Marketing Officer",
      company: "Growth Brands Inc.",
      image: "SW"
    },
    {
      quote: "The customer journeys Jeet designed have revolutionized how we engage. Open rates doubled, and our customers actually look forward to our emails now.",
      author: "David Park",
      role: "Director of Marketing",
      company: "Modern Retail",
      image: "DP"
    }
  ];

  return (
    <Layout>
      {/* Hero Section - Journey Theme */}
      <section className="relative bg-gradient-to-br from-amber-900 via-orange-800 to-red-800 text-white overflow-hidden">
        {/* Animated Path Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="path" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M10 10 Q 30 10, 40 30 T 70 30" stroke="white" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                <circle cx="10" cy="10" r="3" fill="white" />
                <circle cx="40" cy="30" r="3" fill="white" />
                <circle cx="70" cy="30" r="3" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#path)" />
          </svg>
        </div>

        <div className="container-wide py-20 md:py-28 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                <Megaphone className="w-4 h-4" />
                Marketing Cloud
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Orchestrate <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-red-200">Customer Journeys</span> That Delight and Convert
              </h1>
              
              <p className="text-xl text-amber-100 mb-8 max-w-2xl">
                I help marketers move from batch-and-blast to personalized, cross-channel journeys that customers actually look forward to. From email to mobile to social - I create marketing that works.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-amber-900 hover:bg-amber-50 rounded-xl font-medium transition-all"
                >
                  Discuss your marketing goals
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl font-medium transition-all border border-white/20"
                >
                  View marketing success stories
                </Link>
              </div>

              <div className="flex gap-8 mt-8 pt-8 border-t border-white/20">
                <div>
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-sm text-amber-200">Marketing Transformations</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">500M+</div>
                  <div className="text-sm text-amber-200">Messages Delivered</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">60%</div>
                  <div className="text-sm text-amber-200">Avg ROI Increase</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Journey Visualization */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold tracking-wider text-amber-600 uppercase bg-amber-50 px-4 py-2 rounded-full">
              The Customer Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-6 mb-4">
              Every Customer Has a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">Story</span>
            </h2>
            <p className="text-gray-600 text-lg">
              I help you show up at the right time, with the right message, on the right channel.
            </p>
          </div>

          <div className="relative">
            {/* Journey Path */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {journeyStages.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 z-10"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center mb-4`}>
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{stage.stage}</h3>
                  <p className="text-sm text-gray-600 mb-3">{stage.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {stage.channels.map((channel, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
                        {channel}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              How I Transform <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">Marketing</span>
            </h2>
            <p className="text-gray-600 text-lg">
              From strategy to execution - I help you connect with customers at every touchpoint.
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
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
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

      {/* Channels Grid */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Every Channel, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">Orchestrated</span>
            </h2>
            <p className="text-gray-600 text-lg">
              I help you show up everywhere your customers are - consistently and personally.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {channels.map((channel, index) => {
              const Icon = channel.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 text-center border border-gray-200 hover:shadow-lg transition-all"
                >
                  <div className={`w-10 h-10 mx-auto bg-gradient-to-br ${channel.color} rounded-lg flex items-center justify-center mb-2`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{channel.name}</h3>
                  <p className="text-xs text-gray-500">{channel.engagement}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Personalization at Scale */}
      <section className="bg-gradient-to-br from-amber-900 to-red-900 text-white py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                <Sparkles className="w-4 h-4" />
                Personalization at Scale
              </span>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Make Every Customer Feel Like <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-red-200">The Only Customer</span>
              </h2>
              
              <p className="text-lg text-amber-100 mb-8">
                With AI-powered personalization, you can deliver 1:1 experiences to millions of customers. I help you harness customer data to create moments that matter.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Real-time personalization", value: "AI-powered" },
                  { label: "Engagement lift", value: "3-5x" },
                  { label: "Conversion increase", value: "+45%" },
                  { label: "Customer loyalty", value: "+35%" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-3">
                    <div className="text-sm text-amber-200">{item.label}</div>
                    <div className="text-xl font-bold">{item.value}</div>
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
              <h3 className="text-xl font-bold mb-6">How Personalization Drives Results</h3>
              
              <div className="space-y-6">
                {[
                  { channel: "Email Personalization", before: "2% CTR", after: "8% CTR", improvement: "4x" },
                  { channel: "Web Personalization", before: "3% conversion", after: "12% conversion", improvement: "4x" },
                  { channel: "SMS Personalization", before: "10% opt-out", after: "3% opt-out", improvement: "70% reduction" },
                  { channel: "Ad Personalization", before: "1.5% CTR", after: "4.5% CTR", improvement: "3x" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">{item.channel}</h4>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-amber-200">Before: {item.before}</span>
                      <ArrowRight className="w-4 h-4 text-white/40" />
                      <span className="text-green-400">After: {item.after}</span>
                      <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">
                        {item.improvement}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Dashboard */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Measurable <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">Marketing Impact</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Real results from marketing transformations across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center border border-gray-200"
                >
                  <div className="w-12 h-12 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
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
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">Marketing</span> Methodology
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Listen & Understand</h3>
                    <p className="text-gray-600">I start by understanding your customers, your goals, and your current marketing maturity.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Design Journeys</h3>
                    <p className="text-gray-600">I map out customer journeys that engage at every stage - from awareness to advocacy.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Orchestrate & Execute</h3>
                    <p className="text-gray-600">I bring journeys to life across every channel, with personalization at scale.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-600 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Measure & Optimize</h3>
                    <p className="text-gray-600">I help you track what matters and continuously improve based on data.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50 to-red-50 rounded-2xl p-8 border border-amber-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">The Marketing ROI Calculator</h3>
              
              <div className="space-y-4">
                {[
                  { investment: "Current Email Marketing", roi: "1.5x", optimized: "4.5x" },
                  { investment: "Current Digital Ads", roi: "2x", optimized: "5x" },
                  { investment: "Current Personalization", roi: "1.2x", optimized: "4x" },
                  { investment: "Current Social Media", roi: "1.8x", optimized: "4.2x" }
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{item.investment}</span>
                      <span className="text-sm text-gray-500">Current ROI: {item.roi}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-amber-500 to-red-500 rounded-full"
                          style={{ width: `${parseInt(item.roi) * 20}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-bold text-amber-600">→ {item.optimized}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-sm text-gray-600 mt-4 text-center">
                *Based on actual results from client engagements
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">Marketing Leaders</span>
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-red-600 flex items-center justify-center text-white font-bold">
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
      <section className="bg-gradient-to-r from-amber-900 to-red-900 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to transform your marketing?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how personalized, orchestrated customer journeys can drive growth for your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-900 hover:bg-amber-50 font-medium rounded-full transition-all transform hover:scale-105"
              >
                Start the conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full font-medium transition-all border border-white/20"
              >
                See marketing case studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default MarketingCloudPage;