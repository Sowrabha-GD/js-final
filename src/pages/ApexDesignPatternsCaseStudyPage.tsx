import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Code, Calendar, ArrowLeft, ArrowRight,
  CheckCircle, AlertTriangle, TrendingUp, Clock,
  Layers, GitBranch, Box, FileText,
  Shield, Zap, Cpu, Braces,
  Users, Award, Target, Terminal
} from "lucide-react";

const ApexDesignPatternsCaseStudy = () => {
  const study = {
    title: "Refactoring 50,000 Lines of Legacy Apex Code",
    client: "National Insurance Provider",
    industry: "Insurance",
    category: "Apex Design Patterns",
    year: "2023",
    duration: "8 months",
    role: "Lead Technical Architect",
    team: "8 internal developers, 2 QA engineers",
    
    executiveSummary: "A national insurance provider had accumulated over 50,000 lines of Apex code over 8 years with no architectural oversight. Triggers exceeded 2,000 lines, test coverage was below 30%, and even minor changes required weeks of regression testing. The codebase had become unmaintainable.",
    
    technicalSummary: `**Codebase at a glance:**
    • 50,000+ lines of Apex code
    • 15 objects with triggers (avg 1,500 lines each)
    • 30% test coverage
    • 6-month average deployment cycle
    • 200+ classes with no clear structure
    • 85% of business logic in triggers
    • 500+ duplicate utility methods`,
    
    challenge: `The insurance provider faced a development crisis:

**Maintainability Nightmare**:
- 2,000+ line triggers impossible to debug
- Business logic scattered across 200+ classes
- No separation of concerns
- Duplicate code everywhere
- 6-month deployment cycles

**Testing Disaster**:
- 30% test coverage (well below 75% requirement)
- Tests took 45 minutes to run
- Tests frequently failed due to interdependencies
- No unit tests, only integration tests
- Deployments blocked by coverage requirements

**Developer Productivity**:
- New features took 3-6 months to deliver
- Developer turnover high due to frustration
- Code reviews impossible to complete
- Onboarding new developers took 6 months
- Technical debt growing exponentially`,
    
    approach: [
      {
        phase: "Code Audit",
        description: "Analyzed entire codebase, identified patterns, anti-patterns, and hotspots.",
        duration: "6 weeks",
        deliverables: ["Technical debt assessment", "Pattern catalog", "Migration strategy"]
      },
      {
        phase: "Architecture Design",
        description: "Designed Domain, Selector, and Service layer architecture.",
        duration: "4 weeks",
        deliverables: ["Layer definitions", "Interface design", "Naming conventions"]
      },
      {
        phase: "Incremental Refactoring",
        description: "Refactored one object at a time, maintaining functionality throughout.",
        duration: "5 months",
        deliverables: ["15 objects refactored", "Tests added", "Documentation"]
      },
      {
        phase: "Governance & Training",
        description: "Established patterns, trained developers, and created reference implementations.",
        duration: "4 weeks",
        deliverables: ["Developer guide", "Pattern library", "Review checklist"]
      }
    ],
    
    solution: `I implemented a clean architecture using proven design patterns:

**Domain Layer Pattern**:
- Created Domain classes for each major object
- Encapsulated all business logic in domain classes
- Reduced triggers to < 10 lines each
- Enabled unit testing of business logic

**Selector Layer Pattern**:
- Centralized all SOQL queries in Selector classes
- Implemented consistent filtering and sorting
- Added query optimization and caching
- Made queries mockable for testing

**Service Layer Pattern**:
- Created Service classes for complex operations
- Orchestrated Domain and Selector interactions
- Managed transactions and error handling
- Provided clear API for other modules

**Trigger Handler Framework**:
- Single handler per object with clear phases
- Recursion prevention built-in
- Ordered execution of logic
- Consistent error handling`,
    
    codeExamples: [
      {
        title: "Before: 2,000+ Line Trigger",
        code: `trigger AccountTrigger on Account (before insert, before update, after insert, after update) {
    // 2,000+ lines of spaghetti code
    // Business logic, SOQL, DML all mixed together
    // Impossible to test or maintain
}`
      },
      {
        title: "After: Clean Domain Pattern",
        code: `// Trigger - 5 lines
trigger AccountTrigger on Account (before insert, before update, after insert, after update) {
    new AccountsDomain(Trigger.new).handle();
}

// Domain Class
public class AccountsDomain {
    List<Account> records;
    
    public AccountsDomain(List<Account> records) {
        this.records = records;
    }
    
    public void handle() {
        if(Trigger.isBefore && Trigger.isInsert) {
            this.applyDefaults();
        }
        if(Trigger.isBefore && (Trigger.isInsert || Trigger.isUpdate)) {
            this.validate();
        }
        if(Trigger.isAfter && Trigger.isUpdate) {
            this.updateRelated();
        }
    }
    
    private void applyDefaults() { /* logic */ }
    private void validate() { /* logic */ }
    private void updateRelated() { /* logic */ }
}`
      }
    ],
    
    technologies: [
      "Apex Design Patterns",
      "Domain Layer",
      "Selector Layer",
      "Service Layer",
      "Trigger Framework",
      "Test Factory Pattern"
    ],
    
    results: [
      { metric: "Test Coverage", before: "30%", after: "92%", improvement: "+62%", icon: Shield },
      { metric: "Deployment Time", before: "6 months", after: "2 weeks", improvement: "92% faster", icon: Clock },
      { metric: "Trigger Size", before: "2,000 lines", after: "< 10 lines", improvement: "99% reduction", icon: Code },
      { metric: "Dev Productivity", before: "Baseline", after: "+300%", improvement: "3x faster", icon: TrendingUp },
      { metric: "Production Bugs", before: "25/year", after: "3/year", improvement: "-88%", icon: CheckCircle }
    ],
    
    roi: {
      savings: "$1.2M annually",
      payback: "4 months",
      benefits: [
        "Reduced development costs: $800K/year",
        "Faster time-to-market: $300K value",
        "Lower support costs: $100K/year",
        "Reduced training time: $50K/year"
      ]
    },
    
    testimonial: {
      quote: "Jeet didn't just refactor our code—he transformed how we develop software. Our developers now understand clean architecture, write testable code, and actually enjoy working on the platform. The patterns he established will serve us for years to come.",
      author: "VP of Engineering",
      role: "National Insurance Provider",
      image: "VP"
    },
    
    relatedStudies: [
      { id: "large-data-volumes", title: "Taming 500M+ Records for Global Bank", category: "Large Data Volumes" },
      { id: "integration-architecture", title: "Real-Time Integration for Manufacturing", category: "Integration" }
    ]
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-800 via-green-700 to-teal-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 400">
            <defs>
              <pattern id="code-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <text x="5" y="20" fontSize="12" fill="white">{'<>'}</text>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#code-pattern)" />
          </svg>
        </div>

        <div className="container-wide py-16 relative z-10">
          <Link to="/ApexDesignPatternsPage" className="inline-flex items-center gap-2 text-emerald-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back 
          </Link>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-emerald-500/20 text-emerald-200 px-3 py-1 rounded-full text-sm border border-emerald-500/30">
                  {study.category}
                </span>
                <span className="text-emerald-200 text-sm">{study.year}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{study.title}</h1>
              <p className="text-xl text-emerald-100 mb-6">{study.client}</p>
              <div className="flex flex-wrap gap-4 text-emerald-200">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {study.duration}</span>
                <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {study.team}</span>
                <span className="flex items-center gap-1"><Award className="w-4 h-4" /> {study.role}</span>
              </div>
            </div>
            
            {/* Key Stats Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-3">Key Results</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-emerald-200">Test Coverage</span>
                  <span className="text-sm font-bold text-green-300">92%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-emerald-200">Deployment Time</span>
                  <span className="text-sm font-bold text-green-300">2 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-emerald-200">Dev Productivity</span>
                  <span className="text-sm font-bold text-green-300">+300%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-emerald-200">Production Bugs</span>
                  <span className="text-sm font-bold text-green-300">-88%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{study.executiveSummary}</p>
        </div>
      </section>

      {/* Technical Summary */}
      <section className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="container-wide max-w-4xl">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Codebase Statistics</h2>
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto text-sm font-mono whitespace-pre-wrap">
            {study.technicalSummary}
          </pre>
        </div>
      </section>

      {/* Challenge */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Challenge</h2>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div className="prose prose-lg">
                <p className="text-gray-800 whitespace-pre-line">{study.challenge}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Code Transformation</h2>
          <div className="space-y-6">
            {study.codeExamples.map((example, index) => (
              <div key={index} className="bg-gray-900 rounded-xl overflow-hidden">
                <div className="bg-gray-800 px-4 py-2 text-sm text-gray-300 font-mono">
                  {example.title}
                </div>
                <pre className="p-4 text-sm text-green-400 font-mono overflow-x-auto">
                  {example.code}
                </pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Solution: Clean Architecture</h2>
          <div className="bg-emerald-50 rounded-xl p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-800 whitespace-pre-line">{study.solution}</p>
            </div>
            
            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 mb-3">Patterns Implemented</h3>
              <div className="flex flex-wrap gap-2">
                {study.technologies.map((tech, i) => (
                  <span key={i} className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Results</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {study.results.map((result, i) => {
              const Icon = result.icon;
              return (
                <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-5 h-5 text-emerald-600" />
                    <h4 className="font-medium text-gray-900">{result.metric}</h4>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500 line-through">{result.before}</span>
                    <ArrowRight className="w-3 h-3 text-gray-400" />
                    <span className="text-lg font-bold text-green-600">{result.after}</span>
                  </div>
                  <div className="text-xs text-green-600 font-semibold">{result.improvement}</div>
                </div>
              );
            })}
          </div>

          {/* ROI Card */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">ROI Analysis</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">{study.roi.savings}</div>
                <div className="text-sm text-gray-600">Annual savings achieved</div>
                <div className="text-sm text-gray-500 mt-1">Payback period: {study.roi.payback}</div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Key Benefits</h4>
                <ul className="space-y-1">
                  {study.roi.benefits.map((benefit, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide max-w-4xl">
          <div className="bg-gray-50 rounded-2xl p-8 italic border-l-8 border-emerald-500">
            <svg className="w-10 h-10 text-emerald-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl text-gray-800 mb-6">{study.testimonial.quote}</p>
            <div>
              <p className="font-bold text-gray-900">{study.testimonial.author}</p>
              <p className="text-sm text-gray-600">{study.testimonial.role}</p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-800 to-teal-800 text-white py-16">
        <div className="container-wide text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Ready to transform your codebase?
          </h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help you achieve development excellence with clean, maintainable code.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-900 hover:bg-emerald-50 font-medium rounded-full transition-all transform hover:scale-105"
          >
            Schedule a Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ApexDesignPatternsCaseStudy;