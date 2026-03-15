import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { 
  UserPlus, FileText, CheckCircle, Clock,
  Rocket, Sparkles, Shield, TrendingUp,
  ArrowRight, Star, Users, Zap,
  Mail, Phone, Camera, CreditCard,
  Download, Upload, ThumbsUp, Award,
  Link
} from "lucide-react";

const DigitalOnboardingSection = () => {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const onboardingSteps = [
    {
      phase: "Discovery",
      title: "Intake & Verification",
      description: "Customers complete digital identity verification with 98% pass rate",
      icon: Camera,
      color: "from-blue-500 to-cyan-500",
      timeSaved: "15 mins",
      satisfaction: "4.8/5",
      details: [
        "Biometric identity verification",
        "Document upload & validation",
        "Real-time eligibility checks",
        "Fraud detection screening"
      ],
      metrics: {
        time: "-15 min",
        completion: "98%",
        satisfaction: "4.8★"
      }
    },
    {
      phase: "Processing",
      title: "Automated Underwriting",
      description: "AI-powered decisions in seconds, not days",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      timeSaved: "2 days",
      satisfaction: "4.9/5",
      details: [
        "AI-driven credit decisions",
        "Risk assessment automation",
        "Compliance checks",
        "Instant approvals"
      ],
      metrics: {
        time: "-2 days",
        completion: "94%",
        satisfaction: "4.9★"
      }
    },
    {
      phase: "Agreement",
      title: "E-Sign & Consent",
      description: "Paperless agreements with digital signature capture",
      icon: FileText,
      color: "from-emerald-500 to-teal-500",
      timeSaved: "3 days",
      satisfaction: "4.7/5",
      details: [
        "Digital contract generation",
        "E-signature integration",
        "Consent management",
        "Audit trail capture"
      ],
      metrics: {
        time: "-3 days",
        completion: "96%",
        satisfaction: "4.7★"
      }
    },
    {
      phase: "Welcome",
      title: "Onboarding Complete",
      description: "Personalized welcome and next-step guidance",
      icon: Rocket,
      color: "from-amber-500 to-orange-500",
      timeSaved: "1 day",
      satisfaction: "4.9/5",
      details: [
        "Personalized welcome kit",
        "Product recommendations",
        "Tutorial videos",
        "Success manager assigned"
      ],
      metrics: {
        time: "-1 day",
        completion: "99%",
        satisfaction: "4.9★"
      }
    }
  ];

  const metrics = [
    {
      label: "Onboarding Time",
      before: "7-10 days",
      after: "< 24 hours",
      improvement: "90% faster",
      icon: Clock,
      color: "from-green-500 to-emerald-500"
    },
    {
      label: "Completion Rate",
      before: "65%",
      after: "94%",
      improvement: "+29%",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500"
    },
    {
      label: "Customer Satisfaction",
      before: "3.2/5",
      after: "4.8/5",
      improvement: "+50%",
      icon: Star,
      color: "from-purple-500 to-pink-500"
    },
    {
      label: "Operational Cost",
      before: "$45/onboarding",
      after: "$8/onboarding",
      improvement: "82% reduction",
      icon: Shield,
      color: "from-amber-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "Instant Onboarding",
      description: "From days to minutes - customers onboarded in under 24 hours",
      stat: "90% faster"
    },
    {
      icon: Shield,
      title: "Fraud Prevention",
      description: "AI-powered identity verification catches fraud before it happens",
      stat: "99.5% accurate"
    },
    {
      icon: Users,
      title: "Higher Conversion",
      description: "Frictionless experience means fewer drop-offs",
      stat: "94% completion"
    },
    {
      icon: TrendingUp,
      title: "Cost Efficiency",
      description: "Dramatically reduce manual processing costs",
      stat: "82% savings"
    }
  ];

  const floatingElements = [
    { icon: Mail, delay: 0, x: 10, y: -20 },
    { icon: Camera, delay: 1, x: -15, y: 30 },
    { icon: CreditCard, delay: 2, x: 20, y: 10 },
    { icon: CheckCircle, delay: 3, x: -10, y: -25 },
    { icon: ThumbsUp, delay: 4, x: 5, y: 15 }
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-24 overflow-hidden" ref={containerRef}>
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="path" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10 80 Q 95 10, 180 80" stroke="#6366F1" strokeWidth="2" fill="none" strokeDasharray="4 4" />
              <circle cx="10" cy="80" r="4" fill="#6366F1" />
              <circle cx="180" cy="80" r="4" fill="#6366F1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#path)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: `${20 + index * 15}%`,
                top: `${30 + index * 10}%`,
              }}
              animate={{
                y: [0, item.y, 0],
                x: [0, item.x, 0],
              }}
              transition={{
                duration: 8,
                delay: item.delay,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <div className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-gray-200">
                <Icon className="w-5 h-5 text-purple-600" />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Rocket className="w-4 h-4" />
              Digital Onboarding Transformation
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              From <span className="text-red-500 line-through decoration-4">Days to Minutes</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Frictionless Onboarding
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              I transform complex, manual onboarding into delightful digital experiences that convert faster and cost less.
            </p>
          </motion.div>
        </div>

        {/* Metrics Dashboard */}
        <motion.div 
          style={{ scale, opacity }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-4 shadow-lg border border-gray-100"
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r ${metric.color}`} />
                  <span className={`text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r ${metric.color} text-white`}>
                    {metric.improvement}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">{metric.label}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400 line-through">{metric.before}</span>
                  <ArrowRight className="w-3 h-3 text-gray-300" />
                  <span className="text-lg font-bold text-gray-900">{metric.after}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Interactive Onboarding Flow */}
        <div className="relative mb-20">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform -translate-y-1/2 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {onboardingSteps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative"
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-purple-200 flex items-center justify-center z-20">
                    <span className="text-sm font-bold text-purple-600">{index + 1}</span>
                  </div>

                  {/* Main Card */}
                  <motion.div
                    animate={{
                      scale: activeStep === index ? 1.05 : 1,
                      y: activeStep === index ? -10 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`relative bg-gradient-to-br ${
                      activeStep === index ? 'from-white to-gray-50 shadow-2xl' : 'bg-white shadow-lg'
                    } rounded-2xl p-6 border-2 ${
                      activeStep === index ? 'border-purple-300' : 'border-transparent'
                    } transition-all duration-300 cursor-pointer z-10`}
                  >
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Phase */}
                    <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
                      {step.phase}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 mt-1">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4">
                      {step.description}
                    </p>

                    {/* Metrics Preview */}
                    <div className="flex items-center justify-between text-xs border-t border-gray-100 pt-3">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-green-500" />
                        <span className="text-gray-700">{step.metrics.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-blue-500" />
                        <span className="text-gray-700">{step.metrics.completion}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500" />
                        <span className="text-gray-700">{step.metrics.satisfaction}</span>
                      </div>
                    </div>

                    {/* Expanded Details (shown on hover) */}
                    {activeStep === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-gray-200"
                      >
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="text-xs text-gray-600 flex items-start gap-2"
                            >
                              <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                              {detail}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Connector Dot */}
                  {index < onboardingSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 bg-purple-600 rounded-full transform translate-x-1/2 -translate-y-1/2 z-20 border-4 border-white"></div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-sm font-bold text-purple-600">{benefit.stat}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Before/After Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">
                See the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Transformation</span>
              </h3>
              <p className="text-gray-300 mb-6">
                Traditional onboarding vs. digital transformation - the difference is dramatic.
              </p>
              
              <div className="space-y-4">
                {[
                  { label: "Time to onboard", old: "7-10 days", new: "< 24 hours" },
                  { label: "Manual touchpoints", old: "15+", new: "2" },
                  { label: "Drop-off rate", old: "35%", new: "6%" },
                  { label: "Cost per customer", old: "$45", new: "$8" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <span className="text-sm text-gray-300">{item.label}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-red-300 line-through">{item.old}</span>
                      <ArrowRight className="w-3 h-3 text-gray-500" />
                      <span className="text-sm font-bold text-green-400">{item.new}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Representation */}
            <div className="relative h-64">
              {/* Before Circle */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 w-32 h-32 bg-red-500/20 rounded-full border-4 border-red-500/30 flex items-center justify-center"
              >
                <span className="text-2xl font-bold text-red-400">7d</span>
              </motion.div>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute left-32 top-1/2 transform -translate-y-1/2"
              >
                <ArrowRight className="w-8 h-8 text-purple-400" />
              </motion.div>

              {/* After Circle */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 w-32 h-32 bg-green-500/20 rounded-full border-4 border-green-500/30 flex items-center justify-center"
              >
                <span className="text-2xl font-bold text-green-400">24h</span>
              </motion.div>

              {/* Floating Particles */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute top-0 right-20 w-4 h-4 bg-purple-500 rounded-full"
              />
              <motion.div
                animate={{
                  y: [10, -10, 10],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 1,
                }}
                className="absolute bottom-10 left-40 w-3 h-3 bg-pink-500 rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium rounded-full transition-all transform hover:scale-105 shadow-lg shadow-purple-600/25"
          >
            Transform your onboarding
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            See how I've helped companies reduce onboarding time by 90%
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalOnboardingSection;