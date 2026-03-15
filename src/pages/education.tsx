import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  GraduationCap, BookOpen, Users, Award,
  School, Microscope, Laptop, Globe,
  CheckCircle, ArrowRight, Star, Sparkles,
  Calendar, Heart, Target, TrendingUp,
  MessageCircle, FileText, PenTool
} from "lucide-react";

const EducationPage = () => {
  const verticals = [
    {
      name: "Higher Education",
      icon: GraduationCap,
      description: "Transform student recruitment, engagement, and alumni relations.",
      challenges: ["Student recruitment", "Retention", "Alumni engagement", "Donor relations"],
      solutions: ["Recruitment CRM", "Student success", "Alumni portals", "Fundraising"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "K-12 Education",
      icon: School,
      description: "Connect schools, teachers, parents, and students for better outcomes.",
      challenges: ["Parent engagement", "Student progress", "Teacher collaboration", "Administration"],
      solutions: ["Parent portals", "Student profiles", "Teacher tools", "Administration"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Continuing Education",
      icon: BookOpen,
      description: "Manage lifelong learning programs and professional development.",
      challenges: ["Course registration", "Learner engagement", "Certificate management", "Revenue"],
      solutions: ["Learning portals", "Engagement tracking", "Credentialing", "Payment processing"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      name: "Online Learning",
      icon: Laptop,
      description: "Deliver engaging digital learning experiences at scale.",
      challenges: ["Content delivery", "Student engagement", "Progress tracking", "Community"],
      solutions: ["LMS integration", "Virtual classrooms", "Analytics", "Discussion forums"],
      color: "from-amber-500 to-orange-500"
    },
    {
      name: "Research Institutions",
      icon: Microscope,
      description: "Support research collaboration and grant management.",
      challenges: ["Grant tracking", "Research collaboration", "Publication management", "Compliance"],
      solutions: ["Grant management", "Researcher portals", "Publications", "Compliance"],
      color: "from-red-500 to-rose-500"
    },
    {
      name: "Vocational Training",
      icon: Target,
      description: "Connect skills training with career outcomes.",
      challenges: ["Skills tracking", "Employer partnerships", "Job placement", "Certification"],
      solutions: ["Skills passport", "Employer portal", "Placement tracking", "Badges"],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const useCases = [
    {
      title: "Student 360",
      description: "Unified view across recruitment, academics, and engagement",
      impact: "25% higher retention",
      icon: Users
    },
    {
      title: "Personalized Learning",
      description: "AI-powered course recommendations and learning paths",
      impact: "40% faster completion",
      icon: Sparkles
    },
    {
      title: "Alumni Engagement",
      description: "Connected alumni network and lifelong relationships",
      impact: "35% more donations",
      icon: Heart
    },
    {
      title: "Career Success",
      description: "Job placement and employer connections",
      impact: "50% better outcomes",
      icon: TrendingUp
    }
  ];

  const solutions = [
    {
      category: "Student Success",
      items: [
        { name: "Student Profiles", description: "Complete view of academic journey" },
        { name: "Advisor Tools", description: "Proactive intervention and support" },
        { name: "Early Alerts", description: "Identify at-risk students early" },
        { name: "Success Plans", description: "Personalized student success plans" }
      ]
    },
    {
      category: "Recruitment & Admissions",
      items: [
        { name: "Inquiry Management", description: "Track prospects from inquiry to enrollment" },
        { name: "Application Processing", description: "Streamlined admissions workflow" },
        { name: "Event Management", description: "Campus visits and recruitment events" },
        { name: "Communication", description: "Personalized email and SMS campaigns" }
      ]
    },
    {
      category: "Alumni & Development",
      items: [
        { name: "Alumni Directory", description: "Connected alumni network" },
        { name: "Fundraising", description: "Donor management and campaigns" },
        { name: "Events", description: "Homecoming and alumni events" },
        { name: "Mentorship", description: "Alumni-student mentoring" }
      ]
    },
    {
      category: "Learning Experience",
      items: [
        { name: "Course Management", description: "Catalog, registration, and scheduling" },
        { name: "Learning Communities", description: "Collaborative study groups" },
        { name: "Digital Credentials", description: "Badges and certificates" },
        { name: "Mobile Learning", description: "Learn anywhere, anytime" }
      ]
    }
  ];

  const studentJourney = [
    {
      stage: "Awareness",
      icon: Globe,
      description: "Discover programs and institutions"
    },
    {
      stage: "Inquiry",
      icon: MessageCircle,
      description: "Request information and connect"
    },
    {
      stage: "Application",
      icon: PenTool,
      description: "Apply and track progress"
    },
    {
      stage: "Enrollment",
      icon: Calendar,
      description: "Register and orientation"
    },
    {
      stage: "Learning",
      icon: BookOpen,
      description: "Academic journey and support"
    },
    {
      stage: "Alumni",
      icon: Award,
      description: "Lifelong engagement"
    }
  ];

  const testimonials = [
    {
      quote: "Jeet's education expertise transformed how we engage with students. Our retention rates are up 25% and alumni giving has never been stronger.",
      author: "Dr. Patricia Chen",
      role: "Dean of Enrollment",
      company: "University of Excellence",
      image: "PC"
    },
    {
      quote: "The student success platform Jeet architected has revolutionized how we support at-risk students. Early interventions are now proactive, not reactive.",
      author: "Michael Thompson",
      role: "VP of Student Affairs",
      company: "State University",
      image: "MT"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-800 text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container-wide py-20 md:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                <GraduationCap className="w-4 h-4" />
                Education Industry
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Transform the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-blue-200">Student Journey</span>
              </h1>
              
              <p className="text-xl text-indigo-100 mb-8">
                From recruitment to alumni relations - create connected, personalized educational experiences.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-900 hover:bg-indigo-50 rounded-xl font-medium transition-all"
                >
                  Schedule consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/EducationCaseStudyPage"
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
                <Award className="w-5 h-5 text-indigo-400" />
                Education Cloud Expertise
              </h3>
              <div className="space-y-4">
                {[
                  "Student Success Hub",
                  "Recruitment & Admissions",
                  "Alumni Relations & Fundraising",
                  "Learning Communities",
                  "Career Development"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-xs text-indigo-200">Education Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-xs text-indigo-200">Student Records</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">25%</div>
                  <div className="text-xs text-indigo-200">Retention Increase</div>
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
            <span className="text-sm font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 px-4 py-2 rounded-full">
              Education Verticals
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-6 mb-4">
              Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Education Coverage</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Deep expertise across every segment of education.
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
                          <span key={i} className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md">{s}</span>
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

      {/* Student Journey */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              The Connected <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Student Journey</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Seamless experiences at every stage of the student lifecycle.
            </p>
          </div>

          <div className="relative">
            {/* Journey Line */}
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {studentJourney.map((item, index) => {
                const Icon = item.icon;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative bg-white rounded-2xl p-4 shadow-lg border border-gray-100 z-10 text-center"
                  >
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-indigo-600 to-blue-600 rounded-full flex items-center justify-center mb-2">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">{item.stage}</h3>
                    <p className="text-xs text-gray-600">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Transformative <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Use Cases</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Real solutions delivering measurable improvements in student outcomes.
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
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{useCase.description}</p>
                  <div className="inline-block bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {useCase.impact}
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
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Education Solutions</span>
            </h2>
            <p className="text-gray-600 text-lg">
              End-to-end capabilities for modern educational institutions.
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
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">{solution.category}</h3>
                <div className="grid grid-cols-1 gap-4">
                  {solution.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
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

      {/* Student Success */}
      <section className="bg-gradient-to-br from-indigo-900 to-blue-900 text-white py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                <Target className="w-4 h-4" />
                Student Success Hub
              </span>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Proactive Support for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-blue-200">Every Student</span>
              </h2>
              
              <p className="text-lg text-indigo-100 mb-8">
                Identify at-risk students early and provide personalized support that drives retention and success.
              </p>

              <div className="space-y-4">
                {[
                  "360-degree student view with academic, social, and financial data",
                  "Predictive analytics to identify at-risk students",
                  "Automated alerts and task creation for advisors",
                  "Personalized success plans and progress tracking",
                  "Collaboration tools for care teams",
                  "Outcome tracking and reporting"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    <span>{item}</span>
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
              <h3 className="text-xl font-bold mb-6">Student Success Results</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Retention Rate</span>
                    <span className="font-bold text-indigo-300">+25%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Early Identification</span>
                    <span className="font-bold text-indigo-300">2x faster</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Graduation Rate</span>
                    <span className="font-bold text-indigo-300">+18%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Educational Leaders</span>
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
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
              >
                <Star className="w-8 h-8 text-yellow-400 mb-4" />
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-indigo-600">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to transform the student experience?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you create connected, personalized educational journeys.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-900 hover:bg-indigo-50 font-medium rounded-full transition-all transform hover:scale-105"
              >
                Schedule a consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/EducationCaseStudyPage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full font-medium transition-all border border-white/20"
              >
                View education case studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default EducationPage;