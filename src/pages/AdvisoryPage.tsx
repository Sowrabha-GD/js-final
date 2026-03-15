import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Compass, PenTool, Rocket, TrendingUp, Search, LifeBuoy } from "lucide-react";
import Layout from "@/components/Layout";

import type { LucideIcon } from "lucide-react";

export interface AdvisoryOffering {
  id: string;
  icon: LucideIcon;
  title: string;
  what: string;
  who: string;
  details: string[];
  approach: string;
}

export const offerings: AdvisoryOffering[] = [
  {
    id: "strategy",
    icon: Compass,
    title: "Strategy & Roadmapping",
    what: "Aligning Salesforce investments with business goals through clear, prioritized roadmaps.",
    who: "CTOs, VPs of Engineering, and Salesforce program leads planning multi-year platform evolution.",
    details: [
      "Current-state assessment and gap analysis",
      "Multi-year platform roadmap creation",
      "Investment prioritization and phasing",
      "Stakeholder alignment workshops",
      "Technology stack recommendations",
    ],
    approach: "I work closely with leadership teams to understand business objectives, assess the current Salesforce landscape, and build a clear, actionable roadmap. The focus is always on outcomes — not technology for technology's sake.",
  },
  {
    id: "architecture",
    icon: PenTool,
    title: "Architecture & Design",
    what: "Designing scalable, maintainable solutions across data models, integrations, and security.",
    who: "Teams starting new builds or needing to refactor existing implementations.",
    details: [
      "Data model design and optimization",
      "Integration architecture and API design",
      "Security model and access control design",
      "Multi-cloud architecture planning",
      "Technical design documentation",
    ],
    approach: "Every architecture decision has trade-offs. I help teams understand those trade-offs clearly, document decisions, and build systems that are operable long after the initial build.",
  },
  {
    id: "implementations",
    icon: Rocket,
    title: "New Implementations",
    what: "Guiding greenfield Salesforce implementations from design through delivery.",
    who: "Organizations deploying Salesforce for the first time or expanding to new clouds.",
    details: [
      "Requirements analysis and solution design",
      "Implementation planning and team structure",
      "Technical leadership through build phases",
      "Quality assurance and go-live readiness",
      "Post-launch stabilization support",
    ],
    approach: "New implementations succeed or fail based on early decisions. I bring architectural rigor from day one — ensuring the foundation supports everything you'll need to build later.",
  },
  {
    id: "build",
    icon: TrendingUp,
    title: "Build & Scale",
    what: "Helping engineering teams build faster while maintaining quality and governance.",
    who: "Growing teams that need architectural guardrails and best practice frameworks.",
    details: [
      "Development standards and governance frameworks",
      "Code review processes and quality gates",
      "CI/CD pipeline design for Salesforce",
      "Team structure and capability building",
      "Performance optimization at scale",
    ],
    approach: "Scaling isn't just about adding people. It's about establishing patterns, automating quality, and building a culture where every developer ships with confidence.",
  },
  {
    id: "audits",
    icon: Search,
    title: "Audits & Health Checks",
    what: "Comprehensive technical reviews of existing Salesforce implementations.",
    who: "Organizations experiencing performance issues, tech debt, or preparing for major changes.",
    details: [
      "Architecture and code quality assessment",
      "Security and compliance review",
      "Performance analysis and recommendations",
      "Technical debt inventory and prioritization",
      "Actionable remediation roadmap",
    ],
    approach: "A health check isn't about finding faults — it's about understanding risk and creating a path forward. I deliver clear, prioritized findings with practical recommendations.",
  },
  {
    id: "support",
    icon: LifeBuoy,
    title: "Support & Stabilization",
    what: "Ongoing architectural guidance and technical support for production systems.",
    who: "Teams that need a trusted technical advisor without a full-time hire.",
    details: [
      "On-call architectural guidance",
      "Incident review and root cause analysis",
      "Change advisory and risk assessment",
      "Vendor evaluation support",
      "Quarterly architecture reviews",
    ],
    approach: "Not every team needs a full-time architect — but every team benefits from one. I provide ongoing, fractional support to keep your platform healthy and your team unblocked.",
  },
];

const AdvisoryPage = () => {
  return (
    <Layout>
      <div
  className="w-full px-12 py-16"
  style={{
    background: "linear-gradient(135deg, #0f2d6b 0%, #1a4fba 40%, #2c7be5 70%, #3b9ef0 100%)",
  }}
>
  <span
    className="inline-block text-xs font-bold tracking-widest uppercase text-white mb-4 px-4 py-1.5 rounded-full border border-white/25"
    style={{ background: "rgba(255,255,255,0.15)" }}
  >
    Advisory 
  </span>
  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
    Architecture & Advisory
  </h1>
  <p className="text-white/80 text-base max-w-xl leading-relaxed"> 
    I work with teams to design, build, and scale Salesforce solutions with confidence. No fluff — just deep technical expertise applied to real problems.
  </p>
</div>
  
<div className="container-wide pt-8 pb-12 px-8"></div>
     
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {offerings.map((offering, i) => (
            <motion.div
              key={offering.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                to={`/advisory/${offering.id}`}
                className="block group bg-card rounded-xl border border-border p-7 card-elevated h-full"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <offering.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                  {offering.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{offering.what}</p>
                <p className="text-xs text-muted-foreground/70 leading-relaxed mb-4">
                  <span className="font-medium text-muted-foreground">For:</span> {offering.who}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      
    </Layout>
  );
};

export default AdvisoryPage;
