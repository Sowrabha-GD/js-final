import { motion } from "framer-motion";
import { useState } from "react";
import { 
  TrendingUp, Users, DollarSign, Clock,
  Star, Award, CheckCircle, ArrowRight,
  BarChart, Shield, Zap, Globe,
  MessageCircle, ThumbsUp, Target
} from "lucide-react";

const EnterpriseSuccessMatrix = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const companies = [
    {
      name: "Global Financial",
      logo: "GF",
      industry: "Financial Services",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      stats: {
        roi: "215%",
        savings: "$2.5M",
        efficiency: "+45%",
        satisfaction: "4.9★"
      },
      testimonial: {
        quote: "Jeet transformed our customer onboarding from 2 weeks to 24 hours. The ROI was evident in the first month.",
        author: "Sarah Chen",
        role: "CTO",
        impact: "Onboarding time reduced by 90%"
      },
      metrics: [
        { label: "Revenue Impact", value: "+$3.2M", icon: DollarSign },
        { label: "Process Efficiency", value: "+45%", icon: TrendingUp },
        { label: "User Adoption", value: "98%", icon: Users }
      ]
    },
    {
      name: "TechScale",
      logo: "TS",
      industry: "Technology",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      stats: {
        roi: "187%",
        savings: "$1.8M",
        efficiency: "+60%",
        satisfaction: "4.8★"
      },
      testimonial: {
        quote: "The integration architecture Jeet designed handles 10M+ API calls daily with 99.99% uptime.",
        author: "Marcus Lee",
        role: "VP Engineering",
        impact: "Scalable to 50M transactions"
      },
      metrics: [
        { label: "API Performance", value: "99.99%", icon: Globe },
        { label: "Cost Reduction", value: "-35%", icon: DollarSign },
        { label: "Team Velocity", value: "2x", icon: Zap }
      ]
    },
    {
      name: "HealthPlus",
      logo: "HP",
      industry: "Healthcare",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      stats: {
        roi: "156%",
        savings: "$3.1M",
        efficiency: "+70%",
        satisfaction: "4.9★"
      },
      testimonial: {
        quote: "HIPAA compliance achieved in record time. Patient portal adoption exceeded all projections.",
        author: "Dr. James Wilson",
        role: "CMIO",
        impact: "100% compliant, 50k+ patients"
      },
      metrics: [
        { label: "Patient Engagement", value: "+65%", icon: Users },
        { label: "Compliance", value: "100%", icon: Shield },
        { label: "Staff Efficiency", value: "+40%", icon: Clock }
      ]
    },
    {
      name: "AutoDirect",
      logo: "AD",
      industry: "Automotive",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
      stats: {
        roi: "234%",
        savings: "$4.2M",
        efficiency: "+55%",
        satisfaction: "4.7★"
      },
      testimonial: {
        quote: "Dealer network transformed. Now 200+ dealerships operate as one unified organization.",
        author: "Roberto Garcia",
        role: "COO",
        impact: "200+ dealers unified"
      },
      metrics: [
        { label: "Dealer Sales", value: "+35%", icon: TrendingUp },
        { label: "Inventory Turns", value: "+50%", icon: BarChart },
        { label: "CSAT", value: "4.7★", icon: Star }
      ]
    },
    {
      name: "TravelWise",
      logo: "TW",
      industry: "Travel & Hospitality",
      color: "from-rose-500 to-red-500",
      bgColor: "bg-rose-50",
      textColor: "text-rose-600",
      stats: {
        roi: "178%",
        savings: "$2.8M",
        efficiency: "+52%",
        satisfaction: "4.8★"
      },
      testimonial: {
        quote: "Guest 360 implementation increased repeat bookings by 45%. Loyalty program engagement skyrocketed.",
        author: "Elena Rodriguez",
        role: "CMO",
        impact: "45% more repeat guests"
      },
      metrics: [
        { label: "Repeat Bookings", value: "+45%", icon: Users },
        { label: "Revenue", value: "+$4.5M", icon: DollarSign },
        { label: "Loyalty Members", value: "+60%", icon: Award }
      ]
    },
    {
      name: "ManufactureCo",
      logo: "MC",
      industry: "Manufacturing",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      stats: {
        roi: "198%",
        savings: "$5.3M",
        efficiency: "+65%",
        satisfaction: "4.8★"
      },
      testimonial: {
        quote: "Predictive maintenance saved us millions in unplanned downtime. OEE improved by 30%.",
        author: "Thomas Mueller",
        role: "Plant Director",
        impact: "30% OEE improvement"
      },
      metrics: [
        { label: "Downtime", value: "-45%", icon: Clock },
        { label: "Production", value: "+25%", icon: TrendingUp },
        { label: "Quality", value: "99.5%", icon: CheckCircle }
      ]
    },
    {
      name: "EduFuture",
      logo: "EF",
      industry: "Education",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-600",
      stats: {
        roi: "145%",
        savings: "$1.2M",
        efficiency: "+48%",
        satisfaction: "4.9★"
      },
      testimonial: {
        quote: "Student success hub increased retention by 25%. At-risk students identified 2x faster.",
        author: "Dr. Patricia White",
        role: "Dean",
        impact: "25% retention boost"
      },
      metrics: [
        { label: "Retention", value: "+25%", icon: Users },
        { label: "Early Alerts", value: "2x faster", icon: Zap },
        { label: "Grad Rate", value: "+18%", icon: Award }
      ]
    },
    {
      name: "RetailGenius",
      logo: "RG",
      industry: "Retail",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600",
      stats: {
        roi: "267%",
        savings: "$6.1M",
        efficiency: "+75%",
        satisfaction: "4.9★"
      },
      testimonial: {
        quote: "Quote-to-cash cycle went from 10 days to 2. Sales team now closes 3x more deals.",
        author: "Jennifer Walsh",
        role: "CRO",
        impact: "3x more deals closed"
      },
      metrics: [
        { label: "Deal Velocity", value: "5x faster", icon: Zap },
        { label: "Win Rate", value: "+35%", icon: Target },
        { label: "Order Accuracy", value: "99.5%", icon: CheckCircle }
      ]
    },
    {
      name: "EnergyCorp",
      logo: "EC",
      industry: "Energy",
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
      stats: {
        roi: "189%",
        savings: "$7.2M",
        efficiency: "+42%",
        satisfaction: "4.7★"
      },
      testimonial: {
        quote: "Field service optimization saved 50,000 technician hours annually. Customer satisfaction at all-time high.",
        author: "Michael Chen",
        role: "Operations Director",
        impact: "50k hours saved"
      },
      metrics: [
        { label: "Field Efficiency", value: "+40%", icon: TrendingUp },
        { label: "Travel Time", value: "-30%", icon: Clock },
        { label: "First-time Fix", value: "92%", icon: CheckCircle }
      ]
    }
  ];

  const floatingStats = [
    { value: "$32M", label: "Total Client Savings", icon: DollarSign },
    { value: "215%", label: "Avg ROI", icon: TrendingUp },
    { value: "50+", label: "Enterprise Clients", icon: Award },
    { value: "99.9%", label: "Success Rate", icon: Shield }
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-24 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -30, null],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-white/20">
              <Award className="w-4 h-4" />
              Enterprise Success Matrix
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Industry Leaders</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Real results from real enterprises. Hover over each card to see the impact.
            </p>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {floatingStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10"
              >
                <Icon className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 3x3 Grid of Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="perspective-1000"
              onMouseEnter={() => setFlippedCard(index)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <motion.div
                animate={{
                  rotateY: flippedCard === index ? 180 : 0,
                }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                className="relative w-full h-80 preserve-3d cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front of Card */}
                <div
                  className="absolute inset-0 backface-hidden"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full hover:shadow-2xl transition-all group">
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${company.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                    
                    {/* Logo Placeholder */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${company.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <span className="text-2xl font-bold text-white">{company.logo}</span>
                    </div>

                    {/* Company Info */}
                    <h3 className="text-xl font-bold text-white mb-1">{company.name}</h3>
                    <p className="text-sm text-gray-400 mb-4">{company.industry}</p>

                    {/* Quick Stats */}
                    <div className="space-y-2 mb-4">
                      {company.metrics.slice(0, 2).map((metric, i) => {
                        const Icon = metric.icon;
                        return (
                          <div key={i} className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <Icon className={`w-4 h-4 ${company.textColor}`} />
                              <span className="text-gray-300">{metric.label}</span>
                            </div>
                            <span className="font-bold text-white">{metric.value}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Flip Hint */}
                    <div className="absolute bottom-4 right-4 text-xs text-gray-500 flex items-center gap-1">
                      <span>Hover to flip</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div
                  className="absolute inset-0 backface-hidden"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className={`bg-gradient-to-br ${company.color} rounded-2xl p-6 h-full shadow-xl`}>
                    {/* Testimonial */}
                    <div className="h-full flex flex-col">
                      <Star className="w-6 h-6 text-yellow-300 mb-3" />
                      
                      <p className="text-white text-sm mb-4 italic">
                        "{company.testimonial.quote}"
                      </p>

                      <div className="mt-auto">
                        <div className="border-t border-white/20 pt-3 mb-3">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs text-white/80">ROI</span>
                            <span className="text-lg font-bold text-white">{company.stats.roi}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-white/80">Savings</span>
                            <span className="text-lg font-bold text-white">{company.stats.savings}</span>
                          </div>
                        </div>

                        <div>
                          <p className="font-bold text-white text-sm">{company.testimonial.author}</p>
                          <p className="text-xs text-white/80">{company.testimonial.role}</p>
                        </div>

                        <div className="mt-2 bg-white/20 rounded-lg p-2 text-center">
                          <span className="text-xs font-semibold text-white">
                            {company.testimonial.impact}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
            <Globe className="w-5 h-5 text-blue-400" />
            <p className="text-gray-300">
              Join these 50+ enterprises that have transformed with Jeet.{" "}
              <a href="/case-studies" className="text-blue-400 hover:text-blue-300 font-semibold underline decoration-dotted">
                View all success stories →
              </a>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Add CSS for 3D flip */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default EnterpriseSuccessMatrix;