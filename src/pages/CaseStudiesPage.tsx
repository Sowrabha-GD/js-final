import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  ArrowRight, Building2, Database, Shield, 
  GitBranch, Code, TrendingUp, HeadphonesIcon,
  Calendar, Users, Award, Star, Filter,
  Heart, Car, Plane, Factory, GraduationCap,
  Network, Lock, Layers
} from "lucide-react";

const CaseStudiesPage = () => {
  const caseStudies = [
    // Industry Case Studies
    {
      id: "financial-services",
      title: "Digital Transformation for Regional Investment Bank",
      client: "Regional Investment Bank",
      industry: "Financial Services",
      category: "Banking & Wealth Management",
      challenge: "Client onboarding took 14 days, compliance reporting consumed 20 hours/week",
      impact: "Onboarding time reduced to 24 hours, 35% increase in advisor productivity",
      icon: Building2,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      year: "2024",
      featured: true,
      link: "/FinancialServicesCaseStudyPage"
    },
    {
      id: "healthcare",
      title: "HIPAA-Compliant Patient Portal for Regional Healthcare Network",
      client: "Regional Healthcare Network",
      industry: "Healthcare",
      category: "Patient Engagement & Compliance",
      challenge: "15+ PHI exposure risks, fragmented patient portals across 3 systems",
      impact: "100% HIPAA compliant, 43% increase in patient portal adoption",
      icon: Heart,
      color: "from-rose-500 to-red-500",
      bgColor: "bg-rose-50",
      year: "2024",
      featured: true,
      link: "/HealthcareCaseStudyPage"
    },
    {
      id: "automotive",
      title: "Connected Vehicle Platform for Global Automotive Manufacturer",
      client: "Global Automotive Manufacturer",
      industry: "Automotive",
      category: "Connected Vehicles & Dealer Experience",
      challenge: "2,000+ dealers on 8 different CRM systems, no connected vehicle capabilities",
      impact: "Service revenue increased 45%, 850,000+ connected vehicle users",
      icon: Car,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      year: "2024",
      featured: true,
      link: "/AutomotiveCaseStudyPage"
    },
    {
      id: "travel-hospitality",
      title: "Guest 360 Platform for Luxury Hotel Chain",
      client: "Luxury Hotel Chain",
      industry: "Travel & Hospitality",
      category: "Guest Experience & Loyalty",
      challenge: "Guest data scattered across 8 PMS systems, only 25% loyalty engagement",
      impact: "Repeat bookings increased 26%, guest satisfaction 4.7/5",
      icon: Plane,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      year: "2024",
      featured: true,
      link: "/TravelHospitalityCaseStudyPage"
    },
    {
      id: "manufacturing",
      title: "Industry 4.0 Transformation for Industrial Manufacturer",
      client: "Industrial Manufacturing Conglomerate",
      industry: "Manufacturing",
      category: "Industry 4.0 & Smart Factory",
      challenge: "50+ plants with disconnected systems, 15% unplanned downtime",
      impact: "OEE improved 17%, unplanned downtime reduced 73%",
      icon: Factory,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      year: "2024",
      featured: true,
      link: "/ManufacturingCaseStudyPage"
    },
    {
      id: "education",
      title: "Student Success Hub for Large Public University",
      client: "Large Public University",
      industry: "Education",
      category: "Student Success & Retention",
      challenge: "22% freshman dropout rate, student data across 12 systems",
      impact: "Freshman retention improved 11%, 4-year graduation rate +13%",
      icon: GraduationCap,
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      year: "2024",
      featured: true,
      link: "/EducationCaseStudyPage"
    },

    // Technical Case Studies
    {
      id: "LargeDataVolumesPage",
      title: "Taming 500M+ Records for Global Investment Bank",
      client: "Global Investment Bank",
      industry: "Financial Services",
      category: "Large Data Volumes",
      challenge: "500M+ records causing 3-5 minute query times, 35% batch job failure rate",
      impact: "Query time reduced to 2 seconds, storage costs reduced 57%",
      icon: Database,
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      year: "2024",
      featured: true,
      link: "/LargeDataVolumesCaseStudyPage"
    },
    {
      id: "apex-design-patterns",
      title: "Refactoring 50,000 Lines of Legacy Apex Code",
      client: "National Insurance Provider",
      industry: "Insurance",
      category: "Apex Design Patterns",
      challenge: "30% test coverage, 2,000+ line triggers, 6-month deployment cycles",
      impact: "Test coverage 92%, deployments in 2 weeks, bugs reduced 88%",
      icon: Code,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      year: "2023",
      featured: true,
      link: "/ApexDesignPatternsCaseStudyPage"
    },
    {
      id: "integration-architecture",
      title: "Real-Time Integration Platform for Global Manufacturer",
      client: "Global Manufacturing Conglomerate",
      industry: "Manufacturing",
      category: "Integration Architecture",
      challenge: "50+ point-to-point integrations, 25 failures/month, minutes-hours latency",
      impact: "99.99% uptime, <2 second latency, integration time reduced 80%",
      icon: Network,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      year: "2024",
      featured: true,
      link: "/IntegrationArchitectureCaseStudyPage"
    },
    {
      id: "security",
      title: "Enterprise Security Framework for Financial Services",
      client: "Global Financial Services Firm",
      industry: "Financial Services",
      category: "Security & Compliance",
      challenge: "25+ critical vulnerabilities, 40% of users without MFA, $50M+ fine risk",
      impact: "Zero vulnerabilities, 100% MFA adoption, clean audit with zero findings",
      icon: Shield,
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-50",
      year: "2024",
      featured: true,
      link: "/SecurityCaseStudyPage"
    },
    {
      id: "orgRestructuringCase",
      title: "Multi-Org Consolidation After 3 Major Acquisitions",
      client: "Global Retail Group",
      industry: "Retail",
      category: "Org Restructuring",
      challenge: "5 disconnected orgs, $2.2M license cost, 45% duplicate records",
      impact: "License costs reduced 57%, duplicates below 2%, unified operations",
      icon: Layers,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      year: "2023",
      featured: true,
      link: "/OrgRestructuringCaseStudyPage"
    }
  ];

  const categories = [...new Set(caseStudies.map(c => c.category))];
  const industries = [...new Set(caseStudies.map(c => c.industry))];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="case-studies" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <rect x="10" y="10" width="40" height="40" stroke="white" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#case-studies)" />
          </svg>
        </div>

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Real Results from <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Real Enterprises</span>
            </h1>
            <p className="text-xl text-gray-300">
              Anonymized success stories based on actual client engagements across industries and technical domains. Each case study demonstrates how I've helped enterprises overcome complex Salesforce challenges and deliver measurable business value.
            </p>
          </motion.div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-sm text-gray-400">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">11</div>
              <div className="text-sm text-gray-400">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm text-gray-400">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white py-8 border-b border-gray-200 sticky top-16 z-30">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-700">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-gray-900 text-white text-sm rounded-full hover:bg-gray-800 transition-colors">
                All Case Studies
              </button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors">
                Industry
              </button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors">
                Technical
              </button>
            </div>
            <div className="md:ml-auto flex items-center gap-2">
              <span className="text-sm text-gray-500">Showing {caseStudies.length} case studies</span>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Case Studies Section */}
      <section className="bg-white py-12">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Building2 className="w-6 h-6 text-blue-600" />
            Industry Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.slice(0, 6).map((study, index) => {
              const Icon = study.icon;
              return (
                <motion.div
key={study.id}
initial={{ opacity:0, y:20 }}
animate={{ opacity:1, y:0 }}
transition={{ delay:index*0.1 }}
>

<Link
to={study.link}
className="block group h-full"
>

<div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all h-full flex flex-col">

<div className="flex items-start justify-between mb-4">
<div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center`}>
<Icon className="w-6 h-6 text-white"/>
</div>

<span className="text-xs text-gray-400">
{study.year}
</span>

</div>

<div className="flex flex-wrap gap-2 mb-3">

<span className={`text-xs font-medium px-2 py-1 rounded-full ${study.bgColor} text-gray-700`}>
{study.category}
</span>

<span className="text-xs text-gray-500 px-2 py-1">
{study.industry}
</span>

</div>

<h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
{study.title}
</h3>

<p className="text-sm text-gray-500 mb-3">
{study.client}
</p>

<p className="text-sm text-gray-600 mb-4 line-clamp-2">
<span className="font-medium">Challenge:</span>
{study.challenge}
</p>

<div className="mt-auto">

<div className="bg-green-50 rounded-lg p-3">

<p className="text-sm font-medium text-green-700 line-clamp-2">

<span className="font-semibold">Impact:</span>
{study.impact}

</p>

</div>

</div>

<div className="mt-4 flex items-center text-purple-600 font-medium text-sm group-hover:gap-2 transition-all">

Read Full Case Study

<ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"/>

</div>

</div>

</Link>

</motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Case Studies Section */}
      <section className="bg-gray-50 py-12">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Database className="w-6 h-6 text-purple-600" />
            Technical Architecture Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.slice(6, 11).map((study, index) => {
              const Icon = study.icon;
              return (
                <motion.div
key={study.id}
initial={{ opacity:0, y:20 }}
animate={{ opacity:1, y:0 }}
transition={{ delay:index*0.1 }}
>

<Link
to={study.link}
className="block group h-full"
>

<div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all h-full flex flex-col">

<div className="flex items-start justify-between mb-4">
<div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center`}>
<Icon className="w-6 h-6 text-white"/>
</div>

<span className="text-xs text-gray-400">
{study.year}
</span>

</div>

<div className="flex flex-wrap gap-2 mb-3">

<span className={`text-xs font-medium px-2 py-1 rounded-full ${study.bgColor} text-gray-700`}>
{study.category}
</span>

<span className="text-xs text-gray-500 px-2 py-1">
{study.industry}
</span>

</div>

<h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
{study.title}
</h3>

<p className="text-sm text-gray-500 mb-3">
{study.client}
</p>

<p className="text-sm text-gray-600 mb-4 line-clamp-2">
<span className="font-medium">Challenge:</span>
{study.challenge}
</p>

<div className="mt-auto">

<div className="bg-green-50 rounded-lg p-3">

<p className="text-sm font-medium text-green-700 line-clamp-2">

<span className="font-semibold">Impact:</span>
{study.impact}

</p>

</div>

</div>

<div className="mt-4 flex items-center text-purple-600 font-medium text-sm group-hover:gap-2 transition-all">

Read Full Case Study

<ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"/>

</div>

</div>

</Link>

</motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* By Category Grid */}
      <section className="bg-white py-12">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl text-center transition-colors"
              >
                <span className="text-sm font-medium text-gray-700">{category}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics Summary */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Cumulative Impact Across All Case Studies
            </h2>
            <p className="text-blue-100">
              Real results from real engagements across industries and technical domains
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "$15M+", label: "Client Savings" },
              { value: "90%", label: "Avg Performance Gain" },
              { value: "100%", label: "Compliance Success" },
              { value: "50+", label: "Enterprise Clients" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="container-wide text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
            Ready to create your own success story?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help you overcome your Salesforce challenges and deliver measurable results, just like the clients in these case studies.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-full transition-all transform hover:scale-105"
          >
            Schedule a Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudiesPage;