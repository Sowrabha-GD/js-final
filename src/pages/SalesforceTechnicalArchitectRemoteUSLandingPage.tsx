import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Award, Briefcase, Clock, MapPin,
  CheckCircle, ArrowRight, Star, TrendingUp,
  Globe, Users, Building2, Phone,
  Mail, Calendar, Shield, Zap,
  Rocket, Target, Sparkles, Wifi,
  BarChart, Cloud, Server, Code,
  DollarSign, Laptop, Home, Video,
  Coffee, Watch, Sun, Moon,
  MessageCircle,
  FileText
} from "lucide-react";

const SalesforceTechnicalArchitectRemoteUS = () => {
  const expertiseAreas = [
    {
      title: "Remote-First Architecture",
      description: "Designed for distributed teams and asynchronous collaboration",
      icon: Wifi
    },
    {
      title: "Multi-Timezone Delivery",
      description: "Seamless coordination across US timezones (ET, CT, MT, PT)",
      icon: Globe
    },
    {
      title: "Enterprise Integration",
      description: "Connect Salesforce with cloud and on-premise systems",
      icon: Cloud
    },
    {
      title: "Scalable Solutions",
      description: "Architectures that grow with your business",
      icon: Rocket
    }
  ];

  const benefits = [
    {
      icon: Home,
      title: "100% Remote",
      description: "Fully remote architect based in US timezones. No office required."
    },
    {
      icon: Award,
      title: "CTA Certified",
      description: "Top 1% of Salesforce architects globally. Enterprise expertise."
    },
    {
      icon: DollarSign,
      title: "Competitive US Rates",
      description: "$140-240/hour or $1,100-1,900/day. Premium remote expertise."
    },
    {
      icon: Video,
      title: "Seamless Collaboration",
      description: "Slack, Zoom, Jira, Miro - I work in your tools."
    }
  ];

  const services = [
    {
      title: "Remote Solution Architecture",
      description: "End-to-end solution design delivered remotely",
      rate: "$1,400-1,900/day",
      deliverables: ["Solution blueprints", "Integration designs", "Data models", "Security architecture"]
    },
    {
      title: "Technical Advisory",
      description: "Strategic guidance for distributed teams",
      rate: "$1,200-1,700/day",
      deliverables: ["Architecture reviews", "Technology roadmap", "Governance framework", "Team mentoring"]
    },
    {
      title: "Implementation Support",
      description: "Hands-on architecture for critical projects",
      rate: "$1,100-1,500/day",
      deliverables: ["Code reviews", "Performance tuning", "Security audits", "Go-live support"]
    },
    {
      title: "Remote Org Assessment",
      description: "Comprehensive health check delivered remotely",
      rate: "$14,000-22,000 fixed",
      deliverables: ["Technical debt analysis", "Performance benchmarks", "Security assessment", "Recommendations report"]
    }
  ];

  const testimonials = [
    {
      quote: "Jeet has been our remote architect for 2 years. He's seamlessly integrated with our distributed team across 4 timezones. Feels like he's in the office next door.",
      author: "David Park",
      role: "CTO",
      company: "US Tech Company",
      rating: 5,
      image: "DP"
    },
    {
      quote: "We were skeptical about hiring a fully remote architect, but Jeet made it work flawlessly. His communication and availability across timezones have been exceptional.",
      author: "Jennifer Walsh",
      role: "VP of Engineering",
      company: "East Coast Enterprise",
      rating: 5,
      image: "JW"
    }
  ];

  const recentProjects = [
    {
      client: "West Coast SaaS",
      project: "Remote Architecture Design",
      duration: "12 months",
      rate: "$1,700/day",
      impact: "100% remote delivery, 0 missed deadlines"
    },
    {
      client: "East Coast Financial",
      project: "Cloud Migration",
      duration: "8 months",
      rate: "$1,600/day",
      impact: "Seamless migration across 4 timezones"
    },
    {
      client: "Midwest Manufacturing",
      project: "Digital Transformation",
      duration: "10 months",
      rate: "$1,500/day",
      impact: "Remote team integration with on-site staff"
    }
  ];

  const remoteTools = [
    { name: "Slack", icon: MessageCircle },
    { name: "Zoom", icon: Video },
    { name: "Jira", icon: Briefcase },
    { name: "Miro", icon: Target },
    { name: "GitHub", icon: Code },
    { name: "Confluence", icon: FileText }
  ];

  const timezoneCoverage = [
    { zone: "Eastern Time (ET)", hours: "9am - 5pm", icon: Sun },
    { zone: "Central Time (CT)", hours: "8am - 4pm", icon: Sun },
    { zone: "Mountain Time (MT)", hours: "7am - 3pm", icon: Watch },
    { zone: "Pacific Time (PT)", hours: "6am - 2pm", icon: Moon }
  ];

  const usStats = [
    { label: "Remote-friendly companies", value: "70%+", description: "of US enterprises" },
    { label: "Timezones covered", value: "4", description: "ET, CT, MT, PT" },
    { label: "Remote projects", value: "25+", description: "successfully delivered" },
    { label: "Client satisfaction", value: "4.9/5", description: "remote collaboration" }
  ];

  const faqs = [
    {
      q: "How do you collaborate remotely?",
      a: "I use Slack for daily communication, Zoom for meetings, Jira for project tracking, and Miro for architecture workshops. I'm flexible - I'll use whatever tools your team prefers."
    },
    {
      q: "What timezone are you in?",
      a: "I work across US timezones. I can align with Eastern, Central, Mountain, or Pacific Time based on your team's needs. Core hours flexible."
    },
    {
      q: "Have you worked remotely with on-site teams?",
      a: "Yes. I've successfully integrated with teams that are partially on-site and partially remote. I treat everyone the same - with clear communication and documentation."
    },
    {
      q: "How do you handle sensitive data remotely?",
      a: "Enterprise-grade security. VPN access, secure document sharing, and compliance with your security policies. I've worked with financial and healthcare clients remotely."
    },
    {
      q: "Can you work East Coast hours from the West Coast?",
      a: "Absolutely. I adjust my schedule to match your team's core hours. Early morning or late evening - whatever works for your timezone."
    }
  ];

  return (
    <Layout>
      {/* Hero Section - Remote Work Theme */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-800 text-white overflow-hidden">
        {/* Connected World Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
            <g stroke="white" strokeWidth="2" fill="none">
              {/* US Map outline (simplified) */}
              <path d="M100 200 L150 150 L200 180 L250 120 L300 150 L350 130 L400 160 L450 140 L500 170 L550 150 L600 180 L650 170 L700 200 L650 230 L600 240 L550 250 L500 240 L450 260 L400 250 L350 270 L300 260 L250 280 L200 270 L150 250 L100 220 L100 200" stroke="white" />
              
              {/* Connection lines */}
              <line x1="150" y1="150" x2="650" y2="170" stroke="white" strokeDasharray="5 5" />
              <line x1="200" y1="180" x2="600" y2="240" stroke="white" strokeDasharray="5 5" />
              <line x1="250" y1="120" x2="550" y2="250" stroke="white" strokeDasharray="5 5" />
              
              {/* Timezone markers */}
              <circle cx="180" cy="160" r="5" fill="white" />
              <circle cx="320" cy="140" r="5" fill="white" />
              <circle cx="480" cy="160" r="5" fill="white" />
              <circle cx="620" cy="180" r="5" fill="white" />
            </g>
          </svg>
        </div>

        {/* Floating Orbs - Digital connection */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>

        <div className="container-wide py-20 md:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-5 h-5 text-purple-300" />
                <span className="text-purple-200 font-medium">Remote • United States • All Timezones</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Salesforce Technical Architect
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200">
                  Remote • United States
                </span>
              </h1>
              
              <p className="text-xl text-purple-100 mb-8">
                Enterprise Salesforce architecture, fully remote. $140-240/hour or $1,100-1,900/day.
                Seamless collaboration across all US timezones. CTA-certified.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
               
              <Link
            to="/ContactFreelancePage"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-white text-purple-900 hover:bg-purple-50 rounded-xl font-medium transition-all shadow-lg"
                >
                  <Calendar className="w-5 h-5" />
                  Discuss Your Remote Project
                </Link>
                <a
                  href="tel:+18005551234"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition-all shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  +1 (800) 555-1234
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {['CTA','REMOTE','SOC2','USA'].map((badge, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-white/20 flex items-center justify-center text-xs font-bold">
                      {badge}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-purple-200">Remote expertise for US enterprises</span>
              </div>
            </motion.div>

            {/* Right Column - Remote Work Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <h2 className="text-2xl font-bold mb-4">Remote by Design</h2>
              
              <p className="text-sm text-purple-200 mb-6">
                Fully remote architect serving US companies across all timezones. 25+ remote projects successfully delivered.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {usStats.map((stat, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-3">
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-purple-200">{stat.label}</div>
                    {stat.description && (
                      <div className="text-xs text-purple-300/70">{stat.description}</div>
                    )}
                  </div>
                ))}
              </div>

              {/* Timezone Coverage */}
              <h3 className="text-sm font-semibold text-purple-200 mb-3">Timezone Coverage:</h3>
              <div className="space-y-2 mb-4">
                {timezoneCoverage.map((tz, index) => {
                  const Icon = tz.icon;
                  return (
                    <div key={index} className="flex items-center justify-between bg-white/5 rounded-lg p-2">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-white">{tz.zone}</span>
                      </div>
                      <span className="text-xs text-purple-300">{tz.hours}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 pt-4 border-t border-white/20">
                <div className="flex items-center gap-2">
                  <Laptop className="w-5 h-5 text-purple-400" />
                  <p className="text-xs text-purple-200">
                    I'll be where you need me, when you need me - remotely.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Remote Tools */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="text-sm text-gray-500">I work in your tools:</span>
            {remoteTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div key={index} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-gray-700">{tool.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timezone Banner */}
      <section className="bg-gradient-to-r from-indigo-50 to-purple-50 py-8 border-b border-gray-200">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Watch className="w-5 h-5 text-purple-600" />
            <span className="text-sm text-gray-700">I adjust to YOUR timezone. Early morning or late evening - I'm here when you need me.</span>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Remote <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Expertise</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all"
                >
                  <Icon className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{area.title}</h3>
                  <p className="text-sm text-gray-600">{area.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container-wide">
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
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                >
                  <Icon className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Remote Projects</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900">{project.client}</h3>
                  <span className="text-xs font-semibold bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                    {project.rate}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{project.project}</p>
                <p className="text-xs text-gray-500 mb-2">Duration: {project.duration}</p>
                <p className="text-xs text-green-600 font-semibold">{project.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services with Rates */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Remote <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Services & Rates</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                  <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    {service.rate}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
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
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-xs text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Remote Collaboration */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                How I Make <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Remote Work</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                I've designed my entire practice around remote collaboration. You'll never feel like I'm not there.
              </p>
              <ul className="space-y-3">
                {[
                  "Daily standups via Slack/Zoom",
                  "Architecture workshops in Miro",
                  "Real-time collaboration on designs",
                  "Documentation in Confluence",
                  "Code reviews via GitHub",
                  "24-hour response guarantee"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Remote Ready</h3>
              <div className="space-y-4">
                {[
                  { day: "Monday - Friday", hours: "Flexible to your timezone" },
                  { day: "Response time", hours: "< 2 hours" },
                  { day: "Video meetings", hours: "As many as you need" },
                  { day: "On-site option", hours: "Quarterly if desired" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-medium text-gray-900">{item.day}</span>
                    <span className="text-sm text-purple-600">{item.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Remote <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">FAQ</span>
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
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-800 to-pink-800 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to work with a remote architect?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's schedule a video call to discuss your project. No travel required.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
             
              <Link
            to="/ContactFreelancePage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-900 hover:bg-purple-50 font-medium rounded-full transition-all transform hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Video Call
              </Link>
              <Link
                to="/ContactFreelancePage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full font-medium transition-all border border-white/20"
              >
                <Mail className="w-5 h-5" />
                Send Enquiry
              </Link>
            </div>
            <p className="text-sm text-purple-200 mt-6">
              I'll respond within 2 hours - wherever you are
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SalesforceTechnicalArchitectRemoteUS;