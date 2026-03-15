import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { 
  Clock, ArrowLeft, Mail, Bell, Calendar,
  Sparkles, Rocket, Loader, Hourglass,
  Send, CheckCircle, X, MessageSquare
} from "lucide-react";

const ComingSoon = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pageName = queryParams.get('page') || 'This page';
  
  const [email, setEmail] = useState("");
  const [notifySubmitted, setNotifySubmitted] = useState(false);
  const [notifySubmitting, setNotifySubmitting] = useState(false);
  const [estimatedDate, setEstimatedDate] = useState("");

  // Generate a random estimated launch date within next 30-60 days
  useEffect(() => {
    const today = new Date();
    const randomDays = Math.floor(Math.random() * 30) + 30; // 30-60 days
    const launchDate = new Date(today.setDate(today.getDate() + randomDays));
    
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    setEstimatedDate(launchDate.toLocaleDateString('en-US', options));
  }, []);

  const handleNotifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNotifySubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setNotifySubmitted(true);
      setNotifySubmitting(false);
      setEmail("");
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setNotifySubmitted(false);
      }, 5000);
    }, 1000);
  };

  // Determine icon and color based on page name
  const getPageTheme = () => {
    const page = pageName.toLowerCase();
    
    if (page.includes('training') || page.includes('course')) {
      return {
        icon: <Sparkles className="w-16 h-16 text-purple-400" />,
        gradient: "from-purple-500 to-pink-500",
        bgPattern: "bg-purple-50",
        title: "Training Program Coming Soon",
        message: "We're crafting an exceptional learning experience. This training program will be available shortly."
      };
    } else if (page.includes('resource') || page.includes('guide')) {
      return {
        icon: <Rocket className="w-16 h-16 text-blue-400" />,
        gradient: "from-blue-500 to-cyan-500",
        bgPattern: "bg-blue-50",
        title: "Resource Coming Soon",
        message: "We're putting the final touches on this valuable resource. It will be available for download soon."
      };
    } else if (page.includes('case') || page.includes('study')) {
      return {
        icon: <MessageSquare className="w-16 h-16 text-emerald-400" />,
        gradient: "from-emerald-500 to-teal-500",
        bgPattern: "bg-emerald-50",
        title: "Case Study Coming Soon",
        message: "We're documenting a fascinating success story. This case study will be published shortly."
      };
    } else {
      return {
        icon: <Hourglass className="w-16 h-16 text-amber-400" />,
        gradient: "from-amber-500 to-orange-500",
        bgPattern: "bg-amber-50",
        title: "Coming Soon",
        message: "We're working hard to bring you something amazing. Check back soon!"
      };
    }
  };

  const theme = getPageTheme();

  return (
    <Layout>
      {/* Hero Section with Animated Background */}
      <section className={`relative bg-gradient-to-br ${theme.gradient} text-white overflow-hidden min-h-[60vh] flex items-center`}>
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
              }}
              animate={{
                y: [null, "-30px", null],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="coming-soon" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect x="10" y="10" width="20" height="20" stroke="white" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#coming-soon)" />
          </svg>
        </div>

        <div className="container-wide relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex justify-center mb-6"
            >
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                {theme.icon}
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              {theme.title}
            </h1>
            
            <p className="text-xl text-white/90 mb-4 max-w-2xl mx-auto">
              {theme.message}
            </p>

            <div className="flex items-center justify-center gap-2 text-white/80">
              <Calendar className="w-4 h-4" />
              <span>Estimated launch: <span className="font-semibold text-white">{estimatedDate}</span></span>
            </div>

            <Link
              to="/"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full transition-all border border-white/20 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Notify Me Section */}
      <section className="bg-white py-16">
        <div className="container-wide max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Get Notified When {pageName} Launches
            </h2>
            <p className="text-gray-600 mb-8">
              Be the first to know when this page goes live. No spam, just a one-time notification.
            </p>

            {!notifySubmitted ? (
              <form onSubmit={handleNotifySubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  disabled={notifySubmitting}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 whitespace-nowrap"
                >
                  {notifySubmitting ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Bell className="w-4 h-4" />
                      Notify Me
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 rounded-xl p-6 border border-green-200"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-gray-900 mb-1">You're on the list!</h3>
                    <p className="text-sm text-gray-600">
                      We'll send you a one-time email when {pageName} launches. No spam, promise!
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            What to Expect
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "High-Quality Content",
                description: "Expertly crafted content based on 15+ years of enterprise experience"
              },
              {
                icon: Sparkles,
                title: "Practical Examples",
                description: "Real-world scenarios and actionable insights you can use immediately"
              },
              {
                icon: Clock,
                title: "Regular Updates",
                description: "Content will be regularly updated to reflect the latest Salesforce features"
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* In the Meantime Section */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            In the Meantime...
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              to="/resources"
              className="block p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Rocket className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900">Free Resources</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Download comprehensive guides, checklists, and templates while you wait.
              </p>
              <span className="text-sm text-blue-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Browse Resources <ArrowLeft className="w-3 h-3 rotate-180" />
              </span>
            </Link>

            <Link
              to="/training"
              className="block p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900">Training Programs</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Join live cohorts or self-paced training programs available now.
              </p>
              <span className="text-sm text-purple-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                View Programs <ArrowLeft className="w-3 h-3 rotate-180" />
              </span>
            </Link>

            <Link
              to="/contact"
              className="block p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900">Contact Me</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Have questions or need immediate assistance? I'm here to help.
              </p>
              <span className="text-sm text-green-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Get in Touch <ArrowLeft className="w-3 h-3 rotate-180" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Why is this page coming soon?",
                a: "We're taking extra time to ensure this page meets our high standards for quality and value. Good things take time!"
              },
              {
                q: "Will I get notified when it launches?",
                a: "Yes! Sign up with your email above and we'll send you a one-time notification when this page goes live."
              },
              {
                q: "Can I access similar content now?",
                a: "Absolutely! Check out our free resources and training programs for immediate access to valuable content."
              },
              {
                q: "How accurate is the estimated launch date?",
                a: "The estimated date is our best guess based on current progress. We'll notify you immediately if it changes."
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container-wide text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Need Something Right Now?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Browse our available resources and training programs for immediate access to expert content.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 font-medium rounded-full transition-all"
            >
              <Rocket className="w-4 h-4" />
              Explore Resources
            </Link>
            <Link
              to="/training"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full font-medium transition-all border border-white/20"
            >
              <Sparkles className="w-4 h-4" />
              View Training Programs
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ComingSoon;