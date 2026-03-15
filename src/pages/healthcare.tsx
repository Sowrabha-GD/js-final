import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Heart, Stethoscope, Pill, Syringe,
  Users, Activity, Calendar, Clock,
  CheckCircle, ArrowRight, Award, Star,
  Sparkles, Shield, FileText, Ambulance,
  Microscope, Brain, Baby, Bone
} from "lucide-react";

const HealthcarePage = () => {
  const verticals = [
    {
      name: "Healthcare Providers",
      icon: Stethoscope,
      description: "Transform patient care with connected clinical and administrative systems.",
      challenges: ["Patient engagement", "Care coordination", "Clinical workflows", "Interoperability"],
      solutions: ["Health Cloud", "Patient 360", "Care plans", "Provider collaboration"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Health Payers",
      icon: Shield,
      description: "Modernize member experiences and streamline claims processing.",
      challenges: ["Member engagement", "Claims automation", "Network management", "Risk adjustment"],
      solutions: ["Payer portals", "Claims management", "Provider networks", "Care management"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Life Sciences",
      icon: Microscope,
      description: "Accelerate research, clinical trials, and commercial operations.",
      challenges: ["Trial recruitment", "Patient safety", "Regulatory compliance", "Commercial launch"],
      solutions: ["Vault CDMS", "Patient engagement", "Medical portals", "Commercial analytics"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      name: "Pharmaceuticals",
      icon: Pill,
      description: "Connect research, manufacturing, and patient support programs.",
      challenges: ["Drug safety", "Patient support", "Sample management", "HCP engagement"],
      solutions: ["Medical portals", "Patient services", "Sample tracking", "Key account management"],
      color: "from-amber-500 to-orange-500"
    },
    {
      name: "MedTech",
      icon: Syringe,
      description: "Connect medical devices, patient monitoring, and field service.",
      challenges: ["Device connectivity", "Patient monitoring", "Field service", "Regulatory reporting"],
      solutions: ["Connected devices", "Remote monitoring", "Field service", "Compliance tracking"],
      color: "from-red-500 to-rose-500"
    },
    {
      name: "Specialty Care",
      icon: Brain,
      description: "Specialized solutions for oncology, cardiology, and rare diseases.",
      challenges: ["Care pathways", "Patient monitoring", "Research integration", "Outcomes tracking"],
      solutions: ["Care management", "Patient portals", "Registry management", "Clinical integration"],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const useCases = [
    {
      title: "Patient 360",
      description: "Unified view across clinical, administrative, and engagement data",
      impact: "30% better care coordination",
      icon: Users
    },
    {
      title: "Care Management",
      description: "AI-powered care plans and proactive interventions",
      impact: "40% reduction in readmissions",
      icon: Activity
    },
    {
      title: "Provider Collaboration",
      description: "Secure messaging and care team coordination",
      impact: "25% faster referrals",
      icon: Stethoscope
    },
    {
      title: "Patient Engagement",
      description: "Personalized portals and automated outreach",
      impact: "50% higher patient satisfaction",
      icon: Heart
    }
  ];

  const solutions = [
    {
      category: "Patient Engagement",
      items: [
        { name: "Patient Portals", description: "Secure access to health records and appointments" },
        { name: "Automated Outreach", description: "Personalized reminders and health tips" },
        { name: "Telehealth Integration", description: "Virtual visits and remote monitoring" },
        { name: "Patient Education", description: "Condition-specific resources and videos" }
      ]
    },
    {
      category: "Clinical Operations",
      items: [
        { name: "Care Coordination", description: "Team-based care plans and task management" },
        { name: "Clinical Workflows", description: "Streamlined documentation and orders" },
        { name: "Population Health", description: "Risk stratification and outreach" },
        { name: "Quality Reporting", description: "Automated quality measure tracking" }
      ]
    },
    {
      category: "Compliance & Security",
      items: [
        { name: "HIPAA Compliance", description: "Enterprise-grade security controls" },
        { name: "Audit Trail", description: "Complete visibility into data access" },
        { name: "Consent Management", description: "Patient preferences and authorizations" },
        { name: "Data Privacy", description: "GDPR and CCPA compliance" }
      ]
    },
    {
      category: "Analytics & Insights",
      items: [
        { name: "Clinical Analytics", description: "Real-time dashboards and KPIs" },
        { name: "Predictive Models", description: "Risk prediction and early intervention" },
        { name: "Operational Intelligence", description: "Resource optimization and scheduling" },
        { name: "Research Integration", description: "Clinical trial matching and recruitment" }
      ]
    }
  ];

  const compliance = [
    { name: "HIPAA", description: "Complete compliance framework" },
    { name: "HITRUST", description: "Certified security controls" },
    { name: "GDPR", description: "European data protection" },
    { name: "SOC 2", description: "Enterprise security audit" },
    { name: "FDA", description: "Regulatory compliance" },
    { name: "EMA", description: "European medicines compliance" }
  ];

  const testimonials = [
    {
      quote: "Jeet's healthcare expertise transformed how we engage with patients. Our satisfaction scores have never been higher, and care coordination is seamless.",
      author: "Dr. Sarah Chen",
      role: "Chief Medical Information Officer",
      company: "Regional Health System",
      image: "SC"
    },
    {
      quote: "The patient portal and care management platform Jeet architected has revolutionized our chronic care programs. Readmissions are down 40%.",
      author: "Michael Rodriguez",
      role: "VP of Digital Health",
      company: "Community Health Network",
      image: "MR"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-900 via-red-800 to-pink-800 text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container-wide py-20 md:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                <Heart className="w-4 h-4" />
                Healthcare Industry
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Transform Patient Care with <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-200 to-pink-200">Connected Healthcare</span>
              </h1>
              
              <p className="text-xl text-rose-100 mb-8">
                Help providers, payers, and life sciences organizations deliver better outcomes through connected, compliant, and compassionate care.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-rose-900 hover:bg-rose-50 rounded-xl font-medium transition-all"
                >
                  Schedule consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/HealthcareCaseStudyPage"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl font-medium transition-all border border-white/20"
                >
                  View case studies
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-rose-400" />
                Health Cloud Expertise
              </h3>
              <div className="space-y-4">
                {[
                  "Patient 360 Implementation",
                  "Care Management Solutions",
                  "HIPAA-Compliant Architecture",
                  "Provider Portals & Collaboration",
                  "Population Health Analytics"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-xs text-rose-200">Healthcare Orgs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">2M+</div>
                  <div className="text-xs text-rose-200">Patient Records</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-xs text-rose-200">HIPAA Compliant</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Verticals Grid */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold tracking-wider text-rose-600 uppercase bg-rose-50 px-4 py-2 rounded-full">
              Healthcare Verticals
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-6 mb-4">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">Healthcare Coverage</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Deep expertise across the entire healthcare ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verticals.map((vertical, index) => {
              const Icon = vertical.icon;
              
              return (
                <motion.div
                  key={vertical.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${vertical.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{vertical.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{vertical.description}</p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-xs font-semibold uppercase text-gray-500 mb-2">Challenges</h4>
                      <div className="flex flex-wrap gap-1">
                        {vertical.challenges.map((c, i) => (
                          <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">{c}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase text-gray-500 mb-2">Solutions</h4>
                      <div className="flex flex-wrap gap-1">
                        {vertical.solutions.map((s, i) => (
                          <span key={i} className="text-xs bg-rose-50 text-rose-600 px-2 py-1 rounded-md">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Transformative <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">Use Cases</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Real solutions delivering measurable improvements in patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{useCase.description}</p>
                  <div className="inline-block bg-rose-50 text-rose-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {useCase.impact}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">Healthcare Solutions</span>
            </h2>
            <p className="text-gray-600 text-lg">
              End-to-end capabilities for the entire healthcare journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">{solution.category}</h3>
                <div className="grid grid-cols-1 gap-4">
                  {solution.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="bg-gradient-to-br from-rose-900 to-pink-900 text-white py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                <Shield className="w-4 h-4" />
                Enterprise-Grade Compliance
              </span>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Security & <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-200 to-pink-200">Regulatory Excellence</span>
              </h2>
              
              <p className="text-lg text-rose-100 mb-8">
                Healthcare demands the highest levels of security and compliance. I bring deep expertise in implementing Salesforce with enterprise-grade controls for HIPAA, GDPR, and more.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {compliance.map((item, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="font-bold text-white mb-1">{item.name}</div>
                    <div className="text-xs text-rose-200">{item.description}</div>
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
              <h3 className="text-xl font-bold mb-6">Compliance Framework</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-rose-500/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-rose-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">HIPAA Security Rule</h4>
                    <p className="text-sm text-rose-200">Administrative, physical, and technical safeguards</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">HIPAA Privacy Rule</h4>
                    <p className="text-sm text-rose-200">Protected health information (PHI) controls</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <Activity className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Audit Trail</h4>
                    <p className="text-sm text-rose-200">Complete visibility into data access and changes</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Consent Management</h4>
                    <p className="text-sm text-rose-200">Patient preferences and authorizations</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Patient Journey */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              The Connected <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">Patient Journey</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Seamless experiences across every touchpoint.
            </p>
          </div>

          <div className="relative">
            {/* Journey Line */}
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  stage: "Awareness",
                  icon: Heart,
                  description: "Health content, risk assessments, provider discovery"
                },
                {
                  stage: "Engagement",
                  icon: Calendar,
                  description: "Appointment scheduling, pre-visit instructions"
                },
                {
                  stage: "Care Delivery",
                  icon: Stethoscope,
                  description: "Clinical workflows, care coordination, telehealth"
                },
                {
                  stage: "Follow-up",
                  icon: Clock,
                  description: "Care plans, medication reminders, outcome tracking"
                }
              ].map((item, index) => {
                const Icon = item.icon;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 z-10"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.stage}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">Healthcare Leaders</span>
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-600 to-pink-600 flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-rose-600">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-rose-900 to-pink-900 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to transform patient care?
            </h2>
            <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you deliver connected, compliant, and compassionate care through Salesforce.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-rose-900 hover:bg-rose-50 font-medium rounded-full transition-all transform hover:scale-105"
              >
                Schedule a consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/HealthcareCaseStudyPage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full font-medium transition-all border border-white/20"
              >
                View healthcare case studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default HealthcarePage;