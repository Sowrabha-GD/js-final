import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { LucideIcon } from "lucide-react";
import { 
  Bot, Sparkles, FileText, Download,
  CheckCircle, ArrowRight, Mail, User,
  Building2, Phone, Shield, Lock
} from "lucide-react";

const AgentforceGuidePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    phone: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // In production, send to your CRM/email service
      console.log("Guide download requested:", formData);
      
      // Trigger PDF download
      const link = document.createElement('a');
      link.href = '/guides/agentforce-guide.pdf';
      link.download = 'agentforce-guide.pdf';
      link.click();
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container-wide py-16 md:py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                <FileText className="w-4 h-4" />
                Free Resource
              </span>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                The Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-pink-300">Agentforce Guide</span>
              </h1>
              
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Everything you need to know about implementing Agentic AI in your organization. 50+ pages of expert insights, architecture patterns, and real-world use cases.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Guide Preview */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
                What's Inside the Guide
              </h2>
              
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "Agentic AI Fundamentals",
                    description: "Understand the core concepts - agents, reasoning, topics, and actions"
                  },
                  {
                    title: "Architecture Patterns",
                    description: "Multi-agent systems, orchestration layers, and trust boundaries"
                  },
                  {
                    title: "Industry Use Cases",
                    description: "20+ real-world applications across sales, service, marketing, and commerce"
                  },
                  {
                    title: "Implementation Roadmap",
                    description: "Step-by-step guide from pilot to enterprise-wide deployment"
                  },
                  {
                    title: "ROI Calculator",
                    description: "Build your business case with proven metrics and templates"
                  },
                  {
                    title: "Governance Framework",
                    description: "Security, compliance, and human-in-the-loop patterns"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                <h3 className="font-bold text-gray-900 mb-3">About the Author</h3>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xl">
                    JS
                  </div>
                  <div>
                    <p className="text-sm text-gray-700">
                      <span className="font-bold">Jeet Singh</span> is a Salesforce Certified Technical Architect with 15+ years of experience helping enterprises implement AI solutions. He has led Agentforce deployments for Fortune 500 companies across financial services, healthcare, and retail.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 sticky top-24">
                {!isSubmitted ? (
                  <>
                    <div className="text-center mb-6">
                      <div className="inline-flex p-3 bg-purple-100 rounded-full mb-4">
                        <Download className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Download Free Guide</h3>
                      <p className="text-sm text-gray-600">Get instant access to the complete Agentforce guide</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Work Email *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Company *
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="Acme Inc."
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Job Role
                        </label>
                        <select
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="">Select your role</option>
                          <option value="cto">CTO/CIO</option>
                          <option value="architect">Enterprise Architect</option>
                          <option value="vp">VP/Director</option>
                          <option value="consultant">Consultant</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="+1 234 567 8900"
                          />
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium rounded-xl transition-all transform hover:scale-[1.02] disabled:opacity-70 flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              Processing...
                            </>
                          ) : (
                            <>
                              <Download className="w-4 h-4" />
                              Download Guide Now
                            </>
                          )}
                        </button>
                      </div>

                      <p className="text-xs text-gray-500 text-center mt-4">
                        We respect your privacy. Unsubscribe at any time.
                      </p>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="inline-flex p-3 bg-green-100 rounded-full mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-4">
                      Your download should start automatically. If not, 
                      <button 
                        onClick={() => {
                          const link = document.createElement('a');
                          link.href = '/guides/agentforce-guide.pdf';
                          link.download = 'agentforce-guide.pdf';
                          link.click();
                        }}
                        className="text-purple-600 hover:text-purple-700 font-medium mx-1"
                      >
                        click here
                      </button>
                    </p>
                    <p className="text-sm text-gray-500">
                      We've also sent a copy to your email.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gray-50 py-12">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { icon: Shield, text: "Enterprise Security" },
              { icon: Lock, text: "Data Privacy" },
              { icon: Sparkles, text: "Expert Insights" },
              { icon: Bot, text: "Practical Examples" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-purple-600" />
                  <span className="text-sm text-gray-600">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AgentforceGuidePage;