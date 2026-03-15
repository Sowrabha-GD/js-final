import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  TrendingUp, DollarSign, Clock, Users, 
  CheckCircle, Zap, Award, BarChart, Rocket,
  ArrowRight, Sparkles, Target
} from "lucide-react";

const ValueRealizationSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const phases = [
    {
      month: "Month 1-3",
      title: "Foundation & Quick Wins",
      description: "Establish baseline and deliver immediate value",
      icon: Rocket,
      color: "from-blue-500 to-cyan-500",
      metrics: [
        { label: "Process Efficiency", value: "+25%", icon: TrendingUp },
        { label: "User Adoption", value: "60%", icon: Users },
        { label: "Quick Wins", value: "5-8", icon: Award },
      ],
      outcomes: [
        "Core sales/service processes automated",
        "User training & enablement completed",
        "First campaign launched",
        "Early wins showcased to stakeholders"
      ],
      roi: "15-20% productivity gain"
    },
    {
      month: "Month 4-6",
      title: "Scaling & Optimization",
      description: "Expand capabilities and optimize processes",
      icon: Target,
      color: "from-purple-500 to-pink-500",
      metrics: [
        { label: "Automation Rate", value: "+40%", icon: Zap },
        { label: "Response Time", value: "-35%", icon: Clock },
        { label: "Data Quality", value: "85%", icon: CheckCircle },
      ],
      outcomes: [
        "Advanced automation implemented",
        "Integration with ERP/CRM completed",
        "Customer portal launched",
        "Analytics dashboards deployed"
      ],
      roi: "30-40% operational efficiency"
    },
    {
      month: "Month 7-9",
      title: "Advanced Capabilities",
      description: "Deploy sophisticated features and AI",
      icon: Sparkles,
      color: "from-emerald-500 to-teal-500",
      metrics: [
        { label: "Forecast Accuracy", value: "+45%", icon: BarChart },
        { label: "Customer Satisfaction", value: "4.8/5", icon: Award },
        { label: "Revenue Growth", value: "+25%", icon: DollarSign },
      ],
      outcomes: [
        "AI-powered recommendations live",
        "Predictive forecasting deployed",
        "Customer 360 complete",
        "Mobile app launched"
      ],
      roi: "25-35% revenue acceleration"
    },
    {
      month: "Month 10-12",
      title: "Enterprise Transformation",
      description: "Full-scale transformation realized",
      icon: Award,
      color: "from-amber-500 to-orange-500",
      metrics: [
        { label: "Time-to-Value", value: "-50%", icon: Clock },
        { label: "Team Productivity", value: "+60%", icon: Users },
        { label: "Total ROI", value: "215%", icon: TrendingUp },
      ],
      outcomes: [
        "Full platform adoption achieved",
        "Self-service capabilities live",
        "Partner ecosystem connected",
        "Innovation culture established"
      ],
      roi: "200%+ total ROI"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24 overflow-hidden" ref={containerRef}>
      <div className="container-wide">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 px-4 py-2 rounded-full">
            Value Realization
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-6 mb-4">
            From Investment to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Tangible Returns</span>
          </h2>
          <p className="text-gray-600 text-lg">
            A proven roadmap to deliver measurable business value at every stage.
          </p>
        </div>

        {/* Timeline Track */}
        <div className="relative mb-20">
          {/* Progress Bar */}
          <motion.div 
            className="absolute top-1/2 left-0 transform -translate-y-1/2 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
            style={{ 
              width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
              scaleY: 1
            }}
          />
          
          {/* Month Markers */}
          <div className="relative flex justify-between mb-8">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center relative z-10"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center mx-auto mb-2 shadow-lg`}>
                  <phase.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-bold text-gray-900">{phase.month}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Phase Cards */}
        <div className="space-y-12">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Left Column - Phase Info */}
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${phase.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-blue-600">{phase.month}</span>
                        <h3 className="text-2xl font-bold text-gray-900">{phase.title}</h3>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">{phase.description}</p>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {phase.metrics.map((metric, i) => {
                        const MetricIcon = metric.icon;
                        return (
                          <div key={i} className="text-center p-3 bg-gray-50 rounded-xl">
                            <MetricIcon className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                            <div className="text-lg font-bold text-gray-900">{metric.value}</div>
                            <div className="text-xs text-gray-500">{metric.label}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Outcomes */}
                    <div className="space-y-2 mb-4">
                      {phase.outcomes.map((outcome, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className={`w-4 h-4 text-transparent bg-clip-text bg-gradient-to-r ${phase.color}`} />
                          {outcome}
                        </div>
                      ))}
                    </div>

                    {/* ROI Badge */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${phase.color} bg-opacity-10 rounded-full`}>
                      <TrendingUp className={`w-4 h-4 text-transparent bg-clip-text bg-gradient-to-r ${phase.color}`} />
                      <span className="text-sm font-bold text-gray-900">{phase.roi}</span>
                    </div>
                  </div>
                </div>

                {/* Right Column - Visual Impact */}
                <div className="flex-1 flex items-center justify-center">
                  <motion.div 
                    style={{ scale, opacity }}
                    className="relative w-64 h-64"
                  >
                    {/* Circular Progress */}
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="128"
                        cy="128"
                        r="120"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="8"
                      />
                      <motion.circle
                        cx="128"
                        cy="128"
                        r="120"
                        fill="none"
                        stroke={`url(#gradient-${index})`}
                        strokeWidth="8"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        style={{ 
                          strokeDasharray: "753.6",
                          strokeDashoffset: "753.6"
                        }}
                      />
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor={phase.color.split(' ')[0].replace('from-', '')} />
                          <stop offset="100%" stopColor={phase.color.split(' ')[1].replace('to-', '')} />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Center Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <div className="text-3xl font-bold text-gray-900">
                        {phase.metrics[2].value}
                      </div>
                      <div className="text-sm text-gray-500">ROI Achieved</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Cumulative Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 text-white"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <Award className="w-6 h-6 text-yellow-400" />
                Proven Results Across Every Engagement
              </h3>
              <p className="text-gray-300">
                Clients achieve 200%+ average ROI within 12 months, with measurable improvements 
                in efficiency, revenue, and customer satisfaction.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">215%</div>
                <div className="text-xs text-gray-400">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">50+</div>
                <div className="text-xs text-gray-400">Enterprise Clients</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Case Study CTA */}
        <div className="text-center mt-12">
          <a 
            href="/case-studies"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all group"
          >
            View client success stories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ValueRealizationSection;