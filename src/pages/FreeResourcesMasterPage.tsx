import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Download, FileText, Award, BookOpen, 
  CheckCircle, ArrowRight, Star, Users,
  Calendar, Video, FileSpreadsheet, FileCode,
  Shield, Database, GitBranch, Code,
  Briefcase, Target, Sparkles, Heart
} from "lucide-react";

const ResourcesPage = () => {
  const resources = [
    {
      id: "cta-study-guide",
      title: "CTA Study Guide",
      description: "Comprehensive 150-page guide covering all 8 architecture domains for the Salesforce CTA review board.",
      format: "PDF",
      pages: 150,
      category: "Certification",
      icon: Award,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      downloads: "2,500+",
      rating: "4.9",
      link:"/CTAStudyGuideFormPage"
    },
    {
      id: "ldv-strategy-guide",
      title: "Large Data Volumes Strategy Guide",
      description: "Best practices for handling 100M+ records in Salesforce. Big Objects, skinny tables, archiving strategies.",
      format: "PDF + Templates",
      pages: 62,
      category: "Technical",
      icon: Database,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      downloads: "1,800+",
      rating: "4.8",
      link:"/LDVStrategyGuideFormPage"
    },
    {
      id: "apex-patterns-guide",
      title: "Apex Design Patterns",
      description: "Complete reference with code examples for Domain, Selector, Service, and Trigger patterns.",
      format: "PDF + Code",
      pages: 98,
      category: "Development",
      icon: Code,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      downloads: "2,100+",
      rating: "4.9",
      link:"/ApexPatternsGuideFormPage"
    },
    {
      id: "integration-patterns-guide",
      title: "Integration Patterns Reference",
      description: "Comparison matrix and implementation guides for real-time, batch, and event-driven integrations.",
      format: "PDF + Diagrams",
      pages: 75,
      category: "Technical",
      icon: GitBranch,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      downloads: "1,500+",
      rating: "4.7",
      link:"/IntegrationPatternsGuideFormPage"
    },
    {
      id: "security-checklist",
      title: "Security Compliance Checklist",
      description: "HIPAA, GDPR, SOC2 readiness assessment. 50-point checklist to evaluate your security posture.",
      format: "Excel + PDF",
      pages: 25,
      category: "Security",
      icon: Shield,
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-50",
      downloads: "2,200+",
      rating: "4.9",
      link:"/SecurityChecklistFormPage"
    },
    {
      id: "architecture-checklist",
      title: "Architecture Assessment Checklist",
      description: "50-point org health evaluation. Assess technical debt, performance, and scalability.",
      format: "Excel",
      pages: 15,
      category: "Architecture",
      icon: CheckCircle,
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      downloads: "1,900+",
      rating: "4.8",
      link:"/ArchitectureChecklistFormPage"
    },
    {
      id: "career-roadmaps",
      title: "Salesforce Career Roadmaps",
      description: "Step-by-step guides for Consultant, Architect, and Developer career paths with timelines.",
      format: "PDF",
      pages: 45,
      category: "Career",
      icon: Users,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      downloads: "3,200+",
      rating: "4.9",
      link:"/CareerRoadmapsFormPage"
    },
    {
      id: "agentforce-guide",
      title: "Agentforce Implementation Guide",
      description: "How to plan and execute Agentforce pilots. Use cases, architecture, and ROI calculations.",
      format: "PDF",
      pages: 60,
      category: "AI",
      icon: Sparkles,
      color: "from-fuchsia-500 to-pink-500",
      bgColor: "bg-fuchsia-50",
      downloads: "1,200+",
      rating: "4.9",
      link:"/AgentforceGuideFormPage"
    },
    {
      id: "interview-prep-kit",
      title: "Architect Interview Preparation Kit",
      description: "Common questions and answers for Solution Architect and Technical Architect roles.",
      format: "PDF",
      pages: 80,
      category: "Career",
      icon: Star,
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50",
      downloads: "2,800+",
      rating: "4.8",
      link:"/InterviewPrepKitFormPage"
    }
  ];

  const categories = [...new Set(resources.map(r => r.category))];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="resources" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <rect x="10" y="10" width="40" height="40" stroke="white" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#resources)" />
          </svg>
        </div>

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Download className="w-4 h-4" />
              Free Resources
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Accelerate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Salesforce Journey</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Download comprehensive guides, checklists, and templates created from 15+ years of enterprise experience.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10">
            {[
              { value: "15,000+", label: "Downloads" },
              { value: "4.8★", label: "Avg Rating" },
              { value: "50+", label: "Enterprise Clients" },
              { value: "9", label: "Free Resources" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="bg-white py-8 border-b border-gray-200 sticky top-16 z-30">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-gray-900 text-white text-sm rounded-full hover:bg-gray-800 transition-colors">
              All Resources
            </button>
            {categories.map((category, i) => (
              <button key={i} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors">
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
  to={resource.link || `/resources/${resource.id}`}
  className="block group h-full"
>
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium text-gray-700">{resource.rating}</span>
                        </div>
                      </div>

                      {/* Category & Format */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${resource.bgColor} text-gray-700`}>
                          {resource.category}
                        </span>
                        <span className="text-xs text-gray-500 px-2 py-1">
                          {resource.format} • {resource.pages} pages
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {resource.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {resource.description}
                      </p>

                      {/* Downloads & CTA */}
                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-xs text-gray-500">{resource.downloads} downloads</span>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 group-hover:gap-2 transition-all">
                          Get Resource
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Professionals Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "The CTA Study Guide was invaluable for my review board preparation. The architecture domains are explained perfectly.",
                author: "Michael Chen",
                role: "CTA Candidate",
                rating: 5
              },
              {
                quote: "The Apex Design Patterns guide transformed how our team writes code. We reference it constantly.",
                author: "Sarah Johnson",
                role: "Lead Developer",
                rating: 5
              },
              {
                quote: "Security checklist saved us from 3 major compliance issues. A must-have for any enterprise org.",
                author: "David Kumar",
                role: "Security Architect",
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container-wide text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Get New Resources Delivered
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to my newsletter and get notified when I release new guides, checklists, and templates.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 font-medium rounded-xl transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default ResourcesPage;