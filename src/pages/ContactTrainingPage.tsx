import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  GraduationCap, Mail, User, Building2, Phone,
  Calendar, Send, CheckCircle, Users,
  Clock, BookOpen, Award, HeadphonesIcon
} from "lucide-react";

const ContactTraining = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const courseName = queryParams.get('course') || 'Not specified';
  
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    course: courseName,
    cohortType: "live",
    participants: "1",
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
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY',
          subject: `New Training Inquiry: ${formState.course} from ${formState.name}`,
          from_name: formState.name,
          email: formState.email,
          phone: formState.phone,
          company: formState.company,
          course: formState.course,
          cohort_type: formState.cohortType,
          participants: formState.participants,
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

  const courses = [
    "Salesforce Admin Training",
    "Apex Development Training",
    "LWC Development Training",
    "Salesforce CPQ & Revenue Cloud",
    "Sales Cloud Training",
    "Service Cloud Training",
    "Service Integration Training",
    "Custom Corporate Training"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-800 via-green-700 to-teal-800 text-white py-16">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              Training Enrollment Inquiry
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Get Started with Your Training
            </h1>
            <p className="text-xl text-emerald-100">
              Fill out this form and I'll get back to you within 24 hours with enrollment details and any questions you have.
            </p>
            {courseName !== 'Not specified' && (
              <div className="mt-4 inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <BookOpen className="w-4 h-4" />
                <span>You're interested in: <strong>{courseName}</strong></span>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Enrollment Details</h2>
              
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
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                        placeholder="Jane Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                        placeholder="jane@company.com"
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
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company/Organization
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                        placeholder="Acme Inc."
                      />
                    </div>
                  </div>
                </div>

                {/* Course Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Course Interested In <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="course"
                    value={formState.course}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="">Select a course</option>
                    {courses.map((course, i) => (
                      <option key={i} value={course}>{course}</option>
                    ))}
                  </select>
                </div>

                {/* Cohort Type & Participants Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Cohort Type <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="cohortType"
                          value="live"
                          checked={formState.cohortType === 'live'}
                          onChange={handleChange}
                          className="w-4 h-4 text-emerald-600"
                        />
                        <span className="text-sm text-gray-700">Live Cohort</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="cohortType"
                          value="recorded"
                          checked={formState.cohortType === 'recorded'}
                          onChange={handleChange}
                          className="w-4 h-4 text-emerald-600"
                        />
                        <span className="text-sm text-gray-700">Recorded</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Participants
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <select
                        name="participants"
                        value={formState.participants}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                      >
                        {[1,2,3,4,5,6,7,8,9,10].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                        <option value="11-20">11-20</option>
                        <option value="21-50">21-50</option>
                        <option value="50+">50+ (Corporate)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Questions or Special Requirements
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                    placeholder="Any specific questions about the course? Looking for corporate pricing? Let me know..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      Submit Enrollment Inquiry
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  I'll respond within 24 hours with enrollment details and answers to your questions.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Your Interest!</h2>
              <p className="text-xl text-gray-600 mb-6">
                Your training inquiry has been sent successfully.
              </p>
              <div className="bg-emerald-50 rounded-xl p-6 max-w-md mx-auto mb-8">
                <p className="text-gray-700">
                  <strong>What happens next?</strong>
                </p>
                <ul className="text-left text-gray-600 mt-3 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    I'll review your inquiry within 24 hours
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    You'll receive enrollment details via email
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    I'll answer any questions you have
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
              { icon: Award, text: "500+ students trained" },
              { icon: Users, text: "Corporate training available" },
              { icon: HeadphonesIcon, text: "Lifetime support" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-emerald-600" />
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

export default ContactTraining;