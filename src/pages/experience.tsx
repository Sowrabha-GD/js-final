import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Users, Share2, Globe, Lock,
  CheckCircle, ArrowRight, Award, Star,
  Zap, MessageCircle, Heart, Repeat,
  Briefcase, ShoppingBag, GraduationCap, Building2,
  Sparkles, Network, Link2, Camera
} from "lucide-react";

const ExperienceCloudPage = () => {
  const solutions = [
    {
      title: "Customer Communities",
      description: "Create vibrant spaces where customers connect, share, and support each other.",
      icon: Users,
      theme: "connection",
      challenges: [
        "Support team overwhelmed with common questions",
        "Customers feel disconnected from your brand",
        "No way for customers to help each other",
        "Missed opportunities for advocacy"
      ],
      outcomes: [
        "30-40% reduction in support tickets",
        "Customers become brand advocates",
        "Peer-to-peer knowledge sharing",
        "24/7 community-powered support"
      ]
    },
    {
      title: "Partner Portals",
      description: "Empower your partners with the tools, information, and relationships they need to succeed.",
      icon: Share2,
      theme: "collaboration",
      challenges: [
        "Partners can't find what they need",
        "Manual partner communication",
        "No visibility into partner performance",
        "Inconsistent partner experience"
      ],
      outcomes: [
        "45% faster partner onboarding",
        "Real-time partner analytics",
        "Streamlined deal registration",
        "Stronger partner relationships"
      ]
    },
    {
      title: "Employee Communities",
      description: "Connect your workforce with engaging internal communities that foster collaboration and culture.",
      icon: Network,
      theme: "internal",
      challenges: [
        "Information silos across departments",
        "New hires struggle to get up to speed",
        "Employees feel disconnected",
        "Best practices not shared"
      ],
      outcomes: [
        "Faster new hire ramp-up",
        "Cross-department collaboration",
        "Knowledge sharing culture",
        "Higher employee engagement"
      ]
    },
    {
      title: "Member Portals",
      description: "Deliver personalized experiences for members, subscribers, and loyal customers.",
      icon: Heart,
      theme: "loyalty",
      challenges: [
        "Members can't manage their own accounts",
        "No self-service for common needs",
        "Loyalty feels transactional",
        "Missed opportunities for engagement"
      ],
      outcomes: [
        "80% member self-service",
        "Personalized member experiences",
        "Increased loyalty program engagement",
        "Reduced member support costs"
      ]
    }
  ];

  const communityTypes = [
    {
      type: "Customer Community",
      icon: Users,
      description: "Connect customers with each other and your brand",
      features: ["Discussion forums", "Ideas & voting", "Knowledge base", "Customer recognition"]
    },
    {
      type: "Partner Community",
      icon: Briefcase,
      description: "Empower your channel with tools and relationships",
      features: ["Deal registration", "Partner locator", "Lead distribution", "Co-branded content"]
    },
    {
      type: "Employee Community",
      icon: Building2,
      description: "Connect your workforce across departments",
      features: ["Expert finder", "Department groups", "Announcements", "Recognition"]
    },
    {
      type: "Brand Community",
      icon: Heart,
      description: "Build loyalty and advocacy around your brand",
      features: ["Exclusive content", "Early access", "Events", "Ambassador programs"]
    }
  ];

  const benefits = [
    {
      title: "Self-Service at Scale",
      description: "Empower customers to find answers, connect with peers, and resolve issues on their own.",
      stat: "40% reduction in support tickets",
      icon: Zap
    },
    {
      title: "Deeper Relationships",
      description: "Transform transactional interactions into lasting relationships and brand advocacy.",
      stat: "3x higher customer lifetime value",
      icon: Heart
    },
    {
      title: "Network Effects",
      description: "Each new member makes the community more valuable for everyone.",
      stat: "Exponential growth in engagement",
      icon: Network
    },
    {
      title: "Insights at Scale",
      description: "Listen to what your community is saying and act on real-time feedback.",
      stat: "Real-time customer insights",
      icon: Link2
    }
  ];

  const metrics = [
    { label: "Support Ticket Reduction", value: "30-40%", color: "from-blue-500 to-cyan-500" },
    { label: "Member Engagement Increase", value: "+65%", color: "from-purple-500 to-pink-500" },
    { label: "Partner Revenue Growth", value: "+35%", color: "from-emerald-500 to-teal-500" },
    { label: "Net Promoter Score Lift", value: "+25pts", color: "from-amber-500 to-orange-500" }
  ];

  const testimonials = [
    {
      quote: "The customer community Jeet built has become the heart of our brand. Customers help each other, share ideas, and have become our biggest advocates. Support tickets are down 40%.",
      author: "Emily Rodriguez",
      role: "Chief Marketing Officer",
      company: "ConnectSphere",
      image: "ER"
    },
    {
      quote: "Our partner portal transformed how we work with channel partners. Onboarding time dropped from weeks to days, and partner-sourced revenue is up 45%.",
      author: "James Chen",
      role: "Channel Sales Director",
      company: "Global Solutions Inc.",
      image: "JC"
    }
  ];

  return (
    <Layout>
      {/* Hero Section - Connection Theme */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-800 text-white overflow-hidden">
        {/* Animated Network Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="network" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="white" />
                <circle cx="50" cy="10" r="2" fill="white" />
                <circle cx="30" cy="40" r="2" fill="white" />
                <line x1="10" y1="10" x2="50" y2="10" stroke="white" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="10" y1="10" x2="30" y2="40" stroke="white" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="50" y1="10" x2="30" y2="40" stroke="white" strokeWidth="1" strokeDasharray="2 2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network)" />
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
                <Users className="w-4 h-4" />
                Experience Cloud & Communities
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-200">Connected Communities</span> Where Relationships Thrive
              </h1>
              
              <p className="text-xl text-emerald-100 mb-8 max-w-2xl">
                I help brands create vibrant digital destinations where customers connect, partners collaborate, and employees engage. Transform your business from transactions to relationships.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-900 hover:bg-emerald-50 rounded-xl font-medium transition-all"
                >
                  Discuss your community vision
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl font-medium transition-all border border-white/20"
                >
                  See community examples
                </Link>
              </div>

              <div className="flex gap-8 mt-8 pt-8 border-t border-white/20">
                <div>
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-sm text-emerald-200">Communities Launched</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">500K+</div>
                  <div className="text-sm text-emerald-200">Active Members</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">40%</div>
                  <div className="text-sm text-emerald-200">Avg Ticket Reduction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Types Grid */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold tracking-wider text-emerald-600 uppercase bg-emerald-50 px-4 py-2 rounded-full">
              Community Types
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-6 mb-4">
              Every Community Has a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">Purpose</span>
            </h2>
            <p className="text-gray-600 text-lg">
              I design communities that serve your unique business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityTypes.map((type, index) => {
              const Icon = type.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{type.type}</h3>
                  <p className="text-sm text-gray-600 mb-4">{type.description}</p>
                  
                  <div className="space-y-2">
                    {type.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-500">
                        <CheckCircle className="w-3 h-3 text-emerald-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
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
              How I Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">Thriving Communities</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Each community is unique, but my approach to building them is proven.
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
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
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

      {/* Benefits with Stats */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">Community</span> Matters
            </h2>
            <p className="text-gray-600 text-lg">
              Communities deliver value that scales with every new member.
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
                  className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500 to-cyan-500 opacity-5 rounded-bl-full"></div>
                  
                  <Icon className="w-8 h-8 text-emerald-600 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{benefit.description}</p>
                  <div className="inline-block bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {benefit.stat}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Metrics Dashboard */}
      <section className="bg-gradient-to-br from-emerald-900 to-cyan-900 text-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-200">Impact</span>
            </h2>
            <p className="text-emerald-100 text-lg">
              Real results from communities I've built.
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
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
              >
                <div className={`text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                  {metric.value}
                </div>
                <div className="text-sm text-white/80">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Approach - Network Visualization */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">Community-Building</span> Framework
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Discover Purpose</h3>
                    <p className="text-gray-600">Every great community has a clear purpose. I help you define why your community exists and who it serves.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Design for Connection</h3>
                    <p className="text-gray-600">I design experiences that spark conversations, build relationships, and create a sense of belonging.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Launch & Nurture</h3>
                    <p className="text-gray-600">I help you launch with momentum and nurture your community through its early days and beyond.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-600 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Measure & Evolve</h3>
                    <p className="text-gray-600">I help you track what matters and continuously evolve your community to serve members better.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Network Visualization */}
              <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-3xl p-8 border border-emerald-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">The Network Effect</h3>
                
                <div className="relative h-64 flex items-center justify-center">
                  {/* Center Node */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold shadow-xl z-10">
                    Hub
                  </div>
                  
                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                      const rad = (angle * Math.PI) / 180;
                      const x = Math.cos(rad) * 80 + 50;
                      const y = Math.sin(rad) * 80 + 50;
                      return (
                        <line
                          key={i}
                          x1="50%"
                          y1="50%"
                          x2={`${x}%`}
                          y2={`${y}%`}
                          stroke="#10B981"
                          strokeWidth="1"
                          strokeDasharray="3 3"
                          opacity="0.3"
                        />
                      );
                    })}
                  </svg>
                  
                  {/* Satellite Nodes */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = Math.cos(rad) * 80 + 50;
                    const y = Math.sin(rad) * 80 + 50;
                    return (
                      <div
                        key={i}
                        className="absolute w-8 h-8 bg-white rounded-full shadow-md border-2 border-emerald-500 flex items-center justify-center"
                        style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                      >
                        <Users className="w-4 h-4 text-emerald-600" />
                      </div>
                    );
                  })}
                </div>
                
                <p className="text-center text-sm text-gray-600 mt-8">
                  Each new member makes the community more valuable for everyone
                </p>
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
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">Community Builders</span>
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-600 to-cyan-600 flex items-center justify-center text-white font-bold">
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
      <section className="bg-gradient-to-r from-emerald-900 to-cyan-900 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to build your community?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how a connected community can transform your customer, partner, and employee relationships.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-900 hover:bg-emerald-50 font-medium rounded-full transition-all transform hover:scale-105"
              >
                Start the conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full font-medium transition-all border border-white/20"
              >
                See community examples
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ExperienceCloudPage;