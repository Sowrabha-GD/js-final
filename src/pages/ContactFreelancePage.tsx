import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Briefcase, Mail, User, Building2, Phone,
  Calendar, Send, CheckCircle, MapPin,
  Globe, DollarSign, Clock, FileText,
  Users,
  Shield
} from "lucide-react";

const ContactFreelance = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sourceLocation = queryParams.get('location') || 'Not specified';
  
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: sourceLocation,
    projectType: "",
    budget: "",
    timeline: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send to Web3Forms (or your preferred service)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY',
          subject: `New Freelance Inquiry from ${formState.name} - ${formState.location}`,
          from_name: formState.name,
          email: formState.email,
          phone: formState.phone,
          company: formState.company,
          location: formState.location,
          project_type: formState.projectType,
          budget: formState.budget,
          timeline: formState.timeline,
          message: formState.message,
          replyto: formState.email,
        }),
      });
      
      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please email me directly at jeet@jeet-singh.com');
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    "Solution Architecture",
    "Technical Advisory",
    "Implementation Support",
    "Org Assessment",
    "Integration Architecture",
    "Security Review",
    "Mentorship",
    "Other"
  ];

  const budgetRanges = [
    "Under $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
    "Hourly / Retainer"
  ];

  const timelineOptions = [
    "ASAP (within 1-2 weeks)",
    "1-3 months",
    "3-6 months",
    "6-12 months",
    "Not sure yet"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-16">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              Freelance & Contract Inquiry
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Tell Me About Your Project
            </h1>
            <p className="text-xl text-blue-100">
              I'll review your requirements and get back to you within 24 hours with a tailored proposal.
            </p>
            {sourceLocation !== 'Not specified' && (
              <div className="mt-4 inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <MapPin className="w-4 h-4" />
                <span>You're inquiring about: <strong>{sourceLocation}</strong></span>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-white py-16">
        <div className="container-wide max-w-3xl">
          {!isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Details</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                        placeholder="John Smith"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone & Company Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                        placeholder="Acme Inc."
                      />
                    </div>
                  </div>
                </div>

                {/* Location (pre-filled from landing page) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Location <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      name="location"
                      value={formState.location}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 bg-gray-50"
                      placeholder="e.g., London, New York, Remote"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">We'll pre-fill this based on where you clicked from</p>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Type of Engagement <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="projectType"
                    value={formState.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type, i) => (
                      <option key={i} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Budget & Timeline Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Budget Range
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <select
                        name="budget"
                        value={formState.budget}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range, i) => (
                          <option key={i} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Timeline
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <select
                        name="timeline"
                        value={formState.timeline}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select timeline</option>
                        {timelineOptions.map((time, i) => (
                          <option key={i} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tell me about your project <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                    placeholder="What are you trying to achieve? What's the current situation? Any specific requirements?"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      Submit Inquiry
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  I'll respond within 24 hours. Your information is private and never shared.
                </p>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-12 shadow-xl border border-gray-200 text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
              <p className="text-xl text-gray-600 mb-6">
                Your inquiry has been sent successfully.
              </p>
              <div className="bg-blue-50 rounded-xl p-6 max-w-md mx-auto mb-8">
                <p className="text-gray-700">
                  <strong>What happens next?</strong>
                </p>
                <ul className="text-left text-gray-600 mt-3 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    I'll review your project details within 24 hours
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    You'll receive a tailored proposal via email
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    We can schedule a call if needed
                  </li>
                </ul>
              </div>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl transition-all"
              >
                Return to Home
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gray-50 py-12">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { icon: Clock, text: "24-hour response" },
              { icon: FileText, text: "Detailed proposals" },
              { icon: Shield, text: "Confidentiality guaranteed" },
              { icon: Users, text: "50+ enterprise clients" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-blue-600" />
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

export default ContactFreelance;